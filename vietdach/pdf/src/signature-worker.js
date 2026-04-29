self.onmessage = (event) => {
  const { id, width, height, buffer, options } = event.data;
  try {
    const input = new Uint8ClampedArray(buffer);
    const result = extractSignature(input, width, height, options || {});
    self.postMessage(
      {
        id,
        width,
        height,
        buffer: result.output.buffer,
        stats: result.stats,
      },
      [result.output.buffer],
    );
  } catch (error) {
    self.postMessage({ id, error: error.message || String(error) });
  }
};

function extractSignature(input, width, height, options) {
  const pixelCount = width * height;
  const gray = new Float32Array(pixelCount);
  const smoothGray = new Float32Array(pixelCount);
  const alpha = new Uint8ClampedArray(pixelCount);
  const output = new Uint8ClampedArray(pixelCount * 4);

  for (let i = 0, p = 0; i < pixelCount; i++, p += 4) {
    const r = input[p];
    const g = input[p + 1];
    const b = input[p + 2];
    gray[i] = 0.299 * r + 0.587 * g + 0.114 * b;
  }

  const denoise = clampInt(options.denoise ?? 1, 0, 3);
  if (denoise > 0) {
    boxBlurGray(gray, smoothGray, width, height, denoise);
  } else {
    smoothGray.set(gray);
  }

  const localRadius = clampInt(Math.round(Math.min(width, height) / 34), 18, 92);
  const integralGray = buildIntegral(smoothGray, width, height);
  const integralR = buildIntegralChannel(input, width, height, 0);
  const integralG = buildIntegralChannel(input, width, height, 1);
  const integralB = buildIntegralChannel(input, width, height, 2);
  const baseThreshold = Number(options.threshold ?? 18);
  const backgroundRemoval = Number(options.backgroundRemoval ?? 4);
  const threshold = baseThreshold + backgroundRemoval * 1.4 + (options.strongBackground ? 7 : 0);
  const feather = options.strongBackground ? 11 : 18;
  let inkPixels = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      const bg = localMean(integralGray, width, height, x, y, localRadius);
      const localDiff = bg - smoothGray[idx];
      const p = idx * 4;
      const sat = saturation(input[p], input[p + 1], input[p + 2]);
      const colorContrast = sat > 0.18 ? localDiff * (1 + sat * 0.42) : localDiff;
      const absoluteInk = smoothGray[idx] < 82 && localDiff > 2;
      let a = ((colorContrast - threshold) / feather) * 255;

      if (absoluteInk) {
        a = Math.max(a, 190);
      }

      if (backgroundRemoval > 6) {
        a -= (backgroundRemoval - 6) * 8;
      }

      alpha[idx] = clampByte(a);
    }
  }

  removeCameraSpeckles(alpha, width, height, options.strongBackground ? 2 : 1);
  if (options.bold) {
    thickenAlpha(alpha, width, height);
  }
  smoothAlphaEdges(alpha, width, height, options.strongBackground ? 1 : 2);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      const p = idx * 4;
      let a = alpha[idx];

      if (a < 8) {
        output[p] = 0;
        output[p + 1] = 0;
        output[p + 2] = 0;
        output[p + 3] = 0;
        continue;
      }

      const bgR = localMean(integralR, width, height, x, y, localRadius);
      const bgG = localMean(integralG, width, height, x, y, localRadius);
      const bgB = localMean(integralB, width, height, x, y, localRadius);
      const alpha01 = Math.max(a / 255, 0.28);
      let r = unblend(input[p], bgR, alpha01);
      let g = unblend(input[p + 1], bgG, alpha01);
      let b = unblend(input[p + 2], bgB, alpha01);

      if (options.bold) {
        r *= 0.88;
        g *= 0.88;
        b *= 0.88;
      }

      output[p] = clampByte(r);
      output[p + 1] = clampByte(g);
      output[p + 2] = clampByte(b);
      output[p + 3] = a;
      if (a > 24) inkPixels++;
    }
  }

  return {
    output,
    stats: {
      inkPercent: Math.round((inkPixels / pixelCount) * 1000) / 10,
      radius: localRadius,
    },
  };
}

function buildIntegral(values, width, height) {
  const integral = new Float32Array((width + 1) * (height + 1));
  for (let y = 1; y <= height; y++) {
    let rowSum = 0;
    for (let x = 1; x <= width; x++) {
      rowSum += values[(y - 1) * width + (x - 1)];
      integral[y * (width + 1) + x] = integral[(y - 1) * (width + 1) + x] + rowSum;
    }
  }
  return integral;
}

function buildIntegralChannel(input, width, height, channel) {
  const integral = new Float32Array((width + 1) * (height + 1));
  for (let y = 1; y <= height; y++) {
    let rowSum = 0;
    for (let x = 1; x <= width; x++) {
      rowSum += input[((y - 1) * width + (x - 1)) * 4 + channel];
      integral[y * (width + 1) + x] = integral[(y - 1) * (width + 1) + x] + rowSum;
    }
  }
  return integral;
}

function localMean(integral, width, height, x, y, radius) {
  const x1 = Math.max(0, x - radius);
  const y1 = Math.max(0, y - radius);
  const x2 = Math.min(width - 1, x + radius);
  const y2 = Math.min(height - 1, y + radius);
  const stride = width + 1;
  const ax = x1;
  const ay = y1;
  const bx = x2 + 1;
  const by = y2 + 1;
  const sum = integral[by * stride + bx] - integral[ay * stride + bx] - integral[by * stride + ax] + integral[ay * stride + ax];
  return sum / ((x2 - x1 + 1) * (y2 - y1 + 1));
}

function boxBlurGray(source, target, width, height, radius) {
  const temp = new Float32Array(source.length);
  const diameter = radius * 2 + 1;

  for (let y = 0; y < height; y++) {
    let sum = 0;
    for (let x = -radius; x <= radius; x++) {
      sum += source[y * width + clampInt(x, 0, width - 1)];
    }
    for (let x = 0; x < width; x++) {
      temp[y * width + x] = sum / diameter;
      const removeX = clampInt(x - radius, 0, width - 1);
      const addX = clampInt(x + radius + 1, 0, width - 1);
      sum += source[y * width + addX] - source[y * width + removeX];
    }
  }

  for (let x = 0; x < width; x++) {
    let sum = 0;
    for (let y = -radius; y <= radius; y++) {
      sum += temp[clampInt(y, 0, height - 1) * width + x];
    }
    for (let y = 0; y < height; y++) {
      target[y * width + x] = sum / diameter;
      const removeY = clampInt(y - radius, 0, height - 1);
      const addY = clampInt(y + radius + 1, 0, height - 1);
      sum += temp[addY * width + x] - temp[removeY * width + x];
    }
  }
}

function removeCameraSpeckles(alpha, width, height, passes) {
  const copy = new Uint8ClampedArray(alpha.length);
  for (let pass = 0; pass < passes; pass++) {
    copy.set(alpha);
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        if (copy[idx] < 42) {
          alpha[idx] = 0;
          continue;
        }

        let neighbors = 0;
        for (let yy = -1; yy <= 1; yy++) {
          for (let xx = -1; xx <= 1; xx++) {
            if (xx === 0 && yy === 0) continue;
            if (copy[(y + yy) * width + x + xx] > 28) neighbors++;
          }
        }

        if (neighbors <= 1 && copy[idx] < 150) {
          alpha[idx] = 0;
        }
      }
    }
  }
}

function thickenAlpha(alpha, width, height) {
  const copy = new Uint8ClampedArray(alpha);
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const idx = y * width + x;
      let max = copy[idx];
      for (let yy = -1; yy <= 1; yy++) {
        for (let xx = -1; xx <= 1; xx++) {
          max = Math.max(max, copy[(y + yy) * width + x + xx] - 42);
        }
      }
      alpha[idx] = Math.max(alpha[idx], max);
    }
  }
}

function smoothAlphaEdges(alpha, width, height, passes) {
  const copy = new Uint8ClampedArray(alpha.length);
  for (let pass = 0; pass < passes; pass++) {
    copy.set(alpha);
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const center = copy[idx];
        let min = center;
        let max = center;
        let weighted = center * 4;
        let weight = 4;

        for (let yy = -1; yy <= 1; yy++) {
          for (let xx = -1; xx <= 1; xx++) {
            if (xx === 0 && yy === 0) continue;
            const value = copy[(y + yy) * width + x + xx];
            const w = Math.abs(xx) + Math.abs(yy) === 1 ? 2 : 1;
            weighted += value * w;
            weight += w;
            min = Math.min(min, value);
            max = Math.max(max, value);
          }
        }

        if (max - min > 36 && center > 0 && center < 250) {
          const blended = weighted / weight;
          alpha[idx] = clampByte(center * 0.58 + blended * 0.42);
        }
      }
    }
  }
}

function saturation(r, g, b) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  return max === 0 ? 0 : (max - min) / max;
}

function unblend(value, background, alpha) {
  return (value - background * (1 - alpha)) / alpha;
}

function clampByte(value) {
  if (value <= 0 || Number.isNaN(value)) return 0;
  if (value >= 255) return 255;
  return value;
}

function clampInt(value, min, max) {
  return Math.max(min, Math.min(max, value | 0));
}
