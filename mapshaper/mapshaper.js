(function () {
  var VERSION = "0.5.20";


  var utils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get default () { return utils; },
    get getUniqueName () { return getUniqueName; },
    get isFunction () { return isFunction; },
    get isObject () { return isObject; },
    get clamp () { return clamp; },
    get isArray () { return isArray; },
    get isNumber () { return isNumber; },
    get isInteger () { return isInteger; },
    get isString () { return isString; },
    get isBoolean () { return isBoolean; },
    get toArray () { return toArray; },
    get isArrayLike () { return isArrayLike; },
    get addslashes () { return addslashes; },
    get regexEscape () { return regexEscape; },
    get htmlEscape () { return htmlEscape; },
    get defaults () { return defaults; },
    get extend () { return extend; },
    get inherit () { return inherit; },
    get reduceAsync () { return reduceAsync; },
    get merge () { return merge; },
    get difference () { return difference; },
    get indexOf () { return indexOf; },
    get contains () { return contains; },
    get some () { return some; },
    get every () { return every; },
    get find () { return find; },
    get range () { return range; },
    get repeat () { return repeat; },
    get sum () { return sum; },
    get getArrayBounds () { return getArrayBounds; },
    get uniq () { return uniq; },
    get pluck () { return pluck; },
    get countValues () { return countValues; },
    get indexOn () { return indexOn; },
    get groupBy () { return groupBy; },
    get arrayToIndex () { return arrayToIndex; },
    get forEach () { return forEach; },
    get forEachProperty () { return forEachProperty; },
    get initializeArray () { return initializeArray; },
    get replaceArray () { return replaceArray; },
    get repeatString () { return repeatString; },
    get pluralSuffix () { return pluralSuffix; },
    get endsWith () { return endsWith; },
    get lpad () { return lpad; },
    get rpad () { return rpad; },
    get trim () { return trim; },
    get ltrim () { return ltrim; },
    get rtrim () { return rtrim; },
    get addThousandsSep () { return addThousandsSep; },
    get numToStr () { return numToStr; },
    get formatNumber () { return formatNumber; },
    get sortOn () { return sortOn; },
    get genericSort () { return genericSort; },
    get getSortedIds () { return getSortedIds; },
    get sortArrayIndex () { return sortArrayIndex; },
    get reorderArray () { return reorderArray; },
    get getKeyComparator () { return getKeyComparator; },
    get getGenericComparator () { return getGenericComparator; },
    get quicksort () { return quicksort; },
    get quicksortPartition () { return quicksortPartition; },
    get findRankByValue () { return findRankByValue; },
    get findValueByPct () { return findValueByPct; },
    get findValueByRank () { return findValueByRank; },
    get findMedian () { return findMedian; },
    get mean () { return mean; },
    get format () { return format; },
    get formatter () { return formatter; },
    get wildcardToRegExp () { return wildcardToRegExp; },
    get createBuffer () { return createBuffer; },
    get expandoBuffer () { return expandoBuffer; },
    get copyElements () { return copyElements; },
    get extendBuffer () { return extendBuffer; },
    get mergeNames () { return mergeNames; },
    get findStringPrefix () { return findStringPrefix; },
    get isFiniteNumber () { return isFiniteNumber; },
    get isNonNegNumber () { return isNonNegNumber; },
    get parsePercent () { return parsePercent; },
    get formatVersionedName () { return formatVersionedName; },
    get uniqifyNames () { return uniqifyNames; },
    get cleanNumericString () { return cleanNumericString; },
    get parseString () { return parseString; },
    get parseNumber () { return parseNumber; },
    get trimQuotes () { return trimQuotes; }
  });

  var Buffer = require('buffer').Buffer; // works with browserify

  var uniqCount = 0;
  function getUniqueName(prefix) {
    return (prefix || "__id_") + (++uniqCount);
  }

  function isFunction(obj) {
    return typeof obj == 'function';
  }

  function isObject(obj) {
    return obj === Object(obj); // via underscore
  }

  function clamp(val, min, max) {
    return val < min ? min : (val > max ? max : val);
  }

  function isArray(obj) {
    return Array.isArray(obj);
  }

  // NaN -> true
  function isNumber(obj) {
    // return toString.call(obj) == '[object Number]'; // ie8 breaks?
    return obj != null && obj.constructor == Number;
  }

  function isInteger(obj) {
    return isNumber(obj) && ((obj | 0) === obj);
  }

  function isString(obj) {
    return obj != null && obj.toString === String.prototype.toString;
    // TODO: replace w/ something better.
  }

  function isBoolean(obj) {
    return obj === true || obj === false;
  }

  // Convert an array-like object to an Array, or make a copy if @obj is an Array
  function toArray(obj) {
    var arr;
    if (!isArrayLike(obj)) error("toArray() requires an array-like object");
    try {
      arr = Array.prototype.slice.call(obj, 0); // breaks in ie8
    } catch(e) {
      // support ie8
      arr = [];
      for (var i=0, n=obj.length; i<n; i++) {
        arr[i] = obj[i];
      }
    }
    return arr;
  }

  // Array like: has length property, is numerically indexed and mutable.
  // TODO: try to detect objects with length property but no indexed data elements
  function isArrayLike(obj) {
    if (!obj) return false;
    if (isArray(obj)) return true;
    if (isString(obj)) return false;
    if (obj.length === 0) return true;
    if (obj.length > 0) return true;
    return false;
  }

  // See https://raw.github.com/kvz/phpjs/master/functions/strings/addslashes.js
  function addslashes(str) {
    return (str + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
  }

  // Escape a literal string to use in a regexp.
  // Ref.: http://simonwillison.net/2006/Jan/20/escape/
  function regexEscape(str) {
    return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  }


  // See https://github.com/janl/mustache.js/blob/master/mustache.js
  var entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;'
  };
  function htmlEscape(s) {
    return String(s).replace(/[&<>"'\/]/g, function(s) {
      return entityMap[s];
    });
  }

  function defaults(dest) {
    for (var i=1, n=arguments.length; i<n; i++) {
      var src = arguments[i] || {};
      for (var key in src) {
        if (key in dest === false && src.hasOwnProperty(key)) {
          dest[key] = src[key];
        }
      }
    }
    return dest;
  }

  function extend(o) {
    var dest = o || {},
        n = arguments.length,
        key, i, src;
    for (i=1; i<n; i++) {
      src = arguments[i] || {};
      for (key in src) {
        if (src.hasOwnProperty(key)) {
          dest[key] = src[key];
        }
      }
    }
    return dest;
  }

  // Pseudoclassical inheritance
  //
  // Inherit from a Parent function:
  //    inherit(Child, Parent);
  // Call parent's constructor (inside child constructor):
  //    this.__super__([args...]);
  function inherit(targ, src) {
    var f = function() {
      if (this.__super__ == f) {
        // add __super__ of parent to front of lookup chain
        // so parent class constructor can call its parent using this.__super__
        this.__super__ = src.prototype.__super__;
        // call parent constructor function. this.__super__ now points to parent-of-parent
        src.apply(this, arguments);
        // remove temp __super__, expose targ.prototype.__super__ again
        delete this.__super__;
      }
    };

    f.prototype = src.prototype || src; // added || src to allow inheriting from objects as well as functions
    // Extend targ prototype instead of wiping it out --
    //   in case inherit() is called after targ.prototype = {stuff}; statement
    targ.prototype = extend(new f(), targ.prototype); //
    targ.prototype.constructor = targ;
    targ.prototype.__super__ = f;
  }


  // Call @iter on each member of an array (similar to Array#reduce(iter))
  //    iter: function(memo, item, callback)
  // Call @done when all members have been processed or if an error occurs
  //    done: function(err, memo)
  // @memo: Initial value
  //
  function reduceAsync(arr, memo, iter, done) {
    var call = typeof setImmediate == 'undefined' ? setTimeout : setImmediate;
    var i=0;
    next(null, memo);

    function next(err, memo) {
      // Detach next operation from call stack to prevent overflow
      // Don't use setTimeout(, 0) if setImmediate is available
      // (setTimeout() can introduce a long delay if previous operation was slow,
      //    as of Node 0.10.32 -- a bug?)
      if (err) {
        return done(err, null);
      }
      call(function() {
        if (i < arr.length === false) {
          done(null, memo);
        } else {
          iter(memo, arr[i++], next);
        }
      }, 0);
    }
  }


  // Append elements of @src array to @dest array
  function merge(dest, src) {
    if (!isArray(dest) || !isArray(src)) {
      error("Usage: merge(destArray, srcArray);");
    }
    for (var i=0, n=src.length; i<n; i++) {
      dest.push(src[i]);
    }
    return dest;
  }

  // Returns elements in arr and not in other
  // (similar to underscore diff)
  function difference(arr, other) {
    var index = arrayToIndex(other);
    return arr.filter(function(el) {
      return !Object.prototype.hasOwnProperty.call(index, el);
    });
  }

  function indexOf(arr, item) {
    var nan = item !== item;
    for (var i = 0, len = arr.length || 0; i < len; i++) {
      if (arr[i] === item) return i;
      if (nan && arr[i] !== arr[i]) return i;
    }
    return -1;
  }

  // Test a string or array-like object for existence of substring or element
  function contains(container, item) {
    if (isString(container)) {
      return container.indexOf(item) != -1;
    }
    else if (isArrayLike(container)) {
      return indexOf(container, item) != -1;
    }
    error("Expected Array or String argument");
  }

  function some(arr, test) {
    return arr.reduce(function(val, item) {
      return val || test(item); // TODO: short-circuit?
    }, false);
  }

  function every(arr, test) {
    return arr.reduce(function(val, item) {
      return val && test(item);
    }, true);
  }

  function find(arr, test, ctx) {
    var matches = arr.filter(test, ctx);
    return matches.length === 0 ? null : matches[0];
  }

  function range(len, start, inc) {
    var arr = [],
        v = start === void 0 ? 0 : start,
        i = inc === void 0 ? 1 : inc;
    while(len--) {
      arr.push(v);
      v += i;
    }
    return arr;
  }

  function repeat(times, func) {
    var values = [],
        val;
    for (var i=0; i<times; i++) {
      val = func(i);
      if (val !== void 0) {
        values[i] = val;
      }
    }
    return values.length > 0 ? values : void 0;
  }

  // Calc sum, skip falsy and NaN values
  // Assumes: no other non-numeric objects in array
  //
  function sum(arr, info) {
    if (!isArrayLike(arr)) error ("sum() expects an array, received:", arr);
    var tot = 0,
        nan = 0,
        val;
    for (var i=0, n=arr.length; i<n; i++) {
      val = arr[i];
      if (val) {
        tot += val;
      } else if (isNaN(val)) {
        nan++;
      }
    }
    if (info) {
      info.nan = nan;
    }
    return tot;
  }

  // Calculate min and max values of an array, ignoring NaN values
  function getArrayBounds(arr) {
    var min = Infinity,
      max = -Infinity,
      nan = 0, val;
    for (var i=0, len=arr.length; i<len; i++) {
      val = arr[i];
      if (val !== val) nan++;
      if (val < min) min = val;
      if (val > max) max = val;
    }
    return {
      min: min,
      max: max,
      nan: nan
    };
  }

  function uniq(src) {
    var index = {};
    return src.reduce(function(memo, el) {
      if (el in index === false) {
        index[el] = true;
        memo.push(el);
      }
      return memo;
    }, []);
  }

  function pluck(arr, key) {
    return arr.map(function(obj) {
      return obj[key];
    });
  }

  function countValues(arr) {
    return arr.reduce(function(memo, val) {
      memo[val] = (val in memo) ? memo[val] + 1 : 1;
      return memo;
    }, {});
  }

  function indexOn(arr, k) {
    return arr.reduce(function(index, o) {
      index[o[k]] = o;
      return index;
    }, {});
  }

  function groupBy(arr, k) {
    return arr.reduce(function(index, o) {
      var keyval = o[k];
      if (keyval in index) {
        index[keyval].push(o);
      } else {
        index[keyval] = [o];
      }
      return index;
    }, {});
  }

  function arrayToIndex(arr, val) {
    var init = arguments.length > 1;
    return arr.reduce(function(index, key) {
      index[key] = init ? val : true;
      return index;
    }, {});
  }

  // Support for iterating over array-like objects, like typed arrays
  function forEach(arr, func, ctx) {
    if (!isArrayLike(arr)) {
      throw new Error("#forEach() takes an array-like argument. " + arr);
    }
    for (var i=0, n=arr.length; i < n; i++) {
      func.call(ctx, arr[i], i);
    }
  }

  function forEachProperty(o, func, ctx) {
    Object.keys(o).forEach(function(key) {
      func.call(ctx, o[key], key);
    });
  }

  function initializeArray(arr, init) {
    for (var i=0, len=arr.length; i<len; i++) {
      arr[i] = init;
    }
    return arr;
  }

  function replaceArray(arr, arr2) {
    arr.splice(0, arr.length);
    for (var i=0, n=arr2.length; i<n; i++) {
      arr.push(arr2[i]);
    }
  }

  function repeatString(src, n) {
    var str = "";
    for (var i=0; i<n; i++)
      str += src;
    return str;
  }

  function pluralSuffix(count) {
    return count != 1 ? 's' : '';
  }

  function endsWith(str, ending) {
      return str.indexOf(ending, str.length - ending.length) !== -1;
  }

  function lpad(str, size, pad) {
    pad = pad || ' ';
    str = String(str);
    return repeatString(pad, size - str.length) + str;
  }

  function rpad(str, size, pad) {
    pad = pad || ' ';
    str = String(str);
    return str + repeatString(pad, size - str.length);
  }

  function trim(str) {
    return ltrim(rtrim(str));
  }

  var ltrimRxp = /^\s+/;
  function ltrim(str) {
    return str.replace(ltrimRxp, '');
  }

  var rtrimRxp = /\s+$/;
  function rtrim(str) {
    return str.replace(rtrimRxp, '');
  }

  function addThousandsSep(str) {
    var fmt = '',
        start = str[0] == '-' ? 1 : 0,
        dec = str.indexOf('.'),
        end = str.length,
        ins = (dec == -1 ? end : dec) - 3;
    while (ins > start) {
      fmt = ',' + str.substring(ins, end) + fmt;
      end = ins;
      ins -= 3;
    }
    return str.substring(0, end) + fmt;
  }

  function numToStr(num, decimals) {
    return decimals >= 0 ? num.toFixed(decimals) : String(num);
  }

  function formatNumber(num, decimals, nullStr, showPos) {
    var fmt;
    if (isNaN(num)) {
      fmt = nullStr || '-';
    } else {
      fmt = numToStr(num, decimals);
      fmt = addThousandsSep(fmt);
      if (showPos && parseFloat(fmt) > 0) {
        fmt = "+" + fmt;
      }
    }
    return fmt;
  }


  // Sort an array of objects based on one or more properties.
  // Usage: sortOn(array, key1, asc?[, key2, asc? ...])
  //
  function sortOn(arr) {
    var comparators = [];
    for (var i=1; i<arguments.length; i+=2) {
      comparators.push(getKeyComparator(arguments[i], arguments[i+1]));
    }
    arr.sort(function(a, b) {
      var cmp = 0,
          i = 0,
          n = comparators.length;
      while (i < n && cmp === 0) {
        cmp = comparators[i](a, b);
        i++;
      }
      return cmp;
    });
    return arr;
  }

  // Sort array of values that can be compared with < > operators (strings, numbers)
  // null, undefined and NaN are sorted to the end of the array
  //
  function genericSort(arr, asc) {
    var compare = getGenericComparator(asc);
    Array.prototype.sort.call(arr, compare);
    return arr;
  }

  function getSortedIds(arr, asc) {
    var ids = range(arr.length);
    sortArrayIndex(ids, arr, asc);
    return ids;
  }

  function sortArrayIndex(ids, arr, asc) {
    var compare = getGenericComparator(asc);
    ids.sort(function(i, j) {
      // added i, j comparison to guarantee that sort is stable
      var cmp = compare(arr[i], arr[j]);
      return cmp > 0 || cmp === 0 && i > j ? 1 : -1;
    });
  }

  function reorderArray(arr, idxs) {
    var len = idxs.length;
    var arr2 = [];
    for (var i=0; i<len; i++) {
      var idx = idxs[i];
      if (idx < 0 || idx >= len) error("Out-of-bounds array idx");
      arr2[i] = arr[idx];
    }
    replaceArray(arr, arr2);
  }

  function getKeyComparator(key, asc) {
    var compare = getGenericComparator(asc);
    return function(a, b) {
      return compare(a[key], b[key]);
    };
  }

  function getGenericComparator(asc) {
    asc = asc !== false;
    return function(a, b) {
      var retn = 0;
      if (b == null) {
        retn = a == null ? 0 : -1;
      } else if (a == null) {
        retn = 1;
      } else if (a < b) {
        retn = asc ? -1 : 1;
      } else if (a > b) {
        retn = asc ? 1 : -1;
      } else if (a !== a) {
        retn = 1;
      } else if (b !== b) {
        retn = -1;
      }
      return retn;
    };
  }


  // Generic in-place sort (null, NaN, undefined not handled)
  function quicksort(arr, asc) {
    quicksortPartition(arr, 0, arr.length-1);
    if (asc === false) Array.prototype.reverse.call(arr); // Works with typed arrays
    return arr;
  }

  // Moved out of quicksort() (saw >100% speedup in Chrome with deep recursion)
  function quicksortPartition (a, lo, hi) {
    var i = lo,
        j = hi,
        pivot, tmp;
    while (i < hi) {
      pivot = a[lo + hi >> 1]; // avoid n^2 performance on sorted arrays
      while (i <= j) {
        while (a[i] < pivot) i++;
        while (a[j] > pivot) j--;
        if (i <= j) {
          tmp = a[i];
          a[i] = a[j];
          a[j] = tmp;
          i++;
          j--;
        }
      }
      if (lo < j) quicksortPartition(a, lo, j);
      lo = i;
      j = hi;
    }
  }


  function findRankByValue(arr, value) {
    if (isNaN(value)) return arr.length;
    var rank = 1;
    for (var i=0, n=arr.length; i<n; i++) {
      if (value > arr[i]) rank++;
    }
    return rank;
  }

  function findValueByPct(arr, pct) {
    var rank = Math.ceil((1-pct) * (arr.length));
    return findValueByRank(arr, rank);
  }

  // See http://ndevilla.free.fr/median/median/src/wirth.c
  // Elements of @arr are reordered
  //
  function findValueByRank(arr, rank) {
    if (!arr.length || rank < 1 || rank > arr.length) error("[findValueByRank()] invalid input");

    rank = clamp(rank | 0, 1, arr.length);
    var k = rank - 1, // conv. rank to array index
        n = arr.length,
        l = 0,
        m = n - 1,
        i, j, val, tmp;

    while (l < m) {
      val = arr[k];
      i = l;
      j = m;
      do {
        while (arr[i] < val) {i++;}
        while (val < arr[j]) {j--;}
        if (i <= j) {
          tmp = arr[i];
          arr[i] = arr[j];
          arr[j] = tmp;
          i++;
          j--;
        }
      } while (i <= j);
      if (j < k) l = i;
      if (k < i) m = j;
    }
    return arr[k];
  }

  //
  //
  function findMedian(arr) {
    var n = arr.length,
        rank = Math.floor(n / 2) + 1,
        median = findValueByRank(arr, rank);
    if ((n & 1) == 0) {
      median = (median + findValueByRank(arr, rank - 1)) / 2;
    }
    return median;
  }


  function mean(arr) {
    var count = 0,
        avg = NaN,
        val;
    for (var i=0, n=arr.length; i<n; i++) {
      val = arr[i];
      if (isNaN(val)) continue;
      avg = ++count == 1 ? val : val / count + (count - 1) / count * avg;
    }
    return avg;
  }


  /*
  A simplified version of printf formatting
  Format codes: %[flags][width][.precision]type

  supported flags:
    +   add '+' before positive numbers
    0   left-pad with '0'
    '   Add thousands separator
  width: 1 to many
  precision: .(1 to many)
  type:
    s     string
    di    integers
    f     decimal numbers
    xX    hexidecimal (unsigned)
    %     literal '%'

  Examples:
    code    val    formatted
    %+d     1      '+1'
    %4i     32     '  32'
    %04i    32     '0032'
    %x      255    'ff'
    %.2f    0.125  '0.13'
    %'f     1000   '1,000'
  */

  // Usage: format(formatString, [values])
  // Tip: When reusing the same format many times, use formatter() for 5x - 10x better performance
  //
  function format(fmt) {
    var fn = formatter(fmt);
    var str = fn.apply(null, Array.prototype.slice.call(arguments, 1));
    return str;
  }

  function formatValue(val, matches) {
    var flags = matches[1];
    var padding = matches[2];
    var decimals = matches[3] ? parseInt(matches[3].substr(1)) : void 0;
    var type = matches[4];
    var isString = type == 's',
        isHex = type == 'x' || type == 'X',
        isInt = type == 'd' || type == 'i',
        isFloat = type == 'f',
        isNumber = !isString;

    var sign = "",
        padDigits = 0,
        isZero = false,
        isNeg = false;

    var str, padChar, padStr;
    if (isString) {
      str = String(val);
    }
    else if (isHex) {
      str = val.toString(16);
      if (type == 'X')
        str = str.toUpperCase();
    }
    else if (isNumber) {
      str = numToStr(val, isInt ? 0 : decimals);
      if (str[0] == '-') {
        isNeg = true;
        str = str.substr(1);
      }
      isZero = parseFloat(str) == 0;
      if (flags.indexOf("'") != -1 || flags.indexOf(',') != -1) {
        str = addThousandsSep(str);
      }
      if (!isZero) { // BUG: sign is added when num rounds to 0
        if (isNeg) {
          sign = "\u2212"; // U+2212
        } else if (flags.indexOf('+') != -1) {
          sign = '+';
        }
      }
    }

    if (padding) {
      var strLen = str.length + sign.length;
      var minWidth = parseInt(padding, 10);
      if (strLen < minWidth) {
        padDigits = minWidth - strLen;
        padChar = flags.indexOf('0') == -1 ? ' ' : '0';
        padStr = repeatString(padChar, padDigits);
      }
    }

    if (padDigits == 0) {
      str = sign + str;
    } else if (padChar == '0') {
      str = sign + padStr + str;
    } else {
      str = padStr + sign + str;
    }
    return str;
  }

  // Get a function for interpolating formatted values into a string.
  function formatter(fmt) {
    var codeRxp = /%([\',+0]*)([1-9]?)((?:\.[1-9])?)([sdifxX%])/g;
    var literals = [],
        formatCodes = [],
        startIdx = 0,
        prefix = "",
        matches = codeRxp.exec(fmt),
        literal;

    while (matches) {
      literal = fmt.substring(startIdx, codeRxp.lastIndex - matches[0].length);
      if (matches[0] == '%%') {
        prefix += literal + '%';
      } else {
        literals.push(prefix + literal);
        prefix = '';
        formatCodes.push(matches);
      }
      startIdx = codeRxp.lastIndex;
      matches = codeRxp.exec(fmt);
    }
    literals.push(prefix + fmt.substr(startIdx));

    return function() {
      var str = literals[0],
          n = arguments.length;
      if (n != formatCodes.length) {
        error("[format()] Data does not match format string; format:", fmt, "data:", arguments);
      }
      for (var i=0; i<n; i++) {
        str += formatValue(arguments[i], formatCodes[i]) + literals[i+1];
      }
      return str;
    };
  }

  function wildcardToRegExp(name) {
    var rxp = name.split('*').map(function(str) {
      return regexEscape(str);
    }).join('.*');
    return new RegExp('^' + rxp + '$');
  }

  function createBuffer(arg, arg2) {
    if (isInteger(arg)) {
      return Buffer.allocUnsafe ? Buffer.allocUnsafe(arg) : new Buffer(arg);
    } else {
      // check allocUnsafe to make sure Buffer.from() will accept strings (it didn't before Node v5.10)
      return Buffer.from && Buffer.allocUnsafe ? Buffer.from(arg, arg2) : new Buffer(arg, arg2);
    }
  }

  function expandoBuffer(constructor, rate) {
    var capacity = 0,
        k = rate >= 1 ? rate : 1.2,
        buf;
    return function(size) {
      if (size > capacity) {
        capacity = Math.ceil(size * k);
        buf = constructor ? new constructor(capacity) : createBuffer(capacity);
      }
      return buf;
    };
  }

  function copyElements(src, i, dest, j, n, rev) {
    if (src === dest && j > i) error ("copy error");
    var inc = 1,
        offs = 0;
    if (rev) {
      inc = -1;
      offs = n - 1;
    }
    for (var k=0; k<n; k++, offs += inc) {
      dest[k + j] = src[i + offs];
    }
  }

  function extendBuffer(src, newLen, copyLen) {
    var len = Math.max(src.length, newLen);
    var n = copyLen || src.length;
    var dest = new src.constructor(len);
    copyElements(src, 0, dest, 0, n);
    return dest;
  }

  function mergeNames(name1, name2) {
    var merged;
    if (name1 && name2) {
      merged = findStringPrefix(name1, name2).replace(/[-_]$/, '');
    }
    return merged || '';
  }

  function findStringPrefix(a, b) {
    var i = 0;
    for (var n=a.length; i<n; i++) {
      if (a[i] !== b[i]) break;
    }
    return a.substr(0, i);
  }

  // Similar to isFinite() but does not convert strings or other types
  function isFiniteNumber(val) {
    return val === 0 || !!val && val.constructor == Number && val !== Infinity && val !== -Infinity;
  }

  function isNonNegNumber(val) {
    return val === 0 || val > 0 && val.constructor == Number;
  }

  function parsePercent(o) {
    var str = String(o);
    var isPct = str.indexOf('%') > 0;
    var pct;
    if (isPct) {
      pct = Number(str.replace('%', '')) / 100;
    } else {
      pct = Number(str);
    }
    if (!(pct >= 0 && pct <= 1)) {
      stop(format("Invalid percentage: %s", str));
    }
    return pct;
  }

  function formatVersionedName(name, i) {
    var suffix = String(i);
    if (/[0-9]$/.test(name)) {
      suffix = '-' + suffix;
    }
    return name + suffix;
  }

  function uniqifyNames(names, formatter) {
    var counts = countValues(names),
        format = formatter || formatVersionedName,
        names2 = [];

    names.forEach(function(name) {
      var i = 0,
          candidate = name,
          versionedName;
      while (
          names2.indexOf(candidate) > -1 || // candidate name has already been used
          candidate == name && counts[candidate] > 1 || // duplicate unversioned names
          candidate != name && counts[candidate] > 0) { // versioned name is a preexisting name
        i++;
        versionedName = format(name, i);
        if (!versionedName || versionedName == candidate) {
          throw new Error("Naming error"); // catch buggy versioning function
        }
        candidate = versionedName;
      }
      names2.push(candidate);
    });
    return names2;
  }

  // Remove comma separators from strings
  // TODO: accept European-style numbers?
  function cleanNumericString(str) {
    return (str.indexOf(',') > 0) ? str.replace(/,([0-9]{3})/g, '$1') : str;
  }

  // Assume: @raw is string, undefined or null
  function parseString(raw) {
    return raw ? raw : "";
  }

  // Assume: @raw is string, undefined or null
  // Use null instead of NaN for unparsable values
  // (in part because if NaN is used, empty strings get converted to "NaN"
  // when re-exported).
  function parseNumber(raw) {
    var str = String(raw).trim();
    var parsed = str ? Number(cleanNumericString(str)) : NaN;
    return isNaN(parsed) ? null : parsed;
  }

  function trimQuotes(raw) {
    var len = raw.length, first, last;
    if (len >= 2) {
      first = raw.charAt(0);
      last = raw.charAt(len-1);
      if (first == '"' && last == '"' || first == "'" && last == "'") {
        return raw.substr(1, len-2);
      }
    }
    return raw;
  }

  var context = createContext(); // command context (persist for the current command cycle)

  function runningInBrowser() {
    return typeof window !== 'undefined' && typeof window.document !== 'undefined';
  }

  function getStateVar(key) {
    return context[key];
  }

  function setStateVar(key, val) {
    context[key] = val;
  }

  function createContext() {
    return {
      DEBUG: false,
      QUIET: false,
      VERBOSE: false,
      defs: {},
      input_files: []
    };
  }

  // Install a new set of context variables, clear them when an async callback is called.
  // @cb callback function to wrap
  // returns wrapped callback function
  function createAsyncContext(cb) {
    context = createContext();
    return function() {
      cb.apply(null, utils.toArray(arguments));
      // clear context after cb(), so output/errors can be handled in current context
      context = createContext();
    };
  }

  // Save the current context, restore it when an async callback is called
  // @cb callback function to wrap
  // returns wrapped callback function
  function preserveContext(cb) {
    var ctx = context;
    return function() {
      context = ctx;
      cb.apply(null, utils.toArray(arguments));
    };
  }

  var State = /*#__PURE__*/Object.freeze({
    __proto__: null,
    runningInBrowser: runningInBrowser,
    getStateVar: getStateVar,
    setStateVar: setStateVar,
    createAsyncContext: createAsyncContext,
    preserveContext: preserveContext
  });

  var LOGGING = false;
  var STDOUT = false; // use stdout for status messages

  // These three functions can be reset by GUI using setLoggingFunctions();
  var _error = function() {
    var msg = utils.toArray(arguments).join(' ');
    throw new Error(msg);
  };

  var _stop = function() {
    throw new UserError(formatLogArgs(arguments));
  };

  var _message = function() {
    logArgs(arguments);
  };

  function enableLogging() {
    LOGGING = true;
  }

  function loggingEnabled() {
    return !!LOGGING;
  }

  // Handle an unexpected condition (internal error)
  function error() {
    _error.apply(null, utils.toArray(arguments));
  }

  // Handle an error caused by invalid input or misuse of API
  function stop () {
    _stop.apply(null, utils.toArray(arguments));
  }

  // Print a status message
  function message() {
    _message.apply(null, messageArgs(arguments));
  }

  // A way for the GUI to replace the CLI logging functions
  function setLoggingFunctions(message, error, stop) {
    _message = message;
    _error = error;
    _stop = stop;
  }


  // print a message to stdout
  function print() {
    STDOUT = true; // tell logArgs() to print to stdout, not stderr
    message.apply(null, arguments);
    STDOUT = false;
  }

  function verbose() {
    if (getStateVar('VERBOSE')) {
      message.apply(null, messageArgs(arguments));
    }
  }

  function debug() {
    if (getStateVar('DEBUG')) {
      logArgs(arguments);
    }
  }

  function printError(err) {
    var msg;
    if (!LOGGING) return;
    if (utils.isString(err)) {
      err = new UserError(err);
    }
    if (err.name == 'UserError') {
      msg = err.message;
      if (!/Error/.test(msg)) {
        msg = "Error: " + msg;
      }
      console.error(messageArgs([msg]).join(' '));
      console.error("Run mapshaper -h to view help");
    } else {
      // not a user error (i.e. a bug in mapshaper)
      console.error(err);
      // throw err;
    }
  }

  function UserError(msg) {
    var err = new Error(msg);
    err.name = 'UserError';
    return err;
  }

  // Format an array of (preferably short) strings in columns for console logging.
  function formatStringsAsGrid(arr) {
    // TODO: variable column width
    var longest = arr.reduce(function(len, str) {
          return Math.max(len, str.length);
        }, 0),
        colWidth = longest + 2,
        perLine = Math.floor(80 / colWidth) || 1;
    return arr.reduce(function(memo, name, i) {
      var col = i % perLine;
      if (i > 0 && col === 0) memo += '\n';
      if (col < perLine - 1) { // right-pad all but rightmost column
        name = utils.rpad(name, colWidth - 2, ' ');
      }
      return memo +  '  ' + name;
    }, '');
  }

  // expose so GUI can use it
  function formatLogArgs(args) {
    return utils.toArray(args).join(' ');
  }

  function messageArgs(args) {
    var arr = utils.toArray(args);
    var cmd = getStateVar('current_command');
    if (cmd && cmd != 'help') {
      arr.unshift('[' + cmd + ']');
    }
    return arr;
  }

  function logArgs(args) {
    if (LOGGING && !getStateVar('QUIET') && utils.isArrayLike(args)) {
      (!STDOUT && console.error || console.log).call(console, formatLogArgs(args));
    }
  }

  var Logging = /*#__PURE__*/Object.freeze({
    __proto__: null,
    enableLogging: enableLogging,
    loggingEnabled: loggingEnabled,
    error: error,
    stop: stop,
    message: message,
    setLoggingFunctions: setLoggingFunctions,
    print: print,
    verbose: verbose,
    debug: debug,
    printError: printError,
    UserError: UserError,
    formatStringsAsGrid: formatStringsAsGrid,
    formatLogArgs: formatLogArgs,
    logArgs: logArgs
  });

  function Transform() {
    this.mx = this.my = 1;
    this.bx = this.by = 0;
  }

  Transform.prototype.isNull = function() {
    return !this.mx || !this.my || isNaN(this.bx) || isNaN(this.by);
  };

  Transform.prototype.invert = function() {
    var inv = new Transform();
    inv.mx = 1 / this.mx;
    inv.my = 1 / this.my;
    //inv.bx = -this.bx * inv.mx;
    //inv.by = -this.by * inv.my;
    inv.bx = -this.bx / this.mx;
    inv.by = -this.by / this.my;
    return inv;
  };


  Transform.prototype.transform = function(x, y, xy) {
    xy = xy || [];
    xy[0] = x * this.mx + this.bx;
    xy[1] = y * this.my + this.by;
    return xy;
  };

  Transform.prototype.toString = function() {
    return JSON.stringify(Object.assign({}, this));
  };

  function Bounds() {
    if (arguments.length > 0) {
      this.setBounds.apply(this, arguments);
    }
  }

  Bounds.prototype.toString = function() {
    return JSON.stringify({
      xmin: this.xmin,
      xmax: this.xmax,
      ymin: this.ymin,
      ymax: this.ymax
    });
  };

  Bounds.prototype.toArray = function() {
    return this.hasBounds() ? [this.xmin, this.ymin, this.xmax, this.ymax] : [];
  };

  Bounds.prototype.hasBounds = function() {
    return this.xmin <= this.xmax && this.ymin <= this.ymax;
  };

  Bounds.prototype.sameBounds =
  Bounds.prototype.equals = function(bb) {
    return bb && this.xmin === bb.xmin && this.xmax === bb.xmax &&
      this.ymin === bb.ymin && this.ymax === bb.ymax;
  };

  Bounds.prototype.width = function() {
    return (this.xmax - this.xmin) || 0;
  };

  Bounds.prototype.height = function() {
    return (this.ymax - this.ymin) || 0;
  };

  Bounds.prototype.area = function() {
    return this.width() * this.height() || 0;
  };

  Bounds.prototype.empty = function() {
    this.xmin = this.ymin = this.xmax = this.ymax = void 0;
    return this;
  };

  Bounds.prototype.setBounds = function(a, b, c, d) {
    if (arguments.length == 1) {
      // assume first arg is a Bounds or array
      if (utils.isArrayLike(a)) {
        b = a[1];
        c = a[2];
        d = a[3];
        a = a[0];
      } else {
        b = a.ymin;
        c = a.xmax;
        d = a.ymax;
        a = a.xmin;
      }
    }

    this.xmin = a;
    this.ymin = b;
    this.xmax = c;
    this.ymax = d;
    if (a > c || b > d) this.update();
    // error("Bounds#setBounds() min/max reversed:", a, b, c, d);
    return this;
  };


  Bounds.prototype.centerX = function() {
    var x = (this.xmin + this.xmax) * 0.5;
    return x;
  };

  Bounds.prototype.centerY = function() {
    var y = (this.ymax + this.ymin) * 0.5;
    return y;
  };

  Bounds.prototype.containsPoint = function(x, y) {
    if (x >= this.xmin && x <= this.xmax &&
      y <= this.ymax && y >= this.ymin) {
      return true;
    }
    return false;
  };

  // intended to speed up slightly bubble symbol detection; could use intersects() instead
  // TODO: fix false positive where circle is just outside a corner of the box
  Bounds.prototype.containsBufferedPoint =
  Bounds.prototype.containsCircle = function(x, y, buf) {
    if ( x + buf > this.xmin && x - buf < this.xmax ) {
      if ( y - buf < this.ymax && y + buf > this.ymin ) {
        return true;
      }
    }
    return false;
  };

  Bounds.prototype.intersects = function(bb) {
    if (bb.xmin <= this.xmax && bb.xmax >= this.xmin &&
      bb.ymax >= this.ymin && bb.ymin <= this.ymax) {
      return true;
    }
    return false;
  };

  Bounds.prototype.contains = function(bb) {
    if (bb.xmin >= this.xmin && bb.ymax <= this.ymax &&
      bb.xmax <= this.xmax && bb.ymin >= this.ymin) {
      return true;
    }
    return false;
  };

  Bounds.prototype.shift = function(x, y) {
    this.setBounds(this.xmin + x,
      this.ymin + y, this.xmax + x, this.ymax + y);
  };

  Bounds.prototype.padBounds = function(a, b, c, d) {
    this.xmin -= a;
    this.ymin -= b;
    this.xmax += c;
    this.ymax += d;
  };

  // Rescale the bounding box by a fraction. TODO: implement focus.
  // @param {number} pct Fraction of original extents
  // @param {number} pctY Optional amount to scale Y
  //
  Bounds.prototype.scale = function(pct, pctY) { /*, focusX, focusY*/
    var halfWidth = (this.xmax - this.xmin) * 0.5;
    var halfHeight = (this.ymax - this.ymin) * 0.5;
    var kx = pct - 1;
    var ky = pctY === undefined ? kx : pctY - 1;
    this.xmin -= halfWidth * kx;
    this.ymin -= halfHeight * ky;
    this.xmax += halfWidth * kx;
    this.ymax += halfHeight * ky;
  };

  // Return a bounding box with the same extent as this one.
  Bounds.prototype.cloneBounds = // alias so child classes can override clone()
  Bounds.prototype.clone = function() {
    return new Bounds(this.xmin, this.ymin, this.xmax, this.ymax);
  };

  Bounds.prototype.clearBounds = function() {
    this.setBounds(new Bounds());
  };

  Bounds.prototype.mergePoint = function(x, y) {
    if (this.xmin === void 0) {
      this.setBounds(x, y, x, y);
    } else {
      // this works even if x,y are NaN
      if (x < this.xmin)  this.xmin = x;
      else if (x > this.xmax)  this.xmax = x;

      if (y < this.ymin) this.ymin = y;
      else if (y > this.ymax) this.ymax = y;
    }
  };

  // expands either x or y dimension to match @aspect (width/height ratio)
  // @focusX, @focusY (optional): expansion focus, as a fraction of width and height
  Bounds.prototype.fillOut = function(aspect, focusX, focusY) {
    if (arguments.length < 3) {
      focusX = 0.5;
      focusY = 0.5;
    }
    var w = this.width(),
        h = this.height(),
        currAspect = w / h,
        pad;
    if (isNaN(aspect) || aspect <= 0) {
      // error condition; don't pad
    } else if (currAspect < aspect) { // fill out x dimension
      pad = h * aspect - w;
      this.xmin -= (1 - focusX) * pad;
      this.xmax += focusX * pad;
    } else {
      pad = w / aspect - h;
      this.ymin -= (1 - focusY) * pad;
      this.ymax += focusY * pad;
    }
    return this;
  };

  Bounds.prototype.update = function() {
    var tmp;
    if (this.xmin > this.xmax) {
      tmp = this.xmin;
      this.xmin = this.xmax;
      this.xmax = tmp;
    }
    if (this.ymin > this.ymax) {
      tmp = this.ymin;
      this.ymin = this.ymax;
      this.ymax = tmp;
    }
  };

  Bounds.prototype.transform = function(t) {
    this.xmin = this.xmin * t.mx + t.bx;
    this.xmax = this.xmax * t.mx + t.bx;
    this.ymin = this.ymin * t.my + t.by;
    this.ymax = this.ymax * t.my + t.by;
    this.update();
    return this;
  };

  // Returns a Transform object for mapping this onto Bounds @b2
  // @flipY (optional) Flip y-axis coords, for converting to/from pixel coords
  //
  Bounds.prototype.getTransform = function(b2, flipY) {
    var t = new Transform();
    t.mx = b2.width() / this.width() || 1; // TODO: better handling of 0 w,h
    t.bx = b2.xmin - t.mx * this.xmin;
    if (flipY) {
      t.my = -b2.height() / this.height() || 1;
      t.by = b2.ymax - t.my * this.ymin;
    } else {
      t.my = b2.height() / this.height() || 1;
      t.by = b2.ymin - t.my * this.ymin;
    }
    return t;
  };

  Bounds.prototype.mergeCircle = function(x, y, r) {
    if (r < 0) r = -r;
    this.mergeBounds([x - r, y - r, x + r, y + r]);
  };

  Bounds.prototype.mergeBounds = function(bb) {
    var a, b, c, d;
    if (bb instanceof Bounds) {
      a = bb.xmin;
      b = bb.ymin;
      c = bb.xmax;
      d = bb.ymax;
    } else if (arguments.length == 4) {
      a = arguments[0];
      b = arguments[1];
      c = arguments[2];
      d = arguments[3];
    } else if (bb.length == 4) {
      // assume array: [xmin, ymin, xmax, ymax]
      a = bb[0];
      b = bb[1];
      c = bb[2];
      d = bb[3];
    } else {
      error("Bounds#mergeBounds() invalid argument:", bb);
    }

    if (this.xmin === void 0) {
      this.setBounds(a, b, c, d);
    } else {
      if (a < this.xmin) this.xmin = a;
      if (b < this.ymin) this.ymin = b;
      if (c > this.xmax) this.xmax = c;
      if (d > this.ymax) this.ymax = d;
    }
    return this;
  };

  function countPointsInLayer(lyr) {
    var count = 0;
    if (layerHasPoints(lyr)) {
      forEachPoint(lyr.shapes, function() {count++;});
    }
    return count;
  }

  function getPointBounds(shapes) {
    var bounds = new Bounds();
    forEachPoint(shapes, function(p) {
      bounds.mergePoint(p[0], p[1]);
    });
    return bounds;
  }

  function getPointFeatureBounds(shape, bounds) {
    var n = shape ? shape.length : 0;
    var p;
    if (!bounds) bounds = new Bounds();
    for (var i=0; i<n; i++) {
      p = shape[i];
      bounds.mergePoint(p[0], p[1]);
    }
    return bounds;
  }

  function forEachPoint(shapes, cb) {
    var i, n, j, m, shp;
    for (i=0, n=shapes.length; i<n; i++) {
      shp = shapes[i];
      for (j=0, m=shp ? shp.length : 0; j<m; j++) {
        cb(shp[j], i);
      }
    }
  }

  var PointUtils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    countPointsInLayer: countPointsInLayer,
    getPointBounds: getPointBounds,
    getPointFeatureBounds: getPointFeatureBounds,
    forEachPoint: forEachPoint
  });

  function absArcId(arcId) {
    return arcId >= 0 ? arcId : ~arcId;
  }

  function calcArcBounds(xx, yy, start, len) {
    var i = start | 0,
        n = isNaN(len) ? xx.length - i : len + i,
        x, y, xmin, ymin, xmax, ymax;
    if (n > 0) {
      xmin = xmax = xx[i];
      ymin = ymax = yy[i];
    }
    for (i++; i<n; i++) {
      x = xx[i];
      y = yy[i];
      if (x < xmin) xmin = x;
      if (x > xmax) xmax = x;
      if (y < ymin) ymin = y;
      if (y > ymax) ymax = y;
    }
    return [xmin, ymin, xmax, ymax];
  }

  // TODO: remove this constant, use actual data from dataset CRS
  //       also consider using ellipsoidal formulas when appropriate
  var R = 6378137;
  var D2R = Math.PI / 180;

  // Equirectangular projection
  function degreesToMeters(deg) {
    return deg * D2R * R;
  }

  function distance3D(ax, ay, az, bx, by, bz) {
    var dx = ax - bx,
      dy = ay - by,
      dz = az - bz;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  }

  function distanceSq(ax, ay, bx, by) {
    var dx = ax - bx,
        dy = ay - by;
    return dx * dx + dy * dy;
  }

  function distance2D(ax, ay, bx, by) {
    var dx = ax - bx,
        dy = ay - by;
    return Math.sqrt(dx * dx + dy * dy);
  }

  function distanceSq3D(ax, ay, az, bx, by, bz) {
    var dx = ax - bx,
        dy = ay - by,
        dz = az - bz;
    return dx * dx + dy * dy + dz * dz;
  }

  // atan2() makes this function fairly slow, replaced by ~2x faster formula
  function innerAngle2(ax, ay, bx, by, cx, cy) {
    var a1 = Math.atan2(ay - by, ax - bx),
        a2 = Math.atan2(cy - by, cx - bx),
        a3 = Math.abs(a1 - a2);
    if (a3 > Math.PI) {
      a3 = 2 * Math.PI - a3;
    }
    return a3;
  }

  // Return angle abc in range [0, 2PI) or NaN if angle is invalid
  // (e.g. if length of ab or bc is 0)
  /*
  function signedAngle2(ax, ay, bx, by, cx, cy) {
    var a1 = Math.atan2(ay - by, ax - bx),
        a2 = Math.atan2(cy - by, cx - bx),
        a3 = a2 - a1;

    if (ax == bx && ay == by || bx == cx && by == cy) {
      a3 = NaN; // Use NaN for invalid angles
    } else if (a3 >= Math.PI * 2) {
      a3 = 2 * Math.PI - a3;
    } else if (a3 < 0) {
      a3 = a3 + 2 * Math.PI;
    }
    return a3;
  }
  */

  function standardAngle(a) {
    var twoPI = Math.PI * 2;
    while (a < 0) {
      a += twoPI;
    }
    while (a >= twoPI) {
      a -= twoPI;
    }
    return a;
  }

  function signedAngle(ax, ay, bx, by, cx, cy) {
    if (ax == bx && ay == by || bx == cx && by == cy) {
      return NaN; // Use NaN for invalid angles
    }
    var abx = ax - bx,
        aby = ay - by,
        cbx = cx - bx,
        cby = cy - by,
        dotp = abx * cbx + aby * cby,
        crossp = abx * cby - aby * cbx,
        a = Math.atan2(crossp, dotp);
    return standardAngle(a);
  }

  function bearing2D(x1, y1, x2, y2) {
    var val = Math.PI/2 - Math.atan2(y2 - y1, x2 - x1);
    return val > Math.PI ? val - 2 * Math.PI : val;
  }

  // Calc bearing in radians at lng1, lat1
  function bearing(lng1, lat1, lng2, lat2) {
    var D2R = Math.PI / 180;
    lng1 *= D2R;
    lng2 *= D2R;
    lat1 *= D2R;
    lat2 *= D2R;
    var y = Math.sin(lng2-lng1) * Math.cos(lat2),
        x = Math.cos(lat1)*Math.sin(lat2) - Math.sin(lat1)*Math.cos(lat2)*Math.cos(lng2-lng1);
    return Math.atan2(y, x);
  }

  // Calc angle of turn from ab to bc, in range [0, 2PI)
  // Receive lat-lng values in degrees
  function signedAngleSph(alng, alat, blng, blat, clng, clat) {
    if (alng == blng && alat == blat || blng == clng && blat == clat) {
      return NaN;
    }
    var b1 = bearing(blng, blat, alng, alat), // calc bearing at b
        b2 = bearing(blng, blat, clng, clat),
        a = Math.PI * 2 + b1 - b2;
    return standardAngle(a);
  }

  /*
  // Convert arrays of lng and lat coords (xsrc, ysrc) into
  // x, y, z coords (meters) on the most common spherical Earth model.
  //
  function convLngLatToSph(xsrc, ysrc, xbuf, ybuf, zbuf) {
    var deg2rad = Math.PI / 180,
        r = R;
    for (var i=0, len=xsrc.length; i<len; i++) {
      var lng = xsrc[i] * deg2rad,
          lat = ysrc[i] * deg2rad,
          cosLat = Math.cos(lat);
      xbuf[i] = Math.cos(lng) * cosLat * r;
      ybuf[i] = Math.sin(lng) * cosLat * r;
      zbuf[i] = Math.sin(lat) * r;
    }
  }
  */

  // Convert arrays of lng and lat coords (xsrc, ysrc) into
  // x, y, z coords (meters) on the most common spherical Earth model.
  //
  function convLngLatToSph(xsrc, ysrc, xbuf, ybuf, zbuf) {
    var p = [];
    for (var i=0, len=xsrc.length; i<len; i++) {
      lngLatToXYZ(xsrc[i], ysrc[i], p);
      xbuf[i] = p[0];
      ybuf[i] = p[1];
      zbuf[i] = p[2];
    }
  }

  function xyzToLngLat(x, y, z, p) {
    var d = distance3D(0, 0, 0, x, y, z); // normalize
    var lat = Math.asin(z / d) / D2R;
    var lng = Math.atan2(y / d, x / d) / D2R;
    p[0] = lng;
    p[1] = lat;
  }

  function lngLatToXYZ(lng, lat, p) {
    var cosLat;
    lng *= D2R;
    lat *= D2R;
    cosLat = Math.cos(lat);
    p[0] = Math.cos(lng) * cosLat * R;
    p[1] = Math.sin(lng) * cosLat * R;
    p[2] = Math.sin(lat) * R;
  }

  // Haversine formula (well conditioned at small distances)
  function sphericalDistance(lam1, phi1, lam2, phi2) {
    var dlam = lam2 - lam1,
        dphi = phi2 - phi1,
        a = Math.sin(dphi / 2) * Math.sin(dphi / 2) +
            Math.cos(phi1) * Math.cos(phi2) *
            Math.sin(dlam / 2) * Math.sin(dlam / 2),
        c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return c;
  }

  // Receive: coords in decimal degrees;
  // Return: distance in meters on spherical earth
  function greatCircleDistance(lng1, lat1, lng2, lat2) {
    var D2R = Math.PI / 180,
        dist = sphericalDistance(lng1 * D2R, lat1 * D2R, lng2 * D2R, lat2 * D2R);
    return dist * R;
  }

  // TODO: make this safe for small angles
  function innerAngle(ax, ay, bx, by, cx, cy) {
    var ab = distance2D(ax, ay, bx, by),
        bc = distance2D(bx, by, cx, cy),
        theta, dotp;
    if (ab === 0 || bc === 0) {
      theta = 0;
    } else {
      dotp = ((ax - bx) * (cx - bx) + (ay - by) * (cy - by)) / (ab * bc);
      if (dotp >= 1 - 1e-14) {
        theta = 0;
      } else if (dotp <= -1 + 1e-14) {
        theta = Math.PI;
      } else {
        theta = Math.acos(dotp); // consider using other formula at small dp
      }
    }
    return theta;
  }

  function innerAngle3D(ax, ay, az, bx, by, bz, cx, cy, cz) {
    var ab = distance3D(ax, ay, az, bx, by, bz),
        bc = distance3D(bx, by, bz, cx, cy, cz),
        theta, dotp;
    if (ab === 0 || bc === 0) {
      theta = 0;
    } else {
      dotp = ((ax - bx) * (cx - bx) + (ay - by) * (cy - by) + (az - bz) * (cz - bz)) / (ab * bc);
      if (dotp >= 1) {
        theta = 0;
      } else if (dotp <= -1) {
        theta = Math.PI;
      } else {
        theta = Math.acos(dotp); // consider using other formula at small dp
      }
    }
    return theta;
  }

  function triangleArea(ax, ay, bx, by, cx, cy) {
    var area = Math.abs(((ay - cy) * (bx - cx) + (by - cy) * (cx - ax)) / 2);
    return area;
  }

  function detSq(ax, ay, bx, by, cx, cy) {
    var det = ax * by - ax * cy + bx * cy - bx * ay + cx * ay - cx * by;
    return det * det;
  }

  function cosine(ax, ay, bx, by, cx, cy) {
    var den = distance2D(ax, ay, bx, by) * distance2D(bx, by, cx, cy),
        cos = 0;
    if (den > 0) {
      cos = ((ax - bx) * (cx - bx) + (ay - by) * (cy - by)) / den;
      if (cos > 1) cos = 1; // handle fp rounding error
      else if (cos < -1) cos = -1;
    }
    return cos;
  }

  function cosine3D(ax, ay, az, bx, by, bz, cx, cy, cz) {
    var den = distance3D(ax, ay, az, bx, by, bz) * distance3D(bx, by, bz, cx, cy, cz),
        cos = 0;
    if (den > 0) {
      cos = ((ax - bx) * (cx - bx) + (ay - by) * (cy - by) + (az - bz) * (cz - bz)) / den;
      if (cos > 1) cos = 1; // handle fp rounding error
      else if (cos < -1) cos = -1;
    }
    return cos;
  }

  function triangleArea3D(ax, ay, az, bx, by, bz, cx, cy, cz) {
    var area = 0.5 * Math.sqrt(detSq(ax, ay, bx, by, cx, cy) +
      detSq(ax, az, bx, bz, cx, cz) + detSq(ay, az, by, bz, cy, cz));
    return area;
  }

  // Given point B and segment AC, return the squared distance from B to the
  // nearest point on AC
  // Receive the squared length of segments AB, BC, AC
  // TODO: analyze rounding error. Returns 0 for these coordinates:
  //    P: [2, 3 - 1e-8]  AB: [[1, 3], [3, 3]]
  //
  function apexDistSq(ab2, bc2, ac2) {
    var dist2;
    if (ac2 === 0) {
      dist2 = ab2;
    } else if (ab2 >= bc2 + ac2) {
      dist2 = bc2;
    } else if (bc2 >= ab2 + ac2) {
      dist2 = ab2;
    } else {
      var dval = (ab2 + ac2 - bc2);
      dist2 = ab2 -  dval * dval / ac2  * 0.25;
    }
    if (dist2 < 0) {
      dist2 = 0;
    }
    return dist2;
  }

  function pointSegDistSq(ax, ay, bx, by, cx, cy) {
    var ab2 = distanceSq(ax, ay, bx, by),
        ac2 = distanceSq(ax, ay, cx, cy),
        bc2 = distanceSq(bx, by, cx, cy);
    return apexDistSq(ab2, ac2, bc2);
  }

  function pointSegDistSq3D(ax, ay, az, bx, by, bz, cx, cy, cz) {
    var ab2 = distanceSq3D(ax, ay, az, bx, by, bz),
        ac2 = distanceSq3D(ax, ay, az, cx, cy, cz),
        bc2 = distanceSq3D(bx, by, bz, cx, cy, cz);
    return apexDistSq(ab2, ac2, bc2);
  }

  // Apparently better conditioned for some inputs than pointSegDistSq()
  //
  function pointSegDistSq2(px, py, ax, ay, bx, by) {
    var ab2 = distanceSq(ax, ay, bx, by);
    var t = ((px - ax) * (bx - ax) + (py - ay) * (by - ay)) / ab2;
    if (ab2 === 0) return distanceSq(px, py, ax, ay);
    if (t < 0) t = 0;
    if (t > 1) t = 1;
    return distanceSq(px, py, ax + t * (bx - ax), ay + t * (by - ay));
  }


  // internal.reversePathCoords = function(arr, start, len) {
  //   var i = start,
  //       j = start + len - 1,
  //       tmp;
  //   while (i < j) {
  //     tmp = arr[i];
  //     arr[i] = arr[j];
  //     arr[j] = tmp;
  //     i++;
  //     j--;
  //   }
  // };

  // merge B into A
  // function mergeBounds(a, b) {
  //   if (b[0] < a[0]) a[0] = b[0];
  //   if (b[1] < a[1]) a[1] = b[1];
  //   if (b[2] > a[2]) a[2] = b[2];
  //   if (b[3] > a[3]) a[3] = b[3];
  // }

  function containsBounds(a, b) {
    return a[0] <= b[0] && a[2] >= b[2] && a[1] <= b[1] && a[3] >= b[3];
  }

  // function boundsArea(b) {
  //   return (b[2] - b[0]) * (b[3] - b[1]);
  // }

  var Geom = /*#__PURE__*/Object.freeze({
    __proto__: null,
    R: R,
    D2R: D2R,
    degreesToMeters: degreesToMeters,
    distance3D: distance3D,
    distanceSq: distanceSq,
    distance2D: distance2D,
    distanceSq3D: distanceSq3D,
    innerAngle2: innerAngle2,
    standardAngle: standardAngle,
    signedAngle: signedAngle,
    bearing2D: bearing2D,
    bearing: bearing,
    signedAngleSph: signedAngleSph,
    convLngLatToSph: convLngLatToSph,
    xyzToLngLat: xyzToLngLat,
    lngLatToXYZ: lngLatToXYZ,
    sphericalDistance: sphericalDistance,
    greatCircleDistance: greatCircleDistance,
    innerAngle: innerAngle,
    innerAngle3D: innerAngle3D,
    triangleArea: triangleArea,
    cosine: cosine,
    cosine3D: cosine3D,
    triangleArea3D: triangleArea3D,
    pointSegDistSq: pointSegDistSq,
    pointSegDistSq3D: pointSegDistSq3D,
    pointSegDistSq2: pointSegDistSq2,
    containsBounds: containsBounds
  });

  function pathIsClosed(ids, arcs) {
    var firstArc = ids[0];
    var lastArc = ids[ids.length - 1];
    var p1 = arcs.getVertex(firstArc, 0);
    var p2 = arcs.getVertex(lastArc, -1);
    var closed = p1.x === p2.x && p1.y === p2.y;
    return closed;
  }

  function getPointToPathDistance(px, py, ids, arcs) {
    return getPointToPathInfo(px, py, ids, arcs).distance;
  }

  function getPointToPathInfo(px, py, ids, arcs) {
    var iter = arcs.getShapeIter(ids);
    var pPathSq = Infinity;
    var ax, ay, bx, by, axmin, aymin, bxmin, bymin, pabSq;
    if (iter.hasNext()) {
      ax = axmin = bxmin = iter.x;
      ay = aymin = bymin = iter.y;
    }
    while (iter.hasNext()) {
      bx = iter.x;
      by = iter.y;
      pabSq = pointSegDistSq2(px, py, ax, ay, bx, by);
      if (pabSq < pPathSq) {
        pPathSq = pabSq;
        axmin = ax;
        aymin = ay;
        bxmin = bx;
        bymin = by;
      }
      ax = bx;
      ay = by;
    }
    if (pPathSq == Infinity) return {distance: Infinity};
    return {
      segment: [[axmin, aymin], [bxmin, bymin]],
      distance: Math.sqrt(pPathSq)
    };
  }


  // Return unsigned distance of a point to the nearest point on a polygon or polyline path
  //
  function getPointToShapeDistance(x, y, shp, arcs) {
    var minDist = (shp || []).reduce(function(minDist, ids) {
      var pathDist = getPointToPathDistance(x, y, ids, arcs);
      return Math.min(minDist, pathDist);
    }, Infinity);
    return minDist;
  }

  // @ids array of arc ids
  // @arcs ArcCollection
  function getAvgPathXY(ids, arcs) {
    var iter = arcs.getShapeIter(ids);
    if (!iter.hasNext()) return null;
    var x0 = iter.x,
        y0 = iter.y,
        count = 0,
        sumX = 0,
        sumY = 0;
    while (iter.hasNext()) {
      count++;
      sumX += iter.x;
      sumY += iter.y;
    }
    if (count === 0 || iter.x !== x0 || iter.y !== y0) {
      sumX += x0;
      sumY += y0;
      count++;
    }
    return {
      x: sumX / count,
      y: sumY / count
    };
  }

  // Return path with the largest (area) bounding box
  // @shp array of array of arc ids
  // @arcs ArcCollection
  function getMaxPath(shp, arcs) {
    var maxArea = 0;
    return (shp || []).reduce(function(maxPath, path) {
      var bbArea = arcs.getSimpleShapeBounds(path).area();
      if (bbArea > maxArea) {
        maxArea = bbArea;
        maxPath = path;
      }
      return maxPath;
    }, null);
  }

  function countVerticesInPath(ids, arcs) {
    var iter = arcs.getShapeIter(ids),
        count = 0;
    while (iter.hasNext()) count++;
    return count;
  }

  function getPathBounds(points) {
    var bounds = new Bounds();
    for (var i=0, n=points.length; i<n; i++) {
      bounds.mergePoint(points[i][0], points[i][1]);
    }
    return bounds;
  }

  var calcPathLen;
  calcPathLen = (function() {
    var len, calcLen;
    function addSegLen(i, j, xx, yy) {
      len += calcLen(xx[i], yy[i], xx[j], yy[j]);
    }
    // @spherical (optional bool) calculate great circle length in meters
    return function(path, arcs, spherical) {
      if (spherical && arcs.isPlanar()) {
        error("Expected lat-long coordinates");
      }
      calcLen = spherical ? greatCircleDistance : distance2D;
      len = 0;
      for (var i=0, n=path.length; i<n; i++) {
        arcs.forEachArcSegment(path[i], addSegLen);
      }
      return len;
    };
  }());

  var PathGeom = /*#__PURE__*/Object.freeze({
    __proto__: null,
    pathIsClosed: pathIsClosed,
    getPointToPathDistance: getPointToPathDistance,
    getPointToPathInfo: getPointToPathInfo,
    getPointToShapeDistance: getPointToShapeDistance,
    getAvgPathXY: getAvgPathXY,
    getMaxPath: getMaxPath,
    countVerticesInPath: countVerticesInPath,
    getPathBounds: getPathBounds,
    get calcPathLen () { return calcPathLen; }
  });

  // Get the centroid of the largest ring of a polygon
  // TODO: Include holes in the calculation
  // TODO: Add option to find centroid of all rings, not just the largest
  function getShapeCentroid(shp, arcs) {
    var maxPath = getMaxPath(shp, arcs);
    return maxPath ? getPathCentroid(maxPath, arcs) : null;
  }

  function getPathCentroid(ids, arcs) {
    var iter = arcs.getShapeIter(ids),
        sum = 0,
        sumX = 0,
        sumY = 0,
        dx, dy, ax, ay, bx, by, tmp, area;
    if (!iter.hasNext()) return null;
    // reduce effect of fp errors by shifting shape origin to 0,0 (issue #304)
    ax = 0;
    ay = 0;
    dx = -iter.x;
    dy = -iter.y;
    while (iter.hasNext()) {
      bx = ax;
      by = ay;
      ax = iter.x + dx;
      ay = iter.y + dy;
      tmp = bx * ay - by * ax;
      sum += tmp;
      sumX += tmp * (bx + ax);
      sumY += tmp * (by + ay);
    }
    area = sum / 2;
    if (area === 0) {
      return getAvgPathXY(ids, arcs);
    } else return {
      x: sumX / (6 * area) - dx,
      y: sumY / (6 * area) - dy
    };
  }

  var PolygonCentroid = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getShapeCentroid: getShapeCentroid,
    getPathCentroid: getPathCentroid
  });

  // A compactness measure designed for testing electoral districts for gerrymandering.
  // Returns value in [0-1] range. 1 = perfect circle, 0 = collapsed polygon
  function calcPolsbyPopperCompactness(area, perimeter) {
    if (perimeter <= 0) return 0;
    return Math.abs(area) * Math.PI * 4 / (perimeter * perimeter);
  }

  // Larger values (less severe penalty) fthan Polsby Popper
  function calcSchwartzbergCompactness(area, perimeter) {
    if (perimeter <= 0) return 0;
    return 2 * Math.PI * Math.sqrt(Math.abs(area) / Math.PI) / perimeter;
  }

  // Returns: 1 if CW, -1 if CCW, 0 if collapsed
  function getPathWinding(ids, arcs) {
    var area = getPathArea(ids, arcs);
    return area > 0 && 1 || area < 0 && -1 || 0;
  }

  function getShapeArea(shp, arcs) {
    // return (arcs.isPlanar() ? geom.getPlanarShapeArea : geom.getSphericalShapeArea)(shp, arcs);
    return (shp || []).reduce(function(area, ids) {
      return area + getPathArea(ids, arcs);
    }, 0);
  }

  function getPlanarShapeArea(shp, arcs) {
    return (shp || []).reduce(function(area, ids) {
      return area + getPlanarPathArea(ids, arcs);
    }, 0);
  }

  function getSphericalShapeArea(shp, arcs) {
    if (arcs.isPlanar()) {
      error("[getSphericalShapeArea()] Function requires decimal degree coordinates");
    }
    return (shp || []).reduce(function(area, ids) {
      return area + getSphericalPathArea(ids, arcs);
    }, 0);
  }

  // Return true if point is inside or on boundary of a shape
  //
  function testPointInPolygon(x, y, shp, arcs) {
    var isIn = false,
        isOn = false;
    if (shp) {
      shp.forEach(function(ids) {
        var inRing = testPointInRing(x, y, ids, arcs);
        if (inRing == 1) {
          isIn = !isIn;
        } else if (inRing == -1) {
          isOn = true;
        }
      });
    }
    return isOn || isIn;
  }

  function getYIntercept(x, ax, ay, bx, by) {
    return ay + (x - ax) * (by - ay) / (bx - ax);
  }

  function getXIntercept(y, ax, ay, bx, by) {
    return ax + (y - ay) * (bx - ax) / (by - ay);
  }

  // Test if point (x, y) is inside, outside or on the boundary of a polygon ring
  // Return 0: outside; 1: inside; -1: on boundary
  //
  function testPointInRing(x, y, ids, arcs) {
    /*
    // arcs.getSimpleShapeBounds() doesn't apply simplification, can't use here
    //// wait, why not? simplifcation shoudn't expand bounds, so this test makes sense
    if (!arcs.getSimpleShapeBounds(ids).containsPoint(x, y)) {
      return false;
    }
    */
    var isIn = false,
        isOn = false;
    forEachSegmentInPath(ids, arcs, function(a, b, xx, yy) {
      var result = testRayIntersection(x, y, xx[a], yy[a], xx[b], yy[b]);
      if (result == 1) {
        isIn = !isIn;
      } else if (isNaN(result)) {
        isOn = true;
      }
    });
    return isOn ? -1 : (isIn ? 1 : 0);
  }

  // test if a vertical ray originating at (x, y) intersects a segment
  // returns 1 if intersection, 0 if no intersection, NaN if point touches segment
  // (Special rules apply to endpoint intersections, to support point-in-polygon testing.)
  function testRayIntersection(x, y, ax, ay, bx, by) {
    var val = getRayIntersection(x, y, ax, ay, bx, by);
    if (val != val) {
      return NaN;
    }
    return val == -Infinity ? 0 : 1;
  }

  function getRayIntersection(x, y, ax, ay, bx, by) {
    var hit = -Infinity, // default: no hit
        yInt;

    // case: p is entirely above, left or right of segment
    if (x < ax && x < bx || x > ax && x > bx || y > ay && y > by) {
        // no intersection
    }
    // case: px aligned with a segment vertex
    else if (x === ax || x === bx) {
      // case: vertical segment or collapsed segment
      if (x === ax && x === bx) {
        // p is on segment
        if (y == ay || y == by || y > ay != y > by) {
          hit = NaN;
        }
        // else: no hit
      }
      // case: px equal to ax (only)
      else if (x === ax) {
        if (y === ay) {
          hit = NaN;
        } else if (bx < ax && y < ay) {
          // only score hit if px aligned to rightmost endpoint
          hit = ay;
        }
      }
      // case: px equal to bx (only)
      else {
        if (y === by) {
          hit = NaN;
        } else if (ax < bx && y < by) {
          // only score hit if px aligned to rightmost endpoint
          hit = by;
        }
      }
    // case: px is between endpoints
    } else {
      yInt = getYIntercept(x, ax, ay, bx, by);
      if (yInt > y) {
        hit = yInt;
      } else if (yInt == y) {
        hit = NaN;
      }
    }
    return hit;
  }

  function getPathArea(ids, arcs) {
    return (arcs.isPlanar() ? getPlanarPathArea : getSphericalPathArea)(ids, arcs);
  }

  function getSphericalPathArea(ids, arcs) {
    var iter = arcs.getShapeIter(ids),
        sum = 0,
        started = false,
        deg2rad = Math.PI / 180,
        x, y, xp, yp;
    while (iter.hasNext()) {
      x = iter.x * deg2rad;
      y = Math.sin(iter.y * deg2rad);
      if (started) {
        sum += (x - xp) * (2 + y + yp);
      } else {
        started = true;
      }
      xp = x;
      yp = y;
    }
    return sum / 2 * 6378137 * 6378137;
  }

  // Get path area from an array of [x, y] points
  // TODO: consider removing duplication with getPathArea(), e.g. by
  //   wrapping points in an iterator.
  //
  function getPlanarPathArea2(points) {
    var sum = 0,
        ax, ay, bx, by, dx, dy, p;
    for (var i=0, n=points.length; i<n; i++) {
      p = points[i];
      if (i === 0) {
        ax = 0;
        ay = 0;
        dx = -p[0];
        dy = -p[1];
      } else {
        ax = p[0] + dx;
        ay = p[1] + dy;
        sum += ax * by - bx * ay;
      }
      bx = ax;
      by = ay;
    }
    return sum / 2;
  }

  function getPlanarPathArea(ids, arcs) {
    var iter = arcs.getShapeIter(ids),
        sum = 0,
        ax, ay, bx, by, dx, dy;
    if (iter.hasNext()) {
      ax = 0;
      ay = 0;
      dx = -iter.x;
      dy = -iter.y;
      while (iter.hasNext()) {
        bx = ax;
        by = ay;
        ax = iter.x + dx;
        ay = iter.y + dy;
        sum += ax * by - bx * ay;
      }
    }
    return sum / 2;
  }

  function getPathPerimeter(ids, arcs) {
    return (arcs.isPlanar() ? getPlanarPathPerimeter : getSphericalPathPerimeter)(ids, arcs);
  }

  function getShapePerimeter(shp, arcs) {
    return (shp || []).reduce(function(len, ids) {
      return len + getPathPerimeter(ids, arcs);
    }, 0);
  }

  function getSphericalShapePerimeter(shp, arcs) {
    if (arcs.isPlanar()) {
      error("[getSphericalShapePerimeter()] Function requires decimal degree coordinates");
    }
    return (shp || []).reduce(function(len, ids) {
      return len + getSphericalPathPerimeter(ids, arcs);
    }, 0);
  }

  function getPlanarPathPerimeter(ids, arcs) {
    return calcPathLen(ids, arcs, false);
  }

  function getSphericalPathPerimeter(ids, arcs) {
    return calcPathLen(ids, arcs, true);
  }

  var PolygonGeom = /*#__PURE__*/Object.freeze({
    __proto__: null,
    calcPolsbyPopperCompactness: calcPolsbyPopperCompactness,
    calcSchwartzbergCompactness: calcSchwartzbergCompactness,
    getPathWinding: getPathWinding,
    getShapeArea: getShapeArea,
    getPlanarShapeArea: getPlanarShapeArea,
    getSphericalShapeArea: getSphericalShapeArea,
    testPointInPolygon: testPointInPolygon,
    testPointInRing: testPointInRing,
    testRayIntersection: testRayIntersection,
    getRayIntersection: getRayIntersection,
    getPathArea: getPathArea,
    getSphericalPathArea: getSphericalPathArea,
    getPlanarPathArea2: getPlanarPathArea2,
    getPlanarPathArea: getPlanarPathArea,
    getPathPerimeter: getPathPerimeter,
    getShapePerimeter: getShapePerimeter,
    getSphericalShapePerimeter: getSphericalShapePerimeter,
    getPlanarPathPerimeter: getPlanarPathPerimeter,
    getSphericalPathPerimeter: getSphericalPathPerimeter
  });

  // Returns an interval for snapping together coordinates that be co-incident bug
  // have diverged because of floating point rounding errors. Intended to be small
  // enought not not to snap points that should be distinct.
  // This is not a robust method... e.g. some formulas for some inputs may produce
  // errors that are larger than this interval.
  // @coords: Array of relevant coordinates (e.g. bbox coordinates of vertex coordinates
  //   of two intersecting segments).
  //
  function getHighPrecisionSnapInterval(coords) {
    var maxCoord = Math.max.apply(null, coords.map(Math.abs));
    return maxCoord * 1e-14;
  }

  function snapCoords(arcs, threshold) {
      var avgDist = getAvgSegment(arcs),
          autoSnapDist = avgDist * 0.0025,
          snapDist = autoSnapDist;

    if (threshold > 0) {
      snapDist = threshold;
      message(utils.format("Applying snapping threshold of %s -- %.6f times avg. segment length", threshold, threshold / avgDist));
    }
    var snapCount = snapCoordsByInterval(arcs, snapDist);
    if (snapCount > 0) arcs.dedupCoords();
    message(utils.format("Snapped %s point%s", snapCount, utils.pluralSuffix(snapCount)));
  }

  // Snap together points within a small threshold
  //
  function snapCoordsByInterval(arcs, snapDist) {
    var snapCount = 0,
        data = arcs.getVertexData(),
        ids;

    if (snapDist > 0) {
      // Get sorted coordinate ids
      // Consider: speed up sorting -- try bucket sort as first pass.
      //
      ids = sortCoordinateIds(data.xx);
      for (var i=0, n=ids.length; i<n; i++) {
        snapCount += snapPoint(i, snapDist, ids, data.xx, data.yy);
      }
    }
    return snapCount;

    function snapPoint(i, limit, ids, xx, yy) {
      var j = i,
          n = ids.length,
          x = xx[ids[i]],
          y = yy[ids[i]],
          snaps = 0,
          id2, dx, dy;

      while (++j < n) {
        id2 = ids[j];
        dx = xx[id2] - x;
        if (dx > limit) break;
        dy = yy[id2] - y;
        if (dx === 0 && dy === 0 || dx * dx + dy * dy > limit * limit) continue;
        xx[id2] = x;
        yy[id2] = y;
        snaps++;
      }
      return snaps;
    }
  }

  function sortCoordinateIds(a) {
    var n = a.length,
        ids = new Uint32Array(n);
    for (var i=0; i<n; i++) {
      ids[i] = i;
    }
    quicksortIds(a, ids, 0, ids.length-1);
    return ids;
  }

  /*
  // Returns array of array ids, in ascending order.
  // @a array of numbers
  //
  utils.sortCoordinateIds = function(a) {
    return utils.bucketSortIds(a);
  };

  // This speeds up sorting of large datasets (~2x faster for 1e7 values)
  // worth the additional code?
  utils.bucketSortIds = function(a, n) {
    var len = a.length,
        ids = new Uint32Array(len),
        bounds = utils.getArrayBounds(a),
        buckets = Math.ceil(n > 0 ? n : len / 10),
        counts = new Uint32Array(buckets),
        offsets = new Uint32Array(buckets),
        i, j, offs, count;

    // get bucket sizes
    for (i=0; i<len; i++) {
      j = bucketId(a[i], bounds.min, bounds.max, buckets);
      counts[j]++;
    }

    // convert counts to offsets
    offs = 0;
    for (i=0; i<buckets; i++) {
      offsets[i] = offs;
      offs += counts[i];
    }

    // assign ids to buckets
    for (i=0; i<len; i++) {
      j = bucketId(a[i], bounds.min, bounds.max, buckets);
      offs = offsets[j]++;
      ids[offs] = i;
    }

    // sort each bucket with quicksort
    for (i = 0; i<buckets; i++) {
      count = counts[i];
      if (count > 1) {
        offs = offsets[i] - count;
        utils.quicksortIds(a, ids, offs, offs + count - 1);
      }
    }
    return ids;

    function bucketId(val, min, max, buckets) {
      var id = (buckets * (val - min) / (max - min)) | 0;
      return id < buckets ? id : buckets - 1;
    }
  };
  */

  function quicksortIds(a, ids, lo, hi) {
    if (hi - lo > 24) {
      var pivot = a[ids[lo + hi >> 1]],
          i = lo,
          j = hi,
          tmp;
      while (i <= j) {
        while (a[ids[i]] < pivot) i++;
        while (a[ids[j]] > pivot) j--;
        if (i <= j) {
          tmp = ids[i];
          ids[i] = ids[j];
          ids[j] = tmp;
          i++;
          j--;
        }
      }
      if (j > lo) quicksortIds(a, ids, lo, j);
      if (i < hi) quicksortIds(a, ids, i, hi);
    } else {
      insertionSortIds(a, ids, lo, hi);
    }
  }

  function insertionSortIds(arr, ids, start, end) {
    var id, i, j;
    for (j = start + 1; j <= end; j++) {
      id = ids[j];
      for (i = j - 1; i >= start && arr[id] < arr[ids[i]]; i--) {
        ids[i+1] = ids[i];
      }
      ids[i+1] = id;
    }
  }

  var Snapping = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getHighPrecisionSnapInterval: getHighPrecisionSnapInterval,
    snapCoords: snapCoords,
    snapCoordsByInterval: snapCoordsByInterval,
    sortCoordinateIds: sortCoordinateIds
  });

  // Find the intersection between two 2D segments
  // Returns 0, 1 or 2 [x, y] locations as null, [x, y], or [x1, y1, x2, y2]
  // Special cases:
  // Endpoint-to-endpoint touches are not treated as intersections.
  // If the segments touch at a T-intersection, it is treated as an intersection.
  // If the segments are collinear and partially overlapping, each subsumed endpoint
  //    is counted as an intersection (there will be either one or two)
  //
  function segmentIntersection(ax, ay, bx, by, cx, cy, dx, dy, epsArg) {
    // Use a small tolerance interval, so collinear segments and T-intersections
    // are detected (floating point rounding often causes exact functions to fail)
    var eps = epsArg >= 0 ? epsArg :
        getHighPrecisionSnapInterval([ax, ay, bx, by, cx, cy, dx, dy]);
    var epsSq = eps * eps;
    var touches, cross;
    // Detect 0, 1 or 2 'touch' intersections, where a vertex of one segment
    // is very close to the other segment's linear portion.
    // One touch indicates either a T-intersection or two overlapping collinear
    // segments that share an endpoint. Two touches indicates overlapping
    // collinear segments that do not share an endpoint.
    touches = findPointSegTouches(epsSq, ax, ay, bx, by, cx, cy, dx, dy);
    // if (touches) return touches;
    // Ignore endpoint-only intersections
    if (!touches && testEndpointHit(epsSq, ax, ay, bx, by, cx, cy, dx, dy)) {
      return null;
    }
    // Detect cross intersection
    cross = findCrossIntersection(ax, ay, bx, by, cx, cy, dx, dy, eps);
    if (cross && touches) {
      // Removed this call -- using multiple snap/cut passes seems more
      // effective for repairing real-world datasets.
      // return reconcileCrossAndTouches(cross, touches, eps);
    }
    return touches || cross || null;
  }

  function reconcileCrossAndTouches(cross, touches, eps) {
    var hits;
    eps = eps || 0;
    if (touches.length > 2) {
      // two touches and a cross: cross should be between the touches, intersection at touches
      hits = touches;
    } else if (distance2D(cross[0], cross[1], touches[0], touches[1]) <= eps) {
      // cross is very close to touch point (e.g. small overshoot): intersection at touch point
      hits = touches;
    } else {
      // one touch and one cross: use both points
      hits = touches.concat(cross);
    }
    return hits;
  }


  // Find the intersection point of two segments that cross each other,
  // or return null if the segments do not cross.
  // Assumes endpoint intersections have already been detected
  function findCrossIntersection(ax, ay, bx, by, cx, cy, dx, dy, eps) {
    if (!segmentHit(ax, ay, bx, by, cx, cy, dx, dy)) return null;
    var den = determinant2D(bx - ax, by - ay, dx - cx, dy - cy);
    var m = orient2D(cx, cy, dx, dy, ax, ay) / den;
    var p = [ax + m * (bx - ax), ay + m * (by - ay)];
    if (Math.abs(den) < 1e-18) {
      // assume that collinear and near-collinear segment intersections have been
      // accounted for already.
      // TODO: is this a valid assumption?
      return null;
    }

    // Snap p to a vertex if very close to one
    // This avoids tiny segments caused by T-intersection overshoots and prevents
    //   pathfinder errors related to f-p rounding.
    // (NOTE: this may no longer be needed, since T-intersections are now detected
    // first)
    if (eps > 0) {
      snapIntersectionPoint(p, ax, ay, bx, by, cx, cy, dx, dy, eps);
    }
    // Clamp point to x range and y range of both segments
    // (This may occur due to fp rounding, if one segment is vertical or horizontal)
    clampIntersectionPoint(p, ax, ay, bx, by, cx, cy, dx, dy);
    return p;
  }

  function testEndpointHit(epsSq, ax, ay, bx, by, cx, cy, dx, dy) {
    return distanceSq(ax, ay, cx, cy) <= epsSq || distanceSq(ax, ay, dx, dy) <= epsSq ||
      distanceSq(bx, by, cx, cy) <= epsSq || distanceSq(bx, by, dx, dy) <= epsSq;
  }

  function findPointSegTouches(epsSq, ax, ay, bx, by, cx, cy, dx, dy) {
    var touches = [];
    collectPointSegTouch(touches, epsSq, ax, ay, cx, cy, dx, dy);
    collectPointSegTouch(touches, epsSq, bx, by, cx, cy, dx, dy);
    collectPointSegTouch(touches, epsSq, cx, cy, ax, ay, bx, by);
    collectPointSegTouch(touches, epsSq, dx, dy, ax, ay, bx, by);
    if (touches.length === 0) return null;
    if (touches.length > 4) {
      // Geometrically, more than two touch intersections can not occur.
      // Is it possible that fp rounding or a bug might result in >2 touches?
      debug('Intersection detection error');
    }
    return touches;
  }

  function collectPointSegTouch(arr, epsSq, px, py, ax, ay, bx, by) {
    // The original point-seg distance function caused errors in test data.
    // (probably because of large rounding errors with some inputs).
    // var pab = pointSegDistSq(px, py, ax, ay, bx, by);
    var pab = pointSegDistSq2(px, py, ax, ay, bx, by);
    if (pab > epsSq) return; // point is too far from segment to touch
    var pa = distanceSq(ax, ay, px, py);
    var pb = distanceSq(bx, by, px, py);
    if (pa <= epsSq || pb <= epsSq) return; // ignore endpoint hits
    arr.push(px, py); // T intersection at P and AB
  }


  // Used by mapshaper-undershoots.js
  // TODO: make more robust, make sure result is compatible with segmentIntersection()
  // (rounding errors currently must be handled downstream)
  function findClosestPointOnSeg(px, py, ax, ay, bx, by) {
    var dx = bx - ax,
        dy = by - ay,
        dotp = (px - ax) * dx + (py - ay) * dy,
        abSq = dx * dx + dy * dy,
        k = abSq === 0 ? -1 : dotp / abSq,
        eps = 0.1, // 1e-6, // snap to endpoint
        p;
    if (k <= eps) {
      p = [ax, ay];
    } else if (k >= 1 - eps) {
      p = [bx, by];
    } else {
      p = [ax + k * dx, ay + k * dy];
    }
    return p;
  }

  function snapIfCloser(p, minDist, x, y, x2, y2) {
    var dist = distance2D(x, y, x2, y2);
    if (dist < minDist) {
      minDist = dist;
      p[0] = x2;
      p[1] = y2;
    }
    return minDist;
  }

  function snapIntersectionPoint(p, ax, ay, bx, by, cx, cy, dx, dy, eps) {
    var x = p[0],
        y = p[1],
        snapDist = eps;
    snapDist = snapIfCloser(p, snapDist, x, y, ax, ay);
    snapDist = snapIfCloser(p, snapDist, x, y, bx, by);
    snapDist = snapIfCloser(p, snapDist, x, y, cx, cy);
    snapDist = snapIfCloser(p, snapDist, x, y, dx, dy);
  }

  function clampIntersectionPoint(p, ax, ay, bx, by, cx, cy, dx, dy) {
    // Handle intersection points that fall outside the x-y range of either
    // segment by snapping to nearest endpoint coordinate. Out-of-range
    // intersection points can be caused by floating point rounding errors
    // when a segment is vertical or horizontal. This has caused problems when
    // repeatedly applying bbox clipping along the same segment
    var x = p[0],
        y = p[1];
    // assumes that segment ranges intersect
    x = clampToCloseRange(x, ax, bx);
    x = clampToCloseRange(x, cx, dx);
    y = clampToCloseRange(y, ay, by);
    y = clampToCloseRange(y, cy, dy);
    p[0] = x;
    p[1] = y;
  }

  // a: coordinate of point
  // b: endpoint coordinate of segment
  // c: other endpoint of segment
  function outsideRange(a, b, c) {
    var out;
    if (b < c) {
      out = a < b || a > c;
    } else if (b > c) {
      out = a > b || a < c;
    } else {
      out = a != b;
    }
    return out;
  }

  function clampToCloseRange(a, b, c) {
    var lim;
    if (outsideRange(a, b, c)) {
      lim = Math.abs(a - b) < Math.abs(a - c) ? b : c;
      if (Math.abs(a - lim) > 1e-15) {
        debug("[clampToCloseRange()] large clamping interval", a, b, c);
      }
      a = lim;
    }
    return a;
  }

  // Determinant of matrix
  //  | a  b |
  //  | c  d |
  function determinant2D(a, b, c, d) {
    return a * d - b * c;
  }

  // returns a positive value if the points a, b, and c are arranged in
  // counterclockwise order, a negative value if the points are in clockwise
  // order, and zero if the points are collinear.
  // Source: Jonathan Shewchuk http://www.cs.berkeley.edu/~jrs/meshpapers/robnotes.pdf
  function orient2D(ax, ay, bx, by, cx, cy) {
    return determinant2D(ax - cx, ay - cy, bx - cx, by - cy);
  }

  // Source: Sedgewick, _Algorithms in C_
  // (Other functions were tried that were more sensitive to floating point errors
  //  than this function)
  function segmentHit(ax, ay, bx, by, cx, cy, dx, dy) {
    return orient2D(ax, ay, bx, by, cx, cy) *
        orient2D(ax, ay, bx, by, dx, dy) <= 0 &&
        orient2D(cx, cy, dx, dy, ax, ay) *
        orient2D(cx, cy, dx, dy, bx, by) <= 0;
  }

  var SegmentGeom = /*#__PURE__*/Object.freeze({
    __proto__: null,
    segmentIntersection: segmentIntersection,
    findClosestPointOnSeg: findClosestPointOnSeg,
    orient2D: orient2D,
    segmentHit: segmentHit
  });

  var geom = Object.assign({}, Geom, PolygonGeom, PathGeom, SegmentGeom, PolygonCentroid);

  // Utility functions for working with ArcCollection and arrays of arc ids.

  // Return average segment length (with simplification)
  function getAvgSegment(arcs) {
    var sum = 0;
    var count = arcs.forEachSegment(function(i, j, xx, yy) {
      var dx = xx[i] - xx[j],
          dy = yy[i] - yy[j];
      sum += Math.sqrt(dx * dx + dy * dy);
    });
    return sum / count || 0;
  }

  // Return average magnitudes of dx, dy (with simplification)
  function getAvgSegment2(arcs) {
    var dx = 0, dy = 0;
    var count = arcs.forEachSegment(function(i, j, xx, yy) {
      dx += Math.abs(xx[i] - xx[j]);
      dy += Math.abs(yy[i] - yy[j]);
    });
    return [dx / count || 0, dy / count || 0];
  }

  /*
  this.getAvgSegmentSph2 = function() {
    var sumx = 0, sumy = 0;
    var count = this.forEachSegment(function(i, j, xx, yy) {
      var lat1 = yy[i],
          lat2 = yy[j];
      sumy += geom.degreesToMeters(Math.abs(lat1 - lat2));
      sumx += geom.degreesToMeters(Math.abs(xx[i] - xx[j]) *
          Math.cos((lat1 + lat2) * 0.5 * geom.D2R);
    });
    return [sumx / count || 0, sumy / count || 0];
  };
  */

  function getDirectedArcPresenceTest(shapes, n) {
    var flags = new Uint8Array(n);
    forEachArcId(shapes, function(id) {
      var absId = absArcId(id);
      if (absId < n === false) error('index error');
      flags[absId] |= id < 0 ? 2 : 1;
    });
    return function(arcId) {
      var absId = absArcId(arcId);
      return arcId < 0 ? (flags[absId] & 2) == 2 : (flags[absId] & 1) == 1;
    };
  }

  function getArcPresenceTest(shapes, arcs) {
    var counts = new Uint8Array(arcs.size());
    countArcsInShapes(shapes, counts);
    return function(id) {
      if (id < 0) id = ~id;
      return counts[id] > 0;
    };
  }

  // @counts A typed array for accumulating count of each abs arc id
  //   (assume it won't overflow)
  function countArcsInShapes(shapes, counts) {
    traversePaths(shapes, null, function(obj) {
      var arcs = obj.arcs,
          id;
      for (var i=0; i<arcs.length; i++) {
        id = arcs[i];
        if (id < 0) id = ~id;
        counts[id]++;
      }
    });
  }

  function getPathBounds$1(shapes, arcs) {
    var bounds = new Bounds();
    forEachArcId(shapes, function(id) {
      arcs.mergeArcBounds(id, bounds);
    });
    return bounds;
  }

  // Returns subset of shapes in @shapes that contain one or more arcs in @arcIds
  function findShapesByArcId(shapes, arcIds, numArcs) {
    var index = numArcs ? new Uint8Array(numArcs) : [],
        found = [];
    arcIds.forEach(function(id) {
      index[absArcId(id)] = 1;
    });
    shapes.forEach(function(shp, shpId) {
      var isHit = false;
      forEachArcId(shp || [], function(id) {
        isHit = isHit || index[absArcId(id)] == 1;
      });
      if (isHit) {
        found.push(shpId);
      }
    });
    return found;
  }

  function reversePath(ids) {
    ids.reverse();
    for (var i=0, n=ids.length; i<n; i++) {
      ids[i] = ~ids[i];
    }
    return ids;
  }

  function clampIntervalByPct(z, pct) {
    if (pct <= 0) z = Infinity;
    else if (pct >= 1) z = 0;
    return z;
  }

  // Return id of the vertex between @start and @end with the highest
  // threshold that is less than @zlim, or -1 if none
  //
  function findNextRemovableVertex(zz, zlim, start, end) {
    var tmp, jz = 0, j = -1, z;
    if (start > end) {
      tmp = start;
      start = end;
      end = tmp;
    }
    for (var i=start+1; i<end; i++) {
      z = zz[i];
      if (z < zlim && z > jz) {
        j = i;
        jz = z;
      }
    }
    return j;
  }

  // Visit each arc id in a path, shape or array of shapes
  // Use non-undefined return values of callback @cb as replacements.
  function forEachArcId(arr, cb) {
    var item;
    for (var i=0; i<arr.length; i++) {
      item = arr[i];
      if (item instanceof Array) {
        forEachArcId(item, cb);
      } else if (utils.isInteger(item)) {
        var val = cb(item);
        if (val !== void 0) {
          arr[i] = val;
        }
      } else if (item) {
        error("Non-integer arc id in:", arr);
      }
    }
  }

  function forEachSegmentInShape(shape, arcs, cb) {
    for (var i=0, n=shape ? shape.length : 0; i<n; i++) {
      forEachSegmentInPath(shape[i], arcs, cb);
    }
  }

  function forEachSegmentInPath(ids, arcs, cb) {
    for (var i=0, n=ids.length; i<n; i++) {
      arcs.forEachArcSegment(ids[i], cb);
    }
  }

  function traversePaths(shapes, cbArc, cbPart, cbShape) {
    var segId = 0;
    shapes.forEach(function(parts, shapeId) {
      if (!parts || parts.length === 0) return; // null shape
      var arcIds, arcId;
      if (cbShape) {
        cbShape(shapeId);
      }
      for (var i=0, m=parts.length; i<m; i++) {
        arcIds = parts[i];
        if (cbPart) {
          cbPart({
            i: i,
            shapeId: shapeId,
            shape: parts,
            arcs: arcIds
          });
        }

        if (cbArc) {
          for (var j=0, n=arcIds.length; j<n; j++, segId++) {
            arcId = arcIds[j];
            cbArc({
              i: j,
              shapeId: shapeId,
              partId: i,
              arcId: arcId,
              segId: segId
            });
          }
        }
      }
    });
  }

  function arcHasLength(id, coords) {
    var iter = coords.getArcIter(id), x, y;
    if (iter.hasNext()) {
      x = iter.x;
      y = iter.y;
      while (iter.hasNext()) {
        if (iter.x != x || iter.y != y) return true;
      }
    }
    return false;
  }

  function filterEmptyArcs(shape, coords) {
    if (!shape) return null;
    var shape2 = [];
    shape.forEach(function(ids) {
      var path = [];
      for (var i=0; i<ids.length; i++) {
        if (arcHasLength(ids[i], coords)) {
          path.push(ids[i]);
        }
      }
      if (path.length > 0) shape2.push(path);
    });
    return shape2.length > 0 ? shape2 : null;
  }

  // Return an array of information about each part/ring in a polygon or polyline shape
  function getPathMetadata(shape, arcs, type) {
    var data = [],
        ids;
    for (var i=0, n=shape && shape.length; i<n; i++) {
      ids = shape[i];
      data.push({
        ids: ids,
        area: type == 'polygon' ? geom.getPlanarPathArea(ids, arcs) : 0,
        bounds: arcs.getSimpleShapeBounds(ids)
      });
    }
    return data;
  }

  function quantizeArcs(arcs, quanta) {
    // Snap coordinates to a grid of @quanta locations on both axes
    // This may snap nearby points to the same coordinates.
    // Consider a cleanup pass to remove dupes, make sure collapsed arcs are
    //   removed on export.
    //
    var bb1 = arcs.getBounds(),
        bb2 = new Bounds(0, 0, quanta-1, quanta-1),
        fw = bb1.getTransform(bb2),
        inv = fw.invert();

    arcs.transformPoints(function(x, y) {
      var p = fw.transform(x, y);
      return inv.transform(Math.round(p[0]), Math.round(p[1]));
    });
  }

  var PathUtils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getAvgSegment: getAvgSegment,
    getAvgSegment2: getAvgSegment2,
    getDirectedArcPresenceTest: getDirectedArcPresenceTest,
    getArcPresenceTest: getArcPresenceTest,
    countArcsInShapes: countArcsInShapes,
    getPathBounds: getPathBounds$1,
    findShapesByArcId: findShapesByArcId,
    reversePath: reversePath,
    clampIntervalByPct: clampIntervalByPct,
    findNextRemovableVertex: findNextRemovableVertex,
    forEachArcId: forEachArcId,
    forEachSegmentInShape: forEachSegmentInShape,
    forEachSegmentInPath: forEachSegmentInPath,
    traversePaths: traversePaths,
    filterEmptyArcs: filterEmptyArcs,
    getPathMetadata: getPathMetadata,
    quantizeArcs: quantizeArcs
  });

  // Utility functions for both paths and points

  // @shp An element of the layer.shapes array
  //   (may be null, or, depending on layer type, an array of points or an array of arrays of arc ids)
  function cloneShape(shp) {
    if (!shp) return null;
    return shp.map(function(part) {
      return part.concat();
    });
  }

  function cloneShapes(arr) {
    return utils.isArray(arr) ? arr.map(cloneShape) : null;
  }

  function forEachShapePart(paths, cb) {
    editShapeParts(paths, cb);
  }

  // Updates shapes array in-place.
  // editPart: callback function
  function editShapes(shapes, editPart) {
    for (var i=0, n=shapes.length; i<n; i++) {
      shapes[i] = editShapeParts(shapes[i], editPart);
    }
  }

  // @parts: geometry of a feature (array of paths, array of points or null)
  // @cb: function(part, i, parts)
  //    If @cb returns an array, it replaces the existing value
  //    If @cb returns null, the path is removed from the feature
  //
  function editShapeParts(parts, cb) {
    if (!parts) return null; // null geometry not edited
    if (!utils.isArray(parts)) error("Expected an array, received:", parts);
    var nulls = 0,
        n = parts.length,
        retn;

    for (var i=0; i<n; i++) {
      retn = cb(parts[i], i, parts);
      if (retn === null) {
        nulls++;
        parts[i] = null;
      } else if (utils.isArray(retn)) {
        parts[i] = retn;
      }
    }
    if (nulls == n) {
      return null;
    } else if (nulls > 0) {
      return parts.filter(function(part) {return !!part;});
    } else {
      return parts;
    }
  }

  // Get max number of parts in a single shape from an array of shapes.
  // Caveat: polygon holes are counted as separate parts.
  function findMaxPartCount(shapes) {
    var maxCount = 0, shp;
    for (var i=0, n=shapes.length; i<n; i++) {
      shp = shapes[i];
      if (shp && shp.length > maxCount) {
        maxCount = shp.length;
      }
    }
    return maxCount;
  }

  var ShapeUtils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    cloneShape: cloneShape,
    cloneShapes: cloneShapes,
    forEachShapePart: forEachShapePart,
    editShapes: editShapes,
    editShapeParts: editShapeParts,
    findMaxPartCount: findMaxPartCount
  });

  // List of encodings supported by iconv-lite:
  // https://github.com/ashtuchkin/iconv-lite/wiki/Supported-Encodings

  var iconv = require('iconv-lite');
  var toUtf8 = getNativeEncoder('utf8');
  var fromUtf8 = getNativeDecoder('utf8');

  // Return list of supported encodings
  function getEncodings() {
    iconv.encodingExists('ascii'); // make iconv load its encodings
    return Object.keys(iconv.encodings);
  }

  function validateEncoding(enc) {
    if (!encodingIsSupported(enc)) {
      stop("Unknown encoding:", enc, "\nRun the -encodings command see a list of supported encodings");
    }
    return enc;
  }

  function stringsAreAscii(arr) {
    return stringIsAscii(arr.join(''));
  }

  function stringIsAscii(str) {
    var c;
    for (var i=0, n=str.length; i<n; i++) {
      c = str.charCodeAt(i);
      if (c >= 128) return false;
    }
    return true;
  }

  function encodingIsUtf8(enc) {
    // treating utf-8 as default
    return !enc || /^utf-?8$/i.test(String(enc));
  }

  // Identify the most common encodings that are supersets of ascii at the
  // single-byte level (meaning that bytes in 0 - 0x7f range must be ascii)
  // (this allows identifying line breaks and other ascii patterns in buffers)
  function encodingIsAsciiCompat(enc) {
    enc = standardizeEncodingName(enc);
    // gb.* selects the Guo Biao encodings
    // big5 in not compatible -- second byte starts at 0x40
    return !enc || /^(win|latin|utf8|ascii|iso88|gb)/.test(enc);
  }

  // Ex. convert UTF-8 to utf8
  function standardizeEncodingName(enc) {
    return (enc || '').toLowerCase().replace(/[_-]/g, '');
  }

  // Similar to Buffer#toString(); tries to speed up utf8 conversion in
  // web browser (when using browserify Buffer shim)
  function bufferToString(buf, enc, start, end) {
    if (start >= 0) {
      buf = buf.slice(start, end);
    }
    return decodeString(buf, enc);
  }

  function getNativeEncoder(enc) {
    var encoder = null;
    enc = standardizeEncodingName(enc);
    if (enc != 'utf8') {
      // TODO: support more encodings if TextEncoder is available
      return null;
    }
    if (typeof TextEncoder != 'undefined') {
      encoder = new TextEncoder(enc);
    }
    return function(str) {
      // Convert Uint8Array from encoder to Buffer (fix for issue #216)
      return encoder ? Buffer.from(encoder.encode(str).buffer) : utils.createBuffer(str, enc);
    };
  }

  function encodeString(str, enc) {
    // TODO: faster ascii encoding?
    var buf;
    if (encodingIsUtf8(enc)) {
      buf = toUtf8(str);
    } else {
      buf = iconv.encode(str, enc);
    }
    return buf;
  }

  function getNativeDecoder(enc) {
    var decoder = null;
    enc = standardizeEncodingName(enc);
    if (enc != 'utf8') {
      // TODO: support more encodings if TextDecoder is available
      return null;
    }
    if (typeof TextDecoder != 'undefined') {
      decoder = new TextDecoder(enc);
    }
    return function(buf) {
      return decoder ? decoder.decode(buf) : buf.toString(enc);
    };
  }

  // @buf a Node Buffer
  function decodeString(buf, enc) {
    var str;
    if (encodingIsUtf8(enc)) {
      str = fromUtf8(buf);
    } else {
      str = iconv.decode(buf, enc);
    }
    return str;
  }

  function encodingIsSupported(raw) {
    var enc = standardizeEncodingName(raw);
    return getEncodings().includes(enc);
  }

  function trimBOM(str) {
    // remove BOM if present
    if (str.charCodeAt(0) == 0xfeff) {
      str = str.substr(1);
    }
    return str;
  }

  function printEncodings() {
    var encodings = getEncodings().filter(function(name) {
      // filter out some aliases and non-applicable encodings
      return !/^(_|cs|internal|ibm|isoir|singlebyte|table|[0-9]|l[0-9]|windows)/.test(name);
    });
    encodings.sort();
    print("Supported encodings:\n" + formatStringsAsGrid(encodings));
  }

  var Encodings = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getEncodings: getEncodings,
    validateEncoding: validateEncoding,
    stringsAreAscii: stringsAreAscii,
    stringIsAscii: stringIsAscii,
    encodingIsUtf8: encodingIsUtf8,
    encodingIsAsciiCompat: encodingIsAsciiCompat,
    standardizeEncodingName: standardizeEncodingName,
    bufferToString: bufferToString,
    encodeString: encodeString,
    decodeString: decodeString,
    encodingIsSupported: encodingIsSupported,
    trimBOM: trimBOM,
    printEncodings: printEncodings
  });

  // Not a general-purpose deep copy function
  function copyRecord(o) {
    var o2 = {}, key, val;
    if (!o) return null;
    for (key in o) {
      if (o.hasOwnProperty(key)) {
        val = o[key];
        if (val == o) {
          // avoid infinite recursion if val is a circular reference, by copying all properties except key
          val = utils.extend({}, val);
          delete val[key];
        }
        o2[key] = val && val.constructor === Object ? copyRecord(val) : val;
      }
    }
    return o2;
  }

  function getValueType(val) {
    var type = null;
    if (utils.isString(val)) {
      type = 'string';
    } else if (utils.isNumber(val)) {
      type = 'number';
    } else if (utils.isBoolean(val)) {
      type = 'boolean';
    } else if (utils.isObject(val)) {
      type = 'object';
    }
    return type;
  }

  // Fill out a data table with undefined values
  // The undefined members will disappear when records are exported as JSON,
  // but will show up when fields are listed using Object.keys()
  function fixInconsistentFields(records) {
    var fields = findIncompleteFields(records);
    patchMissingFields(records, fields);
  }

  function findIncompleteFields(records) {
    var counts = {},
        i, j, keys;
    for (i=0; i<records.length; i++) {
      keys = Object.keys(records[i] || {});
      for (j=0; j<keys.length; j++) {
        counts[keys[j]] = (counts[keys[j]] | 0) + 1;
      }
    }
    return Object.keys(counts).filter(function(k) {return counts[k] < records.length;});
  }

  function patchMissingFields(records, fields) {
    var rec, i, j, f;
    for (i=0; i<records.length; i++) {
      rec = records[i] || (records[i] = {});
      for (j=0; j<fields.length; j++) {
        f = fields[j];
        if (f in rec === false) {
          rec[f] = undefined;
        }
      }
    }
  }

  function fieldListContainsAll(list, fields) {
    return list.indexOf('*') > -1 || utils.difference(fields, list).length === 0;
  }

  function getColumnType(key, records) {
    var type = null,
        rec;
    for (var i=0, n=records.length; i<n; i++) {
      rec = records[i];
      type = rec ? getValueType(rec[key]) : null;
      if (type) break;
    }
    return type;
  }

  function deleteFields(table, test) {
    table.getFields().forEach(function(name) {
      if (test(name)) {
        table.deleteField(name);
      }
    });
  }

  function isInvalidFieldName(f) {
    // Reject empty and all-whitespace strings. TODO: consider other criteria
    return /^\s*$/.test(f);
  }

  // Resolve name conflicts in field names by appending numbers
  // @fields Array of field names
  // @maxLen (optional) Maximum chars in name
  //
  function getUniqFieldNames(fields, maxLen, encoding) {
    var used = {};
    return fields.map(function(name) {
      var i = 0,
          validName;
      do {
        validName = encoding && encoding != 'ascii' ?
          adjustEncodedFieldName(name, maxLen, i, encoding) :
          adjustFieldName(name, maxLen, i);
        i++;
      } while ((validName in used) ||
        // don't replace an existing valid field name with a truncated name
        name != validName && utils.contains(fields, validName));
      used[validName] = true;
      return validName;
    });
  }

  function getUniqFieldValues(records, field) {
    var index = {};
    var values = [];
    records.forEach(function(rec) {
      var val = rec[field];
      if (val in index === false) {
        index[val] = true;
        values.push(val);
      }
    });
    return values;
  }

  // Truncate and/or uniqify a name (if relevant params are present)
  function adjustFieldName(name, maxLen, i) {
    var name2, suff;
    maxLen = maxLen || 256;
    if (!i) {
      name2 = name.substr(0, maxLen);
    } else {
      suff = String(i);
      if (suff.length == 1) {
        suff = '_' + suff;
      }
      name2 = name.substr(0, maxLen - suff.length) + suff;
    }
    return name2;
  }

  // Truncate and/or uniqify a name (if relevant params are present)
  function adjustEncodedFieldName(name, maxLen, i, encoding) {
    var suff = i ? String(i) : '';
    var name2 = name + suff;
    var buf = encodeString(name2, encoding);
    if (buf.length > (maxLen || 256)) {
      name = name.substr(0, name.length - 1);
      return adjustEncodedFieldName(name, maxLen, i, encoding);
    }
    return name2;
  }

  function applyFieldOrder(arr, option) {
    if (option == 'ascending') {
      arr.sort(function(a, b) {
        return a.toLowerCase() < b.toLowerCase() ? -1 : 1;
      });
    }
    return arr;
  }

  function findFieldNames(records, order) {
    var first = records[0];
    var names = first ? Object.keys(first) : [];
    return applyFieldOrder(names, order);
  }

  var DataUtils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    copyRecord: copyRecord,
    getValueType: getValueType,
    fixInconsistentFields: fixInconsistentFields,
    fieldListContainsAll: fieldListContainsAll,
    getColumnType: getColumnType,
    deleteFields: deleteFields,
    isInvalidFieldName: isInvalidFieldName,
    getUniqFieldNames: getUniqFieldNames,
    getUniqFieldValues: getUniqFieldValues,
    applyFieldOrder: applyFieldOrder,
    findFieldNames: findFieldNames
  });

  function DataTable(obj) {
    var records;
    if (utils.isArray(obj)) {
      records = obj;
    } else {
      records = [];
      // integer object: create empty records
      if (utils.isInteger(obj)) {
        for (var i=0; i<obj; i++) {
          records.push({});
        }
      } else if (obj) {
        error("Invalid DataTable constructor argument:", obj);
      }
    }

    this.getRecords = function() {
      return records;
    };

    // Same-name method in ShapefileTable doesn't require parsing the entire DBF file
    this.getReadOnlyRecordAt = function(i) {
      return copyRecord(records[i]); // deep-copies plain objects but not other constructed objects
    };
  }

  DataTable.prototype = {

    fieldExists: function(name) {
      return utils.contains(this.getFields(), name);
    },

    toString: function() {return JSON.stringify(this);},

    toJSON: function() {
      return this.getRecords();
    },

    addField: function(name, init) {
      var useFunction = utils.isFunction(init);
      if (!utils.isNumber(init) && !utils.isString(init) && !useFunction) {
        error("DataTable#addField() requires a string, number or function for initialization");
      }
      if (this.fieldExists(name)) error("DataTable#addField() tried to add a field that already exists:", name);
      // var dataFieldRxp = /^[a-zA-Z_][a-zA-Z_0-9]*$/;
      // if (!dataFieldRxp.test(name)) error("DataTable#addField() invalid field name:", name);

      this.getRecords().forEach(function(obj, i) {
        obj[name] = useFunction ? init(obj, i) : init;
      });
    },

    getRecordAt: function(i) {
      return this.getRecords()[i];
    },

    addIdField: function() {
      this.addField('FID', function(obj, i) {
        return i;
      });
    },

    deleteField: function(f) {
      this.getRecords().forEach(function(o) {
        delete o[f];
      });
    },

    getFields: function() {
      return findFieldNames(this.getRecords());
    },

    isEmpty: function() {
      return this.getFields().length === 0 || this.size() === 0;
    },

    update: function(f) {
      var records = this.getRecords();
      for (var i=0, n=records.length; i<n; i++) {
        records[i] = f(records[i], i);
      }
    },

    clone: function() {
      // TODO: this could be sped up using a record constructor function
      // (see getRecordConstructor() in DbfReader)
      var records2 = this.getRecords().map(copyRecord);
      return new DataTable(records2);
    },

    size: function() {
      return this.getRecords().length;
    }
  };

  // Insert a column of values into a (new or existing) data field
  function insertFieldValues(lyr, fieldName, values) {
    var size = getFeatureCount(lyr) || values.length,
        table = lyr.data = (lyr.data || new DataTable(size)),
        records = table.getRecords(),
        rec, val;

    for (var i=0, n=records.length; i<n; i++) {
      rec = records[i];
      val = values[i];
      if (!rec) rec = records[i] = {};
      rec[fieldName] = val === undefined ? null : val;
    }
  }

  function getLayerDataTable(lyr) {
    var data = lyr.data;
    if (!data) {
      data = lyr.data = new DataTable(lyr.shapes ? lyr.shapes.length : 0);
    }
    return data;
  }

  function layerHasGeometry(lyr) {
    return layerHasPaths(lyr) || layerHasPoints(lyr);
  }

  function layerHasPaths(lyr) {
    return (lyr.geometry_type == 'polygon' || lyr.geometry_type == 'polyline') &&
      layerHasNonNullShapes(lyr);
  }

  function layerHasPoints(lyr) {
    return lyr.geometry_type == 'point' && layerHasNonNullShapes(lyr);
  }

  function layerHasNonNullShapes(lyr) {
    return utils.some(lyr.shapes || [], function(shp) {
      return !!shp;
    });
  }

  function deleteFeatureById(lyr, i) {
    if (lyr.shapes) lyr.shapes.splice(i, 1);
    if (lyr.data) lyr.data.getRecords().splice(i, 1);
  }

  // TODO: move elsewhere (moved here from mapshaper-point-utils to avoid circular dependency)
  function transformPointsInLayer(lyr, f) {
    if (layerHasPoints(lyr)) {
      forEachPoint(lyr.shapes, function(p) {
        var p2 = f(p[0], p[1]);
        p[0] = p2[0];
        p[1] = p2[1];
      });
    }
  }

  function getFeatureCount(lyr) {
    var count = 0;
    if (lyr.data) {
      count = lyr.data.size();
    } else if (lyr.shapes) {
      count = lyr.shapes.length;
    }
    return count;
  }

  function layerIsEmpty(lyr) {
    return getFeatureCount(lyr) == 0;
  }

  function requireDataField(obj, field, msg) {
    var data = obj.fieldExists ? obj : obj.data; // accept layer or DataTable
    if (!field) stop('Missing a field parameter');
    if (!data || !data.fieldExists(field)) {
      stop(msg || 'Missing a field named:', field);
    }
  }

  function requireDataFields(table, fields) {
    if (!fields || !fields.length) return;
    if (!table) {
      stop("Missing attribute data");
    }
    var dataFields = table.getFields(),
        missingFields = utils.difference(fields, dataFields);
    if (missingFields.length > 0) {
      stop("Table is missing one or more fields:\n",
          missingFields, "\nExisting fields:", '\n' + formatStringsAsGrid(dataFields));
    }
  }

  function layerTypeMessage(lyr, defaultMsg, customMsg) {
    var msg;
    // check that custom msg is a string (could be an index if require function is called by forEach)
    if (customMsg && utils.isString(customMsg)) {
      msg = customMsg;
    } else {
      msg = defaultMsg + ', ';
      if (!lyr || !lyr.geometry_type) {
        msg += 'received a layer with no geometry';
      } else {
        msg += 'received a ' + lyr.geometry_type + ' layer';
      }
    }
    return msg;
  }

  function requirePointLayer(lyr, msg) {
    if (!lyr || lyr.geometry_type !== 'point')
      stop(layerTypeMessage(lyr, "Expected a point layer", msg));
  }

  function requirePolylineLayer(lyr, msg) {
    if (!lyr || lyr.geometry_type !== 'polyline')
      stop(layerTypeMessage(lyr, "Expected a polyline layer", msg));
  }

  function requirePolygonLayer(lyr, msg) {
    if (!lyr || lyr.geometry_type !== 'polygon')
      stop(layerTypeMessage(lyr, "Expected a polygon layer", msg));
  }

  function requirePathLayer(lyr, msg) {
    if (!lyr || !layerHasPaths(lyr))
      stop(layerTypeMessage(lyr, "Expected a polygon or polyline layer", msg));
  }

  // Used by info command and gui layer menu
  function getLayerSourceFile(lyr, dataset) {
    var inputs = dataset.info && dataset.info.input_files;
    return inputs && inputs[0] || '';
  }

  // Divide a collection of features with mixed types into layers of a single type
  // (Used for importing TopoJSON and GeoJSON features)
  function divideFeaturesByType(shapes, properties, types) {
    var typeSet = utils.uniq(types);
    var layers = typeSet.map(function(geoType) {
      var p = [],
          s = [],
          dataNulls = 0,
          rec;
      for (var i=0, n=shapes.length; i<n; i++) {
        if (types[i] != geoType) continue;
        if (geoType) s.push(shapes[i]);
        rec = properties[i];
        p.push(rec);
        if (!rec) dataNulls++;
      }
      return {
        geometry_type: geoType,
        shapes: s,
        data: dataNulls < s.length ? new DataTable(p) : null
      };
    });
    return layers;
  }

  // make a stub copy if the no_replace option is given, else pass thru src layer
  function getOutputLayer(src, opts) {
    return opts && opts.no_replace ? {geometry_type: src.geometry_type} : src;
  }

  // Make a deep copy of a layer
  function copyLayer(lyr) {
    var copy = copyLayerShapes(lyr);
    if (copy.data) {
      copy.data = copy.data.clone();
    }
    return copy;
  }

  // Make a shallow copy of a path layer; replace layer.shapes with an array that is
  // filtered to exclude paths containing any of the arc ids contained in arcIds.
  // arcIds: an array of (non-negative) arc ids to exclude
  function filterPathLayerByArcIds(pathLyr, arcIds) {
    var index = arcIds.reduce(function(memo, id) {
      memo[id] = true;
      return memo;
    }, {});
    // deep copy shapes; this could be optimized to only copy shapes that are modified
    var shapes = cloneShapes(pathLyr.shapes);
    editShapes(shapes, onPath); // remove paths that are missing shapes
    return utils.defaults({shapes: shapes}, pathLyr);

    function onPath(path) {
      for (var i=0; i<path.length; i++) {
        if (absArcId(path[i]) in index) {
          return null;
        }
      }
      return path;
    }
  }

  function copyLayerShapes(lyr) {
    var copy = utils.extend({}, lyr);
    if (lyr.shapes) {
      copy.shapes = cloneShapes(lyr.shapes);
    }
    return copy;
  }

  function countMultiPartFeatures(shapes) {
    var count = 0;
    for (var i=0, n=shapes.length; i<n; i++) {
      if (shapes[i] && shapes[i].length > 1) count++;
    }
    return count;
  }

  // moving this here from mapshaper-path-utils to avoid circular dependency
  function getArcPresenceTest2(layers, arcs) {
    var counts = countArcsInLayers(layers, arcs);
    return function(arcId) {
      return counts[absArcId(arcId)] > 0;
    };
  }

  // Count arcs in a collection of layers
  function countArcsInLayers(layers, arcs) {
    var counts = new Uint32Array(arcs.size());
    layers.filter(layerHasPaths).forEach(function(lyr) {
      countArcsInShapes(lyr.shapes, counts);
    });
    return counts;
  }

  function getLayerBounds(lyr, arcs) {
    var bounds = null;
    if (lyr.geometry_type == 'point') {
      bounds = getPointBounds(lyr.shapes);
    } else if (lyr.geometry_type == 'polygon' || lyr.geometry_type == 'polyline') {
      bounds = getPathBounds$1(lyr.shapes, arcs);
    } else {
      // just return null if layer has no bounds
      // error("Layer is missing a valid geometry type");
    }
    return bounds;
  }

  function isolateLayer(layer, dataset) {
    return utils.defaults({
      layers: dataset.layers.filter(function(lyr) {return lyr == layer;})
    }, dataset);
  }

  function initDataTable(lyr) {
    lyr.data = new DataTable(getFeatureCount(lyr));
  }

  var LayerUtils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    insertFieldValues: insertFieldValues,
    getLayerDataTable: getLayerDataTable,
    layerHasGeometry: layerHasGeometry,
    layerHasPaths: layerHasPaths,
    layerHasPoints: layerHasPoints,
    layerHasNonNullShapes: layerHasNonNullShapes,
    deleteFeatureById: deleteFeatureById,
    transformPointsInLayer: transformPointsInLayer,
    getFeatureCount: getFeatureCount,
    layerIsEmpty: layerIsEmpty,
    requireDataField: requireDataField,
    requireDataFields: requireDataFields,
    layerTypeMessage: layerTypeMessage,
    requirePointLayer: requirePointLayer,
    requirePolylineLayer: requirePolylineLayer,
    requirePolygonLayer: requirePolygonLayer,
    requirePathLayer: requirePathLayer,
    getLayerSourceFile: getLayerSourceFile,
    divideFeaturesByType: divideFeaturesByType,
    getOutputLayer: getOutputLayer,
    copyLayer: copyLayer,
    filterPathLayerByArcIds: filterPathLayerByArcIds,
    copyLayerShapes: copyLayerShapes,
    countMultiPartFeatures: countMultiPartFeatures,
    getArcPresenceTest2: getArcPresenceTest2,
    countArcsInLayers: countArcsInLayers,
    getLayerBounds: getLayerBounds,
    isolateLayer: isolateLayer,
    initDataTable: initDataTable
  });

  // Test if the second endpoint of an arc is the endpoint of any path in any layer
  function getPathEndpointTest(layers, arcs) {
    var index = new Uint8Array(arcs.size());
    layers.forEach(function(lyr) {
      if (layerHasPaths(lyr)) {
        lyr.shapes.forEach(addShape);
      }
    });

    function addShape(shape) {
      forEachShapePart(shape, addPath);
    }

    function addPath(path) {
      addEndpoint(~path[0]);
      addEndpoint(path[path.length - 1]);
    }

    function addEndpoint(arcId) {
      var absId = absArcId(arcId);
      var fwd = absId == arcId;
      index[absId] |= fwd ? 1 : 2;
    }

    return function(arcId) {
      var absId = absArcId(arcId);
      var fwd = absId == arcId;
      var code = index[absId];
      return fwd ? (code & 1) == 1 : (code & 2) == 2;
    };
  }

  var PathEndpoints = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getPathEndpointTest: getPathEndpointTest
  });

  // Get function to Hash an x, y point to a non-negative integer
  function getXYHash(size) {
    var buf = new ArrayBuffer(16),
        floats = new Float64Array(buf),
        uints = new Uint32Array(buf),
        lim = size | 0;
    if (lim > 0 === false) {
      throw new Error("Invalid size param: " + size);
    }

    return function(x, y) {
      var u = uints, h;
      floats[0] = x;
      floats[1] = y;
      h = u[0] ^ u[1];
      h = h << 5 ^ h >> 7 ^ u[2] ^ u[3];
      return (h & 0x7fffffff) % lim;
    };
  }

  // Get function to Hash a single coordinate to a non-negative integer
  function getXHash(size) {
    var buf = new ArrayBuffer(8),
        floats = new Float64Array(buf),
        uints = new Uint32Array(buf),
        lim = size | 0;
    if (lim > 0 === false) {
      throw new Error("Invalid size param: " + size);
    }

    return function(x) {
      var h;
      floats[0] = x;
      h = uints[0] ^ uints[1];
      h = h << 5 ^ h >> 7;
      return (h & 0x7fffffff) % lim;
    };
  }

  function initPointChains(xx, yy) {
    var chainIds = initHashChains(xx, yy),
        j, next, prevMatchId, prevUnmatchId;

    // disentangle, reverse and close the chains created by initHashChains()
    for (var i = xx.length-1; i>=0; i--) {
      next = chainIds[i];
      if (next >= i) continue;
      prevMatchId = i;
      prevUnmatchId = -1;
      do {
        j = next;
        next = chainIds[j];
        if (yy[j] == yy[i] && xx[j] == xx[i]) {
          chainIds[j] = prevMatchId;
          prevMatchId = j;
        } else {
          if (prevUnmatchId > -1) {
            chainIds[prevUnmatchId] = j;
          }
          prevUnmatchId = j;
        }
      } while (next < j);
      if (prevUnmatchId > -1) {
        // Make sure last unmatched entry is terminated
        chainIds[prevUnmatchId] = prevUnmatchId;
      }
      chainIds[i] = prevMatchId; // close the chain
    }
    return chainIds;
  }

  function initHashChains(xx, yy) {
    // Performance doesn't improve much above ~1.3 * point count
    var n = xx.length,
        m = Math.floor(n * 1.3) || 1,
        hash = getXYHash(m),
        hashTable = new Int32Array(m),
        chainIds = new Int32Array(n), // Array to be filled with chain data
        key, j, i, x, y;

    for (i=0; i<n; i++) {
      x = xx[i];
      y = yy[i];
      if (x != x || y != y) {
        j = -1; // NaN coord: no hash entry, one-link chain
      } else {
        key = hash(x, y);
        j = hashTable[key] - 1; // coord ids are 1-based in hash table; 0 used as null value.
        hashTable[key] = i + 1;
      }
      chainIds[i] = j >= 0 ? j : i; // first item in a chain points to self
    }
    return chainIds;
  }

  // Coordinate iterators
  //
  // Interface:
  //   properties: x, y
  //   method: hasNext()
  //
  // Usage:
  //   while (iter.hasNext()) {
  //     iter.x, iter.y; // do something w/ x & y
  //   }

  // Iterate over an array of [x, y] points
  //
  function PointIter(points) {
    var n = points.length,
        i = 0,
        iter = {
          x: 0,
          y: 0,
          hasNext: hasNext
        };
    function hasNext() {
      if (i >= n) return false;
      iter.x = points[i][0];
      iter.y = points[i][1];
      i++;
      return true;
    }
    return iter;
  }


  // Constructor takes arrays of coords: xx, yy, zz (optional)
  //
  function ArcIter(xx, yy) {
    this._i = 0;
    this._n = 0;
    this._inc = 1;
    this._xx = xx;
    this._yy = yy;
    this.i = 0;
    this.x = 0;
    this.y = 0;
  }

  ArcIter.prototype.init = function(i, len, fw) {
    if (fw) {
      this._i = i;
      this._inc = 1;
    } else {
      this._i = i + len - 1;
      this._inc = -1;
    }
    this._n = len;
    return this;
  };

  ArcIter.prototype.hasNext = function() {
    var i = this._i;
    if (this._n > 0) {
      this._i = i + this._inc;
      this.x = this._xx[i];
      this.y = this._yy[i];
      this.i = i;
      this._n--;
      return true;
    }
    return false;
  };

  function FilteredArcIter(xx, yy, zz) {
    var _zlim = 0,
        _i = 0,
        _inc = 1,
        _stop = 0;

    this.init = function(i, len, fw, zlim) {
      _zlim = zlim || 0;
      if (fw) {
        _i = i;
        _inc = 1;
        _stop = i + len;
      } else {
        _i = i + len - 1;
        _inc = -1;
        _stop = i - 1;
      }
      return this;
    };

    this.hasNext = function() {
      // using local vars is significantly faster when skipping many points
      var zarr = zz,
          i = _i,
          j = i,
          zlim = _zlim,
          stop = _stop,
          inc = _inc;
      if (i == stop) return false;
      do {
        j += inc;
      } while (j != stop && zarr[j] < zlim);
      _i = j;
      this.x = xx[i];
      this.y = yy[i];
      this.i = i;
      return true;
    };
  }

  // Iterate along a path made up of one or more arcs.
  //
  function ShapeIter(arcs) {
    this._arcs = arcs;
    this._i = 0;
    this._n = 0;
    this.x = 0;
    this.y = 0;
  }

  ShapeIter.prototype.hasNext = function() {
    var arc = this._arc;
    if (this._i < this._n === false) {
      return false;
    }
    if (arc.hasNext()) {
      this.x = arc.x;
      this.y = arc.y;
      return true;
    }
    this.nextArc();
    return this.hasNext();
  };

  ShapeIter.prototype.init = function(ids) {
    this._ids = ids;
    this._n = ids.length;
    this.reset();
    return this;
  };

  ShapeIter.prototype.nextArc = function() {
    var i = this._i + 1;
    if (i < this._n) {
      this._arc = this._arcs.getArcIter(this._ids[i]);
      if (i > 0) this._arc.hasNext(); // skip first point
    }
    this._i = i;
  };

  ShapeIter.prototype.reset = function() {
    this._i = -1;
    this.nextArc();
  };

  var ShapeIter$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    PointIter: PointIter,
    ArcIter: ArcIter,
    FilteredArcIter: FilteredArcIter,
    ShapeIter: ShapeIter
  });

  // Returns a function for converting simplification ratio [0-1] to an interval value.
  // If the dataset is large, the value is an approximation (for speed while using slider)
  function getThresholdFunction(arcs) {
    var size = arcs.getPointCount(),
        nth = Math.ceil(size / 5e5),
        sortedThresholds = arcs.getRemovableThresholds(nth);
        // Sort simplification thresholds for all non-endpoint vertices
        // for quick conversion of simplification percentage to threshold value.
        // For large datasets, use every nth point, for faster sorting.
        // utils.quicksort(sortedThresholds, false); // descending
        utils.quicksort(sortedThresholds, true); // ascending

    return function(pct) {
      var n = sortedThresholds.length;
      var rank = retainedPctToRank(pct, sortedThresholds.length);
      if (rank < 1) return 0;
      if (rank > n) return Infinity;
      return sortedThresholds[rank-1];
    };
  }

  // Return integer rank of n (1-indexed) or 0 if pct <= 0 or n+1 if pct >= 1
  function retainedPctToRank(pct, n) {
    var rank;
    if (n === 0 || pct >= 1) {
      rank = 0;
    } else if (pct <= 0) {
      rank = n + 1;
    } else {
      rank = Math.floor((1 - pct) * (n + 2));
    }
    return rank;
  }

  // nth (optional): sample every nth threshold (use estimate for speed)
  function getThresholdByPct(pct, arcs, nth) {
    var tmp = arcs.getRemovableThresholds(nth),
        rank = retainedPctToRank(pct, tmp.length);
    if (rank < 1) return 0;
    if (rank > tmp.length) return Infinity;
    return utils.findValueByRank(tmp, rank);
  }

  var SimplifyPct = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getThresholdFunction: getThresholdFunction,
    getThresholdByPct: getThresholdByPct
  });

  function getWorldBounds(e) {
    e = utils.isFiniteNumber(e) ? e : 1e-10;
    return [-180 + e, -90 + e, 180 - e, 90 - e];
  }

  function probablyDecimalDegreeBounds(b) {
    var world = getWorldBounds(-1), // add a bit of excess
        bbox = (b instanceof Bounds) ? b.toArray() : b;
    return geom.containsBounds(world, bbox);
  }

  function clampToWorldBounds(b) {
    var bbox = (b instanceof Bounds) ? b.toArray() : b;
    return new Bounds().setBounds(Math.max(bbox[0], -180), Math.max(bbox[1], -90),
        Math.min(bbox[2], 180), Math.min(bbox[3], 90));
  }

  var LatLon = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getWorldBounds: getWorldBounds,
    probablyDecimalDegreeBounds: probablyDecimalDegreeBounds,
    clampToWorldBounds: clampToWorldBounds
  });

  // An interface for managing a collection of paths.
  // Constructor signatures:
  //
  // ArcCollection(arcs)
  //    arcs is an array of polyline arcs; each arc is an array of points: [[x0, y0], [x1, y1], ... ]
  //
  // ArcCollection(nn, xx, yy)
  //    nn is an array of arc lengths; xx, yy are arrays of concatenated coords;
  function ArcCollection() {
    var _xx, _yy,  // coordinates data
        _ii, _nn,  // indexes, sizes
        _zz, _zlimit = 0, // simplification
        _bb, _allBounds, // bounding boxes
        _arcIter, _filteredArcIter; // path iterators

    if (arguments.length == 1) {
      initLegacyArcs(arguments[0]);  // want to phase this out
    } else if (arguments.length == 3) {
      initXYData.apply(this, arguments);
    } else {
      error("ArcCollection() Invalid arguments");
    }

    function initLegacyArcs(arcs) {
      var xx = [], yy = [];
      var nn = arcs.map(function(points) {
        var n = points ? points.length : 0;
        for (var i=0; i<n; i++) {
          xx.push(points[i][0]);
          yy.push(points[i][1]);
        }
        return n;
      });
      initXYData(nn, xx, yy);
    }

    function initXYData(nn, xx, yy) {
      var size = nn.length;
      if (nn instanceof Array) nn = new Uint32Array(nn);
      if (xx instanceof Array) xx = new Float64Array(xx);
      if (yy instanceof Array) yy = new Float64Array(yy);
      _xx = xx;
      _yy = yy;
      _nn = nn;
      _zz = null;
      _zlimit = 0;
      _filteredArcIter = null;

      // generate array of starting idxs of each arc
      _ii = new Uint32Array(size);
      for (var idx = 0, j=0; j<size; j++) {
        _ii[j] = idx;
        idx += nn[j];
      }

      if (idx != _xx.length || _xx.length != _yy.length) {
        error("ArcCollection#initXYData() Counting error");
      }

      initBounds();
      // Pre-allocate some path iterators for repeated use.
      _arcIter = new ArcIter(_xx, _yy);
      return this;
    }

    function initZData(zz) {
      if (!zz) {
        _zz = null;
        _zlimit = 0;
        _filteredArcIter = null;
      } else {
        if (zz.length != _xx.length) error("ArcCollection#initZData() mismatched arrays");
        if (zz instanceof Array) zz = new Float64Array(zz);
        _zz = zz;
        _filteredArcIter = new FilteredArcIter(_xx, _yy, _zz);
      }
    }

    function initBounds() {
      var data = calcArcBounds2(_xx, _yy, _nn);
      _bb = data.bb;
      _allBounds = data.bounds;
    }

    function calcArcBounds2(xx, yy, nn) {
      var numArcs = nn.length,
          bb = new Float64Array(numArcs * 4),
          bounds = new Bounds(),
          arcOffs = 0,
          arcLen,
          j, b;
      for (var i=0; i<numArcs; i++) {
        arcLen = nn[i];
        if (arcLen > 0) {
          j = i * 4;
          b = calcArcBounds(xx, yy, arcOffs, arcLen);
          bb[j++] = b[0];
          bb[j++] = b[1];
          bb[j++] = b[2];
          bb[j] = b[3];
          arcOffs += arcLen;
          bounds.mergeBounds(b);
        }
      }
      return {
        bb: bb,
        bounds: bounds
      };
    }

    this.updateVertexData = function(nn, xx, yy, zz) {
      initXYData(nn, xx, yy);
      initZData(zz || null);
    };

    // Give access to raw data arrays...
    this.getVertexData = function() {
      return {
        xx: _xx,
        yy: _yy,
        zz: _zz,
        bb: _bb,
        nn: _nn,
        ii: _ii
      };
    };

    this.getCopy = function() {
      var copy = new ArcCollection(new Int32Array(_nn), new Float64Array(_xx),
          new Float64Array(_yy));
      if (_zz) {
        copy.setThresholds(new Float64Array(_zz));
        copy.setRetainedInterval(_zlimit);
      }
      return copy;
    };

    function getFilteredPointCount() {
      var zz = _zz, z = _zlimit;
      if (!zz || !z) return this.getPointCount();
      var count = 0;
      for (var i=0, n = zz.length; i<n; i++) {
        if (zz[i] >= z) count++;
      }
      return count;
    }

    function getFilteredVertexData() {
      var len2 = getFilteredPointCount();
      var arcCount = _nn.length;
      var xx2 = new Float64Array(len2),
          yy2 = new Float64Array(len2),
          zz2 = new Float64Array(len2),
          nn2 = new Int32Array(arcCount),
          i=0, i2 = 0,
          n, n2;

      for (var arcId=0; arcId < arcCount; arcId++) {
        n2 = 0;
        n = _nn[arcId];
        for (var end = i+n; i < end; i++) {
          if (_zz[i] >= _zlimit) {
            xx2[i2] = _xx[i];
            yy2[i2] = _yy[i];
            zz2[i2] = _zz[i];
            i2++;
            n2++;
          }
        }
        if (n2 == 1) {
          error("Collapsed arc");
          // This should not happen (endpoints should be z == Infinity)
          // Could handle like this, instead of throwing an error:
          // n2 = 0;
          // xx2.pop();
          // yy2.pop();
          // zz2.pop();
        } else if (n2 === 0) {
          // collapsed arc... ignoring
        }
        nn2[arcId] = n2;
      }
      return {
        xx: xx2,
        yy: yy2,
        zz: zz2,
        nn: nn2
      };
    }

    this.getFilteredCopy = function() {
      if (!_zz || _zlimit === 0) return this.getCopy();
      var data = getFilteredVertexData();
      var copy = new ArcCollection(data.nn, data.xx, data.yy);
      copy.setThresholds(data.zz);
      return copy;
    };

    // Return arcs as arrays of [x, y] points (intended for testing).
    this.toArray = function() {
      var arr = [];
      this.forEach(function(iter) {
        var arc = [];
        while (iter.hasNext()) {
          arc.push([iter.x, iter.y]);
        }
        arr.push(arc);
      });
      return arr;
    };

    this.toJSON = function() {
      return this.toArray();
    };

    // @cb function(i, j, xx, yy)
    this.forEachArcSegment = function(arcId, cb) {
      var fw = arcId >= 0,
          absId = fw ? arcId : ~arcId,
          zlim = this.getRetainedInterval(),
          n = _nn[absId],
          step = fw ? 1 : -1,
          v1 = fw ? _ii[absId] : _ii[absId] + n - 1,
          v2 = v1,
          xx = _xx, yy = _yy, zz = _zz,
          count = 0;

      for (var j = 1; j < n; j++) {
        v2 += step;
        if (zlim === 0 || zz[v2] >= zlim) {
          cb(v1, v2, xx, yy);
          v1 = v2;
          count++;
        }
      }
      return count;
    };

    // @cb function(i, j, xx, yy)
    this.forEachSegment = function(cb) {
      var count = 0;
      for (var i=0, n=this.size(); i<n; i++) {
        count += this.forEachArcSegment(i, cb);
      }
      return count;
    };

    this.transformPoints = function(f) {
      var xx = _xx, yy = _yy, arcId = -1, n = 0, p;
      for (var i=0, len=xx.length; i<len; i++, n--) {
        while (n === 0) {
          n = _nn[++arcId];
        }
        p = f(xx[i], yy[i], arcId);
        if (p) {
          xx[i] = p[0];
          yy[i] = p[1];
        }
      }
      initBounds();
    };

    // Return an ArcIter object for each path in the dataset
    //
    this.forEach = function(cb) {
      for (var i=0, n=this.size(); i<n; i++) {
        cb(this.getArcIter(i), i);
      }
    };

    // Iterate over arcs with access to low-level data
    //
    this.forEach2 = function(cb) {
      for (var arcId=0, n=this.size(); arcId<n; arcId++) {
        cb(_ii[arcId], _nn[arcId], _xx, _yy, _zz, arcId);
      }
    };

    this.forEach3 = function(cb) {
      var start, end, xx, yy, zz;
      for (var arcId=0, n=this.size(); arcId<n; arcId++) {
        start = _ii[arcId];
        end = start + _nn[arcId];
        xx = _xx.subarray(start, end);
        yy = _yy.subarray(start, end);
        if (_zz) zz = _zz.subarray(start, end);
        cb(xx, yy, zz, arcId);
      }
    };

    // Remove arcs that don't pass a filter test and re-index arcs
    // Return array mapping original arc ids to re-indexed ids. If arr[n] == -1
    // then arc n was removed. arr[n] == m indicates that the arc at n was
    // moved to index m.
    // Return null if no arcs were re-indexed (and no arcs were removed)
    //
    this.filter = function(cb) {
      var test = function(i) {
        return cb(this.getArcIter(i), i);
      }.bind(this);
      return this.deleteArcs(test);
    };

    this.deleteArcs = function(test) {
      var n = this.size(),
          map = new Int32Array(n),
          goodArcs = 0,
          goodPoints = 0;
      for (var i=0; i<n; i++) {
        if (test(i)) {
          map[i] = goodArcs++;
          goodPoints += _nn[i];
        } else {
          map[i] = -1;
        }
      }
      if (goodArcs < n) {
        condenseArcs(map);
      }
      return map;
    };

    function condenseArcs(map) {
      var goodPoints = 0,
          goodArcs = 0,
          copyElements = utils.copyElements,
          k, arcLen;
      for (var i=0, n=map.length; i<n; i++) {
        k = map[i];
        arcLen = _nn[i];
        if (k > -1) {
          copyElements(_xx, _ii[i], _xx, goodPoints, arcLen);
          copyElements(_yy, _ii[i], _yy, goodPoints, arcLen);
          if (_zz) copyElements(_zz, _ii[i], _zz, goodPoints, arcLen);
          _nn[k] = arcLen;
          goodPoints += arcLen;
          goodArcs++;
        }
      }

      initXYData(_nn.subarray(0, goodArcs), _xx.subarray(0, goodPoints),
          _yy.subarray(0, goodPoints));
      if (_zz) initZData(_zz.subarray(0, goodPoints));
    }

    this.dedupCoords = function() {
      var arcId = 0, i = 0, i2 = 0,
          arcCount = this.size(),
          zz = _zz,
          arcLen, arcLen2;
      while (arcId < arcCount) {
        arcLen = _nn[arcId];
        arcLen2 = dedupArcCoords(i, i2, arcLen, _xx, _yy, zz);
        _nn[arcId] = arcLen2;
        i += arcLen;
        i2 += arcLen2;
        arcId++;
      }
      if (i > i2) {
        initXYData(_nn, _xx.subarray(0, i2), _yy.subarray(0, i2));
        if (zz) initZData(zz.subarray(0, i2));
      }
      return i - i2;
    };

    this.getVertex = function(arcId, nth) {
      var i = this.indexOfVertex(arcId, nth);
      return {
        x: _xx[i],
        y: _yy[i]
      };
    };

    // @nth: index of vertex. ~(idx) starts from the opposite endpoint
    this.indexOfVertex = function(arcId, nth) {
      var absId = arcId < 0 ? ~arcId : arcId,
          len = _nn[absId];
      if (nth < 0) nth = len + nth;
      if (absId != arcId) nth = len - nth - 1;
      if (nth < 0 || nth >= len) error("[ArcCollection] out-of-range vertex id");
      return _ii[absId] + nth;
    };

    // Tests if arc endpoints have same x, y coords
    // (arc may still have collapsed);
    this.arcIsClosed = function(arcId) {
      var i = this.indexOfVertex(arcId, 0),
          j = this.indexOfVertex(arcId, -1);
      return i != j && _xx[i] == _xx[j] && _yy[i] == _yy[j];
    };

    // Tests if first and last segments mirror each other
    // A 3-vertex arc with same endpoints tests true
    this.arcIsLollipop = function(arcId) {
      var len = this.getArcLength(arcId),
          i, j;
      if (len <= 2 || !this.arcIsClosed(arcId)) return false;
      i = this.indexOfVertex(arcId, 1);
      j = this.indexOfVertex(arcId, -2);
      return _xx[i] == _xx[j] && _yy[i] == _yy[j];
    };

    this.arcIsDegenerate = function(arcId) {
      var iter = this.getArcIter(arcId);
      var i = 0,
          x, y;
      while (iter.hasNext()) {
        if (i > 0) {
          if (x != iter.x || y != iter.y) return false;
        }
        x = iter.x;
        y = iter.y;
        i++;
      }
      return true;
    };

    this.getArcLength = function(arcId) {
      return _nn[absArcId(arcId)];
    };

    this.getArcIter = function(arcId) {
      var fw = arcId >= 0,
          i = fw ? arcId : ~arcId,
          iter = _zz && _zlimit ? _filteredArcIter : _arcIter;
      if (i >= _nn.length) {
        error("#getArcId() out-of-range arc id:", arcId);
      }
      return iter.init(_ii[i], _nn[i], fw, _zlimit);
    };

    this.getShapeIter = function(ids) {
      return new ShapeIter(this).init(ids);
    };

    // Add simplification data to the dataset
    // @thresholds is either a single typed array or an array of arrays of removal thresholds for each arc;
    //
    this.setThresholds = function(thresholds) {
      var n = this.getPointCount(),
          zz = null;
      if (!thresholds) {
        // nop
      } else if (thresholds.length == n) {
        zz = thresholds;
      } else if (thresholds.length == this.size()) {
        zz = flattenThresholds(thresholds, n);
      } else {
        error("Invalid threshold data");
      }
      initZData(zz);
      return this;
    };

    function flattenThresholds(arr, n) {
      var zz = new Float64Array(n),
          i = 0;
      arr.forEach(function(arr) {
        for (var j=0, n=arr.length; j<n; i++, j++) {
          zz[i] = arr[j];
        }
      });
      if (i != n) error("Mismatched thresholds");
      return zz;
    }

    // bake in current simplification level, if any
    this.flatten = function() {
      if (_zlimit > 0) {
        var data = getFilteredVertexData();
        this.updateVertexData(data.nn, data.xx, data.yy);
        _zlimit = 0;
      } else {
        _zz = null;
      }
    };

    this.getRetainedInterval = function() {
      return _zlimit;
    };

    this.setRetainedInterval = function(z) {
      _zlimit = z;
      return this;
    };

    this.getRetainedPct = function() {
      return this.getPctByThreshold(_zlimit);
    };

    this.setRetainedPct = function(pct) {
      if (pct >= 1) {
        _zlimit = 0;
      } else {
        _zlimit = this.getThresholdByPct(pct);
        _zlimit = clampIntervalByPct(_zlimit, pct);
      }
      return this;
    };

    // Return array of z-values that can be removed for simplification
    //
    this.getRemovableThresholds = function(nth) {
      if (!_zz) error("[arcs] Missing simplification data.");
      var skip = nth | 1,
          arr = new Float64Array(Math.ceil(_zz.length / skip)),
          z;
      for (var i=0, j=0, n=this.getPointCount(); i<n; i+=skip) {
        z = _zz[i];
        if (z != Infinity) {
          arr[j++] = z;
        }
      }
      return arr.subarray(0, j);
    };

    this.getArcThresholds = function(arcId) {
      if (!(arcId >= 0 && arcId < this.size())) {
        error("[arcs] Invalid arc id:", arcId);
      }
      var start = _ii[arcId],
          end = start + _nn[arcId];
      return _zz.subarray(start, end);
    };

    // nth (optional): sample every nth threshold (use estimate for speed)
    this.getPctByThreshold = function(val, nth) {
      var arr, rank, pct;
      if (val > 0) {
        arr = this.getRemovableThresholds(nth);
        rank = utils.findRankByValue(arr, val);
        pct = arr.length > 0 ? 1 - (rank - 1) / arr.length : 1;
      } else {
        pct = 1;
      }
      return pct;
    };

    // nth (optional): sample every nth threshold (use estimate for speed)
    this.getThresholdByPct = function(pct, nth) {
      return getThresholdByPct(pct, this, nth);
    };

    this.arcIntersectsBBox = function(i, b1) {
      var b2 = _bb,
          j = i * 4;
      return b2[j] <= b1[2] && b2[j+2] >= b1[0] && b2[j+3] >= b1[1] && b2[j+1] <= b1[3];
    };

    this.arcIsContained = function(i, b1) {
      var b2 = _bb,
          j = i * 4;
      return b2[j] >= b1[0] && b2[j+2] <= b1[2] && b2[j+1] >= b1[1] && b2[j+3] <= b1[3];
    };

    this.arcIsSmaller = function(i, units) {
      var bb = _bb,
          j = i * 4;
      return bb[j+2] - bb[j] < units && bb[j+3] - bb[j+1] < units;
    };

    // TODO: allow datasets in lat-lng coord range to be flagged as planar
    this.isPlanar = function() {
      return !probablyDecimalDegreeBounds(this.getBounds());
    };

    this.size = function() {
      return _ii && _ii.length || 0;
    };

    this.getPointCount = function() {
      return _xx && _xx.length || 0;
    };

    this.getFilteredPointCount = getFilteredPointCount;

    this.getBounds = function() {
      return _allBounds.clone();
    };

    this.getSimpleShapeBounds = function(arcIds, bounds) {
      bounds = bounds || new Bounds();
      for (var i=0, n=arcIds.length; i<n; i++) {
        this.mergeArcBounds(arcIds[i], bounds);
      }
      return bounds;
    };

    this.getSimpleShapeBounds2 = function(arcIds, arr) {
      var bbox = arr || [],
          bb = _bb,
          id = absArcId(arcIds[0]) * 4;
      bbox[0] = bb[id];
      bbox[1] = bb[++id];
      bbox[2] = bb[++id];
      bbox[3] = bb[++id];
      for (var i=1, n=arcIds.length; i<n; i++) {
        id = absArcId(arcIds[i]) * 4;
        if (bb[id] < bbox[0]) bbox[0] = bb[id];
        if (bb[++id] < bbox[1]) bbox[1] = bb[id];
        if (bb[++id] > bbox[2]) bbox[2] = bb[id];
        if (bb[++id] > bbox[3]) bbox[3] = bb[id];
      }
      return bbox;
    };

    // TODO: move this and similar methods out of ArcCollection
    this.getMultiShapeBounds = function(shapeIds, bounds) {
      bounds = bounds || new Bounds();
      if (shapeIds) { // handle null shapes
        for (var i=0, n=shapeIds.length; i<n; i++) {
          this.getSimpleShapeBounds(shapeIds[i], bounds);
        }
      }
      return bounds;
    };

    this.mergeArcBounds = function(arcId, bounds) {
      if (arcId < 0) arcId = ~arcId;
      var offs = arcId * 4;
      bounds.mergeBounds(_bb[offs], _bb[offs+1], _bb[offs+2], _bb[offs+3]);
    };
  }

  // Remove duplicate coords and NaNs
  function dedupArcCoords(src, dest, arcLen, xx, yy, zz) {
    var n = 0, n2 = 0; // counters
    var x, y, i, j, keep;
    while (n < arcLen) {
      j = src + n;
      x = xx[j];
      y = yy[j];
      keep = x == x && y == y && (n2 === 0 || x != xx[j-1] || y != yy[j-1]);
      if (keep) {
        i = dest + n2;
        xx[i] = x;
        yy[i] = y;
        n2++;
      }
      if (zz && n2 > 0 && (keep || zz[j] > zz[i])) {
        zz[i] = zz[j];
      }
      n++;
    }
    return n2 > 1 ? n2 : 0;
  }

  // @arcs ArcCollection
  // @filter Optional filter function, arcIds that return false are excluded
  //
  function NodeCollection(arcs, filter) {
    if (Array.isArray(arcs)) {
      arcs = new ArcCollection(arcs);
    }
    var arcData = arcs.getVertexData(),
        nn = arcData.nn,
        xx = arcData.xx,
        yy = arcData.yy,
        nodeData;

    // Accessor function for arcs
    Object.defineProperty(this, 'arcs', {value: arcs});

    var toArray = this.toArray = function() {
      var chains = getNodeChains(),
          flags = new Uint8Array(chains.length),
          arr = [];
      utils.forEach(chains, function(nextIdx, thisIdx) {
        var node, x, y, p;
        if (flags[thisIdx] == 1) return;
        p = getEndpoint(thisIdx);
        if (!p) return; // endpoints of an excluded arc
        node = {coordinates: p, arcs: []};
        arr.push(node);
        while (flags[thisIdx] != 1) {
          node.arcs.push(chainToArcId(thisIdx));
          flags[thisIdx] = 1;
          thisIdx = chains[thisIdx];
        }
      });
      return arr;
    };

    this.size = function() {
      return this.toArray().length;
    };

    this.findDanglingEndpoints = function() {
      var chains = getNodeChains(),
          arr = [], p;
      for (var i=0, n=chains.length; i<n; i++) {
        if (chains[i] != i) continue; // endpoint attaches to a node
        p = getEndpoint(i);
        if (!p) continue; // endpoint belongs to an excluded arc
        arr.push({
          point: p,
          arc: chainToArcId(i)
        });
      }
      return arr;
    };

    this.detachAcyclicArcs = function() {
      var chains = getNodeChains(),
          count = 0,
          fwd, rev;
      for (var i=0, n=chains.length; i<n; i+= 2) {
        fwd = i == chains[i];
        rev = i + 1 == chains[i + 1];
        // detach arcs that are disconnected at one end or the other
        if ((fwd || rev) && !linkIsDetached(i)) {
          this.detachArc(chainToArcId(i));
          count++;
        }
      }
      if (count > 0) {
        // removing one acyclic arc could expose another -- need another pass
        count += this.detachAcyclicArcs();
      }
      return count;
    };

    this.detachArc = function(arcId) {
      unlinkDirectedArc(arcId);
      unlinkDirectedArc(~arcId);
    };

    this.forEachConnectedArc = function(arcId, cb) {
      var nextId = nextConnectedArc(arcId),
          i = 0;
      while (nextId != arcId) {
        cb(nextId, i++);
        nextId = nextConnectedArc(nextId);
      }
    };

    // Receives an arc id for an arc that enters a node.
    // Returns an array of ids of all other arcs that are connected to the same node.
    //    Returned ids lead into the node (as opposed to outwards from it)
    // An optional filter function receives the directed id (positive or negative)
    //    of each connected arc and excludes arcs for which the filter returns false.
    //    The filter is also applied to the initial arc; if false, no arcs are returned.
    //
    this.getConnectedArcs = function(arcId, filter) {
      var ids = [];
      var filtered = !!filter;
      var nextId = nextConnectedArc(arcId);
      if (filtered && !filter(arcId)) {
        // return ids;
      }
      while (nextId != arcId) {
        if (!filtered || filter(nextId)) {
          ids.push(nextId);
        }
        nextId = nextConnectedArc(nextId);
      }
      return ids;
    };

    // Returns the id of the first identical arc or @arcId if none found
    // TODO: find a better function name
    this.findDuplicateArc = function(arcId) {
      var nextId = nextConnectedArc(arcId),
          match = arcId;
      while (nextId != arcId) {
        if (testArcMatch(arcId, nextId)) {
          if (absArcId(nextId) < absArcId(match)) match = nextId;
        }
        nextId = nextConnectedArc(nextId);
      }
      return match;
    };

    // returns null if link has been removed from node collection
    function getEndpoint(chainId) {
      return linkIsDetached(chainId) ? null : [nodeData.xx[chainId], nodeData.yy[chainId]];
    }

    function linkIsDetached(chainId) {
      return isNaN(nodeData.xx[chainId]);
    }

    function unlinkDirectedArc(arcId) {
      var chainId = arcToChainId(arcId),
          chains = getNodeChains(),
          nextId = chains[chainId],
          prevId = prevChainId(chainId);
      nodeData.xx[chainId] = NaN;
      nodeData.yy[chainId] = NaN;
      chains[chainId] = chainId;
      chains[prevId] = nextId;
    }

    function chainToArcId(chainId) {
      var absId = chainId >> 1;
      return chainId & 1 == 1 ? absId : ~absId;
    }

    function arcToChainId(arcId) {
      var fw = arcId >= 0;
      return fw ? arcId * 2 + 1 : (~arcId) * 2; // if fw, use end, if rev, use start
    }

    function getNodeChains() {
      if (!nodeData) {
        nodeData = findNodeTopology(arcs, filter);
        if (nn.length * 2 != nodeData.chains.length) error("[NodeCollection] count error");
      }
      return nodeData.chains;
    }

    function testArcMatch(a, b) {
      var absA = a >= 0 ? a : ~a,
          absB = b >= 0 ? b : ~b,
          lenA = nn[absA];
      if (lenA < 2) {
        // Don't throw error on collapsed arcs -- assume they will be handled
        //   appropriately downstream.
        // error("[testArcMatch() defective arc; len:", lenA);
        return false;
      }
      if (lenA != nn[absB]) return false;
      if (testVertexMatch(a, b, -1) &&
          testVertexMatch(a, b, 1) &&
          testVertexMatch(a, b, -2)) {
        return true;
      }
      return false;
    }

    function testVertexMatch(a, b, i) {
      var ai = arcs.indexOfVertex(a, i),
          bi = arcs.indexOfVertex(b, i);
      return xx[ai] == xx[bi] && yy[ai] == yy[bi];
    }

    // return arcId of next arc in the chain, pointed towards the shared vertex
    function nextConnectedArc(arcId) {
      var chainId = arcToChainId(arcId),
          chains =  getNodeChains(),
          nextChainId = chains[chainId];
      if (!(nextChainId >= 0 && nextChainId < chains.length)) {
        // console.log('arcId:', arcId, 'chainId:', chainId, 'next chain id:', nextChainId)
        error("out-of-range chain id");
      }
      return chainToArcId(nextChainId);
    }

    function prevChainId(chainId) {
      var chains = getNodeChains(),
          prevId = chainId,
          nextId = chains[chainId];
      while (nextId != chainId) {
        prevId = nextId;
        nextId = chains[nextId];
        if (nextId == prevId) error("Node indexing error");
      }
      return prevId;
    }

    // expose functions for testing
    this.internal = {
      testArcMatch: testArcMatch,
      testVertexMatch: testVertexMatch
    };
  }

  function findNodeTopology(arcs, filter) {
    var n = arcs.size() * 2,
        xx2 = new Float64Array(n),
        yy2 = new Float64Array(n),
        ids2 = new Int32Array(n);

    arcs.forEach2(function(i, n, xx, yy, zz, arcId) {
      var start = i,
          end = i + n - 1,
          start2 = arcId * 2,
          end2 = start2 + 1,
          ax = xx[start],
          ay = yy[start],
          bx = xx[end],
          by = yy[end];
      if (filter && !filter(arcId)) {
        ax = ay = bx = by = NaN;
      }

      xx2[start2] = ax;
      yy2[start2] = ay;
      ids2[start2] = arcId;
      xx2[end2] = bx;
      yy2[end2] = by;
      ids2[end2] = arcId;
    });

    var chains = initPointChains(xx2, yy2);
    return {
      xx: xx2,
      yy: yy2,
      ids: ids2,
      chains: chains
    };
  }

  // Dissolve arcs that can be merged without affecting topology of layers
  // remove arcs that are not referenced by any layer; remap arc ids
  // in layers. (dataset.arcs is replaced).
  function dissolveArcs(dataset) {
    var arcs = dataset.arcs,
        layers = dataset.layers.filter(layerHasPaths);

    if (!arcs || !layers.length) {
      dataset.arcs = null;
      return;
    }

    var arcsCanDissolve = getArcDissolveTest(layers, arcs),
        newArcs = [],
        totalPoints = 0,
        arcIndex = new Int32Array(arcs.size()), // maps old arc ids to new ids
        arcStatus = new Uint8Array(arcs.size());
        // arcStatus: 0 = unvisited, 1 = dropped, 2 = remapped, 3 = remapped + reversed
    layers.forEach(function(lyr) {
      // modify copies of the original shapes; original shapes should be unmodified
      // (need to test this)
      lyr.shapes = lyr.shapes.map(function(shape) {
        return editShapeParts(shape && shape.concat(), translatePath);
      });
    });
    dataset.arcs = dissolveArcCollection(arcs, newArcs, totalPoints);

    function translatePath(path) {
      var pointCount = 0;
      var newPath = [];
      var newArc, arcId, absId, arcLen, fw, newArcId;

      for (var i=0, n=path.length; i<n; i++) {
        arcId = path[i];
        absId = absArcId(arcId);
        fw = arcId === absId;

        if (arcs.arcIsDegenerate(arcId)) {
          // arc has collapsed -- skip
        } else if (arcStatus[absId] !== 0) {
          // arc has already been translated -- skip
          newArc = null;
        } else {
          arcLen = arcs.getArcLength(arcId);

          if (newArc && arcsCanDissolve(path[i-1], arcId)) {
            if (arcLen > 0) {
              arcLen--; // shared endpoint not counted;
            }
            newArc.push(arcId);  // arc data is appended to previous arc
            arcStatus[absId] = 1; // arc is dropped from output
          } else {
            // start a new dissolved arc
            newArc = [arcId];
            arcIndex[absId] = newArcs.length;
            newArcs.push(newArc);
            arcStatus[absId] = fw ? 2 : 3; // 2: unchanged; 3: reversed
          }
          pointCount += arcLen;
        }

        if (arcStatus[absId] > 1) {
          // arc is retained (and renumbered) in the dissolved path -- add to path
          newArcId = arcIndex[absId];
          if (fw && arcStatus[absId] == 3 || !fw && arcStatus[absId] == 2) {
            newArcId = ~newArcId;
          }
          newPath.push(newArcId);
        }
      }
      totalPoints += pointCount;
      return newPath;
    }
  }

  function dissolveArcCollection(arcs, newArcs, newLen) {
    var nn2 = new Uint32Array(newArcs.length),
        xx2 = new Float64Array(newLen),
        yy2 = new Float64Array(newLen),
        src = arcs.getVertexData(),
        zz2 = src.zz ? new Float64Array(newLen) : null,
        interval = arcs.getRetainedInterval(),
        offs = 0;

    newArcs.forEach(function(newArc, newId) {
      newArc.forEach(function(oldId, i) {
        extendDissolvedArc(oldId, newId);
      });
    });

    return new ArcCollection(nn2, xx2, yy2).setThresholds(zz2).setRetainedInterval(interval);

    function extendDissolvedArc(oldId, newId) {
      var absId = absArcId(oldId),
          rev = oldId < 0,
          n = src.nn[absId],
          i = src.ii[absId],
          n2 = nn2[newId];

      if (n > 0) {
        if (n2 > 0) {
          n--;
          if (!rev) i++;
        }
        utils.copyElements(src.xx, i, xx2, offs, n, rev);
        utils.copyElements(src.yy, i, yy2, offs, n, rev);
        if (zz2) utils.copyElements(src.zz, i, zz2, offs, n, rev);
        nn2[newId] += n;
        offs += n;
      }
    }
  }

  // Test whether two arcs can be merged together
  function getArcDissolveTest(layers, arcs) {
    var nodes = new NodeCollection(arcs, getArcPresenceTest2(layers, arcs)),
        // don't allow dissolving through endpoints of polyline paths
        lineLayers = layers.filter(function(lyr) {return lyr.geometry_type == 'polyline';}),
        testLineEndpoint = getPathEndpointTest(lineLayers, arcs),
        linkCount, lastId;

    return function(id1, id2) {
      if (id1 == id2 || id1 == ~id2) {
        verbose("Unexpected arc sequence:", id1, id2);
        return false; // This is unexpected; don't try to dissolve, anyway
      }
      linkCount = 0;
      nodes.forEachConnectedArc(id1, countLink);
      return linkCount == 1 && lastId == ~id2 && !testLineEndpoint(id1) && !testLineEndpoint(~id2);
    };

    function countLink(arcId, i) {
      linkCount++;
      lastId = arcId;
    }
  }

  var ArcDissolve = /*#__PURE__*/Object.freeze({
    __proto__: null,
    dissolveArcs: dissolveArcs,
    getArcDissolveTest: getArcDissolveTest
  });

  // utility functions for datasets

  // Split into datasets with one layer each
  function splitDataset(dataset) {
    return dataset.layers.map(function(lyr) {
      var split = {
        arcs: dataset.arcs,
        layers: [lyr],
        info: dataset.info
      };
      dissolveArcs(split); // replace arcs with filtered + dissolved copy
      return split;
    });
  }

  // clone all layers, make a filtered copy of arcs
  function copyDataset(dataset) {
    var d2 = utils.extend({}, dataset);
    d2.layers = d2.layers.map(copyLayer);
    if (d2.arcs) {
      d2.arcs = d2.arcs.getFilteredCopy();
    }
    return d2;
  }

  // clone coordinate data, shallow-copy attribute data
  function copyDatasetForExport(dataset) {
    var d2 = utils.extend({}, dataset);
    d2.layers = d2.layers.map(copyLayerShapes);
    if (d2.arcs) {
      d2.arcs = d2.arcs.getFilteredCopy();
    }
    return d2;
  }

  // shallow-copy layers, so they can be renamed (for export)
  function copyDatasetForRenaming(dataset) {
    return utils.defaults({
      layers: dataset.layers.map(function(lyr) {return utils.extend({}, lyr);})
    }, dataset);
  }

  function getDatasetBounds(dataset) {
    var bounds = new Bounds();
    dataset.layers.forEach(function(lyr) {
      var lyrbb = getLayerBounds(lyr, dataset.arcs);
      if (lyrbb) bounds.mergeBounds(lyrbb);
    });
    return bounds;
  }

  function datasetHasGeometry(dataset) {
    return utils.some(dataset.layers, function(lyr) {
      return layerHasGeometry(lyr);
    });
  }

  function datasetHasPaths(dataset) {
    return utils.some(dataset.layers, function(lyr) {
      return layerHasPaths(lyr);
    });
  }

  // Remove ArcCollection of a dataset if not referenced by any layer
  // TODO: consider doing arc dissolve, or just removing unreferenced arcs
  // (currently cleanupArcs() is run after every command, so be mindful of performance)
  function cleanupArcs(dataset) {
    if (dataset.arcs && !utils.some(dataset.layers, layerHasPaths)) {
      dataset.arcs = null;
      return true;
    }
  }

  // Remove unused arcs from a dataset
  // Warning: using dissolveArcs() means that adjacent arcs are combined when possible
  function pruneArcs(dataset) {
    cleanupArcs(dataset);
    if (dataset.arcs) {
      dissolveArcs(dataset);
    }
  }

  // replace cut layers in-sequence (to maintain layer indexes)
  // append any additional new layers
  function replaceLayers(dataset, cutLayers, newLayers) {
    // modify a copy in case cutLayers == dataset.layers
    var currLayers = dataset.layers.concat();
    utils.repeat(Math.max(cutLayers.length, newLayers.length), function(i) {
      var cutLyr = cutLayers[i],
          newLyr = newLayers[i],
          idx = cutLyr ? currLayers.indexOf(cutLyr) : currLayers.length;

      if (cutLyr) {
        currLayers.splice(idx, 1);
      }
      if (newLyr) {
        currLayers.splice(idx, 0, newLyr);
      }
    });
    dataset.layers = currLayers;
  }

  // Transform the points in a dataset in-place; don't clean up corrupted shapes
  function transformPoints(dataset, f) {
    if (dataset.arcs) {
      dataset.arcs.transformPoints(f);
    }
    dataset.layers.forEach(function(lyr) {
      if (layerHasPoints(lyr)) {
        transformPointsInLayer(lyr, f);
      }
    });
  }

  var DatasetUtils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    splitDataset: splitDataset,
    copyDataset: copyDataset,
    copyDatasetForExport: copyDatasetForExport,
    copyDatasetForRenaming: copyDatasetForRenaming,
    getDatasetBounds: getDatasetBounds,
    datasetHasGeometry: datasetHasGeometry,
    datasetHasPaths: datasetHasPaths,
    cleanupArcs: cleanupArcs,
    pruneArcs: pruneArcs,
    replaceLayers: replaceLayers,
    transformPoints: transformPoints
  });

  // A matrix class that supports affine transformations (scaling, translation, rotation).
  // Elements:
  //   a  c  tx
  //   b  d  ty
  //   0  0  1  (u v w are not used)
  //
  function Matrix2D() {
    this.a = 1;
    this.c = 0;
    this.tx = 0;
    this.b = 0;
    this.d = 1;
    this.ty = 0;
  }

  Matrix2D.prototype.transformXY = function(x, y, p) {
    p = p || {};
    p.x = x * this.a + y * this.c + this.tx;
    p.y = x * this.b + y * this.d + this.ty;
    return p;
  };

  Matrix2D.prototype.translate = function(dx, dy) {
    this.tx += dx;
    this.ty += dy;
  };

  // x, y: optional origin
  Matrix2D.prototype.rotate = function(q, x, y) {
    var cos = Math.cos(q);
    var sin = Math.sin(q);
    x = x || 0;
    y = y || 0;
    this.a = cos;
    this.c = -sin;
    this.b = sin;
    this.d = cos;
    this.tx += x - x * cos + y * sin;
    this.ty += y - x * sin - y * cos;
  };

  // cx, cy: optional origin
  Matrix2D.prototype.scale = function(sx, sy, cx, cy) {
    cx = cx || 0;
    cy = cy || 0;
    this.a *= sx;
    this.c *= sx;
    this.b *= sy;
    this.d *= sy;
    this.tx -= cx * (sx - 1);
    this.ty -= cy * (sy - 1);
  };

  // A compound projection, consisting of a default projection and one or more rectangular frames
  // that are projected separately and affine transformed.
  // @mainParams: parameters for main projection, including:
  //    proj: Proj string
  //    bbox: lat-lon bounding box
  function MixedProjection(mainParams, options) {
    var mproj = require('mproj');
    var mainFrame = initFrame(mainParams);
    var mainP = mainFrame.crs;
    var frames = [mainFrame];
    var mixedP = initMixedProjection(mproj);

    // This CRS masquerades as the main projection... the version with
    // custom insets is exposed to savvy users
    mainP.__mixed_crs = mixedP;

    // required opts:
    //    origin: [lng, lat] origin of frame (unprojected)
    //    placement: [x, y] location (in projected coordinates) to shift the origin
    //    proj: Proj.4 string for projecting data within the frame
    //    bbox: Lat-long bounding box of frame area
    //
    // optional:
    //    dx: x shift (meters)
    //    dy: y shift (meters)
    //    scale: scale factor (1 = no scaling)
    //    rotation: rotation in degrees (0 = no rotation)
    //
    mainP.addFrame = function(paramsArg) {
      var params = getFrameParams(paramsArg, options); // apply defaults and overrides
      var frame = initFrame(params);
      var m = new Matrix2D();
      //  originXY: the projected coordinates of the frame origin
      var originXY = params.origin ? projectFrameOrigin(params.origin, frame.crs) : [0, 0];
      var placementXY = params.placement || [0, 0];
      var dx = placementXY[0] - originXY[0] + (+params.dx || 0);
      var dy = placementXY[1] - originXY[1] + (+params.dy || 0);

      if (params.rotation) {
        m.rotate(params.rotation * Math.PI / 180.0, originXY[0], originXY[1]);
      }
      if (params.scale) {
        m.scale(params.scale, params.scale, originXY[0], originXY[1]);
      }
      m.translate(dx, dy);

      frame.matrix = m;
      frames.push(frame);
      return this;
    };

    function initFrame(params) {
      return {
        bounds: new Bounds(bboxToRadians(params.bbox)),
        crs:  mproj.pj_init(params.proj)
      };
    }

    function bboxToRadians(bbox) {
      var D2R = Math.PI / 180;
      return bbox.map(function(deg) {
        return deg * D2R;
      });
    }

    function projectFrameOrigin(origin, P) {
      var xy = mproj.pj_fwd_deg({lam: origin[0], phi: origin[1]}, P);
      return [xy.x, xy.y];
    }

    mixedP.fwd = function(lp, xy) {
      var frame, xy2;
      for (var i=0, n=frames.length; i<n; i++) {
        frame = frames[i];
        if (frame.bounds.containsPoint(lp.lam, lp.phi)) {
          xy2 = mproj.pj_fwd(lp, frame.crs);
          if (frame.matrix) {
            frame.matrix.transformXY(xy2.x, xy2.y, xy2);
          }
          break;
        }
      }
      xy.x = xy2 ? xy2.x : Infinity;
      xy.y = xy2 ? xy2.y : Infinity;
    };

    return mainP;
  }

  function initMixedProjection(mproj) {
    if (!mproj.internal.pj_list.mixed) {
      mproj.pj_add(function(P) {
        P.a = 1;
      }, 'mixed', 'Mapshaper Mixed Projection');
    }
    return mproj.pj_init('+proj=mixed');
  }

  function getFrameParams (params, options) {
    var opts = options[params.name];
    utils.defaults(params, {scale: 1, dx: 0, dy: 0, rotation: 0}); // add defaults
    if (!opts) return params;
    Object.keys(opts).forEach(function(key) {
      var val = opts[key];
      if (key in params) {
        params[key] = opts[key];
      } else {
        params.proj = replaceProjParam(params.proj, key, val);
      }
    });
    return params;
  }

  function replaceProjParam(proj, key, val) {
    var param = '+' + key + '=';
    return proj.split(' ').map(function(str) {
      if (str.indexOf(param) === 0) {
        str = str.substr(0, param.length) + val;
      }
      return str;
    }).join(' ');
  }

  // str: a custom projection string, e.g.: "albersusa +PR"
  function parseCustomProjection(str) {
    var parts = str.trim().split(/ +/);
    var params = [];
    var names = parts.filter(function(part) {
      if (/^\+/.test(part)) {
        params.push(part.substr(1)); // strip '+'
        return false;
      }
      return true;
    });
    var name = names[0];
    var opts = parseCustomParams(params);
    if (names.length != 1) return null; // parse error if other than one name found
    return getCustomProjection(name, opts);
  }

  // returns a custom projection object
  function getCustomProjection(name, opts) {
    if (name == 'albersusa') {
      return new AlbersUSA(opts);
    }
    return null;
  }

  function AlbersUSA(optsArg) {
    var opts = optsArg || {};
    var main = {
      proj: '+proj=aea +lon_0=-96 +lat_0=37.5 +lat_1=29.5 +lat_2=45.5',
      bbox: [-129,23,-62,52]
    };
    var AK = {
      name: 'AK',
      proj: '+proj=aea +lat_1=55 +lat_2=70 +lat_0=65 +lon_0=-148 +x_0=0 +y_0=0',
      bbox: [-172.26,50.89,-127.00,73.21],
      origin: [-152, 63],
      placement: [-1882782,-969242],
      scale: 0.37
    };
    var HI = {
      name: 'HI',
      proj: '+proj=aea +lat_1=19 +lat_2=24 +lat_0=20.9 +lon_0=-156.5 +x_0=0 +y_0=0',
      bbox: [-160.50,18.72,-154.57,22.58],
      origin: [-157, 21],
      placement: [-1050326,-1055362]
    };
    var PR = {
      name: 'PR',
      proj: '+proj=aea +lat_1=18 +lat_2=18.43 +lat_0=17.83 +lon_0=-66.43 +x_0=0 +y_0=0',
      bbox: [-68.092,17.824,-65.151,18.787],
      origin: [-66.431, 18.228],
      placement: [1993101,-1254517]
    };
    var VI = {
      name: 'VI',
      // same projection and origin as PR, so they maintain their true geographical relationship
      proj: '+proj=aea +lat_1=18 +lat_2=18.43 +lat_0=17.83 +lon_0=-66.43 +x_0=0 +y_0=0',
      bbox: [-65.104,17.665,-64.454,18.505],
      origin: [-66.431, 18.228],
      placement: [1993101,-1254517]
    };
    var mixed = new MixedProjection(main, opts)
      .addFrame(AK)
      .addFrame(HI);
    if (opts.PR) {
      mixed.addFrame(PR);
    }
    if (opts.VI) {
      mixed.addFrame(VI);
    }
    return mixed;
  }


  function parseCustomParams(arr) {
    var opts = {};
    arr.forEach(function(str) {
      parseCustomParam(str, opts);
    });
    return opts;
  }

  function parseCustomParam(str, opts) {
    var parts = str.split('=');
    var path = parts[0].split('.');
    var key = path.pop();
    var obj = path.reduce(function(memo, name) {
      if (name in memo === false) {
        memo[name] = {};
      } else if (!utils.isObject(memo[name])) {
        return {};// error condition, could display a warning
      }
      return memo[name];
    }, opts);
    if (parts.length > 1) {
      obj[key] = parseCustomParamValue(parts[1]);
    } else if (key in obj === false && !path.length) {
      // e.g. convert string 'PR' into {PR: {}} (empty object),
      // to show PR with default properties
      obj[key] = {};
    }
  }

  function parseCustomParamValue(str) {
    var val;
    if (str.indexOf(',') > 0) {
      val = str.split(',').map(parseFloat);
      // TODO: validate
      return val;
    }
    val = utils.parseNumber(str);
    if (val === null) {
      val = str;
    }
    return val;
  }

  var CustomProjections = /*#__PURE__*/Object.freeze({
    __proto__: null,
    parseCustomProjection: parseCustomProjection,
    AlbersUSA: AlbersUSA,
    parseCustomParams: parseCustomParams
  });

  var asyncLoader = null;

  var projectionAliases = {
    robinson: '+proj=robin +datum=WGS84',
    webmercator: '+proj=merc +a=6378137 +b=6378137',
    wgs84: '+proj=longlat +datum=WGS84',
    albersusa: new AlbersUSA() // with default parameters
  };

  // This stub is replaced when loaded in GUI, which may need to load some files
  function initProjLibrary(opts, done) {
    if (!asyncLoader) return done();
    asyncLoader(opts, done);
  }

  function setProjectionLoader(loader) {
    asyncLoader = loader;
  }

  // Find Proj.4 definition file names in strings like "+init=epsg:3000"
  // (Used by GUI, defined here for testing)
  function findProjLibs(str) {
    var matches = str.match(/\b(esri|epsg|nad83|nad27)(?=:[0-9]+\b)/ig) || [];
    return utils.uniq(matches.map(function(str) {return str.toLowerCase();}));
  }

  // Returns a function for reprojecting [x, y] points; function throws an error
  // if the transformation fails
  // src, dest: proj4 objects
  function getProjTransform(src, dest) {
    var mproj = require('mproj');
    var clampSrc = isLatLngCRS(src);
    dest = dest.__mixed_crs || dest;
    return function(x, y) {
      var xy;
      if (clampSrc) {
        // snap lng to bounds
        if (x < -180) x = -180;
        else if (x > 180) x = 180;
      }
      xy = [x, y];
      mproj.pj_transform_point(src, dest, xy);
      return xy;
    };
  }

  // Same as getProjTransform(), but return null if projection fails
  // (also faster)
  function getProjTransform2(src, dest) {
    var mproj = require('mproj'),
        xx = [0],
        yy = [0],
        preK = src.is_latlong ? mproj.internal.DEG_TO_RAD : 1,
        postK = dest.is_latlong ? mproj.internal.RAD_TO_DEG : 1,
        clampSrc = isLatLngCRS(src);

    return function(x, y) {
      var fail;
      if (clampSrc) {
        // snap lng to bounds
        if (x < -180) x = -180;
        else if (x > 180) x = 180;
      }
      xx[0] = x * preK;
      yy[0] = y * preK;
      try {
        dest = dest.__mixed_crs || dest;
        mproj.pj_transform(src, dest, xx, yy);
        fail = xx[0] == Infinity; // mproj invalid coord value
      } catch(e) {
        fail = true;
      }
      return fail ? null : [xx[0] * postK, yy[0] * postK];
    };
  }

  function toLngLat(xy, P) {
    var proj;
    if (isLatLngCRS(P)) {
      return xy.concat();
    }
    proj = getProjInfo(P, getCRS('wgs84'));
    return proj(xy);
  }

  function getProjInfo(dataset) {
    var P, info;
    try {
      P = getDatasetCRS(dataset);
      if (P) {
        info = crsToProj4(P);
      }
    } catch(e) {}
    return info || "[unknown]";
  }

  function crsToProj4(P) {
    return require('mproj').internal.get_proj_defn(P);
  }

  function crsToPrj(P) {
    var wkt;
    try {
      wkt = require('mproj').internal.wkt_from_proj4(P);
    } catch(e) {
      // console.log(e)
    }
    return wkt;
  }

  function crsAreEqual(a, b) {
    var str = crsToProj4(a);
    return !!str && str == crsToProj4(b);
  }

  function getProjDefn(str) {
    var mproj = require('mproj');
    var defn;
    if (looksLikeProj4String(str)) {
      defn = str;
    } else if (str in mproj.internal.pj_list) {
      defn = '+proj=' + str;
    } else if (str in projectionAliases) {
      defn = projectionAliases[str];  // defn is a function
    } else if (looksLikeInitString(str)) {
      defn = '+init=' + str.toLowerCase();
    } else {
      defn = parseCustomProjection(str);
    }
    if (!defn) {
      stop("Unknown projection definition:", str);
    }
    return defn;
  }

  function looksLikeInitString(str) {
    return /^(esri|epsg|nad83|nad27):[0-9]+$/i.test(String(str));
  }

  function looksLikeProj4String(str) {
    return /^(\+[^ ]+ *)+$/.test(str);
  }

  function getCRS(str) {
    var defn = getProjDefn(str);  // defn is a string or a Proj object
    var P;
    if (!utils.isString(defn)) {
      P = defn;
    } else {
      try {
        P = require('mproj').pj_init(defn);
      } catch(e) {
        stop('Unable to use projection', defn, '(' + e.message + ')');
      }
    }
    return P || null;
  }

  function requireProjectedDataset(dataset) {
    if (isLatLngCRS(getDatasetCRS(dataset))) {
      stop("Command requires a target with projected coordinates (not lat-long)");
    }
  }

  // @info: info property of source dataset (instead of crs object, so wkt string
  //        can be preserved if present)
  function setDatasetCRS(dataset, info) {
    dataset.info = dataset.info || {};
    // Assumes that proj4 object is never mutated.
    // TODO: assign a copy of crs (if present)
    dataset.info.crs = info.crs;
    dataset.info.prj = info.prj;
  }

  function getDatasetCRS(dataset) {
    var info = dataset.info || {},
        P = info.crs;
    if (!P && info.prj) {
      P = parsePrj(info.prj);
    }
    if (!P && probablyDecimalDegreeBounds(getDatasetBounds(dataset))) {
      // use wgs84 for probable latlong datasets with unknown datums
      P = getCRS('wgs84');
    }
    return P;
  }

  // Assumes conformal projections; consider returning average of vertical and
  // horizontal scale factors.
  // x, y: a point location in projected coordinates
  // Returns k, the ratio of coordinate distance to distance on the ground
  function getScaleFactorAtXY(x, y, crs) {
    var proj = require('mproj');
    var dist = 1;
    var lp = proj.pj_inv_deg({x: x, y: y}, crs);
    var lp2 = proj.pj_inv_deg({x: x + dist, y: y}, crs);
    var k = dist / geom.greatCircleDistance(lp.lam, lp.phi, lp2.lam, lp2.phi);
    return k;
  }

  function isProjectedCRS(P) {
    return !isLatLngCRS(P);
  }

  function isLatLngCRS(P) {
    return P && P.is_latlong || false;
  }

  function printProjections() {
    var index = require('mproj').internal.pj_list;
    var msg = 'Proj4 projections\n';
    Object.keys(index).sort().forEach(function(id) {
      msg += '  ' + utils.rpad(id, 7, ' ') + '  ' + index[id].name + '\n';
    });
    msg += '\nAliases';
    Object.keys(projectionAliases).sort().forEach(function(n) {
      msg += '\n  ' + n;
    });
    print(msg);
  }

  function translatePrj(str) {
    var proj4;
    try {
      proj4 = require('mproj').internal.wkt_to_proj4(str);
    } catch(e) {
      stop('Unusable .prj file (' + e.message + ')');
    }
    return proj4;
  }

  // Convert contents of a .prj file to a projection object
  function parsePrj(str) {
    return getCRS(translatePrj(str));
  }

  var Projections = /*#__PURE__*/Object.freeze({
    __proto__: null,
    initProjLibrary: initProjLibrary,
    setProjectionLoader: setProjectionLoader,
    findProjLibs: findProjLibs,
    getProjTransform: getProjTransform,
    getProjTransform2: getProjTransform2,
    toLngLat: toLngLat,
    getProjInfo: getProjInfo,
    crsToProj4: crsToProj4,
    crsToPrj: crsToPrj,
    crsAreEqual: crsAreEqual,
    getProjDefn: getProjDefn,
    looksLikeProj4String: looksLikeProj4String,
    getCRS: getCRS,
    requireProjectedDataset: requireProjectedDataset,
    setDatasetCRS: setDatasetCRS,
    getDatasetCRS: getDatasetCRS,
    getScaleFactorAtXY: getScaleFactorAtXY,
    isProjectedCRS: isProjectedCRS,
    isLatLngCRS: isLatLngCRS,
    printProjections: printProjections,
    translatePrj: translatePrj,
    parsePrj: parsePrj
  });

  function editArcs(arcs, onPoint) {
    var nn2 = [],
        xx2 = [],
        yy2 = [],
        errors = 0,
        n;

    arcs.forEach(function(arc, i) {
      editArc(arc, onPoint);
    });
    arcs.updateVertexData(nn2, xx2, yy2);
    return errors;

    function append(p) {
      if (p) {
        xx2.push(p[0]);
        yy2.push(p[1]);
        n++;
      }
    }

    function editArc(arc, cb) {
      var x, y, xp, yp, retn;
      var valid = true;
      var i = 0;
      n = 0;
      while (arc.hasNext()) {
        x = arc.x;
        y = arc.y;
        retn = cb(append, x, y, xp, yp, i++);
        if (retn === false) {
          valid = false;
          // assumes that it's ok for the arc iterator to be interupted.
          break;
        }
        xp = x;
        yp = y;
      }
      if (valid && n == 1) {
        // only one valid point was added to this arc (invalid)
        // e.g. this could happen during reprojection.
        // making this arc empty
        // error("An invalid arc was created");
        message("An invalid arc was created");
        valid = false;
      }
      if (valid) {
        nn2.push(n);
      } else {
        // remove any points that were added for an invalid arc
        while (n-- > 0) {
          xx2.pop();
          yy2.pop();
        }
        nn2.push(0); // add empty arc (to preserve mapping from paths to arcs)
        errors++;
      }
    }
  }

  function detectEncodingFromBOM(bytes) {
    // utf8 EF BB BF
    // utf16be FE FF
    // utf16le FF FE
    var n = bytes.length;
    if (n >= 2 && bytes[0] == 0xFE && bytes[1] == 0xFF) return 'utf16be';
    if (n >= 2 && bytes[0] == 0xFF && bytes[1] == 0xFE) return 'utf16le';
    if (n >= 3 && bytes[0] == 0xEF && bytes[1] == 0xBB && bytes[2] == 0xBF) return 'utf8';
    return '';
  }

  // Try to detect the encoding of some sample text.
  // Returns an encoding name or null.
  // @samples Array of buffers containing sample text fields
  // TODO: Improve reliability and number of detectable encodings.
  function detectEncoding(samples) {
    var encoding = null;
    if (looksLikeUtf8(samples)) {
      encoding = 'utf8';
    } else if (looksLikeWin1252(samples)) {
      // Win1252 is the same as Latin1, except it replaces a block of control
      // characters with n-dash, Euro and other glyphs. Encountered in-the-wild
      // in Natural Earth (airports.dbf uses n-dash).
      encoding = 'win1252';
    }
    return encoding;
  }

  // Convert an array of text samples to a single string using a given encoding
  function decodeSamples(enc, samples) {
    return samples.map(function(buf) {
      return decodeString(buf, enc).trim();
    }).join('\n');
  }


  // Quick-and-dirty win1251 detection: decoded string contains mostly common ascii
  // chars and almost no chars other than word chars + punctuation.
  // This excludes encodings like Greek, Cyrillic or Thai, but
  // is susceptible to false positives with encodings like codepage 1250 ("Eastern
  // European").
  function looksLikeWin1252(samples) {
    var ascii = 'abcdefghijklmnopqrstuvwxyz0123456789.\'"?+-\n,:;/|_$% ', //common l.c. ascii chars
        extended = 'ßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýÿ°–±’‘', // common extended
        str = decodeSamples('win1252', samples),
        asciiScore = getCharScore(str, ascii),
        totalScore = getCharScore(str, extended + ascii);
    return totalScore > 0.97 && asciiScore >= 0.6; // mostly unaccented ascii chars
  }

  // Reject string if it contains the "replacement character" after decoding to UTF-8
  function looksLikeUtf8(samples) {
    // Remove the byte sequence for the utf-8-encoded replacement char before decoding,
    // in case the file is in utf-8, but contains some previously corrupted text.
    // samples = samples.map(internal.replaceUtf8ReplacementChar);
    var str = decodeSamples('utf8', samples);
    return str.indexOf('\ufffd') == -1;
  }

  // function replaceUtf8ReplacementChar(buf) {
  //   var isCopy = false;
  //   for (var i=0, n=buf.length; i<n; i++) {
  //     // Check for UTF-8 encoded replacement char (0xEF 0xBF 0xBD)
  //     if (buf[i] == 0xef && i + 2 < n && buf[i+1] == 0xbf && buf[i+2] == 0xbd) {
  //       if (!isCopy) {
  //         buf = utils.createBuffer(buf);
  //         isCopy = true;
  //       }
  //       buf[i] = buf[i+1] = buf[i+2] = 63; // ascii question mark
  //     }
  //   }
  //   return buf;
  // }

  // Calc percentage of chars in a string that are present in a second string
  // @chars String of chars to look for in @str
  function getCharScore(str, chars) {
    var index = {},
        count = 0,
        score;
    str = str.toLowerCase();
    for (var i=0, n=chars.length; i<n; i++) {
      index[chars[i]] = 1;
    }
    for (i=0, n=str.length; i<n; i++) {
      count += index[str[i]] || 0;
    }
    return count / str.length;
  }

  function buffersAreIdentical(a, b) {
    var alen = BinArray.bufferSize(a);
    var blen = BinArray.bufferSize(b);
    if (alen != blen) {
      return false;
    }
    for (var i=0; i<alen; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }

  // Wrapper for DataView class for more convenient reading and writing of
  //   binary data; Remembers endianness and read/write position.
  // Has convenience methods for copying from buffers, etc.
  //
  function BinArray(buf, le) {
    if (utils.isNumber(buf)) {
      buf = new ArrayBuffer(buf);
    } else if (typeof Buffer == 'function' && buf instanceof Buffer) {
      // Since node 0.10, DataView constructor doesn't accept Buffers,
      //   so need to copy Buffer to ArrayBuffer
      buf = BinArray.toArrayBuffer(buf);
    }
    if (buf instanceof ArrayBuffer == false) {
      error("BinArray constructor takes an integer, ArrayBuffer or Buffer argument");
    }
    this._buffer = buf;
    this._bytes = new Uint8Array(buf);
    this._view = new DataView(buf);
    this._idx = 0;
    this._le = le !== false;
  }

  BinArray.bufferToUintArray = function(buf, wordLen) {
    if (wordLen == 4) return new Uint32Array(buf);
    if (wordLen == 2) return new Uint16Array(buf);
    if (wordLen == 1) return new Uint8Array(buf);
    error("BinArray.bufferToUintArray() invalid word length:", wordLen);
  };

  BinArray.uintSize = function(i) {
    return i & 1 || i & 2 || 4;
  };

  BinArray.bufferCopy = function(dest, destId, src, srcId, bytes) {
    srcId = srcId || 0;
    bytes = bytes || src.byteLength - srcId;
    if (dest.byteLength - destId < bytes)
      error("Buffer overflow; tried to write:", bytes);

    // When possible, copy buffer data in multi-byte chunks... Added this for faster copying of
    // shapefile data, which is aligned to 32 bits.
    var wordSize = Math.min(BinArray.uintSize(bytes), BinArray.uintSize(srcId),
        BinArray.uintSize(dest.byteLength), BinArray.uintSize(destId),
        BinArray.uintSize(src.byteLength));

    var srcArr = BinArray.bufferToUintArray(src, wordSize),
        destArr = BinArray.bufferToUintArray(dest, wordSize),
        count = bytes / wordSize,
        i = srcId / wordSize,
        j = destId / wordSize;

    while (count--) {
      destArr[j++] = srcArr[i++];
    }
    return bytes;
  };

  BinArray.toArrayBuffer = function(src) {
    var n = src.length,
        dest = new ArrayBuffer(n),
        view = new Uint8Array(dest);
    for (var i=0; i<n; i++) {
        view[i] = src[i];
    }
    return dest;
  };

  // Return length in bytes of an ArrayBuffer or Buffer
  //
  BinArray.bufferSize = function(buf) {
    return (buf instanceof ArrayBuffer ?  buf.byteLength : buf.length | 0);
  };

  BinArray.prototype = {
    size: function() {
      return this._buffer.byteLength;
    },

    littleEndian: function() {
      this._le = true;
      return this;
    },

    bigEndian: function() {
      this._le = false;
      return this;
    },

    buffer: function() {
      return this._buffer;
    },

    bytesLeft: function() {
      return this._buffer.byteLength - this._idx;
    },

    skipBytes: function(bytes) {
      this._idx += (bytes + 0);
      return this;
    },

    readUint8: function() {
      return this._bytes[this._idx++];
    },

    writeUint8: function(val) {
      this._bytes[this._idx++] = val;
      return this;
    },

    readInt8: function() {
      return this._view.getInt8(this._idx++);
    },

    writeInt8: function(val) {
      this._view.setInt8(this._idx++, val);
      return this;
    },

    readUint16: function() {
      var val = this._view.getUint16(this._idx, this._le);
      this._idx += 2;
      return val;
    },

    writeUint16: function(val) {
      this._view.setUint16(this._idx, val, this._le);
      this._idx += 2;
      return this;
    },

    readUint32: function() {
      var val = this._view.getUint32(this._idx, this._le);
      this._idx += 4;
      return val;
    },

    writeUint32: function(val) {
      this._view.setUint32(this._idx, val, this._le);
      this._idx += 4;
      return this;
    },

    readInt32: function() {
      var val = this._view.getInt32(this._idx, this._le);
      this._idx += 4;
      return val;
    },

    writeInt32: function(val) {
      this._view.setInt32(this._idx, val, this._le);
      this._idx += 4;
      return this;
    },

    readFloat64: function() {
      var val = this._view.getFloat64(this._idx, this._le);
      this._idx += 8;
      return val;
    },

    writeFloat64: function(val) {
      this._view.setFloat64(this._idx, val, this._le);
      this._idx += 8;
      return this;
    },

    // Returns a Float64Array containing @len doubles
    //
    readFloat64Array: function(len) {
      var bytes = len * 8,
          i = this._idx,
          buf = this._buffer,
          arr;
      // Inconsistent: first is a view, second a copy...
      if (i % 8 === 0) {
        arr = new Float64Array(buf, i, len);
      } else if (buf.slice) {
        arr = new Float64Array(buf.slice(i, i + bytes));
      } else { // ie10, etc
        var dest = new ArrayBuffer(bytes);
        BinArray.bufferCopy(dest, 0, buf, i, bytes);
        arr = new Float64Array(dest);
      }
      this._idx += bytes;
      return arr;
    },

    readUint32Array: function(len) {
      var arr = [];
      for (var i=0; i<len; i++) {
        arr.push(this.readUint32());
      }
      return arr;
    },

    peek: function(i) {
      return this._view.getUint8(i >= 0 ? i : this._idx);
    },

    position: function(i) {
      if (i != null) {
        this._idx = i;
        return this;
      }
      return this._idx;
    },

    readCString: function(fixedLen, asciiOnly) {
      var str = "",
          count = fixedLen >= 0 ? fixedLen : this.bytesLeft();
      while (count > 0) {
        var byteVal = this.readUint8();
        count--;
        if (byteVal == 0) {
          break;
        } else if (byteVal > 127 && asciiOnly) {
          str = null;
          break;
        }
        str += String.fromCharCode(byteVal);
      }

      if (fixedLen > 0 && count > 0) {
        this.skipBytes(count);
      }
      return str;
    },

    writeString: function(str, maxLen) {
      var bytesWritten = 0,
          charsToWrite = str.length,
          cval;
      if (maxLen) {
        charsToWrite = Math.min(charsToWrite, maxLen);
      }
      for (var i=0; i<charsToWrite; i++) {
        cval = str.charCodeAt(i);
        if (cval > 127) {
          // Unicode value beyond ascii range
          cval = '?'.charCodeAt(0);
        }
        this.writeUint8(cval);
        bytesWritten++;
      }
      return bytesWritten;
    },

    writeCString: function(str, fixedLen) {
      var maxChars = fixedLen ? fixedLen - 1 : null,
          bytesWritten = this.writeString(str, maxChars);

      this.writeUint8(0); // terminator
      bytesWritten++;

      if (fixedLen) {
        while (bytesWritten < fixedLen) {
          this.writeUint8(0);
          bytesWritten++;
        }
      }
      return this;
    },

    writeBuffer: function(buf, bytes, startIdx) {
      this._idx += BinArray.bufferCopy(this._buffer, this._idx, buf, startIdx, bytes);
      return this;
    }
  };

  var BinArray$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    buffersAreIdentical: buffersAreIdentical,
    BinArray: BinArray
  });

  // DBF format references:
  // http://www.dbf2002.com/dbf-file-format.html
  // http://www.digitalpreservation.gov/formats/fdd/fdd000325.shtml
  // http://www.clicketyclick.dk/databases/xbase/format/index.html
  // http://www.clicketyclick.dk/databases/xbase/format/data_types.html

  // source: http://webhelp.esri.com/arcpad/8.0/referenceguide/index.htm#locales/task_code.htm
  var languageIds = [0x01,'437',0x02,'850',0x03,'1252',0x08,'865',0x09,'437',0x0A,'850',0x0B,'437',0x0D,'437',0x0E,'850',0x0F,'437',0x10,'850',0x11,'437',0x12,'850',0x13,'932',0x14,'850',0x15,'437',0x16,'850',0x17,'865',0x18,'437',0x19,'437',0x1A,'850',0x1B,'437',0x1C,'863',0x1D,'850',0x1F,'852',0x22,'852',0x23,'852',0x24,'860',0x25,'850',0x26,'866',0x37,'850',0x40,'852',0x4D,'936',0x4E,'949',0x4F,'950',0x50,'874',0x57,'1252',0x58,'1252',0x59,'1252',0x64,'852',0x65,'866',0x66,'865',0x67,'861',0x6A,'737',0x6B,'857',0x6C,'863',0x78,'950',0x79,'949',0x7A,'936',0x7B,'932',0x7C,'874',0x86,'737',0x87,'852',0x88,'857',0xC8,'1250',0xC9,'1251',0xCA,'1254',0xCB,'1253',0xCC,'1257'];

  // Language & Language family names for some code pages
  var encodingNames = {
    '932': "Japanese",
    '936': "Simplified Chinese",
    '950': "Traditional Chinese",
    '1252': "Western European",
    '949': "Korean",
    '874': "Thai",
    '1250': "Eastern European",
    '1251': "Russian",
    '1254': "Turkish",
    '1253': "Greek",
    '1257': "Baltic"
  };

  var ENCODING_PROMPT =
    "To avoid corrupted text, re-import using the \"encoding=\" option.\n" +
    "To see a list of supported encodings, run the \"encodings\" command.";

  function lookupCodePage(lid) {
    var i = languageIds.indexOf(lid);
    return i == -1 ? null : languageIds[i+1];
  }

  // function readAsciiString(bin, size) {
  //   var require7bit = true;
  //   var str = bin.readCString(size, require7bit);
  //   if (str === null) {
  //     stop("DBF file contains non-ascii text.\n" + ENCODING_PROMPT);
  //   }
  //   return utils.trim(str);
  // }

  function readStringBytes(bin, size, buf) {
    var start = bin.position();
    var count = 0, c;
    for (var i=0; i<size; i++) {
      c = bin.readUint8();
      // treating 0 as C-style string terminator (observed in-the-wild)
      // TODO: in some encodings (e.g. utf-16) the 0-byte occurs in other
      //   characters than the NULL character (ascii 0). The following code
      //   should be changed to support non-ascii-compatible encodings
      if (c === 0) break;
      if (count > 0 || c != 32) { // ignore leading spaces (e.g. DBF numbers)
        buf[count++] = c;
      }
    }
    // ignore trailing spaces (DBF string fields are typically r-padded w/ spaces)
    while (count > 0 && buf[count-1] == 32) {
      count--;
    }
    bin.position(start + size);
    return count;
  }


  function getStringReader(arg) {
    var encoding = arg || 'ascii';
    var slug = standardizeEncodingName(encoding);
    var buf = utils.createBuffer(256);
    var inNode = typeof module == 'object';

    // optimization -- use (fast) native Node conversion if available
    if (inNode && (slug == 'utf8' || slug == 'ascii')) {
      return function(bin, size) {
        var n = readStringBytes(bin, size, buf);
        return buf.toString(slug, 0, n);
      };
    }

    return function readEncodedString(bin, size) {
      var n = readStringBytes(bin, size, buf),
          str = '', i, c;
      // optimization: fall back to text decoder only if string contains non-ascii bytes
      // (data files of any encoding typically contain mostly ascii fields)
      // TODO: verify this assumption - some supported encodings may not be ascii-compatible
      for (i=0; i<n; i++) {
        c = buf[i];
        if (c > 127) {
          return bufferToString(buf, encoding, 0, n);
        }
        str += String.fromCharCode(c);
      }
      return str;
    };
  }

  function bufferContainsHighBit(buf, n) {
    for (var i=0; i<n; i++) {
      if (buf[i] >= 128) return true;
    }
    return false;
  }

  function getNumberReader() {
    var read = getStringReader('ascii');
    return function readNumber(bin, size) {
      var str = read(bin, size);
      var val;
      if (str.indexOf(',') >= 0) {
        str = str.replace(',', '.'); // handle comma decimal separator
      }
      val = parseFloat(str);
      return isNaN(val) ? null : val;
    };
  }

  function readInt(bin, size) {
    return bin.readInt32();
  }

  function readBool(bin, size) {
    var c = bin.readCString(size),
        val = null;
    if (/[ty]/i.test(c)) val = true;
    else if (/[fn]/i.test(c)) val = false;
    return val;
  }

  function readDate(bin, size) {
    var str = bin.readCString(size),
        yr = str.substr(0, 4),
        mo = str.substr(4, 2),
        day = str.substr(6, 2);
    return new Date(Date.UTC(+yr, +mo - 1, +day));
  }

  // cf. http://code.google.com/p/stringencoding/
  //
  // @src is a Buffer or ArrayBuffer or filename
  //
  function DbfReader(src, encodingArg) {
    if (utils.isString(src)) {
      error("[DbfReader] Expected a buffer, not a string");
    }
    var bin = new BinArray(src);
    var header = readHeader(bin);

    // encoding and fields are set on first access
    var fields;
    var encoding;

    this.size = function() {return header.recordCount;};

    this.readRow = function(i) {
      // create record reader on-the-fly
      // (delays encoding detection until we need to read data)
      return getRecordReader()(i);
    };

    this.getFields = getFieldNames;

    this.getBuffer = function() {return bin.buffer();};

    this.deleteField = function(f) {
      prepareToRead();
      fields = fields.filter(function(field) {
        return field.name != f;
      });
    };

    this.readRows = function() {
      var reader = getRecordReader();
      var data = [];
      for (var r=0, n=this.size(); r<n; r++) {
        data.push(reader(r));
      }
      return data;
    };

    // Prepare to read from table:
    // * determine encoding
    // * convert encoded field names to strings
    //   (DBF standard is ascii names, but ArcGIS etc. support encoded names)
    //
    function prepareToRead() {
      if (fields) return; // already initialized
      var headerEncoding = 'ascii';
      initEncoding();
      if (getNonAsciiHeaders().length > 0) {
        headerEncoding = getEncoding();
      }
      fields = header.fields.map(function(f) {
        var copy = utils.extend({}, f);
        copy.name = decodeString(f.namebuf, headerEncoding);
        return copy;
      });
      // Uniqify header names
      getUniqFieldNames(utils.pluck(fields, 'name')).forEach(function(name2, i) {
        fields[i].name = name2;
      });
    }

    function readHeader(bin) {
      bin.position(0).littleEndian();
      var header = {
        version: bin.readInt8(),
        updateYear: bin.readUint8(),
        updateMonth: bin.readUint8(),
        updateDay: bin.readUint8(),
        recordCount: bin.readUint32(),
        dataOffset: bin.readUint16(),
        recordSize: bin.readUint16(),
        incompleteTransaction: bin.skipBytes(2).readUint8(),
        encrypted: bin.readUint8(),
        mdx: bin.skipBytes(12).readUint8(),
        ldid: bin.readUint8()
      };
      var colOffs = 1; // first column starts on second byte of record
      var field;
      bin.skipBytes(2);
      header.fields = [];

      // Detect header terminator (LF is standard, CR has been seen in the wild)
      while (bin.peek() != 0x0D && bin.peek() != 0x0A && bin.position() < header.dataOffset - 1) {
        field = readFieldHeader(bin);
        field.columnOffset = colOffs;
        header.fields.push(field);
        colOffs += field.size;
      }
      if (colOffs != header.recordSize) {
        error("Record length mismatch; header:", header.recordSize, "detected:", colOffs);
      }
      if (bin.peek() != 0x0D) {
        message('Found a non-standard DBF header terminator (' + bin.peek() + '). DBF file may be corrupted.');
      }

      return header;
    }

    function readFieldHeader(bin) {
      var buf = utils.createBuffer(11);
      var chars = readStringBytes(bin, 11, buf);
      return {
        // name: bin.readCString(11),
        namebuf: utils.createBuffer(buf.slice(0, chars)),
        type: String.fromCharCode(bin.readUint8()),
        address: bin.readUint32(),
        size: bin.readUint8(),
        decimals: bin.readUint8(),
        id: bin.skipBytes(2).readUint8(),
        position: bin.skipBytes(2).readUint8(),
        indexFlag: bin.skipBytes(7).readUint8()
      };
    }

    function getFieldNames() {
      prepareToRead();
      return utils.pluck(fields, 'name');
    }

    function getRowOffset(r) {
      return header.dataOffset + header.recordSize * r;
    }

    function initEncoding() {
      encoding = encodingArg || findStringEncoding();
      if (!encoding) {
        // fall back to utf8 if detection fails (so GUI can continue without further errors)
        encoding = 'utf8';
        stop("Unable to auto-detect the text encoding of the DBF file.\n" + ENCODING_PROMPT);
      }
    }

    function getEncoding() {
      if (!encoding) initEncoding();
      return encoding;
    }

    // Create new record objects using object literal syntax
    // (Much faster in v8 and other engines than assigning a series of properties
    //  to an object)
    function getRecordConstructor() {
      var args = getFieldNames().map(function(name, i) {
            return JSON.stringify(name) + ': arguments[' + i + ']';
          });
      return new Function('return {' + args.join(',') + '};');
    }

    function findEofPos(bin) {
      var pos = bin.size() - 1;
      if (bin.peek(pos) != 0x1A) { // last byte may or may not be EOF
        pos++;
      }
      return pos;
    }

    function getRecordReader() {
      prepareToRead();
      var readers = fields.map(getFieldReader),
          eofOffs = findEofPos(bin),
          create = getRecordConstructor(),
          values = [];

      return function readRow(r) {
        var offs = getRowOffset(r),
            fieldOffs, field;
        for (var c=0, cols=fields.length; c<cols; c++) {
          field = fields[c];
          fieldOffs = offs + field.columnOffset;
          if (fieldOffs + field.size > eofOffs) {
            stop('Invalid DBF file: encountered end-of-file while reading data');
          }
          bin.position(fieldOffs);
          values[c] = readers[c](bin, field.size);
        }
        return create.apply(null, values);
      };
    }

    // @f Field metadata from dbf header
    function getFieldReader(f) {
      var type = f.type,
          r = null;
      if (type == 'I') {
        r = readInt;
      } else if (type == 'F' || type == 'N') {
        r = getNumberReader();
      } else if (type == 'L') {
        r = readBool;
      } else if (type == 'D') {
        r = readDate;
      } else if (type == 'C') {
        r = getStringReader(getEncoding());
      } else {
        message("Field \"" + f.name + "\" has an unsupported type (" + f.type + ") -- converting to null values");
        r = function() {return null;};
      }
      return r;
    }

    function findStringEncoding() {
      var ldid = header.ldid,
          codepage = lookupCodePage(ldid),
          samples = getNonAsciiSamples(50),
          only7bit = samples.length === 0,
          encoding, msg;

      // First, check the ldid (language driver id) (an obsolete way to specify which
      // codepage to use for text encoding.)
      // ArcGIS up to v.10.1 sets ldid and encoding based on the 'locale' of the
      // user's Windows system :P
      //
      if (codepage && ldid != 87) {
        // if 8-bit data is found and codepage is detected, use the codepage,
        // except ldid 87, which some GIS software uses regardless of encoding.
        encoding = codepage;
      } else if (only7bit) {
        // Text with no 8-bit chars should be compatible with 7-bit ascii
        // (Most encodings are supersets of ascii)
        encoding = 'ascii';
      }

      // As a last resort, try to guess the encoding:
      if (!encoding) {
        encoding = detectEncoding(samples);
      }

      // Show a sample of decoded text if non-ascii-range text has been found
      if (encoding && samples.length > 0) {
        msg = decodeSamples(encoding, samples);
        msg = formatStringsAsGrid(msg.split('\n'));
        msg = "\nSample text containing non-ascii characters:" + (msg.length > 60 ? '\n' : '') + msg;
        msg = "Detected DBF text encoding: " + encoding + (encoding in encodingNames ? " (" + encodingNames[encoding] + ")" : "") + msg;
        message(msg);
      }
      return encoding;
    }

    function getNonAsciiHeaders() {
      var arr = [];
      header.fields.forEach(function(f) {
        if (bufferContainsHighBit(f.namebuf, f.namebuf.length)) {
          arr.push(f.namebuf);
        }
      });
      return arr;
    }

    // Return up to @size buffers containing text samples
    // with at least one byte outside the 7-bit ascii range.
    function getNonAsciiSamples(size) {
      var samples = [];
      var stringFields = header.fields.filter(function(f) {
        return f.type == 'C';
      });
      var buf = utils.createBuffer(256);
      var index = {};
      var f, chars, sample, hash;
      // include non-ascii field names, if any
      samples = getNonAsciiHeaders();
      for (var r=0, rows=header.recordCount; r<rows; r++) {
        for (var c=0, cols=stringFields.length; c<cols; c++) {
          if (samples.length >= size) break;
          f = stringFields[c];
          bin.position(getRowOffset(r) + f.columnOffset);
          chars = readStringBytes(bin, f.size, buf);
          if (chars > 0 && bufferContainsHighBit(buf, chars)) {
            sample = utils.createBuffer(buf.slice(0, chars)); //
            hash = sample.toString('hex');
            if (hash in index === false) { // avoid duplicate samples
              index[hash] = true;
              samples.push(sample);
            }
          }
        }
      }
      return samples;
    }
  }

  var Dbf = {};
  var MAX_STRING_LEN = 254;

  Dbf.MAX_STRING_LEN = MAX_STRING_LEN;
  Dbf.convertValueToString = convertValueToString;
  Dbf.convertFieldNames = convertFieldNames;
  Dbf.discoverFieldType = discoverFieldType;
  Dbf.getDecimalFormatter = getDecimalFormatter;
  Dbf.getNumericFieldInfo = getNumericFieldInfo;
  Dbf.truncateEncodedString = truncateEncodedString;
  Dbf.getFieldInfo = getFieldInfo;
  Dbf.exportRecords = exportRecords;

  function BufferPool() {
    var n = 5000,
        pool, i;
    newPool();

    function newPool() {
      pool = new Uint8Array(n);
      i = 0;
    }

    return {
      reserve: function(bytes) {
        if (i + bytes > n) newPool();
        i += bytes;
        return pool.subarray(i - bytes, i);
      },
      putBack: function(bytes) {
        i -= bytes;
      }
    };
  }

  var bufferPool = new BufferPool();

  function exportRecords(records, encoding, fieldOrder) {
    var rows = records.length;
    var fields = findFieldNames(records, fieldOrder);
    var dataEncoding = encoding || 'utf8';
    var headerEncoding = stringIsAscii(fields.join('')) ? 'ascii' : dataEncoding;
    var fieldNames = convertFieldNames(fields, headerEncoding);
    var fieldBuffers = encodeFieldNames(fieldNames, headerEncoding); // array of 11-byte buffers
    var fieldData = fields.map(function(name, i) {
      var info = getFieldInfo(records, name, dataEncoding);
      if (info.warning) {
        message('[' + name + '] ' + info.warning);
      }
      return info;
    });

    var headerBytes = getHeaderSize(fieldData.length),
        recordBytes = getRecordSize(utils.pluck(fieldData, 'size')),
        fileBytes = headerBytes + rows * recordBytes + 1;

    var buffer = new ArrayBuffer(fileBytes);
    var bin = new BinArray(buffer).littleEndian();
    var now = new Date();

    // write header
    bin.writeUint8(3);
    bin.writeUint8(now.getFullYear() - 1900);
    bin.writeUint8(now.getMonth() + 1);
    bin.writeUint8(now.getDate());
    bin.writeUint32(rows);
    bin.writeUint16(headerBytes);
    bin.writeUint16(recordBytes);
    bin.skipBytes(17);
    bin.writeUint8(0); // language flag; TODO: improve this
    bin.skipBytes(2);


    // field subrecords
    fieldData.reduce(function(recordOffset, obj, i) {
      // bin.writeCString(obj.name, 11);
      bin.writeBuffer(fieldBuffers[i], 11, 0);
      bin.writeUint8(obj.type.charCodeAt(0));
      bin.writeUint32(recordOffset);
      bin.writeUint8(obj.size);
      bin.writeUint8(obj.decimals);
      bin.skipBytes(14);
      return recordOffset + obj.size;
    }, 1);

    bin.writeUint8(0x0d); // "field descriptor terminator"
    if (bin.position() != headerBytes) {
      error("Dbf#exportRecords() header size mismatch; expected:", headerBytes, "written:", bin.position());
    }

    records.forEach(function(rec, i) {
      var start = bin.position();
      bin.writeUint8(0x20); // delete flag; 0x20 valid 0x2a deleted
      for (var j=0, n=fieldData.length; j<n; j++) {
        fieldData[j].write(i, bin);
      }
      if (bin.position() - start != recordBytes) {
        error("#exportRecords() Error exporting record:", rec);
      }
    });

    bin.writeUint8(0x1a); // end-of-file

    if (bin.position() != fileBytes) {
      error("Dbf#exportRecords() file size mismatch; expected:", fileBytes, "written:", bin.position());
    }
    return buffer;
  }

  function getHeaderSize(numFields) {
    return 33 + numFields * 32;
  }

  function getRecordSize(fieldSizes) {
    return utils.sum(fieldSizes) + 1; // delete byte plus data bytes
  }

  function initNumericField(info, arr, name) {
    var MAX_FIELD_SIZE = 18,
        data, size;

    data = getNumericFieldInfo(arr, name);
    info.decimals = data.decimals;
    size = Math.max(data.max.toFixed(info.decimals).length,
        data.min.toFixed(info.decimals).length);
    if (size > MAX_FIELD_SIZE) {
      size = MAX_FIELD_SIZE;
      info.decimals -= size - MAX_FIELD_SIZE;
      if (info.decimals < 0) {
        error ("Dbf#getFieldInfo() Out-of-range error.");
      }
    }
    info.size = size;

    var formatter = getDecimalFormatter(size, info.decimals);
    info.write = function(i, bin) {
      var rec = arr[i],
          str = formatter(rec[name]);
      if (str.length < size) {
        str = utils.lpad(str, size, ' ');
      }
      bin.writeString(str, size);
    };
  }

  function initBooleanField(info, arr, name) {
    info.size = 1;
    info.write = function(i, bin) {
      var val = arr[i][name],
          c;
      if (val === true) c = 'T';
      else if (val === false) c = 'F';
      else c = '?';
      bin.writeString(c);
    };
  }

  function initDateField(info, arr, name) {
    info.size = 8;
    info.write = function(i, bin) {
      var d = arr[i][name],
          str;
      if (d instanceof Date === false) {
        str = '00000000';
      } else {
        str = utils.lpad(d.getUTCFullYear(), 4, '0') +
              utils.lpad(d.getUTCMonth() + 1, 2, '0') +
              utils.lpad(d.getUTCDate(), 2, '0');
      }
      bin.writeString(str);
    };
  }

  function convertValueToString(s) {
    return s === undefined || s === null ? '' : String(s);
  }

  function initStringField(info, arr, name, encoding) {
    var formatter = encoding == 'ascii' ? encodeValueAsAscii : getStringWriterEncoded(encoding);
    var size = 0;
    var truncated = 0;
    var buffers = arr.map(function(rec) {
      var strval = convertValueToString(rec[name]);
      var buf = formatter(strval);
      if (buf.length > MAX_STRING_LEN) {
        if (encoding == 'ascii') {
          buf = buf.subarray(0, MAX_STRING_LEN);
        } else {
          buf = truncateEncodedString(buf, encoding, MAX_STRING_LEN);
        }
        truncated++;
      }
      size = Math.max(size, buf.length);
      return buf;
    });
    info.size = size;
    info.write = function(i, bin) {
      var buf = buffers[i],
          n = Math.min(size, buf.length),
          dest = bin._bytes,
          pos = bin.position(),
          j;
      for (j=0; j<n; j++) {
        dest[j + pos] = buf[j];
      }
      bin.position(pos + size);
    };
    if (truncated > 0) {
      info.warning = 'Truncated ' + truncated + ' string' + (truncated == 1 ? '' : 's') + ' to fit the 254-byte limit';
    }
  }

  // Convert string names to 11-byte buffers terminated by 0
  function encodeFieldNames(names, encoding) {
    return names.map(function(name) {
      var encoded = encodeString(name, encoding);
      var encLen = encoded.length;
      var buf = utils.createBuffer(11);
      for (var i=0; i < 11; i++) {
        buf[i] = i < 10 && encLen >= i - 1 ? encoded[i] : 0;
      }
      return buf;
    });
  }

  // Truncate and dedup field names
  //
  function convertFieldNames(names, encoding) {
    var names2 = getUniqFieldNames(names.map(cleanFieldName), 10, encoding);
    names2.forEach(function(name2, i) {
      if (names[i] != name2) {
        message('Changed field name from "' + names[i] + '" to "' + name2 + '"');
      }
    });
    return names2;
  }

  // Replace non-alphanumeric characters with _ and merge adjacent _
  // See: https://desktop.arcgis.com/en/arcmap/latest/manage-data/tables/fundamentals-of-adding-and-deleting-fields.htm#GUID-8E190093-8F8F-4132-AF4F-B0C9220F76B3
  // TODO: decide whether or not to avoid initial numerals
  function cleanFieldName_v1(name) {
    return name.replace(/[^A-Za-z0-9]+/g, '_');
  }

  // Support non-ascii field names
  function cleanFieldName(name) {
    return name.replace(/[-\s]+/g, '_');
  }

  function getFieldInfo(arr, name, encoding) {
    var type = discoverFieldType(arr, name),
        info = {
          type: type,
          decimals: 0
        };
    if (type == 'N') {
      initNumericField(info, arr, name);
    } else if (type == 'C') {
      initStringField(info, arr, name, encoding);
    } else if (type == 'L') {
      initBooleanField(info, arr, name);
    } else if (type == 'D') {
      initDateField(info, arr, name);
    } else {
      // Treat null fields as empty numeric fields; this way, they will be imported
      // again as nulls.
      info.size = 0;
      info.type = 'N';
      if (type) {
        info.warning = 'Unable to export ' + type + '-type data, writing null values';
      }
      info.write = function() {};
    }
    return info;
  }

  function discoverFieldType(arr, name) {
    var val;
    for (var i=0, n=arr.length; i<n; i++) {
      val = arr[i][name];
      if (utils.isString(val)) return "C";
      if (utils.isNumber(val)) return "N";
      if (utils.isBoolean(val)) return "L";
      if (val instanceof Date) return "D";
      if (val) return (typeof val);
    }
    return null;
  }

  function getDecimalFormatter(size, decimals) {
    // TODO: find better way to handle nulls
    var nullValue = ' '; // ArcGIS may use 0
    return function(val) {
      // TODO: handle invalid values better
      var valid = utils.isFiniteNumber(val),
          strval = valid ? val.toFixed(decimals) : String(nullValue);
      return utils.lpad(strval, size, ' ');
    };
  }

  function getNumericFieldInfo(arr, name) {
    var min = 0,
        max = 0,
        k = 1,
        power = 1,
        decimals = 0,
        eps = 1e-15,
        val;
    for (var i=0, n=arr.length; i<n; i++) {
      val = arr[i][name];
      if (!utils.isFiniteNumber(val)) {
        continue;
      }
      if (val < min || val > max) {
        if (val < min) min = val;
        if (val > max) max = val;
        while (Math.abs(val) >= power) {
          power *= 10;
          eps *= 10;
        }
      }
      while (Math.abs(Math.round(val * k) - val * k) > eps) {
        if (decimals == 15) { // dbf limit
          // TODO: round overflowing values ?
          break;
        }
        decimals++;
        eps *= 10;
        k *= 10;
      }
    }
    return {
      decimals: decimals,
      min: min,
      max: max
    };
  }

  // return an array buffer or null if value contains non-ascii chars
  function encodeValueAsAscii(val, strict) {
    var str = String(val),
        n = str.length,
        view = bufferPool.reserve(n),
        i, c;
    for (i=0; i<n; i++) {
      c = str.charCodeAt(i);
      if (c > 127) {
        if (strict) {
          view = null;
          i = 0; // return all bytes to pool
          break;
        }
        c = '?'.charCodeAt(0);
      }
      view[i] = c;
    }
    bufferPool.putBack(n-i);
    return view ? view.subarray(0, i) : null;
  }

  function getStringWriterEncoded(encoding) {
    return function(val) {
      // optimization -- large majority of strings in real-world datasets are
      // ascii. Try (faster) ascii encoding first, fall back to text encoder.
      var buf = encodeValueAsAscii(val, true);
      if (buf === null) {
        buf = encodeString(String(val), encoding);
      }
      return buf;
    };
  }

  // try to remove partial multi-byte characters from the end of an encoded string.
  function truncateEncodedString(buf, encoding, maxLen) {
    var truncated = buf.slice(0, maxLen);
    var len = maxLen;
    var tmp, str;
    while (len > 0 && len >= maxLen - 3) {
      tmp = len == maxLen ? truncated : buf.slice(0, len);
      str = decodeString(tmp, encoding);
      if (str.charAt(str.length-1) != '\ufffd') {
        truncated = tmp;
        break;
      }
      len--;
    }
    return truncated;
  }

  function importDbfTable(buf, o) {
    var opts = o || {};
    return new ShapefileTable(buf, opts.encoding);
  }

  // Implements the DataTable api for DBF file data.
  // We avoid touching the raw DBF field data if possible. This way, we don't need
  // to parse the DBF at all in common cases, like importing a Shapefile, editing
  // just the shapes and exporting in Shapefile format.
  // TODO: consider accepting just the filename, so buffer doesn't consume memory needlessly.
  //
  function ShapefileTable(buf, encoding) {
    var reader = new DbfReader(buf, encoding),
        altered = false,
        table;

    function getTable() {
      if (!table) {
        // export DBF records on first table access
        table = new DataTable(reader.readRows());
        reader = null;
        buf = null; // null out references to DBF data for g.c.
      }
      return table;
    }

    this.exportAsDbf = function(opts) {
      // export original dbf bytes if possible, for performance
      var useOriginal = !!reader && !altered && !opts.field_order && !opts.encoding;
      if (useOriginal) return reader.getBuffer();
      return Dbf.exportRecords(getTable().getRecords(), opts.encoding, opts.field_order);
    };

    this.getReadOnlyRecordAt = function(i) {
      return reader ? reader.readRow(i) : table.getReadOnlyRecordAt(i);
    };

    this.deleteField = function(f) {
      if (table) {
        table.deleteField(f);
      } else {
        altered = true;
        reader.deleteField(f);
      }
    };

    this.getRecords = function() {
      return getTable().getRecords();
    };

    this.getFields = function() {
      return reader ? reader.getFields() : table.getFields();
    };

    this.isEmpty = function() {
      return reader ? this.size() === 0 : table.isEmpty();
    };

    this.size = function() {
      return reader ? reader.size() : table.size();
    };
  }

  Object.assign(ShapefileTable.prototype, DataTable.prototype);

  var DbfImport = /*#__PURE__*/Object.freeze({
    __proto__: null,
    importDbfTable: importDbfTable,
    ShapefileTable: ShapefileTable
  });

  var ShpType = {
    NULL: 0,
    POINT: 1,
    POLYLINE: 3,
    POLYGON: 5,
    MULTIPOINT: 8,
    POINTZ: 11,
    POLYLINEZ: 13,
    POLYGONZ: 15,
    MULTIPOINTZ: 18,
    POINTM: 21,
    POLYLINEM: 23,
    POLYGONM: 25,
    MULIPOINTM: 28,
    MULTIPATCH: 31 // not supported
  };

  ShpType.isPolygonType = function(t) {
    return t == 5 || t == 15 || t == 25;
  };

  ShpType.isPolylineType = function(t) {
    return t == 3 || t == 13 || t == 23;
  };

  ShpType.isMultiPartType = function(t) {
    return ShpType.isPolygonType(t) || ShpType.isPolylineType(t);
  };

  ShpType.isMultiPointType = function(t) {
    return t == 8 || t == 18 || t == 28;
  };

  ShpType.isZType = function(t) {
    return [11,13,15,18].includes(t);
  };

  ShpType.isMType = function(t) {
    return ShpType.isZType(t) || [21,23,25,28].includes(t);
  };

  ShpType.hasBounds = function(t) {
    return ShpType.isMultiPartType(t) || ShpType.isMultiPointType(t);
  };

  function translateShapefileType(shpType) {
    if ([ShpType.POLYGON, ShpType.POLYGONM, ShpType.POLYGONZ].includes(shpType)) {
      return 'polygon';
    } else if ([ShpType.POLYLINE, ShpType.POLYLINEM, ShpType.POLYLINEZ].includes(shpType)) {
      return 'polyline';
    } else if ([ShpType.POINT, ShpType.POINTM, ShpType.POINTZ,
        ShpType.MULTIPOINT, ShpType.MULTIPOINTM, ShpType.MULTIPOINTZ].includes(shpType)) {
      return 'point';
    }
    return null;
  }

  function isSupportedShapefileType(t) {
    return [0,1,3,5,8,11,13,15,18,21,23,25,28].includes(t);
  }

  var ShpCommon = /*#__PURE__*/Object.freeze({
    __proto__: null,
    translateShapefileType: translateShapefileType,
    isSupportedShapefileType: isSupportedShapefileType
  });

  var NullRecord = function() {
    return {
      isNull: true,
      pointCount: 0,
      partCount: 0,
      byteLength: 12
    };
  };

  // Returns a constructor function for a shape record class with
  //   properties and methods for reading coordinate data.
  //
  // Record properties
  //   type, isNull, byteLength, pointCount, partCount (all types)
  //
  // Record methods
  //   read(), readPoints() (all types)
  //   readBounds(), readCoords()  (all but single point types)
  //   readPartSizes() (polygon and polyline types)
  //   readZBounds(), readZ() (Z types except POINTZ)
  //   readMBounds(), readM(), hasM() (M and Z types, except POINT[MZ])
  //
  function ShpRecordClass(type) {
    var hasBounds = ShpType.hasBounds(type),
        hasParts = ShpType.isMultiPartType(type),
        hasZ = ShpType.isZType(type),
        hasM = ShpType.isMType(type),
        singlePoint = !hasBounds,
        mzRangeBytes = singlePoint ? 0 : 16,
        constructor;

    if (type === 0) {
      return NullRecord;
    }

    // @bin is a BinArray set to the first data byte of a shape record
    constructor = function ShapeRecord(bin, bytes) {
      var pos = bin.position();
      this.id = bin.bigEndian().readUint32();
      this.type = bin.littleEndian().skipBytes(4).readUint32();
      if (this.type === 0) {
        return new NullRecord();
      }
      if (bytes > 0 !== true || (this.type != type && this.type !== 0)) {
        error("Unable to read a shape -- .shp file may be corrupted");
      }
      this.byteLength = bytes; // bin.readUint32() * 2 + 8; // bytes in content section + 8 header bytes
      if (singlePoint) {
        this.pointCount = 1;
        this.partCount = 1;
      } else {
        bin.skipBytes(32); // skip bbox
        this.partCount = hasParts ? bin.readUint32() : 1;
        this.pointCount = bin.readUint32();
      }
      this._data = function() {
        return bin.position(pos);
      };
    };

    // base prototype has methods shared by all Shapefile types except NULL type
    // (Type-specific methods are mixed in below)
    var proto = {
      // return offset of [x, y] point data in the record
      _xypos: function() {
        var offs = 12; // skip header & record type
        if (!singlePoint) offs += 4; // skip point count
        if (hasBounds) offs += 32;
        if (hasParts) offs += 4 * this.partCount + 4; // skip part count & index
        return offs;
      },

      readCoords: function() {
        if (this.pointCount === 0) return null;
        var partSizes = this.readPartSizes(),
            xy = this._data().skipBytes(this._xypos());

        return partSizes.map(function(pointCount) {
          return xy.readFloat64Array(pointCount * 2);
        });
      },

      readXY: function() {
        if (this.pointCount === 0) return new Float64Array(0);
        return this._data().skipBytes(this._xypos()).readFloat64Array(this.pointCount * 2);
      },

      readPoints: function() {
        var xy = this.readXY(),
            zz = hasZ ? this.readZ() : null,
            mm = hasM && this.hasM() ? this.readM() : null,
            points = [], p;

        for (var i=0, n=xy.length / 2; i<n; i++) {
          p = [xy[i*2], xy[i*2+1]];
          if (zz) p.push(zz[i]);
          if (mm) p.push(mm[i]);
          points.push(p);
        }
        return points;
      },

      // Return an array of point counts in each part
      // Parts containing zero points are skipped (Shapefiles with zero-point
      // parts are out-of-spec but exist in the wild).
      readPartSizes: function() {
        var sizes = [];
        var partLen, startId, bin;
        if (this.pointCount === 0) {
          // no parts
        } else if (this.partCount == 1) {
          // single-part type or multi-part type with one part
          sizes.push(this.pointCount);
        } else {
          // more than one part
          startId = 0;
          bin = this._data().skipBytes(56); // skip to second entry in part index
          for (var i=0, n=this.partCount; i<n; i++) {
            partLen = (i < n - 1 ? bin.readUint32() : this.pointCount) - startId;
            if (partLen > 0) {
              sizes.push(partLen);
              startId += partLen;
            }
          }
        }
        return sizes;
      }
    };

    var singlePointProto = {
      read: function() {
        var n = 2;
        if (hasZ) n++;
        if (this.hasM()) n++;
        return this._data().skipBytes(12).readFloat64Array(n);
      },

      stream: function(sink) {
        var src = this._data().skipBytes(12);
        sink.addPoint(src.readFloat64(), src.readFloat64());
        sink.endPath();
      }
    };

    var multiCoordProto = {
      readBounds: function() {
        return this._data().skipBytes(12).readFloat64Array(4);
      },

      stream: function(sink) {
        var sizes = this.readPartSizes(),
            xy = this.readXY(),
            i = 0, j = 0, n;
        while (i < sizes.length) {
          n = sizes[i];
          while (n-- > 0) {
            sink.addPoint(xy[j++], xy[j++]);
          }
          sink.endPath();
          i++;
        }
        if (xy.length != j) error('Counting error');
      },

      // TODO: consider switching to this simpler functino
      stream2: function(sink) {
        var sizes = this.readPartSizes(),
            bin = this._data().skipBytes(this._xypos()),
            i = 0, n;
        while (i < sizes.length) {
          n = sizes[i];
          while (n-- > 0) {
            sink.addPoint(bin.readFloat64(), bin.readFloat64());
          }
          sink.endPath();
          i++;
        }
      },

      read: function() {
        var parts = [],
            sizes = this.readPartSizes(),
            points = this.readPoints();
        for (var i=0, n = sizes.length - 1; i<n; i++) {
          parts.push(points.splice(0, sizes[i]));
        }
        parts.push(points);
        return parts;
      }
    };

    var mProto = {
      _mpos: function() {
        var pos = this._xypos() + this.pointCount * 16;
        if (hasZ) {
          pos += this.pointCount * 8 + mzRangeBytes;
        }
        return pos;
      },

      readMBounds: function() {
        return this.hasM() ? this._data().skipBytes(this._mpos()).readFloat64Array(2) : null;
      },

      // TODO: group into parts, like readCoords()
      readM: function() {
        return this.hasM() ? this._data().skipBytes(this._mpos() + mzRangeBytes).readFloat64Array(this.pointCount) : null;
      },

      // Test if this record contains M data
      // (according to the Shapefile spec, M data is optional in a record)
      //
      hasM: function() {
        var bytesWithoutM = this._mpos(),
            bytesWithM = bytesWithoutM + this.pointCount * 8 + mzRangeBytes;
        if (this.byteLength == bytesWithoutM) {
          return false;
        } else if (this.byteLength == bytesWithM) {
          return true;
        } else {
          error("#hasM() Counting error");
        }
      }
    };

    var zProto = {
      _zpos: function() {
        return this._xypos() + this.pointCount * 16;
      },

      readZBounds: function() {
        return this._data().skipBytes(this._zpos()).readFloat64Array(2);
      },

      // TODO: group into parts, like readCoords()
      readZ: function() {
        return this._data().skipBytes(this._zpos() + mzRangeBytes).readFloat64Array(this.pointCount);
      }
    };

    if (singlePoint) {
      Object.assign(proto, singlePointProto);
    } else {
      Object.assign(proto, multiCoordProto);
    }
    if (hasZ) Object.assign(proto, zProto);
    if (hasM) Object.assign(proto, mProto);

    constructor.prototype = proto;
    proto.constructor = constructor;
    return constructor;
  }

  function replaceFileExtension(path, ext) {
    var info = parseLocalPath(path);
    return info.pathbase + '.' + ext;
  }

  function getPathSep(path) {
    // TODO: improve
    return path.indexOf('/') == -1 && path.indexOf('\\') != -1 ? '\\' : '/';
  }

  // Parse the path to a file without using Node
  // Assumes: not a directory path
  function parseLocalPath(path) {
    var obj = {},
        sep = getPathSep(path),
        parts = path.split(sep),
        i;

    if (parts.length == 1) {
      obj.filename = parts[0];
      obj.directory = "";
    } else {
      obj.filename = parts.pop();
      obj.directory = parts.join(sep);
    }
    i = obj.filename.lastIndexOf('.');
    if (i > -1) {
      obj.extension = obj.filename.substr(i + 1);
      obj.basename = obj.filename.substr(0, i);
      obj.pathbase = path.substr(0, path.lastIndexOf('.'));
    } else {
      obj.extension = "";
      obj.basename = obj.filename;
      obj.pathbase = path;
    }
    return obj;
  }

  function getFileBase(path) {
    return parseLocalPath(path).basename;
  }

  function getFileExtension(path) {
    return parseLocalPath(path).extension;
  }

  function getPathBase(path) {
    return parseLocalPath(path).pathbase;
  }

  function getCommonFileBase(names) {
    return names.reduce(function(memo, name, i) {
      if (i === 0) {
        memo = getFileBase(name);
      } else {
        memo = utils.mergeNames(memo, name);
      }
      return memo;
    }, "");
  }

  function getOutputFileBase(dataset) {
    var inputFiles = dataset.info && dataset.info.input_files;
    return inputFiles && getCommonFileBase(inputFiles) || 'output';
  }

  var FilenameUtils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    replaceFileExtension: replaceFileExtension,
    parseLocalPath: parseLocalPath,
    getFileBase: getFileBase,
    getFileExtension: getFileExtension,
    getPathBase: getPathBase,
    getCommonFileBase: getCommonFileBase,
    getOutputFileBase: getOutputFileBase
  });

  var cli = {};

  cli.isFile = function(path, cache) {
    if (cache && (path in cache)) return true;
    if (runningInBrowser()) return false;
    var ss = cli.statSync(path);
    return ss && ss.isFile() || false;
  };

  // cli.fileSize = function(path) {
  //   var ss = cli.statSync(path);
  //   return ss && ss.size || 0;
  // };

  cli.isDirectory = function(path) {
    if (runningInBrowser()) return false;
    var ss = cli.statSync(path);
    return ss && ss.isDirectory() || false;
  };

  // @encoding (optional) e.g. 'utf8'
  cli.readFile = function(fname, encoding, cache) {
    var content;
    if (cache && (fname in cache)) {
      content = cache[fname];
      delete cache[fname];
    } else if (fname == '/dev/stdin') {
      content = require('rw').readFileSync(fname);
    } else {
      getStateVar('input_files').push(fname);
      content = require('fs').readFileSync(fname);
    }
    if (encoding && Buffer.isBuffer(content)) {
      content = trimBOM(decodeString(content, encoding));
    }
    return content;
  };

  cli.createDirIfNeeded = function(fname) {
    var odir = parseLocalPath(fname).directory;
    if (!odir || cli.isDirectory(odir)) return;
    try {
      require('fs').mkdirSync(odir, {recursive: true});
      message('Created output directory:', odir);
    } catch(e) {
      stop('Unable to create output directory:', odir);
    }
  };

  // content: Buffer or string
  cli.writeFile = function(fname, content, cb) {
    var fs = require('rw');
    cli.createDirIfNeeded(fname);
    if (cb) {
      fs.writeFile(fname, content, preserveContext(cb));
    } else {
      fs.writeFileSync(fname, content);
    }
  };

  // Returns Node Buffer
  cli.convertArrayBuffer = function(buf) {
    var src = new Uint8Array(buf),
        dest = utils.createBuffer(src.length);
    for (var i = 0, n=src.length; i < n; i++) {
      dest[i] = src[i];
    }
    return dest;
  };

  // Expand any "*" wild cards in file name
  // (For the Windows command line; unix shells do this automatically)
  cli.expandFileName = function(name) {
    var info = parseLocalPath(name),
        rxp = utils.wildcardToRegExp(info.filename),
        dir = info.directory || '.',
        files = [];

    try {
      require('fs').readdirSync(dir).forEach(function(item) {
        var path = require('path').join(dir, item);
        if (rxp.test(item) && cli.isFile(path)) {
          files.push(path);
        }
      });
    } catch(e) {}

    if (files.length === 0) {
      stop('No files matched (' + name + ')');
    }
    return files;
  };

  // Expand any wildcards.
  cli.expandInputFiles = function(files) {
    return files.reduce(function(memo, name) {
      if (name.indexOf('*') > -1) {
        memo = memo.concat(cli.expandFileName(name));
      } else {
        memo.push(name);
      }
      return memo;
    }, []);
  };

  cli.validateOutputDir = function(name) {
    if (!cli.isDirectory(name) && !runningInBrowser()) {
      error("Output directory not found:", name);
    }
  };

  // TODO: rename and improve
  // Want to test if a path is something readable (e.g. file or stdin)
  cli.checkFileExists = function(path, cache) {
    if (!cli.isFile(path, cache) && path != '/dev/stdin') {
      stop("File not found (" + path + ")");
    }
  };

  cli.statSync = function(fpath) {
    var obj = null;
    try {
      obj = require('fs').statSync(fpath);
    } catch(e) {}
    return obj;
  };

  function readFirstChars(reader, n) {
    return bufferToString(reader.readSync(0, Math.min(n || 1000, reader.size())));
  }

  // Wraps a BufferReader or FileReader with an API that keeps track of position in the file
  function Reader2(reader) {
    var offs = 0; // read-head position in bytes

    this.position = function() {return offs;};

    this.remaining = function() {
      return Math.max(reader.size() - offs, 0);
    };

    this.advance = function(i) {
      offs += i;
    };

    this.readSync = function() {
      return reader.readSync(offs);
    };

    this.expandBuffer = function() {
      reader.expandBuffer();
    };
  }

  // Same interface as FileReader, for reading from a Buffer or ArrayBuffer instead of a file.
  function BufferReader(src) {
    var bufSize = src.byteLength || src.length,
        binArr, buf;

    this.readToBinArray = function(start, length) {
      if (bufSize < start + length) error("Out-of-range error");
      if (!binArr) binArr = new BinArray(src);
      binArr.position(start);
      return binArr;
    };

    this.toString = function(enc) {
      return bufferToString(buffer(), enc);
    };

    this.readSync = function(start, length) {
      // TODO: consider using a default length like FileReader
      return buffer().slice(start, length || bufSize);
    };

    function buffer() {
      if (!buf) {
        buf = (src instanceof ArrayBuffer) ? utils.createBuffer(src) : src;
      }
      return buf;
    }

    this.findString = FileReader.prototype.findString;
    this.expandBuffer = function() {return this;};
    this.size = function() {return bufSize;};
    this.close = function() {};
  }

  function FileReader(path, opts) {
    var fs = require('fs'),
        fileLen = fs.statSync(path).size,
        DEFAULT_CACHE_LEN = opts && opts.cacheSize || 0x1000000, // 16MB
        DEFAULT_BUFFER_LEN = opts && opts.bufferSize || 0x40000, // 256K
        fd, cacheOffs, cache, binArr;

    getStateVar('input_files').push(path); // bit of a kludge

    this.expandBuffer = function() {
      DEFAULT_BUFFER_LEN *= 2;
      return this;
    };

    // Read to BinArray (for compatibility with ShpReader)
    this.readToBinArray = function(start, length) {
      if (updateCache(start, length)) {
        binArr = new BinArray(cache);
      }
      binArr.position(start - cacheOffs);
      return binArr;
    };

    // Read to Buffer
    this.readSync = function(start, length) {
      if (length > 0 === false) {
        // use default (but variable) size if length is not specified
        length = DEFAULT_BUFFER_LEN;
        if (start + length > fileLen) {
          length = fileLen - start; // truncate at eof
        }
        if (length === 0) {
          return utils.createBuffer(0); // kludge to allow reading up to eof
        }
      }
      updateCache(start, length);
      return cache.slice(start - cacheOffs, start - cacheOffs + length);
    };

    this.size = function() {
      return fileLen;
    };

    this.toString = function(enc) {
      // TODO: use fd
      return cli.readFile(path, enc || 'utf8');
    };

    this.close = function() {
      if (fd) {
        fs.closeSync(fd);
        fd = null;
        cache = null;
      }
    };

    // Receive offset and length of byte string that must be read
    // Return true if cache was updated, or false
    function updateCache(fileOffs, bufLen) {
      var headroom = fileLen - fileOffs,
          bytesRead, bytesToRead;
      if (headroom < bufLen || headroom < 0) {
        error("Tried to read past end-of-file");
      }
      if (cache && fileOffs >= cacheOffs && cacheOffs + cache.length >= fileOffs + bufLen) {
        return false;
      }
      bytesToRead = Math.max(DEFAULT_CACHE_LEN, bufLen);
      if (headroom < bytesToRead) {
        bytesToRead = headroom;
      }
      if (!cache || bytesToRead != cache.length) {
        cache = utils.createBuffer(bytesToRead);
      }
      if (!fd) {
        fd = fs.openSync(path, 'r');
      }
      bytesRead = fs.readSync(fd, cache, 0, bytesToRead, fileOffs);
      cacheOffs = fileOffs;
      if (bytesRead != bytesToRead) error("Error reading file");
      return true;
    }
  }

  FileReader.prototype.findString = function (str, maxLen) {
    var len = Math.min(this.size(), maxLen || this.size());
    var buf = this.readSync(0, len);
    var strLen = str.length;
    var n = buf.length - strLen;
    var firstByte = str.charCodeAt(0);
    var i;
    for (i=0; i < n; i++) {
      if (buf[i] == firstByte && buf.toString('utf8', i, i + strLen) == str) {
        return {
          offset: i + strLen,
          text: buf.toString('utf8', 0, i)
        };
      }
    }
    return null;
  };

  var FileReader$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    readFirstChars: readFirstChars,
    Reader2: Reader2,
    BufferReader: BufferReader,
    FileReader: FileReader
  });

  // Read data from a .shp file
  // @src is an ArrayBuffer, Node.js Buffer or filename
  //
  //    // Example: iterating using #nextShape()
  //    var reader = new ShpReader(buf), s;
  //    while (s = reader.nextShape()) {
  //      // process the raw coordinate data yourself...
  //      var coords = s.readCoords(); // [[x,y,x,y,...], ...] Array of parts
  //      var zdata = s.readZ();  // [z,z,...]
  //      var mdata = s.readM();  // [m,m,...] or null
  //      // .. or read the shape into nested arrays
  //      var data = s.read();
  //    }
  //
  //    // Example: reading records using a callback
  //    var reader = new ShpReader(buf);
  //    reader.forEachShape(function(s) {
  //      var data = s.read();
  //    });
  //
  function ShpReader(shpSrc, shxSrc) {
    if (this instanceof ShpReader === false) {
      return new ShpReader(shpSrc, shxSrc);
    }

    var shpFile = utils.isString(shpSrc) ? new FileReader(shpSrc) : new BufferReader(shpSrc);
    var header = parseHeader(shpFile.readToBinArray(0, 100));
    var shpSize = shpFile.size();
    var RecordClass = new ShpRecordClass(header.type);
    var shpOffset, recordCount, skippedBytes;
    var shxBin, shxFile;

    if (shxSrc) {
      shxFile = utils.isString(shxSrc) ? new FileReader(shxSrc) : new BufferReader(shxSrc);
      shxBin = shxFile.readToBinArray(0, shxFile.size()).bigEndian();
    }

    reset();

    this.header = function() {
      return header;
    };

    // Callback interface: for each record in a .shp file, pass a
    //   record object to a callback function
    //
    this.forEachShape = function(callback) {
      var shape = this.nextShape();
      while (shape) {
        callback(shape);
        shape = this.nextShape();
      }
    };

    // Iterator interface for reading shape records
    this.nextShape = function() {
      var shape = readNextShape();
      if (!shape) {
        if (skippedBytes > 0) {
          // Encountered in files from natural earth v2.0.0:
          // ne_10m_admin_0_boundary_lines_land.shp
          // ne_110m_admin_0_scale_rank.shp
          verbose("Skipped over " + skippedBytes + " non-data bytes in the .shp file.");
        }
        shpFile.close();
        reset();
      }
      return shape;
    };

    function readNextShape() {
      var expectedId = recordCount + 1; // Shapefile ids are 1-based
      var shape, offset;
      if (done()) return null;
      if (shxBin) {
        shxBin.position(100 + recordCount * 8);
        offset = shxBin.readUint32() * 2;
        if (offset > shpOffset) {
          skippedBytes += offset - shpOffset;
        }
      } else {
        offset = shpOffset;
      }
      shape = readShapeAtOffset(offset);
      if (!shape) {
        // Some in-the-wild .shp files contain junk bytes between records. This
        // is a problem if the .shx index file is not present.
        // Here, we try to scan past the junk to find the next record.
        shape = huntForNextShape(offset, expectedId);
      }
      if (shape) {
        if (shape.id < expectedId) {
          message("Found a Shapefile record with the same id as a previous record (" + shape.id + ") -- skipping.");
          return readNextShape();
        } else if (shape.id > expectedId) {
          stop("Shapefile contains an out-of-sequence record. Possible data corruption -- bailing.");
        }
        recordCount++;
      }
      return shape || null;
    }

    function done() {
      if (shxFile && shxFile.size() <= 100 + recordCount * 8) return true;
      if (shpOffset + 12 > shpSize) return true;
      return false;
    }

    function reset() {
      shpOffset = 100;
      skippedBytes = 0;
      recordCount = 0;
    }

    function parseHeader(bin) {
      var header = {
        signature: bin.bigEndian().readUint32(),
        byteLength: bin.skipBytes(20).readUint32() * 2,
        version: bin.littleEndian().readUint32(),
        type: bin.readUint32(),
        bounds: bin.readFloat64Array(4), // xmin, ymin, xmax, ymax
        zbounds: bin.readFloat64Array(2),
        mbounds: bin.readFloat64Array(2)
      };

      if (header.signature != 9994) {
        error("Not a valid .shp file");
      }

      if (!isSupportedShapefileType(header.type)) {
        error("Unsupported .shp type:", header.type);
      }

      if (header.byteLength != shpFile.size()) {
        error("File size of .shp doesn't match size in header");
      }

      return header;
    }

    function readShapeAtOffset(offset) {
      var shape = null,
          recordSize, recordType, recordId, goodSize, goodType, bin;

      if (offset + 12 <= shpSize) {
        bin = shpFile.readToBinArray(offset, 12);
        recordId = bin.bigEndian().readUint32();
        // record size is bytes in content section + 8 header bytes
        recordSize = bin.readUint32() * 2 + 8;
        recordType = bin.littleEndian().readUint32();
        goodSize = offset + recordSize <= shpSize && recordSize >= 12;
        goodType = recordType === 0 || recordType == header.type;
        if (goodSize && goodType) {
          bin = shpFile.readToBinArray(offset, recordSize);
          shape = new RecordClass(bin, recordSize);
          shpOffset = offset + shape.byteLength; // advance read position
        }
      }
      return shape;
    }

    // TODO: add tests
    // Try to scan past unreadable content to find next record
    function huntForNextShape(start, id) {
      var offset = start + 4,
          shape = null,
          bin, recordId, recordType, count;
      while (offset + 12 <= shpSize) {
        bin = shpFile.readToBinArray(offset, 12);
        recordId = bin.bigEndian().readUint32();
        recordType = bin.littleEndian().skipBytes(4).readUint32();
        if (recordId == id && (recordType == header.type || recordType === 0)) {
          // we have a likely position, but may still be unparsable
          shape = readShapeAtOffset(offset);
          break;
        }
        offset += 4; // try next integer position
      }
      count = shape ? offset - start : shpSize - start;
      // debug('Skipped', count, 'bytes', shape ? 'before record ' + id : 'at the end of the file');
      skippedBytes += count;
      return shape;
    }
  }

  ShpReader.prototype.type = function() {
    return this.header().type;
  };

  ShpReader.prototype.getCounts = function() {
    var counts = {
      nullCount: 0,
      partCount: 0,
      shapeCount: 0,
      pointCount: 0
    };
    this.forEachShape(function(shp) {
      if (shp.isNull) counts.nullCount++;
      counts.pointCount += shp.pointCount;
      counts.partCount += shp.partCount;
      counts.shapeCount++;
    });
    return counts;
  };

  var UNITS_LOOKUP = {
    m: 'meters',
    meter: 'meters',
    meters: 'meters',
    mi: 'miles',
    mile: 'miles',
    miles: 'miles',
    km: 'kilometers',
    ft: 'feet',
    feet: 'feet'
  };

  // From pj_units.js in mapshaper-proj
  var TO_METERS = {
    meters: 1,
    kilometers: 1000,
    feet: 0.3048, // International Standard Foot
    miles: 1609.344 // International Statute Mile
  };

  // Return coeff. for converting a distance measure to dataset coordinates
  // @paramUnits: units code of distance param, or null if units are not specified
  // @crs: Proj.4 CRS object, or null (unknown latlong CRS);
  //
  function getIntervalConversionFactor(paramUnits, crs) {
    var fromParam = 0,
        fromCRS = 0,
        k;

    if (crs) {
      if (crs.is_latlong) {
        // calculations on latlong coordinates typically use meters
        fromCRS = 1;
      } else if (crs.to_meter > 0) {
        fromCRS = crs.to_meter;
      } else {
        error('Invalid CRS');
      }
    }
    if (paramUnits) {
      fromParam = TO_METERS[paramUnits];
      if (!fromParam) error('Unknown units:', paramUnits);
    }

    if (fromParam && fromCRS) {
      // known param units, known CRS conversion
      k = fromParam / fromCRS;
    } else if (!fromParam && !fromCRS) {
      // unknown param units, unknown (projected) CRS -- no scaling
      k = 1;
    } else if (fromParam && !fromCRS) {
      // known param units, unknown CRS -- error condition, not convertible
      stop('Unable to convert', paramUnits, 'to unknown coordinates');
    } else if (!fromParam && fromCRS) {
      // unknown param units, known CRS -- assume param in meters (bw compatibility)
      k = 1 / fromCRS;
    }
    return k;
  }

  // throws an error if measure is non-parsable
  function parseMeasure(m) {
    var o = parseMeasure2(m);
    if (isNaN(o.value)) {
      stop('Invalid parameter:', m);
    }
    return o;
  }

  // returns NaN value if value is non-parsable
  function parseMeasure2(m) {
    var s = utils.isString(m) ? m : '';
    var match = /(sq|)([a-z]+)(2|)$/i.exec(s); // units rxp
    var o = {};
    if (utils.isNumber(m)) {
      o.value = m;
    } else if (s === '') {
      o.value = NaN;
    } else if (match) {
      o.units = UNITS_LOOKUP[match[2].toLowerCase()];
      o.areal = !!(match[1] || match[3]);
      o.value = Number(s.substring(0, s.length - match[0].length));
      if (!o.units && !isNaN(o.value)) {
        // throw error if string contains a number followed by unrecognized units string
        stop('Unknown units: ' + match[0]);
      }
    } else {
      o.value = Number(s);
    }
    return o;
  }

  function convertAreaParam(opt, crs) {
    var o = parseMeasure(opt);
    var k = getIntervalConversionFactor(o.units, crs);
    return o.value * k * k;
  }

  function convertDistanceParam(opt, crs) {
    var o = parseMeasure(opt);
    var k = getIntervalConversionFactor(o.units, crs);
    if (o.areal) {
      stop('Expected a distance, received an area:', opt);
    }
    return o.value * k;
  }

  // Same as convertDistanceParam(), except:
  //   in the case of latlong datasets, coordinates are unitless (instead of meters),
  //   and parameters with units trigger an error
  function convertIntervalParam(opt, crs) {
    var o = parseMeasure(opt);
    var k = getIntervalConversionFactor(o.units, crs);
    if (o.units && crs && crs.is_latlong) {
      stop('Parameter does not support distance units with latlong datasets');
    }
    if (o.areal) {
      stop('Expected a distance, received an area:', opt);
    }
    return o.value * k;
  }

  function convertIntervalPair(opt, crs) {
    var a, b;
    if (!Array.isArray(opt) || opt.length != 2) {
      stop('Expected two distance parameters, received', opt);
    }
    a = parseMeasure(opt[0]);
    b = parseMeasure(opt[1]);
    if (a.units && !b.units || b.units && !a.units) {
      stop('Both parameters should have units:', opt);
    }
    return [convertIntervalParam(opt[0], crs),
            convertIntervalParam(opt[1], crs)];
  }

  // Accepts a single value or a list of four values. List order is l,b,t,r
  function convertFourSides(opt, crs, bounds) {
    var arr = opt.split(',');
    if (arr.length == 1) {
      arr = [arr[0], arr[0], arr[0], arr[0]];
    } else if (arr.length != 4) {
      stop("Expected a distance parameter or a list of four params");
    }
    return arr.map(function(param, i) {
      var tmp;
      if (param.indexOf('%') > 0) {
        tmp = parseFloat(param) / 100 || 0;
        return tmp * (i == 1 || i == 3 ? bounds.height() : bounds.width());
      }
      return convertIntervalParam(opt, crs);
    });
  }

  // Convert an area measure to a label in sqkm or sqm
  function getAreaLabel(area, crs) {
    var sqm = crs && crs.to_meter ? area * crs.to_meter * crs.to_meter : area;
    var sqkm = sqm / 1e6;
    return sqkm < 0.01 ? Math.round(sqm) + ' sqm' : sqkm + ' sqkm';
  }

  var Units = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getIntervalConversionFactor: getIntervalConversionFactor,
    parseMeasure: parseMeasure,
    parseMeasure2: parseMeasure2,
    convertAreaParam: convertAreaParam,
    convertDistanceParam: convertDistanceParam,
    convertIntervalParam: convertIntervalParam,
    convertIntervalPair: convertIntervalPair,
    convertFourSides: convertFourSides,
    getAreaLabel: getAreaLabel
  });

  // Keep track of whether positive or negative integer ids are 'used' or not.

  function IdTestIndex(n) {
    var index = new Uint8Array(n);

    this.setId = function(id) {
      if (id < 0) {
        index[~id] |= 2;
      } else {
        index[id] |= 1;
      }
    };

    this.hasId = function(id) {
      return id < 0 ? (index[~id] & 2) == 2 : (index[id] & 1) == 1;
    };

    // clear a signed id
    this.clearId = function(id) {
      if (id < 0) {
        index[~id] &= 1; // clear reverse arc, preserve fwd arc
      } else {
        index[id] &= 2; // clear fwd arc, preserve rev arc
      }
    };

    // clear pos. and neg. ids in ids array
    this.clearIds = function(ids) {
      for (var i=0; i<ids.length; i++) {
        this.clearId(ids[i]);
      }
    };

    this.setIds = function(ids) {
      for (var i=0; i<ids.length; i++) {
        this.setId(ids[i]);
      }
    };
  }

  // Clean polygon or polyline shapes (in-place)
  //
  function cleanShapes(shapes, arcs, type) {
    for (var i=0, n=shapes.length; i<n; i++) {
      shapes[i] = cleanShape(shapes[i], arcs, type);
    }
  }

  // Remove defective arcs and zero-area polygon rings
  // Remove simple polygon spikes of form: [..., id, ~id, ...]
  // Don't remove duplicate points
  // Don't check winding order of polygon rings
  function cleanShape(shape, arcs, type) {
    return editShapeParts(shape, function(path) {
      var cleaned = cleanPath(path, arcs);
      if (type == 'polygon' && cleaned) {
        removeSpikesInPath(cleaned); // assumed by addIntersectionCuts()
        if (geom.getPlanarPathArea(cleaned, arcs) === 0) {
          cleaned = null;
        }
      }
      return cleaned;
    });
  }

  function cleanPath(path, arcs) {
    var nulls = 0;
    for (var i=0, n=path.length; i<n; i++) {
      if (arcs.arcIsDegenerate(path[i])) {
        nulls++;
        path[i] = null;
      }
    }
    return nulls > 0 ? path.filter(function(id) {return id !== null;}) : path;
  }


  // Remove pairs of ids where id[n] == ~id[n+1] or id[0] == ~id[n-1];
  // (in place)
  function removeSpikesInPath(ids) {
    var n = ids.length;
    if (n >= 2) {
      if (ids[0] == ~ids[n-1]) {
        ids.pop();
        ids.shift();
      } else {
        for (var i=1; i<n; i++) {
          if (ids[i-1] == ~ids[i]) {
            ids.splice(i-1, 2);
            break;
          }
        }
      }
      if (ids.length < n) {
        removeSpikesInPath(ids);
      }
    }
  }


  // Returns a function for splitting self-intersecting polygon rings
  // The splitter function receives a single polygon ring represented as an array
  // of arc ids, and returns an array of split-apart rings.
  //
  // Self-intersections in the input ring are assumed to occur at vertices, not along segments.
  // This requires that internal.addIntersectionCuts() has already been run.
  //
  // The rings output by this function may overlap each other, but each ring will
  // be non-self-intersecting. For example, a figure-eight shaped ring will be
  // split into two rings that touch each other where the original ring crossed itself.
  //
  function getSelfIntersectionSplitter(nodes) {
    var pathIndex = new IdTestIndex(nodes.arcs.size());
    var filter = function(arcId) {
      return pathIndex.hasId(~arcId);
    };
    return function(path) {
      pathIndex.setIds(path);
      var paths = dividePath(path);
      pathIndex.clearIds(path);
      return paths;
    };

    // Returns array of 0 or more divided paths
    function dividePath(path) {
      var subPaths = null;
      for (var i=0, n=path.length; i < n - 1; i++) { // don't need to check last arc
        subPaths = dividePathAtNode(path, path[i]);
        if (subPaths !== null) {
          return subPaths;
        }
      }
      // indivisible path -- clean it by removing any spikes
      removeSpikesInPath(path);
      return path.length > 0 ? [path] : [];
    }

    // If arc @enterId enters a node with more than one open routes leading out:
    //   return array of sub-paths
    // else return null
    function dividePathAtNode(path, enterId) {
      var nodeIds = nodes.getConnectedArcs(enterId, filter),
          exitArcIndexes, exitArcId, idx;
      if (nodeIds.length < 2) return null;
      exitArcIndexes = [];
      for (var i=0; i<nodeIds.length; i++) {
        exitArcId = ~nodeIds[i];
        idx = indexOf(path, exitArcId);
        if (idx > -1) { // repeated scanning may be bottleneck
          // important optimization (TODO: explain this)
          // TODO: test edge case: exitArcId occurs twice in the path
          pathIndex.clearId(exitArcId);
          exitArcIndexes.push(idx);
        } else {
          // TODO: investigate why this happens
        }
      }
      if (exitArcIndexes.length < 2) {
        return null;
      }
      // path forks -- recursively subdivide
      var subPaths = splitPathByIds(path, exitArcIndexes);
      return subPaths.reduce(accumulatePaths, null);
    }

    function accumulatePaths(memo, path) {
      var subPaths = dividePath(path);
      if (memo === null) {
        return subPaths;
      }
      memo.push.apply(memo, subPaths);
      return memo;
    }

    // Added as an optimization -- faster than using Array#indexOf()
    function indexOf(arr, el) {
      for (var i=0, n=arr.length; i<n; i++) {
        if (arr[i] === el) return i;
      }
      return -1;
    }

  }

  // Function returns an array of split-apart rings
  // @path An array of arc ids describing a self-intersecting polygon ring
  // @ids An array of two or more indexes of arcs that originate from a single vertex
  //      where @path intersects itself -- assumes indexes are in ascending sequence
  function splitPathByIds(path, indexes) {
    var subPaths = [];
    utils.genericSort(indexes, true); // sort ascending
    if (indexes[0] > 0) {
      subPaths.push(path.slice(0, indexes[0]));
    }
    for (var i=0, n=indexes.length; i<n; i++) {
      if (i < n-1) {
        subPaths.push(path.slice(indexes[i], indexes[i+1]));
      } else {
        subPaths.push(path.slice(indexes[i]));
      }
    }
    // handle case where first subring is split across endpoint of @path
    if (subPaths.length > indexes.length) {
      utils.merge(subPaths[0], subPaths.pop());
    }
    return subPaths;
  }

  var PathRepair = /*#__PURE__*/Object.freeze({
    __proto__: null,
    cleanShapes: cleanShapes,
    removeSpikesInPath: removeSpikesInPath,
    getSelfIntersectionSplitter: getSelfIntersectionSplitter,
    splitPathByIds: splitPathByIds
  });

  function getBoundsPrecisionForDisplay(bbox) {
    var w = bbox[2] - bbox[0],
        h = bbox[3] - bbox[1],
        range = Math.min(w, h) + 1e-8,
        digits = 0;
    while (range < 2000) {
      range *= 10;
      digits++;
    }
    return digits;
  }

  function getRoundedCoordString(coords, decimals) {
    return coords.map(function(n) {return n.toFixed(decimals);}).join(',');
  }

  function getRoundedCoords(coords, decimals) {
    return getRoundedCoordString(coords, decimals).split(',').map(parseFloat);
  }

  function roundPoints(lyr, round) {
    forEachPoint(lyr.shapes, function(p) {
      p[0] = round(p[0]);
      p[1] = round(p[1]);
    });
  }

  function setCoordinatePrecision(dataset, precision) {
    var round = getRoundingFunction(precision);
    // var dissolvePolygon, nodes;
    transformPoints(dataset, function(x, y) {
      return [round(x), round(y)];
    });
    // v0.4.52 removing polygon dissolve - see issue #219
    /*
    if (dataset.arcs) {
      nodes = internal.addIntersectionCuts(dataset);
      dissolvePolygon = internal.getPolygonDissolver(nodes);
    }
    dataset.layers.forEach(function(lyr) {
      if (lyr.geometry_type == 'polygon' && dissolvePolygon) {
        // clean each polygon -- use dissolve function to remove spikes
        // TODO: better handling of corrupted polygons
        lyr.shapes = lyr.shapes.map(dissolvePolygon);
      }
    });
    */
    return dataset;
  }

  // inc: Rounding incrememnt (e.g. 0.001 rounds to thousandths)
  function getRoundingFunction(inc) {
    if (!utils.isNumber(inc) || inc === 0) {
      error("Rounding increment must be a non-zero number.");
    }
    var inv = 1 / inc;
    if (inv > 1) inv = Math.round(inv);
    return function(x) {
      return Math.round(x * inv) / inv;
      // these alternatives show rounding error after JSON.stringify()
      // return Math.round(x / inc) / inv;
      // return Math.round(x / inc) * inc;
      // return Math.round(x * inv) * inc;
    };
  }

  function roundToSignificantDigits(n, d) {
    return +n.toPrecision(d);
  }

  var Rounding = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getBoundsPrecisionForDisplay: getBoundsPrecisionForDisplay,
    getRoundedCoordString: getRoundedCoordString,
    getRoundedCoords: getRoundedCoords,
    roundPoints: roundPoints,
    setCoordinatePrecision: setCoordinatePrecision,
    getRoundingFunction: getRoundingFunction,
    roundToSignificantDigits: roundToSignificantDigits
  });

  // Apply snapping, remove duplicate coords and clean up defective paths in a dataset
  // Assumes that any CRS info has been added to the dataset
  // @opts: import options
  function cleanPathsAfterImport(dataset, opts) {
    var arcs = dataset.arcs;
    var snapDist;
    if (opts.snap || opts.auto_snap || opts.snap_interval) { // auto_snap is older name
      if (opts.snap_interval) {
        snapDist = convertIntervalParam(opts.snap_interval, getDatasetCRS(dataset));
      }
      if (arcs) {
        snapCoords(arcs, snapDist);
      }
    }
    dataset.layers.forEach(function(lyr) {
      if (layerHasPaths(lyr)) {
        cleanShapes(lyr.shapes, arcs, lyr.geometry_type);
      }
    });
  }

  function pointHasValidCoords(p) {
    // The Shapefile spec states that "measures" less then -1e38 indicate null values
    // This should not apply to coordinate data, but in-the-wild Shapefiles have been
    // seen with large negative values indicating null coordinates.
    // This test catches these and also NaNs, but does not detect other kinds of
    // invalid coords
    return p[0] > -1e38 && p[1] > -1e38;
  }

  // Accumulates points in buffers until #endPath() is called
  // @drain callback: function(xarr, yarr, size) {}
  //
  function PathImportStream(drain) {
    var buflen = 10000,
        xx = new Float64Array(buflen),
        yy = new Float64Array(buflen),
        i = 0;

    this.endPath = function() {
      drain(xx, yy, i);
      i = 0;
    };

    this.addPoint = function(x, y) {
      if (i >= buflen) {
        buflen = Math.ceil(buflen * 1.3);
        xx = utils.extendBuffer(xx, buflen);
        yy = utils.extendBuffer(yy, buflen);
      }
      xx[i] = x;
      yy[i] = y;
      i++;
    };
  }

  // Import path data from a non-topological source (Shapefile, GeoJSON, etc)
  // in preparation for identifying topology.
  // @opts.reserved_points -- estimate of points in dataset, for pre-allocating buffers
  //
  function PathImporter(opts) {
    var bufSize = opts.reserved_points > 0 ? opts.reserved_points : 20000,
        xx = new Float64Array(bufSize),
        yy = new Float64Array(bufSize),
        shapes = [],
        properties = [],
        nn = [],
        types = [],
        collectionType = opts.type || null, // possible values: polygon, polyline, point
        round = null,
        pathId = -1,
        shapeId = -1,
        pointId = 0,
        dupeCount = 0,
        openRingCount = 0;

    if (opts.precision) {
      round = getRoundingFunction(opts.precision);
    }

    // mix in #addPoint() and #endPath() methods
    utils.extend(this, new PathImportStream(importPathCoords));

    this.startShape = function(d) {
      shapes[++shapeId] = null;
      if (d) properties[shapeId] = d;
    };

    this.importLine = function(points) {
      if (points.length < 2) {
        verbose("Skipping a defective line");
        return;
      }
      setShapeType('polyline');
      this.importPath(points);
    };

    this.importPoints = function(points) {
      setShapeType('point');
      points = points.filter(pointHasValidCoords);
      if (round) {
        points.forEach(function(p) {
          p[0] = round(p[0]);
          p[1] = round(p[1]);
        });
      }
      points.forEach(appendToShape);
    };

    this.importRing = function(points, isHole) {
      var area = geom.getPlanarPathArea2(points);
      if (!area || points.length < 4) {
        verbose("Skipping a defective ring");
        return;
      }
      setShapeType('polygon');
      if (isHole === true && area > 0 || isHole === false && area < 0) {
        verbose("Reversing", isHole ? "a CW hole" : "a CCW ring");
        points.reverse();
      }
      this.importPath(points);
    };

    // Import an array of [x, y] Points
    this.importPath = function importPath(points) {
      var p;
      for (var i=0, n=points.length; i<n; i++) {
        p = points[i];
        this.addPoint(p[0], p[1]);
      }
      this.endPath();
    };

    // Return imported dataset
    // Apply any requested snapping and rounding
    // Remove duplicate points, check for ring inversions
    //
    this.done = function() {
      var arcs;
      var layers;
      var lyr = {name: ''};
      var snapDist;

      if (dupeCount > 0) {
        verbose(utils.format("Removed %,d duplicate point%s", dupeCount, utils.pluralSuffix(dupeCount)));
      }
      if (openRingCount > 0) {
        message(utils.format("Closed %,d open polygon ring%s", openRingCount, utils.pluralSuffix(openRingCount)));
      }
      if (pointId > 0) {
         if (pointId < xx.length) {
          xx = xx.subarray(0, pointId);
          yy = yy.subarray(0, pointId);
        }
        arcs = new ArcCollection(nn, xx, yy);

        //if (opts.snap || opts.auto_snap || opts.snap_interval) { // auto_snap is older name
        //  internal.snapCoords(arcs, opts.snap_interval);
        //}
      }

      if (collectionType == 'mixed') {
        layers = divideFeaturesByType(shapes, properties, types);

      } else {
        lyr = {geometry_type: collectionType};
        if (collectionType) {
          lyr.shapes = shapes;
        }
        if (properties.length > 0) {
          lyr.data = new DataTable(properties);
        }
        layers = [lyr];
      }

      layers.forEach(function(lyr) {
        //if (internal.layerHasPaths(lyr)) {
          //internal.cleanShapes(lyr.shapes, arcs, lyr.geometry_type);
        //}
        if (lyr.data) {
          fixInconsistentFields(lyr.data.getRecords());
        }
      });

      return {
        arcs: arcs || null,
        info: {},
        layers: layers
      };
    };

    function setShapeType(t) {
      var currType = shapeId < types.length ? types[shapeId] : null;
      if (!currType) {
        types[shapeId] = t;
        if (!collectionType) {
          collectionType = t;
        } else if (t != collectionType) {
          collectionType = 'mixed';
        }
      } else if (currType != t) {
        stop("Unable to import mixed-geometry GeoJSON features");
      }
    }

    function checkBuffers(needed) {
      if (needed > xx.length) {
        var newLen = Math.max(needed, Math.ceil(xx.length * 1.5));
        xx = utils.extendBuffer(xx, newLen, pointId);
        yy = utils.extendBuffer(yy, newLen, pointId);
      }
    }

    function appendToShape(part) {
      var currShape = shapes[shapeId] || (shapes[shapeId] = []);
      currShape.push(part);
    }

    function appendPath(n) {
      pathId++;
      nn[pathId] = n;
      appendToShape([pathId]);
    }

    function importPathCoords(xsrc, ysrc, n) {
      var count = 0;
      var x, y, prevX, prevY;
      checkBuffers(pointId + n);
      for (var i=0; i<n; i++) {
        x = xsrc[i];
        y = ysrc[i];
        if (round) {
          x = round(x);
          y = round(y);
        }
        if (i > 0 && x == prevX && y == prevY) {
          dupeCount++;
        } else {
          xx[pointId] = x;
          yy[pointId] = y;
          pointId++;
          count++;
        }
        prevY = y;
        prevX = x;
      }

      // check for open rings
      if (collectionType == 'polygon' && count > 0) {
        if (xsrc[0] != xsrc[n-1] || ysrc[0] != ysrc[n-1]) {
          checkBuffers(pointId + 1);
          xx[pointId] = xsrc[0];
          yy[pointId] = ysrc[0];
          openRingCount++;
          pointId++;
          count++;
        }
      }

      appendPath(count);
    }
  }

  var PathImport = /*#__PURE__*/Object.freeze({
    __proto__: null,
    cleanPathsAfterImport: cleanPathsAfterImport,
    pointHasValidCoords: pointHasValidCoords,
    PathImporter: PathImporter
  });

  // Read Shapefile data from a file, ArrayBuffer or Buffer
  // @shp, @shx: filename or buffer
  function importShp(shp, shx, opts) {
    var reader = new ShpReader(shp, shx),
        shpType = reader.type(),
        type = translateShapefileType(shpType),
        importOpts = utils.defaults({
          type: type,
          reserved_points: Math.round(reader.header().byteLength / 16)
        }, opts),
        importer = new PathImporter(importOpts);

    if (!isSupportedShapefileType(shpType)) {
      stop("Unsupported Shapefile type:", shpType);
    }
    if (ShpType.isZType(shpType)) {
      message("Warning: Shapefile Z data will be lost.");
    } else if (ShpType.isMType(shpType)) {
      message("Warning: Shapefile M data will be lost.");
    }

    // TODO: test cases: null shape; non-null shape with no valid parts
    reader.forEachShape(function(shp) {
      importer.startShape();
      if (shp.isNull) {
        // skip
      } else if (type == 'point') {
        importer.importPoints(shp.readPoints());
      } else {
        shp.stream(importer);
        // shp.stream2(importer);
      }
    });

    return importer.done();
  }

  var ShpImport = /*#__PURE__*/Object.freeze({
    __proto__: null,
    importShp: importShp
  });

  // Guess the type of a data file from file extension, or return null if not sure
  function guessInputFileType(file) {
    var ext = getFileExtension(file || '').toLowerCase(),
        type = null;
    if (ext == 'dbf' || ext == 'shp' || ext == 'prj' || ext == 'shx') {
      type = ext;
    } else if (/json$/.test(ext)) {
      type = 'json';
    } else if (ext == 'csv' || ext == 'tsv' || ext == 'txt' || ext == 'tab') {
      type = 'text';
    }
    return type;
  }

  function guessInputContentType(content) {
    var type = null;
    if (utils.isString(content)) {
      type = stringLooksLikeJSON(content) ? 'json' : 'text';
    } else if (utils.isObject(content) && content.type || utils.isArray(content)) {
      type = 'json';
    }
    return type;
  }

  function guessInputType(file, content) {
    return guessInputFileType(file) || guessInputContentType(content);
  }

  //
  function stringLooksLikeJSON(str) {
    return /^\s*[{[]/.test(String(str));
  }

  function couldBeDsvFile(name) {
    var ext = getFileExtension(name).toLowerCase();
    return /csv|tsv|txt$/.test(ext);
  }

  function isZipFile(file) {
    return /\.zip$/i.test(file);
  }

  function isSupportedOutputFormat(fmt) {
    var types = ['geojson', 'topojson', 'json', 'dsv', 'dbf', 'shapefile', 'svg'];
    return types.indexOf(fmt) > -1;
  }

  function getFormatName(fmt) {
    return {
      geojson: 'GeoJSON',
      topojson: 'TopoJSON',
      json: 'JSON records',
      dsv: 'CSV',
      dbf: 'DBF',
      shapefile: 'Shapefile',
      svg: 'SVG'
    }[fmt] || '';
  }

  // Assumes file at @path is one of Mapshaper's supported file types
  function isSupportedBinaryInputType(path) {
    var ext = getFileExtension(path).toLowerCase();
    return ext == 'shp' || ext == 'shx' || ext == 'dbf'; // GUI also supports zip files
  }

  // Detect extensions of some unsupported file types, for cmd line validation
  function filenameIsUnsupportedOutputType(file) {
    var rxp = /\.(shx|prj|xls|xlsx|gdb|sbn|sbx|xml|kml)$/i;
    return rxp.test(file);
  }

  var FileTypes = /*#__PURE__*/Object.freeze({
    __proto__: null,
    guessInputFileType: guessInputFileType,
    guessInputContentType: guessInputContentType,
    guessInputType: guessInputType,
    stringLooksLikeJSON: stringLooksLikeJSON,
    couldBeDsvFile: couldBeDsvFile,
    isZipFile: isZipFile,
    isSupportedOutputFormat: isSupportedOutputFormat,
    getFormatName: getFormatName,
    isSupportedBinaryInputType: isSupportedBinaryInputType,
    filenameIsUnsupportedOutputType: filenameIsUnsupportedOutputType
  });

  // Returns undefined if not found
  function lookupColorName(str) {
    return colors[str.toLowerCase().replace(/[ -]+/g, '')];
  }

  var colors = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    gold: '#ffd700',
    goldenrod: '#daa520',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavender: '#e6e6fa',
    lavenderblush: '#fff0f5',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32'
  };

  var rgbaRxp = /^rgba?\(([^)]+)\)/;
  var hexRxp = /^#([a-f0-9]{3,8})/i;

  function parseColor(arg) {
    arg = arg ? String(arg) : '';
    var hexStr = hexRxp.test(arg) ? arg : lookupColorName(arg);
    var rgb = null;
    if (hexStr) rgb = parseHexColor(hexStr);
    else if (rgbaRxp.test(arg)) rgb = parseRGBA(arg);
    if (!testRGB(rgb)) stop("Unsupported color:", arg);
    return rgb;
  }

  function testRGB(o) {
    return !!o && testChannel(o.r) && testChannel(o.g) && testChannel(o.b) &&
      testAlpha(o.a);
  }

  function testAlpha(a) {
    return a >= 0 && a <= 1;
  }

  function testChannel(c) {
    return c >= 0 && c < 256; // allow fractional values
  }

  function parseRGBA(arg) {
    var str = rgbaRxp.exec(arg)[1];
    var parts = str.split(',').map(function(part) { return parseFloat(part); });
    return {
      r: parts[0],
      g: parts[1],
      b: parts[2],
      a: parts[3] >= 0 ? parts[3] : 1
    };
  }

  function formatColor(o) {
    return o.a < 1 ? formatRGBA(o) : formatHexColor(o);
  }

  function formatHexColor(o) {
    return "#" + formatHexChannel(o.r) + formatHexChannel(o.g) + formatHexChannel(o.b);

  }

  function formatRGBA(o) {
    var rgb = snapHexChannel(o.r) + ',' + snapHexChannel(o.g) + ',' + snapHexChannel(o.b);
    return o.a < 1 ?
      'rgba(' + rgb + ',' + snapAlpha(o.a) + ')' :
      'rgb(' + rgb + ')';
  }

  function snapAlpha(a) {
    a = +a || 0;
    a = Math.round(a * 1000) / 1000; // round to thousandths
    return utils.clamp(a, 0, 1);
  }

  function snapHexChannel(arg) {
    return Math.round(utils.clamp(+arg || 0, 0, 255));
  }

  // arg: should be number in 0-255 range
  function formatHexChannel(arg) {
    return snapHexChannel(arg).toString(16).padStart(2, '0');
  }

  // returns {r, g, b} object
  function parseHexColor(str) {
    var hex = hexRxp.exec(str)[1];
    if (hex.length == 3 || hex.length == 4) {
      hex = hex.split('').map(function(c) { return c + c; });
    }
    if (hex.length != 6 && hex.length != 8) return null;
    return {
      r: parseInt(hex.substr(0, 2), 16),
      g: parseInt(hex.substr(2, 2), 16),
      b: parseInt(hex.substr(4, 2), 16),
      a: hex.length == 8 ? parseInt(hex.substr(7, 2), 16) / 255 : 1
    };
  }

  function toHSV(rgb) {
    var r = rgb.r,
        g = rgb.g,
        b = rgb.b,
        max = Math.max(r, g, b),
        min = Math.min(r, g, b),
        diff = max - min,
        h;
    if (diff === 0) {
      h = 0;
    } else if (r == max) {
      h = (g - b) / diff;
    } else if (g == max) {
      h = (b - r) / diff + 2;
    } else {
      h = (r - g) / diff + 4;
    }
    h *= 60;
    if (h < 0) h += 360;
    return {
      h: h,
      s: max == 0 ? 0 : 255 * (1 - min / max),
      v: max,
      a: rgb.a
    };
  }

  function fromHSV(hsv) {
    var h = hsv.h,
        s = hsv.s / 255,
        v = hsv.v,
        hi = Math.floor(h / 60) % 6,
        f = h / 60 - Math.floor(h / 60),
        p = (v * (1 - s)),
        q = (v * (1 - f * s)),
        t = (v * (1 - (1 - f) * s)),
        r, g, b;
    if (hi === 0) {
      r = v; g = t; b = p;
    } else if (hi == 1) {
      r = q; g = v; b = p;
    } else if (hi == 2) {
      r = p; g = v; b = t;
    } else if (hi == 3) {
      r = p; g = q; b = v;
    } else if (hi == 4) {
      r = t; g = p; b = v;
    } else {
      r = v; g = p; b = q;
    }
    return {
      r: r,
      g: g,
      b: b,
      a: hsv.a
    };
  }

  function blend() {
    var args = Array.from(arguments);
    var colors = [],
        weights = [],
        col, weight, i;
    for (i=0; i<args.length; i+= 2) {
      colors.push(parseColor(args[i]));
      weights.push(+args[i + 1] || 0);
    }
    weights = normalizeWeights(weights);
    if (!weights) return '#eee';
    var blended = colors.reduce(function(memo, rgb, i) {
      var w = weights[i];
      memo.r += rgb.r * w;
      memo.g += rgb.g * w;
      memo.b += rgb.b * w;
      return memo;
    }, {r: 0, g: 0, b: 0});
    return formatColor(blended);
  }

  function normalizeWeights(weights) {
    var sum = utils.sum(weights);
    if (sum > 0 === false) {
      return null;
    }
    return weights.map(function(w) {
      return w / sum;
    });
  }

  var expressionUtils = {
    round: function(val, dig) {
      var k = 1;
      dig = dig | 0;
      while(dig-- > 0) k *= 10;
      return Math.round(val * k) / k;
    },
    sprintf: utils.format,
    blend: blend
  };

  function simplifyArcsFast(arcs, dist) {
    var xx = [],
        yy = [],
        nn = [],
        count;
    for (var i=0, n=arcs.size(); i<n; i++) {
      count = simplifyPathFast([i], arcs, dist, xx, yy);
      if (count == 1) {
        count = 0;
        xx.pop();
        yy.pop();
      }
      nn.push(count);
    }
    return new ArcCollection(nn, xx, yy);
  }

  function simplifyPolygonFast(shp, arcs, dist) {
    if (!shp || !dist) return null;
    var xx = [],
        yy = [],
        nn = [],
        shp2 = [];

    shp.forEach(function(path) {
      var count = simplifyPathFast(path, arcs, dist, xx, yy);
      while (count < 4 && count > 0) {
        xx.pop();
        yy.pop();
        count--;
      }
      if (count > 0) {
        shp2.push([nn.length]);
        nn.push(count);
      }
    });
    return {
      shape: shp2.length > 0 ? shp2 : null,
      arcs: new ArcCollection(nn, xx, yy)
    };
  }

  function simplifyPathFast(path, arcs, dist, xx, yy) {
    var iter = arcs.getShapeIter(path),
        count = 0,
        prevX, prevY, x, y;
    while (iter.hasNext()) {
      x = iter.x;
      y = iter.y;
      if (count === 0 || geom.distance2D(x, y, prevX, prevY) > dist) {
        xx.push(x);
        yy.push(y);
        prevX = x;
        prevY = y;
        count++;
      }
    }
    if (x != prevX || y != prevY) {
      xx.push(x);
      yy.push(y);
      count++;
    }
    return count;
  }

  var SimplifyFast = /*#__PURE__*/Object.freeze({
    __proto__: null,
    simplifyArcsFast: simplifyArcsFast,
    simplifyPolygonFast: simplifyPolygonFast
  });

  // Find a point inside a polygon and located away from the polygon edge
  // Method:
  // - get the largest ring of the polygon
  // - get an array of x-values distributed along the horizontal extent of the ring
  // - for each x:
  //     intersect a vertical line with the polygon at x
  //     find midpoints of each intersecting segment
  // - for each midpoint:
  //     adjust point vertically to maximize weighted distance from polygon edge
  // - return the adjusted point having the maximum weighted distance from the edge
  //
  // (distance is weighted to slightly favor points near centroid)
  //
  function findAnchorPoint(shp, arcs) {
    var maxPath = shp && geom.getMaxPath(shp, arcs),
        pathBounds = maxPath && arcs.getSimpleShapeBounds(maxPath),
        thresh, simple;
    if (!pathBounds || !pathBounds.hasBounds() || pathBounds.area() === 0) {
      return null;
    }
    // Optimization: quickly simplify using a relatively small distance threshold.
    // (testing multiple candidate points can be very slow for large and detailed
    //   polgons; simplification alleviates this)
    // Caveat: In rare cases this could cause poor point placement, e.g. if
    //   simplification causes small holes to be removed.
    thresh = Math.sqrt(pathBounds.area()) * 0.01;
    simple = simplifyPolygonFast(shp, arcs, thresh);
    if (!simple.shape) {
      return null; // collapsed shape
    }
    return findAnchorPoint2(simple.shape, simple.arcs);
  }

  // Assumes: shp is a polygon with at least one space-enclosing ring
  function findAnchorPoint2(shp, arcs) {
    var maxPath = geom.getMaxPath(shp, arcs);
    var pathBounds = arcs.getSimpleShapeBounds(maxPath);
    var centroid = geom.getPathCentroid(maxPath, arcs);
    var weight = getPointWeightingFunction(centroid, pathBounds);
    var area = geom.getPlanarPathArea(maxPath, arcs);
    var hrange, lbound, rbound, focus, htics, hstep, p, p2;

    // Limit test area if shape is simple and squarish
    if (shp.length == 1 && area * 1.2 > pathBounds.area()) {
      htics = 5;
      focus = 0.2;
    } else if (shp.length == 1 && area * 1.7 > pathBounds.area()) {
      htics = 7;
      focus = 0.4;
    } else {
      htics = 11;
      focus = 0.5;
    }
    hrange = pathBounds.width() * focus;
    lbound = centroid.x - hrange / 2;
    rbound = lbound + hrange;
    hstep = hrange / htics;

    // Find a best-fit point
    p = probeForBestAnchorPoint(shp, arcs, lbound, rbound, htics, weight);
    if (!p) {
      verbose("[points inner] failed, falling back to centroid");
     p = centroid;
    } else {
      // Look for even better fit close to best-fit point
      p2 = probeForBestAnchorPoint(shp, arcs, p.x - hstep / 2,
          p.x + hstep / 2, 2, weight);
      if (p2.distance > p.distance) {
        p = p2;
      }
    }
    return p;
  }

  function getPointWeightingFunction(centroid, pathBounds) {
    // Get a factor for weighting a candidate point
    // Points closer to the centroid are slightly preferred
    var referenceDist = Math.max(pathBounds.width(), pathBounds.height()) / 2;
    return function(x, y) {
      var offset = geom.distance2D(centroid.x, centroid.y, x, y);
      return 1 - Math.min(0.6 * offset / referenceDist, 0.25);
    };
  }

  function findAnchorPointCandidates(shp, arcs, xx) {
    var ymin = arcs.getBounds().ymin - 1;
    return xx.reduce(function(memo, x) {
      var cands = findHitCandidates(x, ymin, shp, arcs);
      return memo.concat(cands);
    }, []);
  }

  function probeForBestAnchorPoint(shp, arcs, lbound, rbound, htics, weight) {
    var tics = getInnerTics(lbound, rbound, htics);
    var interval = (rbound - lbound) / htics;
    // Get candidate points, distributed along x-axis
    var candidates = findAnchorPointCandidates(shp, arcs, tics);
    var bestP, adjustedP, candP;

    // Sort candidates so points at the center of longer segments are tried first
    candidates.forEach(function(p) {
      p.interval *= weight(p.x, p.y);
    });
    candidates.sort(function(a, b) {
      return b.interval - a.interval;
    });

    for (var i=0; i<candidates.length; i++) {
      candP = candidates[i];
      // Optimization: Stop searching if weighted half-segment length of remaining
      //   points is less than the weighted edge distance of the best candidate
      if (bestP && bestP.distance > candP.interval) {
        break;
      }
      adjustedP = getAdjustedPoint(candP.x, candP.y, shp, arcs, interval, weight);

      if (!bestP || adjustedP.distance > bestP.distance) {
        bestP = adjustedP;
      }
    }
    return bestP;
  }

  // [x, y] is a point assumed to be inside a polygon @shp
  // Try to move the point farther from the polygon edge
  function getAdjustedPoint(x, y, shp, arcs, vstep, weight) {
    var p = {
      x: x,
      y: y,
      distance: geom.getPointToShapeDistance(x, y, shp, arcs) * weight(x, y)
    };
    scanForBetterPoint(p, shp, arcs, vstep, weight); // scan up
    scanForBetterPoint(p, shp, arcs, -vstep, weight); // scan down
    return p;
  }

  // Try to find a better-fit point than @p by scanning vertically
  // Modify p in-place
  function scanForBetterPoint(p, shp, arcs, vstep, weight) {
    var x = p.x,
        y = p.y,
        dmax = p.distance,
        d;

    while (true) {
      y += vstep;
      d = geom.getPointToShapeDistance(x, y, shp, arcs) * weight(x, y);
      // overcome vary small local minima
      if (d > dmax * 0.90 && geom.testPointInPolygon(x, y, shp, arcs)) {
        if (d > dmax) {
          p.distance = dmax = d;
          p.y = y;
        }
      } else {
        break;
      }
    }
  }

  // Return array of points at the midpoint of each line segment formed by the
  //   intersection of a vertical ray at [x, y] and a polygon shape
  function findHitCandidates(x, y, shp, arcs) {
    var yy = findRayShapeIntersections(x, y, shp, arcs);
    var cands = [], y1, y2, interval;

    // sorting by y-coord organizes y-intercepts into interior segments
    utils.genericSort(yy);
    for (var i=0; i<yy.length; i+=2) {
      y1 = yy[i];
      y2 = yy[i+1];
      interval = (y2 - y1) / 2;
      if (interval > 0) {
        cands.push({
          y: (y1 + y2) / 2,
          x: x,
          interval: interval
        });
      }
    }
    return cands;
  }

  // Return array of y-intersections between vertical ray with origin at [x, y]
  //   and a polygon
  function findRayShapeIntersections(x, y, shp, arcs) {
    if (!shp) return [];
    return shp.reduce(function(memo, path) {
      var yy = findRayRingIntersections(x, y, path, arcs);
      return memo.concat(yy);
    }, []);
  }

  // Return array of y-intersections between vertical ray and a polygon ring
  function findRayRingIntersections(x, y, path, arcs) {
    var yints = [];
    forEachSegmentInPath(path, arcs, function(a, b, xx, yy) {
      var result = geom.getRayIntersection(x, y, xx[a], yy[a], xx[b], yy[b]);
      if (result > -Infinity) {
        yints.push(result);
      }
    });
    // Ignore odd number of intersections -- probably caused by a ray that touches
    //   but doesn't cross the ring
    // TODO: improve method to handle edge case with two touches and no crosses.
    if (yints.length % 2 === 1) {
      yints = [];
    }
    return yints;
  }

  // TODO: find better home + name for this
  function getInnerTics(min, max, steps) {
    var range = max - min,
        step = range / (steps + 1),
        arr = [];
    for (var i = 1; i<=steps; i++) {
      arr.push(min + step * i);
    }
    return arr;
  }

  var AnchorPoints = /*#__PURE__*/Object.freeze({
    __proto__: null,
    findAnchorPoint: findAnchorPoint
  });

  // Returns a function for calculating the percentage of a shape's perimeter by length that
  // is composed of inner (shared) boundaries
  function getInnerPctCalcFunction(arcs, shapes) {
    var calcSegLen = arcs.isPlanar() ? geom.distance2D : geom.greatCircleDistance;
    var arcIndex = new ArcTopologyIndex(arcs, shapes);
    var outerLen, innerLen, arcLen; // temp variables

    return function(shp) {
      outerLen = 0;
      innerLen = 0;
      if (shp) shp.forEach(procRing);
      return innerLen > 0 ? innerLen / (innerLen + outerLen) : 0;
    };

    function procRing(ids) {
      ids.forEach(procArc);
    }

    function procArc(id) {
      arcLen = 0;
      arcs.forEachArcSegment(id, addSegLen);
      if (arcIndex.isInnerArc(id)) {
        innerLen += arcLen;
      } else {
        outerLen += arcLen;
      }
    }

    function addSegLen(i, j, xx, yy) {
      arcLen += calcSegLen(xx[i], yy[i], xx[j], yy[j]);
    }
  }

  function ArcTopologyIndex(arcs, shapes) {
    var index = new Uint8Array(arcs.size());
    forEachArcId(shapes, function(arcId) {
      if (arcId < 0) index[~arcId] |= 2;
      else (index[arcId] |= 1);
    });

    this.isInnerArc = function(arcId) {
      var i = absArcId(arcId);
      return index[i] == 3;
    };
  }

  function addGetters(obj, getters) {
    Object.keys(getters).forEach(function(name) {
      Object.defineProperty(obj, name, {get: getters[name]});
    });
  }

  function initFeatureProxy(lyr, arcs) {
    var hasPoints = layerHasPoints(lyr),
        hasPaths = arcs && layerHasPaths(lyr),
        _records = lyr.data ? lyr.data.getRecords() : null,
        _isPlanar = hasPaths && arcs.isPlanar(),
        ctx = {},
        calcInnerPct,
        _bounds, _centroid, _innerXY, _xy, _ids, _id;

    // all contexts have this.id and this.layer_name
    addGetters(ctx, {
      id: function() { return _id; },
      layer_name: function() { return lyr.name || ''; },
      layer: function() { return {name: lyr.name, data: _records};}
    });

    if (_records) {
      Object.defineProperty(ctx, 'properties',
        {set: function(obj) {
          if (utils.isObject(obj)) {
            _records[_id] = obj;
          } else {
            stop("Can't assign non-object to $.properties");
          }
        }, get: function() {
          var rec = _records[_id];
          if (!rec) {
            rec = _records[_id] = {};
          }
          return rec;
        }});
    }

    if (hasPaths) {
      addGetters(ctx, {
        // TODO: count hole/s + containing ring as one part
        partCount: function() {
          return _ids ? _ids.length : 0;
        },
        isNull: function() {
          return ctx.partCount === 0;
        },
        bounds: function() {
          return shapeBounds().toArray();
        },
        height: function() {
          return shapeBounds().height();
        },
        width: function() {
          return shapeBounds().width();
        }
      });

      if (lyr.geometry_type == 'polyline') {
        addGetters(ctx, {
          'length': function() {
            return geom.getShapePerimeter(_ids, arcs);
          }
        });
      }

      if (lyr.geometry_type == 'polygon') {
        addGetters(ctx, {
          area: function() {
            return _isPlanar ? ctx.planarArea : geom.getSphericalShapeArea(_ids, arcs);
          },
          perimeter: function() {
            return geom.getShapePerimeter(_ids, arcs);
          },
          compactness: function() {
            return geom.calcPolsbyPopperCompactness(ctx.area, ctx.perimeter);
          },
          planarArea: function() {
            return geom.getPlanarShapeArea(_ids, arcs);
          },
          innerPct: function() {
            if (!calcInnerPct) calcInnerPct = getInnerPctCalcFunction(arcs, lyr.shapes);
            return calcInnerPct(_ids);
          },
          originalArea: function() {
            // Get area
            var i = arcs.getRetainedInterval(),
                area;
            arcs.setRetainedInterval(0);
            area = ctx.area;
            arcs.setRetainedInterval(i);
            return area;
          },
          centroidX: function() {
            var p = centroid();
            return p ? p.x : null;
          },
          centroidY: function() {
            var p = centroid();
            return p ? p.y : null;
          },
          innerX: function() {
            var p = innerXY();
            return p ? p.x : null;
          },
          innerY: function() {
            var p = innerXY();
            return p ? p.y : null;
          }
        });
      }

    } else if (hasPoints) {
      // TODO: add functions like bounds, isNull, pointCount
      Object.defineProperty(ctx, 'coordinates',
        {set: function(obj) {
          if (!obj || utils.isArray(obj)) {
            lyr.shapes[_id] = obj || null;
          } else {
            stop("Can't assign non-array to $.coordinates");
          }
        }, get: function() {
          return lyr.shapes[_id] || null;
        }});
      Object.defineProperty(ctx, 'x', {
        get: function() { xy(); return _xy ? _xy[0] : null;},
        set: function(val) { xy(); if (_xy) _xy[0] = Number(val);}
      });
      Object.defineProperty(ctx, 'y', {
        get: function() { xy(); return _xy ? _xy[1] : null;},
        set: function(val) { xy(); if (_xy) _xy[1] = Number(val);}
      });
    }

    function xy() {
      var shape = lyr.shapes[_id];
      if (!_xy) {
        _xy = shape && shape[0] || null;
      }
    }

    function centroid() {
      _centroid = _centroid || geom.getShapeCentroid(_ids, arcs);
      return _centroid;
    }

    function innerXY() {
      _innerXY = _innerXY || findAnchorPoint(_ids, arcs);
      return _innerXY;
    }

    function shapeBounds() {
      if (!_bounds) {
        _bounds = arcs.getMultiShapeBounds(_ids);
      }
      return _bounds;
    }

    return function(id) {
      _id = id;
      // reset stored values
      if (hasPaths) {
        _bounds = null;
        _centroid = null;
        _innerXY = null;
        _ids = lyr.shapes[id];
      }
      if (hasPoints) {
        _xy = null;
      }
      return ctx;
    };
  }

  // Compiled expression returns a value
  function compileValueExpression(exp, lyr, arcs, opts) {
    opts = opts || {};
    opts.returns = true;
    return compileFeatureExpression(exp, lyr, arcs, opts);
  }

  function cleanExpression(exp) {
    // workaround for problem in GNU Make v4: end-of-line backslashes inside
    // quoted strings are left in the string (other shell environments remove them)
    return exp.replace(/\\\n/g, ' ');
  }

  function compileFeaturePairFilterExpression(exp, lyr, arcs) {
    var func = compileFeaturePairExpression(exp, lyr, arcs);
    return function(idA, idB) {
      var val = func(idA, idB);
      if (val !== true && val !== false) {
        stop("where expression must return true or false");
      }
      return val;
    };
  }

  function compileFeaturePairExpression(rawExp, lyr, arcs) {
    var exp = cleanExpression(rawExp);
    var ctx = getExpressionContext(lyr);
    var A = getProxyFactory(lyr, arcs);
    var B = getProxyFactory(lyr, arcs);
    var vars = getAssignedVars(exp);
    var functionBody = "with($$env){with($$record){return " + exp + "}}";
    var func;

    try {
      func = new Function("$$record,$$env", functionBody);
    } catch(e) {
      console.error(e);
      stop(e.name, "in expression [" + exp + "]");
    }

    // protect global object from assigned values
    nullifyUnsetProperties(vars, ctx);

    function getProxyFactory(lyr, arcs) {
      var records = lyr.data ? lyr.data.getRecords() : [];
      var getFeatureById = initFeatureProxy(lyr, arcs);
      function Proxy(id) {}

      return function(id) {
        var proxy;
        if (id == -1) return null;
        Proxy.prototype = records[id] || {};
        proxy = new Proxy();
        proxy.$ = getFeatureById(id);
        return proxy;
      };
    }

    // idA - id of a record
    // idB - id of a record, or -1
    // rec - optional data record
    return function(idA, idB, rec) {
      var val;
      ctx.A = A(idA);
      ctx.B = B(idB);
      if (rec) {
        // initialize new fields to null so assignments work
        nullifyUnsetProperties(vars, rec);
      }
      try {
        val = func.call(ctx, rec || {}, ctx);
      } catch(e) {
        stop(e.name, "in expression [" + exp + "]:", e.message);
      }
      return val;
    };
  }

  function compileFeatureExpression(rawExp, lyr, arcs, opts_) {
    var opts = utils.extend({}, opts_),
        exp = cleanExpression(rawExp || ''),
        mutable = !opts.no_assign, // block assignment expressions
        vars = getAssignedVars(exp),
        func, records;

    if (mutable && vars.length > 0 && !lyr.data) {
      initDataTable(lyr);
    }

    if (!mutable) {
      // protect global object from assigned values
      opts.context = opts.context || {};
      nullifyUnsetProperties(vars, opts.context);
    }

    records = lyr.data ? lyr.data.getRecords() : [];
    func = getExpressionFunction(exp, lyr, arcs, opts);

    // @destRec (optional) substitute for records[recId] (used by -calc)
    return function(recId, destRec) {
      var record;
      if (destRec) {
        record = destRec;
      } else {
        record = records[recId] || (records[recId] = {});
      }

      // initialize new fields to null so assignments work
      if (mutable) {
        nullifyUnsetProperties(vars, record);
      }
      return func(record, recId);
    };
  }

  // Return array of variables on the left side of assignment operations
  // @hasDot (bool) Return property assignments via dot notation
  function getAssignedVars(exp, hasDot) {
    var rxp = /[a-z_][.a-z0-9_]*(?= *=[^>=])/ig; // ignore arrow functions and comparisons
    var matches = exp.match(rxp) || [];
    var f = function(s) {
      var i = s.indexOf('.');
      return hasDot ? i > -1 : i == -1;
    };
    return utils.uniq(matches.filter(f));
  }

  // Return array of objects with properties assigned via dot notation
  // e.g.  'd.value = 45' ->  ['d']
  function getAssignmentObjects(exp) {
    var matches = getAssignedVars(exp, true),
        names = [];
    matches.forEach(function(s) {
      var match = /^([^.]+)\.[^.]+$/.exec(s);
      var name = match ? match[1] : null;
      if (name && name != 'this') {
        names.push(name);
      }
    });
    return utils.uniq(names);
  }

  function compileExpressionToFunction(exp, opts) {
    // $$ added to avoid duplication with data field variables (an error condition)
    var functionBody = "with($$env){with($$record){ " + (opts.returns ? 'return ' : '') +
          exp + "}}";
    var func;
    try {
      func = new Function("$$record,$$env",  functionBody);
    } catch(e) {
      // if (opts.quiet) throw e;
      stop(e.name, "in expression [" + exp + "]");
    }
    return func;
  }

  function getExpressionFunction(exp, lyr, arcs, opts) {
    var getFeatureById = initFeatureProxy(lyr, arcs);
    var ctx = getExpressionContext(lyr, opts.context, opts);
    var func = compileExpressionToFunction(exp, opts);
    return function(rec, i) {
      var val;
      // Assigning feature object to '$' -- this should maybe be removed, it is
      // also exposed as "this".
      ctx.$ = getFeatureById(i);
      ctx._ = ctx; // provide access to functions when masked by variable names
      ctx.d = rec || null; // expose data properties a la d3 (also exposed as this.properties)
      try {
        val = func.call(ctx.$, rec, ctx);
      } catch(e) {
        // if (opts.quiet) throw e;
        stop(e.name, "in expression [" + exp + "]:", e.message);
      }
      return val;
    };
  }

  function nullifyUnsetProperties(vars, obj) {
    for (var i=0; i<vars.length; i++) {
      if (vars[i] in obj === false) {
        obj[vars[i]] = null;
      }
    }
  }

  function getExpressionContext(lyr, mixins, opts) {
    var env = getBaseContext();
    var ctx = {};
    var fields = lyr.data ? lyr.data.getFields() : [];
    opts = opts || {};
    utils.extend(env, expressionUtils); // mix in round(), sprintf(), etc.
    if (lyr.data) {
      // default to null values when a data field is missing
      nullifyUnsetProperties(fields, env);
    }
    if (mixins) {
      Object.keys(mixins).forEach(function(key) {
        // Catch name collisions between data fields and user-defined functions
        var d = Object.getOwnPropertyDescriptor(mixins, key);
        if (key in env) {
        }
        if (d.get) {
          // copy accessor function from mixins to context
          Object.defineProperty(ctx, key, {get: d.get}); // copy getter function to context
        } else {
          // copy regular property from mixins to context, but make it non-writable
          Object.defineProperty(ctx, key, {value: mixins[key]});
        }
      });
    }
    // make context properties non-writable, so they can't be replaced by an expression
    return Object.keys(env).reduce(function(memo, key) {
      if (key in memo) {
        // property has already been set (probably by a mixin, above): skip
        // "no_warn" option used in calc= expressions
        if (!opts.no_warn) {
          if (typeof memo[key] == 'function' && fields.indexOf(key) > -1) {
            message('Warning: ' + key + '() function is hiding a data field with the same name');
          } else {
            message('Warning: "' + key + '" has multiple definitions');
          }
        }
      } else {
        Object.defineProperty(memo, key, {value: env[key]}); // writable: false is default
      }
      return memo;
    }, ctx);
  }

  function getBaseContext() {
    // Mask global properties (is this effective/worth doing?)
    var obj = {globalThis: void 0}; // some globals are not iterable
    (function() {
      for (var key in this) {
        obj[key] = void 0;
      }
    }());
    obj.console = console;
    return obj;
  }

  var Expressions = /*#__PURE__*/Object.freeze({
    __proto__: null,
    compileValueExpression: compileValueExpression,
    cleanExpression: cleanExpression,
    compileFeaturePairFilterExpression: compileFeaturePairFilterExpression,
    compileFeaturePairExpression: compileFeaturePairExpression,
    compileFeatureExpression: compileFeatureExpression,
    getAssignedVars: getAssignedVars,
    getAssignmentObjects: getAssignmentObjects,
    compileExpressionToFunction: compileExpressionToFunction,
    getBaseContext: getBaseContext
  });

  // Read and parse a DSV file
  // This version performs field filtering before fields are extracted (faster)
  // (tested with a 40GB CSV)
  //
  // TODO: confirm compatibility with all supported encodings
  function readDelimRecords(reader, delim, optsArg) {
    var reader2 = new Reader2(reader),
        opts = optsArg || {},
        headerStr = readLinesAsString(reader2, getDelimHeaderLines(opts), opts.encoding),
        header = parseDelimHeaderSection(headerStr, delim, opts),
        convertRowArr = getRowConverter(header.import_fields),
        batchSize = opts.batch_size || 1000,
        records = [],
        str, batch;
    if (header.import_fields.length === 0) return []; // e.g. empty file
    // read in batches (faster than line-by-line)
    while ((str = readLinesAsString(reader2, batchSize, opts.encoding))) {
      batch = parseDelimText(str, delim, convertRowArr, header.column_filter || false, header.row_filter || false);
      records.push.apply(records, batch);
      if (opts.csv_lines && records.length >= opts.csv_lines) {
        return records.slice(0, opts.csv_lines);
      }
    }
    return records;
  }

  // Fallback for readDelimRecords(), for encodings that do not use ascii values
  // for delimiter characters and newlines. Input size is limited by the maximum
  // string size.
  function readDelimRecordsFromString(str, delim, opts) {
    var header = parseDelimHeaderSection(str, delim, opts);
    if (header.import_fields.length === 0 || !header.remainder) return [];
    var convert = getRowConverter(header.import_fields);
    var records = parseDelimText(header.remainder, delim, convert, header.column_filter, header.row_filter);
    if (opts.csv_lines > 0) {
      // TODO: don't parse unneeded rows
      records = records.slice(0, opts.csv_lines);
    }
    return records;
  }

  // Get index in string of the nth line
  // line numbers are 1-based (first line is 1)
  function indexOfLine(str, nth) {
    var rxp = /\r\n|[\r\n]|.$/g; // dot prevents matching end of string twice
    var i = 1;
    if (nth === 1) return 0;
    if (nth > 1 === false) return -1;
    while (rxp.exec(str)) {
      i++;
      if (i < nth === false) return rxp.lastIndex;
    }
    return -1;
  }

  function getDelimHeaderLines(opts) {
    var skip = opts.csv_skip_lines || 0;
    if (!opts.csv_field_names) skip++;
    return skip;
  }

  // Adapted from https://github.com/d3/d3-dsv
  function getRowConverter(fields) {
    return new Function('arr', 'return {' + fields.map(function(name, i) {
      return JSON.stringify(name) + ': arr[' + i + '] || ""';
    }).join(',') + '}');
  }

  function parseDelimHeaderSection(str, delim, opts) {
    var nodata = {headers: [], import_fields: []},
        retn = {},
        i;
    str = str || '';
    if (opts.csv_skip_lines > 0) {
      i = indexOfLine(str, opts.csv_skip_lines + 1);
      if (i === -1) return nodata;
      str = str.substr(i);
    }
    if (opts.csv_field_names) {
      retn.headers = opts.csv_field_names;
    } else {
      i = indexOfLine(str, 2);
      if (i === -1) return nodata;
      retn.headers = parseDelimText(str.slice(0, i), delim)[0];
      str = str.substr(i);
    }
    if (opts.csv_dedup_fields) {
      retn.headers = utils.uniqifyNames(retn.headers);
    }
    if (opts.csv_filter) {
      retn.row_filter = getDelimRecordFilterFunction(opts.csv_filter);
    }
    if (opts.csv_fields) {
      retn.column_filter = getDelimFieldFilter(retn.headers, opts.csv_fields);
      retn.import_fields = retn.headers.filter(function(name, i) {return retn.column_filter(i);});
    } else {
      retn.import_fields = retn.headers;
    }
    retn.remainder = str;
    return retn;
  }

  // Returns a function for filtering records
  // TODO: look into using more code from standard expressions.
  function getDelimRecordFilterFunction(expression) {
    var rowFilter = compileExpressionToFunction(expression, {returns: true});
    var ctx = getBaseContext();
    return function(rec) {
      var val;
      try {
        val = rowFilter.call(null, rec, ctx);
      } catch(e) {
        stop(e.name, "in expression [" + expression + "]:", e.message);
      }
      if (val !== true && val !== false) {
        stop("Filter expression must return true or false");
      }
      return val;
    };
  }

  // Returns a function for filtering fields by column index
  // The function returns true for retained fields and false for excluded fields
  function getDelimFieldFilter(header, fieldsToKeep) {
    var index = utils.arrayToIndex(fieldsToKeep);
    var map = header.map(function(name) {
      return name in index;
    });
    var missing = utils.difference(fieldsToKeep, header);
    if (missing.length > 0) {
      var foundStr = [''].concat(header).join('\n  ');
      var missingStr = [''].concat(missing).join('\n  ');
      stop('csv-fields option has', missing.length == 1 ? 'a name' : missing.length + ' names',  'not found in the file\nFields:', foundStr, '\nMissing:', missingStr);
    }
    return function(colIdx) {
      return map[colIdx];
    };
  }

  // May be useful in the future to implement reading a range of CSV records
  function skipDelimLines(reader, lines) {
    // TODO: divide lines into batches, to prevent exceeding maximum buffer size
    var buf = reader.readSync();
    var retn = readLinesFromBuffer(buf, lines);
    if (retn.bytesRead == buf.length && retn.bytesRead < reader.remaining()) {
      reader.expandBuffer(); // buffer oflo, grow the buffer and try again
      return skipDelimLines(reader, lines);
    }
    reader.advance(retn.bytesRead);
  }

  function readLinesAsString(reader, lines, encoding) {
    var buf = reader.readSync();
    var retn = readLinesFromBuffer(buf, lines);
    var str;
    if (retn.bytesRead == buf.length && retn.bytesRead < reader.remaining()) {
      // buffer overflow -- enlarge buffer and read lines again
      reader.expandBuffer();
      return readLinesAsString(reader, lines, encoding);
    }
    // str = retn.bytesRead > 0 ? retn.buffer.toString('ascii', 0, retn.bytesRead) : '';
    str = retn.bytesRead > 0 ? decodeString(retn.buffer, encoding) : '';
    if (reader.position() === 0) {
     str = trimBOM(str);
    }
    reader.advance(retn.bytesRead);
    return str;
  }

  function readLinesFromBuffer(buf, linesToRead) {
    var CR = 13, LF = 10, DQUOTE = 34,
        inQuotedText = false,
        lineCount = 0,
        bufLen = buf.length,
        i, c;

    lineCount++;
    for (i=0; i < bufLen && lineCount <= linesToRead; i++) {
      c = buf[i];
      if (c == DQUOTE) {
        inQuotedText = !inQuotedText;
      } else if (c == CR || c == LF) {
        if (c == CR && i + 1 < bufLen && buf[i + 1] == LF) {
          // first half of CRLF pair: advance one byte
          i++;
        }
        lineCount++;
      }
    }
    return {
      bytesRead: i,
      buffer: buf.slice(0, i)
    };
  }

  // Convert a string of CSV data into an array of data records
  // convert: optional function for converting an array record to an object record (values indexed by field names)
  // colFilter: optional function for filtering columns by numerical column id (0-based); accepts an array record and an id
  // rowFilter: optional function for filtering rows; accepts a record in object format
  function parseDelimText(text, delim, convert, colFilter, rowFilter) {
    var CR = 13, LF = 10, DQUOTE = 34,
        DELIM = delim.charCodeAt(0),
        inQuotedText = false,
        capturing = false,
        srcCol = -1,
        records = [],
        fieldStart, i, c, len, record;

    if (!convert) convert = function(d) {return d;};

    function endLine() {
      var rec = convert ? convert(record) : record;
      if (!rowFilter || rowFilter(rec)) records.push(rec);
      srcCol = -1;
    }

    function startFieldAt(j) {
      fieldStart = j;
      srcCol++;
      if (srcCol === 0) record = [];
      if (!colFilter || colFilter(srcCol)) {
        capturing = true;
      }
    }

    function captureField(start, end) {
      var s;
      if (!capturing) return;
      capturing = false;
      if (start === end) {
        s = '';
      } else if (text.charCodeAt(start) == DQUOTE) {
        s = text.slice(start+1, end-1).replace(/""/g, '"');
      } else {
        s = text.slice(start, end);
      }
      record.push(s);
    }

    startFieldAt(0);
    for (i=0, len=text.length; i < len; i++) {
      c = text.charCodeAt(i);
      if (c == DQUOTE) {
        inQuotedText = !inQuotedText;
      } else if (inQuotedText) {
        //
      } else if (c == DELIM) {
        captureField(fieldStart, i);
        startFieldAt(i + 1);
      } else if (c == CR || c == LF) {
        captureField(fieldStart, i);
        endLine();
        if (c == CR && text.charCodeAt(i+1) == LF) {
          i++; // first half of CRLF pair; skip a char
        }
        if (i + 1 < len) startFieldAt(i+1);
      }
    }

    if (srcCol > -1) { // finish last line (if file ends without newline)
      if (capturing) captureField(fieldStart, i);
      endLine();
    }

    return records;
  }

  var DelimReader = /*#__PURE__*/Object.freeze({
    __proto__: null,
    readDelimRecords: readDelimRecords,
    readDelimRecordsFromString: readDelimRecordsFromString,
    indexOfLine: indexOfLine,
    getRowConverter: getRowConverter,
    parseDelimHeaderSection: parseDelimHeaderSection,
    getDelimFieldFilter: getDelimFieldFilter,
    parseDelimText: parseDelimText
  });

  // Convert a string containing delimited text data into a dataset object
  function importDelim(str, opts) {
    return importDelim2({content: str}, opts);
  }

  // Convert a string, buffer or file containing delimited text into a dataset obj.
  function importDelim2(data, opts) {

    // TODO: remove duplication with importJSON()
    var readFromFile = !data.content && data.content !== '',
        content = data.content,
        filter, reader, records, delimiter, table, encoding;
    opts = opts || {};

    // // read content of all but very large files into a buffer
    // if (readFromFile && cli.fileSize(data.filename) < 2e9) {
    //   content = cli.readFile(data.filename);
    //   readFromFile = false;
    // }

    if (readFromFile) {
      reader = new FileReader(data.filename);
    } else if (content instanceof ArrayBuffer || content instanceof Buffer) {
      // Web API may import as ArrayBuffer, to support larger files
      reader = new BufferReader(content);
      content = null;
    } else if (utils.isString(content)) {
      // import as string
    } else {
      error("Unexpected object type");
    }

    if (reader) {
      encoding = detectEncodingFromBOM(reader.readSync(0, Math.min(reader.size(), 3)));
      // Files in some encodings have to be converted to strings before parsing
      // Other encodings are similar enough to ascii that CSV can be parsed
      // byte-by-byte.
      if (encoding == 'utf16be' || encoding == 'utf16le') {
        content = trimBOM(reader.toString(encoding));
        reader = null;
      } else if (opts.encoding && !encodingIsAsciiCompat(opts.encoding)) {
        content = reader.toString(opts.encoding);
        reader = null;
      }
    }

    if (reader) {
      delimiter = guessDelimiter(readFirstChars(reader, 2000));
      records = readDelimRecords(reader, delimiter, opts);
    } else {
      delimiter = guessDelimiter(content);
      records = readDelimRecordsFromString(content, delimiter, opts);
    }
    if (records.length === 0) {
      message("Unable to read any data records");
    }
    adjustRecordTypes(records, opts);
    table = new DataTable(records);
    deleteFields(table, isInvalidFieldName);
    return {
      layers: [{data: table}],
      info: {input_delimiter: delimiter}
    };
  }

  var supportedDelimiters = ['|', '\t', ',', ';'];

  function isSupportedDelimiter(d) {
    return utils.contains(supportedDelimiters, d);
  }

  function guessDelimiter(content) {
    return utils.find(supportedDelimiters, function(delim) {
      var rxp = getDelimiterRxp(delim);
      return rxp.test(content);
    }) || ',';
  }

  // Get RegExp to test for a delimiter before first line break of a string
  // Assumes that the first line does not contain alternate delim chars (this will
  // be true if the first line has field headers composed of word characters).
  function getDelimiterRxp(delim) {
    var rxp = "^[^\\n\\r]+" + utils.regexEscape(delim);
    return new RegExp(rxp);
  }

  function getFieldTypeHints(opts) {
    var hints = {};
    opts = opts || {};
    if (opts.string_fields) {
      opts.string_fields.forEach(function(f) {
        hints[f] = 'string';
      });
    }
    if (opts.field_types) {
      opts.field_types.forEach(function(raw) {
        var parts, name, type;
        if (raw.indexOf(':') != -1) {
          parts = raw.split(':');
          name = parts[0];
          type = validateFieldType(parts[1]);
        } else if (raw[0] === '+') { // d3-style type hint: unary plus
          name = raw.substr(1);
          type = 'number';
        }
        if (type) {
          hints[name] = type;
        } else {
          message("Invalid type hint (expected :str or :num) [" + raw + "]");
        }
      });
    }
    return hints;
  }


  // Detect and convert data types of data from csv files.
  // TODO: decide how to handle records with inconstent properties. Mapshaper
  //    currently assumes tabular data
  function adjustRecordTypes(records, opts) {
    var typeIndex = getFieldTypeHints(opts),
        singleType = typeIndex['*'], // support for setting all fields to a single type
        fields = Object.keys(records[0] || []),
        detectedNumFields = [],
        replacements = {};
    fields.forEach(function(key) {
      var typeHint = typeIndex[key];
      var values = null;
      if (typeHint == 'number' || singleType == 'number') {
        values = convertDataField(key, records, utils.parseNumber);
      } else if (typeHint == 'string' || singleType == 'string') {
        // We should be able to assume that imported CSV fields are strings,
        //   so parsing + replacement is not required
        // values = internal.convertDataField(key, records, utils.parseString);
        values = null;
      } else {
        values = tryNumericField(key, records);
        if (values) detectedNumFields.push(key);
      }
      if (values) replacements[key] = values;
    });
    if (Object.keys(replacements).length > 0) {
      updateFieldsInRecords(fields, records, replacements);
    }
    if (detectedNumFields.length > 0) {
      message(utils.format("Auto-detected number field%s: %s",
          detectedNumFields.length == 1 ? '' : 's', detectedNumFields.join(', ')));
    }
  }

  // Copy original data properties and replacements to a new set of records
  // (Better performance in v8 than making in-place replacements)
  function updateFieldsInRecords(fields, records, replacements) {
    // Use object-literal syntax (faster than alternative)
    var convertBody = 'return {' + fields.map(function(name) {
        var key = JSON.stringify(name);
        return key + ': ' + (replacements[name] ? 'replacements[' + key + '][i]' : 'rec[' + key + ']');
      }).join(', ') + '}';
    var convert = new Function('rec', 'replacements', 'i', convertBody);
    records.forEach(function(rec, i) {
      records[i] = convert(rec, replacements, i);
    });
  }

  function tryNumericField(key, records) {
    var arr = [],
        count = 0,
        raw, str, num;
    for (var i=0, n=records.length; i<n; i++) {
      raw = records[i][key];
      num = utils.parseNumber(raw);
      if (num === null) {
        str = raw ? raw.trim() : '';
        if (str.length > 0 && str != 'NA' && str != 'NaN') { // ignore NA values ("NA" seen in R output)
          return null; // unparseable value -- fail
        }
      } else {
        count++;
      }
      arr.push(num);
    }
    return count > 0 ? arr : null;
  }

  function convertDataField(name, records, f) {
    var values = [];
    for (var i=0, n=records.length; i<n; i++) {
      values.push(f(records[i][name]));
    }
    return values;
  }

  // Accept a type hint from a header like "FIPS:str"
  // Return standard type name (number|string) or null if hint is not recognized
  function validateFieldType(hint) {
    var str = hint.toLowerCase(),
        type = null;
    if (str[0] == 'n') {
      type = 'number';
    } else if (str[0] == 's') {
      type = 'string';
    }
    return type;
  }

  var DelimImport = /*#__PURE__*/Object.freeze({
    __proto__: null,
    importDelim: importDelim,
    importDelim2: importDelim2,
    isSupportedDelimiter: isSupportedDelimiter,
    guessDelimiter: guessDelimiter,
    getFieldTypeHints: getFieldTypeHints,
    adjustRecordTypes: adjustRecordTypes
  });

  var GeoJSON = {};

  GeoJSON.ID_FIELD = "FID"; // default field name of imported *JSON feature ids

  GeoJSON.typeLookup = {
    LineString: 'polyline',
    MultiLineString: 'polyline',
    Polygon: 'polygon',
    MultiPolygon: 'polygon',
    Point: 'point',
    MultiPoint: 'point'
  };

  GeoJSON.translateGeoJSONType = function(type) {
    return GeoJSON.typeLookup[type] || null;
  };

  GeoJSON.pathIsRing = function(coords) {
    var first = coords[0],
        last = coords[coords.length - 1];
    // TODO: consider detecting collapsed rings
    return coords.length >= 4 && first[0] == last[0] && first[1] == last[1];
  };

  function GeoJSONParser(opts) {
    var idField = opts.id_field || GeoJSON.ID_FIELD,
        importer = new PathImporter(opts),
        dataset;

    this.parseObject = function(o) {
      var geom, rec;
      if (!o || !o.type) {
        // not standard GeoJSON -- importing as null record
        // (useful when parsing GeoJSON generated internally)
        geom = null;
      } else if (o.type == 'Feature') {
        geom = o.geometry;
        rec = o.properties || {};
        if ('id' in o) {
          rec[idField] = o.id;
        }
      } else {
        geom = o;
      }
      // TODO: improve so geometry_type option skips features instead of creating null geometries
      importer.startShape(rec);
      if (geom) GeoJSON.importGeometry(geom, importer, opts);
    };

    this.done = function() {
      return importer.done();
    };
  }

  function importGeoJSON(src, optsArg) {
    var opts = optsArg || {};
    var supportedGeometries = Object.keys(GeoJSON.pathImporters),
        srcObj = utils.isString(src) ? JSON.parse(src) : src,
        importer = new GeoJSONParser(opts),
        srcCollection, dataset;

    // Convert single feature or geometry into a collection with one member
    if (srcObj.type == 'Feature') {
      srcCollection = {
        type: 'FeatureCollection',
        features: [srcObj]
      };
    } else if (supportedGeometries.includes(srcObj.type)) {
      srcCollection = {
        type: 'GeometryCollection',
        geometries: [srcObj]
      };
    } else {
      srcCollection = srcObj;
    }
    (srcCollection.features || srcCollection.geometries || []).forEach(importer.parseObject);
    dataset = importer.done();
    importCRS(dataset, srcObj); // TODO: remove this
    return dataset;
  }

  GeoJSON.importGeometry = function(geom, importer, opts) {
    var type = geom.type;
    if (type in GeoJSON.pathImporters) {
      if (opts.geometry_type && opts.geometry_type != GeoJSON.translateGeoJSONType(type)) {
        // kludge to filter out all but one type of geometry
        return;
      }
      GeoJSON.pathImporters[type](geom.coordinates, importer);
    } else if (type == 'GeometryCollection') {
      geom.geometries.forEach(function(geom) {
        GeoJSON.importGeometry(geom, importer, opts);
      });
    } else {
      verbose("GeoJSON.importGeometry() Unsupported geometry type:", geom.type);
    }
  };

  // Functions for importing geometry coordinates using a PathImporter
  //
  GeoJSON.pathImporters = {
    LineString: function(coords, importer) {
      importer.importLine(coords);
    },
    MultiLineString: function(coords, importer) {
      for (var i=0; i<coords.length; i++) {
        GeoJSON.pathImporters.LineString(coords[i], importer);
      }
    },
    Polygon: function(coords, importer) {
      for (var i=0; i<coords.length; i++) {
        importer.importRing(coords[i], i > 0);
      }
    },
    MultiPolygon: function(coords, importer) {
      for (var i=0; i<coords.length; i++) {
        GeoJSON.pathImporters.Polygon(coords[i], importer);
      }
    },
    Point: function(coord, importer) {
      importer.importPoints([coord]);
    },
    MultiPoint: function(coords, importer) {
      importer.importPoints(coords);
    }
  };


  function importCRS(dataset, jsonObj) {
    if ('crs' in jsonObj) {
      dataset.info.input_geojson_crs = jsonObj.crs;
    }
  }

  var GeojsonImport = /*#__PURE__*/Object.freeze({
    __proto__: null,
    GeoJSONParser: GeoJSONParser,
    importGeoJSON: importGeoJSON,
    importCRS: importCRS
  });

  var TopoJSON = {};

  // Iterate over all arrays of arc is in a geometry object
  // @cb callback: function(ids)
  // callback returns undefined or an array of replacement ids
  //
  TopoJSON.forEachShapePart = function forEachShapePart(obj, cb) {
    var iterators = {
          GeometryCollection: function(o) {o.geometries.forEach(eachGeom);},
          LineString: function(o) {
            var retn = cb(o.arcs);
            if (retn) o.arcs = retn;
          },
          MultiLineString: function(o) {eachMultiPath(o.arcs);},
          Polygon: function(o) {eachMultiPath(o.arcs);},
          MultiPolygon: function(o) {o.arcs.forEach(eachMultiPath);}
        };

    eachGeom(obj);

    function eachGeom(o) {
      if (o.type in iterators) {
        iterators[o.type](o);
      }
    }

    function eachMultiPath(arr) {
      var retn;
      for (var i=0; i<arr.length; i++) {
        retn = cb(arr[i]);
        if (retn) arr[i] = retn;
      }
    }
  };

  TopoJSON.forEachArc = function forEachArc(obj, cb) {
    TopoJSON.forEachShapePart(obj, function(ids) {
      var retn;
      for (var i=0; i<ids.length; i++) {
        retn = cb(ids[i]);
        if (utils.isInteger(retn)) {
          ids[i] = retn;
        }
      }
    });
  };

  function importMetadata(dataset, obj) {
    if (obj.proj4) {
      dataset.info.crs = getCRS(obj.proj4);
    }
  }

  function exportMetadata(dataset) {
    var crs = getDatasetCRS(dataset);
    var proj4 = null;
    if (crs) {
      proj4 = crsToProj4(crs);
    }
    return {
      proj4: proj4
    };
  }

  // Convert a TopoJSON topology into mapshaper's internal format
  // Side-effect: data in topology is modified
  //
  function importTopoJSON(topology, opts) {
    var dataset, arcs, layers;

    if (utils.isString(topology)) {
      topology = JSON.parse(topology);
    }

    if (topology.arcs && topology.arcs.length > 0) {
      // TODO: apply transform to ArcCollection, not input arcs
      if (topology.transform) {
        TopoJSON.decodeArcs(topology.arcs, topology.transform);
      }

      if (opts && opts.precision) {
        TopoJSON.roundCoords(topology.arcs, opts.precision);
      }

      arcs = new ArcCollection(topology.arcs);
    }

    layers = Object.keys(topology.objects).reduce(function(memo, name) {
      var layers = TopoJSON.importObject(topology.objects[name], arcs, opts),
          lyr;
      for (var i=0, n=layers.length; i<n; i++) {
        lyr = layers[i];
        lyr.name = name; // TODO: consider type-suffixes if different-typed layers
        memo.push(lyr);
      }
      return memo;
    }, []);

    layers.forEach(function(lyr) {
      if (layerHasPaths(lyr)) {
        // Cleaning here may be unnecessary
        // (cleanPathsAfterImport() is called in mapshaper-import.js)
        cleanShapes(lyr.shapes, arcs, lyr.geometry_type);
      }
      if (lyr.geometry_type == 'point' && topology.transform) {
        TopoJSON.decodePoints(lyr.shapes, topology.transform);
      }
      if (lyr.data) {
        fixInconsistentFields(lyr.data.getRecords());
      }
    });

    dataset = {
      layers: layers,
      arcs: arcs,
      info: {}
    };
    importCRS(dataset, topology);
    if (topology.metadata) {
      importMetadata(dataset, topology.metadata);
    }
    return dataset;
  }

  TopoJSON.decodePoints = function(shapes, transform) {
    forEachPoint(shapes, function(p) {
      p[0] = p[0] * transform.scale[0] + transform.translate[0];
      p[1] = p[1] * transform.scale[1] + transform.translate[1];
    });
  };

  TopoJSON.decodeArcs = function(arcs, transform) {
    var mx = transform.scale[0],
        my = transform.scale[1],
        bx = transform.translate[0],
        by = transform.translate[1];

    arcs.forEach(function(arc) {
      var prevX = 0,
          prevY = 0,
          xy, x, y;
      for (var i=0, len=arc.length; i<len; i++) {
        xy = arc[i];
        x = xy[0] + prevX;
        y = xy[1] + prevY;
        xy[0] = x * mx + bx;
        xy[1] = y * my + by;
        prevX = x;
        prevY = y;
      }
    });
  };

  // TODO: consider removing dupes...
  TopoJSON.roundCoords = function(arcs, precision) {
    var round = getRoundingFunction(precision),
        p;
    arcs.forEach(function(arc) {
      for (var i=0, len=arc.length; i<len; i++) {
        p = arc[i];
        p[0] = round(p[0]);
        p[1] = round(p[1]);
      }
    });
  };

  TopoJSON.importObject = function(obj, arcs, opts) {
    var importer = new TopoJSON.GeometryImporter(arcs, opts);
    var geometries = obj.type == 'GeometryCollection' ? obj.geometries : [obj];
    geometries.forEach(importer.addGeometryObject, importer);
    return importer.done();
  };

  //
  //
  TopoJSON.GeometryImporter = function(arcs, opts) {
    var idField = opts && opts.id_field || GeoJSON.ID_FIELD,
        properties = [],
        shapes = [], // topological ids
        types = [],
        dataNulls = 0,
        shapeNulls = 0,
        collectionType = null,
        shapeId;

    this.addGeometryObject = function(geom) {
      var rec = geom.properties || null;
      shapeId = shapes.length;
      shapes[shapeId] = null;
      if ('id' in geom) {
        rec = rec || {};
        rec[idField] = geom.id;
      }
      properties[shapeId] = rec;
      if (!rec) dataNulls++;
      if (geom.type) {
        this.addShape(geom);
      }
      if (shapes[shapeId] === null) {
        shapeNulls++;
      }
    };

    this.addShape = function(geom) {
      var curr = shapes[shapeId];
      var type = GeoJSON.translateGeoJSONType(geom.type);
      var shape, importer;
      if (geom.type == "GeometryCollection") {
        geom.geometries.forEach(this.addShape, this);
      } else if (type) {
        this.setGeometryType(type);
        shape = TopoJSON.shapeImporters[geom.type](geom, arcs);
        // TODO: better shape validation
        if (!shape || !shape.length) {
          // do nothing
        } else if (!Array.isArray(shape[0])) {
          stop("Invalid TopoJSON", geom.type, "geometry");
        } else {
          shapes[shapeId] = curr ? curr.concat(shape) : shape;
        }
      } else if (geom.type) {
        stop("Invalid TopoJSON geometry type:", geom.type);
      }
    };

    this.setGeometryType = function(type) {
      var currType = shapeId < types.length ? types[shapeId] : null;
      if (!currType) {
        types[shapeId] = type;
        this.updateCollectionType(type);
      } else if (currType != type) {
        stop("Unable to import mixed-type TopoJSON geometries");
      }
    };

    this.updateCollectionType = function(type) {
      if (!collectionType) {
        collectionType = type;
      } else if (type && collectionType != type) {
        collectionType = 'mixed';
      }
    };

    this.done = function() {
      var layers;
      if (collectionType == 'mixed') {
        layers = divideFeaturesByType(shapes, properties, types);
      } else {
        layers = [{
          geometry_type: collectionType,
          shapes : collectionType ? shapes : null,
          data: dataNulls < shapes.length ? new DataTable(properties) : null
        }];
      }
      return layers;
    };
  };

  // TODO: check that interior ring bboxes are contained in external ring
  // TODO: check that rings are closed
  TopoJSON.importPolygonArcs = function(rings, arcs) {
    var ring = rings[0],
        imported = null, area;
    if (!arcs) stop("Invalid TopoJSON file: missing arc data.");
    area = ring ? geom.getPlanarPathArea(ring, arcs) : null;
    if (!area) {
      return null;
    }
    if (area < 0) reversePath(ring);
    imported = [ring];
    for (var i=1; i<rings.length; i++) {
      ring = rings[i];
      area = geom.getPlanarPathArea(ring, arcs);
      if (!area) continue;
      if (area > 0) reversePath(ring);
      imported.push(ring);
    }
    return imported;
  };

  TopoJSON.shapeImporters = {
    Point: function(geom) {
      return [geom.coordinates];
    },
    MultiPoint: function(geom) {
      return geom.coordinates;
    },
    LineString: function(geom) {
      return [geom.arcs];
    },
    MultiLineString: function(geom) {
      return geom.arcs;
    },
    Polygon: function(geom, arcColl) {
      return TopoJSON.importPolygonArcs(geom.arcs, arcColl);
    },
    MultiPolygon: function(geom, arcColl) {
      return geom.arcs.reduce(function(memo, arr) {
        var rings = TopoJSON.importPolygonArcs(arr, arcColl);
        if (rings) {
          memo = memo ? memo.concat(rings) : rings;
        }
        return memo;
      }, null);
    }
  };

  var TopojsonImport = /*#__PURE__*/Object.freeze({
    __proto__: null,
    importTopoJSON: importTopoJSON
  });

  // Read GeoJSON Features or geometry objects from a file
  // @reader: a FileReader
  function GeoJSONReader(reader) {

    // Read objects synchronously, with callback
    this.readObjects = function(onObject) {
      // Search first x bytes of file for features|geometries key
      // 300 bytes not enough... GeoJSON files can have additional non-standard properties, e.g. 'metadata'
      // var bytesToSearch = 300;
      var bytesToSearch = 5000;
      var start = reader.findString('"features"', bytesToSearch) ||
          reader.findString('"geometries"', bytesToSearch);
      // Assume single Feature or geometry if collection not found
      var offset = start ? start.offset : 0;
      readObjects(offset, onObject);
    };

    this.readObject = readObject;

    function readObjects(offset, cb) {
      var obj = readObject(offset);
      var json;
      while (obj) {
        try {
          json = JSON.parse(obj.text);
        } catch(e) {
          stop('JSON parsing error --', adjustPositionMessage(e.message, offset + obj.start));
        }
        cb(json);
        offset = obj.end;
        obj = readObject(obj.end);
      }
    }

    // msg: JSON.parse() error message, e.g. "Unexpected token . in JSON at position 579"
    // offset: start position of the parsed text in the JSON file
    function adjustPositionMessage(msg, offset) {
      var rxp = /position (\d+)/; // assumes no thousands separator in error message
      var match = rxp.exec(msg);
      if (match) {
        msg = msg.replace(rxp, 'position ' + (offset + parseInt(match[1])));
      }
      return msg;
    }

    // Search for a JSON object starting at position @offs
    // Returns {text: "<object>", offset: <offset>} or null
    //   <offset> is the file position directly after the object's closing brace
    // Skips characters in front of first left curly brace
    function readObject(offs) {
      var LBRACE = 123,
          RBRACE = 125,
          RBRACK = 93,
          BSLASH = 92,
          DQUOTE = 34,
          level = 0,
          inString = false,
          escapeNext = false,
          buf = reader.readSync(offs),
          retn = null,
          startPos, i, n, c;
      for (i=0, n=buf.length; i<n; i++) {
        c = buf[i];
        if (inString) {
          if (escapeNext) {
            escapeNext = false;
          } else if (c == DQUOTE) {
            inString = false;
          } else if (c == BSLASH) {
            escapeNext = true;
          }
        } else if (c == DQUOTE) {
          inString = true;
        } else if (c == LBRACE) {
          if (level === 0) {
            startPos = i;
          }
          level++;
        } else if (c == RBRACE) {
          level--;
          if (level === 0) {
            retn = {
              text: bufferToString(buf, 'utf8', startPos, i + 1),
              start: startPos,
              end: offs + i + 1
            };
            break;
          } else if (level == -1) {
            break; // error -- "}" encountered before "{"
          }
        } else if (c == RBRACK && level === 0) {
          break; // end of collection
        }
        if (i == n-1) {
          buf = reader.expandBuffer().readSync(offs);
          n = buf.length;
        }
      }
      return retn;
    }
  }

  function getFormattedStringify(numArrayKeys) {
    var keyIndex = utils.arrayToIndex(numArrayKeys);
    var sentinel = '\u1000\u2FD5\u0310';
    var stripRxp = new RegExp('"' + sentinel + '|' + sentinel + '"', 'g');
    var indentChars = '  ';

    function replace(key, val) {
      // We want to format numerical arrays like [1, 2, 3] instead of
      // the way JSON.stringify() behaves when applying indentation.
      // This kludge converts arrays to strings with sentinel strings inside the
      // surrounding quotes. At the end, the sentinel strings and quotes
      // are replaced by array brackets.
      if (key in keyIndex && utils.isArray(val)) {
        var str = JSON.stringify(val);
        // make sure the array does not contain any strings
        if (str.indexOf('"' == -1)) {
          return sentinel + str.replace(/,/g, ', ') + sentinel;
        }
      }
      return val;
    }

    return function(obj) {
      var json = JSON.stringify(obj, replace, indentChars);
      return json.replace(stripRxp, '');
    };
  }

  var Stringify = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getFormattedStringify: getFormattedStringify
  });

  function importJSONTable(arr) {
    fixInconsistentFields(arr);
    return {
      layers: [{
        data: new DataTable(arr)
      }],
      info: {}
    };
  }

  function exportJSON(dataset, opts) {
    return dataset.layers.reduce(function(arr, lyr) {
      if (lyr.data){
        arr.push({
          content: exportJSONTable(lyr, opts),
          filename: (lyr.name || 'output') + '.json'
        });
      }
      return arr;
    }, []);
  }

  function exportJSONTable(lyr, opts) {
    var stringify = opts && opts.prettify ? getFormattedStringify([]) : JSON.stringify;
    return stringify(lyr.data.getRecords());
  }

  var JsonTable = /*#__PURE__*/Object.freeze({
    __proto__: null,
    importJSONTable: importJSONTable,
    exportJSON: exportJSON,
    exportJSONTable: exportJSONTable
  });

  // Identify JSON type from the initial subset of a JSON string
  function identifyJSONString(str, opts) {
    var maxChars = 1000;
    var fmt = null;
    if (str.length > maxChars) str = str.substr(0, maxChars);
    str = str.replace(/\s/g, '');
    if (opts && opts.json_path) {
      fmt = 'json'; // TODO: make json_path compatible with other types
    } else if (/^\[[{\]]/.test(str)) {
      // empty array or array of objects
      fmt = 'json';
    } else if (/"arcs":\[|"objects":\{|"transform":\{/.test(str)) {
      fmt =  'topojson';
    } else if (/^\{"/.test(str)) {
      fmt = 'geojson';
    }
    return fmt;
  }

  function identifyJSONObject(o) {
    var fmt = null;
    if (!o) {
      //
    } else if (o.type == 'Topology') {
      fmt = 'topojson';
    } else if (o.type) {
      fmt = 'geojson';
    } else if (utils.isArray(o)) {
      fmt = 'json';
    }
    return fmt;
  }

  function importGeoJSONFile(fileReader, opts) {
    var importer = new GeoJSONParser(opts);
    new GeoJSONReader(fileReader).readObjects(importer.parseObject);
    return importer.done();
  }

  // Parse GeoJSON directly from a binary data source (supports parsing larger files
  // than the maximum JS string length) or return a string with the entire
  // contents of the file.
  // reader: a binary file reader
  //
  function readJSONFile(reader, opts) {
    var str = readFirstChars(reader, 1000);
    var type = identifyJSONString(str, opts);
    var dataset, retn;
    if (type == 'geojson') { // consider only for larger files
      dataset = importGeoJSONFile(reader, opts);
      retn = {
        dataset: dataset,
        format: 'geojson'
      };
    } else {
      retn = {
        // content: cli.readFile(path, 'utf8')}
        content: reader.toString('utf8')
      };
    }
    reader.close();
    return retn;
  }

  function importJSON(data, opts) {
    var content = data.content,
        filename = data.filename,
        retn = {filename: filename},
        reader, fmt;

    if (!content) {
      reader = new FileReader(filename);
    } else if (content instanceof ArrayBuffer) {
      // Web API imports JSON as ArrayBuffer, to support larger files
      if (content.byteLength < 1e7) {
        // content = utils.createBuffer(content).toString();
        content = bufferToString(utils.createBuffer(content));
      } else {
        reader = new BufferReader(content);
        content = null;
      }
    }

    if (reader) {
      data = readJSONFile(reader, opts);
      if (data.dataset) {
        retn.dataset = data.dataset;
        retn.format = data.format;
      } else {
        content = data.content;
      }
    }

    if (content) {
      if (utils.isString(content)) {
        try {
          content = JSON.parse(content); // ~3sec for 100MB string
        } catch(e) {
          // stop("Unable to parse JSON");
          stop('JSON parsing error --', e.message);
        }
      }
      if (opts.json_path) {
        content = selectFromObject(content, opts.json_path);
        fmt = identifyJSONObject(content, opts);
        if (!fmt) {
          stop('Unexpected object type at JSON path:', opts.json_path);
        }
      } else {
        fmt = identifyJSONObject(content, opts);
      }
      if (fmt == 'topojson') {
        retn.dataset = importTopoJSON(content, opts);
      } else if (fmt == 'geojson') {
        retn.dataset = importGeoJSON(content, opts);
      } else if (fmt == 'json') {
        retn.dataset = importJSONTable(content, opts);
      } else {
        stop("Unknown JSON format");
      }
      retn.format = fmt;
    }

    return retn;
  }

  // path: path from top-level to the target object
  function selectFromObject(o, path) {
    var arrayRxp = /(.*)\[([0-9]+)\]$/; // array bracket notation w/ index
    var separator = path.indexOf('/') > 0 ? '/' : '.';
    var parts = path.split(separator);
    var subpath, array, match;
    while (parts.length > 0) {
      subpath = parts.shift();
      match = arrayRxp.exec(subpath);
      if (match) {
        array = o[match[1]];
        o = array && array[+match[2]] || null;
      } else {
        o = o[subpath];
      }
      if (!o) return null;
    }
    return o;
  }

  var JsonImport = /*#__PURE__*/Object.freeze({
    __proto__: null,
    identifyJSONString: identifyJSONString,
    identifyJSONObject: identifyJSONObject,
    importGeoJSONFile: importGeoJSONFile,
    importJSON: importJSON
  });

  // Used for building topology
  //
  function ArcIndex(pointCount) {
    var hashTableSize = Math.floor(pointCount * 0.25 + 1),
        hash = getXYHash(hashTableSize),
        hashTable = new Int32Array(hashTableSize),
        chainIds = [],
        arcs = [],
        arcPoints = 0;

    utils.initializeArray(hashTable, -1);

    this.addArc = function(xx, yy) {
      var end = xx.length - 1,
          key = hash(xx[end], yy[end]),
          chainId = hashTable[key],
          arcId = arcs.length;
      hashTable[key] = arcId;
      arcs.push([xx, yy]);
      arcPoints += xx.length;
      chainIds.push(chainId);
      return arcId;
    };

    // Look for a previously generated arc with the same sequence of coords, but in the
    // opposite direction. (This program uses the convention of CW for space-enclosing rings, CCW for holes,
    // so coincident boundaries should contain the same points in reverse sequence).
    //
    this.findDuplicateArc = function(xx, yy, start, end, getNext, getPrev) {
      // First, look for a reverse match
      var arcId = findArcNeighbor(xx, yy, start, end, getNext);
      if (arcId === null) {
        // Look for forward match
        // (Abnormal topology, but we're accepting it because in-the-wild
        // Shapefiles sometimes have duplicate paths)
        arcId = findArcNeighbor(xx, yy, end, start, getPrev);
      } else {
        arcId = ~arcId;
      }
      return arcId;
    };

    function findArcNeighbor(xx, yy, start, end, getNext) {
      var next = getNext(start),
          key = hash(xx[start], yy[start]),
          arcId = hashTable[key],
          arcX, arcY, len;

      while (arcId != -1) {
        // check endpoints and one segment...
        // it would be more rigorous but slower to identify a match
        // by comparing all segments in the coordinate sequence
        arcX = arcs[arcId][0];
        arcY = arcs[arcId][1];
        len = arcX.length;
        if (arcX[0] === xx[end] && arcX[len-1] === xx[start] && arcX[len-2] === xx[next] &&
            arcY[0] === yy[end] && arcY[len-1] === yy[start] && arcY[len-2] === yy[next]) {
          return arcId;
        }
        arcId = chainIds[arcId];
      }
      return null;
    }

    this.getVertexData = function() {
      var xx = new Float64Array(arcPoints),
          yy = new Float64Array(arcPoints),
          nn = new Uint32Array(arcs.length),
          copied = 0,
          arc, len;
      for (var i=0, n=arcs.length; i<n; i++) {
        arc = arcs[i];
        len = arc[0].length;
        utils.copyElements(arc[0], 0, xx, copied, len);
        utils.copyElements(arc[1], 0, yy, copied, len);
        nn[i] = len;
        copied += len;
      }
      return {
        xx: xx,
        yy: yy,
        nn: nn
      };
    };
  }

  // Converts all polygon and polyline paths in a dataset to a topological format
  // (in-place)
  function buildTopology(dataset) {
    if (!dataset.arcs) return;
    var raw = dataset.arcs.getVertexData(),
        cooked = buildPathTopology(raw.nn, raw.xx, raw.yy);
    dataset.arcs.updateVertexData(cooked.nn, cooked.xx, cooked.yy);
    dataset.layers.forEach(function(lyr) {
      if (lyr.geometry_type == 'polyline' || lyr.geometry_type == 'polygon') {
        lyr.shapes = replaceArcIds(lyr.shapes, cooked.paths);
      }
    });
  }

  // buildPathTopology() converts non-topological paths into
  // a topological format
  //
  // Arguments:
  //    xx: [Array|Float64Array],   // x coords of each point in the dataset
  //    yy: [Array|Float64Array],   // y coords ...
  //    nn: [Array]  // length of each path
  //
  // (x- and y-coords of all paths are concatenated into two arrays)
  //
  // Returns:
  // {
  //    xx, yy (array)   // coordinate data
  //    nn: (array)      // points in each arc
  //    paths: (array)   // Paths are arrays of one or more arc id.
  // }
  //
  // Negative arc ids in the paths array indicate a reversal of arc -(id + 1)
  //
  function buildPathTopology(nn, xx, yy) {
    var pointCount = xx.length,
        chainIds = initPointChains(xx, yy),
        pathIds = initPathIds(pointCount, nn),
        index = new ArcIndex(pointCount),
        slice = usingTypedArrays() ? xx.subarray : Array.prototype.slice,
        paths, retn;
    paths = convertPaths(nn);
    retn = index.getVertexData();
    retn.paths = paths;
    return retn;

    function usingTypedArrays() {
      return !!(xx.subarray && yy.subarray);
    }

    function convertPaths(nn) {
      var paths = [],
          pointId = 0,
          pathLen;
      for (var i=0, len=nn.length; i<len; i++) {
        pathLen = nn[i];
        paths.push(pathLen < 2 ? null : convertPath(pointId, pointId + pathLen - 1));
        pointId += pathLen;
      }
      return paths;
    }

    function nextPoint(id) {
      var partId = pathIds[id],
          nextId = id + 1;
      if (nextId < pointCount && pathIds[nextId] === partId) {
        return id + 1;
      }
      var len = nn[partId];
      return sameXY(id, id - len + 1) ? id - len + 2 : -1;
    }

    function prevPoint(id) {
      var partId = pathIds[id],
          prevId = id - 1;
      if (prevId >= 0 && pathIds[prevId] === partId) {
        return id - 1;
      }
      var len = nn[partId];
      return sameXY(id, id + len - 1) ? id + len - 2 : -1;
    }

    function sameXY(a, b) {
      return xx[a] == xx[b] && yy[a] == yy[b];
    }

    // Convert a non-topological path to one or more topological arcs
    // @start, @end are ids of first and last points in the path
    // TODO: don't allow id ~id pairs
    //
    function convertPath(start, end) {
      var arcIds = [],
          firstNodeId = -1,
          arcStartId;

      // Visit each point in the path, up to but not including the last point
      for (var i = start; i < end; i++) {
        if (pointIsArcEndpoint(i)) {
          if (firstNodeId > -1) {
            arcIds.push(addEdge(arcStartId, i));
          } else {
            firstNodeId = i;
          }
          arcStartId = i;
        }
      }

      // Identify the final arc in the path
      if (firstNodeId == -1) {
        // Not in an arc, i.e. no nodes have been found...
        // Assuming that path is either an island or is congruent with one or more rings
        arcIds.push(addRing(start, end));
      }
      else if (firstNodeId == start) {
        // path endpoint is a node;
        if (!pointIsArcEndpoint(end)) {
          error("Topology error"); // TODO: better error handling
        }
        arcIds.push(addEdge(arcStartId, i));
      } else {
        // final arc wraps around
        arcIds.push(addSplitEdge(arcStartId, end, start + 1, firstNodeId));
      }
      return arcIds;
    }

    // Test if a point @id is an endpoint of a topological path
    function pointIsArcEndpoint(id) {
      var id2 = chainIds[id],
          prev = prevPoint(id),
          next = nextPoint(id),
          prev2, next2;
      if (prev == -1 || next == -1) {
        // @id is an endpoint if it is the start or end of an open path
        return true;
      }
      while (id != id2) {
        prev2 = prevPoint(id2);
        next2 = nextPoint(id2);
        if (prev2 == -1 || next2 == -1 || brokenEdge(prev, next, prev2, next2)) {
          // there is a discontinuity at @id -- point is arc endpoint
          return true;
        }
        id2 = chainIds[id2];
      }
      return false;
    }

    // a and b are two vertices with the same x, y coordinates
    // test if the segments on either side of them are also identical
    function brokenEdge(aprev, anext, bprev, bnext) {
      var apx = xx[aprev],
          anx = xx[anext],
          bpx = xx[bprev],
          bnx = xx[bnext],
          apy = yy[aprev],
          any = yy[anext],
          bpy = yy[bprev],
          bny = yy[bnext];
      if (apx == bnx && anx == bpx && apy == bny && any == bpy ||
          apx == bpx && anx == bnx && apy == bpy && any == bny) {
        return false;
      }
      return true;
    }

    function mergeArcParts(src, startId, endId, startId2, endId2) {
      var len = endId - startId + endId2 - startId2 + 2,
          ArrayClass = usingTypedArrays() ? Float64Array : Array,
          dest = new ArrayClass(len),
          j = 0, i;
      for (i=startId; i <= endId; i++) {
        dest[j++] = src[i];
      }
      for (i=startId2; i <= endId2; i++) {
        dest[j++] = src[i];
      }
      return dest;
    }

    function addSplitEdge(start1, end1, start2, end2) {
      var arcId = index.findDuplicateArc(xx, yy, start1, end2, nextPoint, prevPoint);
      if (arcId === null) {
        arcId = index.addArc(mergeArcParts(xx, start1, end1, start2, end2),
            mergeArcParts(yy, start1, end1, start2, end2));
      }
      return arcId;
    }

    function addEdge(start, end) {
      // search for a matching edge that has already been generated
      var arcId = index.findDuplicateArc(xx, yy, start, end, nextPoint, prevPoint);
      if (arcId === null) {
        arcId = index.addArc(slice.call(xx, start, end + 1),
            slice.call(yy, start, end + 1));
      }
      return arcId;
    }

    function addRing(startId, endId) {
      var chainId = chainIds[startId],
          pathId = pathIds[startId],
          arcId;

      while (chainId != startId) {
        if (pathIds[chainId] < pathId) {
          break;
        }
        chainId = chainIds[chainId];
      }

      if (chainId == startId) {
        return addEdge(startId, endId);
      }

      for (var i=startId; i<endId; i++) {
        arcId = index.findDuplicateArc(xx, yy, i, i, nextPoint, prevPoint);
        if (arcId !== null) return arcId;
      }
      error("Unmatched ring; id:", pathId, "len:", nn[pathId]);
    }
  }


  // Create a lookup table for path ids; path ids are indexed by point id
  //
  function initPathIds(size, pathSizes) {
    var pathIds = new Int32Array(size),
        j = 0;
    for (var pathId=0, pathCount=pathSizes.length; pathId < pathCount; pathId++) {
      for (var i=0, n=pathSizes[pathId]; i<n; i++, j++) {
        pathIds[j] = pathId;
      }
    }
    return pathIds;
  }

  function replaceArcIds(src, replacements) {
    return src.map(function(shape) {
      return replaceArcsInShape(shape, replacements);
    });

    function replaceArcsInShape(shape, replacements) {
      if (!shape) return null;
      return shape.map(function(path) {
        return replaceArcsInPath(path, replacements);
      });
    }

    function replaceArcsInPath(path, replacements) {
      return path.reduce(function(memo, id) {
        var abs = absArcId(id);
        var topoPath = replacements[abs];
        if (topoPath) {
          if (id < 0) {
            topoPath = topoPath.concat(); // TODO: need to copy?
            reversePath(topoPath);
          }
          for (var i=0, n=topoPath.length; i<n; i++) {
            memo.push(topoPath[i]);
          }
        }
        return memo;
      }, []);
    }
  }

  var Topology = /*#__PURE__*/Object.freeze({
    __proto__: null,
    buildTopology: buildTopology,
    buildPathTopology: buildPathTopology
  });

  // Parse content of one or more input files and return a dataset
  // @obj: file data, indexed by file type
  // File data objects have two properties:
  //    content: Buffer, ArrayBuffer, String or Object
  //    filename: String or null
  //
  function importContent(obj, opts) {
    var dataset, content, fileFmt, data;
    opts = opts || {};
    if (obj.json) {
      data = importJSON(obj.json, opts);
      fileFmt = data.format;
      dataset = data.dataset;
      cleanPathsAfterImport(dataset, opts);

    } else if (obj.text) {
      fileFmt = 'dsv';
      data = obj.text;
      dataset = importDelim2(data, opts);

    } else if (obj.shp) {
      fileFmt = 'shapefile';
      data = obj.shp;
      dataset = importShapefile(obj, opts);
      cleanPathsAfterImport(dataset, opts);

    } else if (obj.dbf) {
      fileFmt = 'dbf';
      data = obj.dbf;
      dataset = importDbf(obj, opts);

    } else if (obj.prj) {
      // added for -proj command source
      fileFmt = 'prj';
      data = obj.prj;
      dataset = {layers: [], info: {prj: data.content}};
    }

    if (!dataset) {
      stop("Missing an expected input type");
    }

    // Convert to topological format, if needed
    if (dataset.arcs && !opts.no_topology && fileFmt != 'topojson') {
      buildTopology(dataset);
    }

    // Use file basename for layer name, except TopoJSON, which uses object names
    if (fileFmt != 'topojson') {
      dataset.layers.forEach(function(lyr) {
        setLayerName(lyr, filenameToLayerName(data.filename || ''));
      });
    }

    // Add input filename and format to the dataset's 'info' object
    // (this is useful when exporting if format or name has not been specified.)
    if (data.filename) {
      dataset.info.input_files = [data.filename];
    }
    dataset.info.input_formats = [fileFmt];
    return dataset;
  }

  // Deprecated (included for compatibility with older tests)
  function importFileContent(content, filename, opts) {
    var type = guessInputType(filename, content),
        input = {};
    input[type] = {filename: filename, content: content};
    return importContent(input, opts);
  }


  function importShapefile(obj, opts) {
    var shpSrc = obj.shp.content || obj.shp.filename, // read from a file if (binary) content is missing
        shxSrc = obj.shx ? obj.shx.content || obj.shx.filename : null,
        dataset = importShp(shpSrc, shxSrc, opts),
        lyr = dataset.layers[0],
        dbf;
    if (obj.dbf) {
      dbf = importDbf(obj, opts);
      utils.extend(dataset.info, dbf.info);
      lyr.data = dbf.layers[0].data;
      if (lyr.shapes && lyr.data.size() != lyr.shapes.length) {
        message("Mismatched .dbf and .shp record count -- possible data loss.");
      }
    }
    if (obj.prj) {
      dataset.info.prj = obj.prj.content;
    }
    return dataset;
  }

  function importDbf(input, opts) {
    var table;
    opts = utils.extend({}, opts);
    if (input.cpg && !opts.encoding) {
      opts.encoding = input.cpg.content;
    }
    table = importDbfTable(input.dbf.content, opts);
    return {
      info: {},
      layers: [{data: table}]
    };
  }

  function filenameToLayerName(path) {
    var name = 'layer1';
    var obj = parseLocalPath(path);
    if (obj.basename && obj.extension) { // exclude paths like '/dev/stdin'
      name = obj.basename;
    }
    return name;
  }

  // initialize layer name using filename
  function setLayerName(lyr, path) {
    if (!lyr.name) {
      lyr.name = getFileBase(path);
    }
  }

  var Import = /*#__PURE__*/Object.freeze({
    __proto__: null,
    importContent: importContent,
    importFileContent: importFileContent
  });

  function mergeDatasetsIntoDataset(dataset, datasets) {
    var merged = mergeDatasets([dataset].concat(datasets));
    var mergedLayers = datasets.reduce(function(memo, dataset) {
      return memo.concat(dataset.layers);
    }, []);
    dataset.arcs = merged.arcs;
    return mergedLayers;
  }

  // Don't modify input layers (mergeDatasets() updates arc ids in-place)
  function mergeDatasetsForExport(arr) {
    // copy layers but not arcs, which get copied in mergeDatasets()
    var copy = arr.map(function(dataset) {
      return utils.defaults({
        layers: dataset.layers.map(copyLayerShapes)
      }, dataset);
    });
    return mergeDatasets(copy);
  }

  function mergeCommandTargets(targets, catalog) {
    var targetLayers = [];
    var targetDatasets = [];
    var datasetsWithArcs = 0;
    var merged;

    targets.forEach(function(target) {
      targetLayers = targetLayers.concat(target.layers);
      targetDatasets = targetDatasets.concat(target.dataset);
      if (target.dataset.arcs && target.dataset.arcs.size() > 0) datasetsWithArcs++;
    });

    merged = mergeDatasets(targetDatasets);

    // Rebuild topology, if multiple datasets contain arcs
    if (datasetsWithArcs > 1) {
      buildTopology(merged);
    }

    // remove old datasets after merging, so catalog is not affected if merge throws an error
    targetDatasets.forEach(catalog.removeDataset);
    catalog.addDataset(merged); // sets default target to all layers in merged dataset
    catalog.setDefaultTarget(targetLayers, merged); // reset default target
    return [{
      layers: targetLayers,
      dataset: merged
    }];
  }

  // Combine multiple datasets into one using concatenation
  // (any shared topology is ignored)
  function mergeDatasets(arr) {
    var arcSources = [],
        arcCount = 0,
        mergedLayers = [],
        mergedInfo = {},
        mergedArcs;

    // Error if incompatible CRS
    requireDatasetsHaveCompatibleCRS(arr);

    arr.forEach(function(dataset) {
      var n = dataset.arcs ? dataset.arcs.size() : 0;
      if (n > 0) {
        arcSources.push(dataset.arcs);
      }

      mergeDatasetInfo(mergedInfo, dataset);
      dataset.layers.forEach(function(lyr) {
        if (lyr.geometry_type == 'polygon' || lyr.geometry_type == 'polyline') {
          forEachArcId(lyr.shapes, function(id) {
            return id < 0 ? id - arcCount : id + arcCount;
          });
        }
        mergedLayers.push(lyr);
      });
      arcCount += n;
    });

    mergedArcs = mergeArcs(arcSources);
    if (mergedArcs.size() != arcCount) {
      error("[mergeDatasets()] Arc indexing error");
    }

    return {
      info: mergedInfo,
      arcs: mergedArcs,
      layers: mergedLayers
    };
  }

  function requireDatasetsHaveCompatibleCRS(arr) {
    arr.reduce(function(memo, dataset) {
      var P = getDatasetCRS(dataset);
      if (memo && P) {
        if (isLatLngCRS(memo) != isLatLngCRS(P)) {
          stop("Unable to combine projected and unprojected datasets");
        }
      }
      return P || memo;
    }, null);
  }

  function mergeDatasetInfo(merged, dataset) {
    var info = dataset.info || {};
    merged.input_files = utils.uniq((merged.input_files || []).concat(info.input_files || []));
    merged.input_formats = utils.uniq((merged.input_formats || []).concat(info.input_formats || []));
    // merge other info properties (e.g. input_geojson_crs, input_delimiter, prj, crs)
    utils.defaults(merged, info);
  }

  function mergeArcs(arr) {
    var dataArr = arr.map(function(arcs) {
      if (arcs.getRetainedInterval() > 0) {
        verbose("Baking-in simplification setting.");
        arcs.flatten();
      }
      return arcs.getVertexData();
    });
    var xx = mergeArrays(utils.pluck(dataArr, 'xx'), Float64Array),
        yy = mergeArrays(utils.pluck(dataArr, 'yy'), Float64Array),
        nn = mergeArrays(utils.pluck(dataArr, 'nn'), Int32Array);

    return new ArcCollection(nn, xx, yy);
  }

  function countElements(arrays) {
    return arrays.reduce(function(memo, arr) {
      return memo + (arr.length || 0);
    }, 0);
  }

  function mergeArrays(arrays, TypedArr) {
    var size = countElements(arrays),
        Arr = TypedArr || Array,
        merged = new Arr(size),
        offs = 0;
    arrays.forEach(function(src) {
      var n = src.length;
      for (var i = 0; i<n; i++) {
        merged[i + offs] = src[i];
      }
      offs += n;
    });
    return merged;
  }

  var Merging = /*#__PURE__*/Object.freeze({
    __proto__: null,
    mergeDatasetsIntoDataset: mergeDatasetsIntoDataset,
    mergeDatasetsForExport: mergeDatasetsForExport,
    mergeCommandTargets: mergeCommandTargets,
    mergeDatasets: mergeDatasets,
    mergeArcs: mergeArcs
  });

  var cmd = {}; // command functions get added to this object

  // Import multiple files to a single dataset
  function importFiles(files, opts) {
    var unbuiltTopology = false;
    var datasets = files.map(function(fname) {
      // import without topology or snapping
      var importOpts = utils.defaults({no_topology: true, snap: false, snap_interval: null, files: [fname]}, opts);
      var dataset = importFile(fname, importOpts);
      // check if dataset contains non-topological paths
      // TODO: may also need to rebuild topology if multiple topojson files are merged
      if (dataset.arcs && dataset.arcs.size() > 0 && dataset.info.input_formats[0] != 'topojson') {
        unbuiltTopology = true;
      }
      return dataset;
    });
    var combined = mergeDatasets(datasets);
    // Build topology, if needed
    // TODO: consider updating topology of TopoJSON files instead of concatenating arcs
    // (but problem of mismatched coordinates due to quantization in input files.)
    if (unbuiltTopology && !opts.no_topology) {
      cleanPathsAfterImport(combined, opts);
      buildTopology(combined);
    }
    return combined;
  }

  var MergeFiles = /*#__PURE__*/Object.freeze({
    __proto__: null,
    importFiles: importFiles
  });

  cmd.importFiles = function(opts) {
    var files = opts.files || [],
        dataset;

    if (opts.stdin) {
      return importFile('/dev/stdin', opts);
    }

    if (files.length > 0 === false) {
      stop('Missing input file(s)');
    }

    verbose("Importing: " + files.join(' '));

    if (files.length == 1) {
      dataset = importFile(files[0], opts);
    } else if (opts.merge_files) {
      // TODO: deprecate and remove this option (use -merge-layers cmd instead)
      dataset = importFiles(files, opts);
      dataset.layers = cmd.mergeLayers(dataset.layers);
    } else if (opts.combine_files) {
      dataset = importFiles(files, opts);
    } else {
      stop('Invalid inputs');
    }
    return dataset;
  };

  // Let the web UI replace importFile() with a browser-friendly version
  function replaceImportFile(func) {
    _importFile = func;
  }

  function importFile(path, opts) {
    return _importFile(path, opts);
  }

  var _importFile = function(path, opts) {
    var fileType = guessInputFileType(path),
        input = {},
        encoding = opts && opts.encoding || null,
        cache = opts && opts.input || null,
        cached = cache && (path in cache),
        content;

    cli.checkFileExists(path, cache);
    if (fileType == 'shp' && !cached) {
      // let ShpReader read the file (supports larger files)
      content = null;

    } else if (fileType == 'json' && !cached) {
      // postpone reading of JSON files, to support incremental parsing
      content = null;

    } else if (fileType == 'text' && !cached) {
      // content = cli.readFile(path); // read from buffer
      content = null; // read from file, to support largest files (see mapshaper-delim-import.js)

    } else if (fileType && isSupportedBinaryInputType(path)) {
      content = cli.readFile(path, null, cache);
      if (utils.isString(content)) {
        // Fix for issue #264 (applyCommands() input is file path instead of binary content)
        stop('Expected binary content, received a string');
      }

    } else if (fileType) { // string type
      content = cli.readFile(path, encoding || 'utf-8', cache);

    } else { // type can't be inferred from filename -- try reading as text
      content = cli.readFile(path, encoding || 'utf-8', cache);
      fileType = guessInputContentType(content);
      if (fileType == 'text' && content.indexOf('\ufffd') > -1) {
        // invalidate string data that contains the 'replacement character'
        fileType = null;
      }
    }

    if (!fileType) {
      stop(getUnsupportedFileMessage(path));
    }
    input[fileType] = {filename: path, content: content};
    content = null; // for g.c.
    if (fileType == 'shp' || fileType == 'dbf') {
      readShapefileAuxFiles(path, input, cache);
    }
    if (fileType == 'shp' && !input.dbf) {
      message(utils.format("[%s] .dbf file is missing - shapes imported without attribute data.", path));
    }
    return importContent(input, opts);
  };

  function getUnsupportedFileMessage(path) {
    var ext = getFileExtension(path);
    var msg = 'Unable to import ' + path;
    if (ext.toLowerCase() == 'zip') {
      msg += ' (ZIP files must be unpacked before running mapshaper)';
    } else {
      msg += ' (unknown file type)';
    }
    return msg;
  }

  function readShapefileAuxFiles(path, obj, cache) {
    var dbfPath = replaceFileExtension(path, 'dbf');
    var shxPath = replaceFileExtension(path, 'shx');
    var cpgPath = replaceFileExtension(path, 'cpg');
    var prjPath = replaceFileExtension(path, 'prj');
    if (cli.isFile(prjPath, cache)) {
      obj.prj = {filename: prjPath, content: cli.readFile(prjPath, 'utf-8', cache)};
    }
    if (cli.isFile(shxPath, cache)) {
      obj.shx = {filename: shxPath, content: cli.readFile(shxPath, null, cache)};
    }
    if (!obj.dbf && cli.isFile(dbfPath, cache)) {
      obj.dbf = {filename: dbfPath, content: cli.readFile(dbfPath, null, cache)};
    }
    if (obj.dbf && cli.isFile(cpgPath, cache)) {
      obj.cpg = {filename: cpgPath, content: cli.readFile(cpgPath, 'utf-8', cache).trim()};
    }
  }

  var FileImport = /*#__PURE__*/Object.freeze({
    __proto__: null,
    replaceImportFile: replaceImportFile,
    importFile: importFile
  });

  cmd.proj = function(dataset, destInfo, opts) {
    // modify copy of coordinate data when running in web UI, so original shapes
    // are preserved if an error occurs
    var modifyCopy = runningInBrowser(),
        originals = [],
        target = {},
        src, dest;

    dest = destInfo.crs;
    if (!dest) {
      stop("Missing projection data");
    }

    if (!datasetHasGeometry(dataset)) {
      // still set the crs of datasets that are missing geometry
      dataset.info.crs = dest;
      dataset.info.prj = destInfo.prj; // may be undefined
      return;
    }

    src = getDatasetCRS(dataset);
    if (!src) {
      stop("Unable to project -- source coordinate system is unknown");
    }

    if (crsAreEqual(src, dest)) {
      message("Source and destination CRS are the same");
      return;
    }

    if (dataset.arcs) {
      dataset.arcs.flatten(); // bake in any pending simplification
      target.arcs = modifyCopy ? dataset.arcs.getCopy() : dataset.arcs;
    }

    target.layers = dataset.layers.filter(layerHasPoints).map(function(lyr) {
      if (modifyCopy) {
        originals.push(lyr);
        lyr = utils.extend({}, lyr);
        lyr.shapes = cloneShapes(lyr.shapes);
      }
      return lyr;
    });

    try {
      projectDataset(target, src, dest, opts || {});
    } catch(e) {
      console.error(e);
      stop(utils.format("Projection failure%s (%s)",
        e.point ? ' at ' + e.point.join(' ') : '', e.message));
    }

    dataset.info.crs = dest;
    dataset.info.prj = destInfo.prj; // may be undefined
    dataset.arcs = target.arcs;
    originals.forEach(function(lyr, i) {
      // replace original layers with modified layers
      utils.extend(lyr, target.layers[i]);
    });
  };


  // @source: a layer identifier, .prj file or projection defn
  // Converts layer ids and .prj files to CRS defn
  // Returns projection defn
  function getCrsInfo(name, catalog) {
    var dataset, source, info = {};
    if (/\.prj$/i.test(name)) {
      dataset = importFile(name, {});
      if (dataset) {
        info.prj = dataset.info.prj;
        info.crs = parsePrj(info.prj);
      }
    } else {
      source = catalog.findSingleLayer(name);
      if (source) {
        dataset = source.dataset;
        info.crs = getDatasetCRS(dataset);
        info.prj = dataset.info.prj; // may be undefined
        // defn = internal.crsToProj4(P);
      } else {
        // assume name is a projection defn
        info.crs = getCRS(name);
      }
    }
    return info;
  }

  function projectDataset(dataset, src, dest, opts) {
    var proj = getProjTransform2(src, dest); // v2 returns null points instead of throwing an error
    var errors;
    dataset.layers.forEach(function(lyr) {
      if (layerHasPoints(lyr)) {
        projectPointLayer(lyr, proj); // v2 compatible (invalid points are removed)
      }
    });
    if (dataset.arcs) {
      if (opts.densify) {
        errors = projectAndDensifyArcs(dataset.arcs, proj);
      } else {
        errors = projectArcs2(dataset.arcs, proj);
      }
      if (errors > 0) {
        // TODO: implement this (null arcs have zero length)
        // internal.removeShapesWithNullArcs(dataset);
      }
    }
  }


  // proj: function to project [x, y] point; should return null if projection fails
  // TODO: fatal error if no points project?
  function projectPointLayer(lyr, proj) {
    editShapes(lyr.shapes, function(p) {
      return proj(p[0], p[1]); // removes points that fail to project
    });
  }

  function projectArcs(arcs, proj) {
    var data = arcs.getVertexData(),
        xx = data.xx,
        yy = data.yy,
        // old simplification data  will not be optimal after reprojection;
        // re-using for now to avoid error in web ui
        zz = data.zz,
        p;

    for (var i=0, n=xx.length; i<n; i++) {
      p = proj(xx[i], yy[i]);
      xx[i] = p[0];
      yy[i] = p[1];
    }
    arcs.updateVertexData(data.nn, xx, yy, zz);
  }

  function projectArcs2(arcs, proj) {
    return editArcs(arcs, onPoint);
    function onPoint(append, x, y, prevX, prevY, i) {
      var p = proj(x, y);
      // TODO: prevent arcs with just one point
      if (p) {
        append(p);
      } else {
        return false; // signal that the arc is invalid (no more points will be projected in this arc)
      }
    }
  }

  function projectAndDensifyArcs(arcs, proj) {
    var interval = getDefaultDensifyInterval(arcs, proj);
    var p = [0, 0];
    return editArcs(arcs, onPoint);

    function onPoint(append, lng, lat, prevLng, prevLat, i) {
      var prevX = p[0],
          prevY = p[1];
      p = proj(lng, lat);
      if (!p) return false; // signal that current arc contains an error

      // Don't try to densify shorter segments (optimization)
      if (i > 0 && geom.distanceSq(p[0], p[1], prevX, prevY) > interval * interval * 25) {
        densifySegment(prevLng, prevLat, prevX, prevY, lng, lat, p[0], p[1], proj, interval)
          .forEach(append);
      }
      append(p);
    }
  }

  function getDefaultDensifyInterval(arcs, proj) {
    var xy = getAvgSegment2(arcs),
        bb = arcs.getBounds(),
        a = proj(bb.centerX(), bb.centerY()),
        b = proj(bb.centerX() + xy[0], bb.centerY() + xy[1]),
        c = proj(bb.centerX(), bb.ymin), // right center
        d = proj(bb.xmax, bb.centerY()), // bottom center
        // interval A: based on average segment length
        intervalA = geom.distance2D(a[0], a[1], b[0], b[1]),
        // interval B: a fraction of avg bbox side length
        // (added this for bbox densification)
        intervalB = (geom.distance2D(a[0], a[1], c[0], c[1]) +
          geom.distance2D(a[0], a[1], d[0], d[1])) / 5000;
    return Math.min(intervalA, intervalB);
  }

  // Interpolate points into a projected line segment if needed to prevent large
  //   deviations from path of original unprojected segment.
  // @points (optional) array of accumulated points
  function densifySegment(lng0, lat0, x0, y0, lng2, lat2, x2, y2, proj, interval, points) {
    // Find midpoint between two endpoints and project it (assumes longitude does
    // not wrap). TODO Consider bisecting along great circle path -- although this
    // would not be good for boundaries that follow line of constant latitude.
    var lng1 = (lng0 + lng2) / 2,
        lat1 = (lat0 + lat2) / 2,
        p = proj(lng1, lat1),
        distSq;
    if (!p) return; // TODO: consider if this is adequate for handling proj. errors
    distSq = geom.pointSegDistSq2(p[0], p[1], x0, y0, x2, y2); // sq displacement
    points = points || [];
    // Bisect current segment if the projected midpoint deviates from original
    //   segment by more than the @interval parameter.
    //   ... but don't bisect very small segments to prevent infinite recursion
    //   (e.g. if projection function is discontinuous)
    if (distSq > interval * interval * 0.25 && geom.distance2D(lng0, lat0, lng2, lat2) > 0.01) {
      densifySegment(lng0, lat0, x0, y0, lng1, lat1, p[0], p[1], proj, interval, points);
      points.push(p);
      densifySegment(lng1, lat1, p[0], p[1], lng2, lat2, x2, y2, proj, interval, points);
    }
    return points;
  }

  var Proj = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getCrsInfo: getCrsInfo,
    projectDataset: projectDataset
  });

  function writeFiles(exports, opts, cb) {
    return _writeFiles(exports, opts, cb);
  }

  // Used by GUI to replace the CLI version of writeFiles()
  // (so -o can work in the browser console)
  function replaceWriteFiles(func) {
    _writeFiles = func;
  }

  var _writeFiles = function(exports, opts, cb) {
    if (exports.length > 0 === false) {
      message("No files to save");
    } else if (opts.dry_run) {
      // no output
    } else if (opts.stdout) {
      // Pass callback for asynchronous output (synchronous output to stdout can
      // trigger EAGAIN error, e.g. when piped to less)
      return cli.writeFile('/dev/stdout', exports[0].content, cb);
    } else {
      var paths = getOutputPaths(utils.pluck(exports, 'filename'), opts);
      var inputFiles = getStateVar('input_files');
      exports.forEach(function(obj, i) {
        var path = paths[i];
        if (obj.content instanceof ArrayBuffer) {
          // replacing content so ArrayBuffers can be gc'd
          obj.content = cli.convertArrayBuffer(obj.content); // convert to Buffer
        }
        if (opts.output) {
          opts.output.push({filename: path, content: obj.content});
        } else {
          if (!opts.force && inputFiles.indexOf(path) > -1) {
            stop('Need to use the "-o force" option to overwrite input files.');
          }
          cli.writeFile(path, obj.content);
          message("Wrote " + path);
        }
      });
    }
    if (cb) cb(null);
  };

  function getOutputPaths(files, opts) {
    var odir = opts.directory;
    if (odir) {
      files = files.map(function(file) {
        return require('path').join(odir, file);
      });
    }
    return files;
  }

  var FileExport = /*#__PURE__*/Object.freeze({
    __proto__: null,
    writeFiles: writeFiles,
    replaceWriteFiles: replaceWriteFiles,
    getOutputPaths: getOutputPaths
  });

  // Returns a search function
  // Receives array of objects to index; objects must have a 'bounds' member
  //    that is a Bounds object.
  function getBoundsSearchFunction(boxes) {
    var index, Flatbush;
    if (!boxes.length) {
      // Unlike rbush, flatbush doesn't allow size 0 indexes; workaround
      return function() {return [];};
    }
    Flatbush = require('flatbush');
    index = new Flatbush(boxes.length);
    boxes.forEach(function(ring) {
      var b = ring.bounds;
      index.add(b.xmin, b.ymin, b.xmax, b.ymax);
    });
    index.finish();

    function idxToObj(i) {
      return boxes[i];
    }

    // Receives xmin, ymin, xmax, ymax parameters
    // Returns subset of original @bounds array
    return function(a, b, c, d) {
      return index.search(a, b, c, d).map(idxToObj);
    };
  }

  // @xx array of x coords
  // @ids an array of segment endpoint ids [a0, b0, a1, b1, ...]
  // Sort @ids in place so that xx[a(n)] <= xx[b(n)] and xx[a(n)] <= xx[a(n+1)]
  function sortSegmentIds(xx, ids) {
    orderSegmentIds(xx, ids);
    quicksortSegmentIds(xx, ids, 0, ids.length-2);
  }

  function orderSegmentIds(xx, ids, spherical) {
    function swap(i, j) {
      var tmp = ids[i];
      ids[i] = ids[j];
      ids[j] = tmp;
    }
    for (var i=0, n=ids.length; i<n; i+=2) {
      if (xx[ids[i]] > xx[ids[i+1]]) {
        swap(i, i+1);
      }
    }
  }

  function insertionSortSegmentIds(arr, ids, start, end) {
    var id, id2;
    for (var j = start + 2; j <= end; j+=2) {
      id = ids[j];
      id2 = ids[j+1];
      for (var i = j - 2; i >= start && arr[id] < arr[ids[i]]; i-=2) {
        ids[i+2] = ids[i];
        ids[i+3] = ids[i+1];
      }
      ids[i+2] = id;
      ids[i+3] = id2;
    }
  }

  function quicksortSegmentIds (a, ids, lo, hi) {
    var i = lo,
        j = hi,
        pivot, tmp;
    while (i < hi) {
      pivot = a[ids[(lo + hi >> 2) << 1]]; // avoid n^2 performance on sorted arrays
      while (i <= j) {
        while (a[ids[i]] < pivot) i+=2;
        while (a[ids[j]] > pivot) j-=2;
        if (i <= j) {
          tmp = ids[i];
          ids[i] = ids[j];
          ids[j] = tmp;
          tmp = ids[i+1];
          ids[i+1] = ids[j+1];
          ids[j+1] = tmp;
          i+=2;
          j-=2;
        }
      }

      if (j - lo < 40) insertionSortSegmentIds(a, ids, lo, j);
      else quicksortSegmentIds(a, ids, lo, j);
      if (hi - i < 40) {
        insertionSortSegmentIds(a, ids, i, hi);
        return;
      }
      lo = i;
      j = hi;
    }
  }

  // PolygonIndex indexes the coordinates in one polygon feature for efficient
  // point-in-polygon tests

  function PolygonIndex(shape, arcs, opts) {
    var data = arcs.getVertexData(),
        polygonBounds = arcs.getMultiShapeBounds(shape),
        boundsLeft,
        xminIds, xmaxIds, // vertex ids of segment endpoints
        bucketCount,
        bucketOffsets,
        bucketWidth;

    init();

    // Return 0 if outside, 1 if inside, -1 if on boundary
    this.pointInPolygon = function(x, y) {
      if (!polygonBounds.containsPoint(x, y)) {
        return false;
      }
      var bucketId = getBucketId(x);
      var count = countCrosses(x, y, bucketId);
      if (bucketId > 0) {
        count += countCrosses(x, y, bucketId - 1);
      }
      count += countCrosses(x, y, bucketCount); // check oflo bucket
      if (isNaN(count)) return -1;
      return count % 2 == 1 ? 1 : 0;
    };

    function countCrosses(x, y, bucketId) {
      var offs = bucketOffsets[bucketId],
          count = 0,
          xx = data.xx,
          yy = data.yy,
          n, a, b;
      if (bucketId == bucketCount) { // oflo bucket
        n = xminIds.length - offs;
      } else {
        n = bucketOffsets[bucketId + 1] - offs;
      }
      for (var i=0; i<n; i++) {
        a = xminIds[i + offs];
        b = xmaxIds[i + offs];
        count += geom.testRayIntersection(x, y, xx[a], yy[a], xx[b], yy[b]);
      }
      return count;
    }

    function getBucketId(x) {
      var i = Math.floor((x - boundsLeft) / bucketWidth);
      if (i < 0) i = 0;
      if (i >= bucketCount) i = bucketCount - 1;
      return i;
    }

    function getBucketCount(segCount) {
      // default is this many segs per bucket (average)
      // var buckets = opts && opts.buckets > 0 ? opts.buckets : segCount / 200;
      // using more segs/bucket for more complex shapes, based on trial and error
      var buckets = Math.pow(segCount, 0.75) / 10;
      return Math.ceil(buckets);
    }

    function init() {
      var xx = data.xx,
          segCount = 0,
          segId = 0,
          bucketId = -1,
          prevBucketId,
          segments,
          head, tail,
          a, b, i, j, xmin, xmax;

      // get array of segments as [s0p0, s0p1, s1p0, s1p1, ...], sorted by xmin coordinate
      forEachSegmentInShape(shape, arcs, function() {
        segCount++;
      });
      segments = new Uint32Array(segCount * 2);
      i = 0;
      forEachSegmentInShape(shape, arcs, function(a, b, xx, yy) {
        segments[i++] = a;
        segments[i++] = b;
      });
      sortSegmentIds(xx, segments);

      // assign segments to buckets according to xmin coordinate
      xminIds = new Uint32Array(segCount);
      xmaxIds = new Uint32Array(segCount);
      bucketCount = getBucketCount(segCount);
      bucketOffsets = new Uint32Array(bucketCount + 1); // add an oflo bucket
      boundsLeft = xx[segments[0]]; // xmin of first segment
      bucketWidth = (xx[segments[segments.length - 2]] - boundsLeft) / bucketCount;
      head = 0; // insertion index for next segment in the current bucket
      tail = segCount - 1; // insertion index for next segment in oflo bucket

      while (segId < segCount) {
        j = segId * 2;
        a = segments[j];
        b = segments[j+1];
        xmin = xx[a];
        xmax = xx[b];
        prevBucketId = bucketId;
        bucketId = getBucketId(xmin);

        while (bucketId > prevBucketId) {
          prevBucketId++;
          bucketOffsets[prevBucketId] = head;
        }

        if (xmax - xmin >= 0 === false) error("Invalid segment");
        if (getBucketId(xmax) - bucketId > 1) {
          // if segment extends to more than two buckets, put it in the oflo bucket
          xminIds[tail] = a;
          xmaxIds[tail] = b;
          tail--; // oflo bucket fills from right to left
        } else {
          // else place segment in a bucket based on x coord of leftmost endpoint
          xminIds[head] = a;
          xmaxIds[head] = b;
          head++;
        }
        segId++;
      }
      bucketOffsets[bucketCount] = head;
      if (head != tail + 1) error("Segment indexing error");
    }
  }

  // PathIndex supports several kinds of spatial query on a layer of polyline or polygon shapes
  function PathIndex(shapes, arcs) {
    var boundsQuery = getBoundsSearchFunction(getRingData(shapes, arcs));
    var totalArea = getPathBounds$1(shapes, arcs).area();

    function getRingData(shapes, arcs) {
      var arr = [];
      shapes.forEach(function(shp, shpId) {
        var n = shp ? shp.length : 0;
        for (var i=0; i<n; i++) {
          arr.push({
            ids: shp[i],
            id: shpId,
            bounds: arcs.getSimpleShapeBounds(shp[i])
          });
        }
      });
      return arr;
    }

    // Returns shape ids of all polygons that intersect point p
    // (p is inside a ring or on the boundary)
    this.findEnclosingShapes = function(p) {
      var ids = [];
      var cands = findPointHitCandidates(p);
      var groups = groupItemsByShapeId(cands);
      groups.forEach(function(group) {
        if (testPointInRings(p, group)) {
          ids.push(group[0].id);
        }
      });
      return ids;
    };

    // Returns shape id of a polygon that intersects p or -1
    // (If multiple intersections, returns one of the polygons)
    this.findEnclosingShape = function(p) {
      var shpId = -1;
      var groups = groupItemsByShapeId(findPointHitCandidates(p));
      groups.forEach(function(group) {
        if (testPointInRings(p, group)) {
          shpId = group[0].id;
        }
      });
      return shpId;
    };

    // Returns shape ids of polygons that contain an arc
    // (arcs that are )
    // Assumes that input arc is either inside, outside or coterminous with indexed
    // arcs (i.e. input arc does not cross an indexed arc)
    this.findShapesEnclosingArc = function(arcId) {
      var p = getTestPoint([arcId]);
      return this.findEnclosingShapes(p);
    };

    this.findPointEnclosureCandidates = function(p, buffer) {
      var items = findPointHitCandidates(p, buffer);
      return utils.pluck(items, 'id');
    };

    this.pointIsEnclosed = function(p) {
      return testPointInRings(p, findPointHitCandidates(p));
    };

    // Finds the polygon containing the smallest ring that entirely contains @ring
    // Assumes ring boundaries do not cross.
    // Unhandled edge case:
    //   two rings share at least one segment but are not congruent.
    // @ring: array of arc ids
    // Returns id of enclosing polygon or -1 if none found
    this.findSmallestEnclosingPolygon = function(ring) {
      var bounds = arcs.getSimpleShapeBounds(ring);
      var p = getTestPoint(ring);
      var smallest;
      var cands = findPointHitCandidates(p);
      cands.forEach(function(cand) {
        if (cand.bounds.contains(bounds) && // skip partially intersecting bboxes (can't be enclosures)
          !cand.bounds.sameBounds(bounds) && // skip self, congruent and reversed-congruent rings
          !(smallest && smallest.bounds.area() < cand.bounds.area())) {
              if (testPointInRing(p, cand)) {
                smallest = cand;
              }
            }
      });

      return smallest ? smallest.id : -1;
    };

    this.arcIsEnclosed = function(arcId) {
      return this.pointIsEnclosed(getTestPoint([arcId]));
    };

    // Test if a polygon ring is contained within an indexed ring
    // Not a true polygon-in-polygon test
    // Assumes that the target ring does not cross an indexed ring at any point
    // or share a segment with an indexed ring. (Intersecting rings should have
    // been detected previously).
    //
    this.pathIsEnclosed = function(pathIds) {
      return this.pointIsEnclosed(getTestPoint(pathIds));
    };

    // return array of paths that are contained within a path, or null if none
    // @pathIds Array of arc ids comprising a closed path
    this.findEnclosedPaths = function(pathIds) {
      var b = arcs.getSimpleShapeBounds(pathIds),
          cands = boundsQuery(b.xmin, b.ymin, b.xmax, b.ymax),
          paths = [],
          index;

      if (cands.length > 6) {
        index = new PolygonIndex([pathIds], arcs);
      }
      cands.forEach(function(cand) {
        var p = getTestPoint(cand.ids);
        var isEnclosed = b.containsPoint(p[0], p[1]) && (index ?
          index.pointInPolygon(p[0], p[1]) : geom.testPointInRing(p[0], p[1], pathIds, arcs));
        if (isEnclosed) {
          paths.push(cand.ids);
        }
      });
      return paths.length > 0 ? paths : null;
    };

    this.findPathsInsideShape = function(shape) {
      var paths = []; // list of enclosed paths
      shape.forEach(function(ids) {
        var enclosed = this.findEnclosedPaths(ids);
        if (enclosed) {
          // any paths that are enclosed by an even number of rings are removed from list
          // (given normal topology, such paths are inside holes)
          paths = xorArrays(paths, enclosed);
        }
      }, this);
      return paths.length > 0 ? paths : null;
    };

    function testPointInRing(p, cand) {
      if (!cand.bounds.containsPoint(p[0], p[1])) return false;
      if (!cand.index && cand.bounds.area() > totalArea * 0.01) {
        // index larger polygons (because they are slower to test via pointInRing()
        //    and they are more likely to be involved in repeated hit tests).
        cand.index = new PolygonIndex([cand.ids], arcs);
      }
      return cand.index ?
          cand.index.pointInPolygon(p[0], p[1]) :
          geom.testPointInRing(p[0], p[1], cand.ids, arcs);
    }

    //
    function testPointInRings(p, cands) {
      var isOn = false,
          isIn = false;
      cands.forEach(function(cand) {
        var inRing = testPointInRing(p, cand);
        if (inRing == -1) {
          isOn = true;
        } else if (inRing == 1) {
          isIn = !isIn;
        }
      });
      return isOn || isIn;
    }

    function groupItemsByShapeId(items) {
      var groups = [],
          group, item;
      if (items.length > 0) {
        items.sort(function(a, b) {return a.id - b.id;});
        for (var i=0; i<items.length; i++) {
          item = items[i];
          if (i === 0 || item.id != items[i-1].id) {
            groups.push(group=[]);
          }
          group.push(item);
        }
      }
      return groups;
    }

    function findPointHitCandidates(p, buffer) {
      var b = buffer > 0 ? buffer : 0;
      var x = p[0], y = p[1];
      return boundsQuery(p[0] - b, p[1] - b, p[0] + b, p[1] + b);
    }

    // Find a point on a ring to use for point-in-polygon testing
    function getTestPoint(ring) {
      // Use the point halfway along first segment rather than an endpoint
      // (because ring might still be enclosed if a segment endpoint touches an indexed ring.)
      // The returned point should work for point-in-polygon testing if two rings do not
      // share any common segments (which should be true for topological datasets)
      // TODO: consider alternative of finding an internal point of @ring (slower but
      //   potentially more reliable).
      var arcId = ring[0],
          p0 = arcs.getVertex(arcId, 0),
          p1 = arcs.getVertex(arcId, 1);
      return [(p0.x + p1.x) / 2, (p0.y + p1.y) / 2];
    }

    // concatenate arrays, removing elements that are in both
    function xorArrays(a, b) {
      var xor = [], i;
      for (i=0; i<a.length; i++) {
        if (b.indexOf(a[i]) == -1) xor.push(a[i]);
      }
      for (i=0; i<b.length; i++) {
        if (a.indexOf(b[i]) == -1) xor.push(b[i]);
      }
      return xor;
    }
  }

  // Delete rings that are nested directly inside an enclosing ring with the same winding direction
  // Does not remove unenclosed CCW rings (currently this causes problems when
  //   rounding coordinates for SVG and TopoJSON output)
  // Assumes ring boundaries do not overlap (should be true after e.g. dissolving)
  //
  function fixNestingErrors(rings, arcs) {
    if (rings.length <= 1) return rings;
    var ringData = getPathMetadata(rings, arcs, 'polygon');
    // convert rings to shapes for PathIndex
    var shapes = rings.map(function(ids) {return [ids];});
    var index = new PathIndex(shapes, arcs);
    return rings.filter(ringIsValid);

    function ringIsValid(ids, i) {
      var containerId = index.findSmallestEnclosingPolygon(ids);
      var ringIsCW, containerIsCW;
      var valid = true;
      if (containerId > -1) {
        ringIsCW = ringData[i].area > 0;
        containerIsCW = ringData[containerId].area > 0;
        if (containerIsCW == ringIsCW) {
          // reject rings with same chirality as their containing ring
          valid = false;
        }
      }
      return valid;
    }
  }

  // Set winding order of polygon rings so that outer rings are CW, first-order
  // nested rings are CCW, etc.
  function rewindPolygons(lyr, arcs) {
    lyr.shapes = lyr.shapes.map(function(shp) {
      if (!shp) return null;
      return rewindPolygon(shp, arcs);
    });
  }

  // Update winding order of rings in a polygon so that outermost rings are
  // CW and nested rings alternate between CCW and CW.
  function rewindPolygon(rings, arcs) {
    var ringData = getPathMetadata(rings, arcs, 'polygon');

    // Sort rings by area, from large to small
    ringData.sort(function(a, b) {
      return Math.abs(b.area) - Math.abs(a.area);
    });
    // If a ring is contained by one or more rings, set it to the opposite
    //   direction as its immediate parent
    // If a ring is not contained, make it CW.
    ringData.forEach(function(ring, i) {
      var shouldBeCW = true;
      var j = i;
      var largerRing;
      while (--j >= 0) {
        largerRing = ringData[j];
        if (testRingInRing(ring, largerRing, arcs)) {
          // set to opposite of containing ring
          shouldBeCW = largerRing.area > 0 ? false : true;
          break;
        }
      }
      setRingWinding(ring, shouldBeCW);
    });
    return ringData.map(function(data) { return data.ids; });
  }

  // data: a ring data object
  function setRingWinding(data, cw) {
    var isCW = data.area > 0;
    if (isCW != cw) {
      data.area = -data.area;
      reversePath(data.ids);
    }
  }

  // a, b: two ring data objects (from getPathMetadata);
  function testRingInRing(a, b, arcs) {
    if (b.bounds.contains(a.bounds) === false) return false;
    var p = arcs.getVertex(a.ids[0], 0); // test with first point in the ring
    return geom.testPointInRing(p.x, p.y, b.ids, arcs) == 1;
  }

  // Bundle holes with their containing rings for Topo/GeoJSON polygon export.
  // Assumes outer rings are CW and inner (hole) rings are CCW, unless
  //   the reverseWinding flag is set.
  // @paths array of objects with path metadata -- see internal.exportPathData()
  //
  function groupPolygonRings(paths, arcs, reverseWinding) {
    var holes = [],
        groups = [],
        sign = reverseWinding ? -1 : 1,
        boundsQuery;

    (paths || []).forEach(function(path) {
      if (path.area * sign > 0) {
        groups.push([path]);
      } else if (path.area * sign < 0) {
        holes.push(path);
      } else {
        // Zero-area ring, skipping
      }
    });

    if (holes.length === 0) {
      return groups;
    }

    // Using a spatial index to improve performance when the current feature
    // contains many holes and space-filling rings.
    // (Thanks to @simonepri for providing an example implementation in PR #248)
    boundsQuery = getBoundsSearchFunction(groups.map(function(group, i) {
      return {
        bounds: group[0].bounds,
        idx: i
      };
    }));

    // Group each hole with its containing ring
    holes.forEach(function(hole) {
      var containerId = -1,
          containerArea = 0,
          holeArea = hole.area * -sign,
          b = hole.bounds,
          // Find rings that might contain this hole
          candidates = boundsQuery(b.xmin, b.ymin, b.xmax, b.ymax),
          ring, ringId, ringArea, isContained;

      // Group this hole with the smallest-area ring that contains it.
      // (Assumes that if a ring's bbox contains a hole, then the ring also
      //  contains the hole).
      for (var i=0, n=candidates.length; i<n; i++) {
        ringId = candidates[i].idx;
        ring = groups[ringId][0];
        ringArea = ring.area * sign;
        isContained = ring.bounds.contains(hole.bounds) && ringArea > holeArea;
        if (isContained && candidates.length > 1 && !testRingInRing(hole, ring, arcs)) {
          // Using a more precise ring-in-ring test in the unusual case that
          // this hole is contained within the bounding box of multiple rings.
          // TODO: consider doing a ring-in-ring test even when there is only one
          // candidate ring, based on bbox-in-bbox test (this may affect performance
          // with some datasets).
          continue;
        }
        if (isContained && (containerArea === 0 || ringArea < containerArea)) {
          containerArea = ringArea;
          containerId = ringId;
        }
      }
      if (containerId == -1) {
        debug("[groupPolygonRings()] polygon hole is missing a containing ring, dropping.");
      } else {
        groups[containerId].push(hole);
      }
    });

    return groups;
  }

  function exportPointData(points) {
    var data, path;
    if (!points || points.length === 0) {
      data = {partCount: 0, pointCount: 0};
    } else {
      path = {
        points: points,
        pointCount: points.length,
        bounds: geom.getPathBounds(points)
      };
      data = {
        bounds: path.bounds,
        pathData: [path],
        partCount: 1,
        pointCount: path.pointCount
      };
    }
    return data;
  }

  // TODO: remove duplication with internal.getPathMetadata()
  function exportPathData(shape, arcs, type) {
    // kludge until Shapefile exporting is refactored
    if (type == 'point') return exportPointData(shape);

    var pointCount = 0,
        bounds = new Bounds(),
        paths = [];

    if (shape && (type == 'polyline' || type == 'polygon')) {
      shape.forEach(function(arcIds, i) {
        var iter = arcs.getShapeIter(arcIds),
            path = exportPathCoords(iter),
            valid = true;
        path.ids = arcIds;
        if (type == 'polygon') {
          path.area = geom.getPlanarPathArea2(path.points);
          valid = path.pointCount > 3 && path.area !== 0;
        } else if (type == 'polyline') {
          valid = path.pointCount > 1;
        }
        if (valid) {
          pointCount += path.pointCount;
          path.bounds = geom.getPathBounds(path.points);
          bounds.mergeBounds(path.bounds);
          paths.push(path);
        } else {
          verbose("Skipping a collapsed", type, "path");
        }
      });
    }

    return {
      pointCount: pointCount,
      pathData: paths,
      pathCount: paths.length,
      bounds: bounds
    };
  }

  function exportPathCoords(iter) {
    var points = [],
        i = 0,
        x, y, prevX, prevY;
    while (iter.hasNext()) {
      x = iter.x;
      y = iter.y;
      if (i === 0 || prevX != x || prevY != y) {
        points.push([x, y]);
        i++;
      }
      prevX = x;
      prevY = y;
    }
    return {
      points: points,
      pointCount: points.length
    };
  }

  var PathExport = /*#__PURE__*/Object.freeze({
    __proto__: null,
    exportPointData: exportPointData,
    exportPathData: exportPathData
  });

  // Merge layers, checking for incompatible geometries and data fields.
  // Assumes that input layers are members of the same dataset (and therefore
  // share the same ArcCollection, if layers have paths).
  cmd.mergeLayers = function(layersArg, opts) {
    var layers = layersArg.filter(getFeatureCount); // ignore empty layers
    var merged = {};
    opts = opts || {};
    if (!layers.length) return null;
    if (layers.length == 1) {
      message('Use the target= option to specify multiple layers for merging');
      return layers.concat();
    }
    merged.data = mergeDataFromLayers(layers, opts);
    merged.name = mergeLayerNames(layers);
    merged.geometry_type = getMergedLayersGeometryType(layers);
    if (merged.geometry_type) {
      merged.shapes = mergeShapesFromLayers(layers);
    }
    if (merged.shapes && merged.data && merged.shapes.length != merged.data.size()) {
      error("Mismatch between geometry and attribute data");
    }
    return [merged];
  };

  function getMergedLayersGeometryType(layers) {
    var geoTypes = utils.uniq(utils.pluck(layers, 'geometry_type'))
      .filter(function(type) {return !!type;}); // ignore null-type layers
    if (geoTypes.length > 1) {
      stop("Incompatible geometry types:", geoTypes.join(', '));
    }
    return geoTypes[0] || null;
  }

  function mergeShapesFromLayers(layers) {
    return layers.reduce(function(memo, lyr) {
      var shapes = lyr.shapes || [];
      var n = getFeatureCount(lyr);
      var i = -1;
      while (++i < n) memo.push(shapes[i] || null); // add null shapes if layer has no shapes
      return memo;
    }, []);
  }

  function mergeDataFromLayers(layers, opts) {
    var allFields = utils.uniq(layers.reduce(function(memo, lyr) {
      return memo.concat(lyr.data ? lyr.data.getFields() : []);
    }, []));
    if (allFields.length === 0) return null; // no data in any fields
    var mergedRecords = layers.reduce(function(memo, lyr) {
      var records = lyr.data ? lyr.data.getRecords() : new DataTable(getFeatureCount(lyr)).getRecords();
      return memo.concat(records);
    }, []);
    var missingFields = findInconsistentFields(allFields, layers);
    handleMissingFields(missingFields, opts);
    checkInconsistentFieldTypes(allFields, layers);
    if (missingFields.length > 0) {
      fixInconsistentFields(mergedRecords);
    }
    return new DataTable(mergedRecords);
  }

  // handle fields that are missing from one or more layers
  // (warn if force-merging, else error)
  function handleMissingFields(missingFields, opts) {
    var msg;
    if (missingFields.length > 0) {
      msg = '[' + missingFields.join(', ') + ']';
      msg = (missingFields.length == 1 ? 'Field ' + msg + ' is missing' : 'Fields ' + msg + ' are missing') + ' from one or more layers';
      if (!opts.force) {
        stop(msg);
      } else if (opts.verbose !== false) {
        message('Warning: ' + msg);
      }
    }
  }

  function findInconsistentFields(allFields, layers) {
    var missingFields = utils.uniq(layers.reduce(function(memo, lyr) {
      return memo.concat(utils.difference(allFields, lyr.data ? lyr.data.getFields() : []));
    }, []));
    return missingFields;
  }

  // check for fields with incompatible data types (e.g. number, string)
  function checkInconsistentFieldTypes(fields, layers) {
    fields.forEach(function(key) {
      var types = findFieldTypes(key, layers);
      if (types.length > 1) {
        stop("Inconsistent data types in \"" + key + "\" field:", types.join(', '));
      }
    });
  }

  function findFieldTypes(key, layers) {
    // ignores empty-type fields
    return layers.reduce(function(memo, lyr) {
      var type = lyr.data ? getColumnType(key, lyr.data.getRecords()) : null;
      if (type && memo.indexOf(type) == -1) {
        memo.push(type);
      }
      return memo;
    }, []);
  }

  function mergeLayerNames(layers) {
    return layers.reduce(function(memo, lyr) {
      if (memo === null) {
        memo = lyr.name || null;
      } else if (memo && lyr.name) {
        memo = utils.mergeNames(memo, lyr.name);
      }
      return memo;
    }, null) || '';
  }

  // switch to RFC 7946-compatible output (while retaining the original export function,
  // so numerous tests will continue to work)
  function exportGeoJSON2(dataset, opts) {
    opts = utils.extend({}, opts);
    opts.v2 = !opts.gj2008; // use RFC 7946 as the default
    return exportGeoJSON(dataset, opts);
  }

  function exportGeoJSON(dataset, opts) {
    opts = opts || {};
    var extension = opts.extension || "json";
    var layerGroups, warn;

    // Apply coordinate precision
    // rfc7946 flag is deprecated (default output is now RFC 7946 compatible)
    // the flag is used here to preserve backwards compatibility
    // (the rfc7946 flag applies a default precision threshold, even though rounding
    // coordinates is only a recommendation, not a requirement of RFC 7946)
    if (opts.precision || opts.rfc7946) {
      dataset = copyDatasetForExport(dataset);
      setCoordinatePrecision(dataset, opts.precision || 0.000001);
    }

    if (opts.v2 || opts.rfc7946) {
      warn = getRFC7946Warnings(dataset);
      if (warn) message(warn);
    }

    if (opts.file) {
      // Override default output extension if output filename is given
      extension = getFileExtension(opts.file);
    }
    if (opts.combine_layers) {
      layerGroups = [dataset.layers];
    } else {
      layerGroups = dataset.layers.map(function(lyr) {
        return [lyr];
      });
    }
    return layerGroups.map(function(layers) {
      // Use common part of layer names if multiple layers are being merged
      var name = mergeLayerNames(layers) || 'output';
      var d = utils.defaults({layers: layers}, dataset);
      return {
        content: exportDatasetAsGeoJSON(d, opts, 'buffer'),
        filename: name + '.' + extension
      };
    });
  }

  // Return an array of Features or Geometries as objects or strings
  //
  function exportLayerAsGeoJSON(lyr, dataset, opts, asFeatures, ofmt) {
    var properties = exportProperties(lyr.data, opts),
        shapes = lyr.shapes,
        ids = exportIds(lyr.data, opts),
        items, stringify;

    if (ofmt) {
      stringify = opts.prettify ?
        getFormattedStringify(['bbox', 'coordinates']) :
        JSON.stringify;
    }

    if (properties && shapes && properties.length !== shapes.length) {
      error("Mismatch between number of properties and number of shapes");
    }

    return (shapes || properties || []).reduce(function(memo, o, i) {
      var shape = shapes ? shapes[i] : null,
          exporter = GeoJSON.exporters[lyr.geometry_type],
          obj = shape ? exporter(shape, dataset.arcs, opts) : null;
      if (asFeatures) {
        obj = {
          type: 'Feature',
          geometry: obj,
          properties: properties ? properties[i] : null
        };
        if (ids) {
          obj.id = ids[i];
        }
      } else if (!obj) {
        return memo; // don't add null objects to GeometryCollection
      }
      if (ofmt) {
        // stringify features as soon as they are generated, to reduce the
        // number of JS objects in memory (so larger files can be exported)
        obj = stringify(obj);
        if (ofmt == 'buffer') {
          obj = encodeString(obj, 'utf8');
          // obj = stringToBuffer(obj);
          // obj = new Buffer(obj, 'utf8');
        }
      }
      memo.push(obj);
      return memo;
    }, []);
  }


  function getRFC7946Warnings(dataset) {
    var P = getDatasetCRS(dataset);
    var str;
    if (!P || !isLatLngCRS(P)) {
      str = 'RFC 7946 warning: non-WGS84 GeoJSON output.';
      if (P) str += ' Tip: use "-proj wgs84" to convert.';
    }
    return str;
  }

  function getDatasetBbox(dataset, rfc7946) {
    var P = getDatasetCRS(dataset),
        wrapped = rfc7946 && P && isLatLngCRS(P),
        westBounds = new Bounds(),
        eastBounds = new Bounds(),
        mergedBounds, gutter, margins, bbox;

    dataset.layers.forEach(function(lyr) {
      if (layerHasPaths(lyr)) {
        traversePaths(lyr.shapes, null, function(o) {
          var bounds = dataset.arcs.getSimpleShapeBounds(o.arcs);
          (bounds.centerX() < 0 ? westBounds : eastBounds).mergeBounds(bounds);
        });
      } else if (layerHasPoints(lyr)) {
        forEachPoint(lyr.shapes, function(p) {
          (p[0] < 0 ? westBounds : eastBounds).mergePoint(p[0], p[1]);
        });
      }
    });
    mergedBounds = (new Bounds()).mergeBounds(eastBounds).mergeBounds(westBounds);
    if (mergedBounds.hasBounds()) {
      bbox = mergedBounds.toArray();
    }
    if (wrapped && eastBounds.hasBounds() && westBounds.hasBounds()) {
      gutter = eastBounds.xmin - westBounds.xmax;
      margins = 360 + westBounds.xmin - eastBounds.xmax;
      if (gutter > 0 && gutter > margins) {
        bbox[0] = eastBounds.xmin;
        bbox[2] = westBounds.xmax;
      }
    }
    return bbox || null;
  }

  function exportDatasetAsGeoJSON(dataset, opts, ofmt) {
    var geojson = {};
    var layers = dataset.layers;
    var useFeatures = useFeatureCollection(layers, opts);
    var parts, collection, bbox, collname;

    if (useFeatures) {
      geojson.type = 'FeatureCollection';
      collname = 'features';
    } else {
      geojson.type = 'GeometryCollection';
      collname = 'geometries';
    }

    if (opts.gj2008) {
      preserveOriginalCRS(dataset, geojson);
    }

    if (opts.bbox) {
      bbox = getDatasetBbox(dataset, opts.rfc7946 || opts.v2);
      if (bbox) {
        geojson.bbox = bbox;
      }
    }

    collection = layers.reduce(function(memo, lyr, i) {
      var items = exportLayerAsGeoJSON(lyr, dataset, opts, useFeatures, ofmt);
      return memo.length > 0 ? memo.concat(items) : items;
    }, []);

    if (opts.geojson_type == 'Feature' && collection.length == 1) {
      return collection[0];
    } else if (ofmt) {
      return GeoJSON.formatGeoJSON(geojson, collection, collname, ofmt);
    } else {
      geojson[collname] = collection;
      return geojson;
    }
  }

  GeoJSON.formatGeoJSON = function(container, collection, collType, ofmt) {
    // collection is an array of individual GeoJSON Feature|geometry strings or buffers
    var head = JSON.stringify(container).replace(/\}$/, ', "' + collType + '": [\n');
    var tail = '\n]}';
    if (ofmt == 'buffer') {
      return GeoJSON.joinOutputBuffers(head, tail, collection);
    }
    return head + collection.join(',\n') + tail;
  };

  GeoJSON.joinOutputBuffers = function(head, tail, collection) {
    var comma = utils.createBuffer(',\n', 'utf8');
    var parts = collection.reduce(function(memo, buf, i) {
      if (i > 0) memo.push(comma);
      memo.push(buf);
      return memo;
    }, [utils.createBuffer(head, 'utf8')]);
    parts.push(utils.createBuffer(tail, 'utf8'));
    return Buffer.concat(parts);
  };

  // export GeoJSON or TopoJSON point geometry
  GeoJSON.exportPointGeom = function(points, arcs) {
    var geom = null;
    if (points.length == 1) {
      geom = {
        type: "Point",
        coordinates: points[0]
      };
    } else if (points.length > 1) {
      geom = {
        type: "MultiPoint",
        coordinates: points
      };
    }
    return geom;
  };

  GeoJSON.exportLineGeom = function(ids, arcs) {
    var obj = exportPathData(ids, arcs, "polyline");
    if (obj.pointCount === 0) return null;
    var coords = obj.pathData.map(function(path) {
      return path.points;
    });
    return coords.length == 1 ? {
      type: "LineString",
      coordinates: coords[0]
    } : {
      type: "MultiLineString",
      coordinates: coords
    };
  };

  GeoJSON.exportPolygonGeom = function(ids, arcs, opts) {
    var obj = exportPathData(ids, arcs, "polygon");
    if (obj.pointCount === 0) return null;
    var groups = groupPolygonRings(obj.pathData, arcs, opts.invert_y);
    // invert_y is used internally for SVG generation
    // mapshaper's internal winding order is the opposite of RFC 7946
    var reverse = (opts.rfc7946 || opts.v2) && !opts.invert_y;
    var coords = groups.map(function(paths) {
      return paths.map(function(path) {
        if (reverse) path.points.reverse();
        return path.points;
      });
    });
    return coords.length == 1 ? {
      type: "Polygon",
      coordinates: coords[0]
    } : {
      type: "MultiPolygon",
      coordinates: coords
    };
  };

  GeoJSON.exporters = {
    polygon: GeoJSON.exportPolygonGeom,
    polyline: GeoJSON.exportLineGeom,
    point: GeoJSON.exportPointGeom
  };

  // To preserve some backwards compatibility with old-style GeoJSON files,
  // pass through any original CRS object if the crs has not been set by mapshaper
  // jsonObj: a top-level GeoJSON or TopoJSON object
  //
  function preserveOriginalCRS(dataset, jsonObj) {
    var info = dataset.info || {};
    if (!info.crs && 'input_geojson_crs' in info) {
      // use input geojson crs if available and coords have not changed
      jsonObj.crs = info.input_geojson_crs;

    }

    // Removing the following (seems ineffectual at best)
    // else if (info.crs && !isLatLngCRS(info.crs)) {
    //   // Setting output crs to null if coords have been projected
    //   // "If the value of CRS is null, no CRS can be assumed"
    //   // source: http://geojson.org/geojson-spec.html#coordinate-reference-system-objects
    //   jsonObj.crs = null;
    // }
  }

  function useFeatureCollection(layers, opts) {
    var type = opts.geojson_type || '';
    if (type == 'Feature' || type == 'FeatureCollection') {
      return true;
    } else if (type == 'GeometryCollection') {
      return false;
    } else if (type) {
      stop("Unsupported GeoJSON type:", opts.geojson_type);
    }
    // default is true iff layers contain attributes
    return utils.some(layers, function(lyr) {
      var fields = lyr.data ? lyr.data.getFields() : [];
      var haveData = useFeatureProperties(fields, opts);
      var haveId = !!getIdField(fields, opts);
      return haveData || haveId;
    });
  }

  function useFeatureProperties(fields, opts) {
    return !(opts.drop_table || opts.cut_table || fields.length === 0 ||
        fields.length == 1 && fields[0] == GeoJSON.ID_FIELD);
  }

  function exportProperties(table, opts) {
    var fields = table ? table.getFields() : [],
        idField = getIdField(fields, opts),
        properties, records;
    if (!useFeatureProperties(fields, opts)) {
      return null;
    }
    records = table.getRecords();
    if (idField == GeoJSON.ID_FIELD) {// delete default id field, not user-set fields
      properties = records.map(function(rec) {
        rec = utils.extend({}, rec); // copy rec;
        delete rec[idField];
        return rec;
      });
    } else {
      properties = records;
    }
    return properties;
  }

  // @opt value of id-field option (empty, string or array of strings)
  // @fields array
  function getIdField(fields, opts) {
    var ids = [];
    var opt = opts.id_field;
    if (utils.isString(opt)) {
      ids.push(opt);
    } else if (utils.isArray(opt)) {
      ids = opt;
    }
    ids.push(GeoJSON.ID_FIELD); // default id field
    return utils.find(ids, function(name) {
      return utils.contains(fields, name);
    });
  }

  function exportIds(table, opts) {
    var fields = table ? table.getFields() : [],
        idField = getIdField(fields, opts);
    if (!idField) return null;
    return table.getRecords().map(function(rec) {
      return idField in rec ? rec[idField] : null;
    });
  }

  var GeojsonExport = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': GeoJSON,
    exportGeoJSON2: exportGeoJSON2,
    exportGeoJSON: exportGeoJSON,
    exportLayerAsGeoJSON: exportLayerAsGeoJSON,
    getRFC7946Warnings: getRFC7946Warnings,
    getDatasetBbox: getDatasetBbox,
    exportDatasetAsGeoJSON: exportDatasetAsGeoJSON,
    preserveOriginalCRS: preserveOriginalCRS,
    useFeatureCollection: useFeatureCollection,
    exportProperties: exportProperties,
    getIdField: getIdField,
    exportIds: exportIds
  });

  var furnitureRenderers = {};

  // @lyr a layer in a dataset
  function layerHasFurniture(lyr) {
    var type = getFurnitureLayerType(lyr);
    return !!type && (type in furnitureRenderers);
  }

  // @mapLayer a map layer object
  function isFurnitureLayer(mapLayer) {
    return !!mapLayer.furniture;
  }

  // @lyr dataset layer
  function getFurnitureLayerType(lyr) {
    var rec = lyr.data && lyr.data.getReadOnlyRecordAt(0);
    return rec && rec.type || null;
  }

  function getFurnitureLayerData(lyr) {
    return lyr.data && lyr.data.getReadOnlyRecordAt(0);
  }

  function importFurniture(d, frame) {
    var renderer = furnitureRenderers[d.type];
    if (!renderer) {
      stop('Missing renderer for', d.type, 'element');
    }
    return renderer(d, frame) || [];
  }

  var Furniture = /*#__PURE__*/Object.freeze({
    __proto__: null,
    furnitureRenderers: furnitureRenderers,
    layerHasFurniture: layerHasFurniture,
    isFurnitureLayer: isFurnitureLayer,
    getFurnitureLayerType: getFurnitureLayerType,
    getFurnitureLayerData: getFurnitureLayerData,
    importFurniture: importFurniture
  });

  // Apply rotation, scale and/or shift to some or all of the features in a dataset
  //
  cmd.affine = function(targetLayers, dataset, opts) {
    // Need to separate the targeted shapes from any other shapes that share
    // the same topology. So we duplicate any arcs that are shared by the targeted
    // shapes and their topological neighbors and remap arc references in the
    // neighbors to point to the copies.
    // TODO: explore alternative: if some arcs are shared between transformed and
    //   non-transformed shapes, first remove topology, then tranform, then rebuild topology
    //
    var rotateArg = opts.rotate || 0;
    var scaleArg = opts.scale || 1;
    var shiftArg = opts.shift ? convertIntervalPair(opts.shift, getDatasetCRS(dataset)) : [0, 0];
    var arcs = dataset.arcs;
    var targetShapes = [];
    var otherShapes = [];
    var targetPoints = [];
    var targetFlags, otherFlags, transform, transformOpts;
    dataset.layers.filter(layerHasGeometry).forEach(function(lyr) {
      var hits = [],
          misses = [],
          test;
      if (targetLayers.indexOf(lyr) == -1) {
        misses = lyr.shapes;
      } else if (opts.where) {
        test = compileValueExpression(opts.where, lyr, dataset.arcs);
        lyr.shapes.forEach(function(shp, i) {
          (test(i) ? hits : misses).push(shp);
        });
      } else {
        hits = lyr.shapes;
      }
      if (lyr.geometry_type == 'point') {
        targetPoints = targetPoints.concat(hits);
      } else {
        targetShapes = targetShapes.concat(hits);
        otherShapes = otherShapes.concat(misses);
      }
    });
    var anchorArg = getAffineAnchor({arcs: dataset.arcs, layers: [{
      geometry_type: 'point', shapes: targetPoints}, {geometry_type: 'polyline',
      shapes: targetShapes}]}, opts);
    transform = getAffineTransform(rotateArg, scaleArg, shiftArg, anchorArg);
    if (targetShapes.length > 0) {
      targetFlags = new Uint8Array(arcs.size());
      otherFlags = new Uint8Array(arcs.size());
      countArcsInShapes(targetShapes, targetFlags);
      if (otherShapes.length > 0) {
        countArcsInShapes(otherShapes, otherFlags);
        applyArrayMask(otherFlags, targetFlags);
        dataset.arcs = duplicateSelectedArcs(otherShapes, arcs, otherFlags);
      }
      dataset.arcs.transformPoints(function(x, y, arcId) {
        if (arcId < targetFlags.length && targetFlags[arcId] > 0) {
          return transform(x, y);
        }
      });
    }
    forEachPoint(targetPoints, function(p) {
      var p2 = transform(p[0], p[1]);
      p[0] = p2[0];
      p[1] = p2[1];
    });
  };

  function getAffineAnchor(dataset, opts) {
    var anchor, bounds;
    if (opts.anchor) {
      anchor = opts.anchor;
    } else {
      // get bounds of selected shapes to calculate center of rotation/scale
      bounds = getDatasetBounds(dataset);
      anchor = [bounds.centerX(), bounds.centerY()];
    }
    return anchor;
  }

  // TODO: handle problems with unprojected datasets
  //   option 1: don't allow affine transformation of unprojected data
  //   option 2: error if transformed data exceeds valid coordinate range
  // source: http://mathworld.wolfram.com/AffineTransformation.html
  function getAffineTransform(rotation, scale, shift, anchor) {
    var angle = rotation * Math.PI / 180;
    var a = scale * Math.cos(angle);
    var b = -scale * Math.sin(angle);
    return function(x, y) {
      var x2 = a * (x - anchor[0]) - b * (y - anchor[1]) + shift[0] + anchor[0];
      var y2 = b * (x - anchor[0]) + a * (y - anchor[1]) + shift[1] + anchor[1];
      return [x2, y2];
    };
  }

  function applyArrayMask(destArr, maskArr) {
    for (var i=0, n=destArr.length; i<n; i++) {
      if (maskArr[i] === 0) destArr[i] = 0;
    }
  }

  function duplicateSelectedArcs(shapes, arcs, flags) {
    var arcCount = 0;
    var vertexCount = 0;
    var data = arcs.getVertexData();
    var xx = [], yy = [], nn = [], map = [], n;
    for (var i=0, len=flags.length; i<len; i++) {
      if (flags[i] > 0) {
        map[i] = arcs.size() + arcCount;
        n = data.nn[i];
        utils.copyElements(data.xx, data.ii[i], xx, vertexCount, n);
        utils.copyElements(data.yy, data.ii[i], yy, vertexCount, n);
        nn.push(n);
        vertexCount += n;
        arcCount++;
      }
    }
    forEachArcId(shapes, function(id) {
      var absId = absArcId(id);
      if (flags[absId] > 0) {
        return id < 0 ? ~map[absId] : map[absId];
      }
    });
    return mergeArcs([arcs, new ArcCollection(nn, xx, yy)]);
  }

  function stringifyVertex(p) {
    return p[0] + ' ' + p[1]; // TODO: round coords by default?
  }

  function stringifyCP(p) {
    return p[2].toFixed(2) + ' ' + p[3].toFixed(2);
  }

  function stringifyLineStringCoords(coords) {
    var p1 = coords[0];
    var d;
    if (coords.length === 0) {
      d = '';
    } else if (coords.length == 2 && coords[0].length == 4 && coords[1].length == 4) {
      // cubic bezier control point coordinates are appended to [x, y] vertex coordinates.
      d = stringifyBezierArc(coords);
    } else {
      d = 'M ' + coords.map(stringifyVertex).join(' ');
    }
    return d;
  }

  function stringifyBezierArc(coords) {
    var p1 = coords[0],
        p2 = coords[1];
    return 'M ' + stringifyVertex(p1) + ' C ' + stringifyCP(p1) + ' ' +
            stringifyCP(p2) + ' ' + stringifyVertex(p2);
  }

  function findArcCenter(p1, p2, degrees) {
    var p3 = [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2], // midpoint betw. p1, p2
        tan = 1 / Math.tan(degrees / 180 * Math.PI / 2),
        cp = getAffineTransform(90, tan, [0, 0], p3)(p2[0], p2[1]);
    return cp;
  }

  function addBezierArcControlPoints(p1, p2, degrees) {
    // source: https://stackoverflow.com/questions/734076/how-to-best-approximate-a-geometrical-arc-with-a-bezier-curve
    var cp = findArcCenter(p1, p2, degrees),
        xc = cp[0],
        yc = cp[1],
        ax = p1[0] - xc,
        ay = p1[1] - yc,
        bx = p2[0] - xc,
        by = p2[1] - yc,
        q1 = ax * ax + ay * ay,
        q2 = q1 + ax * bx + ay * by,
        k2 = 4/3 * (Math.sqrt(2 * q1 * q2) - q2) / (ax * by - ay * bx);

    p1.push(xc + ax - k2 * ay);
    p1.push(yc + ay + k2 * ax);
    p2.push(xc + bx + k2 * by);
    p2.push(yc + by - k2 * bx);
  }

  var SvgPathUtils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    stringifyLineStringCoords: stringifyLineStringCoords,
    findArcCenter: findArcCenter,
    addBezierArcControlPoints: addBezierArcControlPoints
  });

  function parseHatch(str) {
    // examples
    // black 1px red 1px white 1px
    // -45deg #eee 3 rgb(0,0,0) 1
    var splitRxp = /[, ]+(?![^(]*\))/, // don't split rgb(...) colors
        parts = String(str).trim().split(splitRxp),
        rot = parts.length % 2 == 1 ? parseInt(parts.shift()) : 45, // default is 45
        colors = [], widths = [];
    for (var i=0; i<parts.length; i+=2) {
      colors.push(parts[i]);
      widths.push(parseInt(parts[i+1]));
    }
    if (Math.min.apply(null, widths) < 1) return null;
    return {
      colors: colors,
      widths: widths,
      rotation: rot
    };
  }

  function getHashId(str) {
    return ('hash_' + str).replace(/[()# ,_]+/g, '_'); // replace some chars that occur in colors
  }

  // properties: properties object of a path data object (prior to conversion to SVG)
  // symbols: array of definition objects
  //
  function convertFillHatch(properties, symbols) {
    var hatchStr = properties['fill-hatch'];
    var hashId = getHashId(hatchStr);
    var hash = utils.find(symbols, function(o) { return o.id == hashId; });
    delete properties['fill-hatch'];
    if (!hash) {
      hash = makeSVGHatchFill(hatchStr, hashId);
      if (!hash) return;
      symbols.push(hash);
    }
    properties.fill = hash.href;
  }

  function makeSVGHatchFill(hatchStr, id) {
    var hatch = parseHatch(hatchStr);
    if (!hatch) return null;
    var size = utils.sum(hatch.widths);
    var svg = `<pattern id="${id}" patternUnits="userSpaceOnUse" width="${ size }" height="10" patternTransform="rotate(${ hatch.rotation })">`;
    for (var i=0, x=0; i<hatch.widths.length; i++) {
      svg += `<rect x="${ x }" y="0" width="${ hatch.widths[i] }" height="10" fill="${ hatch.colors[i] }"></rect>`;
      x += hatch.widths[i];
    }
    svg += '</pattern>';
    return {
      svg: svg,
      id: id,
      href: `url(#${ id })`
    };
  }

  var SvgHatch = /*#__PURE__*/Object.freeze({
    __proto__: null,
    parseHatch: parseHatch,
    convertFillHatch: convertFillHatch
  });

  // parsing hints for -style command cli options
  // null values indicate the lack of a function for parsing/identifying this property
  // (in which case a heuristic is used for distinguishing a string literal from an expression)
  var stylePropertyTypes = {
    class: 'classname',
    dx: 'measure',
    dy: 'measure',
    fill: 'color',
    'fill-hatch': 'hatch',
    'font-family': null,
    'font-size': null,
    'font-style': null,
    'font-weight': null,
    'label-text': null,  // not a CSS property
    'letter-spacing': 'measure',
    'line-height': 'measure',
    opacity: 'number',
    r: 'number',
    stroke: 'color',
    'stroke-dasharray': 'dasharray',
    'stroke-width': 'number',
    'stroke-opacity': 'number',
    'fill-opacity': 'number',
    'text-anchor': null
  };

  // The -symbols command accepts some options that are not supported by -style
  // (different symbol types accept different combinations of properties...)
  var symbolPropertyTypes = utils.extend({
    type: null,
    length: 'number', // e.g. arrow length
    rotation: 'number',
    curve: 'number', // degrees of arc
    effect: null // e.g. "fade"

  }, stylePropertyTypes);

  var commonProperties = 'class,opacity,stroke,stroke-width,stroke-dasharray,stroke-opacity,fill-opacity'.split(',');

  var propertiesBySymbolType = {
    polygon: utils.arrayToIndex(commonProperties.concat('fill', 'fill-hatch')),
    polyline: utils.arrayToIndex(commonProperties),
    point: utils.arrayToIndex(commonProperties.concat('fill', 'r')),
    label: utils.arrayToIndex(commonProperties.concat(
      'fill,r,font-family,font-size,text-anchor,font-weight,font-style,letter-spacing,dominant-baseline'.split(',')))
  };

  function isSupportedSvgStyleProperty(name) {
    return name in stylePropertyTypes;
  }

  function isSupportedSvgSymbolProperty(name) {
    return name in symbolPropertyTypes;
  }

  function findPropertiesBySymbolGeom(fields, type) {
    var index = propertiesBySymbolType[type] || {};
    return fields.filter(function(name) {
      return name in index;
    });
  }

  // Returns a function that returns an object containing property values for a single record
  // opts: parsed command line options for the -symbols command
  //
  function getSymbolDataAccessor(lyr, opts) {
    var functions = {};
    var properties = [];

    Object.keys(opts).forEach(function(optName) {
      var svgName = optName.replace('_', '-');
      if (!isSupportedSvgSymbolProperty(svgName)) {
        return;
      }
      var strVal = opts[optName].trim();
      functions[svgName] = getSymbolPropertyAccessor(strVal, svgName, lyr);
      properties.push(svgName);
    });

    return function(id) {
      var d = {}, name;
      for (var i=0; i<properties.length; i++) {
        name = properties[i];
        d[name] = functions[name](id);
      }
      return d;
    };
  }

  function getSymbolPropertyAccessor(strVal, svgName, lyr) {
    var typeHint = symbolPropertyTypes[svgName];
    var fields = lyr.data ? lyr.data.getFields() : [];
    var literalVal = null;
    var accessor;

    if (typeHint && fields.indexOf(strVal) === -1) {
      literalVal = parseSvgLiteralValue(strVal, typeHint);
    }
    if (literalVal === null) {
      accessor = parseStyleExpression(strVal, lyr);
    }
    if (!accessor && literalVal === null && !typeHint) {
      // We don't have a type rule for detecting an invalid value, so we're
      // treating the string as a literal value
      literalVal = strVal;
    }
    if (accessor) return accessor;
    if (literalVal !== null) return function(id) {return literalVal;};
    stop('Unexpected value for', svgName + ':', strVal);
  }

  function parseStyleExpression(strVal, lyr) {
    var func;
    try {
      func = compileValueExpression(strVal, lyr, null, {context: getStateVar('defs'), no_warn: true});
      func(0); // check for runtime errors (e.g. undefined variables)
    } catch(e) {
      func = null;
    }
    return func;
  }

  // returns parsed value or null if @strVal is not recognized as a valid literal value
  function parseSvgLiteralValue(strVal, type) {
    var val = null;
    if (type == 'number') {
      // TODO: handle values with units, like "13px"
      val = isSvgNumber(strVal) ? Number(strVal) : null;
    } else if (type == 'color') {
      val = isSvgColor(strVal) ? strVal : null;
    } else if (type == 'classname') {
      val = isSvgClassName(strVal) ? strVal : null;
    } else if (type == 'measure') { // SVG/CSS length (e.g. 12px, 1em, 4)
      val = isSvgMeasure(strVal) ? parseSvgMeasure(strVal) : null;
    } else if (type == 'dasharray') {
      val = isDashArray(strVal) ? strVal : null;
    } else if (type == 'hatch') {
      val = isHatch(strVal) ? strVal : null;
    }
    //  else {
    //   // unknown type -- assume literal value
    //   val = strVal;
    // }
    return val;
  }

  function isHatch(str) {
    return !!parseHatch(str);
  }

  function isDashArray(str) {
    return /^[0-9]+( [0-9]+)*$/.test(str);
  }

  function isSvgClassName(str) {
    return /^( ?[_a-z][-_a-z0-9]*\b)+$/i.test(str);
  }

  function isSvgNumber(o) {
    return utils.isFiniteNumber(o) || utils.isString(o) && /^-?[.0-9]+$/.test(o);
  }

  function isSvgMeasure(o) {
    return utils.isFiniteNumber(o) || utils.isString(o) && /^-?[.0-9]+[a-z]*$/.test(o);
  }

  // Can be a number or a string
  function parseSvgMeasure(str) {
    return utils.isString(str) && /[a-z]/.test(str) ? str : Number(str);
  }

  function isSvgColor(str) {
    return /^[a-z]+$/i.test(str) ||
      /^#[0-9a-f]+$/i.test(str) || /^rgba?\([0-9,. ]+\)$/.test(str);
  }

  var SvgProperties = /*#__PURE__*/Object.freeze({
    __proto__: null,
    isSupportedSvgStyleProperty: isSupportedSvgStyleProperty,
    findPropertiesBySymbolGeom: findPropertiesBySymbolGeom,
    getSymbolDataAccessor: getSymbolDataAccessor,
    getSymbolPropertyAccessor: getSymbolPropertyAccessor,
    isSvgClassName: isSvgClassName,
    isSvgNumber: isSvgNumber,
    isSvgMeasure: isSvgMeasure,
    parseSvgMeasure: parseSvgMeasure,
    isSvgColor: isSvgColor
  });

  var symbolBuilders = {};
  var symbolRenderers = {};

  function getTransform(xy, scale) {
    var str = 'translate(' + xy[0] + ' ' + xy[1] + ')';
    if (scale && scale != 1) {
      str += ' scale(' + scale + ')';
    }
    return str;
  }

  var SvgCommon = /*#__PURE__*/Object.freeze({
    __proto__: null,
    symbolBuilders: symbolBuilders,
    symbolRenderers: symbolRenderers,
    getTransform: getTransform
  });

  function importGeoJSONFeatures(features, opts) {
    opts = opts || {};
    return features.map(function(obj, i) {
      var geom = obj.type == 'Feature' ? obj.geometry : obj; // could be null
      var geomType = geom && geom.type;
      var svgObj = null;
      if (geomType && geom.coordinates) {
        svgObj = geojsonImporters[geomType](geom.coordinates, obj.properties, opts);
      }
      if (!svgObj) {
        return {tag: 'g'}; // empty element
      }
      // TODO: fix error caused by null svgObj (caused by e.g. MultiPolygon with [] coordinates)
      if (obj.properties) {
        applyStyleAttributes(svgObj, geomType, obj.properties);
      }
      if ('id' in obj) {
        if (!svgObj.properties) {
          svgObj.properties = {};
        }
        svgObj.properties.id = (opts.id_prefix || '') + obj.id;
      }
      return svgObj;
    });
  }

  function applyStyleAttributes(svgObj, geomType, rec) {
    var symbolType = GeoJSON.translateGeoJSONType(geomType);
    if (symbolType == 'point' && ('label-text' in rec)) {
      symbolType = 'label';
    }
    var fields = findPropertiesBySymbolGeom(Object.keys(rec), symbolType);
    for (var i=0, n=fields.length; i<n; i++) {
      setAttribute(svgObj, fields[i], rec[fields[i]]);
    }
  }

  function setAttribute(obj, k, v) {
    if (k == 'r') {
      // assigned by importPoint()
    } else {
      if (!obj.properties) obj.properties = {};
      obj.properties[k] = v;
      if (k == 'stroke-dasharray' && v) {
        // kludge for cleaner dashes... make butt the default?
        obj.properties['stroke-linecap'] = 'butt';
      }
    }
  }

  function importMultiPoint(coords, rec, layerOpts) {
    var children = [], p;
    for (var i=0; i<coords.length; i++) {
      p = importPoint(coords[i], rec, layerOpts);
      if (p.tag == 'g' && p.children) {
        children = children.concat(p.children);
      } else {
        children.push(p);
      }
    }
    return children.length > 0 ? {tag: 'g', children: children} : null;
  }

  function importMultiPath(coords, importer) {
    var o;
    for (var i=0; i<coords.length; i++) {
      if (i === 0) {
        o = importer(coords[i]);
      } else {
        o.properties.d += ' ' + importer(coords[i]).properties.d;
      }
    }
    return o;
  }

  function importLineString(coords) {
    var d = stringifyLineStringCoords(coords);
    return {
      tag: 'path',
      properties: {d: d}
    };
  }


  function importMultiLineString(coords) {
    var d = coords.map(stringifyLineStringCoords).join(' ');
    return {
      tag: 'path',
      properties: {d: d}
    };
  }

  // Kludge for applying fill and other styles to a <text> element
  // (for rendering labels in the GUI with the dot in Canvas, not SVG)
  function importStyledLabel(rec, p) {
    var o = importLabel(rec, p);
    applyStyleAttributes(o, 'Point', rec);
    return o;
  }

  function importLabel(rec, p) {
    var line = rec['label-text'] || '';
    var morelines, obj;
    // Accepting \n (two chars) as an alternative to the newline character
    // (sometimes, '\n' is not converted to newline, e.g. in a Makefile)
    // Also accepting <br>
    var newline = /\n|\\n|<br>/i;
    var dx = rec.dx || 0;
    var dy = rec.dy || 0;
    var properties = {
      // using x, y instead of dx, dy for shift, because Illustrator doesn't apply
      // dx value when importing text with text-anchor=end
      y: dy,
      x: dx
    };
    if (p) {
      properties.transform = getTransform(p);
    }
    if (newline.test(line)) {
      morelines = line.split(newline);
      line = morelines.shift();
    }
    obj = {
      tag: 'text',
      value: line,
      properties: properties
    };
    if (morelines) {
      // multiline label
      obj.children = [];
      morelines.forEach(function(line) {
        var tspan = {
          tag: 'tspan',
          value: line,
          properties: {
            x: dx,
            dy: rec['line-height'] || '1.1em'
          }
        };
        obj.children.push(tspan);
      });
    }
    return obj;
  }

  function getEmptySymbol() {
    return {tag: 'g', properties: {}, children: []};
  }


  function renderSymbol(d, x, y) {
    var renderer = symbolRenderers[d.type];
     if (!renderer) {
      stop(d.type ? 'Unknown symbol type: ' + d.type : 'Symbol is missing a type property');
    }
    return renderer(d, x || 0, y || 0);
  }

  // d: svg-symbol object from feature data object
  function importSymbol(d, xy) {
    var renderer;
    if (!d) {
      return getEmptySymbol();
    }
    if (utils.isString(d)) {
      d = JSON.parse(d);
    }
    return {
      tag: 'g',
      properties: {
        'class': 'mapshaper-svg-symbol',
        transform: xy ? getTransform(xy) : null
      },
      children: renderSymbol(d)
    };
  }

  function importPoint(coords, rec, layerOpts) {
    rec = rec || {};
    if ('svg-symbol' in rec) {
      return importSymbol(rec['svg-symbol'], coords);
    }
    return importStandardPoint(coords, rec, layerOpts || {});
  }

  function importPolygon(coords) {
    var d, o;
    for (var i=0; i<coords.length; i++) {
      d = o ? o.properties.d + ' ' : '';
      o = importLineString(coords[i]);
      o.properties.d = d + o.properties.d + ' Z';
    }
    return o;
  }

  function importStandardPoint(coords, rec, layerOpts) {
    var isLabel = 'label-text' in rec;
    var symbolType = layerOpts.point_symbol || '';
    var children = [];
    var halfSize = rec.r || 0; // radius or half of symbol size
    var p;
    // if not a label, create a symbol even without a size
    // (circle radius can be set via CSS)
    if (halfSize > 0 || !isLabel) {
      if (symbolType == 'square') {
        p = {
          tag: 'rect',
          properties: {
            x: coords[0] - halfSize,
            y: coords[1] - halfSize,
            width: halfSize * 2,
            height: halfSize * 2
          }};
      } else { // default is circle
        p = {
          tag: 'circle',
          properties: {
            cx: coords[0],
            cy: coords[1]
          }};
        if (halfSize > 0) {
          p.properties.r = halfSize;
        }
      }
      children.push(p);
    }
    if (isLabel) {
      children.push(importLabel(rec, coords));
    }
    return children.length > 1 ? {tag: 'g', children: children} : children[0];
  }

  var geojsonImporters = {
    Point: importPoint,
    Polygon: importPolygon,
    LineString: importLineString,
    MultiPoint: function(coords, rec, opts) {
      return importMultiPoint(coords, rec, opts);
    },
    MultiLineString: function(coords) {
      return importMultiPath(coords, importLineString);
    },
    MultiPolygon: function(coords) {
      return importMultiPath(coords, importPolygon);
    }
  };

  var GeojsonToSvg = /*#__PURE__*/Object.freeze({
    __proto__: null,
    importGeoJSONFeatures: importGeoJSONFeatures,
    applyStyleAttributes: applyStyleAttributes,
    importLineString: importLineString,
    importMultiLineString: importMultiLineString,
    importStyledLabel: importStyledLabel,
    importLabel: importLabel,
    renderSymbol: renderSymbol,
    importSymbol: importSymbol,
    importPoint: importPoint,
    importPolygon: importPolygon
  });

  /* require mapshaper-rectangle, mapshaper-furniture */

  cmd.frame = function(catalog, source, opts) {
    var size, bounds, tmp, dataset;
    if (+opts.width > 0 === false && +opts.pixels > 0 === false) {
      stop("Missing a width or area");
    }
    if (opts.width && opts.height) {
      opts = utils.extend({}, opts);
      // Height is a string containing either a number or a
      //   comma-sep. pair of numbers (range); here we convert height to
      //   an aspect-ratio parameter for the rectangle() function
      opts.aspect_ratio = getAspectRatioArg(opts.width, opts.height);
      // TODO: currently returns max,min aspect ratio, should return in min,max order
      // (rectangle() function should handle max,min argument correctly now anyway)
    }
    tmp = cmd.rectangle(source, opts);
    bounds = getDatasetBounds(tmp);
    if (probablyDecimalDegreeBounds(bounds)) {
      stop('Frames require projected, not geographical coordinates');
    } else if (!getDatasetCRS(tmp)) {
      message('Warning: missing projection data. Assuming coordinates are meters and k (scale factor) is 1');
    }
    size = getFrameSize(bounds, opts);
    if (size[0] > 0 === false) {
      stop('Missing a valid frame width');
    }
    if (size[1] > 0 === false) {
      stop('Missing a valid frame height');
    }
    dataset = {info: {}, layers:[{
      name: opts.name || 'frame',
      data: new DataTable([{
        width: size[0],
        height: size[1],
        bbox: bounds.toArray(),
        type: 'frame'
      }])
    }]};
    catalog.addDataset(dataset);
  };

  // Convert width and height args to aspect ratio arg for the rectangle() function
  function getAspectRatioArg(widthArg, heightArg) {
    // heightArg is a string containing either a number or a
    // comma-sep. pair of numbers (range);
    return heightArg.split(',').map(function(opt) {
      var height = Number(opt),
          width = Number(widthArg);
      if (!opt) return '';
      return width / height;
    }).reverse().join(',');
  }

  function getFrameSize(bounds, opts) {
    var aspectRatio = bounds.width() / bounds.height();
    var height, width;
    if (opts.pixels) {
      width = Math.sqrt(+opts.pixels * aspectRatio);
    } else {
      width = +opts.width;
    }
    height = width / aspectRatio;
    return [Math.round(width), Math.round(height)];
  }

  function getDatasetDisplayBounds(dataset) {
    var frameLyr = findFrameLayerInDataset(dataset);
    if (frameLyr) {
      // TODO: check for coordinate issues (non-intersection with other layers, etc)
      return getFrameLayerBounds(frameLyr);
    }
    return getDatasetBounds(dataset);
  }

  // @lyr dataset layer
  function isFrameLayer(lyr) {
    return getFurnitureLayerType(lyr) == 'frame';
  }

  function findFrameLayerInDataset(dataset) {
    return utils.find(dataset.layers, function(lyr) {
      return isFrameLayer(lyr);
    });
  }

  function findFrameDataset(catalog) {
    var target = utils.find(catalog.getLayers(), function(o) {
      return isFrameLayer(o.layer);
    });
    return target ? target.dataset : null;
  }

  function findFrameLayer(catalog) {
    var target = utils.find(catalog.getLayers(), function(o) {
      return isFrameLayer(o.layer);
    });
    return target && target.layer || null;
  }

  function getFrameLayerBounds(lyr) {
    return new Bounds(getFurnitureLayerData(lyr).bbox);
  }


  // @data frame data, including crs property if available
  // Returns a single value: the ratio or
  function getMapFrameMetersPerPixel(data) {
    var bounds = new Bounds(data.bbox);
    var k, toMeters, metersPerPixel;
    if (data.crs) {
      // TODO: handle CRS without inverse projections
      // scale factor is the ratio of coordinate distance to true distance at a point
      k = getScaleFactorAtXY(bounds.centerX(), bounds.centerY(), data.crs);
      toMeters = data.crs.to_meter;
    } else {
      // Assuming coordinates are meters and k is 1 (not safe)
      // A warning should be displayed when relevant furniture element is created
      k = 1;
      toMeters = 1;
    }
    metersPerPixel = bounds.width() / k * toMeters / data.width;
    return metersPerPixel;
  }

  furnitureRenderers.frame = function(d) {
    var lineWidth = 1,
        // inset stroke by half of line width
        off = lineWidth / 2,
        obj = importPolygon([[[off, off], [off, d.height - off],
          [d.width - off, d.height - off],
          [d.width - off, off], [off, off]]]);
    utils.extend(obj.properties, {
        fill: 'none',
        stroke: d.stroke || 'black',
        'stroke-width': d['stroke-width'] || lineWidth
    });
    return [obj];
  };

  var Frame = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getAspectRatioArg: getAspectRatioArg,
    getFrameSize: getFrameSize,
    findFrameLayerInDataset: findFrameLayerInDataset,
    findFrameDataset: findFrameDataset,
    findFrameLayer: findFrameLayer,
    getFrameLayerBounds: getFrameLayerBounds,
    getMapFrameMetersPerPixel: getMapFrameMetersPerPixel
  });

  function transformDatasetToPixels(dataset, opts) {
    var frameLyr = findFrameLayerInDataset(dataset);
    var bounds, bounds2, fwd, frameData;
    if (frameLyr) {
      // TODO: handle options like width, height margin when a frame is present
      // TODO: check that aspect ratios match
      frameData = getFurnitureLayerData(frameLyr);
      bounds = new Bounds(frameData.bbox);
      bounds2 = new Bounds(0, 0, frameData.width, frameData.height);
    } else {
      bounds = getDatasetBounds(dataset);
      bounds2 = calcOutputSizeInPixels(bounds, opts);
    }
    fwd = bounds.getTransform(bounds2, opts.invert_y);
    transformPoints(dataset, function(x, y) {
      return fwd.transform(x, y);
    });
    return [Math.round(bounds2.width()), Math.round(bounds2.height()) || 1];
  }

  function parseMarginOption(opt) {
    var str = utils.isNumber(opt) ? String(opt) : opt || '';
    var margins = str.trim().split(/[, ] */);
    if (margins.length == 1) margins.push(margins[0]);
    if (margins.length == 2) margins.push(margins[0], margins[1]);
    if (margins.length == 3) margins.push(margins[2]);
    return margins.map(function(str) {
      var px = parseFloat(str);
      return isNaN(px) ? 1 : px; // 1 is default
    });
  }

  // bounds: Bounds object containing bounds of content in geographic coordinates
  // returns Bounds object containing bounds of pixel output
  // side effect: bounds param is modified to match the output frame
  function calcOutputSizeInPixels(bounds, opts) {
    var padX = 0,
        padY = 0,
        width = bounds.width(),
        height = bounds.height(),
        margins = parseMarginOption(opts.margin),
        marginX = margins[0] + margins[2],
        marginY = margins[1] + margins[3],
        // TODO: add option to tweak alignment of content when both width and height are given
        wx = 0.5, // how padding is distributed horizontally (0: left aligned, 0.5: centered, 1: right aligned)
        wy = 0.5, // vertical padding distribution
        widthPx, heightPx, size, kx, ky;

    if (opts.svg_scale > 0) {
      // alternative to using a fixed width (e.g. when generating multiple files
      // at a consistent geographic scale)
      widthPx = width / opts.svg_scale + marginX;
      heightPx = 0;
    } else if (+opts.pixels) {
      size = getFrameSize(bounds, opts);
      widthPx = size[0];
      heightPx = size[1];
    } else {
      heightPx = opts.height || 0;
      widthPx = opts.width || (heightPx > 0 ? 0 : 800); // 800 is default width
    }

    if (heightPx > 0) {
      // vertical meters per pixel to fit height param
      ky = (height || width || 1) / (heightPx - marginY);
    }
    if (widthPx > 0) {
      // horizontal meters per pixel to fit width param
      kx = (width || height || 1) / (widthPx - marginX);
    }

    if (!widthPx) { // heightPx and ky are defined, set width to match
      kx = ky;
      widthPx = width > 0 ? marginX + width / kx : heightPx; // export square graphic if content has 0 width (reconsider this?)
    } else if (!heightPx) { // widthPx and kx are set, set height to match
      ky = kx;
      heightPx = height > 0 ? marginY + height / ky : widthPx;
      // limit height if max_height is defined
      if (opts.max_height > 0 && heightPx > opts.max_height) {
        ky = kx * heightPx / opts.max_height;
        heightPx = opts.max_height;
      }
    }

    if (kx > ky) { // content is wide -- need to pad vertically
      ky = kx;
      padY = ky * (heightPx - marginY) - height;
    } else if (ky > kx) { // content is tall -- need to pad horizontally
      kx = ky;
      padX = kx * (widthPx - marginX) - width;
    }

    bounds.padBounds(
      margins[0] * kx + padX * wx,
      margins[1] * ky + padY * wy,
      margins[2] * kx + padX * (1 - wx),
      margins[3] * ky + padY * (1 - wy));

    if (!(widthPx > 0 && heightPx > 0)) {
      error("Missing valid height and width parameters");
    }
    if (!(kx === ky && kx > 0)) {
      error("Missing valid margin parameters");
    }

    return new Bounds(0, 0, widthPx, heightPx);
  }

  var PixelTransform = /*#__PURE__*/Object.freeze({
    __proto__: null,
    transformDatasetToPixels: transformDatasetToPixels,
    parseMarginOption: parseMarginOption,
    calcOutputSizeInPixels: calcOutputSizeInPixels
  });

  function stringify(obj) {
    var svg, joinStr;
    if (!obj || !obj.tag) return '';
    svg = '<' + obj.tag;
    // w.s. is significant in text elements
    if (obj.properties) {
      svg += stringifyProperties(obj.properties);
    }
    if (obj.children || obj.value) {
      joinStr = obj.tag == 'text' || obj.tag == 'tspan' ? '' : '\n';
      svg += '>' + joinStr;
      if (obj.value) {
        svg += obj.value;
      }
      if (obj.children) {
        svg += obj.children.map(stringify).join(joinStr);
      }
      svg += joinStr + '</' + obj.tag + '>';
    } else {
      svg += '/>';
    }
    return svg;
  }

  // Replace some chars with XML "predefined entities" to avoid parsing errors
  // https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Predefined_entities_in_XML
  var rxp = /[&<>"']/g,
      map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;'
      };
  function stringEscape(s) {
    return String(s).replace(rxp, function(s) {
      return map[s];
    });
  }

  function stringifyProperties(o) {
    return Object.keys(o).reduce(function(memo, key) {
      var val = o[key],
          strval;
      if (!val && val !== 0) return memo; // omit undefined / empty / null values
      strval = utils.isString(val) ? val : JSON.stringify(val);
      if (key == 'href') {
        key = 'xlink:href';
      }
      return memo + ' ' + key + '="' + stringEscape(strval) + '"';
    }, '');
  }

  var SvgStringify = /*#__PURE__*/Object.freeze({
    __proto__: null,
    stringify: stringify,
    stringEscape: stringEscape,
    stringifyProperties: stringifyProperties
  });

  // public domain implementation
  // source: https://github.com/jbt/js-crypto
  function sha1(str1){
    for (
      var blockstart = 0,
        i = 0,
        W = [],
        A, B, C, D, F, G,
        H = [A=0x67452301, B=0xEFCDAB89, ~A, ~B, 0xC3D2E1F0],
        word_array = [],
        temp2,
        s = unescape(encodeURI(str1)),
        str_len = s.length;

      i <= str_len;
    ){
      word_array[i >> 2] |= (s.charCodeAt(i)||128) << (8 * (3 - i++ % 4));
    }
    word_array[temp2 = ((str_len + 8) >> 2) | 15] = str_len << 3;

    for (; blockstart <= temp2; blockstart += 16) {
      A = H; i = 0;

      for (; i < 80;
        A = [[
          (G = ((s = A[0]) << 5 | s >>> 27) + A[4] + (W[i] = (i<16) ? ~~word_array[blockstart + i] : G << 1 | G >>> 31) + 1518500249) + ((B = A[1]) & (C = A[2]) | ~B & (D = A[3])),
          F = G + (B ^ C ^ D) + 341275144,
          G + (B & C | B & D | C & D) + 882459459,
          F + 1535694389
        ][0|((i++) / 20)] | 0, s, B << 30 | B >>> 2, C, D]
      ) {
        G = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
      }

      for(i = 5; i; ) H[--i] = H[i] + A[i] | 0;
    }

    for(str1 = ''; i < 40; )str1 += (H[i >> 3] >> (7 - i++ % 8) * 4 & 15).toString(16);
    return str1;
  }

  // convert object properties to definitions for images and hatch fills
  function convertPropertiesToDefinitions(obj, symbols) {
    procNode(obj);

    function procNode(obj) {
      if (obj.tag == 'path' && obj.properties['fill-hatch']) {
        convertFillHatch(obj.properties, symbols);
      }
      if (obj.tag == 'image' && !runningInBrowser()) {
        // Same-origin policy prevents embedding images in the web UI
        if (/\.svg/.test(obj.properties.href || '')) {
          convertSvgImage(obj, symbols);
        }
      } else if (obj.children) {
        obj.children.forEach(procNode);
      }
    }
  }

  function convertSvgImage(obj, symbols) {
    var href = obj.properties.href;
    var item = utils.find(symbols, function(item) {return item.href == href;});
    if (!item) {
      item = {
        href: href,
        id: urlToId(href) // generating id from href, to try to support multiple inline svgs on page
      };
      item.svg = convertSvg(getSvgFile(href), item.id) + '\n';
      symbols.push(item);
    }
    obj.tag = 'use';
    obj.properties.href = '#' + item.id;
  }

  // TODO: download SVG files asynchronously
  function getSvgFile(href) {
    var res, content, fs;
    if (href.indexOf('http') === 0) {
      res  = require('sync-request')('GET', href, {timeout: 1000});
      content = res.getBody().toString();
    } else if (require('fs').existsSync(href)) { // assume href is a relative path
      content = require('fs').readFileSync(href, 'utf8');
    } else {
      stop("Invalid SVG location:", href);
    }
    return content;
  }

  /*
  function convertSvgToSymbol(svg, id) {
    svg = svg.replace(/[^]*<svg/, '<svg');
    // Remove inkscape tags (there were errors caused when namespaces were
    // stripped when converting <svg> to <symbol> ... this may be futile, may
    // have to go back to embedding entire SVG document instead of using symbols)
    svg = svg.replace(/<metadata[^]*?metadata>/, '');
    svg = svg.replace(/<sodipodi[^>]*>/, '');
    // convert <svg> to <symbol>
    svg = svg.replace(/^<svg[^>]*>/, function(a) {
      var viewBox = a.match(/viewBox=".*?"/)[0];
      return '<symbol id="' + id + '" ' + viewBox + '>';
    });
    svg = svg.replace('svg>', 'symbol>');
    return svg;
  }
  */

  function convertSvg(svg, id) {
    // Remove stuff before <svg> tag
    svg = svg.replace(/[^]*<svg/, '<svg');
    return svg.replace(/^<svg[^>]*>/, function(a) {
      // set id property of <svg>
      a = a.replace(/ id="[^"]*"/, '');
      a = a.replace(/<svg/, '<svg id="' + id + '"');
      return a;
    });
  }

  function urlToId(url) {
    return sha1(url).substr(0, 12);
  }

  //
  //
  function exportSVG(dataset, opts) {
    var template = '<?xml version="1.0"?>\n<svg %s ' +
      'version="1.2" baseProfile="tiny" width="%d" height="%d" viewBox="%s %s %s %s" stroke-linecap="round" stroke-linejoin="round">\n%s\n</svg>';
    var namespace = 'xmlns="http://www.w3.org/2000/svg"';
    var symbols = [];
    var size, svg;

    // TODO: consider moving this logic to mapshaper-export.js
    if (opts.final) {
      if (dataset.arcs) dataset.arcs.flatten();
    } else {
      dataset = copyDataset(dataset); // Modify a copy of the dataset
    }
    // invert_y setting for screen coordinates and geojson polygon generation
    utils.extend(opts, {invert_y: true});
    size = transformCoordsForSVG(dataset, opts);

    // error if one or more svg_data fields are not present in any layers
    if (opts.svg_data) validateSvgDataFields(dataset.layers, opts.svg_data);

    svg = dataset.layers.map(function(lyr) {
      var obj = exportLayerForSVG(lyr, dataset, opts);
      convertPropertiesToDefinitions(obj, symbols);
      return stringify(obj);
    }).join('\n');
    if (symbols.length > 0) {
      namespace += ' xmlns:xlink="http://www.w3.org/1999/xlink"';
      svg = '<defs>\n' + utils.pluck(symbols, 'svg').join('') + '</defs>\n' + svg;
    }
    svg = utils.format(template, namespace, size[0], size[1], 0, 0, size[0], size[1], svg);
    return [{
      content: svg,
      filename: opts.file || getOutputFileBase(dataset) + '.svg'
    }];
  }

  function transformCoordsForSVG(dataset, opts) {
    var size = transformDatasetToPixels(dataset, opts);
    var precision = opts.precision || 0.0001;
    setCoordinatePrecision(dataset, precision);
    return size;
  }

  function exportLayerForSVG(lyr, dataset, opts) {
    var layerObj = getEmptyLayerForSVG(lyr, opts);
    if (layerHasFurniture(lyr)) {
      layerObj.children = exportFurnitureForSVG(lyr, dataset, opts);
    } else {
      layerObj.children = exportSymbolsForSVG(lyr, dataset, opts);
    }
    return layerObj;
  }

  function exportFurnitureForSVG(lyr, dataset, opts) {
    var frameLyr = findFrameLayerInDataset(dataset);
    var frameData;
    if (!frameLyr) return [];
    frameData = getFurnitureLayerData(frameLyr);
    frameData.crs = getDatasetCRS(dataset); // required by e.g. scalebar
    return importFurniture(getFurnitureLayerData(lyr), frameData);
  }

  function exportSymbolsForSVG(lyr, dataset, opts) {
    // TODO: convert geojson features one at a time
    var d = utils.defaults({layers: [lyr]}, dataset);
    var geojson = exportDatasetAsGeoJSON(d, opts);
    var features = geojson.features || geojson.geometries || (geojson.type ? [geojson] : []);
    var children = importGeoJSONFeatures(features, opts);
    var data;
    if (opts.svg_data && lyr.data) {
      addDataAttributesToSVG(children, lyr.data, opts.svg_data);
    }
    return children;
  }

  function validateSvgDataFields(layers, fieldsArg) {
    var missingFields = fieldsArg.reduce(function(memo, field) {
      if (!fieldExists(layers, field)) {
        memo.push(field);
      }
      return memo;
    }, []);

    if (missingFields.length && missingFields.indexOf('*') == -1) {
      stop("Missing data field(s):", missingFields.join(', '));
    }

    function fieldExists(layers, field) {
      return utils.some(layers, function(lyr) {
        return lyr.data && lyr.data.fieldExists(field) || false;
      });
    }
  }

  function addDataAttributesToSVG(children, table, fieldsArg) {
    var allFields = table.getFields();
    var dataFields = fieldsArg.indexOf('*') > -1 ? allFields.concat() : fieldsArg;
    var missingFields = utils.difference(dataFields, allFields);
    if (missingFields.length > 0) {
      dataFields = utils.difference(dataFields, missingFields);
      // stop("Missing data field(s):", missingFields.join(', '));
    }
    var records = table.getRecords();
    var data = exportDataAttributesForSVG(records, dataFields);
    if (children.length != data.length) {
      error("Mismatch between number of SVG symbols and data attributes");
    }
    children.forEach(function(child, i) {
      utils.extend(child.properties || {}, data[i]);
    });
  }

  function exportDataAttributesForSVG(records, fields) {
    var validRxp = /^[a-z_][a-z0-9_-]*$/i;
    var invalidRxp = /^xml/;
    var validFields = fields.filter(function(name) {
      return validRxp.test(name) && !invalidRxp.test(name);
    });
    var invalidFields = utils.difference(fields, validFields);
    if (invalidFields.length > 0) {
      message("Unable to add data-* attributes for field(s):", invalidFields.join(', '));
      message("data-* names should match pattern [a-z_][a-z0-9_-]*");
    }
    return records.map(function(rec) {
      var obj = {};
      for (var i=0; i<validFields.length; i++) {
        obj['data-' + validFields[i].toLowerCase()] =
          validDataAttributeValue(rec[validFields[i]]);
      }
      return obj;
    });
  }

  function validDataAttributeValue(val) {
    // TODO: consider converting some falsy values to empty strings
    // (e.g. null, undefined, NaN)
    return String(val);
  }

  // internal.validDataAttributeNames = function(names) {
  //   return utils.uniqifyNames(names.map(internal.validDataAttributeName));
  // };

  // There are restrictions on data-* attribute names
  // This function modifies names so they can be used
  // See: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/data-*
  // Mapshaper's rules are a bit more restrictive than the spec -- e.g.
  //   the first character after "data-" is restricted to "_" | [a-z]
  //
  // internal.validDataAttributeName = function(name) {
  //   name = name.toLowerCase();
  //   name = name.replace(/[^a-z0-9_-]/g, ''); // accept only these letters
  //   if (/^([0-9-]|xml)/.test(name) || name === '') {
  //     name = '_' + name; // prepend underscore if needed
  //   }
  //   return name;
  // };

  function getEmptyLayerForSVG(lyr, opts) {
    var layerObj = {
      tag: 'g',
      properties: {id: (opts.id_prefix || '') + lyr.name},
      children: []
    };

    // override default black fill for layers that might have open paths
    if (lyr.geometry_type == 'polyline' || layerHasSvgSymbols(lyr)) {
      layerObj.properties.fill = 'none';
    }

    // add default display properties to line layers
    // (these are overridden by feature-level styles set via -style)
    if (lyr.geometry_type == 'polyline') {
      layerObj.properties.stroke = 'black';
      layerObj.properties['stroke-width'] = 1;
    }


    // add default text properties to layers with labels
    if (layerHasLabels(lyr) || layerHasSvgSymbols(lyr) || layerHasFurniture(lyr)) {
      layerObj.properties['font-family'] = 'sans-serif';
      layerObj.properties['font-size'] = '12';
      layerObj.properties['text-anchor'] = 'middle';
    }

    return layerObj;
  }

  function layerHasSvgSymbols(lyr) {
    return lyr.geometry_type == 'point' && lyr.data && lyr.data.fieldExists('svg-symbol');
  }

  function layerHasLabels(lyr) {
    var hasLabels = lyr.geometry_type == 'point' && lyr.data && lyr.data.fieldExists('label-text');
    //if (hasLabels && internal.findMaxPartCount(lyr.shapes) > 1) {
    //  console.error('Multi-point labels are not fully supported');
    //}
    return hasLabels;
  }

  var Svg = /*#__PURE__*/Object.freeze({
    __proto__: null,
    exportSVG: exportSVG,
    exportLayerForSVG: exportLayerForSVG,
    validateSvgDataFields: validateSvgDataFields,
    exportDataAttributesForSVG: exportDataAttributesForSVG,
    getEmptyLayerForSVG: getEmptyLayerForSVG,
    layerHasSvgSymbols: layerHasSvgSymbols,
    layerHasLabels: layerHasLabels
  });

  function exportDbf(dataset, opts) {
    return dataset.layers.reduce(function(files, lyr) {
      if (lyr.data) {
        files = files.concat(exportDbfFile(lyr, dataset, opts));
      }
      return files;
    }, []);
  }

  function exportDbfFile(lyr, dataset, opts) {
    var data = lyr.data,
        buf;
    // create empty data table if missing a table or table is being cut out
    if (!data || opts.cut_table || opts.drop_table) {
      data = new DataTable(lyr.shapes ? lyr.shapes.length : 0);
    }
    // dbfs should have at least one column; add id field if none
    if (data.isEmpty()) {
      data.addIdField();
    }
    if (data.exportAsDbf) {
      buf = data.exportAsDbf(opts);
    } else {
      buf = Dbf.exportRecords(data.getRecords(), opts.encoding, opts.field_order);
    }
    if (utils.isInteger(opts.ldid)) {
      new Uint8Array(buf)[29] = opts.ldid; // set language driver id
    }
    // TODO: also export .cpg page
    return [{
      content: buf,
      filename: lyr.name + '.dbf'
    }];
  }

  // Generate output content from a dataset object
  function exportDelim(dataset, opts) {
    var delim = getExportDelimiter(dataset.info, opts),
        ext = getDelimFileExtension(delim, opts);
    return dataset.layers.reduce(function(arr, lyr) {
      if (lyr.data){
        arr.push({
          // TODO: consider supporting encoding= option
          content: exportLayerAsDSV(lyr, delim, opts),
          filename: (lyr.name || 'output') + '.' + ext
        });
      }
      return arr;
    }, []);
  }

  function exportLayerAsDSV(lyr, delim, optsArg) {
    var opts = optsArg || {};
    var encoding = opts.encoding || 'utf8';
    var records = lyr.data.getRecords();
    var fields = findFieldNames(records, opts.field_order);
    // exporting utf8 and ascii text as string by default (for now)
    var exportAsString = encodingIsUtf8(encoding) && !opts.to_buffer &&
        (records.length < 10000 || opts.to_string);
    if (exportAsString) {
      return exportRecordsAsString(fields, records, delim);
    } else {
      return exportRecordsAsBuffer(fields, records, delim, encoding);
    }
  }

  function exportRecordsAsString(fields, records, delim) {
    var formatRow = getDelimRowFormatter(fields, delim);
    var header = formatDelimHeader(fields, delim);
    if (!records.length) return header;
    return header + '\n' + records.map(formatRow).join('\n');
  }

  function exportRecordsAsBuffer(fields, records, delim, encoding) {
    var formatRow = getDelimRowFormatter(fields, delim);
    var str = formatDelimHeader(fields, delim);
    var buffers = [encodeString(str, encoding)];
    var tmp = [];
    var n = records.length;
    var i = 0;
    while (i < n) {
      tmp.push(formatRow(records[i]));
      i++;
      if (i % 1000 === 0 || i == n) {
        str = '\n' + tmp.join('\n');
        tmp = [];
        buffers.push(encodeString(str, encoding));
      }
    }
    return Buffer.concat(buffers);
  }

  function formatDelimHeader(fields, delim) {
    var formatValue = getDelimValueFormatter(delim);
    return fields.map(formatValue).join(delim);
  }

  function getDelimRowFormatter(fields, delim) {
    var formatValue = getDelimValueFormatter(delim);
    return function(rec) {
      return fields.map(function(f) {
        return formatValue(rec[f]);
      }).join(delim);
    };
  }

  function getDelimValueFormatter(delim) {
    var dquoteRxp =  new RegExp('["\n\r' + delim + ']');
    function formatString(s) {
      if (dquoteRxp.test(s)) {
        s = '"' + s.replace(/"/g, '""') + '"';
      }
      return s;
    }
    return function(val) {
      var s;
      if (val == null) {
        s = '';
      } else if (utils.isString(val)) {
        s = formatString(val);
      } else if (utils.isNumber(val)) {
        s = val + '';
      } else if (utils.isObject(val)) {
        s = formatString(JSON.stringify(val));
      } else {
        s = val + '';
      }
      return s;
    };
  }

  function getExportDelimiter(info, opts) {
    var delim = ','; // default
    var outputExt = opts.file ? getFileExtension(opts.file) : '';
    if (opts.delimiter) {
      delim = opts.delimiter;
    } else if (outputExt == 'tsv') {
      delim = '\t';
    } else if (outputExt == 'csv') {
      delim = ',';
    } else if (info.input_delimiter) {
      delim = info.input_delimiter;
    }
    return delim;
  }

  // If output filename is not specified, use the delimiter char to pick
  // an extension.
  function getDelimFileExtension(delim, opts) {
    var ext = 'txt'; // default
    if (opts.file) {
      ext = getFileExtension(opts.file);
    } else if (delim == '\t') {
      ext = 'tsv';
    } else if (delim == ',') {
      ext = 'csv';
    }
    return ext;
  }

  var DelimExport = /*#__PURE__*/Object.freeze({
    __proto__: null,
    exportDelim: exportDelim,
    exportLayerAsDSV: exportLayerAsDSV,
    getDelimValueFormatter: getDelimValueFormatter
  });

  // Convert a dataset to Shapefile files
  function exportShapefile(dataset, opts) {
    return dataset.layers.reduce(function(files, lyr) {
      var prj = exportPrjFile(lyr, dataset);
      files = files.concat(exportShpAndShxFiles(lyr, dataset, opts));
      files = files.concat(exportDbfFile(lyr, dataset, opts));
      if (prj) files.push(prj);
      return files;
    }, []);
  }

  function exportPrjFile(lyr, dataset) {
    var info = dataset.info || {};
    var prj = info.prj;
    if (!prj) {
      try {
        prj = crsToPrj(getDatasetCRS(dataset));
      } catch(e) {}
    }
    if (!prj) {
      message("Unable to generate .prj file for", lyr.name + '.shp');
    }
    return prj ? {
      content: prj,
      filename: lyr.name + '.prj'
    } : null;
  }

  function getShapefileExportType(lyr) {
    var type = lyr.geometry_type;
    var shpType;
    if (type == 'point') {
      shpType = findMaxPartCount(lyr.shapes || []) <= 1 ? ShpType.POINT : ShpType.MULTIPOINT;
    } else if (type == 'polygon') {
      shpType = ShpType.POLYGON;
    } else if (type == 'polyline') {
      shpType = ShpType.POLYLINE;
    } else {
      shpType = ShpType.NULL;
    }
    return shpType;
  }

  function exportShpAndShxFiles(layer, dataset, opts) {
    var shapes = layer.shapes || utils.initializeArray(new Array(getFeatureCount(layer)), null);
    var bounds = new Bounds();
    var shpType = getShapefileExportType(layer);
    var fileBytes = 100;
    var shxBytes = 100 + shapes.length * 8;
    var shxBin = new BinArray(shxBytes).bigEndian().position(100); // jump to record section
    var shpBin;

    // TODO: consider writing records to an expanding buffer instead of generating
    // individual buffers for each record (for large point datasets,
    // creating millions of buffers impacts performance significantly)
    var shapeBuffers = shapes.map(function(shape, i) {
      var pathData = exportPathData(shape, dataset.arcs, layer.geometry_type);
      var rec = exportShpRecord(pathData, i+1, shpType);
      var recBytes = rec.buffer.byteLength;

      // add shx record
      shxBin.writeInt32(fileBytes / 2); // record offset in 16-bit words
      // alternative to below: shxBin.writeBuffer(rec.buffer, 4, 4)
      shxBin.writeInt32(recBytes / 2 - 4); // record content length in 16-bit words

      fileBytes += recBytes;
      if (rec.bounds) bounds.mergeBounds(rec.bounds);
      return rec.buffer;
    });

    // write .shp header section
    shpBin = new BinArray(fileBytes, false)
      .writeInt32(9994)
      .skipBytes(5 * 4)
      .writeInt32(fileBytes / 2)
      .littleEndian()
      .writeInt32(1000)
      .writeInt32(shpType);

    if (bounds.hasBounds()) {
      shpBin.writeFloat64(bounds.xmin || 0) // using 0s as empty value
        .writeFloat64(bounds.ymin || 0)
        .writeFloat64(bounds.xmax || 0)
        .writeFloat64(bounds.ymax || 0);
    } else {
      // no bounds -- assume no shapes or all null shapes -- using 0s as bbox
      shpBin.skipBytes(4 * 8);
    }
    shpBin.skipBytes(4 * 8); // skip Z & M type bounding boxes;

    // write records section of .shp
    shapeBuffers.forEach(function(buf) {
      shpBin.writeBuffer(buf);
    });

    // write .shx header
    shxBin.position(0)
      .writeBuffer(shpBin.buffer(), 100) // copy .shp header to .shx
      .position(24) // substitute shx file size for shp file size
      .writeInt32(shxBytes / 2);

    return [{
        content: shpBin.buffer(),
        filename: layer.name + ".shp"
      }, {
        content: shxBin.buffer(),
        filename: layer.name + ".shx"
      }];
  }

  // Returns an ArrayBuffer containing a Shapefile record for one shape
  //   and the bounding box of the shape.
  // TODO: remove collapsed rings, convert to null shape if necessary
  //
  function exportShpRecord(data, id, shpType) {
    var multiPartType = ShpType.isMultiPartType(shpType),
        singlePointType = !multiPartType && !ShpType.isMultiPointType(shpType),
        isNull = data.pointCount > 0 === false,
        bounds = isNull ? null : data.bounds,
        bin = null;

    if (isNull) {
      bin = new BinArray(12, false)
        .writeInt32(id)
        .writeInt32(2)
        .littleEndian()
        .writeInt32(0);

    } else if (singlePointType) {
      bin = new BinArray(28, false)
        .writeInt32(id)
        .writeInt32(10)
        .littleEndian()
        .writeInt32(shpType)
        .writeFloat64(data.pathData[0].points[0][0])
        .writeFloat64(data.pathData[0].points[0][1]);

    } else {
      var partIndexIdx = 52,
          pointsIdx = multiPartType ? partIndexIdx + 4 * data.pathCount : 48,
          recordBytes = pointsIdx + 16 * data.pointCount,
          pointCount = 0;

      bin = new BinArray(recordBytes, false)
        .writeInt32(id)
        .writeInt32((recordBytes - 8) / 2)
        .littleEndian()
        .writeInt32(shpType)
        .writeFloat64(bounds.xmin)
        .writeFloat64(bounds.ymin)
        .writeFloat64(bounds.xmax)
        .writeFloat64(bounds.ymax);

      if (multiPartType) {
        bin.writeInt32(data.pathCount);
      }

      bin.writeInt32(data.pointCount);
      data.pathData.forEach(function(path, i) {
        if (multiPartType) {
          bin.position(partIndexIdx + i * 4).writeInt32(pointCount);
        }
        bin.position(pointsIdx + pointCount * 16);
        for (var j=0, len=path.points.length; j<len; j++) {
          bin.writeFloat64(path.points[j][0]);
          bin.writeFloat64(path.points[j][1]);
        }
        pointCount += j;
      });
      if (data.pointCount != pointCount) {
        error("Shp record point count mismatch; pointCount:",
            pointCount, "data.pointCount:", data.pointCount);
      }
    }

    return {bounds: bounds, buffer: bin.buffer()};
  }

  var ShpExport = /*#__PURE__*/Object.freeze({
    __proto__: null,
    exportShapefile: exportShapefile
  });

  function getPresimplifyFunction(width) {
    var quanta = 10000,  // enough resolution for pixel-level detail at 1000px width and 10x zoom
        k = quanta / width;
    return function(z) {
      // could substitute a rounding function with decimal precision
      return z === Infinity ? 0 : Math.ceil(z * k);
    };
  }

  cmd.explodeFeatures = function(lyr, arcs, opts) {
    var properties = lyr.data ? lyr.data.getRecords() : null,
        explodedProperties = properties ? [] : null,
        explodedShapes = [],
        explodedLyr = utils.extend({}, lyr);

    lyr.shapes.forEach(function(shp, shpId) {
      var exploded;
      if (!shp) {
        explodedShapes.push(null);
      } else {
        if (lyr.geometry_type == 'polygon' && shp.length > 1) {
          if (opts && opts.naive) {
            exploded = explodePolygonNaive(shp, arcs);
          } else {
            exploded = explodePolygon(shp, arcs);
          }
        } else {
          exploded = explodeShape(shp);
        }
        utils.merge(explodedShapes, exploded);
      }
      if (explodedProperties !== null) {
        for (var i=0, n=exploded ? exploded.length : 1; i<n; i++) {
          explodedProperties.push(cloneProperties(properties[shpId]));
        }
      }
    });

    explodedLyr.shapes = explodedShapes;
    if (explodedProperties !== null) {
      explodedLyr.data = new DataTable(explodedProperties);
    }
    return explodedLyr;
  };

  function explodeShape(shp) {
    return shp.map(function(part) {
      return [part.concat()];
    });
  }

  function explodePolygon(shape, arcs, reverseWinding) {
    var paths = getPathMetadata(shape, arcs, "polygon");
    var groups = groupPolygonRings(paths, arcs, reverseWinding);
    return groups.map(function(group) {
      return group.map(function(ring) {
        return ring.ids;
      });
    });
  }

  function explodePolygonNaive(shape, arcs) {
    var paths = getPathMetadata(shape, arcs, "polygon");
    return paths.map(function(path) {
      if (path.area < 0) {
        reversePath(path.ids);
      }
      return [path.ids];
    });
  }

  function cloneProperties(obj) {
    return Object.assign({}, obj);
  }

  var Explode = /*#__PURE__*/Object.freeze({
    __proto__: null,
    explodePolygon: explodePolygon
  });

  TopoJSON.getPresimplifyFunction = getPresimplifyFunction;

  function exportTopoJSON(dataset, opts) {
    var extension = '.' + (opts.extension || 'json'),
        needCopy = !opts.final || datasetHasPaths(dataset) && dataset.arcs.getRetainedInterval() > 0,
        stringify = JSON.stringify;

    if (needCopy) {
      dataset = copyDatasetForExport(dataset);
    }

    if (opts.prettify) {
      stringify = getFormattedStringify('coordinates,arcs,bbox,translate,scale'.split(','));
    }

    if (opts.width > 0 || opts.height > 0) {
      opts = utils.defaults({invert_y: true}, opts);
      transformDatasetToPixels(dataset, opts);
    }

    if (opts.precision) {
      setCoordinatePrecision(dataset, opts.precision);
    }

    if (opts.singles) {
      return splitDataset(dataset).map(function(dataset) {
        return {
          content: stringify(TopoJSON.exportTopology(dataset, opts)),
          filename: (dataset.layers[0].name || 'output') + extension
        };
      });
    } else {
      return [{
        filename: opts.file || getOutputFileBase(dataset) + extension,
        content: stringify(TopoJSON.exportTopology(dataset, opts))
      }];
    }
  }

  // Convert a dataset object to a TopoJSON topology object
  // Careful -- arcs must be a copy if further processing will occur.
  TopoJSON.exportTopology = function(dataset, opts) {
    var topology = {type: "Topology", arcs: []},
        hasPaths = datasetHasPaths(dataset),
        bounds = getDatasetBounds(dataset);

    if (opts.bbox && bounds.hasBounds()) {
      topology.bbox = bounds.toArray();
    }

    if (hasPaths && opts.presimplify && !dataset.arcs.getVertexData().zz) {
      // Calculate simplification thresholds if needed
      cmd.simplify(dataset, opts);
    }
    // auto-detect quantization if arcs are present
    if (!opts.no_quantization && (opts.quantization || hasPaths)) {
      topology.transform = TopoJSON.transformDataset(dataset, bounds, opts);
    }
    if (hasPaths) {
      dissolveArcs(dataset); // dissolve/prune arcs for more compact output
      topology.arcs = TopoJSON.exportArcs(dataset.arcs, bounds, opts);
      if (topology.transform) {
        TopoJSON.deltaEncodeArcs(topology.arcs);
      }
    }

    // export layers as TopoJSON named objects
    topology.objects = dataset.layers.reduce(function(objects, lyr, i) {
      var name = lyr.name || "layer" + (i + 1);
      objects[name] = TopoJSON.exportLayer(lyr, dataset.arcs, opts);
      return objects;
    }, {});

    if (opts.metadata) {
      topology.metadata = exportMetadata(dataset);
    }
    return topology;
  };

  TopoJSON.transformDataset = function(dataset, bounds, opts) {
    var bounds2 = TopoJSON.calcExportBounds(bounds, dataset.arcs, opts),
        fw = bounds.getTransform(bounds2),
        inv = fw.invert();

    function transform(x, y) {
      var p = fw.transform(x, y);
      return [Math.round(p[0]), Math.round(p[1])];
    }

    if (dataset.arcs) {
      dataset.arcs.transformPoints(transform);
    }
    // support non-standard format with quantized arcs and non-quantized points
    if (!opts.no_point_quantization) {
      dataset.layers.filter(layerHasPoints).forEach(function(lyr) {
        transformPointsInLayer(lyr, transform);
      });
    }

    // TODO: think about handling geometrical errors introduced by quantization,
    // e.g. segment intersections and collapsed polygon rings.
    return {
      scale: [inv.mx, inv.my],
      translate: [inv.bx, inv.by]
    };
  };

  // Export arcs as arrays of [x, y] and possibly [z] coordinates
  TopoJSON.exportArcs = function(arcs, bounds, opts) {
    var fromZ = null,
        output = [];
    if (opts.presimplify) {
      fromZ = getPresimplifyFunction(bounds.width());
    }
    arcs.forEach2(function(i, n, xx, yy, zz) {
      var arc = [], p;
      for (var j=i + n; i<j; i++) {
        p = [xx[i], yy[i]];
        if (fromZ) {
          p.push(fromZ(zz[i]));
        }
        arc.push(p);
      }
      output.push(arc.length > 1 ? arc : null);
    });
    return output;
  };

  // Apply delta encoding in-place to an array of topojson arcs
  TopoJSON.deltaEncodeArcs = function(arcs) {
    arcs.forEach(function(arr) {
      var ax, ay, bx, by, p;
      for (var i=0, n=arr.length; i<n; i++) {
        p = arr[i];
        bx = p[0];
        by = p[1];
        if (i > 0) {
          p[0] = bx - ax;
          p[1] = by - ay;
        }
        ax = bx;
        ay = by;
      }
    });
  };

  // Calculate the x, y extents that map to an integer unit in topojson output
  // as a fraction of the x- and y- extents of the average segment.
  TopoJSON.calcExportResolution = function(arcs, k) {
    // TODO: think about the effect of long lines, e.g. from polar cuts.
    var xy = getAvgSegment2(arcs);
    return [xy[0] * k, xy[1] * k];
  };

  // Calculate the bounding box of quantized topojson coordinates using one
  // of several methods.
  TopoJSON.calcExportBounds = function(bounds, arcs, opts) {
    var unitXY, xmax, ymax;
    if (opts.topojson_precision > 0) {
      unitXY = TopoJSON.calcExportResolution(arcs, opts.topojson_precision);
    } else if (opts.quantization > 0) {
      unitXY = [bounds.width() / (opts.quantization-1), bounds.height() / (opts.quantization-1)];
    } else if (opts.precision > 0) {
      unitXY = [opts.precision, opts.precision];
    } else {
      // default -- auto quantization at 0.02 of avg. segment len
      unitXY = TopoJSON.calcExportResolution(arcs, 0.02);
    }
    xmax = Math.ceil(bounds.width() / unitXY[0]) || 0;
    ymax = Math.ceil(bounds.height() / unitXY[1]) || 0;
    return new Bounds(0, 0, xmax, ymax);
  };

  TopoJSON.exportProperties = function(geometries, table, opts) {
    var properties = exportProperties(table, opts),
        ids = exportIds(table, opts);
    geometries.forEach(function(geom, i) {
      if (properties) {
        geom.properties = properties[i];
      }
      if (ids) {
        geom.id = ids[i];
      }
    });
  };

  // Export a mapshaper layer as a TopoJSON GeometryCollection
  TopoJSON.exportLayer = function(lyr, arcs, opts) {
    var n = getFeatureCount(lyr),
        geometries = [],
        exporter = TopoJSON.exporters[lyr.geometry_type] || null,
        shp;
    for (var i=0; i<n; i++) {
      shp = exporter && lyr.shapes[i];
      if (shp) {
        geometries[i] = exporter(shp, arcs, opts);
      } else {
        geometries[i] = {type: null};
      }
    }
    if (lyr.data) {
      TopoJSON.exportProperties(geometries, lyr.data, opts);
    }
    return {
      type: "GeometryCollection",
      geometries: geometries
    };
  };

  TopoJSON.exportPolygonGeom = function(shape, coords, opts) {
    var geom = {};
    shape = filterEmptyArcs(shape, coords);
    if (!shape || shape.length === 0) {
      geom.type = null;
    } else if (shape.length > 1) {
      geom.arcs = explodePolygon(shape, coords, opts.invert_y);
      if (geom.arcs.length == 1) {
        geom.arcs = geom.arcs[0];
        geom.type = "Polygon";
      } else {
        geom.type = "MultiPolygon";
      }
    } else {
      geom.arcs = shape;
      geom.type = "Polygon";
    }
    return geom;
  };

  TopoJSON.exportLineGeom = function(shape, coords) {
    var geom = {};
    shape = filterEmptyArcs(shape, coords);
    if (!shape || shape.length === 0) {
      geom.type = null;
    } else if (shape.length == 1) {
      geom.type = "LineString";
      geom.arcs = shape[0];
    } else {
      geom.type = "MultiLineString";
      geom.arcs = shape;
    }
    return geom;
  };

  TopoJSON.exporters = {
    polygon: TopoJSON.exportPolygonGeom,
    polyline: TopoJSON.exportLineGeom,
    point: GeoJSON.exportPointGeom
  };

  var TopojsonExport = /*#__PURE__*/Object.freeze({
    __proto__: null,
    exportTopoJSON: exportTopoJSON
  });

  function getOutputFormat(dataset, opts) {
    var outFile = opts.file || null,
        inFmt = dataset.info && dataset.info.input_formats && dataset.info.input_formats[0],
        outFmt = null;

    // if user has specified a format, use that
    if (opts.format) {
      return opts.format;
    }

    // if an output filename is given, try to infer format from filename etc.
    if (outFile) {
      outFmt = inferOutputFormat(outFile, inFmt);
    } else if (inFmt) {
      outFmt = inFmt;
    }

    if (outFmt == 'json' && datasetHasGeometry(dataset)) {
      // special case: inferred output format is a json table (either because
      // the output file has a .json extension or because the input file was a
      // json table), but the output dataset contains shapes
      outFmt = 'geojson';
    }

    return outFmt || null;
  }

  // Infer output format by considering file name and (optional) input format
  function inferOutputFormat(file, inputFormat) {
    var ext = getFileExtension(file).toLowerCase(),
        format = null;
    if (ext == 'shp') {
      format = 'shapefile';
    } else if (ext == 'dbf') {
      format = 'dbf';
    } else if (ext == 'svg') {
      format = 'svg';
    } else if (/json$/.test(ext)) {
      format = 'geojson';
      if (ext == 'topojson' || inputFormat == 'topojson' && ext != 'geojson') {
        format = 'topojson';
      } else if (ext == 'json' && inputFormat == 'json') {
        // .json -> json table is not always the best inference...
        // additional logic should be applied downstream
        format = 'json'; // JSON table
      }
    } else if (couldBeDsvFile(file)) {
      format = 'dsv';
    } else if (inputFormat) {
      format = inputFormat;
    }
    return format;
  }

  var OutputFormat = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getOutputFormat: getOutputFormat,
    inferOutputFormat: inferOutputFormat
  });

  // @targets - non-empty output from Catalog#findCommandTargets()
  //
  function exportTargetLayers(targets, opts) {
    // convert target fmt to dataset fmt
    var datasets = targets.map(function(target) {
      return utils.defaults({layers: target.layers}, target.dataset);
    });
    return exportDatasets(datasets, opts);
  }

  //
  //
  function exportDatasets(datasets, opts) {
    var format = getOutputFormat(datasets[0], opts);
    var files;
    if (format == 'svg' || format == 'topojson' || format == 'geojson' && opts.combine_layers) {
      // multi-layer formats: combine multiple datasets into one
      if (datasets.length > 1) {
        datasets = [mergeDatasetsForExport(datasets)];
        if (format == 'topojson') {
          // Build topology, in case user has loaded several
          // files derived from the same source, with matching coordinates
          // (Downsides: useless work if geometry is unrelated;
          // could create many small arcs if layers are partially related)
          buildTopology(datasets[0]);
        }
        // KLUDGE let exporter know that copying is not needed
        // (because shape data was deep-copied during merge)
        opts = utils.defaults({final: true}, opts);
      }
    } else {
      datasets = datasets.map(copyDatasetForRenaming);
      assignUniqueLayerNames2(datasets);
    }
    files = datasets.reduce(function(memo, dataset) {
      if (runningInBrowser()) {
        utils.sortOn(dataset.layers, 'stack_id', true);
      } else {
        // kludge to export layers in order that target= option or previous
        // -target command matched them (useful mainly for SVG output)
        // target_id was assigned to each layer by findCommandTargets()
        utils.sortOn(dataset.layers, 'target_id', true);
      }
      return memo.concat(exportFileContent(dataset, opts));
    }, []);
    // need unique names for multiple output files
    assignUniqueFileNames(files);
    return files;
  }

  // Return an array of objects with "filename" and "content" members.
  //
  function exportFileContent(dataset, opts) {
    var outFmt = opts.format = getOutputFormat(dataset, opts),
        exporter = exporters[outFmt],
        files = [];

    if (!outFmt) {
      error("Missing output format");
    } else if (!exporter) {
      error("Unknown output format:", outFmt);
    }

    // shallow-copy dataset and layers, so layers can be renamed for export
    dataset = utils.defaults({
      layers: dataset.layers.map(function(lyr) {return utils.extend({}, lyr);})
    }, dataset);

    // Adjust layer names, so they can be used as output file names
    // (except for multi-layer formats TopoJSON and SVG)
    if (opts.file && outFmt != 'topojson' && outFmt != 'svg') {
      dataset.layers.forEach(function(lyr) {
        lyr.name = getFileBase(opts.file);
      });
    }
    assignUniqueLayerNames(dataset.layers);

    // apply coordinate precision, except:
    //   svg precision is applied by the SVG exporter, after rescaling
    //   GeoJSON precision is applied by the exporter, to handle default precision
    //   TopoJSON precision is applied to avoid redundant copying
    if (opts.precision && outFmt != 'svg' && outFmt != 'geojson' && outFmt != 'topojson') {
      dataset = copyDatasetForExport(dataset);
      setCoordinatePrecision(dataset, opts.precision);
    }

    if (opts.cut_table) {
      files = exportDataTables(dataset.layers, opts).concat(files);
    }

    if (opts.extension) {
      opts.extension = fixFileExtension(opts.extension, outFmt);
    }

    validateLayerData(dataset.layers);

    files = exporter(dataset, opts).concat(files);
    // If rounding or quantization are applied during export, bounds may
    // change somewhat... consider adding a bounds property to each layer during
    // export when appropriate.
    if (opts.bbox_index) {
      files.push(createIndexFile(dataset));
    }

    validateFileNames(files);
    return files;
  }

  var exporters = {
    geojson: exportGeoJSON2,
    topojson: exportTopoJSON,
    shapefile: exportShapefile,
    dsv: exportDelim,
    dbf: exportDbf,
    json: exportJSON,
    svg: exportSVG
  };


  // Generate json file with bounding boxes and names of each export layer
  // TODO: consider making this a command, or at least make format settable
  //
  function createIndexFile(dataset) {
    var index = dataset.layers.map(function(lyr) {
      var bounds = getLayerBounds(lyr, dataset.arcs);
      return {
        bbox: bounds.toArray(),
        name: lyr.name
      };
    });

    return {
      content: JSON.stringify(index),
      filename: "bbox-index.json"
    };
  }

  // Throw errors for various error conditions
  function validateLayerData(layers) {
    layers.forEach(function(lyr) {
      if (!lyr.geometry_type) {
        // allowing data-only layers
        if (lyr.shapes && utils.some(lyr.shapes, function(o) {
          return !!o;
        })) {
          error("A layer contains shape records and a null geometry type");
        }
      } else {
        if (!utils.contains(['polygon', 'polyline', 'point'], lyr.geometry_type)) {
          error ("A layer has an invalid geometry type:", lyr.geometry_type);
        }
        if (!lyr.shapes) {
          error ("A layer is missing shape data");
        }
      }
    });
  }

  function validateFileNames(files) {
    var index = {};
    files.forEach(function(file, i) {
      var filename = file.filename;
      if (!filename) error("Missing a filename for file" + i);
      if (filename in index) error("Duplicate filename", filename);
      index[filename] = true;
    });
  }

  function assignUniqueLayerNames(layers) {
    var names = layers.map(function(lyr) {
      return lyr.name || "layer";
    });
    var uniqueNames = utils.uniqifyNames(names);
    layers.forEach(function(lyr, i) {
      lyr.name = uniqueNames[i];
    });
  }

  // Assign unique layer names across multiple datasets
  function assignUniqueLayerNames2(datasets) {
    var layers = datasets.reduce(function(memo, dataset) {
      return memo.concat(dataset.layers);
    }, []);
    assignUniqueLayerNames(layers);
  }

  function assignUniqueFileNames(output) {
    var names = output.map(function(o) {return o.filename;});
    var uniqnames = utils.uniqifyNames(names, formatVersionedFileName);
    output.forEach(function(o, i) {o.filename = uniqnames[i];});
  }

  // TODO: remove this -- format=json creates the same output
  //   (but need to make sure there's a way to prevent names of json data files
  //    from colliding with names of GeoJSON or TopoJSON files)
  function exportDataTables(layers, opts) {
    var tables = [];
    layers.forEach(function(lyr) {
      if (lyr.data) {
        tables.push({
          content: JSON.stringify(lyr.data),
          filename: (lyr.name ? lyr.name + '-' : '') + 'table.json'
        });
      }
    });
    return tables;
  }

  function formatVersionedFileName(filename, i) {
    var parts = filename.split('.');
    var ext, base;
    if (parts.length < 2) {
      return utils.formatVersionedName(filename, i);
    }
    ext = parts.pop();
    base = parts.join('.');
    return utils.formatVersionedName(base, i) + '.' + ext;
  }

  function fixFileExtension(ext, fmt) {
    // TODO: use fmt to validate
    return ext.replace(/^\.+/, '');
  }

  var Export = /*#__PURE__*/Object.freeze({
    __proto__: null,
    exportTargetLayers: exportTargetLayers,
    exportFileContent: exportFileContent,
    assignUniqueLayerNames: assignUniqueLayerNames,
    assignUniqueFileNames: assignUniqueFileNames,
    formatVersionedFileName: formatVersionedFileName
  });

  // convert targets from [{layers: [...], dataset: <>}, ...] format to
  // [{layer: <>, dataset: <>}, ...] format
  function expandCommandTargets(targets) {
    return targets.reduce(function(memo, target) {
      target.layers.forEach(function(lyr) {
        memo.push({layer: lyr, dataset: target.dataset});
      });
      return memo;
    }, []);
  }

  function findCommandTargets(layers, pattern, type) {
    var targets = [];
    var matches = findMatchingLayers(layers, pattern, true);
    if (type) {
      matches = matches.filter(function(o) {return o.layer.geometry_type == type;});
    }
    // assign target_id to matched layers
    // (kludge so layers can be sorted in the order that they match; used by -o command)
    layers.forEach(function(o) {o.layer.target_id = -1;});
    matches.forEach(function(o, i) {o.layer.target_id = i;});
    return groupLayersByDataset(matches);
  }

  // arr: array of {layer: <>, dataset: <>} objects
  function groupLayersByDataset(arr) {
    var datasets = [];
    var targets = [];
    arr.forEach(function(o) {
      var i = datasets.indexOf(o.dataset);
      if (i == -1) {
        datasets.push(o.dataset);
        targets.push({layers: [o.layer], dataset: o.dataset});
      } else {
        targets[i].layers.push(o.layer);
      }
    });
    return targets;
  }

  // layers: array of {layer: <>, dataset: <>} objects
  // pattern: is a layer identifier or a comma-sep. list of identifiers.
  // An identifier is a literal name, a pattern containing "*" wildcard or
  // a 1-based index (1..n)
  function findMatchingLayers(layers, pattern, throws) {
    var matchedLayers = [];
    var unmatchedIds = [];
    var index = {};
    pattern.split(',').forEach(function(subpattern, i) {
      var test = getLayerMatch(subpattern);
      var matched = false;
      layers.forEach(function(o, layerId) {
        // if (matchedLayers.indexOf(lyr) > -1) return; // performance bottleneck with 1000s of layers
        if (layerId in index) {
          matched = true;
        } else if (test(o.layer, layerId + 1)) {  // layers are 1-indexed
          matchedLayers.push(o);
          index[layerId] = true;
          matched = true;
        }
      });
      if (matched == false) {
        unmatchedIds.push(subpattern);
      }
    });
    if (throws && unmatchedIds.length) {
      stop(utils.format('Missing layer%s: %s', unmatchedIds.length == 1 ? '' : 's', unmatchedIds.join(',')));
    }
    return matchedLayers;
  }

  function getLayerMatch(pattern) {
    var isIndex = utils.isInteger(Number(pattern));
    var nameRxp = isIndex ? null : utils.wildcardToRegExp(pattern);
    return function(lyr, i) {
      return isIndex ? String(i) == pattern : nameRxp.test(lyr.name || '');
    };
  }

  function countTargetLayers(targets) {
    return targets.reduce(function(memo, target) {
      return memo + target.layers.length;
    }, 0);
  }

  // get an identifier for a layer that can be used in a target= option
  // (returns name if layer has a unique name, or a numerical id)
  function getLayerTargetId(catalog, lyr) {
    var nameCount = 0,
        name = lyr.name,
        id;
    catalog.getLayers().forEach(function(o, i) {
      if (lyr.name && o.layer.name == lyr.name) nameCount++;
      if (lyr == o.layer) id = String(i + 1);
    });
    if (!id) error('Layer not found');
    return nameCount == 1 ? lyr.name : id;
  }

  var TargetUtils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    expandCommandTargets: expandCommandTargets,
    findCommandTargets: findCommandTargets,
    findMatchingLayers: findMatchingLayers,
    getLayerMatch: getLayerMatch,
    countTargetLayers: countTargetLayers,
    getLayerTargetId: getLayerTargetId
  });

  function validateInputOpts(cmd) {
    var o = cmd.options,
        _ = cmd._;

    if (_.length > 0 && !o.files) {
      o.files = _;
    }
    if (o.files) {
      o.files = cli.expandInputFiles(o.files);
      if (o.files[0] == '-' || o.files[0] == '/dev/stdin') {
        delete o.files;
        o.stdin = true;
      }
    }

    if ("precision" in o && o.precision > 0 === false) {
      error("precision= option should be a positive number");
    }

    if (o.encoding) {
      o.encoding = validateEncoding(o.encoding);
    }
  }

  function validateSimplifyOpts(cmd) {
    var o = cmd.options,
        arg = cmd._[0];

    if (arg) {
      if (/^[0-9.]+%?$/.test(arg)) {
        o.percentage = utils.parsePercent(arg);
      } else {
        error("Unparsable option:", arg);
      }
    }

    // var intervalStr = o.interval;
    // if (intervalStr) {
    //   o.interval = Number(intervalStr);
    //   if (o.interval >= 0 === false) {
    //     error(utils.format("Out-of-range interval value: %s", intervalStr));
    //   }
    // }

    if (!o.interval && !o.percentage && !o.resolution) {
      error("Command requires an interval, percentage or resolution parameter");
    }
  }

  function validateProjOpts(cmd) {
    var _ = cmd._,
        proj4 = [];

    if (_.length > 0 && !cmd.options.crs) {
      cmd.options.crs = _.join(' ');
      _ = [];
    }

    // separate proj4 options
    // _ = _.filter(function(arg) {
    //   if (/^\+[a-z]/i.test(arg)) {
    //     proj4.push(arg);
    //     return false;
    //   }
    //   return true;
    // });

    // if (proj4.length > 0) {
    //   cmd.options.crs = proj4.join(' ');
    // } else if (_.length > 0) {
    //   cmd.options.crs = _.shift();
    // }

    if (_.length > 0) {
      error("Received one or more unexpected parameters: " + _.join(', '));
    }

    if (!(cmd.options.crs || cmd.options.match || cmd.options.init)) {
      stop("Missing projection data");
    }
  }

  function validateGridOpts(cmd) {
    var o = cmd.options;
    if (cmd._.length == 1) {
      var tmp = cmd._[0].split(',');
      o.cols = parseInt(tmp[0], 10);
      o.rows = parseInt(tmp[1], 10) || o.cols;
    }
  }

  function validateExpressionOpt(cmd) {
    if (!cmd.options.expression) {
      error("Command requires a JavaScript expression");
    }
  }

  function validateOutputOpts(cmd) {
    var _ = cmd._,
        o = cmd.options,
        arg = _[0] || "",
        pathInfo = parseLocalPath(arg);

    if (_.length > 1) {
      error("Command takes one file or directory argument");
    }

    if (arg == '-' || arg == '/dev/stdout') {
      o.stdout = true;
    } else if (arg && !pathInfo.extension) {
      if (!cli.isDirectory(arg)) {
        error("Unknown output option:", arg);
      }
      o.directory = arg;
    } else if (arg) {
      if (pathInfo.directory) {
        o.directory = pathInfo.directory;
        // no longer checking for missing directory
        // (cli.writeFile() now creates directories that don't exist)
        // cli.validateOutputDir(o.directory);
      }
      o.file = pathInfo.filename;
      if (filenameIsUnsupportedOutputType(o.file)) {
        error("Output file looks like an unsupported file type:", o.file);
      }
    }

    if (o.format) {
      o.format = o.format.toLowerCase();
      if (o.format == 'csv') {
        o.format = 'dsv';
        o.delimiter = o.delimiter || ',';
      } else if (o.format == 'tsv') {
        o.format = 'dsv';
        o.delimiter = o.delimiter || '\t';
      }
      if (!isSupportedOutputFormat(o.format)) {
        error("Unsupported output format:", o.format);
      }
    }

    if (o.delimiter) {
      // convert "\t" '\t' \t to tab
      o.delimiter = o.delimiter.replace(/^["']?\\t["']?$/, '\t');
      if (!isSupportedDelimiter(o.delimiter)) {
        error("Unsupported delimiter:", o.delimiter);
      }
    }

    if (o.encoding) {
      o.encoding = validateEncoding(o.encoding);
    }

    if (o.field_order && o.field_order != 'ascending') {
      error('Unsupported field order:', o.field_order);
    }

    // topojson-specific
    if ("quantization" in o && o.quantization > 0 === false) {
      error("quantization= option should be a nonnegative integer");
    }

    if ("topojson_precision" in o && o.topojson_precision > 0 === false) {
      error("topojson-precision= option should be a positive number");
    }
  }

  function splitShellTokens(str) {
    var BAREWORD = '([^\'"\\s])+';
    var DOUBLE_QUOTE = '"((\\\\"|[^"])*?)"';
    var SINGLE_QUOTE = '\'((\\\\\'|[^\'])*?)\'';
    var rxp = new RegExp('(' + BAREWORD + '|' + SINGLE_QUOTE + '|' + DOUBLE_QUOTE + ')*', 'g');
    var matches = str.match(rxp) || [];
    var chunks = matches.filter(function(chunk) {
      // single backslashes may be present in multiline commands pasted from a makefile, e.g.
      return !!chunk && chunk != '\\';
    }).map(utils.trimQuotes);
    return chunks;
  }


  // Split comma-delimited list, trim quotes from entire list and
  // individual members
  function parseStringList(token) {
    var delim = ',';
    var list = splitOptionList(token, delim);
    if (list.length == 1) {
      list = splitOptionList(list[0], delim);
    }
    return list;
  }

  // Accept spaces and/or commas as delimiters
  function parseColorList(token) {
    var delim = ', ';
    var token2 = token.replace(/, *(?=[^(]*\))/g, '~~~'); // kludge: protect rgba() functions from being split apart
    var list = splitOptionList(token2, delim);
    if (list.length == 1) {
      list = splitOptionList(list[0], delim);
    }
    list = list.map(function(str) {
      return str.replace(/~~~/g, ',');
    });
    return list;
  }

  function cleanArgv(argv) {
    argv = argv.map(function(s) {return s.trim();}); // trim whitespace
    argv = argv.filter(function(s) {return s !== '';}); // remove empty tokens
    // removing trimQuotes() call... now, strings like 'name="Meg"' will no longer
    // be parsed the same way as name=Meg and name="Meg"
    //// argv = argv.map(utils.trimQuotes); // remove one level of single or dbl quotes
    return argv;
  }

  function splitOptionList(str, delimChars) {
    var BAREWORD = '([^' + delimChars + '\'"][^' + delimChars + ']*)'; // TODO: make safer
    var DOUBLE_QUOTE = '"((\\\\"|[^"])*?)"';
    var SINGLE_QUOTE = '\'((\\\\\'|[^\'])*?)\'';
    var rxp = new RegExp('^(' + BAREWORD + '|' + SINGLE_QUOTE + '|' + DOUBLE_QUOTE + ')([' + delimChars + ']+|$)');
    var chunks = [];
    var match;
    while ((match = rxp.exec(str)) !== null) {
      chunks.push(match[1]);
      str = str.substr(match[0].length);
    }
    return chunks.filter(function(chunk) {
      return !!chunk && chunk != '\\';
    }).map(utils.trimQuotes);
  }

  // Prepare a value to be used as an option value.
  // Places quotes around strings containing spaces.
  // e.g. converts   Layer 1 -> "Layer 1"
  //   for use in contexts like: name="Layer 1"
  function formatOptionValue(val) {
    val = String(val);
    if (val.indexOf(' ') > -1) {
      val = JSON.stringify(val); // quote ids with spaces
    }
    return val;
  }

  var OptionParsingUtils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    splitShellTokens: splitShellTokens,
    parseStringList: parseStringList,
    parseColorList: parseColorList,
    cleanArgv: cleanArgv,
    formatOptionValue: formatOptionValue
  });

  function CommandParser() {
    var commandRxp = /^--?([a-z][\w-]*)$/i,
        invalidCommandRxp = /^--?[a-z][\w-]*[=]/i, // e.g. -target=A // could be more general
        assignmentRxp = /^([a-z0-9_+-]+)=(?!\=)(.*)$/i, // exclude ==
        _usage = "",
        _examples = [],
        _commands = [],
        _default = null,
        _note;

    if (this instanceof CommandParser === false) return new CommandParser();

    this.usage = function(str) {
      _usage = str;
      return this;
    };

    this.note = function(str) {
      _note = str;
      return this;
    };

    // set a default command; applies to command line args preceding the first
    // explicit command
    this.default = function(str) {
      _default = str;
    };

    this.example = function(str) {
      _examples.push(str);
    };

    this.command = function(name) {
      var opts = new CommandOptions(name);
      _commands.push(opts);
      return opts;
    };

    this.section = function(name) {
      return this.command("").title(name);
    };

    this.parseArgv = function(raw) {
      var commandDefs = getCommands(),
          commands = [], cmd,
          argv = cleanArgv(raw),
          cmdName, cmdDef, opt;

      if (argv.length == 1 && tokenIsCommandName(argv[0])) {
        // show help if only a command name is given
        argv.unshift('-help'); // kludge (assumes -help <command> syntax)
      } else if (argv.length > 0 && !tokenLooksLikeCommand(argv[0]) && _default) {
        // if there are arguments before the first explicit command, use the default command
        argv.unshift('-' + _default);
      }

      while (argv.length > 0) {
        cmdName = readCommandName(argv);
        if (!cmdName) {
          stop("Invalid command:", argv[0]);
        }
        cmdDef = findCommandDefn(cmdName, commandDefs);
        if (!cmdDef) {
          // In order to support adding commands at runtime, unknown commands
          // are parsed without options (tokens get stored for later parsing)
          // stop("Unknown command:", cmdName);
          cmdDef = {name: cmdName, options: [], multi_arg: true};
        }
        cmd = {
          name: cmdDef.name,
          options: {},
          _: []
        };

        while (argv.length > 0 && !tokenLooksLikeCommand(argv[0])) {
          readOption(cmd, argv, cmdDef);
        }

        try {
          if (cmd._.length > 0 && cmdDef.no_arg) {
            error("Received one or more unexpected parameters:", cmd._.join(' '));
          }
          if (cmd._.length > 1 && !cmdDef.multi_arg) {
            error("Command expects a single value. Received:", cmd._.join(' '));
          }
          if (cmdDef.default && cmd._.length == 1) {
            // TODO: support multiple-token values, like -i filenames
            readDefaultOptionValue(cmd, cmdDef);
          }
          if (cmdDef.validate) {
            cmdDef.validate(cmd);
          }
        } catch(e) {
          stop("[" + cmdName + "] " + e.message);
        }
        commands.push(cmd);
      }
      return commands;

      function tokenLooksLikeCommand(s) {
        if (invalidCommandRxp.test(s)) {
          stop('Invalid command syntax:', s);
        }
        return commandRxp.test(s);
      }

      // Try to read an option for command @cmdDef from @argv
      function readOption(cmd, argv, cmdDef) {
        var token = argv.shift(),
            optName, optDef, parts;

        if (assignmentRxp.test(token)) {
          // token looks like name=value style option
          parts = splitAssignment(token);
          optDef = findOptionDefn(parts[0], cmdDef);
          if (!optDef) {
            // left-hand identifier is not a recognized option...
            // assignment to an unrecognized identifier could be an expression
            // (e.g. -each 'id=$.id') -- handle this case below
          } else if (optDef.type == 'flag' || optDef.assign_to) {
            stop("-" + cmdDef.name + " " + parts[0] + " option doesn't take a value");
          } else {
            argv.unshift(parts[1]);
          }
        } else {
          // try to parse as a flag option,
          // or as a space-delimited assignment option (for backwards compatibility)
          optDef = findOptionDefn(token, cmdDef);
        }

        if (!optDef) {
          // token is not a defined option; add it to _ array for later processing
          // Stripping surrounding quotes here, although this may not be necessary since
          // (some, most, all?) shells seem to remove quotes.
          cmd._.push(utils.trimQuotes(token));
          return;
        }

        if (optDef.alias_to) {
          optDef = findOptionDefn(optDef.alias_to, cmdDef);
        }

        optName = optDef.name;
        optName = optName.replace(/-/g, '_');

        if (optDef.assign_to) {
          cmd.options[optDef.assign_to] = optDef.name;
        } else if (optDef.type == 'flag') {
          cmd.options[optName] = true;
        } else {
          cmd.options[optName] = readOptionValue(argv, optDef);
        }
      }

      function splitAssignment(token) {
        var match = assignmentRxp.exec(token),
            name = match[1],
            val = utils.trimQuotes(match[2]);
        return [name, val];
      }

      // Read an option value for @optDef from @argv
      function readOptionValue(argv, optDef) {
        if (argv.length === 0 || tokenLooksLikeCommand(argv[0])) {
          stop("Missing value for " + optDef.name + " option");
        }
        return parseOptionValue(argv.shift(), optDef); // remove token from argv
      }

      function readDefaultOptionValue(cmd, cmdDef) {
        var optDef = findOptionDefn(cmdDef.default, cmdDef);
        cmd.options[cmdDef.default] = readOptionValue(cmd._, optDef);
      }

      function parseOptionValue(token, optDef) {
        var type = optDef.type;
        var val, err;
        if (type == 'number') {
          val = Number(token);
        } else if (type == 'integer') {
          val = Math.round(Number(token));
        } else if (type == 'colors') {
          val = parseColorList(token);
        } else if (type == 'strings') {
          val = parseStringList(token);
        } else if (type == 'bbox' || type == 'numbers') {
          val = token.split(',').map(parseFloat);
        } else if (type == 'percent') {
          // val = utils.parsePercent(token);
          val = token; // string value is parsed by command function
        } else if (type == 'distance' || type == 'area') {
          val = token; // string value is parsed by command function
        } else {
          val = token; // assume string type
        }

        if (val !== val) {
          err = "Invalid numeric value";
        }

        if (err) {
          stop(err + " for " + optDef.name + " option");
        }
        return val;
      }

      // Check first element of an array of tokens; remove and return if it looks
      // like a command name, else return null;
      function readCommandName(args) {
        var match = commandRxp.exec(args[0]);
        if (match) {
          args.shift();
          return match[1];
        }
        return null;
      }

    };

    this.getHelpMessage = function(cmdName) {
      var helpCommands, singleCommand, lines;

      if (cmdName) {
        singleCommand = findCommandDefn(cmdName, getCommands());
        if (!singleCommand) {
          stop(cmdName, "is not a known command");
        }
        lines = getSingleCommandLines(singleCommand);
      } else {
        helpCommands = getCommands().filter(function(cmd) {return cmd.name && cmd.describe || cmd.title;});
        lines = getMultiCommandLines(helpCommands);
      }

      return formatLines(lines);

      function formatLines(lines) {
        var colWidth = calcColWidth(lines);
        var gutter = '  ';
        var indent = runningInBrowser() ? '' : '  ';
        var helpStr = lines.map(function(line) {
          if (Array.isArray(line)) {
            line = indent + utils.rpad(line[0], colWidth, ' ') + gutter + line[1];
          }
          return line;
        }).join('\n');
        return helpStr;
      }

      function getSingleCommandLines(cmd) {
        var lines = [];
        // command name
        lines.push('COMMAND', getCommandLine(cmd));

        // options
        if (cmd.options.length > 0) {
          lines.push('', 'OPTIONS');
          cmd.options.forEach(function(opt) {
            lines = lines.concat(getOptionLines(opt, cmd));
          });
        }

        // examples
        if (cmd.examples) {
          lines.push('', 'EXAMPLE' + (cmd.examples.length > 1 ? 'S' : ''));
          cmd.examples.forEach(function(ex, i) {
            if (i > 0) lines.push('');
            ex.split('\n').forEach(function(line, i) {
              lines.push('  ' + line);
            });
          });
        }
        return lines;
      }

      function getOptionLines(opt, cmd) {
        var lines = [];
        var description = opt.describe;
        var label;
        if (!description) {
          // empty
        } else if (opt.label) {
          lines.push([opt.label, description]);
        } else if (opt.name == cmd.default) {
          label = opt.name + '=';
          lines.push(['<' + opt.name + '>', 'shortcut for ' + label]);
          lines.push([label, description]);
        } else {
          label = opt.name;
          if (opt.alias) label += ', ' + opt.alias;
          if (opt.type != 'flag' && !opt.assign_to) label += '=';
          lines.push([label, description]);
        }
        return lines;
      }

      function getCommandLine(cmd) {
        var name = cmd.name ? "-" + cmd.name : '';
        if (cmd.alias) name += ', -' + cmd.alias;
        return [name, cmd.describe || '(undocumented command)'];
      }

      function getMultiCommandLines(commands) {
        var lines = [];
        // usage
        if (_usage) lines.push(_usage);

        // list of commands
        commands.forEach(function(cmd) {
          if (cmd.title) {
            lines.push('', cmd.title);
          } else {
            lines.push(getCommandLine(cmd));
          }
        });

        // examples
        if (_examples.length > 0) {
          lines.push('', 'Examples');
          _examples.forEach(function(str) {
            lines.push('', str);
          });
        }

        // note
        if (_note) {
          lines.push('', _note);
        }
        return lines;
      }


      function calcColWidth(lines) {
        var w = 0;
        lines.forEach(function(line) {
          if (Array.isArray(line)) {
            w = Math.max(w, line[0].length);
          }
        });
        return w;
      }
    };

    this.printHelp = function(command) {
      print(this.getHelpMessage(command));
    };

    function getCommands() {
      return _commands.map(function(cmd) {
        return cmd.done();
      });
    }

    function tokenIsCommandName(s) {
      var cmd = findCommandDefn(s, getCommands());
      return !!cmd;
    }

    function findCommandDefn(name, arr) {
      return utils.find(arr, function(cmd) {
        return cmd.name === name || cmd.alias === name || cmd.old_alias === name;
      });
    }

    function findOptionDefn(name, cmdDef) {
      return utils.find(cmdDef.options, function(o) {
        return o.name === name || o.alias === name || o.old_alias === name;
      });
    }
  }

  function CommandOptions(name) {
    var _command = {
      name: name,
      options: []
    };

    this.validate = function(f) {
      _command.validate = f;
      return this;
    };

    this.describe = function(str) {
      _command.describe = str;
      return this;
    };

    this.example = function(str) {
      if (!_command.examples) {
        _command.examples = [];
      }
      _command.examples.push(str);
      return this;
    };

    this.alias = function(name) {
      _command.alias = name;
      return this;
    };

    // define an alias command name that doesn't appear in command line help
    // (to support old versions of renamed commands)
    this.oldAlias = function(name) {
      _command.old_alias = name;
      return this;
    };

    this.title = function(str) {
      _command.title = str;
      return this;
    };

    this.flag = function(name) {
      _command[name] = true;
      return this;
    };

    this.option = function(name, opts) {
      opts = utils.extend({}, opts); // accept just a name -- some options don't need properties
      if (!utils.isString(name) || !name) error("Missing option name");
      if (!utils.isObject(opts)) error("Invalid option definition:", opts);
      // default option -- assign unnamed argument to this option
      if (opts.DEFAULT) _command.default = name;
      opts.name = name;
      _command.options.push(opts);
      return this;
    };

    this.done = function() {
      return _command;
    };
  }

  function getOptionParser() {
    // definitions of options shared by more than one command
    var targetOpt = {
          describe: 'layer(s) to target (comma-sep. list)'
        },
        nameOpt = {
          describe: 'rename the edited layer(s)'
        },
        noReplaceOpt = {
          alias: '+',
          type: 'flag',
          label: '+, no-replace', // show alias as primary option
          // describe: 'retain the original layer(s) instead of replacing'
          describe: 'retain both input and output layer(s)'
        },
        noSnapOpt = {
          // describe: 'don't snap points before applying command'
          type: 'flag'
        },
        encodingOpt = {
          describe: 'text encoding (applies to .dbf and delimited text files)'
        },
        snapIntervalOpt = {
          describe: 'snapping distance in source units (default is tiny)',
          type: 'distance'
        },
        minGapAreaOpt = {
          old_alias: 'min-gap-area',
          describe: 'threshold for filling gaps, e.g. 1.5km2 (default is small)',
          type: 'area'
        },
        sliverControlOpt = {
          describe: 'boost gap-fill-area of slivers (0-1, default is 1)',
          type: 'number'
        },
        calcOpt = {
          describe: 'use a JS expression to aggregate data values'
        },
        sumFieldsOpt = {
          describe: 'fields to sum when dissolving  (comma-sep. list)',
          type: 'strings'
        },
        copyFieldsOpt = {
          describe: 'fields to copy when dissolving (comma-sep. list)',
          type: 'strings'
        },
        dissolveFieldsOpt = {
          DEFAULT: true,
          type: 'strings',
          describe: '(optional) field(s) to dissolve on (comma-sep. list)'
        },
        fieldTypesOpt = {
          describe: 'type hints for csv source files, e.g. FIPS:str,ZIPCODE:str',
          type: 'strings'
        },
        stringFieldsOpt = {
          describe: 'csv field(s) to import as strings, e.g. FIPS,ZIPCODE',
          type: 'strings'
        },
        bboxOpt = {
          type: 'bbox',
          describe: 'comma-sep. bounding box: xmin,ymin,xmax,ymax'
        },
        invertOpt = {
          type: 'flag',
          describe: 'retain only features that would have been deleted'
        },
        whereOpt = {
          describe: 'use a JS expression to select a subset of features'
        },
        whereOpt2 = {
          describe: 'filter polygon boundaries using a JS expression (with A and B)'
        },
        eachOpt2 = {
          describe: 'apply a JS expression to each polygon boundary (with A and B)'
        },
        aspectRatioOpt = {
          describe: 'aspect ratio as a number or range (e.g. 2 0.8,1.6 ,2)'
        },
        offsetOpt = {
          describe: 'padding as distance or pct of h/w (single value or list)',
          type: 'distance'
        };

    var parser = new CommandParser();
    parser.usage('Usage:  mapshaper -<command> [options] ...');

    /*
    parser.example('Fix minor topology errors, simplify to 10%, convert to GeoJSON\n' +
        '$ mapshaper states.shp snap -simplify 10% -o format=geojson');

    parser.example('Aggregate census tracts to counties\n' +
        '$ mapshaper tracts.shp -each \'CTY_FIPS=FIPS.substr(0, 5)\' -dissolve CTY_FIPS');
    */

    parser.note('Enter mapshaper -help <command> to view options for a single command');

    parser.section('I/O commands');

    parser.default('i');

    parser.command('i')
      .describe('input one or more files')
      .validate(validateInputOpts)
      .flag('multi_arg')
      .option('files', {
        DEFAULT: true,
        type: 'strings',
        describe: 'one or more files to import, or - to use stdin'
      })
      .option('combine-files', {
        describe: 'import files to separate layers with shared topology',
        type: 'flag'
      })
      .option('merge-files', {
        // describe: 'merge features from compatible files into the same layer',
        type: 'flag'
      })
      .option('no-topology', {
        describe: 'treat each shape as topologically independent',
        type: 'flag'
      })
      .option('precision', {
        describe: 'coordinate precision in source units, e.g. 0.001',
        type: 'number'
      })
      .option('snap', {
        type: 'flag',
        describe: 'snap nearly identical points to fix minor topology errors'
      })
      .option('auto-snap', {alias_to: 'snap'})
      .option('snap-interval', snapIntervalOpt)
      .option('encoding', encodingOpt)
      /*
      .option('fields', {
        describe: 'attribute fields to import (comma-sep.) (default is all fields)',
        type: 'strings'
      }) */
      .option('id-field', {
        describe: 'import Topo/GeoJSON id property to this field'
      })
      .option('string-fields', stringFieldsOpt)
      .option('field-types', fieldTypesOpt)
      .option('name', {
        describe: 'Rename the imported layer(s)'
      })
      .option('geometry-type', {
        // undocumented; GeoJSON import rejects all but one kind of geometry
        // describe: '[GeoJSON] Import one kind of geometry (point|polygon|polyline)'
      })
      .option('json-path', {
        // describe: path to an array of data values
      })
      .option('csv-skip-lines', {
        type: 'integer',
        describe: '[CSV] number of lines to skip at the beginning of the file'
      })
      .option('csv-lines', {
        type: 'integer',
        describe: '[CSV] number of data records to read'
      })
      .option('csv-field-names', {
        type: 'strings',
        describe: '[CSV] comma-sep. list of field names to assign each column'
      })
      .option('csv-dedup-fields', {
        type: 'flag',
        describe: '[CSV] rename fields with duplicate names'
      })
      .option('csv-filter', {
        describe: '[CSV] JS expression for filtering records'
      })
      .option('csv-fields', {
        type: 'strings',
        describe: '[CSV] comma-sep. list of fields to import'
      })
      .option('json-path', {
        old_alias: 'json-subtree',
        describe: '[JSON] path to JSON input data; separator is /'
      });

    parser.command('o')
      .describe('output edited content')
      .validate(validateOutputOpts)
      .option('_', {
        label: '<file|directory>',
        describe: '(optional) name of output file or directory, - for stdout'
      })
      .option('format', {
        describe: 'options: shapefile,geojson,topojson,json,dbf,csv,tsv,svg'
      })
      .option('target', targetOpt)
      .option('force', {
        describe: 'allow overwriting input files',
        type: 'flag'
      })
      .option('dry-run', {
        // describe: 'do not output any files'
        type: 'flag'
      })
      .option('ldid', {
        // describe: 'language driver id of dbf file',
        type: 'number'
      })
      .option('precision', {
        describe: 'coordinate precision in source units, e.g. 0.001',
        type: 'number'
      })
      .option('bbox-index', {
        describe: 'export a .json file with bbox of each layer',
        type: 'flag'
      })
      .option('cut-table', {
        describe: 'detach data attributes from shapes and save as a JSON file',
        type: 'flag'
      })
      .option('drop-table', {
        describe: 'remove data attributes from output',
        type: 'flag'
      })
      .option('encoding', {
        describe: '(Shapefile/CSV) text encoding (default is utf8)'
      })
      .option('field-order', {
        describe: '(Shapefile/CSV) field-order=ascending sorts columns A-Z'
      })
      .option('id-field', {
        describe: '(Topo/GeoJSON/SVG) field to use for id property',
        type: 'strings'
      })
      .option('bbox', {
        type: 'flag',
        describe: '(Topo/GeoJSON) add bbox property'
      })
      .option('extension', {
        describe: '(Topo/GeoJSON) set file extension (default is ".json")'
      })
      .option('prettify', {
        type: 'flag',
        describe: '(Topo/GeoJSON) format output for readability'
      })
      .option('singles', {
        describe: '(TopoJSON) save each target layer as a separate file',
        type: 'flag'
      })
      .option('quantization', {
        describe: '(TopoJSON) specify quantization (auto-set by default)',
        type: 'integer'
      })
      .option('no-quantization', {
        describe: '(TopoJSON) export coordinates without quantization',
        type: 'flag'
      })
      .option('no-point-quantization', {
        // describe: '(TopoJSON) export point coordinates without quantization',
        type: 'flag'
      })
      .option('presimplify', {
        describe: '(TopoJSON) add per-vertex data for dynamic simplification',
        type: 'flag'
      })
      .option('topojson-precision', {
        // describe: 'pct of avg segment length for rounding (0.02 is default)',
        type: 'number'
      })
      .option('rfc7946', {
        // obsolete -- rfc 7946 compatible outptu is now the default.
        // This option also rounds coordinates to 7 decimals. I'm retaining the
        // option for backwards compatibility.
        // describe: '(GeoJSON) follow RFC 7946 (CCW outer ring order, etc.)',
        type: 'flag'
      })
      // .option('winding', {
      //   describe: '(GeoJSON) set polygon winding order (use CW with d3-geo)'
      // })
      .option('gj2008', {
        describe: '(GeoJSON) use original GeoJSON spec (not RFC 7946)',
        type: 'flag'
      })
      .option('combine-layers', {
        describe: '(GeoJSON) output layers as a single file',
        type: 'flag'
      })
      .option('geojson-type', {
        describe: '(GeoJSON) FeatureCollection, GeometryCollection or Feature'
      })
      .option('width', {
        describe: '(SVG/TopoJSON) pixel width of output (SVG default is 800)',
        type: 'number'
      })
      .option('height', {
        describe: '(SVG/TopoJSON) pixel height of output (optional)',
        type: 'number'
      })
      .option('max-height', {
        describe: '(SVG/TopoJSON) max pixel height of output (optional)',
        type: 'number'
      })
      .option('margin', {
        describe: '(SVG/TopoJSON) space betw. data and viewport (default is 1)'
      })
      .option('pixels', {
        describe: '(SVG/TopoJSON) output area in pix. (alternative to width=)',
        type: 'number'
      })
      .option('svg-scale', {
        describe: '(SVG) source units per pixel (alternative to width= option)',
        type: 'number'
      })
      .option('point-symbol', {
        describe: '(SVG) circle or square (default is circle)'
      })
      .option('svg-data', {
        type: 'strings',
        describe: '(SVG) fields to export as data-* attributes'
      })
      .option('id-prefix', {
        describe: '(SVG) prefix for namespacing layer and feature ids'
      })
      .option('delimiter', {
        describe: '(CSV) field delimiter'
      })
      .option('final', {
        type: 'flag' // for testing
      })
      .option('metadata', {
        // describe: '(TopoJSON) add a metadata object',
        type: 'flag'
      });

    parser.section('Editing commands');

    parser.command('affine')
      .describe('transform coordinates by shifting, scaling and rotating')
      .flag('no_args')
      .option('shift', {
        type: 'strings',
        describe: 'x,y offsets in source units (e.g. 5000,-5000)'
      })
      .option('scale', {
        type: 'number',
        describe: 'scale (default is 1)'
      })
      .option('rotate', {
        type: 'number',
        describe: 'angle of rotation in degrees (default is 0)'
      })
      .option('anchor', {
        type: 'numbers',
        describe: 'center of rotation/scaling (default is center of selected shapes)'
      })
      .option('where', whereOpt)
      .option('target', targetOpt);

    parser.command('buffer')
      // .describe('')
      .option('radius', {
        describe: 'radius of buffer, as an expression or a constant',
        DEFAULT: true
      })
      .option('tolerance', {
        // describe: 'acceptable deviation for approximating curves'
      })
      .option('backtrack', {
        type: 'integer'
      })
      .option('type', {
        // left, right, outer, inner (default is full buffer)
      })
      .option('planar', {
        type: 'flag'
      })
      .option('v2', { // use v2 method
        type: 'flag'
      })
      .option('debug-division', {
        type: 'flag'
      })
      .option('debug-mosaic', {
        type: 'flag'
      })
      .option('no-cleanup', {
        type: 'flag'
      })
      .option('units', {
        describe: 'distance units (meters|miles|km|feet) (default is meters)'
      })
      .option('name', nameOpt)
      .option('target', targetOpt)
      .option('no-replace', noReplaceOpt);

    parser.command('clean')
      .describe('fixes geometry issues, such as polygon overlaps and gaps')

      .option('gap-fill-area', minGapAreaOpt)
      .option('sliver-control', sliverControlOpt)
      .option('snap-interval', snapIntervalOpt)
      .option('no-snap', noSnapOpt)
      .option('allow-empty', {
        describe: 'keep null geometries (removed by default)',
        type: 'flag'
      })
      .option('rewind', {
        describe: 'fix errors in the CW/CCW winding order of polygon rings',
        type: 'flag'
      })
      // TODO: consider making this the standard way of removing null geometry
      // (currently there's -filter remove-empty)
      // .option('empty', {
      //   describe: 'remove features with null geometry',
      //   type: 'flag'
      // })
      .option('arcs', { // old name for arcs-only
        alias_to: 'only-arcs'
      })
      .option('only-arcs', {
        describe: 'delete unused arcs but don\'t remove gaps and overlaps',
        type: 'flag'
      })
      .option('debug', {
        type: 'flag'
      })
      .option('no-arc-dissolve', {
        type: 'flag' // no description
      })
      .option('target', targetOpt);

    parser.command('clip')
      .describe('use a polygon layer to clip another layer')
      .example('$ mapshaper states.shp -clip land_area.shp -o clipped.shp')
      .option('source', {
        DEFAULT: true,
        describe: 'file or layer containing clip polygons'
      })
      .option('remove-slivers', {
        describe: 'remove sliver polygons created by clipping',
        type: 'flag'
      })
      .option('bbox', bboxOpt)
      .option('bbox2', {
          type: 'bbox',
          describe: 'experimental fast bbox clipping'
        })
      .option('name', nameOpt)
      .option('no-snap', noSnapOpt)
      .option('target', targetOpt)
      .option('no-replace', noReplaceOpt);

    parser.command('colorizer')
      .describe('define a function to convert data values to color classes')
      .flag('no_arg')
      .option('colors', {
        describe: 'comma-separated list of CSS colors',
        type: 'colors'
      })
      .option('breaks', {
        describe: 'ascending-order list of breaks for sequential color scheme',
        type: 'numbers'
      })
      .option('categories', {
        describe: 'comma-sep. list of keys for categorical color scheme',
        type: 'strings'
      })
      .option('random', {
        describe: 'randomly assign colors',
        type: 'flag'
      })
      .option('other', {
        describe: 'default color for categorical scheme (defaults to no-data color)'
      })
      .option('nodata', {
        describe: 'color to use for invalid or missing data (default is white)'
      })
      .option('name', {
        describe: 'function name to use in -each and -svg-style commands'
      })
      .option('precision', {
        describe: 'rounding precision to apply before classification (e.g. 0.1)',
        type: 'number'
      })
      .example('Define a sequential color scheme and use it to create a new field\n' +
          '$ mapshaper data.json -colorizer name=getColor nodata=#eee breaks=20,40 \\\n' +
          '  colors=#e0f3db,#a8ddb5,#43a2ca -each \'fill = getColor(RATING)\' -o output.json');

    parser.command('dissolve')
      .describe('merge features within a layer')
      .example('Dissolve all polygons in a feature layer into a single polygon\n' +
        '$ mapshaper states.shp -dissolve -o country.shp')
      .example('Generate state-level polygons by dissolving a layer of counties\n' +
        '(STATE_FIPS, POPULATION and STATE_NAME are attribute field names)\n' +
        '$ mapshaper counties.shp -dissolve STATE_FIPS copy-fields=STATE_NAME sum-fields=POPULATION -o states.shp')
      .option('field', {}) // old arg handled by dissolve function
      .option('fields', dissolveFieldsOpt)
      .option('calc', calcOpt)
      .option('sum-fields', sumFieldsOpt)
      .option('copy-fields', copyFieldsOpt)
      .option('multipart', {
        type: 'flag',
        describe: 'make multipart features instead of dissolving'
      })
      .option('where', whereOpt)
      .option('group-points', {
        type: 'flag',
        describe: '[points] group points instead of converting to centroids'
      })
      .option('weight', {
        describe: '[points] field or expression to use for weighting centroid'
      })
      .option('planar', {
        type: 'flag',
        describe: '[points] use 2D math to find centroids of latlong points'
      })
      .option('name', nameOpt)
      .option('target', targetOpt)
      .option('no-replace', noReplaceOpt);


    parser.command('dissolve2')
      .describe('merge adjacent polygons (repairs overlaps and gaps)')
      .option('field', {}) // old arg handled by dissolve function
      .option('fields', dissolveFieldsOpt)
      // UPDATE: Use -mosaic command for debugging
      //.option('mosaic', {type: 'flag'}) // debugging option
      //.option('arcs', {type: 'flag'}) // debugging option
      //.option('tiles', {type: 'flag'}) // debugging option
      .option('calc', calcOpt)
      .option('sum-fields', sumFieldsOpt)
      .option('copy-fields', copyFieldsOpt)
      .option('gap-fill-area', minGapAreaOpt)
      .option('sliver-control', sliverControlOpt)
      .option('name', nameOpt)
      .option('no-snap', noSnapOpt)
      .option('target', targetOpt)
      .option('no-replace', noReplaceOpt);

    parser.command('divide')
      .describe('divide lines by polygons, copy polygon data to lines')
      .option('fields', {
        describe: 'fields to copy (comma-sep.) (default is all but key field)',
        type: 'strings'
      })
      .option('calc', {
        describe: 'use a JS expression to assign values (for many-to-one joins)'
      })
      .option('force', {
        describe: 'replace values from same-named fields',
        type: 'flag'
      })
      .option('source', {
        DEFAULT: true,
        describe: 'file or layer containing polygons'
      })
      .option('target', targetOpt);
      // .option('no-replace', noReplaceOpt);

    parser.command('dots')
      .describe('')
      .option('field', {
        describe: 'field containing number of dots'
      })
      .option('target', targetOpt);

    parser.command('drop')
      .describe('delete layer(s) or elements within the target layer(s)')
      .flag('no_arg') // prevent trying to pass a list of layer names as default option
      .option('geometry', {
        describe: 'delete all geometry from the target layer(s)',
        type: 'flag'
      })
      .option('holes', {
        describe: 'delete holes from polygons',
        type: 'flag'
      })
      .option('fields', {
        type: 'strings',
        describe: 'delete a list of attribute data fields, e.g. \'id,name\' \'*\''
      })
      .option('target', targetOpt);

    parser.command('each')
      .describe('create/update/delete data fields using a JS expression')
      .example('Add two calculated data fields to a layer of U.S. counties\n' +
          '$ mapshaper counties.shp -each \'STATE_FIPS=CNTY_FIPS.substr(0, 2), AREA=$.area\'')
      .option('expression', {
        DEFAULT: true,
        describe: 'JS expression to apply to each target feature'
      })
      .option('where', whereOpt)
      .option('target', targetOpt);

    parser.command('erase')
      .describe('use a polygon layer to erase another layer')
      .example('$ mapshaper land_areas.shp -erase water_bodies.shp -o erased.shp')
      .option('source', {
        DEFAULT: true,
        describe: 'file or layer containing erase polygons'
      })
      .option('remove-slivers', {
        describe: 'remove sliver polygons created by erasing',
        type: 'flag'
      })
      .option('bbox', bboxOpt)
      .option('name', nameOpt)
      .option('no-snap', noSnapOpt)
      .option('target', targetOpt)
      .option('no-replace', noReplaceOpt);

    parser.command('explode')
      .describe('divide multi-part features into single-part features')
      .option('naive', {type: 'flag'}) // testing
      .option('target', targetOpt);

    parser.command('filter')
      .describe('delete features using a JS expression')
      .option('expression', {
        DEFAULT: true,
        describe: 'delete features that evaluate to false'
      })
      .option('bbox', {
        describe: 'delete features outside bbox (xmin,ymin,xmax,ymax)',
        type: 'bbox'
      })
      .option('invert', invertOpt)
      .option('remove-empty', {
        type: 'flag',
        describe: 'delete features with null geometry'
      })
      .option('keep-shapes', {
        type: 'flag'
      })
      .option('cleanup', {type: 'flag'}) // TODO: document
      .option('name', nameOpt)
      .option('target', targetOpt)
      .option('no-replace', noReplaceOpt);

    parser.command('filter-fields')
      .describe('retain a subset of data fields')
      .option('fields', {
        DEFAULT: true,
        type: 'strings',
        describe: 'fields to retain (comma-sep.), e.g. \'fips,name\''
      })
      .option('target', targetOpt);

    parser.command('filter-geom')
      .describe('')
      .option('bbox', {
        type: 'bbox',
        describe: 'remove non-intersecting geometry (xmin,ymin,xmax,ymax)'
      })
      .option('target', targetOpt);

    parser.command('filter-islands2')
      // .describe('remove small detached polygon rings (islands)')
      .option('min-area', {
        type: 'area',
        describe: 'remove small-area islands (e.g. 10km2)'
      })
      .option('min-vertices', {
        type: 'integer',
        describe: 'remove low-vertex-count islands'
      })
      .option('keep-shapes', {
        type: 'flag',
        describe: 'only filter smaller parts of multipart polygons',
      })
      .option('remove-empty', {
        type: 'flag',
        describe: 'delete features with null geometry'
      })
      .option('target', targetOpt);

    parser.command('filter-islands')
      .describe('remove small detached polygon rings (islands)')
      .option('min-area', {
        type: 'area',
        describe: 'remove small-area islands (e.g. 10km2)'
      })
      .option('min-vertices', {
        type: 'integer',
        describe: 'remove low-vertex-count islands'
      })
      .option('remove-empty', {
        type: 'flag',
        describe: 'delete features with null geometry'
      })
      .option('target', targetOpt);

    parser.command('filter-slivers')
      .describe('remove small polygon rings')
      .option('min-area', {
        type: 'area',
        describe: 'area threshold (e.g. 2sqkm)'
      })
      .option('sliver-control', {
        describe: 'boost area threshold of slivers (0-1, default is 1)',
        type: 'number'
      })
      .option('weighted', {
        // describe: 'multiply min-area by Polsby-Popper compactness (0-1)'
        type: 'flag',
      })
      /*
      .option('remove-empty', {
        type: 'flag',
        describe: 'delete features with null geometry'
      })
      */
      .option('target', targetOpt);

    parser.command('graticule')
      .describe('create a graticule layer');

    parser.command('grid')
      .describe('create a grid of square or hexagonal polygons')
      .option('type', {
        describe: 'square, hex or hex2 (default is square)'
      })
      .option('interval', {
        describe: 'side length (e.g. 500m, 12km)',
        type: 'distance'
      })
      // .option('cols', {
      //   type: 'integer'
      // })
      // .option('rows', {
      //   type: 'integer'
      // })
      // .option('bbox', {
      //   type: 'bbox',
      //   describe: 'xmin,ymin,xmax,ymax (default is bbox of data)'
      // })
      .option('debug', {
        type: 'flag'
      })
      .option('name', nameOpt)
      .option('target', targetOpt)
      .option('no-replace', noReplaceOpt);

    parser.command('inlay')
      .describe('inscribe a polygon layer inside another polygon layer')
      .option('source', {
        DEFAULT: true,
        describe: 'file or layer containing polygons to inlay'
      })
      .option('target', targetOpt);

    parser.command('innerlines')
      .describe('convert polygons to polylines along shared edges')
      .flag('no_arg')
      .option('where', whereOpt2)
      // .option('each', eachOpt2)
      .option('name', nameOpt)
      .option('target', targetOpt)
      .option('no-replace', noReplaceOpt);

    parser.command('join')
      .describe('join data records from a file or layer to a layer')
      .example('Join a csv table to a Shapefile (don\'t auto-convert FIPS column to numbers)\n' +
        '$ mapshaper states.shp -join data.csv keys=STATE_FIPS,FIPS string-fields=FIPS -o joined.shp')
      .validate(function(cmd) {
        if (!cmd.options.source) {
          error('Command requires the name of a layer or file to join');
        }
      })
      .option('source', {
        DEFAULT: true,
        describe: 'file or layer containing data records'
      })
      .option('keys', {
        describe: 'join by matching target,source key fields, e.g. keys=FID,id',
        type: 'strings'
      })
      .option('calc', {
        describe: 'use a JS expression to assign values (for many-to-one joins)'
      })
      .option('where', {
        describe: 'use a JS expression to filter source records'
      })
      .option('fields', {
        describe: 'fields to copy (comma-sep.) (default is all but key field)',
        type: 'strings'
      })
      .option('prefix', {
        describe: 'prefix for renaming fields joined from the source table'
      })
      .option('interpolate', {
        describe: '(polygon-polygon join) list of area-interpolated fields',
        type: 'strings'
      })
      .option('point-method', {
        describe: '(polygon-polygon join) join polygons via inner points',
        type: 'flag'
      })
      .option('planar', {
        // describe: 'use planar geometry when interpolating by area' // useful for testing
        type: 'flag'
      })
      .option('string-fields', stringFieldsOpt)
      .option('field-types', fieldTypesOpt)
      .option('sum-fields', {
        describe: 'fields to sum in a many-to-one join (or use calc= for this)',
        type: 'strings'
      })
      .option('force', {
        describe: 'replace values from same-named fields',
        type: 'flag'
      })
      .option('unjoined', {
        describe: 'copy unjoined records from source table to "unjoined" layer',
        type: 'flag'
      })
      .option('unmatched', {
        describe: 'copy unmatched records in target table to "unmatched" layer',
        type: 'flag'
      })
      .option('encoding', encodingOpt)
      .option('target', targetOpt);

    parser.command('lines')
      .describe('convert a polygon or point layer to a polyline layer')
      .option('fields', {
        DEFAULT: true,
        describe: 'field(s) to create a hierarchy of boundary lines',
        type: 'strings'
      })
      .option('where', whereOpt2)
      .option('each', eachOpt2)
      .option('segments', {
        describe: 'convert paths to segments, for debugging',
        type: 'flag'
      })
      .option('callouts', {
        // describe: 'convert points to lines for editing in the GUI',
        type: 'flag'
      })
      .option('arcs', {
        describe: 'convert paths to arcs, for debugging',
        type: 'flag'
      })
      .option('groupby', {
        describe: 'field for grouping point input into multiple lines'
      })
      .option('name', nameOpt)
      .option('target', targetOpt)
      .option('no-replace', noReplaceOpt);

    parser.command('merge-layers')
      .describe('merge multiple layers into as few layers as possible')
      .flag('no_arg')
      .option('force', {
        type: 'flag',
        describe: 'merge layers with inconsistent data fields'
      })
      .option('name', nameOpt)
      .option('target', targetOpt);

    parser.command('mosaic')
      .describe('convert a polygon layer with overlaps into a flat mosaic')
      .option('calc', calcOpt)
      .option('debug', {type: 'flag'})
      .option('name', nameOpt)
      .option('target', targetOpt)
      .option('no-replace', noReplaceOpt);

    parser.command('point-grid')
      .describe('create a rectangular grid of points')
      .validate(validateGridOpts)
      .option('-', {
        label: '<cols,rows>',
        describe: 'size of the grid, e.g. -point-grid 100,100'
      })
      .option('interval', {
        describe: 'distance between adjacent points, in source units',
        type: 'distance'
      })
      .option('cols', {
        type: 'integer'
      })
      .option('rows', {
        type: 'integer'
      })
      .option('bbox', {
        type: 'bbox',
        describe: 'xmin,ymin,xmax,ymax (default is bbox of data)'
      })
      .option('name', nameOpt);

    parser.command('points')
      .describe('create a point layer from a different layer type')
      .flag('no_arg')
      .option('x', {
        describe: 'field containing x coordinate'
      })
      .option('y', {
        describe: 'field containing y coordinate'
      })
      .option('inner', {
        describe: 'create an interior point for each polygon\'s largest ring',
        type: 'flag'
      })
      .option('centroid', {
        describe: 'create a centroid point for each polygon\'s largest ring',
        type: 'flag'
      })
      .option('vertices', {
        describe: 'capture unique vertices of polygons and polylines',
        type: 'flag'
      })
      .option('vertices2', {
        describe: 'like vertices, but without removal of duplicate coordinates',
        type: 'flag'
      })
      .option('endpoints', {
        describe: 'capture unique endpoints of polygons and polylines',
        type: 'flag'
      })
      // WORK IN PROGRESS todo: create a point layer containing segment intersections
      .option('intersections', {
       // describe: 'capture line segment intersections of polygons and polylines',
       type: 'flag'
      })
      .option('interpolated', {
        describe: 'interpolate points along polylines; requires interval=',
        type: 'flag'
      })
      .option('interval', {
        describe: 'distance between interpolated points (meters or projected units)',
        type: 'distance'
      })
      .option('name', nameOpt)
      .option('target', targetOpt)
      .option('no-replace', noReplaceOpt);

    parser.command('polygons')
      .describe('convert polylines to polygons')
      .option('gap-tolerance', {
        describe: 'specify gap tolerance in source units',
        type: 'distance'
      })
      .option('from-rings', {
        describe: 'do simple conversion from a layer of closed paths',
        type: 'flag'
      })
      .option('target', targetOpt);

    parser.command('proj')
      .describe('project your data (using Proj.4)')
      .flag('multi_arg')
      .option('crs', {
        DEFAULT: true,
        describe: 'set destination CRS using a Proj.4 definition or alias'
      })
      .option('projection', {
        alias_to: 'crs'
      })
      .option('match', {
        describe: 'set destination CRS using a .prj file or layer id'
      })
      .option('source', {
        // describe: '(deprecated) alias for match',
        alias_to: 'match'
      })
      .option('from', {
        alias_to: 'init',
        describe: '(deprecated) alias for init='
      })
      .option('init', {
        describe: 'set source CRS (if unset) using a string, .prj or layer id'
      })
      .option('densify', {
        type: 'flag',
        describe: 'add points along straight segments to approximate curves'
      })
      .option('target', targetOpt)
      .validate(validateProjOpts);

    parser.command('rectangle')
      .describe('create a rectangle from a bbox or target layer extent')
      .option('bbox', {
        describe: 'rectangle coordinates (xmin,ymin,xmax,ymax)',
        type: 'bbox'
      })
      .option('offset', offsetOpt)
      .option('aspect-ratio', aspectRatioOpt)
      .option('source', {
        describe: 'name of layer to enclose'
      })
      .option('name', nameOpt)
      .option('target', targetOpt)
      .option('no-replace', noReplaceOpt);

    parser.command('rectangles')
      .describe('create a rectangle around each feature in a layer')
      .option('offset', offsetOpt)
      .option('aspect-ratio', aspectRatioOpt)
      .option('name', nameOpt)
      .option('target', targetOpt)
      .option('no-replace', noReplaceOpt);

    parser.command('rename-fields')
      .describe('rename data fields')
      .option('fields', {
        DEFAULT: true,
        type: 'strings',
        describe: 'fields to rename (comma-sep.), e.g. \'fips=STATE_FIPS,st=state\''
      })
      .option('target', targetOpt);

    parser.command('rename-layers')
      .describe('assign new names to layers')
      .option('names', {
        DEFAULT: true,
        type: 'strings',
        describe: 'new layer name(s) (comma-sep. list)'
      })
      .option('target', targetOpt);

    parser.command('simplify')
      .validate(validateSimplifyOpts)
      .example('Retain 10% of removable vertices\n$ mapshaper input.shp -simplify 10%')
      .describe('simplify the geometry of polygon and polyline features')
      .option('percentage', {
        DEFAULT: true,
        alias: 'p',
        type: 'percent',
        describe: 'percentage of removable points to retain, e.g. 10%'
      })
      .option('dp', {
        alias: 'rdp',
        describe: 'use Ramer-Douglas-Peucker simplification',
        assign_to: 'method'
      })
      .option('visvalingam', {
        describe: 'use Visvalingam simplification with "effective area" metric',
        assign_to: 'method'
      })
      .option('weighted', {
        describe: 'use weighted Visvalingam simplification (default)',
        assign_to: 'method'
      })
      .option('method', {
        // hidden option
      })
      .option('weighting', {
        type: 'number',
        describe: 'weighted Visvalingam coefficient (default is 0.7)'
      })
      .option('resolution', {
        describe: 'output resolution as a grid (e.g. 1000x500)'
      })
      .option('interval', {
        // alias: 'i',
        describe: 'output resolution as a distance (e.g. 100)',
        type: 'distance'
      })
      /*
      .option('value', {
        // for testing
        // describe: 'raw value of simplification threshold',
        type: 'number'
      })
      */
      .option('variable', {
        // describe: 'expect an expression with interval=, percentage= or resolution=',
        describe: 'JS expr. assigning to one of: interval= percentage= resolution=',
        type: 'flag'
      })
      .option('planar', {
        describe: 'simplify decimal degree coords in 2D space (default is 3D)',
        type: 'flag'
      })
      .option('cartesian', {
        // describe: '(deprecated) alias for planar',
        alias_to: 'planar'
      })
      .option('keep-shapes', {
        describe: 'prevent small polygon features from disappearing',
        type: 'flag'
      })
      .option('lock-box', {
        // describe: 'don't remove vertices along bbox edges'
        type: 'flag'
      })
      .option('no-repair', {
        describe: 'don\'t remove intersections introduced by simplification',
        type: 'flag'
      })
      .option('stats', {
        describe: 'display simplification statistics',
        type: 'flag'
      })
      .option('target', targetOpt);

    parser.command('slice')
      // .describe('slice a layer using polygons in another layer')
      .option('source', {
        DEFAULT: true,
        describe: 'file or layer containing clip polygons'
      })
      /*
      .option('remove-slivers', {
        describe: 'remove sliver polygons created by clipping',
        type: 'flag'
      }) */
      .option('id-field', {
        describe: 'slice id field (from source layer)'
      })
      .option('name', nameOpt)
      .option('no-snap', noSnapOpt)
      .option('target', targetOpt)
      .option('no-replace', noReplaceOpt);

    parser.command('snap')
      // .describe('snap vertices')
      .option('interval', {
        DEFAULT: true,
        type: 'distance'
      })
      .option('target', targetOpt);

    parser.command('sort')
      .describe('sort features using a JS expression')
      .option('expression', {
        DEFAULT: true,
        describe: 'JS expression to generate a sort key for each feature'
      })
      .option('ascending', {
        describe: 'sort in ascending order (default)',
        type: 'flag'
      })
      .option('descending', {
        describe: 'sort in descending order',
        type: 'flag'
      })
      .option('target', targetOpt);

    parser.command('split')
      .describe('split a layer into single-feature or multi-feature layers')
      .option('field', {
        // former name
        alias_to: 'expression'
      })
      .option('expression', {
        DEFAULT: true,
        describe: 'expression or field for grouping features and naming split layers'
      })
      .option('target', targetOpt)
      .option('no-replace', noReplaceOpt);

    parser.command('split-on-grid')
      .describe('split features into separate layers using a grid')
      .validate(validateGridOpts)
      .option('-', {
        label: '<cols,rows>',
        describe: 'size of the grid, e.g. -split-on-grid 12,10'
      })
      .option('cols', {
        type: 'integer'
      })
      .option('rows', {
        type: 'integer'
      })
      .option('id-field', {
        describe: 'assign each feature a cell id instead of splitting layer'
      })
      // .option('no-replace', noReplaceOpt)
      .option('target', targetOpt);

    parser.command('style')
      .oldAlias('svg-style')
      .describe('set SVG style properties using JS or literal values')
      .option('where', whereOpt)
      .option('class', {
        describe: 'name of CSS class or classes (space-separated)'
      })
      // .option('css', {
      //   describe: 'inline css style'
      // })
      .option('fill', {
        describe: 'fill color; examples: #eee pink rgba(0, 0, 0, 0.2)'
      })
      .option('stroke', {
        describe: 'stroke color'
      })
      .option('stroke-width', {
        describe: 'stroke width'
      })
      .option('stroke-dasharray', {
        describe: 'stroke dashes. Examples: "4" "2 4"'
      })
      .option('fill-hatch', {
        describe: 'use a hatched fill; ex: "45deg grey 2px blue 2px"'
      })
      .option('stroke-opacity', {
        describe: 'stroke opacity'
      })
      .option('fill-opacity', {
        describe: 'fill opacity'
      })
      .option('opacity', {
        describe: 'opacity; example: 0.5'
      })
      .option('r', {
        describe: 'symbol radius (set this to export points as circles)',
      })
      .option('label-text', {
        describe: 'label text (set this to export points as labels)'
      })
      .option('text-anchor', {
        describe: 'label alignment; one of: start, end, middle (default)'
      })
      .option('dx', {
        describe: 'x offset of labels (default is 0)'
      })
      .option('dy', {
        describe: 'y offset of labels (default is 0/baseline-aligned)'
      })
      .option('font-size', {
        describe: 'size of label text (default is 12)'
      })
      .option('font-family', {
        describe: 'CSS font family of labels (default is sans-serif)'
      })
      .option('font-weight', {
        describe: 'CSS font weight property of labels (e.g. bold, 700)'
      })
      .option('font-style', {
        describe: 'CSS font style property of labels (e.g. italic)'
      })
       .option('letter-spacing', {
        describe: 'CSS letter-spacing property of labels'
      })
       .option('line-height', {
        describe: 'line spacing of multi-line labels (default is 1.1em)'
      })
     .option('target', targetOpt);

    parser.command('symbols')
      // .describe('generate a variety of SVG symbols')
      .option('type', {
        describe: 'symbol type'
      })
      .option('stroke', {})
      .option('stroke-width', {})
      .option('fill', {})
      .option('length', {})
      .option('rotation', {})
      .option('curve', {})
      .option('effect', {})
      .option('where', whereOpt)
      .option('target', targetOpt);
      // .option('name', nameOpt);

    parser.command('target')
      .describe('set active layer (or layers)')
      .option('target', {
        DEFAULT: true,
        describe: 'name or index of layer to target'
      })
      .option('type', {
        describe: 'type of layer to target (polygon|polyline|point)'
      })
      .option('name', {
        describe: 'rename the target layer'
      });

    parser.command('union')
      .describe('create a flat mosaic from two or more polygon layers')
      // .option('add-fid', {
      //   describe: 'add FID_A, FID_B, ... fields to output layer',
      //   type: 'flag'
      // })
      .option('fields', {
        type: 'strings',
        describe: 'fields to retain (comma-sep.) (default is all fields)',
      })
      .option('name', nameOpt)
      .option('target', {
        describe: 'specify layers to target (comma-sep. list)'
      })
      .option('no-replace', noReplaceOpt);

    parser.command('uniq')
      .describe('delete features with the same id as a previous feature')
      .option('expression', {
        DEFAULT: true,
        describe: 'JS expression to obtain the id of a feature'
      })
      .option('max-count', {
        type: 'number',
        describe: 'max features with the same id (default is 1)'
      })
      .option('index', {
        // describe: 'add an index instead of filtering'
        type: 'flag'
      })
      .option('invert', invertOpt)
      .option('verbose', {
        describe: 'print each removed feature',
        type: 'flag'
      })
      .option('target', targetOpt);


    // Experimental commands
    parser.section('Experimental commands (may give unexpected results)');

    parser.command('cluster')
      .describe('group polygons into compact clusters')
      .option('id-field', {
        describe: 'field name of cluster id (default is "cluster")'
      })
      .option('pct', {
        alias: 'p',
        type: 'percent',
        describe: 'percentage of shapes to retain, e.g. 50%'
      })
      .option('max-width', {
        describe: 'max width of cluster bounding box',
        type: 'number'
      })
      .option('max-height', {
        describe: 'max height of cluster bounding box',
        type: 'number'
      })
      .option('max-area', {
        describe: 'max area of a cluster',
        type: 'number'
      })
      .option('group-by', {
        describe: 'field name; only same-value shapes will be grouped'
      })
      .option('target', targetOpt);

    parser.command('data-fill')
      .describe('fill in missing values in a polygon layer')
      .option('field', {
        describe: 'name of field to fill in'
      })
      .option('postprocess', {alias_to: 'contiguous'})
      .option('contiguous', {
        describe: 'remove non-contiguous data islands',
        type: 'flag'
      })
      // .option('min-weight-pct', {
      //   describe: 'retain data islands weighted more than this pct'
      // })
      .option('weight-field', {
        describe: 'use field values to calculate data island weights'
      });

    parser.command('external')
      .option('module', {
        DEFAULT: true,
        describe: 'name of Node module containing the command'
      });

    parser.command('frame')
      // .describe('create a map frame at a given size')
      .option('bbox', {
        describe: 'frame coordinates (xmin,ymin,xmax,ymax)',
        type: 'bbox'
      })
      .option('offset', offsetOpt)
      .option('width', {
        describe: 'pixel width of output (default is 800)'
      })
      .option('height', {
        describe: 'pixel height of output (may be a range)'
      })
      .option('pixels', {
        describe: 'area of output in pixels (alternative to width and height)',
        type: 'number'
      })
      .option('source', {
        describe: 'name of layer to enclose'
      })
      .option('name', nameOpt);

    parser.command('include')
      .describe('import JS data and functions for use in JS expressions')
      .option('file', {
        DEFAULT: true,
        describe: 'file containing a JS object with key:value pairs to import'
      });

    parser.command('fuzzy-join')
      .describe('join points to polygons, with data fill and fuzzy match')
      .option('source', {
        DEFAULT: true,
        describe: 'file or layer containing data records'
      })
      .option('field', {
        describe: 'field to join'
      })
      .option('dedup-points', {
        describe: 'uniqify points with the same location and field value',
        type: 'flag'
      })
      .option('no-dropouts', {
        describe: 'try to retain all values from the point layer',
        type: 'flag'
      })
      .option('postprocess', {alias_to: 'contiguous'})
      .option('contiguous', {
        describe: 'remove non-contiguous data islands',
        type: 'flag'
      })
      .option('target', targetOpt);

    parser.command('require')
      .describe('require a Node module for use in -each expressions')
      .option('module', {
        DEFAULT: true,
        describe: 'name of Node module or path to module file'
      })
      .option('alias', {
        describe: 'Set the module name to an alias'
      })
      .option('init', {
        describe: 'JS expression to run after the module loads'
      });

    parser.command('run')
      .describe('create commands on-the-fly and run them')
      .option('include', {
        // TODO: remove this option
      })
      .option('commands', {
        DEFAULT: true,
        describe: 'command string or JS expresson to generate command(s)'
      })
      .option('target', targetOpt);

    parser.command('scalebar')
      // .describe()
      .option('top', {})
      .option('right', {})
      .option('bottom', {})
      .option('left', {})
      .option('font-size', {})
      // .option('font-family', {})
      .option('label-position', {}) // top or bottom
      .option('label-text', {});

    parser.command('shape')
      .describe('create a polyline or polygon from coordinates')
      .option('coordinates', {
        describe: 'list of vertices as x,y,x,y...',
        type: 'numbers'
      })
      .option('offsets', {
        describe: 'list of vertices as offsets from coordinates list',
        type: 'numbers'
      })
      .option('closed', {
        describe: 'close an open path to create a polygon',
        type: 'flag'
      })
      .option('name', nameOpt);

    parser.command('subdivide')
      .describe('recursively split a layer using a JS expression')
      .validate(validateExpressionOpt)
      .option('expression', {
        DEFAULT: true,
        describe: 'boolean JS expression'
      })
      .option('target', targetOpt);

    parser.section('Informational commands');

    parser.command('calc')
      .describe('calculate statistics about the features in a layer')
      .example('Calculate the total area of a polygon layer\n' +
        '$ mapshaper polygons.shp -calc \'sum($.area)\'')
      .example('Count census blocks in NY with zero population\n' +
        '$ mapshaper ny-census-blocks.shp -calc \'count()\' where=\'POPULATION == 0\'')
      .validate(validateExpressionOpt)
      .option('expression', {
        DEFAULT: true,
        describe: 'functions: sum() average() median() max() min() count()'
      })
      .option('where', whereOpt)
      .option('target', targetOpt);

    parser.command('encodings')
      .describe('print list of supported text encodings (for .dbf import)');

    parser.command('help')
      .alias('h')
      .describe('print help; takes optional command name')
      .option('command', {
        DEFAULT: true,
        describe: 'view detailed information about a command'
      });

    parser.command('info')
      .describe('print information about data layers')
      .option('target', targetOpt);

    parser.command('inspect')
      .describe('print information about a feature')
      .option('expression', {
        DEFAULT: true,
        describe: 'boolean JS expression for selecting a feature'
      })
      .option('target', targetOpt)
      .validate(validateExpressionOpt);

    parser.command('projections')
      .describe('print list of supported projections');

    parser.command('quiet')
      .describe('inhibit console messages');

    parser.command('verbose')
      .describe('print verbose processing messages');

    parser.command('version')
      .alias('v')
      .describe('print mapshaper version');

    parser.command('debug');

    return parser;
  }

  function convertSourceName(name, targets) {
    if (!nameIsInterpolated(name)) return name;
    if (targets.length > 1 || targets[0].layers.length != 1) {
      stop("Interpolated names are not compatible with multiple targets.");
    }
    return convertInterpolatedName(name, targets[0].layers[0]);
  }

  function convertInterpolatedName(name, lyr) {
    var ctx = {target: lyr.name || ''};
    var body = 'with($$ctx) { return `' + name + '`; }';
    var func;
    try {
      func = new Function("$$ctx", body);
      name = func(ctx);
    } catch(e) {
      stop("Unable to interpolate [" + name + "]");
    }
    return name;
  }

  function nameIsInterpolated(name) {
    return /[$][{]/.test(name);
  }

  function findCommandSource(sourceName, catalog, opts) {
    var source = catalog.findSingleLayer(sourceName);
    var sourceDataset;
    if (!source) {
      // assuming opts.source is a filename
      // don't need to build topology, because:
      //    join -- don't need topology
      //    clip/erase -- topology is built later, when datasets are combined
      sourceDataset = importFile(sourceName, utils.defaults({no_topology: true}, opts));
      if (!sourceDataset) {
        stop(utils.format('Unable to find source [%s]', sourceName));
      } else if (sourceDataset.layers.length > 1) {
        stop('Multiple-layer sources are not supported');
      }
      // mark as disposable to indicate that data can be mutated
      source = {dataset: sourceDataset, layer: sourceDataset.layers[0], disposable: true};
    }
    return source;
  }

  var SourceUtils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    convertSourceName: convertSourceName,
    convertInterpolatedName: convertInterpolatedName,
    findCommandSource: findCommandSource
  });

  // Catalog contains zero or more multi-layer datasets
  // One layer is always "active", corresponding to the currently selected
  //   layer in the GUI or the current target in the CLI
  function Catalog() {
    var datasets = [],
        defaultTargets = [];// saved default command targets [{layers:[], dataset}, ...]

    this.forEachLayer = function(cb) {
      var i = 0;
      datasets.forEach(function(dataset) {
        dataset.layers.forEach(function(lyr) {
          cb(lyr, dataset, i++);
        });
      });
    };

    // remove a layer from a dataset
    this.deleteLayer = function(lyr, dataset) {
      // if deleting first target layer (selected in gui) -- switch to some other layer
      if (this.getActiveLayer().layer == lyr) {
        defaultTargets = [];
      }

      // remove layer from its dataset
      dataset.layers.splice(dataset.layers.indexOf(lyr), 1);
      if (dataset.layers.length === 0) {
        this.removeDataset(dataset);
      }

      // remove layer from defaultTargets
      defaultTargets = defaultTargets.filter(function(targ) {
        var i = targ.layers.indexOf(lyr);
        if (i == -1) return true;
        targ.layers.splice(i, 1);
        return targ.layers.length > 0;
      });
    };

    // @arg: a layer object or a test function
    this.findLayer = function(arg) {
      var test = typeof arg == 'function' ? arg : null;
      var found = null;
      this.forEachLayer(function(lyr, dataset) {
        if (test ? test(lyr, dataset) : lyr == arg) {
          found = layerObject(lyr, dataset);
        }
      });
      return found;
    };

    this.findCommandTargets = function(pattern, type) {
      if (!pattern) return this.getDefaultTargets() || [];
      return findCommandTargets(this.getLayers(), pattern, type);
    };

    this.findSingleLayer = function(pattern) {
      var matches = findMatchingLayers(this.getLayers(), pattern);
      if (matches.length > 1) {
        stop('Ambiguous pattern (multiple layers were matched):', pattern);
      }
      return matches[0] || null;
    };

    this.removeDataset = function(dataset) {
      defaultTargets = defaultTargets.filter(function(targ) {
        return targ.dataset != dataset;
      });
      datasets = datasets.filter(function(d) {
        return d != dataset;
      });
    };

    this.getDatasets = function() {
      return datasets;
    };

    this.getLayers = function() {
      var layers = [];
      this.forEachLayer(function(lyr, dataset) {
        layers.push(layerObject(lyr, dataset));
      });
      return layers;
    };

    this.addDataset = function(dataset) {
      this.setDefaultTarget(dataset.layers, dataset);
      return this;
    };

    this.findNextLayer = function(lyr) {
      var layers = this.getLayers(),
          idx = indexOfLayer(lyr, layers);
      return idx > -1 ? layers[(idx + 1) % layers.length] : null;
    };

    this.findPrevLayer = function(lyr) {
      var layers = this.getLayers(),
          idx = indexOfLayer(lyr, layers);
      return idx > -1 ? layers[(idx - 1 + layers.length) % layers.length] : null;
    };

    this.isEmpty = function() {
      return datasets.length === 0;
    };

    this.getDefaultTargets = function() {
      if (defaultTargets.length === 0 && !this.isEmpty()) {
        defaultTargets = [{dataset: datasets[0], layers: datasets[0].layers.slice(0, 1)}];
      }
      return defaultTargets;
    };

    this.setDefaultTarget = function(layers, dataset) {
      if (datasets.indexOf(dataset) == -1) {
        datasets.push(dataset);
      }
      defaultTargets = [{
        // Copy layers array, in case layers is a reference to dataset.layers.
        // This prevents layers that are added to the dataset inside a command from
        //  being added to the next command's target, e.g. debugging layers added
        //  by '-join unmatched unjoined'.
        layers: layers.concat(),
        dataset: dataset
      }];
    };

    this.setDefaultTargets = function(arr) {
      defaultTargets = arr;
    };

    // should be in gui-model.js, moved here for testing
    this.getActiveLayer = function() {
      var targ = (this.getDefaultTargets() || [])[0];
      return targ ? {layer: targ.layers[0], dataset: targ.dataset} : null;
    };

    function layerObject(lyr, dataset) {
      return {
        layer: lyr,
        dataset: dataset
      };
    }

    function indexOfLayer(lyr, layers) {
      var idx = -1;
      layers.forEach(function(o, i) {
        if (o.layer == lyr) idx = i;
      });
      return idx;
    }
  }

  function getFormattedLayerList(catalog) {
    var lines = [];
    catalog.forEachLayer(function(lyr, dataset, i) {
      lines.push('  [' + (i+1) + ']  ' + (lyr.name || '[unnamed]'));
    });
    return lines.length > 0 ? lines.join('\n') : '[none]';
  }

  var Catalog$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Catalog: Catalog,
    getFormattedLayerList: getFormattedLayerList
  });

  // Support for timing using T.start() and T.stop("message")
  var T = {
    stack: [],
    start: function() {
      T.stack.push(+new Date());
    },
    stop: function(note) {
      var elapsed = (+new Date() - T.stack.pop());
      var msg = elapsed + 'ms';
      if (note) {
        msg = note + " " + msg;
      }
      verbose(msg);
      return elapsed;
    }
  };

  // TODO: also delete positive-space rings nested inside holes
  function deleteHoles(lyr, arcs) {
    editShapes(lyr.shapes, function(path) {
      if (geom.getPathArea(path, arcs) <= 0) {
        return null; // null deletes the path
      }
    });
  }

  // Returns a function that separates rings in a polygon into space-enclosing rings
  // and holes. Also fixes self-intersections.
  //
  function getHoleDivider(nodes, spherical) {
    var split = getSelfIntersectionSplitter(nodes);
    // var split = internal.getSelfIntersectionSplitter_v1(nodes); console.log('split')

    return function(rings, cw, ccw) {
      var pathArea = spherical ? geom.getSphericalPathArea : geom.getPlanarPathArea;
      forEachShapePart(rings, function(ringIds) {
        var splitRings = split(ringIds);
        if (splitRings.length === 0) {
          debug("[getRingDivider()] Defective path:", ringIds);
        }
        splitRings.forEach(function(ringIds, i) {
          var ringArea = pathArea(ringIds, nodes.arcs);
          if (ringArea > 0) {
            cw.push(ringIds);
          } else if (ringArea < 0) {
            ccw.push(ringIds);
          }
        });
      });
    };
  }

  var PolygonHoles = /*#__PURE__*/Object.freeze({
    __proto__: null,
    deleteHoles: deleteHoles,
    getHoleDivider: getHoleDivider
  });

  // Return id of rightmost connected arc in relation to @arcId
  // Return @arcId if no arcs can be found
  function getRightmostArc(arcId, nodes, filter) {
    var ids = nodes.getConnectedArcs(arcId);
    if (filter) {
      ids = ids.filter(filter);
    }
    if (ids.length === 0) {
      return arcId; // error condition, handled by caller
    }
    return getRighmostArc2(arcId, ids, nodes.arcs);
  }

  function getRighmostArc2 (fromId, ids, arcs) {
    var coords = arcs.getVertexData(),
        xx = coords.xx,
        yy = coords.yy,
        inode = arcs.indexOfVertex(fromId, -1),
        nodeX = xx[inode],
        nodeY = yy[inode],
        ifrom = arcs.indexOfVertex(fromId, -2),
        fromX = xx[ifrom],
        fromY = yy[ifrom],
        toId = fromId, // initialize to from-arc -- an error
        ito, candId, icand, code, j;

    /*if (x == ax && y == ay) {
      error("Duplicate point error");
    }*/
    if (ids.length > 0) {
      toId = ids[0];
      ito = arcs.indexOfVertex(toId, -2);
    }

    for (j=1; j<ids.length; j++) {
      candId = ids[j];
      icand = arcs.indexOfVertex(candId, -2);
      code = chooseRighthandPath(fromX, fromY, nodeX, nodeY, xx[ito], yy[ito], xx[icand], yy[icand]);
      // code = internal.chooseRighthandPath(0, 0, nodeX - fromX, nodeY - fromY, xx[ito] - fromX, yy[ito] - fromY, xx[icand] - fromX, yy[icand] - fromY);
      if (code == 2) {
        toId = candId;
        ito = icand;
      }
    }
    if (toId == fromId) {
      // This shouldn't occur, assuming that other arcs are present
      error("Pathfinder error");
    }
    return toId;
  }

  function chooseRighthandPath2(fromX, fromY, nodeX, nodeY, ax, ay, bx, by) {
    return chooseRighthandVector(ax - nodeX, ay - nodeY, bx - nodeX, by - nodeY);
  }

  // TODO: consider using simpler internal.chooseRighthandPath2()
  // Returns 1 if node->a, return 2 if node->b, else return 0
  // TODO: better handling of identical angles (better -- avoid creating them)
  function chooseRighthandPath(fromX, fromY, nodeX, nodeY, ax, ay, bx, by) {
    var angleA = geom.signedAngle(fromX, fromY, nodeX, nodeY, ax, ay);
    var angleB = geom.signedAngle(fromX, fromY, nodeX, nodeY, bx, by);
    var code;
    if (angleA <= 0 || angleB <= 0) {
      debug("[chooseRighthandPath()] 0 angle(s):", angleA, angleB);
      if (angleA <= 0) {
        debug('  A orient2D:', geom.orient2D(fromX, fromY, nodeX, nodeY, ax, ay));
      }
      if (angleB <= 0) {
        debug('  B orient2D:', geom.orient2D(fromX, fromY, nodeX, nodeY, bx, by));
      }
      // TODO: test against "from" segment
      if (angleA > 0) {
        code = 1;
      } else if (angleB > 0) {
        code = 2;
      } else {
        code = 0;
      }
    } else if (angleA < angleB) {
      code = 1;
    } else if (angleB < angleA) {
      code = 2;
    } else if (isNaN(angleA) || isNaN(angleB)) {
      // probably a duplicate point, which should not occur
      error('Invalid node geometry');
    } else {
      // Equal angles: use fallback test that is less sensitive to rounding error
      code = chooseRighthandVector(ax - nodeX, ay - nodeY, bx - nodeX, by - nodeY);
      debug('[chooseRighthandPath()] equal angles:', angleA, 'fallback test:', code);
    }
    return code;
  }

  function chooseRighthandVector(ax, ay, bx, by) {
    var orient = geom.orient2D(ax, ay, 0, 0, bx, by);
    var code;
    if (orient > 0) {
      code = 2;
    } else if (orient < 0) {
      code = 1;
    } else {
      code = 0;
    }
    return code;
  }

  var PathfinderUtils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getRightmostArc: getRightmostArc,
    chooseRighthandVector: chooseRighthandVector
  });

  // Functions for redrawing polygons for clipping / erasing / flattening / division
  // These functions use 8 bit codes to control forward and reverse traversal of each arc.
  //
  // Function of path bits 0-7:
  // 0: is fwd path hidden or visible? (0=hidden, 1=visible)
  // 1: is fwd path open or closed for traversal? (0=closed, 1=open)
  // 2: unused
  // 3: unused
  // 4: is rev path hidden or visible?
  // 5: is rev path open or closed for traversal?
  // 6: unused
  // 7: unused
  //
  // Example codes:
  // 0x3 (3): forward path is visible and open, reverse path is hidden and closed
  // 0x10 (16): forward path is hidden and closed, reverse path is visible and closed
  //

  var FWD_VISIBLE = 0x1;
  var FWD_OPEN = 0x2;
  var REV_VISIBLE = 0x10;
  var REV_OPEN = 0x20;

  function setBits(bits, arcBits, mask) {
    return (bits & ~mask) | (arcBits & mask);
  }

  function andBits(bits, arcBits, mask) {
    return bits & (~mask | arcBits);
  }

  function setRouteBits(arcBits, arcId, routesArr) {
    var idx = absArcId(arcId), // get index of path in
        mask;
    if (idx == arcId) { // arcBits controls fwd path
      mask = ~3; // target fwd bits
    } else { // arcBits controls rev. path
      mask = ~0x30; // target rev bits
      arcBits = arcBits << 4; // shift code to target rev path
    }
    routesArr[idx] &= (arcBits | mask);
  }

  function getRouteBits(arcId, routesArr) {
    var idx = absArcId(arcId),
        bits = routesArr[idx];
    if (idx != arcId) bits = bits >> 4;
    return bits & 7;
  }

  // Open arc pathways in a single shape or array of shapes
  //
  function openArcRoutes(paths, arcColl, routesArr, fwd, rev, dissolve, orBits) {
    forEachArcId(paths, function(arcId) {
      var isInv = arcId < 0,
          idx = isInv ? ~arcId : arcId,
          currBits = routesArr[idx],
          openFwd = isInv ? rev : fwd,
          openRev = isInv ? fwd : rev,
          newBits = currBits;

      // error condition: lollipop arcs can cause problems; ignore these
      if (arcColl.arcIsLollipop(arcId)) {
        debug('lollipop');
        newBits = 0; // unset (i.e. make invisible)
      } else {
        if (openFwd) {
          newBits |= 3; // set fwd path to visible and open
        }
        if (openRev) {
          newBits |= 0x30; // set rev. path to visible and open
        }

        // placing this in front of dissolve - dissolve has to be able to hide
        // pathways that are made visible by orBits
        if (orBits > 0) {
          newBits |= orBits;
        }

        // dissolve hides arcs that have both fw and rev pathways open
        // (these arcs represent shared borders and will not be part of the dissolved path)
        //
        if (dissolve && (newBits & 0x22) === 0x22) {
          newBits &= ~0x11; // make invisible
        }
      }

      routesArr[idx] = newBits;
    });
  }

  function closeArcRoutes(arcIds, arcs, routesArr, fwd, rev, hide) {
    forEachArcId(arcIds, function(arcId) {
      var isInv = arcId < 0,
          idx = isInv ? ~arcId : arcId,
          currBits = routesArr[idx],
          mask = 0xff,
          closeFwd = isInv ? rev : fwd,
          closeRev = isInv ? fwd : rev;

      if (closeFwd) {
        if (hide) mask &= ~1;
        mask ^= 0x2;
      }
      if (closeRev) {
        if (hide) mask &= ~0x10;
        mask ^= 0x20;
      }
      routesArr[idx] = currBits & mask;
    });
  }

  // Return a function for generating a path across a graph of connected arcs
  // useRoute: function(arcId) {}
  //           Tries to extend path to the given arc
  //           Returns true and extends path by one arc on success
  //           Returns false and rejects the entire path on failure
  // routeIsUsable (optional): function(arcId) {}
  //           An optional filter function; pathfinder ignores the given arc if
  //           this function returns false;
  // TODO: add option to use spherical geometry for lat-lng coords
  //
  function getPathFinder(nodes, useRoute, routeIsUsable) {
    var testArc = null;
    if (routeIsUsable) {
      testArc = function(arcId) {
        return routeIsUsable(~arcId); // outward path must be traversable
      };
    }

    function getNextArc(prevId) {
      // reverse arc to point onwards
      return ~getRightmostArc(prevId, nodes, testArc);
    }

    return function(startId) {
      var path = [],
          nextId, msg,
          candId = startId;

      do {
        if (useRoute(candId)) {
          path.push(candId);
          nextId = candId;
          candId = getNextArc(nextId);
        } else {
          return null;
        }

        if (candId == ~nextId) {
          // TODO: handle or prevent this error condition
          debug("Pathfinder warning: dead-end path");
          return null;
        }
      } while (candId != startId);
      return path.length === 0 ? null : path;
    };
  }

  // Returns a function for flattening or dissolving a collection of rings
  // Assumes rings are oriented in CW direction
  //
  function getRingIntersector(nodes, flags) {
    var arcs = nodes.arcs;
    var findPath = getPathFinder(nodes, useRoute, routeIsActive);
    flags = flags || new Uint8Array(arcs.size());

    // types: "dissolve" "flatten"
    return function(rings, type) {
      var dissolve = type == 'dissolve',
          openFwd = true,
          openRev = type == 'flatten',
          output;
      // even single rings get transformed (e.g. to remove spikes)
      if (rings.length > 0) {
        output = [];
        openArcRoutes(rings, arcs, flags, openFwd, openRev, dissolve);
        forEachShapePart(rings, function(ids) {
          var path;
          for (var i=0, n=ids.length; i<n; i++) {
            path = findPath(ids[i]);
            if (path) {
              output.push(path);
            }
          }
        });
        closeArcRoutes(rings, arcs, flags, openFwd, openRev, true);
      } else {
        output = rings;
      }
      return output;
    };

    function routeIsActive(arcId) {
      var bits = getRouteBits(arcId, flags);
      return (bits & 1) == 1;
    }

    function useRoute(arcId) {
      var route = getRouteBits(arcId, flags),
          isOpen = false;
      if (route == 3) {
        isOpen = true;
        setRouteBits(1, arcId, flags); // close the path, leave visible
      }
      return isOpen;
    }
  }

  // function debugFlags(flags) {
  //   var arr = [];
  //   utils.forEach(flags, function(flag) {
  //     arr.push(bitsToString(flag));
  //   });
  //   message(arr);

  //   function bitsToString(bits) {
  //     var str = "";
  //     for (var i=0; i<8; i++) {
  //       str += (bits & (1 << i)) > 0 ? "1" : "0";
  //       if (i < 7) str += ' ';
  //       if (i == 3) str += ' ';
  //     }
  //     return str;
  //   }
  // }

  var Pathfinder = /*#__PURE__*/Object.freeze({
    __proto__: null,
    setBits: setBits,
    andBits: andBits,
    setRouteBits: setRouteBits,
    getRouteBits: getRouteBits,
    openArcRoutes: openArcRoutes,
    closeArcRoutes: closeArcRoutes,
    getPathFinder: getPathFinder,
    getRingIntersector: getRingIntersector
  });

  // Used by -clean -dissolve2 -filter-slivers -filter-islands to generate area filters
  // for removing small polygon rings.
  // Assumes lyr is a polygon layer.
  function getSliverFilter(lyr, dataset, opts) {
    var areaArg = opts.min_gap_area || opts.min_area || opts.gap_fill_area;
    if (+areaArg == 0) {
      return {
        filter: function() {return false;}, // don't fill any gaps
        threshold: 0
      };
    }
    var sliverControl = opts.sliver_control >= 0 ? opts.sliver_control : 0; // 0 is default
    var crs = getDatasetCRS(dataset);
    var threshold = areaArg ?
        convertAreaParam(areaArg, crs) :
        getDefaultSliverThreshold(lyr, dataset.arcs);
    var filter = sliverControl > 0 ?
        getSliverTest(dataset.arcs, threshold, sliverControl) :
        getMinAreaTest(threshold, dataset);
    var label = getSliverLabel(getAreaLabel(threshold, crs), sliverControl > 0);
    return {
      threshold: threshold,
      filter: filter,
      label: label
    };
  }

  function getSliverLabel(areaStr, variable) {
    if (variable) {
      areaStr = areaStr.replace(' ', '+ ') + ' variable';
    }
    return areaStr + ' threshold';
  }

  function getMinAreaTest(minArea, dataset) {
    var pathArea = dataset.arcs.isPlanar() ? geom.getPlanarPathArea : geom.getSphericalPathArea;
    return function(path) {
      var area = pathArea(path, dataset.arcs);
      return Math.abs(area) < minArea;
    };
  }

  function getSliverTest(arcs, threshold, strength) {
    if (strength >= 0 === false) {
      strength = 1; // default is 1 (full-strength)
    }
    if (strength > 1 || threshold > 0 === false) {
      error('Invalid parameter');
    }
    var calcEffectiveArea = getSliverAreaFunction(arcs, strength);
    return function(ring) {
      return Math.abs(calcEffectiveArea(ring)) < threshold;
    };
  }

  // Strength: 0-1
  function getSliverAreaFunction(arcs, strength) {
    var k = Math.sqrt(strength); // more sensible than linear weighted avg.
    return function(ring) {
      var area = geom.getPathArea(ring, arcs);
      var perim = geom.getPathPerimeter(ring, arcs);
      var compactness = geom.calcPolsbyPopperCompactness(area, perim);
      var effectiveArea = area * (k * compactness + 1 - k);
      return effectiveArea;
    };
  }

  // Calculate a default area threshold using average segment length,
  // but increase the threshold for high-detail datasets and decrease it for
  // low-detail datasets (using segments per ring as a measure of detail).
  //
  function getDefaultSliverThreshold(lyr, arcs) {
    var ringCount = 0;
    var calcLen = arcs.isPlanar() ? geom.distance2D : geom.greatCircleDistance;
    var avgSegLen = 0;
    var segCount = 0;
    var onSeg = function(i, j, xx, yy) {
      var len = calcLen(xx[i], yy[i], xx[j], yy[j]);
      segCount++;
      avgSegLen += (len - avgSegLen) / segCount;
    };
    editShapes(lyr.shapes, function(path) {
      ringCount++;
      forEachSegmentInPath(path, arcs, onSeg);
    });
    var segPerRing = segCount / ringCount;
    var complexityFactor = Math.pow(segPerRing, 0.75); // use seg/ring as a proxy for complexity
    var threshold = avgSegLen * avgSegLen / 50 * complexityFactor;
    threshold = roundToSignificantDigits(threshold, 2); // round for display
    return threshold;
  }


  // Original function for calculating default area threshold
  function calcMaxSliverArea(arcs) {
    var k = 2,
        dxMax = arcs.getBounds().width() / k,
        dyMax = arcs.getBounds().height() / k,
        count = 0,
        mean = 0;
    arcs.forEachSegment(function(i, j, xx, yy) {
      var dx = Math.abs(xx[i] - xx[j]),
          dy = Math.abs(yy[i] - yy[j]);
      if (dx < dxMax && dy < dyMax) {
        // TODO: write utility function for calculating mean this way
        mean += (Math.sqrt(dx * dx + dy * dy) - mean) / ++count;
      }
    });
    return mean * mean;
  }

  var Slivers = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getSliverFilter: getSliverFilter,
    getSliverTest: getSliverTest,
    getSliverAreaFunction: getSliverAreaFunction,
    getDefaultSliverThreshold: getDefaultSliverThreshold,
    calcMaxSliverArea: calcMaxSliverArea
  });

  function getMode(values) {
    var data = getModeData(values);
    return data.modes[0];
  }

  function getValueCountData(values) {
    var uniqValues = [],
        uniqIndex = {},
        counts = [];
    var i, val;
    for (i=0; i<values.length; i++) {
      val = values[i];
      if (val in uniqIndex === false) {
        uniqIndex[val] = uniqValues.length;
        uniqValues.push(val);
        counts.push(1);
      } else {
        counts[uniqIndex[val]]++;
      }
    }
    return {
      values: uniqValues,
      counts: counts
    };
  }

  function getMaxValue(values) {
    var max = -Infinity;
    var i;
    for (i=0; i<values.length; i++) {
      if (values[i] > max) max = values[i];
    }
    return max;
  }

  function getCountDataSummary(o) {
    var counts = o.counts;
    var values = o.values;
    var maxCount = counts.length > 0 ? getMaxValue(counts) : 0;
    var nextCount = 0;
    var modes = [];
    var i, count;
    for (i=0; i<counts.length; i++) {
      count = counts[i];
      if (count === maxCount) {
        modes.push(values[i]);
      } else if (count > nextCount) {
        nextCount = count;
      }
    }
    return {
      modes: modes,
      margin: modes.length > 1 ? 0 : maxCount - nextCount,
      count: maxCount
    };
  }

  function getModeData(values, verbose) {
    var counts = getValueCountData(values);
    var modes = getCountDataSummary(counts);
    if (verbose) {
      modes.counts = counts.counts;
      modes.values = counts.values;
    }
    return modes;
  }

  var CalcUtils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getMode: getMode,
    getModeData: getModeData
  });

  // Get a copy of a layer containing a subset of the layer's features,
  // given a "where" expression in the options object
  function getLayerSelection(lyr, arcs, opts) {
    var lyr2 = utils.extend({}, lyr);
    var filterOpts = {
          expression: opts.where,
          invert: !!opts.invert,
          verbose: false,   // don't print status message
          no_replace: opts.no_replace // copy features if original features will be retained
        };
    return cmd.filterFeatures(lyr2, arcs, filterOpts);
  }

  // Used to run -dissolve with the where= option; could be generalized to support
  // other commands
  function applyCommandToLayerSelection(commandFunc, lyr, arcs, opts) {
    if (!opts || !opts.where) {
      error('Missing required "where" parameter');
    }
    var subsetLyr = getLayerSelection(lyr, arcs, opts);
    var cmdOpts = utils.defaults({where: null}, opts); // prevent infinite recursion
    var outputLyr = commandFunc(subsetLyr, arcs, cmdOpts);
    var filterOpts = utils.defaults({invert: true}, opts);
    var filteredLyr = getLayerSelection(lyr, arcs, filterOpts);
    var merged = cmd.mergeLayers([filteredLyr, outputLyr], {verbose: false, force: true});
    return merged[0];
  }

  // Calculate an expression across a group of features, print and return the result
  // Supported functions include sum(), average(), max(), min(), median(), count()
  // Functions receive an expression to be applied to each feature (like the -each command)
  // Examples: 'sum($.area)' 'min(income)'
  // opts.expression  Expression to evaluate
  // opts.where  Optional filter expression (see -filter command)
  //
  cmd.calc = function(lyr, arcs, opts) {
    var msg = opts.expression,
        result, compiled, defs;
    if (opts.where) {
      // TODO: implement no_replace option for filter() instead of this
      lyr = getLayerSelection(lyr, arcs, opts);
      msg += ' where ' + opts.where;
    }
    // Save any assigned variables to the defs object, so they will be available
    // for later -each expressions to use.
    defs = getStateVar('defs');
    compiled = compileCalcExpression(lyr, arcs, opts.expression);
    result = compiled(null, defs);
    message(msg + ":  " + result);
    return result;
  };

  function evalCalcExpression(lyr, arcs, exp) {
    return compileCalcExpression(lyr, arcs, exp)();
  }

  function compileCalcExpression(lyr, arcs, exp) {
    var rowNo = 0, colNo = 0, cols = [];
    var ctx1 = { // context for first phase (capturing values for each feature)
          count: assign,
          sum: captureNum,
          average: captureNum,
          median: captureNum,
          min: captureNum,
          max: captureNum,
          mode: capture,
          collect: capture,
          first: assignOnce,
          last: assign
        },
        ctx2 = { // context for second phase (calculating results)
          count: wrap(function() {return rowNo;}, 0),
          sum: wrap(utils.sum, 0),
          median: wrap(utils.findMedian),
          min: wrap(min),
          max: wrap(max),
          average: wrap(utils.mean),
          mode: wrap(getMode),
          collect: wrap(pass),
          first: wrap(pass),
          last: wrap(pass)
        },
        len = getFeatureCount(lyr),
        calc1, calc2, result;

    if (lyr.geometry_type) {
      // add functions related to layer geometry (e.g. for subdivide())
      ctx1.width = ctx1.height = noop;
      ctx2.width = function() {return getLayerBounds(lyr, arcs).width();};
      ctx2.height = function() {return getLayerBounds(lyr, arcs).height();};
    }

    calc1 = compileFeatureExpression(exp, lyr, arcs, {context: ctx1,
        no_assign: true, no_warn: true});
    calc2 = compileFeatureExpression(exp, {data: lyr.data}, null,
        {returns: true, context: ctx2, no_warn: true});

    // @destRec: optional destination record for assignments
    return function(ids, destRec) {
      var result;
      // phase 1: capture data
      if (ids) procRecords(ids);
      else procAll();
      // phase 2: calculate
      result = calc2(undefined, destRec);
      reset();
      return result;
    };

    function pass(o) {return o;}

    function max(arr) {
      return utils.getArrayBounds(arr).max;
    }

    function min(arr) {
      return utils.getArrayBounds(arr).min;
    }

    // process captured data, or return nodata value if no records have been captured
    function wrap(proc, nullVal) {
      var nodata = arguments.length > 1 ? nullVal : null;
      return function() {
        var c = colNo++;
        return rowNo > 0 ? proc(cols[c]) : nodata;
      };
    }

    function procAll() {
      for (var i=0; i<len; i++) {
        procRecord(i);
      }
    }

    function procRecords(ids) {
      ids.forEach(procRecord);
    }

    function procRecord(i) {
      if (i < 0 || i >= len) error("Invalid record index");
      calc1(i);
      rowNo++;
      colNo = 0;
    }

    function noop() {}

    function reset() {
      rowNo = 0;
      colNo = 0;
      cols = [];
    }

    function captureNum(val) {
      if (isNaN(val) && val) { // accepting falsy values (be more strict?)
        stop("Expected a number, received:", val);
      }
      return capture(val);
    }

    function assignOnce(val) {
      if (rowNo === 0) cols[colNo] = val;
      colNo++;
      return val;
    }

    function assign(val) {
      cols[colNo++] = val;
      return val;
    }
    /*
    function captureArr(val) {
      capture(val);
      return [];
    }
    */

    function capture(val) {
      var col;
      if (rowNo === 0) {
        cols[colNo] = [];
      }
      col = cols[colNo];
      if (col.length != rowNo) {
        // make sure all functions are called each time
        // (if expression contains a condition, it will throw off the calculation)
        // TODO: allow conditions
        stop("Evaluation failed");
      }
      col.push(val);
      colNo++;
      return val;
    }
  }

  var Calc = /*#__PURE__*/Object.freeze({
    __proto__: null,
    evalCalcExpression: evalCalcExpression,
    compileCalcExpression: compileCalcExpression
  });

  // get function that returns an object containing calculated values
  function getJoinCalc(src, exp) {
    var calc = compileCalcExpression({data: src}, null, exp);
    return function(ids, destRec) {
      if (!ids) ids = [];
      calc(ids, destRec);
    };
  }

  var JoinCalc = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getJoinCalc: getJoinCalc
  });

  // Return a function to convert indexes of original features into indexes of grouped features
  // Uses categorical classification (a different id for each unique combination of values)
  function getCategoryClassifier(fields, data) {
    if (!fields || fields.length === 0) return function() {return 0;};
    fields.forEach(function(f) {
      requireDataField(data, f);
    });
    var index = {},
        count = 0,
        records = data.getRecords(),
        getKey = getMultiFieldKeyFunction(fields);
    return function(i) {
      var key = getKey(records[i]);
      if (key in index === false) {
        index[key] = count++;
      }
      return index[key];
    };
  }

  function getMultiFieldKeyFunction(fields) {
    return fields.reduce(function(partial, field) {
      // TODO: consider using JSON.stringify for fields that contain objects
      var strval = function(rec) {return String(rec[field]);};
      return partial ? function(rec) {return partial(rec) + '~~' + strval(rec);} : strval;
    }, null);
  }

  // Performs many-to-one data record aggregation on an array of data records
  // Returns an array of data records for a set of aggregated features
  //
  // @records input records
  // @getGroupId()  converts input record id to id of aggregated record
  //
  function aggregateDataRecords(records, getGroupId, opts) {
    var groups = groupIds(getGroupId, records.length);
    return aggregateDataRecords2(records, groups, opts);
  }

  // Performs many-to-many data record aggregation on an array of data records
  // (used by the -mosaic command)
  // getSourceIds()  receives the id of an output record and returns
  //    an array of input record ids
  //
  function recombineDataRecords(records, getSourceIds, n, opts) {
    var groups = [];
    for (var i=0; i<n; i++) {
      groups.push(getSourceIds(i));
    }
    return aggregateDataRecords2(records, groups, opts);
  }

  function aggregateDataRecords2(records, groups, opts) {
    var sumFields = opts.sum_fields || [],
        copyFields = opts.copy_fields || [],
        calc;

    if (opts.fields) {
      copyFields = copyFields.concat(opts.fields);
    }

    if (opts.calc) {
      calc = getJoinCalc(new DataTable(records), opts.calc);
    }

    function sum(field, group) {
      var tot = 0, rec;
      for (var i=0; i<group.length; i++) {
        rec = records[group[i]];
        tot += rec && rec[field] || 0;
      }
      return tot;
    }

    return groups.map(function(group) {
      var rec = {},
          j, first;
      group = group || [];
      first = records[group[0]];
      for (j=0; j<sumFields.length; j++) {
        rec[sumFields[j]] = sum(sumFields[j], group);
      }
      for (j=0; j<copyFields.length; j++) {
        rec[copyFields[j]] = first ? first[copyFields[j]] : null;
      }
      if (calc) {
        calc(group, rec);
      }
      return rec;
    });
  }

  // Returns array containing groups of feature indexes
  // @getId() (function) converts feature index into group index
  // @n number of features
  //
  function groupIds(getId, n) {
    var groups = [], id;
    for (var i=0; i<n; i++) {
      id = getId(i);
      if (id in groups) {
        groups[id].push(i);
      } else {
        groups[id] = [i];
      }
    }
    return groups;
  }

  var DataAggregation = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getCategoryClassifier: getCategoryClassifier,
    getMultiFieldKeyFunction: getMultiFieldKeyFunction,
    aggregateDataRecords: aggregateDataRecords,
    recombineDataRecords: recombineDataRecords
  });

  function dissolvePointGeometry(lyr, getGroupId, opts) {
    var useSph = !opts.planar && probablyDecimalDegreeBounds(getLayerBounds(lyr));
    var getWeight = opts.weight ? compileValueExpression(opts.weight, lyr) : null;
    var groups = [];

    // TODO: support multipoints
    if (countMultiPartFeatures(lyr.shapes) !== 0) {
      stop("Dissolving multi-part points is not supported");
    }

    lyr.shapes.forEach(function(shp, i) {
      var groupId = getGroupId(i);
      var weight = getWeight ? getWeight(i) : 1;
      var p = shp && shp[0]; // Using first point (TODO: handle multi-point features)
      var tmp;
      if (!p) return;
      if (useSph) {
        tmp = [];
        geom.lngLatToXYZ(p[0], p[1], tmp);
        p = tmp;
      }
      groups[groupId] = reducePointCentroid(groups[groupId], p, weight);
    });

    return groups.map(function(memo) {
      var p1, p2;
      if (!memo) return null;
      if (useSph) {
        p1 = memo.centroid;
        p2 = [];
        geom.xyzToLngLat(p1[0], p1[1], p1[2], p2);
      } else {
        p2 = memo.centroid;
      }
      return memo ? [p2] : null;
    });
  }

  function reducePointCentroid(memo, p, weight) {
    var x = p[0],
        y = p[1],
        sum, k;

    if (x == x && y == y && weight > 0) {
      if (!memo) {
        memo = {sum: weight, centroid: p.concat()};
      } else {
        sum = memo.sum + weight;
        k = memo.sum / sum;
        memo.centroid[0] = k * memo.centroid[0] + weight * x / sum;
        memo.centroid[1] = k * memo.centroid[1] + weight * y / sum;
        if (p.length == 3) {
          memo.centroid[2] = k * memo.centroid[2] + weight * p[2] / sum;
        }
        memo.sum = sum;
      }
    }
    return memo;
  }

  // Dissolve polyline features, but also organize arcs into as few parts as possible,
  // with the arcs in each part laid out in connected sequence
  function dissolvePolylineGeometry(lyr, getGroupId, arcs, opts) {
    var groups = getPolylineDissolveGroups(lyr.shapes, getGroupId);
    var dissolve = getPolylineDissolver(arcs);
    return groups.map(dissolve);
  }

  // Create one array of arc ids for each group
  function getPolylineDissolveGroups(shapes, getGroupId) {
    var groups = [];
    traversePaths(shapes, function(o) {
      var groupId = getGroupId(o.shapeId);
      if (groupId in groups === false) {
        groups[groupId] = [];
      }
      groups[groupId].push(o.arcId);
    });
    return groups;
  }

  function getPolylineDissolver(arcs) {
    var flags = new Uint8Array(arcs.size());
    var testArc = function(id) {return flags[absArcId(id)] > 0;};
    var useArc = function(id) {flags[absArcId(id)] = 0;};
    var nodes = new NodeCollection(arcs);
    return function(ids) {
      ids.forEach(function(id) {flags[absArcId(id)] = 1;});
      var ends = findPolylineEnds(ids, nodes, testArc);
      var straightParts = collectPolylineArcs(ends, nodes, testArc, useArc);
      var ringParts = collectPolylineArcs(ids, nodes, testArc, useArc);
      var allParts = straightParts.concat(ringParts);
      ids.forEach(function(id) {flags[absArcId(id)] = 0;}); // may not be necessary
      return allParts;
    };
  }

  // TODO: use polygon pathfinder shared code
  function collectPolylineArcs(ids, nodes, testArc, useArc) {
    var parts = [];
    ids.forEach(function(startId) {
      var part = [];
      var nextId = startId;
      var nextIds;
      while (testArc(nextId)) {
        part.push(nextId);
        nextIds = testArc(nextId) ? nodes.getConnectedArcs(nextId, testArc) : [];
        useArc(nextId); // use (unset) arc after connections have been found
        if (nextIds.length > 0) {
          nextId = ~nextIds[0]; // switch arc direction to lead away from node
        } else {
          break;
        }
      }
      if (part.length > 0) parts.push(part);
    });
    return parts;
  }

  // Return array of dead-end arcs for a dissolved group.
  function findPolylineEnds(ids, nodes, filter) {
    var ends = [];
    ids.forEach(function(arcId) {
      if (nodes.getConnectedArcs(arcId, filter).length === 0) {
        ends.push(~arcId); // arc points away from terminus
      }
      if (nodes.getConnectedArcs(~arcId, filter).length === 0) {
        ends.push(arcId);
      }
    });
    return ends;
  }

  function dissolvePolygonGeometry(shapes, getGroupId) {
    var segments = dissolveFirstPass(shapes, getGroupId);
    return dissolveSecondPass(segments, shapes, getGroupId);
  }

  // First pass -- identify pairs of segments that can be dissolved
  function dissolveFirstPass(shapes, getGroupId) {
    var groups = [],
        largeGroups = [],
        segments = [],
        ids = shapes.map(function(shp, i) {
          return getGroupId(i);
        });

    traversePaths(shapes, procArc);
    largeGroups.forEach(splitGroup);
    return segments;

    function procArc(obj) {
      var arcId = obj.arcId,
          idx = arcId < 0 ? ~arcId : arcId,
          segId = segments.length,
          group = groups[idx];
      if (!group) {
        group = [];
        groups[idx] = group;
      }
      group.push(segId);
      obj.group = group;
      segments.push(obj);

      // Three or more segments sharing the same arc is abnormal topology...
      // Need to try to identify pairs of matching segments in each of these
      // groups.
      //
      if (group.length == 3) {
        largeGroups.push(group);
      }
    }

    function findMatchingPair(group, cb) {
      var arc1, arc2;
      for (var i=0; i<group.length - 1; i++) {
        arc1 = segments[group[i]];
        for (var j=i+1; j<group.length; j++) {
          arc2 = segments[group[j]];
          if (cb(arc1, arc2)) {
            return [arc1.segId, arc2.segId];
          }
        }
      }
      return null;
    }

    function checkFwExtension(arc1, arc2) {
      return getNextSegment(arc1, segments, shapes).arcId ===
          ~getNextSegment(arc2, segments, shapes).arcId;
    }

    function checkBwExtension(arc1, arc2) {
      return getPrevSegment(arc1, segments, shapes).arcId ===
          ~getPrevSegment(arc2, segments, shapes).arcId;
    }

    function checkDoubleExtension(arc1, arc2) {
      return checkPairwiseMatch(arc1, arc2) &&
          checkFwExtension(arc1, arc2) &&
          checkBwExtension(arc1, arc2);
    }

    function checkSingleExtension(arc1, arc2) {
      return checkPairwiseMatch(arc1, arc2) &&
          (checkFwExtension(arc1, arc2) ||
          checkBwExtension(arc1, arc2));
    }

    function checkPairwiseMatch(arc1, arc2) {
      return arc1.arcId === ~arc2.arcId && ids[arc1.shapeId] ===
          ids[arc2.shapeId];
    }

    function updateGroupIds(ids) {
      ids.forEach(function(id) {
        segments[id].group = ids;
      });
    }

    // split a group of segments into pairs of matching segments + a residual group
    // @group Array of segment ids
    //
    function splitGroup(group) {
      // find best-match segment pair
      var group2 = findMatchingPair(group, checkDoubleExtension) ||
          findMatchingPair(group, checkSingleExtension) ||
          findMatchingPair(group, checkPairwiseMatch);
      if (group2) {
        group = group.filter(function(i) {
          return !utils.contains(group2, i);
        });
        updateGroupIds(group);
        updateGroupIds(group2);
        // Split again if reduced group is still large
        if (group.length > 2) splitGroup(group);
      }
    }
  }

  // Second pass -- generate dissolved shapes
  //
  function dissolveSecondPass(segments, shapes, getGroupId) {
    var dissolveShapes = [];
    segments.forEach(procSegment);
    return dissolveShapes;

    // @obj is an arc instance
    function procSegment(obj) {
      if (obj.used) return;
      var match = findDissolveArc(obj);
      if (!match) buildRing(obj);
    }

    function addRing(arcs, i) {
      if (i in dissolveShapes === false) {
        dissolveShapes[i] = [];
      }
      dissolveShapes[i].push(arcs);
    }

    // Generate a dissolved ring
    // @firstArc the first arc instance in the ring
    //
    function buildRing(firstArc) {
      var newArcs = [firstArc.arcId],
          nextArc = getNextArc(firstArc);
          firstArc.used = true;

      while (nextArc && nextArc != firstArc) {
        newArcs.push(nextArc.arcId);
        nextArc.used = true;
        nextArc = getNextArc(nextArc);
        if (nextArc && nextArc != firstArc && nextArc.used) error("buildRing() topology error");
      }

      if (!nextArc) error("buildRing() traversal error");
      firstArc.used = true;
      addRing(newArcs, getGroupId(firstArc.shapeId));
    }

    // Get the next arc in a dissolved polygon ring
    // @obj an undissolvable arc instance
    //
    function getNextArc(obj, depth) {
      var next = getNextSegment(obj, segments, shapes),
          match;
      depth = depth || 0;
      if (next != obj) {
        match = findDissolveArc(next);
        if (match) {
          if (depth > 100) {
            error ('deep recursion -- unhandled topology problem');
          }
          // if (match.part.arcs.length == 1) {
          if (shapes[match.shapeId][match.partId].length == 1) {
            // case: @obj has an island inclusion -- keep traversing @obj
            // TODO: test case if @next is first arc in the ring
            next = getNextArc(next, depth + 1);
          } else {
            next = getNextArc(match, depth + 1);
          }
        }
      }
      return next;
    }

    // Look for an arc instance that can be dissolved with segment @obj
    // (must be going the opposite direction and have same dissolve key, etc)
    // Return matching segment or null if no match
    //
    function findDissolveArc(obj) {
      var dissolveId = getGroupId(obj.shapeId), // obj.shape.dissolveKey,
          match, matchId;
      matchId = utils.find(obj.group, function(i) {
        var a = obj,
            b = segments[i];
        if (a == b ||
            b.used ||
            getGroupId(b.shapeId) !== dissolveId ||
            // don't prevent rings from dissolving with themselves (risky?)
            // a.shapeId == b.shapeId && a.partId == b.partId ||
            a.arcId != ~b.arcId) return false;
        return true;
      });
      match = matchId === null ? null : segments[matchId];
      return match;
    }
  }

  function getNextSegment(seg, segments, shapes) {
    return getSegmentByOffs(seg, segments, shapes, 1);
  }

  function getPrevSegment(seg, segments, shapes) {
    return getSegmentByOffs(seg, segments, shapes, -1);
  }

  function getSegmentByOffs(seg, segments, shapes, offs) {
    var arcs = shapes[seg.shapeId][seg.partId],
        partLen = arcs.length,
        nextOffs = (seg.i + offs) % partLen,
        nextSeg;
    if (nextOffs < 0) nextOffs += partLen;
    nextSeg = segments[seg.segId - seg.i + nextOffs];
    if (!nextSeg || nextSeg.shapeId != seg.shapeId) error("index error");
    return nextSeg;
  }

  var PolygonDissolve = /*#__PURE__*/Object.freeze({
    __proto__: null,
    dissolvePolygonGeometry: dissolvePolygonGeometry
  });

  // Generate a dissolved layer
  // @opts.fields (optional) names of data fields (dissolves all if falsy)
  // @opts.sum-fields (Array) (optional)
  // @opts.copy-fields (Array) (optional)
  //
  cmd.dissolve = function(lyr, arcs, opts) {
    var dissolveShapes, getGroupId;
    opts = utils.extend({}, opts);
    if (opts.where) {
      return applyCommandToLayerSelection(cmd.dissolve, lyr, arcs, opts);
    }
    if (opts.field) opts.fields = [opts.field]; // support old "field" parameter
    getGroupId = getCategoryClassifier(opts.fields, lyr.data);
    if (opts.multipart || opts.group_points) {
      dissolveShapes = makeMultipartShapes(lyr, getGroupId);
    } else if (lyr.geometry_type == 'polygon') {
      dissolveShapes = dissolvePolygonGeometry(lyr.shapes, getGroupId);
    } else if (lyr.geometry_type == 'polyline') {
      dissolveShapes = dissolvePolylineGeometry(lyr, getGroupId, arcs, opts);
    } else if (lyr.geometry_type == 'point') {
      dissolveShapes = dissolvePointGeometry(lyr, getGroupId, opts);
    }
    return composeDissolveLayer(lyr, dissolveShapes, getGroupId, opts);
  };

  function makeMultipartShapes(lyr, getGroupId) {
    var shapes = cloneShapes(lyr.shapes);
    var shapes2 = [];
    lyr.shapes.forEach(function(shp, i) {
      var groupId = getGroupId(i);
      if (!shp) return;
      if (!shapes2[groupId]) {
        shapes2[groupId] = shp;
      } else {
        shapes2[groupId].push.apply(shapes2[groupId], shp);
      }
    });
    return shapes2;
  }

  // @lyr: original undissolved layer
  // @shapes: dissolved shapes
  function composeDissolveLayer(lyr, shapes, getGroupId, opts) {
    var records = null;
    var lyr2;
    if (lyr.data) {
      records = aggregateDataRecords(lyr.data.getRecords(), getGroupId, opts);
      // replace missing shapes with nulls
      for (var i=0, n=records.length; i<n; i++) {
        if (shapes && !shapes[i]) {
          shapes[i] = null;
        }
      }
    }
    lyr2 = {
      name: opts.no_replace ? null : lyr.name,
      shapes: shapes,
      data: records ? new DataTable(records) : null,
      geometry_type: lyr.geometry_type
    };
    if (!opts.silent) {
      printDissolveMessage(lyr, lyr2);
    }
    return lyr2;
  }

  function printDissolveMessage(pre, post) {
    var n1 = getFeatureCount(pre),
        n2 = getFeatureCount(post),
        msg = utils.format('Dissolved %,d feature%s into %,d feature%s',
          n1, utils.pluralSuffix(n1), n2,
          utils.pluralSuffix(n2));
    message(msg);
  }

  // Maps tile ids to shape ids (both are non-negative integers). Supports
  //    one-to-many mapping (a tile may belong to multiple shapes)
  // Also maps shape ids to tile ids. A shape may contain multiple tiles
  // Also supports 'flattening' -- removing one-to-many tile-shape mappings by
  //    removing all but one shape from a tile.
  // Supports one-to-many mapping
  function TileShapeIndex(mosaic, opts) {
    // indexes for mapping tile ids to shape ids
    var singleIndex = new Int32Array(mosaic.length);
    utils.initializeArray(singleIndex, -1);
    var multipleIndex = [];
    // index that maps shape ids to tile ids
    var shapeIndex = [];

    this.getTileIdsByShapeId = function(id) {
      return shapeIndex[id];
    };

    // assumes index has been flattened
    this.getShapeIdByTileId = function(id) {
      var shapeId = singleIndex[id];
      return shapeId >= 0 ? shapeId : -1;
    };

    // return ids of all shapes that include a tile
    this.getShapeIdsByTileId = function(id) {
      var singleId = singleIndex[id];
      if (singleId >= 0) {
        return [singleId];
      }
      if (singleId == -1) {
        return [];
      }
      return multipleIndex[id];
    };

    this.indexTileIdsByShapeId = function(shapeId, tileIds, weightFunction) {
      // shapeIndex[shapeId] = tileIds;
      shapeIndex[shapeId] = [];
      for (var i=0; i<tileIds.length; i++) {
        indexShapeIdByTileId(shapeId, tileIds[i], weightFunction);
      }
    };

    // remove many-to-one tile=>shape mappings
    this.flatten = function() {
      multipleIndex.forEach(function(shapeIds, tileId) {
        flattenStackedTile(tileId);
      });
      multipleIndex = [];
    };

    this.getUnusedTileIds = function() {
      var ids = [];
      for (var i=0, n=singleIndex.length; i<n; i++) {
        if (singleIndex[i] == -1) ids.push(i);
      }
      return ids;
    };

    // used by gap fill; assumes that flatten() has been called
    this.addTileToShape = function(shapeId, tileId) {
      if (shapeId in shapeIndex === false || singleIndex[tileId] != -1) {
        error('Internal error');
      }
      singleIndex[tileId] = shapeId;
      shapeIndex[shapeId].push(tileId);
    };

    // add a shape id to a tile
    function indexShapeIdByTileId(shapeId, tileId, weightFunction) {
      var singleId = singleIndex[tileId];
      if (singleId != -1 && opts.flat) {
        // pick the best shape if we have a weight function
        if (weightFunction && weightFunction(shapeId) > weightFunction(singleId)) {
          // replace existing shape reference
          removeTileFromShape(tileId, singleId);
          singleIndex[tileId] = singleId;
          singleId = -1;
        } else {
          // keep existing shape reference
          return;
        }
      }
      if (singleId == -1) {
        singleIndex[tileId] = shapeId;
      } else if (singleId == -2) {
        multipleIndex[tileId].push(shapeId);
      } else {
        multipleIndex[tileId] = [singleId, shapeId];
        singleIndex[tileId] = -2;
      }
      shapeIndex[shapeId].push(tileId);
    }


    function flattenStackedTile(tileId) {
      // TODO: select the best shape (using some metric)
      var shapeIds = multipleIndex[tileId];
      // if (!shapeIds || shapeIds.length > 1 === false) error('flattening error');
      var selectedId = shapeIds[0];
      var shapeId;
      singleIndex[tileId] = selectedId; // add shape to single index
      // remove tile from other stacked shapes
      for (var i=0; i<shapeIds.length; i++) {
        shapeId = shapeIds[i];
        if (shapeId != selectedId) {
          removeTileFromShape(tileId, shapeId);
        }
      }
    }

    function removeTileFromShape(tileId, shapeId) {
      shapeIndex[shapeId] = shapeIndex[shapeId].filter(function(tileId2) {
        return tileId2 != tileId;
      });
      if (shapeIndex[shapeId].length > 0 === false) {
        // TODO: make sure to test the case where a shape becomes empty
        // error("empty shape")
      }
    }
  }

  // Convert an array of intersections into an ArcCollection (for display)
  //

  function getIntersectionPoints(intersections) {
    return intersections.map(function(obj) {
          return [obj.x, obj.y];
        });
  }

  // Identify intersecting segments in an ArcCollection
  //
  // To find all intersections:
  // 1. Assign each segment to one or more horizontal stripes/bins
  // 2. Find intersections inside each stripe
  // 3. Concat and dedup
  //
  // Re-use buffer for temp data -- Chrome's gc starts bogging down
  // if large buffers are repeatedly created.
  var buf;
  function getUint32Array(count) {
    var bytes = count * 4;
    if (!buf || buf.byteLength < bytes) {
      buf = new ArrayBuffer(bytes);
    }
    return new Uint32Array(buf, 0, count);
  }

  function findSegmentIntersections(arcs, optArg) {
    var opts = utils.extend({}, optArg),
        bounds = arcs.getBounds(),
        // TODO: handle spherical bounds
        spherical = !arcs.isPlanar() &&
            geom.containsBounds(getWorldBounds(), bounds.toArray()),
        ymin = bounds.ymin,
        yrange = bounds.ymax - ymin,
        stripeCount = opts.stripes || calcSegmentIntersectionStripeCount(arcs),
        stripeSizes = new Uint32Array(stripeCount),
        stripeId = stripeCount > 1 && yrange > 0 ? multiStripeId : singleStripeId,
        i, j;

    if (opts.tolerance >= 0 === false) {
      // by default, use a small tolerance when detecting segment intersections
      // (intended to overcome the effects of floating point rounding errors in geometrical formulas)
      opts.tolerance = getHighPrecisionSnapInterval(bounds.toArray());
    }

    function multiStripeId(y) {
      return Math.floor((stripeCount-1) * (y - ymin) / yrange);
    }

    function singleStripeId(y) {return 0;}
    // Count segments in each stripe
    arcs.forEachSegment(function(id1, id2, xx, yy) {
      var s1 = stripeId(yy[id1]),
          s2 = stripeId(yy[id2]);
      while (true) {
        stripeSizes[s1] = stripeSizes[s1] + 2;
        if (s1 == s2) break;
        s1 += s2 > s1 ? 1 : -1;
      }
    });

    // Allocate arrays for segments in each stripe
    var stripeData = getUint32Array(utils.sum(stripeSizes)),
        offs = 0;
    var stripes = [];
    utils.forEach(stripeSizes, function(stripeSize) {
      var start = offs;
      offs += stripeSize;
      stripes.push(stripeData.subarray(start, offs));
    });
    // Assign segment ids to each stripe
    utils.initializeArray(stripeSizes, 0);

    arcs.forEachSegment(function(id1, id2, xx, yy) {
      var s1 = stripeId(yy[id1]),
          s2 = stripeId(yy[id2]),
          count, stripe;
      while (true) {
        count = stripeSizes[s1];
        stripeSizes[s1] = count + 2;
        stripe = stripes[s1];
        stripe[count] = id1;
        stripe[count+1] = id2;
        if (s1 == s2) break;
        s1 += s2 > s1 ? 1 : -1;
      }
    });

    // Detect intersections among segments in each stripe.
    var raw = arcs.getVertexData(),
        intersections = [],
        arr;
    for (i=0; i<stripeCount; i++) {
      arr = intersectSegments(stripes[i], raw.xx, raw.yy, opts);
      for (j=0; j<arr.length; j++) {
        intersections.push(arr[j]);
      }
    }
    return dedupIntersections(intersections, opts.unique ? getUniqueIntersectionKey : null);
  }


  function sortIntersections(arr) {
    arr.sort(function(a, b) {
      return a.x - b.x || a.y - b.y;
    });
  }



  function dedupIntersections(arr, keyFunction) {
    var index = {};
    var getKey = keyFunction || getIntersectionKey;
    return arr.filter(function(o) {
      var key = getKey(o);
      if (key in index) {
        return false;
      }
      index[key] = true;
      return true;
    });
  }

  // Get an indexable key from an intersection object
  // Assumes that vertex ids of o.a and o.b are sorted
  function getIntersectionKey(o) {
    return o.a.join(',') + ';' + o.b.join(',');
  }

  function getUniqueIntersectionKey(o) {
    return o.x + ',' + o.y;
  }

  // Fast method
  // TODO: measure performance using a range of input data
  function calcSegmentIntersectionStripeCount2(arcs) {
    var segs = arcs.getFilteredPointCount() - arcs.size();
    var stripes = Math.pow(segs, 0.4) * 2;
    return Math.ceil(stripes) || 1;
  }

  // Alternate fast method
  function calcSegmentIntersectionStripeCount(arcs) {
    var segs = arcs.getFilteredPointCount() - arcs.size();
    var stripes = Math.ceil(Math.pow(segs * 10, 0.6) / 40);
    return stripes > 0 ? stripes : 1;
  }

  // Old method calculates average segment length -- slow
  function calcSegmentIntersectionStripeCount_old(arcs) {
    var yrange = arcs.getBounds().height(),
        segLen = getAvgSegment2(arcs)[1], // slow
        count = 1;
    if (segLen > 0 && yrange > 0) {
      count = Math.ceil(yrange / segLen / 20);
    }
    return count || 1;
  }

  // Find intersections among a group of line segments
  //
  // TODO: handle case where a segment starts and ends at the same point (i.e. duplicate coords);
  //
  // @ids: Array of indexes: [s0p0, s0p1, s1p0, s1p1, ...] where xx[sip0] <= xx[sip1]
  // @xx, @yy: Arrays of x- and y-coordinates
  //
  function intersectSegments(ids, xx, yy, optsArg) {
    var lim = ids.length - 2,
        opts = optsArg || {},
        intersections = [],
        tolerance = opts.tolerance, // may be undefined
        s1p1, s1p2, s2p1, s2p2,
        s1p1x, s1p2x, s2p1x, s2p2x,
        s1p1y, s1p2y, s2p1y, s2p2y,
        hit, seg1, seg2, i, j;

    // Sort segments by xmin, to allow efficient exclusion of segments with
    // non-overlapping x extents.
    sortSegmentIds(xx, ids); // sort by ascending xmin

    i = 0;
    while (i < lim) {
      s1p1 = ids[i];
      s1p2 = ids[i+1];
      s1p1x = xx[s1p1];
      s1p2x = xx[s1p2];
      s1p1y = yy[s1p1];
      s1p2y = yy[s1p2];
      // count++;

      j = i;
      while (j < lim) {
        j += 2;
        s2p1 = ids[j];
        s2p1x = xx[s2p1];

        if (s1p2x < s2p1x) break; // x extent of seg 2 is greater than seg 1: done with seg 1
        //if (s1p2x <= s2p1x) break; // this misses point-segment intersections when s1 or s2 is vertical

        s2p1y = yy[s2p1];
        s2p2 = ids[j+1];
        s2p2x = xx[s2p2];
        s2p2y = yy[s2p2];

        // skip segments with non-overlapping y ranges
        if (s1p1y >= s2p1y) {
          if (s1p1y > s2p2y && s1p2y > s2p1y && s1p2y > s2p2y) continue;
        } else {
          if (s1p1y < s2p2y && s1p2y < s2p1y && s1p2y < s2p2y) continue;
        }

        // skip segments that are adjacent in a path (optimization)
        // TODO: consider if this eliminates some cases that should
        // be detected, e.g. spikes formed by unequal segments
        if (s1p1 == s2p1 || s1p1 == s2p2 || s1p2 == s2p1 || s1p2 == s2p2) {
          continue;
        }

        // test two candidate segments for intersection
        hit = geom.segmentIntersection(s1p1x, s1p1y, s1p2x, s1p2y,
            s2p1x, s2p1y, s2p2x, s2p2y, tolerance);
        if (hit) {
          seg1 = [s1p1, s1p2];
          seg2 = [s2p1, s2p2];
          intersections.push(formatIntersection(hit, seg1, seg2, xx, yy));
          if (hit.length == 4) {
            // two collinear segments may have two endpoint intersections
            intersections.push(formatIntersection(hit.slice(2), seg1, seg2, xx, yy));
          }
        }
      }
      i += 2;
    }
    return intersections;

    // @p is an [x, y] location along a segment defined by ids @id1 and @id2
    // return array [i, j] where i and j are the same endpoint ids with i <= j
    // if @p coincides with an endpoint, return the id of that endpoint twice
    function getEndpointIds(id1, id2, p) {
      var i = id1 < id2 ? id1 : id2,
          j = i === id1 ? id2 : id1;
      if (xx[i] == p[0] && yy[i] == p[1]) {
        j = i;
      } else if (xx[j] == p[0] && yy[j] == p[1]) {
        i = j;
      }
      return [i, j];
    }
  }

  function formatIntersection(xy, s1, s2, xx, yy) {
    var x = xy[0],
        y = xy[1],
        a, b;
    s1 = formatIntersectingSegment(x, y, s1[0], s1[1], xx, yy);
    s2 = formatIntersectingSegment(x, y, s2[0], s2[1], xx, yy);
    a = s1[0] < s2[0] ? s1 : s2;
    b = a == s1 ? s2 : s1;
    return {x: x, y: y, a: a, b: b};
  }

  // Receives:
  //   x, y: coordinates of intersection
  //   i, j: two segment endpoints, as indexes in xx and yy arrays
  // Returns:
  //   if x,y falls within the segment, returns ascending indexes
  //   if x,y coincides with an endpoint, returns the id of that endpoint twice
  function formatIntersectingSegment(x, y, i, j, xx, yy) {
    if (xx[i] == x && yy[i] == y) {
      return [i, i];
    }
    if (xx[j] == x && yy[j] == y) {
      return [j, j];
    }
    return i < j ? [i, j] : [j, i];
  }

  var SegmentIntersection = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getIntersectionPoints: getIntersectionPoints,
    findSegmentIntersections: findSegmentIntersections,
    sortIntersections: sortIntersections,
    dedupIntersections: dedupIntersections,
    calcSegmentIntersectionStripeCount2: calcSegmentIntersectionStripeCount2,
    calcSegmentIntersectionStripeCount: calcSegmentIntersectionStripeCount,
    intersectSegments: intersectSegments,
    formatIntersection: formatIntersection,
    formatIntersectingSegment: formatIntersectingSegment
  });

  // Functions for dividing polygons and polygons at points where arc-segments intersect

  // TODO:
  //    Consider inserting cut points on import, when building initial topology
  //    Improve efficiency (e.g. only update ArcCollection once)
  //    Remove junk arcs (collapsed and duplicate arcs) instead of just removing
  //       references to them

  // Divide a collection of arcs at points where segments intersect
  // and re-index the paths of all the layers that reference the arc collection.
  // (in-place)
  function addIntersectionCuts(dataset, _opts) {
    var opts = _opts || {};
    var arcs = dataset.arcs;
    var arcBounds = arcs && arcs.getBounds();
    var snapDist, nodes;
    if (!arcBounds || !arcBounds.hasBounds()) {
      return new NodeCollection([]);
    }

    if (opts.snap_interval) {
      snapDist = convertIntervalParam(opts.snap_interval, getDatasetCRS(dataset));
    } else if (!opts.no_snap && arcBounds.hasBounds()) {
      snapDist = getHighPrecisionSnapInterval(arcBounds.toArray());
    } else {
      snapDist = 0;
    }
    debug('addIntersectionCuts() snap dist:', snapDist);

    // bake-in any simplification (bug fix; before, -simplify followed by dissolve2
    // used to reset simplification)
    arcs.flatten();

    snapAndCut(dataset, snapDist);

    // Clean shapes by removing collapsed arc references, etc.
    // TODO: consider alternative -- avoid creating degenerate arcs
    // in insertCutPoints()
    dataset.layers.forEach(function(lyr) {
      if (layerHasPaths(lyr)) {
        cleanShapes(lyr.shapes, arcs, lyr.geometry_type);
      }
    });

    // Further clean-up -- remove duplicate and missing arcs
    nodes = cleanArcReferences(dataset);

    return nodes;
  }

  function snapAndCut(dataset, snapDist) {
    var arcs = dataset.arcs;
    var cutOpts = snapDist > 0 ? {} : {tolerance: 0};
    var coordsHaveChanged = false;
    var snapCount, dupeCount, cutCount;
    snapCount = snapCoordsByInterval(arcs, snapDist);
    dupeCount = arcs.dedupCoords();

    // why was topology built here previously????
    // if (snapCount > 0 || dupeCount > 0) {
    //   // Detect topology again if coordinates have changed
    //   internal.buildTopology(dataset);
    // }

    // cut arcs at points where segments intersect
    cutCount = cutPathsAtIntersections(dataset, cutOpts);
    if (cutCount > 0 || snapCount > 0 || dupeCount > 0) {
      coordsHaveChanged = true;
    }
    // perform a second snap + cut pass if needed
    if (cutCount > 0) {
      cutCount = 0;
      snapCount = snapCoordsByInterval(arcs, snapDist);
      arcs.dedupCoords(); // need to do this here?
      if (snapCount > 0) {
        cutCount = cutPathsAtIntersections(dataset, cutOpts);
      }
      if (cutCount > 0) {
        arcs.dedupCoords(); // need to do this here?
        debug('Second-pass vertices added:', cutCount, 'consider third pass?');
      }
    }
    // Detect topology again if coordinates have changed
    if (coordsHaveChanged) {
      buildTopology(dataset);
    }
  }


  // Remap any references to duplicate arcs in paths to use the same arcs
  // Remove any unused arcs from the dataset's ArcCollection.
  // Return a NodeCollection
  function cleanArcReferences(dataset) {
    var nodes = new NodeCollection(dataset.arcs);
    var map = findDuplicateArcs(nodes);
    var dropCount;
    if (map) {
      replaceIndexedArcIds(dataset, map);
    }
    dropCount = deleteUnusedArcs(dataset);
    if (dropCount > 0) {
      // rebuild nodes if arcs have changed
      nodes = new NodeCollection(dataset.arcs);
    }
    return nodes;
  }


  // @map an Object mapping old to new ids
  function replaceIndexedArcIds(dataset, map) {
    var remapPath = function(ids) {
      var arcId, absId, id2;
      for (var i=0; i<ids.length; i++) {
        arcId = ids[i];
        absId = absArcId(arcId);
        id2 = map[absId];
        ids[i] = arcId == absId ? id2 : ~id2;
      }
      return ids;
    };
    dataset.layers.forEach(function(lyr) {
      if (layerHasPaths(lyr)) {
        editShapes(lyr.shapes, remapPath);
      }
    });
  }

  function findDuplicateArcs(nodes) {
    var map = new Int32Array(nodes.arcs.size()),
        count = 0,
        i2;
    for (var i=0, n=nodes.arcs.size(); i<n; i++) {
      i2 = nodes.findDuplicateArc(i);
      map[i] = i2;
      if (i != i2) count++;
    }
    return count > 0 ? map : null;
  }

  function deleteUnusedArcs(dataset) {
    var test = getArcPresenceTest2(dataset.layers, dataset.arcs);
    var count1 = dataset.arcs.size();
    var map = dataset.arcs.deleteArcs(test); // condenses arcs
    var count2 = dataset.arcs.size();
    var deleteCount = count1 - count2;
    if (deleteCount > 0) {
      replaceIndexedArcIds(dataset, map);
    }
    return deleteCount;
  }

  // Return a function for updating a path (array of arc ids)
  // @map array generated by insertCutPoints()
  // @arcCount number of arcs in divided collection (kludge)
  function getDividedArcUpdater(map, arcCount) {
    return function(ids) {
      var ids2 = [];
      for (var j=0; j<ids.length; j++) {
        remapArcId2(ids[j], ids2);
      }
      return ids2;
    };

    function remapArcId2(id, ids) {
      var rev = id < 0,
          absId = rev ? ~id : id,
          min = map[absId],
          max = (absId >= map.length - 1 ? arcCount : map[absId + 1]) - 1,
          id2;
      do {
        if (rev) {
          id2 = ~max;
          max--;
        } else {
          id2 = min;
          min++;
        }
        ids.push(id2);
      } while (max - min >= 0);
    }
  }

  // Divides a collection of arcs at points where arc paths cross each other
  // Returns array for remapping arc ids
  function divideArcs(arcs, opts) {
    var points = findClippingPoints(arcs, opts);
    // TODO: avoid the following if no points need to be added
    var map = insertCutPoints(points, arcs);
    // segment-point intersections currently create duplicate points
    // TODO: consider dedup in a later cleanup pass?
    // arcs.dedupCoords();
    return map;
  }

  function cutPathsAtIntersections(dataset, opts) {
    var n = dataset.arcs.getPointCount();
    var map = divideArcs(dataset.arcs, opts);
    var n2 = dataset.arcs.getPointCount();
    remapDividedArcs(dataset, map);
    return n2 - n;
  }

  function remapDividedArcs(dataset, map) {
    var remapPath = getDividedArcUpdater(map, dataset.arcs.size());
    dataset.layers.forEach(function(lyr) {
      if (layerHasPaths(lyr)) {
        editShapes(lyr.shapes, remapPath);
      }
    });
  }

  // Inserts array of cutting points into an ArcCollection
  // Returns array for remapping arc ids
  function insertCutPoints(unfilteredPoints, arcs) {
    var data = arcs.getVertexData(),
        xx0 = data.xx,
        yy0 = data.yy,
        nn0 = data.nn,
        i0 = 0,
        i1 = 0,
        nn1 = [],
        srcArcTotal = arcs.size(),
        map = new Uint32Array(srcArcTotal),
        points = filterSortedCutPoints(sortCutPoints(unfilteredPoints, xx0, yy0), arcs),
        destPointTotal = arcs.getPointCount() + points.length * 2,
        xx1 = new Float64Array(destPointTotal),
        yy1 = new Float64Array(destPointTotal),
        n0, n1, arcLen, p;

    points.reverse(); // reverse sorted order to use pop()
    p = points.pop();

    for (var srcArcId=0, destArcId=0; srcArcId < srcArcTotal; srcArcId++) {
      // start merging an arc
      arcLen = nn0[srcArcId];
      map[srcArcId] = destArcId;
      n0 = 0;
      n1 = 0;
      while (n0 < arcLen) {
        // copy another point
        xx1[i1] = xx0[i0];
        yy1[i1] = yy0[i0];
        i1++;
        n1++;
        while (p && p.i == i0) {
          // interpolate any clip points that fall within the current segment
          xx1[i1] = p.x;
          yy1[i1] = p.y;
          i1++;
          n1++;
          nn1[destArcId++] = n1; // end current arc at intersection
          n1 = 0; // begin new arc
          xx1[i1] = p.x;
          yy1[i1] = p.y;
          i1++;
          n1++;
          p = points.pop();
        }
        n0++;
        i0++;
      }
      nn1[destArcId++] = n1;
    }

    if (i1 != destPointTotal) error("[insertCutPoints()] Counting error");
    arcs.updateVertexData(nn1, xx1, yy1, null);
    return map;
  }

  function convertIntersectionsToCutPoints(intersections, xx, yy) {
    var points = [], ix, a, b;
    for (var i=0, n=intersections.length; i<n; i++) {
      ix = intersections[i];
      a = getCutPoint(ix.x, ix.y, ix.a[0], ix.a[1], xx, yy);
      b = getCutPoint(ix.x, ix.y, ix.b[0], ix.b[1], xx, yy);
      if (a) points.push(a);
      if (b) points.push(b);
    }
    return points;
  }

  // i, j: indexes of segment endpoints in xx, yy, or of a single endpoint
  //   if point x,y falls on an endpoint
  // Assumes: i <= j
  function getCutPoint(x, y, i, j, xx, yy) {
    var ix = xx[i],
        iy = yy[i],
        jx = xx[j],
        jy = yy[j];
    if (j < i || j > i + 1) {
      error("Out-of-sequence arc ids:", i, j);
    }

    // Removed out-of-range check: small out-of-range intersection points are now allowed.
    // (Such points may occur due to fp rounding, when intersections occur along
    // vertical or horizontal segments)
    // if (geom.outsideRange(x, ix, jx) || geom.outsideRange(y, iy, jy)) {
      // return null;
    // }

    // Removed endpoint check: intersecting arcs need to be cut both at vertices
    // and between vertices, so pathfinding functions will work correctly.
    // if (x == ix && y == iy || x == jx && y == jy) {
      // return null;
    // }
    return {x: x, y: y, i: i};
  }

  // Sort insertion points in order of insertion
  // Insertion order: ascending id of first endpoint of containing segment and
  //   ascending distance from same endpoint.
  function sortCutPoints(points, xx, yy) {
    points.sort(function(a, b) {
      if (a.i != b.i) return a.i - b.i;
      return geom.distanceSq(xx[a.i], yy[a.i], a.x, a.y) - geom.distanceSq(xx[b.i], yy[b.i], b.x, b.y);
      // The old code below is no longer reliable, now that out-of-range intersection
      // points are allowed.
      // return Math.abs(a.x - xx[a.i]) - Math.abs(b.x - xx[b.i]) ||
      // Math.abs(a.y - yy[a.i]) - Math.abs(b.y - yy[b.i]);
    });
    return points;
  }

  // Removes duplicate points and arc endpoints
  function filterSortedCutPoints(points, arcs) {
    var filtered = [],
        pointId = 0;
    arcs.forEach2(function(i, n, xx, yy) {
      var j = i + n - 1,
          x0 = xx[i],
          y0 = yy[i],
          xn = xx[j],
          yn = yy[j],
          p, pp;

      while (pointId < points.length && points[pointId].i <= j) {
        p = points[pointId];
        pp = filtered[filtered.length - 1]; // previous point
        if (p.x == x0 && p.y == y0 || p.x == xn && p.y == yn) {
          // clip point is an arc endpoint -- discard
        } else if (pp && pp.x == p.x && pp.y == p.y && pp.i == p.i) {
          // clip point is a duplicate -- discard
        } else {
          filtered.push(p);
        }
        pointId++;
      }
    });
    return filtered;
  }

  function findClippingPoints(arcs, opts) {
    var intersections = findSegmentIntersections(arcs, opts),
        data = arcs.getVertexData();
    return convertIntersectionsToCutPoints(intersections, data.xx, data.yy);
  }

  var IntersectionCuts = /*#__PURE__*/Object.freeze({
    __proto__: null,
    addIntersectionCuts: addIntersectionCuts,
    divideArcs: divideArcs,
    cutPathsAtIntersections: cutPathsAtIntersections,
    remapDividedArcs: remapDividedArcs,
    insertCutPoints: insertCutPoints,
    getCutPoint: getCutPoint,
    sortCutPoints: sortCutPoints,
    filterSortedCutPoints: filterSortedCutPoints,
    findClippingPoints: findClippingPoints
  });

  // Create a mosaic layer from a dataset (useful for debugging commands like -clean
  //    that create a mosaic as an intermediate data structure)
  // Create additional layers if the "debug" flag is present
  //
  function mosaic(dataset, opts) {
    var layers2 = [];
    var nodes, output;
    if (!dataset.arcs) stop("Dataset is missing path data");
    nodes = addIntersectionCuts(dataset, opts);
    output = buildPolygonMosaic(nodes);
    layers2.push({
      name: 'mosaic',
      shapes: output.mosaic,
      geometry_type: 'polygon'
    });
    if (opts.debug) {
      layers2.push({
        geometry_type: 'polygon',
        name: 'mosaic-enclosure',
        shapes: output.enclosures
      });

      if (output.lostArcs.length > 0) {
        layers2 = layers2.concat(getLostArcLayers(output.lostArcs, nodes.arcs));
      }
    }
    return layers2;

    function getLostArcLayers(lostArcs, arcs) {
      var arcLyr = {geometry_type: 'polyline', name: 'lost-arcs', shapes: []};
      var pointLyr = {geometry_type: 'point', name: 'lost-arc-endpoints', shapes: []};
      var arcData = [];
      var pointData = [];
      lostArcs.forEach(function(arcId) {
        var first = arcs.getVertex(arcId, 0);
        var last = arcs.getVertex(arcId, -1);
        arcData.push({ARCID: arcId});
        arcLyr.shapes.push([[arcId]]);
        pointData.push({ARCID: arcId}, {ARCID: arcId});
        pointLyr.shapes.push([[first.x, first.y]], [[last.x, last.y]]);
      });
      arcLyr.data = new DataTable(arcData);
      pointLyr.data = new DataTable(pointData);
      return [arcLyr, pointLyr];
    }
  }

  // Process arc-node topology to generate a layer of indivisible mosaic "tiles" {mosaic}
  //   ... also return a layer of outer-boundary polygons {enclosures}
  //   ... also return an array of arcs that were dropped from the mosaic {lostArcs}
  //
  // Assumes that the arc-node topology of @nodes NodeCollection meets several
  //    conditions (expected to be true if addIntersectionCuts() has just been run)
  // 1. Arcs only touch at endpoints.
  // 2. The angle between any two segments that meet at a node is never zero.
  //      (this should follow from 1... but may occur due to FP errors)
  // TODO: a better job of handling FP errors
  //
  function buildPolygonMosaic(nodes) {
    T.start();
    // Detach any acyclic paths (spikes) from arc graph (these would interfere with
    //    the ring finding operation). This modifies @nodes -- a side effect.
    nodes.detachAcyclicArcs();
    var data = findMosaicRings(nodes);

    // Process CW rings: these are indivisible space-enclosing boundaries of mosaic tiles
    var mosaic = data.cw.map(function(ring) {return [ring];});
    T.stop('Find mosaic rings');
    T.start();

    // Process CCW rings: these are either holes or enclosure
    // TODO: optimize -- testing CCW path of every island is costly
    var enclosures = [];
    var index = new PathIndex(mosaic, nodes.arcs); // index CW rings to help identify holes
    data.ccw.forEach(function(ring) {
      var id = index.findSmallestEnclosingPolygon(ring);
      if (id > -1) {
        // Enclosed CCW rings are holes in the enclosing mosaic tile
        mosaic[id].push(ring);
      } else {
        // Non-enclosed CCW rings are outer boundaries -- add to enclosures layer
        reversePath(ring);
        enclosures.push([ring]);
      }
    });
    T.stop(utils.format("Detect holes (holes: %d, enclosures: %d)", data.ccw.length - enclosures.length, enclosures.length));

    return {mosaic: mosaic, enclosures: enclosures, lostArcs: data.lostArcs};
  }

  function findMosaicRings(nodes) {
    var arcs = nodes.arcs,
        cw = [],
        ccw = [],
        empty = [],
        lostArcs = [];

    var flags = new Uint8Array(arcs.size());
    var findPath = getPathFinder(nodes, useRoute);

    for (var i=0, n=flags.length; i<n; i++) {
      tryPath(i);
      // TODO: consider skipping detection of island ccw paths here (if possible)
      tryPath(~i);
    }
    return {
      cw: cw,
      ccw: ccw,
      empty: empty,
      lostArcs: lostArcs
    };

    function tryPath(arcId) {
      var ring, area;
      if (!routeIsOpen(arcId)) return;
      ring = findPath(arcId);
      if (!ring) {
        // arc is unused, but can not be extended to a complete ring
        lostArcs.push(arcId);
        debug("Dead-end arc:", arcId);
        return;
      }
      area = geom.getPlanarPathArea(ring, arcs);
      if (area > 0) {
        cw.push(ring);
      } else if (area < 0) {
        ccw.push(ring);
      } else {
        empty.push(ring);
      }
    }

    function useRoute(arcId) {
      return routeIsOpen(arcId, true);
    }

    function routeIsOpen(arcId, closeRoute) {
      var absId = absArcId(arcId);
      var bit = absId == arcId ? 1 : 2;
      var isOpen = (flags[absId] & bit) === 0;
      if (closeRoute && isOpen) flags[absId] |= bit;
      return isOpen;
    }
  }

  var PolygonMosaic = /*#__PURE__*/Object.freeze({
    __proto__: null,
    mosaic: mosaic,
    buildPolygonMosaic: buildPolygonMosaic
  });

  // Map positive or negative integer ids to non-negative integer ids

  function IdLookupIndex(n) {
    var fwdIndex = new Int32Array(n);
    var revIndex = new Int32Array(n);
    utils.initializeArray(fwdIndex, -1);
    utils.initializeArray(revIndex, -1);

    this.setId = function(id, val) {
      if (id < 0) {
        revIndex[~id] = val;
      } else {
        fwdIndex[id] = val;
      }
    };

    this.getId = function(id) {
      var idx = id < 0 ? ~id : id;
      if (idx >= n) {
        return -1; // TODO: consider throwing an error?
      }
      return id < 0 ? revIndex[idx] : fwdIndex[idx];
    };
  }

  // Associate mosaic tiles with shapes (i.e. identify the groups of tiles that
  //   belong to each shape)
  //
  function PolygonTiler(mosaic, arcTileIndex, nodes, opts) {
    var arcs = nodes.arcs;
    var visitedTileIndex = new IdTestIndex(mosaic.length);
    var divide = getHoleDivider(nodes);
    // temp vars
    var currHoles; // arc ids of all holes in shape
    var currShapeId;
    var currRingBbox;
    var tilesInShape; // accumulator for tile ids of tiles in current shape
    var ringIndex = new IdTestIndex(arcs.size());
    var holeIndex = new IdTestIndex(arcs.size());

    // return ids of tiles in shape
    this.getTilesInShape = function(shp, shapeId) {
      var cw = [], ccw = [], retn;
      tilesInShape = [];
      currHoles = [];
      currShapeId = shapeId;
      if (opts.no_holes) {
        divide(shp, cw, ccw);
        // ccw.forEach(internal.reversePath);
        // cw = cw.concat(ccw);
      } else {
        // divide shape into rings and holes (splits self-intersecting rings)
        // TODO: rewrite divide() -- it is a performance bottleneck and can convert
        //   space-filling areas into ccw holes
        divide(shp, cw, ccw);
        ccw.forEach(procShapeHole);
        holeIndex.setIds(currHoles);
      }
      cw.forEach(procShapeRing);
      retn = tilesInShape;
      // reset tmp vars, etc
      tilesInShape = null;
      holeIndex.clearIds(currHoles);
      currHoles = null;
      return retn;
    };

    function procShapeHole(path) {
      currHoles = currHoles ? currHoles.concat(path) : path;
    }

    function procShapeRing(path) {
      currRingBbox = arcs.getSimpleShapeBounds2(path);
      ringIndex.setIds(path);
      procArcIds(path);
      ringIndex.clearIds(path);
      // allow overlapping rings to visit the same tiles
      visitedTileIndex.clearIds(tilesInShape);
    }

    // ids: an array of arcIds
    function procArcIds(ids) {
      var tileIds = [], tileId;
      for (var i=0, n=ids.length; i<n; i++) {
        tileId = procRingArc(ids[i]);
        if (tileId > -1) tileIds.push(tileId);
      }
      if (tileIds.length > 0) traverseFromTiles(tileIds);
    }

    function traverseFromTiles(tileIds) {
      // breadth-first traversal, to prevent call stack overflow when there is
      // a large number of tiles within a ring (due to many partially overlapping rings)
      var arcIds = [];
      for (var i=0, n=tileIds.length; i<n; i++) {
        accumulateTraversibleArcIds(arcIds, mosaic[tileIds[i]]);
      }
      if (arcIds.length > 0) procArcIds(arcIds);
    }

    function accumulateTraversibleArcIds(ids, tile) {
      var arcId, ring;
      for (var j=0; j<tile.length; j++) {
        ring = tile[j];
        for (var i=0; i<ring.length; i++) {
          arcId = ring[i];
          if (arcIsTraversible(arcId)) {
            ids.push(~arcId);
          }
        }
      }
    }

    function arcIsTraversible(tileArc) {
      var neighborArc = ~tileArc;
      // don't cross boundary of the current ring or of any hole in the current shape
      var traversible = !(holeIndex.hasId(tileArc) || holeIndex.hasId(neighborArc)  ||
        ringIndex.hasId(tileArc) || ringIndex.hasId(neighborArc));
      if (traversible && arcs.arcIsContained(absArcId(neighborArc), currRingBbox) === false) {
        debug('Out-of-bounds traversal error in arc', tileArc);
        traversible = false;
      }
      return traversible;
    }

    function procRingArc(arcId) {
      var tileId = arcTileIndex.getShapeIdByArcId(arcId);
      if (arcs.arcIsContained(absArcId(arcId), currRingBbox) === false) {
        debug('Out-of-bounds ring arc', arcId);
        tileId = -1;
      }
      if (tileId == -1 || visitedTileIndex.hasId(tileId)) return -1;
      visitedTileIndex.setId(tileId);
      tilesInShape.push(tileId);
      return tileId;
    }
  }

  var PolygonTiler$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    PolygonTiler: PolygonTiler
  });

  function MosaicIndex(lyr, nodes, optsArg) {
    var opts = optsArg || {};
    var shapes = lyr.shapes;
    var divide = getHoleDivider(nodes);
    var mosaic = buildPolygonMosaic(nodes).mosaic;
    // map arc ids to tile ids
    var arcTileIndex = new ShapeArcIndex(mosaic, nodes.arcs);
    // keep track of which tiles have been assigned to shapes
    var fetchedTileIndex = new IdTestIndex(mosaic.length);
    // bidirection index of tile ids <=> shape ids
    var tileShapeIndex = new TileShapeIndex(mosaic, opts);
    // assign tiles to shapes
    var shapeTiler = new PolygonTiler(mosaic, arcTileIndex, nodes, opts);

    var weightFunction = getAreaWeightFunction(lyr.shapes, nodes.arcs);

    this.mosaic = mosaic;
    this.nodes = nodes; // kludge
    this.getSourceIdsByTileId = tileShapeIndex.getShapeIdsByTileId; // expose for -mosaic command
    this.getTileIdsByShapeId = tileShapeIndex.getTileIdsByShapeId;

    // Assign shape ids to mosaic tile shapes.
    shapes.forEach(function(shp, shapeId) {
      var tileIds = shapeTiler.getTilesInShape(shp, shapeId);
      tileShapeIndex.indexTileIdsByShapeId(shapeId, tileIds, weightFunction);
    });

    // ensure each tile is assigned to only one shape
    if (opts.flat) {
      tileShapeIndex.flatten();
    }

    // fill gaps
    // (assumes that tiles have been allocated to shapes and mosaic has been flattened)
    this.removeGaps = function(filter) {
      if (!opts.flat) {
        error('MosaicIndex#removeGaps() should only be called with a flat mosaic');
      }
      var remainingIds = tileShapeIndex.getUnusedTileIds();
      var filledIds = remainingIds.filter(function(tileId) {
        var tile = mosaic[tileId];
        return filter(tile[0]); // test tile ring, ignoring any holes (does this matter?)
      });
      filledIds.forEach(assignTileToAdjacentShape);
      return {
        removed: filledIds.length,
        remaining: remainingIds.length - filledIds.length
      };
    };

    this.getUnusedTiles = function() {
      return tileShapeIndex.getUnusedTileIds().map(tileIdToTile);
    };

    this.getTilesByShapeIds = function(shapeIds) {
      return getTileIdsByShapeIds(shapeIds).map(tileIdToTile);
    };

    function getAreaWeightFunction(shapes, arcs) {
      var index = [];
      return function(shpId) {
        var weight;
        if (shpId in index) {
          weight = index[shpId];
        } else {
          weight = index[shpId] = Math.abs(geom.getShapeArea(shapes[shpId], arcs));
        }
        return weight;
      };
    }

    function tileIdToTile(id, i) {
      return mosaic[id];
    }

    function assignTileToAdjacentShape(tileId) {
      var ring = mosaic[tileId][0];
      var arcs = nodes.arcs;
      var arcId, neighborShapeId, neighborTileId, arcLen;
      var shapeId = -1, maxArcLen = 0;
      for (var i=0; i<ring.length; i++) {
        arcId = ring[i];
        neighborTileId = arcTileIndex.getShapeIdByArcId(~arcId);
        if (neighborTileId < 0) continue;
        neighborShapeId = tileShapeIndex.getShapeIdByTileId(neighborTileId);
        if (neighborShapeId < 0) continue;
        arcLen = geom.getPathPerimeter([arcId], arcs);
        if (arcLen > maxArcLen) {
          shapeId = neighborShapeId;
          maxArcLen = arcLen;
        }
      }
      if (shapeId > -1) {
        tileShapeIndex.addTileToShape(shapeId, tileId);
      }
    }

    function getTileIdsByShapeIds(shapeIds) {
      var uniqIds = [];
      var tileId, tileIds, i, j;
      for (i=0; i<shapeIds.length; i++) {
        tileIds = tileShapeIndex.getTileIdsByShapeId(shapeIds[i]);
        for (j=0; j<tileIds.length; j++) {
          tileId = tileIds[j];
          // uniqify tile ids (in case the shape contains overlapping rings)
          if (fetchedTileIndex.hasId(tileId)) continue;
          fetchedTileIndex.setId(tileId);
          uniqIds.push(tileId);
        }
      }
      // clearing this index allows duplicate tile ids between calls to this function
      // (should not happen in a typical dissolve)
      fetchedTileIndex.clearIds(uniqIds);
      return uniqIds;
    }
  }

  // Map arc ids to shape ids, assuming perfect topology
  // (an arcId maps to at most one shape)
  // Supports looking up a shape id using an arc id.
  function ShapeArcIndex(shapes, arcs) {
    var n = arcs.size();
    var index = new IdLookupIndex(n);
    var shapeId;
    shapes.forEach(onShape);

    function onShape(shp, i) {
      shapeId = i;
      shp.forEach(onPart);
    }
    function onPart(path) {
      var arcId;
      for (var i=0, n=path.length; i<n; i++) {
        arcId = path[i];
        index.setId(arcId, shapeId);
      }
    }

    // returns -1 if shape has not been indexed
    this.getShapeIdByArcId = function(arcId) {
      return index.getId(arcId);
    };
  }

  var MosaicIndex$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    MosaicIndex: MosaicIndex,
    ShapeArcIndex: ShapeArcIndex
  });

  // Assumes that arcs do not intersect except at endpoints
  function dissolvePolygonLayer2(lyr, dataset, opts) {
    opts = utils.extend({}, opts);
    if (opts.field) {
      opts.fields = [opts.field]; // support old "field" parameter
    }
    var getGroupId = getCategoryClassifier(opts.fields, lyr.data);
    var groups = groupPolygons2(lyr, getGroupId);
    var shapes2 = dissolvePolygonGroups2(groups, lyr, dataset, opts);
    return composeDissolveLayer(lyr, shapes2, getGroupId, opts);
  }

  function getArcLayer(arcs, name) {
    var records = [];
    var lyr = {
      geometry_type: 'polyline',
      shapes: [],
      name: name
    };
    for (var i=0, n=arcs.size(); i<n; i++) {
      lyr.shapes.push([[i]]);
      records.push({arc_id: i});
    }
    lyr.data = new DataTable(records);
    return lyr;
  }

  function composeMosaicLayer(lyr, shapes2) {
    var records = shapes2.map(function(shp, i) {
      return {tile_id: i};
    });
    return utils.defaults({
      shapes: shapes2,
      data: new DataTable(records)
    }, lyr);
  }

  function groupPolygons2(lyr, getGroupId) {
    return lyr.shapes.reduce(function(groups, shape, shapeId) {
      var groupId = getGroupId(shapeId);
      if (groupId in groups === false) {
        groups[groupId] = [];
      }
      groups[groupId].push(shapeId);
      return groups;
    }, []);
  }

  function getGapRemovalMessage(removed, retained, areaLabel) {
    var msg;
    if (removed > 0 === false) return '';
    return utils.format('Closed %,d / %,d gap%s using %s',
        removed, removed + retained, utils.pluralSuffix(removed), areaLabel);
  }

  function dissolvePolygonGroups2(groups, lyr, dataset, opts) {
    var arcFilter = getArcPresenceTest(lyr.shapes, dataset.arcs);
    var nodes = new NodeCollection(dataset.arcs, arcFilter);
    var mosaicIndex = new MosaicIndex(lyr, nodes, {flat: true});
    var sliverOpts = utils.extend({sliver_control: 1}, opts);
    var filterData = getSliverFilter(lyr, dataset, sliverOpts);
    var cleanupData = mosaicIndex.removeGaps(filterData.filter);
    var pathfind = getRingIntersector(mosaicIndex.nodes);
    var dissolvedShapes = groups.map(function(shapeIds) {
      var tiles = mosaicIndex.getTilesByShapeIds(shapeIds);
      if (opts.tiles) {
        return tiles.reduce(function(memo, tile) {
          return memo.concat(tile);
        }, []);
      }
      return dissolveTileGroup2(tiles, pathfind);
    });
    // convert self-intersecting rings to outer/inner rings, for OGC
    // Simple Features compliance
    dissolvedShapes = fixTangentHoles(dissolvedShapes, pathfind);
    var gapMessage = getGapRemovalMessage(cleanupData.removed, cleanupData.remaining, filterData.label);
    if (gapMessage) message(gapMessage);
    return dissolvedShapes;
  }

  function dissolveTileGroup2(tiles, pathfind) {
    var rings = [],
        holes = [],
        dissolved, tile;
    for (var i=0, n=tiles.length; i<n; i++) {
      tile = tiles[i];
      rings.push(tile[0]);
      if (tile.length > 1) {
        holes = holes.concat(tile.slice(1));
      }
    }
    dissolved = pathfind(rings.concat(holes), 'dissolve');
    if (dissolved.length > 1) {
      // Commenting-out nesting order repair -- new method should prevent nesting errors
      // dissolved = internal.fixNestingErrors(dissolved, arcs);
    }
    return dissolved.length > 0 ? dissolved : null;
  }

  function fixTangentHoles(shapes, pathfind) {
    var onRing = function(memo, ring) {
      reversePath(ring);
      var fixed = pathfind([ring], 'flatten');
      if (fixed.length > 1) {
        fixed.forEach(reversePath);
        memo = memo.concat(fixed);
      } else {
        memo.push(reversePath(ring));
      }
      return memo;
    };
    return shapes.map(function(rings) {
      if (!rings) return null;
      return rings.reduce(onRing, []);
    });
  }

  var PolygonDissolve2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    dissolvePolygonLayer2: dissolvePolygonLayer2,
    composeMosaicLayer: composeMosaicLayer,
    dissolvePolygonGroups2: dissolvePolygonGroups2
  });

  function dissolveBufferDataset(dataset, optsArg) {
    var opts = optsArg || {};
    var lyr = dataset.layers[0];
    var tmp;
    var nodes = addIntersectionCuts(dataset, {});
    if (opts.debug_division) {
      return debugBufferDivision(lyr, nodes);
    }
    var mosaicIndex = new MosaicIndex(lyr, nodes, {flat: false, no_holes: false});
    if (opts.debug_mosaic) {
      tmp = composeMosaicLayer(lyr, mosaicIndex.mosaic);
      lyr.shapes = tmp.shapes;
      lyr.data = tmp.data;
      return;
    }
    var pathfind = getRingIntersector(mosaicIndex.nodes);
    var shapes2 = lyr.shapes.map(function(shp, shapeId) {
      var tiles = mosaicIndex.getTilesByShapeIds([shapeId]);
      var rings = [];
      for (var i=0; i<tiles.length; i++) {
        rings.push(tiles[i][0]);
      }
      return pathfind(rings, 'dissolve');
    });
    lyr.shapes = shapes2;
    if (!opts.no_dissolve) {
      dissolveArcs(dataset);
    }
  }

  function debugBufferDivision(lyr, nodes) {
    var divide = getHoleDivider(nodes);
    var shapes2 = [];
    var records = [];
    lyr.shapes.forEach(divideShape);
    lyr.shapes = shapes2;
    lyr.data = new DataTable(records);
    return lyr;

    function divideShape(shp) {
      var cw = [], ccw = [];
      divide(shp, cw, ccw);
      cw.forEach(function(ring) {
        shapes2.push([ring]);
        records.push({type: 'ring'});
      });
      ccw.forEach(function(hole) {
        shapes2.push([reversePath(hole)]);
        records.push({type: 'hole'});
      });
    }
  }

  // n = number of segments used to approximate a circle
  // Returns tolerance as a percent of circle radius
  function getBufferToleranceFromCircleSegments(n) {
    return 1 - Math.cos(Math.PI / n);
  }

  function getArcDegreesFromTolerancePct(pct) {
    return 360 * Math.acos(1 - pct) / Math.PI;
  }

  // n = number of segments used to approximate a circle
  // Returns tolerance as a percent of circle radius
  function getBufferToleranceFromCircleSegments2(n) {
    return 1 / Math.cos(Math.PI / n) - 1;
  }

  function getArcDegreesFromTolerancePct2(pct) {
    return 360 * Math.acos(1 / (pct + 1)) / Math.PI;
  }

  // return constant distance in meters, or return null if unparsable
  function parseConstantBufferDistance(str, crs) {
    var parsed = parseMeasure2(str);
    if (!parsed.value) return null;
    return convertDistanceParam(str, crs) || null;
  }

  function getBufferToleranceFunction(dataset, opts) {
    var crs = getDatasetCRS(dataset);
    var constTol = opts.tolerance ? parseConstantBufferDistance(opts.tolerance, crs) : 0;
    var pctOfRadius = 1/100;
    return function(meterDist) {
      if (constTol) return constTol;
      return constTol ? constTol : meterDist * pctOfRadius;
    };

  }

  function getBufferDistanceFunction(lyr, dataset, opts) {
    if (!opts.radius) {
      stop('Missing expected radius parameter');
    }
    var unitStr = opts.units || '';
    var crs = getDatasetCRS(dataset);
    var constDist = parseConstantBufferDistance(opts.radius + unitStr, crs);
    if (constDist) return function() {return constDist;};
    var expr = compileValueExpression(opts.radius, lyr, null, {}); // no arcs
    return function(shpId) {
      var val = expr(shpId);
      if (!val) return 0;
      // TODO: optimize common case that expression returns a number
      var dist = parseConstantBufferDistance(val + unitStr, crs);
      return dist || 0;
    };
  }

  var BufferCommon = /*#__PURE__*/Object.freeze({
    __proto__: null,
    dissolveBufferDataset: dissolveBufferDataset,
    getBufferToleranceFromCircleSegments: getBufferToleranceFromCircleSegments,
    getArcDegreesFromTolerancePct: getArcDegreesFromTolerancePct,
    getBufferToleranceFromCircleSegments2: getBufferToleranceFromCircleSegments2,
    getArcDegreesFromTolerancePct2: getArcDegreesFromTolerancePct2,
    parseConstantBufferDistance: parseConstantBufferDistance,
    getBufferToleranceFunction: getBufferToleranceFunction,
    getBufferDistanceFunction: getBufferDistanceFunction
  });

  // Returns a function for generating GeoJSON geometries (MultiLineString or MultiPolygon)
  function getPolylineBufferMaker(arcs, geod, getBearing, opts) {
    var maker = getPathBufferMaker(arcs, geod, getBearing, opts);
    var geomType = opts.geometry_type;
    // polyline output could be used for debugging
    var outputGeom = opts.output_geometry == 'polyline' ? 'polyline' : 'polygon';

    function polygonCoords(ring) {
      return [ring];
    }

    function pathBufferCoords(pathArcs, dist) {
      var pathCoords = maker(pathArcs, dist);
      var revPathArcs;
      if (geomType == 'polyline') {
        revPathArcs = reversePath(pathArcs.concat());
        pathCoords = pathCoords.concat(maker(revPathArcs, dist));
      }
      pathCoords.push(pathCoords[0]); // close path
      return outputGeom == 'polyline' ? pathCoords : [pathCoords];
    }

    return function(shape, dist) {
      var geom = {
        type: outputGeom == 'polyline' ? 'MultiLineString' : 'MultiPolygon',
        coordinates: []
      };
      for (var i=0; i<shape.length; i++) {
        geom.coordinates.push(pathBufferCoords(shape[i], dist));
      }
      return geom.coordinates.length == 0 ? null : geom;
    };
  }


  function getPathBufferMaker(arcs, geod, getBearing, opts) {

    var backtrackSteps = opts.backtrack >= 0 ? opts.backtrack : 50;
    var pathIter = new ShapeIter(arcs);
    var capStyle = opts.cap_style || 'round'; // expect 'round' or 'flat'
    var tolerance;
    // TODO: implement other join styles than round

    function updateTolerance(dist) {

    }

    function addRoundJoin(arr, x, y, startDir, angle, dist) {
      var increment = 10;
      var endDir = startDir + angle;
      var dir = startDir + increment;
      while (dir < endDir) {
        addBufferVertex(arr, geod(x, y, dir, dist), backtrackSteps);
        dir += increment;
      }
    }

    function addRoundJoin2(arr, x, y, startDir, angle, dist) {
      var increment = 10;
      var endDir = startDir + angle;
      var dir = startDir + increment;
      while (dir < endDir) {
        addBufferVertex(arr, geod(x, y, dir, dist), backtrackSteps);
        dir += increment;
      }
    }

    // Test if two points are within a snapping tolerance
    // TODO: calculate the tolerance more sensibly
    function veryClose(x1, y1, x2, y2, tol) {
      var dist = geom.distance2D(x1, y1, x2, y2);
      return dist < tol;
    }

    function veryCloseToPrevPoint(arr, x, y) {
      var prev = arr[arr.length - 1];
      return veryClose(prev[0], prev[1], x, y, 0.000001);
    }

    function appendPoint(arr, p) {
      var prev = arr[arr.length - 1];
      if (!veryClose(prev[0], prev[1], p[0], p[1], 1e-10)) {
        arr.push(p);
      } else {
        //var dist = geom.distance2D(prev[0], prev[1], p[0], p[1]);
        //console.log(dist)
      }
    }

    function makeCap(x, y, direction, dist) {
      if (capStyle == 'flat') {
        return [[x, y]];
      }
      return makeRoundCap(x, y, direction, dist);
    }

    function makeRoundCap(x, y, segmentDir, dist) {
      var points = [];
      var increment = 10;
      var startDir = segmentDir - 90;
      var angle = increment;
      while (angle < 180) {
        points.push(geod(x, y, startDir + angle, dist));
        angle += increment;
      }
      return points;
    }

    // get angle between two extruded segments in degrees
    // positive angle means join in convex (range: 0-180 degrees)
    // negative angle means join is concave (range: -180-0 degrees)
    function getJoinAngle(direction1, direction2) {
      var delta = direction2 - direction1;
      if (delta > 180) {
        delta -= 360;
      }
      if (delta < -180) {
        delta += 360;
      }
      return delta;
    }

    function addBufferVertex(arr, d, maxBacktrack) {
      var a, b, c, hit;
      for (var i=0, idx = arr.length - 3; i<maxBacktrack && idx >= 0; i++, idx--) {
        c = arr[arr.length - 1];
        a = arr[idx];
        b = arr[idx + 1];
        // TODO: consider using a geodetic intersection function for lat-long datasets
        hit = bufferIntersection(a[0], a[1], b[0], b[1], c[0], c[1], d[0], d[1]);
        if (hit) {
          // TODO: handle collinear segments
          // if (hit.length != 2) console.log('COLLINEAR', hit)
          // segments intersect -- replace two internal segment endpoints with xx point
          while (arr.length > idx + 1) arr.pop();
          appendPoint(arr, hit);
        }
      }

      appendPoint(arr, d);
    }

    return function(path, dist) {
      var left = [];
      var x0, y0, x1, y1, x2, y2;
      var p1, p2;
      var bearing, prevBearing, firstBearing, joinAngle;
      var i = 0;
      pathIter.init(path);

      while (pathIter.hasNext()) {
        // TODO: use a tolerance
        if (pathIter.x === x2 && pathIter.y === y2) continue; // skip duplicate points
        x1 = x2;
        y1 = y2;
        x2 = pathIter.x;
        y2 = pathIter.y;
        if (i >= 1) {
          prevBearing = bearing;
          bearing = getBearing(x1, y1, x2, y2);
          p1 = geod(x1, y1, bearing - 90, dist);
          p2 = geod(x2, y2, bearing - 90, dist);
          // left.push([x1, y1], p1) // debug extrusion lines
          // left.push([x2, y2], p2) // debug extrusion lines
        }
        if (i == 1) {
          firstBearing = bearing;
          x0 = x1;
          y0 = y1;
          left.push(p1, p2);
        }
        if (i > 1) {
          joinAngle = getJoinAngle(prevBearing, bearing);
          if (veryCloseToPrevPoint(left, p1[0], p1[1])) {
            // skip first point
            addBufferVertex(left, p2, backtrackSteps);
          } else if (joinAngle > 0) {
            addRoundJoin(left, x1, y1, prevBearing - 90, joinAngle, dist);
            addBufferVertex(left, p1, backtrackSteps);
            addBufferVertex(left, p2, backtrackSteps);
          } else {
            addBufferVertex(left, p1, backtrackSteps);
            addBufferVertex(left, p2, backtrackSteps);
          }
        }
        i++;
      }
      // TODO: handle defective polylines

      if (x2 == x0 && y2 == y0) {
        // add join to finish closed path
        joinAngle = getJoinAngle(bearing, firstBearing);
        if (joinAngle > 0) {
          addRoundJoin(left, x2, y2, bearing - 90, joinAngle, dist);
        }
      } else {
        // add a cap to finish open path
        left.push.apply(left, makeCap(x2, y2, bearing, dist));
      }
      return left;
    };
  }

  function addBufferVertex(arr, d, maxBacktrack) {
    var a, b, c, hit;
    for (var i=0, idx = arr.length - 3; i<maxBacktrack && idx >= 0; i++, idx--) {
      c = arr[arr.length - 1];
      a = arr[idx];
      b = arr[idx + 1];
      // TODO: consider using a geodetic intersection function for lat-long datasets
      hit = bufferIntersection(a[0], a[1], b[0], b[1], c[0], c[1], d[0], d[1]);
      if (hit) {
        // TODO: handle collinear segments
        if (hit.length != 2) {
          // console.log("COLLINEAR", hit)
        }
        // segments intersect -- replace two internal segment endpoints with xx point
        while (arr.length > idx + 1) arr.pop();
        // TODO: check proximity of hit to several points
        arr.push(hit);
      }
    }

    // TODO: check proximity to previous point
    arr.push(d); // add new point
  }

  // Exclude segments with non-intersecting bounding boxes before
  // calling intersection function
  // Possibly slightly faster than direct call... not worth it?
  function bufferIntersection(ax, ay, bx, by, cx, cy, dx, dy) {
    if (ax < cx && ax < dx && bx < cx && bx < dx ||
        ax > cx && ax > dx && bx > cx && bx > dx ||
        ay < cy && ay < dy && by < cy && by < dy ||
        ay > cy && ay > dy && by > cy && by > dy) return null;
    return geom.segmentIntersection(ax, ay, bx, by, cx, cy, dx, dy);
  }

  var PathBuffer = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getPolylineBufferMaker: getPolylineBufferMaker,
    addBufferVertex: addBufferVertex,
    bufferIntersection: bufferIntersection
  });

  function testSegmentBoundsIntersection(a, b, bb) {
    if (bb.containsPoint(a[0], a[1])) {
      return true;
    }
    return !!(
      geom.segmentIntersection(a[0], a[1], b[0], b[1], bb.xmin, bb.ymin, bb.xmin, bb.ymax) ||
      geom.segmentIntersection(a[0], a[1], b[0], b[1], bb.xmin, bb.ymax, bb.xmax, bb.ymax) ||
      geom.segmentIntersection(a[0], a[1], b[0], b[1], bb.xmax, bb.ymax, bb.xmax, bb.ymin) ||
      geom.segmentIntersection(a[0], a[1], b[0], b[1], bb.xmax, bb.ymin, bb.xmin, bb.ymin));
  }

  function getGeodesic(dataset) {
    var P = getDatasetCRS(dataset);
    if (!isLatLngCRS(P)) error('Expected an unprojected CRS');
    var f = P.es / (1 + Math.sqrt(P.one_es));
    var GeographicLib = require('mproj').internal.GeographicLib;
    return new GeographicLib.Geodesic.Geodesic(P.a, f);
  }

  function getPlanarSegmentEndpoint(x, y, bearing, meterDist) {
    var rad = bearing / 180 * Math.PI;
    var dx = Math.sin(rad) * meterDist;
    var dy = Math.cos(rad) * meterDist;
    return [x + dx, y + dy];
  }

  // source: https://github.com/mapbox/cheap-ruler/blob/master/index.js
  function fastGeodeticSegmentFunction(lng, lat, bearing, meterDist) {
    var D2R = Math.PI / 180;
    var cos = Math.cos(lat * D2R);
    var cos2 = 2 * cos * cos - 1;
    var cos3 = 2 * cos * cos2 - cos;
    var cos4 = 2 * cos * cos3 - cos2;
    var cos5 = 2 * cos * cos4 - cos3;
    var kx = (111.41513 * cos - 0.09455 * cos3 + 0.00012 * cos5) * 1000;
    var ky = (111.13209 - 0.56605 * cos2 + 0.0012 * cos4) * 1000;
    var bearingRad = bearing * D2R;
    var lat2 = lat + Math.cos(bearingRad) * meterDist / ky;
    var lng2 = lng + Math.sin(bearingRad) * meterDist / kx;
    return [lng2, lat2];
  }

  function getGeodeticSegmentFunction(dataset, highPrecision) {
    var P = getDatasetCRS(dataset);
    if (!isLatLngCRS(P)) {
      return getPlanarSegmentEndpoint;
    }
    if (!highPrecision) {
      // CAREFUL: this function has higher error at very large distances and at the poles
      // also, it wouldn't work for other planets than Earth
      return fastGeodeticSegmentFunction;
    }
    var g = getGeodesic(dataset);
    return function(lng, lat, bearing, meterDist) {
      var o = g.Direct(lat, lng, bearing, meterDist);
      var p = [o.lon2, o.lat2];
      return p;
    };
  }

  function getGeodeticDistanceFunction(dataset, highPrecision) {
    var P = getDatasetCRS(dataset);
    if (!isLatLngCRS(P)) {
      return getPlanarSegmentEndpoint;
    }
  }

  // Useful for determining if a segment that intersects another segment is
  // entering or leaving an enclosed buffer area
  // returns -1 if angle of p1p2 -> p3p4 is counter-clockwise (left turn)
  // returns 1 if angle is clockwise
  // return 0 if segments are collinear
  function segmentTurn(p1, p2, p3, p4) {
    var ax = p1[0],
        ay = p1[1],
        bx = p2[0],
        by = p2[1],
        // shift p3p4 segment to start at p2
        dx = bx - p3[0],
        dy = by - p3[1],
        cx = p4[0] + dx,
        cy = p4[1] + dy,
        orientation = geom.orient2D(ax, ay, bx, by, cx, cy);
      if (!orientation) return 0;
      return orientation < 0 ? 1 : -1;
  }

  function bearingDegrees(a, b, c, d) {
    return geom.bearing(a, b, c, d) * 180 / Math.PI;
  }

  function bearingDegrees2D(a, b, c, d) {
    return geom.bearing2D(a, b, c, d) * 180 / Math.PI;
  }

  // return function to calculate bearing of a segment in degrees
  function getBearingFunction(dataset) {
    var P = getDatasetCRS(dataset);
    return isLatLngCRS(P) ? bearingDegrees : bearingDegrees2D;
  }

  var Geodesic = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getGeodeticSegmentFunction: getGeodeticSegmentFunction,
    segmentTurn: segmentTurn,
    getBearingFunction: getBearingFunction
  });

  function getPolylineBufferMaker2(arcs, geod, getBearing, opts) {
    var makeLeftBuffer = getPathBufferMaker2(arcs, geod, getBearing, opts);
    var geomType = opts.geometry_type;

    function polygonCoords(ring) {
      return [ring];
    }

    function needLeftBuffer(path, arcs) {
      if (geomType == 'polyline') {
        return opts.type != 'right';
      }
      // assume polygon type
      if (opts.type == 'outer') {
        return geom.getPathWinding(path, arcs) == 1;
      }
      if (opts.type == 'inner') {
        return geom.getPathWinding(path, arcs) == -1;
      }
      return true;
    }

    function needRightBuffer() {
      return geomType == 'polyline' && opts.type != 'left';
    }

    function makeBufferParts(pathArcs, dist) {
      var leftPartials, rightPartials, parts, revPathArcs;

      if (needLeftBuffer(pathArcs, arcs)) {
        leftPartials = makeLeftBuffer(pathArcs, dist);
      }
      if (needRightBuffer()) {
        revPathArcs = reversePath(pathArcs.concat());
        rightPartials = makeLeftBuffer(revPathArcs, dist);
      }
      parts = (leftPartials || []).concat(rightPartials || []);
      return parts.map(polygonCoords);
    }

    // Returns a GeoJSON Geometry (MultiLineString or MultiPolygon) or null
    return function(shape, dist) {
      var geom = {
        type: 'MultiPolygon',
        coordinates: []
      };
      for (var i=0; i<shape.length; i++) {
        geom.coordinates = geom.coordinates.concat(makeBufferParts(shape[i], dist));
      }
      return geom.coordinates.length == 0 ? null : geom;
    };
  }

  function getPathBufferMaker2(arcs, geod, getBearing, opts) {
    var backtrackSteps = opts.backtrack >= 0 ? opts.backtrack : 50;
    var pathIter = new ShapeIter(arcs);
    var capStyle = opts.cap_style || 'round'; // expect 'round' or 'flat'
    var tolerance;
    var partials, left, center;
    var bounds;
    // TODO: implement other join styles than round

    function updateTolerance(dist) {

    }

    function addRoundJoin(x, y, startDir, angle, dist) {
      var increment = 10;
      var endDir = startDir + angle;
      var dir = startDir + increment;
      while (dir < endDir) {
        addBufferVertex(geod(x, y, dir, dist));
        dir += increment;
      }
    }

    // function addRoundJoin2(arr, x, y, startDir, angle, dist) {
    //   var increment = 10;
    //   var endDir = startDir + angle;
    //   var dir = startDir + increment;
    //   while (dir < endDir) {
    //     addBufferVertex(arr, geod(x, y, dir, dist));
    //     dir += increment;
    //   }
    // }

    // Test if two points are within a snapping tolerance
    // TODO: calculate the tolerance more sensibly
    function veryClose(x1, y1, x2, y2, tol) {
      var dist = geom.distance2D(x1, y1, x2, y2);
      return dist < tol;
    }

    function veryCloseToPrevPoint(arr, x, y) {
      var prev = arr[arr.length - 1];
      return veryClose(prev[0], prev[1], x, y, 0.000001);
    }

    function appendPoint(arr, p) {
      var prev = arr[arr.length - 1];
      if (!veryClose(prev[0], prev[1], p[0], p[1], 1e-10)) {
        arr.push(p);
      } else {
        //var dist = geom.distance2D(prev[0], prev[1], p[0], p[1]);
        //console.log(dist)
      }
    }

    function makeCap(x, y, direction, dist) {
      if (capStyle == 'flat') {
        return [[x, y]];
      }
      return makeRoundCap(x, y, direction, dist);
    }

    function makeRoundCap(x, y, segmentDir, dist) {
      var points = [];
      var increment = 10;
      var startDir = segmentDir - 90;
      var angle = increment;
      while (angle < 180) {
        points.push(geod(x, y, startDir + angle, dist));
        angle += increment;
      }
      return points;
    }

    // get angle between two extruded segments in degrees
    // positive angle means join in convex (range: 0-180 degrees)
    // negative angle means join is concave (range: -180-0 degrees)
    function getJoinAngle(direction1, direction2) {
      var delta = direction2 - direction1;
      if (delta > 180) {
        delta -= 360;
      }
      if (delta < -180) {
        delta += 360;
      }
      return delta;
    }


    // TODO: handle polygon holes
    function addBufferVertex(d) {
      var arr = left;
      var a, b, c, c0, hit;
      // c is the start point of the segment formed by appending point d to the polyline.
      c0 = c = arr[arr.length - 1];
      for (var i=0, idx = arr.length - 3; idx >= 0; i++, idx--) {
        a = arr[idx];
        b = arr[idx + 1];
        // TODO: consider using a geodetic intersection function for lat-long datasets
        hit = bufferIntersection(a[0], a[1], b[0], b[1], c[0], c[1], d[0], d[1]);
        if (hit) {
          if (segmentTurn(a, b, c, d) == 1) {
            // interpretation: segment cd crosses segment ab from outside to inside
            // the buffer -- we need to start a new partial; otherwise,
            // the following code would likely remove a loop representing
            // an oxbow-type hole in the buffer.
            //
            finishPartial();
            break;
          } else {
            // console.log('HIT', internal.segmentTurn(a, b, c, d))
          }
          // TODO: handle collinear segments (consider creating new partial)
          // if (hit.length != 2) console.log('COLLINEAR', hit)

          // segments intersect, indicating a spurious loop: remove the loop and
          // replace the endpoints of the intersecting segments with the intersection point.
          while (arr.length > idx + 1) arr.pop();
          appendPoint(arr, hit);
          c = hit; // update starting point of the newly added segment
        }

        // Maintain a bounding box around vertices before the backtrack limit.
        // If the latest segment intersects this bounding box, there could be a self-
        // intersection -- start a new partial to prevent self-intersection.
        //
        if (i >= backtrackSteps) {
          if (!bounds) {
            bounds = new Bounds();
            bounds.mergePoint(a[0], a[1]);
          }
          bounds.mergePoint(b[0], b[1]);
          if (testSegmentBoundsIntersection(c0, d, bounds)) {
            finishPartial();
          }
          break;
        }
      }

      appendPoint(arr, d);
    }

    function finishPartial() {
      // Get endpoints of the two polylines, for starting the next partial
      var leftEP = left[left.length - 1];
      var centerEP = center[center.length - 1];

      // Make a polygon ring
      var ring = [];
      extendArray(ring, left);
      center.reverse();
      extendArray(ring, center);
      ring.push(ring[0]); // close ring
      partials.push(ring);

      // Start next partial
      left.push(leftEP);
      center.push(centerEP);

      // clear bbox
      // bbox = null;
    }

    function extendArray(arr, arr2) {
      arr2.reverse();
      while(arr2.length > 0) arr.push(arr2.pop());
    }

    return function(path, dist) {
      var x0, y0, x1, y1, x2, y2;
      var p1, p2;
      var bearing, prevBearing, firstBearing, joinAngle;
      partials = [];
      left = [];
      center = [];
      pathIter.init(path);

      if (pathIter.hasNext()) {
        x0 = x2 = pathIter.x;
        y0 = y2 = pathIter.y;
      }
      while (pathIter.hasNext()) {
        // TODO: use a tolerance
        if (pathIter.x === x2 && pathIter.y === y2) continue; // skip duplicate points
        x1 = x2;
        y1 = y2;
        x2 = pathIter.x;
        y2 = pathIter.y;

        prevBearing = bearing;
        bearing = getBearing(x1, y1, x2, y2);
        // shift original polyline segment to the left by buffer distance
        p1 = geod(x1, y1, bearing - 90, dist);
        p2 = geod(x2, y2, bearing - 90, dist);

        if (center.length === 0) {
          // first loop, second point in this partial
          if (partials.length === 0) {
            firstBearing = bearing;
          }
          left.push(p1, p2);
          center.push([x1, y1], [x2, y2]);
        } else {
          //
          joinAngle = getJoinAngle(prevBearing, bearing);
          if (veryCloseToPrevPoint(left, p1[0], p1[1])) {
            // skip first point
            addBufferVertex(p2);
          } else if (joinAngle > 0) {
            addRoundJoin(x1, y1, prevBearing - 90, joinAngle, dist);
            addBufferVertex(p1);
            addBufferVertex(p2);
          } else {
            addBufferVertex(p1);
            addBufferVertex(p2);
          }
          center.push([x2, y2]);
        }
      }

      if (center.length > 1) {
        finishPartial();
      }
      // TODO: handle defective polylines

      // if (x2 == x0 && y2 == y0) {
      //   // add join to finish closed path
      //   joinAngle = getJoinAngle(bearing, firstBearing);
      //   if (joinAngle > 0) {
      //     addRoundJoin(leftpart, x2, y2, bearing - 90, joinAngle, dist);
      //   }
      // } else {
      //   // add a cap to finish open path
      //   leftpart.push.apply(leftpart, makeCap(x2, y2, bearing, dist));
      // }

      return partials;
    };
  }

  function makePolylineBuffer(lyr, dataset, opts) {
    var geojson = makeShapeBufferGeoJSON(lyr, dataset, opts);
    var dataset2 = importGeoJSON(geojson, {});
    dissolveBufferDataset(dataset2, opts);
    return dataset2;
  }

  function makeShapeBufferGeoJSON(lyr, dataset, opts) {
    var distanceFn = getBufferDistanceFunction(lyr, dataset, opts);
    var toleranceFn = getBufferToleranceFunction(dataset, opts);
    var geod = getGeodeticSegmentFunction(dataset, false);
    var getBearing = getBearingFunction(dataset);
    var makerOpts = Object.assign({geometry_type: lyr.geometry_type}, opts);
    var factory = opts.v2 ? getPolylineBufferMaker2 : getPolylineBufferMaker;
    var makeShapeBuffer = factory(dataset.arcs, geod, getBearing, makerOpts);
    var records = lyr.data ? lyr.data.getRecords() : null;
    var geometries = lyr.shapes.map(function(shape, i) {
      var dist = distanceFn(i);
      if (!dist || !shape) return null;
      return makeShapeBuffer(shape, dist, lyr.geometry_type);
    });
    // TODO: make sure that importer supports null geometries (not standard GeoJSON);
    return {
      type: 'GeometryCollection',
      geometries: geometries
    };
  }

  function makePolygonBuffer(lyr, dataset, opts) {
    var geojson = makeShapeBufferGeoJSON(lyr, dataset, opts);
    var dataset2 = importGeoJSON(geojson, {});
    dissolveBufferDataset(dataset2);
    return dataset2;
  }

  function makePointBuffer(lyr, dataset, opts) {
    var geojson = makePointBufferGeoJSON(lyr, dataset, opts);
    return importGeoJSON(geojson, {});
  }

  function makePointBufferGeoJSON(lyr, dataset, opts) {
    var vertices = opts.vertices || 72;
    var distanceFn = getBufferDistanceFunction(lyr, dataset, opts);
    var geod = getGeodeticSegmentFunction(dataset);
    var geometries = lyr.shapes.map(function(shape, i) {
      var dist = distanceFn(i);
      if (!dist || !shape) return null;
      return getPointBufferGeometry(shape, dist, vertices, geod);
    });
    // TODO: make sure that importer supports null geometries (nonstandard GeoJSON);
    return {
      type: 'GeometryCollection',
      geometries: geometries
    };
  }

  function getPointBufferGeometry(points, distance, vertices, geod) {
    var coordinates = [];
    if (!points || !points.length) return null;
    for (var i=0; i<points.length; i++) {
      coordinates.push(getPointBufferPolygonCoordinates(points[i], distance, vertices, geod));
    }
    return coordinates.length == 1 ? {
      type: 'Polygon',
      coordinates: coordinates[0]
    } : {
      type: 'MultiPolygon',
      coordinates: coordinates
    };
  }

  function getPointBufferPolygonCoordinates(p, meterDist, vertices, geod) {
    var coords = [],
        angle = 360 / vertices;
    for (var i=0; i<vertices; i++) {
      coords.push(geod(p[0], p[1], i * angle, meterDist));
    }
    coords.push(coords[0].concat());
    return [coords]; // return vertices as the first (space-enclosing) ring of a Polygon geometry
  }

  // returns a dataset
  cmd.buffer = function(layers, dataset, opts) {
    return makeBufferLayer(layers[0], dataset, opts);
  };

  function makeBufferLayer(lyr, dataset, opts) {
    var dataset2, lyr2;
    if (lyr.geometry_type == 'point') {
      dataset2 = makePointBuffer(lyr, dataset, opts);
    } else if (lyr.geometry_type == 'polyline') {
      dataset2 = makePolylineBuffer(lyr, dataset, opts);
    } else if (lyr.geometry_type == 'polygon') {
      dataset2 = makePolygonBuffer(lyr, dataset, opts);
    } else {
      stop("Unsupported geometry type");
    }
    var outputLayers = mergeDatasetsIntoDataset(dataset, [dataset2]);
    lyr2 = outputLayers[0];
    lyr2.name = lyr.name;
    if (lyr.data && !lyr2.data) {
      lyr2.data = opts.no_replace ? lyr.data.clone() : lyr.data;
    }
    return outputLayers;
  }

  cmd.cleanLayers = function(layers, dataset, optsArg) {
    var opts = optsArg || {};
    var deepClean = !opts.only_arcs;
    var pathClean = utils.some(layers, layerHasPaths);
    var nodes;
    if (opts.debug) {
      addIntersectionCuts(dataset, opts);
      return;
    }
    layers.forEach(function(lyr) {
      if (!layerHasGeometry(lyr)) return;
      if (lyr.geometry_type == 'polygon' && opts.rewind) {
        rewindPolygons(lyr, dataset.arcs);
      }
      if (deepClean) {
        if (!nodes) {
          nodes = addIntersectionCuts(dataset, opts);
        }
        if (lyr.geometry_type == 'polygon') {
          cleanPolygonLayerGeometry(lyr, dataset, opts);
        } else if (lyr.geometry_type == 'polyline') {
          cleanPolylineLayerGeometry(lyr, dataset, opts);
        } else if (lyr.geometry_type == 'point') {
          cleanPointLayerGeometry(lyr, dataset, opts);
        }
      }
      if (!opts.allow_empty) {
        cmd.filterFeatures(lyr, dataset.arcs, {remove_empty: true});
      }
    });

    if (!opts.no_arc_dissolve && pathClean && dataset.arcs) {
      // remove leftover endpoints within contiguous lines
      dissolveArcs(dataset);
    }
  };

  function cleanPolygonLayerGeometry(lyr, dataset, opts) {
    var groups = lyr.shapes.map(function(shp, i) {
      return [i];
    });
    lyr.shapes = dissolvePolygonGroups2(groups, lyr, dataset, opts);
  }

  // Remove duplicate points from multipoint geometries
  // TODO: consider checking for invalid coordinates
  function cleanPointLayerGeometry(lyr, dataset, opts) {
    var index, parts;
    lyr.shapes = lyr.shapes.map(function(shp, i) {
      if (!shp || shp.length > 0 === false) {
        return null;
      }
      if (shp.length == 1) {
        return shp; // single part
      }
      // remove duplicate points from multipoint geometry
      index = {};
      parts = [];
      shp.forEach(onPoint);
      if (parts.length === 0) {
        return null;
      }
      return parts;
    });

    function onPoint(p) {
      var key = p.join('~');
      if (key in index) return;
      index[key] = true;
      parts.push(p);
    }
  }

  // Assumes intersection cuts have been added and duplicated points removed
  // TODO: consider closing undershoots (see mapshaper-undershoots.js)
  function cleanPolylineLayerGeometry(lyr, dataset, opts) {
    var filter = getArcPresenceTest(lyr.shapes, dataset.arcs);
    var nodes = new NodeCollection(dataset.arcs, filter);
    var shape;
    lyr.shapes = lyr.shapes.map(function(shp, i) {
      if (!shp) return null;
      shape = [];
      forEachShapePart(shp, onPart);
      return shape;
    });

    function onPart(ids) {
      var n = ids.length;
      var id, connected;
      var ids2 = [];
      for (var i=0; i<n; i++) {
        // check each segment of the current part (equivalent to a LineString)
        id = ids[i];
        ids2.push(id);
        if (i < n-1 && nodes.getConnectedArcs(id).length > 1) {
          // divide the current part if the front endpoint of the current segment
          // touches any other segment than the next segment in this part
          // TODO: consider not dividing if the intersection does not involve
          // the current feature (ie. it is not a self-intersection).
          // console.log('connections:', nodes.getConnectedArcs(id))
          shape.push(ids2);
          ids2 = [];
        }
      }
      if (ids2.length > 0) shape.push(ids2);
    }
  }

  // Remove small-area polygon rings (very simple implementation of sliver removal)
  // TODO: more sophisticated sliver detection (e.g. could consider ratio of area to perimeter)
  // TODO: consider merging slivers into adjacent polygons to prevent gaps from forming
  // TODO: consider separate gap removal function as an alternative to merging slivers
  //
  cmd.filterSlivers = function(lyr, dataset, opts) {
    if (lyr.geometry_type != 'polygon') {
      return 0;
    }
    return filterSlivers(lyr, dataset, opts);
  };

  function filterSlivers(lyr, dataset, optsArg) {
    var opts = utils.extend({sliver_control: 1}, optsArg);
    var filterData = getSliverFilter(lyr, dataset, opts);
    var ringTest = filterData.filter;
    var removed = 0;
    var pathFilter = function(path, i, paths) {
      if (ringTest(path)) {
        removed++;
        return null;
      }
    };

    editShapes(lyr.shapes, pathFilter);
    message(utils.format("Removed %'d sliver%s using %s", removed, utils.pluralSuffix(removed), filterData.label));
    return removed;
  }

  function filterClipSlivers(lyr, clipLyr, arcs) {
    var threshold = getDefaultSliverThreshold(lyr, arcs);
    // message('Using variable sliver threshold (based on ' + (threshold / 1e6) + ' sqkm)');
    var ringTest = getSliverTest(arcs, threshold, 1);
    var flags = new Uint8Array(arcs.size());
    var removed = 0;
    var pathFilter = function(path) {
      var prevArcs = 0,
          newArcs = 0;
      for (var i=0, n=path && path.length || 0; i<n; i++) {
        if (flags[absArcId(path[i])] > 0) {
          newArcs++;
        } else {
          prevArcs++;
        }
      }
      // filter paths that contain arcs from both original and clip/erase layers
      //   and are small
      if (newArcs > 0 && prevArcs > 0 && ringTest(path)) {
        removed++;
        return null;
      }
    };

    countArcsInShapes(clipLyr.shapes, flags);
    editShapes(lyr.shapes, pathFilter);
    return removed;
  }

  // Assumes: Arcs have been divided
  //
  function clipPolylines(targetShapes, clipShapes, nodes, type) {
    var index = new PathIndex(clipShapes, nodes.arcs);

    return targetShapes.map(function(shp) {
      return clipPolyline(shp);
    });

    function clipPolyline(shp) {
      var clipped = null;
      if (shp) clipped = shp.reduce(clipPath, []);
      return clipped && clipped.length > 0 ? clipped : null;
    }

    function clipPath(memo, path) {
      var clippedPath = null,
          arcId, enclosed;
      for (var i=0; i<path.length; i++) {
        arcId = path[i];
        enclosed = index.arcIsEnclosed(arcId);
        if (enclosed && type == 'clip' || !enclosed && type == 'erase') {
          if (!clippedPath) {
            memo.push(clippedPath = []);
          }
          clippedPath.push(arcId);
        } else {
          clippedPath = null;
        }
      }
      return memo;
    }
  }

  var PolylineClipping = /*#__PURE__*/Object.freeze({
    __proto__: null,
    clipPolylines: clipPolylines
  });

  // TODO: remove this obsolete dissolve code (still used by clip)

  function concatShapes(shapes) {
    return shapes.reduce(function(memo, shape) {
      extendShape(memo, shape);
      return memo;
    }, []);
  }

  function extendShape(dest, src) {
    if (src) {
      for (var i=0, n=src.length; i<n; i++) {
        dest.push(src[i]);
      }
    }
  }

  // TODO: to prevent invalid holes,
  // could erase the holes from the space-enclosing rings.
  function appendHolesToRings(cw, ccw) {
    for (var i=0, n=ccw.length; i<n; i++) {
      cw.push(ccw[i]);
    }
    return cw;
  }

  function getPolygonDissolver(nodes, spherical) {
    spherical = spherical && !nodes.arcs.isPlanar();
    var flags = new Uint8Array(nodes.arcs.size());
    var divide = getHoleDivider(nodes, spherical);
    var pathfind = getRingIntersector(nodes, flags);

    return function(shp) {
      if (!shp) return null;
      var cw = [],
          ccw = [];

      divide(shp, cw, ccw);
      cw = pathfind(cw, 'flatten');
      ccw.forEach(reversePath);
      ccw = pathfind(ccw, 'flatten');
      ccw.forEach(reversePath);
      var shp2 = appendHolesToRings(cw, ccw);
      var dissolved = pathfind(shp2, 'dissolve');

      if (dissolved.length > 1) {
        dissolved = fixNestingErrors(dissolved, nodes.arcs);
      }

      return dissolved.length > 0 ? dissolved : null;
    };
  }

  // TODO: remove dependency on old polygon dissolve function

  // assumes layers and arcs have been prepared for clipping
  function clipPolygons(targetShapes, clipShapes, nodes, type, optsArg) {
    var arcs = nodes.arcs;
    var opts = optsArg || {};
    var clipFlags = new Uint8Array(arcs.size());
    var routeFlags = new Uint8Array(arcs.size());
    var clipArcTouches = 0;
    var clipArcUses = 0;
    var usedClipArcs = [];
    var dividePath = getPathFinder(nodes, useRoute, routeIsActive);
    var dissolvePolygon = getPolygonDissolver(nodes);

    // The following cleanup step is a performance bottleneck (it often takes longer than
    // other clipping operations) and is usually not needed. Furthermore, it only
    // eliminates a few kinds of problems, like target polygons with abnormal winding
    // or overlapping rings. TODO: try to optimize or remove it for all cases

    // skipping shape cleanup when using the experimental fast bbox clipping option
    if (!opts.bbox2) {
      // clean each target polygon by dissolving its rings
      targetShapes = targetShapes.map(dissolvePolygon);
    }

    // NOTE: commenting-out dissolve of clipping shapes, because the dissolve function
    //   does not tolerate overlapping shapes and some other topology errors.
    //   Dissolving was an optimization intended to improve performance when using a
    //   mosaic (e.g. counties, states) to clip or erase another layer. The user
    //   can optimize this case by dissolving as a separate step.
    // // merge rings of clip/erase polygons and dissolve them all
    // clipShapes = [dissolvePolygon(internal.concatShapes(clipShapes))];

    // Open pathways in the clip/erase layer
    // Need to expose clip/erase routes in both directions by setting route
    // in both directions to visible -- this is how cut-out shapes are detected
    // Or-ing with 0x11 makes both directions visible (so reverse paths will block)
    openArcRoutes(clipShapes, arcs, clipFlags, type == 'clip', type == 'erase', !!"dissolve", 0x11);
    var index = new PathIndex(clipShapes, arcs);
    var clippedShapes = targetShapes.map(function(shape, i) {
      if (shape) {
        return clipPolygon(shape, type, index);
      }
      return null;
    });

    // add clip/erase polygons that are fully contained in a target polygon
    // need to index only non-intersecting clip shapes
    // (Intersecting shapes have one or more arcs that have been scanned)

    // first, find shapes that do not intersect the target layer
    // (these could be inside or outside the target polygons)
    var undividedClipShapes = findUndividedClipShapes(clipShapes);

    closeArcRoutes(clipShapes, arcs, routeFlags, true, true); // not needed?
    index = new PathIndex(undividedClipShapes, arcs);
    targetShapes.forEach(function(shape, shapeId) {
      // find clipping paths that are internal to this target polygon
      var paths = shape ? findInteriorPaths(shape, type, index) : null;
      if (paths) {
        clippedShapes[shapeId] = (clippedShapes[shapeId] || []).concat(paths);
      }
    });

    return clippedShapes;

    function clipPolygon(shape, type, index) {
      var dividedShape = [],
          clipping = type == 'clip',
          erasing = type == 'erase';

      // open pathways for entire polygon rather than one ring at a time --
      // need to create polygons that connect positive-space rings and holes
      openArcRoutes(shape, arcs, routeFlags, true, false, false);

      forEachShapePart(shape, function(ids) {
        var path;
        for (var i=0, n=ids.length; i<n; i++) {
          clipArcTouches = 0;
          clipArcUses = 0;
          path = dividePath(ids[i]);
          if (path) {
            // if ring doesn't touch/intersect a clip/erase polygon, check if it is contained
            // if (clipArcTouches === 0) {
            // if ring doesn't incorporate an arc from the clip/erase polygon,
            // check if it is contained (assumes clip shapes are dissolved)
            if (clipArcTouches === 0 || clipArcUses === 0) { //
              var contained = index.pathIsEnclosed(path);
              if (clipping && contained || erasing && !contained) {
                dividedShape.push(path);
              }
              // TODO: Consider breaking if polygon is unchanged
            } else {
              dividedShape.push(path);
            }
          }
        }
      });

      // Clear pathways of current target shape to hidden/closed
      closeArcRoutes(shape, arcs, routeFlags, true, true, true);
      // Also clear pathways of any clip arcs that were used
      if (usedClipArcs.length > 0) {
        closeArcRoutes(usedClipArcs, arcs, routeFlags, true, true, true);
        usedClipArcs = [];
      }

      return dividedShape.length === 0 ? null : dividedShape;
    }

    function routeIsActive(id) {
      var fw = id >= 0,
          abs = fw ? id : ~id,
          visibleBit = fw ? 1 : 0x10,
          targetBits = routeFlags[abs],
          clipBits = clipFlags[abs];

      if (clipBits > 0) clipArcTouches++;
      return (targetBits & visibleBit) > 0 || (clipBits & visibleBit) > 0;
    }

    function useRoute(id) {
      var fw = id >= 0,
          abs = fw ? id : ~id,
          targetBits = routeFlags[abs],
          clipBits = clipFlags[abs],
          targetRoute, clipRoute;

      if (fw) {
        targetRoute = targetBits;
        clipRoute = clipBits;
      } else {
        targetRoute = targetBits >> 4;
        clipRoute = clipBits >> 4;
      }
      targetRoute &= 3;
      clipRoute &= 3;

      var usable = false;
      // var usable = targetRoute === 3 || targetRoute === 0 && clipRoute == 3;
      if (targetRoute == 3) {
        // special cases where clip route and target route both follow this arc
        if (clipRoute == 1) {
          // 1. clip/erase polygon blocks this route, not usable
        } else if (clipRoute == 2 && type == 'erase') {
          // 2. route is on the boundary between two erase polygons, not usable
        } else {
          usable = true;
        }

      } else if (targetRoute === 0 && clipRoute == 3) {
        usedClipArcs.push(id);
        usable = true;
      }

      if (usable) {
        if (clipRoute == 3) {
          clipArcUses++;
        }
        // Need to close all arcs after visiting them -- or could cause a cycle
        //   on layers with strange topology
        if (fw) {
          targetBits = setBits(targetBits, 1, 3);
        } else {
          targetBits = setBits(targetBits, 0x10, 0x30);
        }
      }

      targetBits |= fw ? 4 : 0x40; // record as visited
      routeFlags[abs] = targetBits;
      return usable;
    }

    // Filter a collection of shapes to exclude paths that contain clip/erase arcs
    // and paths that are hidden (e.g. internal boundaries)
    function findUndividedClipShapes(clipShapes) {
      return clipShapes.map(function(shape) {
        var usableParts = [];
        forEachShapePart(shape, function(ids) {
          var pathIsClean = true,
              pathIsVisible = false;
          for (var i=0; i<ids.length; i++) {
            // check if arc was used in fw or rev direction
            if (!arcIsUnused(ids[i], routeFlags)) {
              pathIsClean = false;
              break;
            }
            // check if clip arc is visible
            if (!pathIsVisible && arcIsVisible(ids[i], clipFlags)) {
              pathIsVisible = true;
            }
          }
          if (pathIsClean && pathIsVisible) usableParts.push(ids);
        });
        return usableParts.length > 0 ? usableParts : null;
      });
    }

    // Test if arc is unused in both directions
    // (not testing open/closed or visible/hidden)
    function arcIsUnused(id, flags) {
      var abs = absArcId(id),
          flag = flags[abs];
          return (flag & 0x44) === 0;
    }

    function arcIsVisible(id, flags) {
      var flag = flags[absArcId(id)];
      return (flag & 0x11) > 0;
    }

    // search for indexed clipping paths contained in a shape
    // dissolve them if needed
    function findInteriorPaths(shape, type, index) {
      var enclosedPaths = index.findPathsInsideShape(shape),
          dissolvedPaths = [];
      if (!enclosedPaths) return null;
      // ...
      if (type == 'erase') enclosedPaths.forEach(reversePath);
      if (enclosedPaths.length <= 1) {
        dissolvedPaths = enclosedPaths; // no need to dissolve single-part paths
      } else {
        openArcRoutes(enclosedPaths, arcs, routeFlags, true, false, true);
        enclosedPaths.forEach(function(ids) {
          var path;
          for (var j=0; j<ids.length; j++) {
            path = dividePath(ids[j]);
            if (path) {
              dissolvedPaths.push(path);
            }
          }
        });
      }

      return dissolvedPaths.length > 0 ? dissolvedPaths : null;
    }
  } // end clipPolygons()

  //
  function clipPoints(points, clipShapes, arcs, type) {
    var index = new PathIndex(clipShapes, arcs);

    var points2 = points.reduce(function(memo, feat) {
      var n = feat ? feat.length : 0,
          feat2 = [],
          enclosed;

      for (var i=0; i<n; i++) {
        enclosed = index.findEnclosingShape(feat[i]) > -1;
        if (type == 'clip' && enclosed || type == 'erase' && !enclosed) {
          feat2.push(feat[i].concat());
        }
      }

      memo.push(feat2.length > 0 ? feat2 : null);
      return memo;
    }, []);

    return points2;
  }

  var ClipPoints = /*#__PURE__*/Object.freeze({
    __proto__: null,
    clipPoints: clipPoints
  });

  // Create a merged dataset by appending the overlay layer to the target dataset
  // so it is last in the layers array.
  // DOES NOT insert clipping points
  function mergeLayersForOverlay(targetLayers, targetDataset, clipSrc, opts) {
    var usingPathClip = utils.some(targetLayers, layerHasPaths);
    var bbox = opts.bbox || opts.bbox2;
    var mergedDataset, clipDataset, clipLyr;
    if (clipSrc && clipSrc.geometry_type) {
      // TODO: update tests to remove this case (clipSrc is a layer)
      clipSrc = {dataset: targetDataset, layer: clipSrc, disposable: true};
    }
    if (bbox) {
      clipDataset = convertClipBounds(bbox);
      clipLyr = clipDataset.layers[0];
    } else if (clipSrc) {
      clipLyr = clipSrc.layer;
      clipDataset = utils.defaults({layers: [clipLyr]}, clipSrc.dataset);
    } else {
      stop("Command requires a source file, layer id or bbox");
    }
    if (targetDataset.arcs != clipDataset.arcs) {
      // using external dataset -- need to merge arcs
      if (clipSrc && !clipSrc.disposable) {
        // copy overlay layer shapes because arc ids will be reindexed during merging
        clipDataset.layers[0] = copyLayerShapes(clipDataset.layers[0]);
      }
      // merge external dataset with target dataset,
      // so arcs are shared between target layers and clipping lyr
      // Assumes that layers in clipDataset can be modified (if necessary, a copy should be passed in)
      mergedDataset = mergeDatasets([targetDataset, clipDataset]);
      buildTopology(mergedDataset); // identify any shared arcs between clipping layer and target dataset
    } else {
      // overlay layer belongs to the same dataset as target layers... move it to the end
      mergedDataset = utils.extend({}, targetDataset);
      mergedDataset.layers = targetDataset.layers.filter(function(lyr) {return lyr != clipLyr;});
      mergedDataset.layers.push(clipLyr);
    }
    return mergedDataset;
  }

  function convertClipBounds(bb) {
    var x0 = bb[0], y0 = bb[1], x1 = bb[2], y1 = bb[3],
        arc = [[x0, y0], [x0, y1], [x1, y1], [x1, y0], [x0, y0]];

    if (!(y1 > y0 && x1 > x0)) {
      stop("Invalid bbox (should be [xmin, ymin, xmax, ymax]):", bb);
    }
    return {
      arcs: new ArcCollection([arc]),
      layers: [{
        shapes: [[[0]]],
        geometry_type: 'polygon'
      }]
    };
  }

  var OverlayUtils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    mergeLayersForOverlay: mergeLayersForOverlay
  });

  // Insert cutting points in arcs, where bbox intersects other shapes
  // Return a polygon layer containing the bounding box vectors, divided at cutting points.
  function divideDatasetByBBox(dataset, bbox) {
    var arcs = dataset.arcs;
    var data = findBBoxCutPoints(arcs, bbox);
    var map = insertCutPoints(data.cutPoints, arcs);
    arcs.dedupCoords();
    remapDividedArcs(dataset, map);
    // merge bbox dataset with target dataset,
    // so arcs are shared between target layers and bbox layer
    var clipDataset = bboxPointsToClipDataset(data.bboxPoints);
    var mergedDataset = mergeDatasets([dataset, clipDataset]);
    // TODO: detect if we need to rebuild topology (unlikely), like with the full clip command
    // buildTopology(mergedDataset);
    var clipLyr = mergedDataset.layers.pop();
    dataset.arcs = mergedDataset.arcs;
    dataset.layers = mergedDataset.layers;
    return clipLyr;
  }

  function bboxPointsToClipDataset(arr) {
    var arcs = [];
    var shape = [];
    var layer = {geometry_type: 'polygon', shapes: [[shape]]};
    var p1, p2;
    for (var i=0, n=arr.length - 1; i<n; i++) {
      p1 = arr[i];
      p2 = arr[i+1];
      arcs.push([[p1.x, p1.y], [p2.x, p2.y]]);
      shape.push(i);
    }
    return {
      arcs: new ArcCollection(arcs),
      layers: [layer]
    };
  }

  function findBBoxCutPoints(arcs, bbox) {
    var left = bbox[0],
        bottom = bbox[1],
        right = bbox[2],
        top = bbox[3];

    // arrays of intersection points along each bbox edge
    var tt = [],
        rr = [],
        bb = [],
        ll = [];

    arcs.forEachSegment(function(i, j, xx, yy) {
      var ax = xx[i],
          ay = yy[i],
          bx = xx[j],
          by = yy[j];
      var hit;
      if (segmentOutsideBBox(ax, ay, bx, by, left, bottom, right, top)) return;
      if (segmentInsideBBox(ax, ay, bx, by, left, bottom, right, top)) return;

      hit = geom.segmentIntersection(left, top, right, top, ax, ay, bx, by);
      if (hit) addHit(tt, hit, i, j, xx, yy);

      hit = geom.segmentIntersection(left, bottom, right, bottom, ax, ay, bx, by);
      if (hit) addHit(bb, hit, i, j, xx, yy);

      hit = geom.segmentIntersection(left, bottom, left, top, ax, ay, bx, by);
      if (hit) addHit(ll, hit, i, j, xx, yy);

      hit = geom.segmentIntersection(right, bottom, right, top, ax, ay, bx, by);
      if (hit) addHit(rr, hit, i, j, xx, yy);
    });

    return {
      cutPoints: ll.concat(bb, rr, tt),
      bboxPoints: getDividedBBoxPoints(bbox, ll, tt, rr, bb)
    };

    function addHit(arr, hit, i, j, xx, yy) {
      if (!hit) return;
      arr.push(formatHit(hit[0], hit[1], i, j, xx, yy));
      if (hit.length == 4) {
        arr.push(formatHit(hit[2], hit[3], i, j, xx, yy));
      }
    }

    function formatHit(x, y, i, j, xx, yy) {
      var ids = formatIntersectingSegment(x, y, i, j, xx, yy);
      return getCutPoint(x, y, ids[0], ids[1], xx, yy);
    }
  }

  function segmentOutsideBBox(ax, ay, bx, by, xmin, ymin, xmax, ymax) {
    return ax < xmin && bx < xmin || ax > xmax && bx > xmax ||
        ay < ymin && by < ymin || ay > ymax && by > ymax;
  }

  function segmentInsideBBox(ax, ay, bx, by, xmin, ymin, xmax, ymax) {
    return ax > xmin && bx > xmin && ax < xmax && bx < xmax &&
        ay > ymin && by > ymin && ay < ymax && by < ymax;
  }

  // Returns an array of points representing the vertices in
  // the bbox with cutting points inserted.
  function getDividedBBoxPoints(bbox, ll, tt, rr, bb) {
    var bl = {x: bbox[0], y: bbox[1]},
        tl = {x: bbox[0], y: bbox[3]},
        tr = {x: bbox[2], y: bbox[3]},
        br = {x: bbox[2], y: bbox[1]};
    ll = utils.sortOn(ll.concat([bl, tl]), 'y', true);
    tt = utils.sortOn(tt.concat([tl, tr]), 'x', true);
    rr = utils.sortOn(rr.concat([tr, br]), 'y', false);
    bb = utils.sortOn(bb.concat([br, bl]), 'x', false);
    return ll.concat(tt, rr, bb).reduce(function(memo, p2) {
      var p1 = memo.length > 0 ? memo[memo.length-1] : null;
      if (p1 === null || p1.x != p2.x || p1.y != p2.y) memo.push(p2);
      return memo;
    }, []);
  }

  var Bbox2Clipping = /*#__PURE__*/Object.freeze({
    __proto__: null,
    divideDatasetByBBox: divideDatasetByBBox,
    segmentOutsideBBox: segmentOutsideBBox,
    segmentInsideBBox: segmentInsideBBox
  });

  cmd.clipLayers = function(target, src, dataset, opts) {
    return clipLayers(target, src, dataset, "clip", opts);
  };

  cmd.eraseLayers = function(target, src, dataset, opts) {
    return clipLayers(target, src, dataset, "erase", opts);
  };

  cmd.clipLayer = function(targetLyr, src, dataset, opts) {
    return cmd.clipLayers([targetLyr], src, dataset, opts)[0];
  };

  cmd.eraseLayer = function(targetLyr, src, dataset, opts) {
    return cmd.eraseLayers([targetLyr], src, dataset, opts)[0];
  };

  cmd.sliceLayers = function(target, src, dataset, opts) {
    return clipLayers(target, src, dataset, "slice", opts);
  };

  cmd.sliceLayer = function(targetLyr, src, dataset, opts) {
    return cmd.sliceLayers([targetLyr], src, dataset, opts);
  };

  // @clipSrc: layer in @dataset or filename
  // @type: 'clip' or 'erase'
  function clipLayers(targetLayers, clipSrc, targetDataset, type, opts) {
    var usingPathClip = utils.some(targetLayers, layerHasPaths);
    var mergedDataset, clipLyr, nodes;
    opts = opts || {no_cleanup: true}; // TODO: update testing functions
    if (opts.bbox2 && usingPathClip) { // assumes target dataset has arcs
      return clipLayersByBBox(targetLayers, targetDataset, opts);
    }
    mergedDataset = mergeLayersForOverlay(targetLayers, targetDataset, clipSrc, opts);
    if (usingPathClip) {
      // add vertices at all line intersections
      // (generally slower than actual clipping)
      nodes = addIntersectionCuts(mergedDataset, opts);
      targetDataset.arcs = mergedDataset.arcs;
    } else {
      nodes = new NodeCollection(mergedDataset.arcs);
    }
    clipLyr = mergedDataset.layers.pop();
    return clipLayersByLayer(targetLayers, clipLyr, nodes, type, opts);
  }

  function clipLayersByBBox(layers, dataset, opts) {
    var bbox = opts.bbox2;
    var clipLyr = divideDatasetByBBox(dataset, bbox);
    var nodes = new NodeCollection(dataset.arcs);
    var retn = clipLayersByLayer(layers, clipLyr, nodes, 'clip', opts);
    return retn;
  }

  function clipLayersByLayer(targetLayers, clipLyr, nodes, type, opts) {
    requirePolygonLayer(clipLyr, "Requires a polygon clipping layer");
    return targetLayers.reduce(function(memo, targetLyr) {
      if (type == 'slice') {
        memo = memo.concat(sliceLayerByLayer(targetLyr, clipLyr, nodes, opts));
      } else {
        memo.push(clipLayerByLayer(targetLyr, clipLyr, nodes, type, opts));
      }
      return memo;
    }, []);
  }

  function getSliceLayerName(clipLyr, field, i) {
    var id = field ? clipLyr.data.getRecords()[0][field] : i + 1;
    return 'slice-' + id;
  }

  function sliceLayerByLayer(targetLyr, clipLyr, nodes, opts) {
    // may not need no_replace
    var clipLayers = cmd.splitLayer(clipLyr, opts.id_field, {no_replace: true});
    return clipLayers.map(function(clipLyr, i) {
      var outputLyr = clipLayerByLayer(targetLyr, clipLyr, nodes, 'clip', opts);
      outputLyr.name = getSliceLayerName(clipLyr, opts.id_field, i);
      return outputLyr;
    });
  }

  function clipLayerByLayer(targetLyr, clipLyr, nodes, type, opts) {
    var arcs = nodes.arcs;
    var shapeCount = targetLyr.shapes ? targetLyr.shapes.length : 0;
    var nullCount = 0, sliverCount = 0;
    var clippedShapes, outputLyr;
    if (shapeCount === 0) {
      return targetLyr; // ignore empty layer
    }
    if (targetLyr === clipLyr) {
      stop('Can\'t clip a layer with itself');
    }

    // TODO: optimize some of these functions for bbox clipping
    if (targetLyr.geometry_type == 'point') {
      clippedShapes = clipPoints(targetLyr.shapes, clipLyr.shapes, arcs, type);
    } else if (targetLyr.geometry_type == 'polygon') {
      clippedShapes = clipPolygons(targetLyr.shapes, clipLyr.shapes, nodes, type, opts);
    } else if (targetLyr.geometry_type == 'polyline') {
      clippedShapes = clipPolylines(targetLyr.shapes, clipLyr.shapes, nodes, type);
    } else {
      stop('Invalid target layer:', targetLyr.name);
    }

    outputLyr = {
      name: targetLyr.name,
      geometry_type: targetLyr.geometry_type,
      shapes: clippedShapes,
      data: targetLyr.data // replaced post-filter
    };

    // Remove sliver polygons
    if (opts.remove_slivers && outputLyr.geometry_type == 'polygon') {
      sliverCount = filterClipSlivers(outputLyr, clipLyr, arcs);
    }

    // Remove null shapes (likely removed by clipping/erasing, although possibly already present)
    cmd.filterFeatures(outputLyr, arcs, {remove_empty: true, verbose: false});

    // clone data records (to avoid sharing records between layers)
    // TODO: this is not needed when replacing target with a single layer
    if (outputLyr.data) {
      outputLyr.data = outputLyr.data.clone();
    }

    // TODO: redo messages, now that many layers may be clipped
    nullCount = shapeCount - outputLyr.shapes.length;
    if (nullCount && sliverCount) {
      message(getClipMessage(nullCount, sliverCount));
    }
    return outputLyr;
  }

  function getClipMessage(nullCount, sliverCount) {
    var nullMsg = nullCount ? utils.format('%,d null feature%s', nullCount, utils.pluralSuffix(nullCount)) : '';
    var sliverMsg = sliverCount ? utils.format('%,d sliver%s', sliverCount, utils.pluralSuffix(sliverCount)) : '';
    if (nullMsg || sliverMsg) {
      return utils.format('Removed %s%s%s', nullMsg, (nullMsg && sliverMsg ? ' and ' : ''), sliverMsg);
    }
    return '';
  }

  var ClipErase = /*#__PURE__*/Object.freeze({
    __proto__: null,
    clipLayersByBBox: clipLayersByBBox,
    clipLayersByLayer: clipLayersByLayer,
    getClipMessage: getClipMessage
  });

  // Returns a function for constructing a query function that accepts an arc id and
  // returns information about the polygon or polygons that use the given arc.
  // TODO: explain this better.
  //
  // options:
  //   filter: optional filter function; signature: function(idA, idB or -1) : boolean
  //   reusable: flag that lets an arc be queried multiple times.
  function getArcClassifier(shapes, arcs) {
    var opts = arguments[2] || {},
        useOnce = !opts.reusable,
        n = arcs.size(),
        a = new Int32Array(n),
        b = new Int32Array(n);

    utils.initializeArray(a, -1);
    utils.initializeArray(b, -1);

    traversePaths(shapes, function(o) {
      var i = absArcId(o.arcId);
      var shpId = o.shapeId;
      var aval = a[i];
      if (aval == -1) {
        a[i] = shpId;
      } else if (shpId < aval) {
        b[i] = aval;
        a[i] = shpId;
      } else {
        b[i] = shpId;
      }
    });

    function classify(arcId, getKey) {
      var i = absArcId(arcId);
      var shpA = a[i];
      var shpB = b[i];
      var key;
      if (shpA == -1) return null;
      key = getKey(shpA, shpB);
      if (key === null || key === false) return null;
      if (useOnce) {
        // arc can only be queried once
        a[i] = -1;
        b[i] = -1;
      }
      // use optional filter to exclude some arcs
      if (opts.filter && !opts.filter(shpA, shpB)) return null;
      return key;
    }

    return function(getKey) {
      return function(arcId) {
        return classify(arcId, getKey);
      };
    };
  }

  var ArcClassifier = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getArcClassifier: getArcClassifier
  });

  // Returns a function for querying the neighbors of a given shape. The function
  // can be called in either of two ways:
  //
  // 1. function(shapeId, callback)
  //    Callback signature: function(adjacentShapeId, arcId)
  //    The callback function is called once for each arc that the given feature
  //    shares with another feature.
  //
  // 2. function(shapeId)
  //    The function returns an array of unique ids of neighboring shapes, or
  //    an empty array if a shape has no neighbors.
  //
  function getNeighborLookupFunction(lyr, arcs) {
    var classifier = getArcClassifier(lyr.shapes, arcs, {reusable: true});
    var classify = classifier(onShapes);
    var currShapeId;
    var neighbors;
    var callback;

    function onShapes(a, b) {
      if (b == -1) return -1; // outer edges are b == -1
      return a == currShapeId ? b : a;
    }

    function onArc(arcId) {
      var nabeId = classify(arcId);
      if (nabeId == -1) return;
      if (callback) {
        callback(nabeId, arcId);
      } else if (neighbors.indexOf(nabeId) == -1) {
        neighbors.push(nabeId);
      }
    }

    return function(shpId, cb) {
      currShapeId = shpId;
      if (cb) {
        callback = cb;
        forEachArcId(lyr.shapes[shpId], onArc);
        callback = null;
      } else {
        neighbors = [];
        forEachArcId(lyr.shapes[shpId], onArc);
        return neighbors;
      }
    };
  }


  // Returns an array containing all pairs of adjacent shapes
  // in a collection of polygon shapes. A pair of shapes is represented as
  // an array of two shape indexes [a, b].
  function findPairsOfNeighbors(shapes, arcs) {
    var getKey = function(a, b) {
      return b > -1 && a > -1 ? [a, b] : null;
    };
    var classify = getArcClassifier(shapes, arcs)(getKey);
    var arr = [];
    var index = {};
    var onArc = function(arcId) {
      var obj = classify(arcId);
      var key;
      if (obj) {
        key = obj.join('~');
        if (key in index === false) {
          arr.push(obj);
          index[key] = true;
        }
      }
    };
    forEachArcId(shapes, onArc);
    return arr;
  }

  var PolygonNeighbors = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getNeighborLookupFunction: getNeighborLookupFunction,
    findPairsOfNeighbors: findPairsOfNeighbors
  });

  // Assign a cluster id to each polygon in a dataset, which can be used with
  //   one of the dissolve commands to dissolve the clusters
  // Works by iteratively grouping pairs of polygons with the smallest distance
  //   between centroids.
  // Results are not optimal -- may be useful for creating levels of detail on
  //   interactive maps, not useful for analysis.
  //
  cmd.cluster = function(lyr, arcs, opts) {
    requirePolygonLayer(lyr);
    var groups = calcPolygonClusters(lyr, arcs, opts);
    var idField = opts.id_field || "cluster";
    insertFieldValues(lyr, idField, groups);
    return lyr;
  };

  function calcPolygonClusters(lyr, arcs, opts) {
    var calcScore = getPolygonClusterCalculator(opts);
    var size = lyr.shapes.length;
    var pct = opts.pct ? utils.parsePercent(opts.pct) : 1;
    var count = Math.round(size * pct);
    var groupField = opts.group_by || null;

    // working set of polygon records
    var shapeItems = lyr.shapes.map(function(shp, i) {
      var groupId = groupField && lyr.data.getRecordAt(i)[groupField] || null;
      return {
        ids: [i],
        area: geom.getShapeArea(shp, arcs),
        bounds: arcs.getMultiShapeBounds(shp),
        centroid: geom.getShapeCentroid(shp, arcs), // centroid of largest ring
        group: groupId,
        friends: []
      };
    });

    var mergeItems = []; // list of pairs of shapes that can be merged
    var mergeIndex = {}; // keep track of merges, to prevent duplicates
    var next;

    if (groupField && !lyr.data) stop("Missing attribute data table");

    // Populate mergeItems array
    findPairsOfNeighbors(lyr.shapes, arcs).forEach(function(ab, i) {
      // ab: [a, b] indexes of two polygons
      var a = shapeItems[ab[0]],
          b = shapeItems[ab[1]],
          item, id;
      if (a.group !== b.group) return;
      item = {ids: ab};
      item.score = getScore(item);
      if (item.score < 0) return;
      id = mergeItems.length;
      a.friends.push(id);
      b.friends.push(id);
      mergeItems.push(item);
    });

    // main loop
    while (count-- > 0 && (next = nextItem())) {
      merge(next);
    }

    // Assign a sequential id to each of the remaining original shapes and the
    // new aggregated shapes
    return shapeItems.filter(Boolean).reduce(function(memo, shape, clusterId) {
      var ids = shape.ids;
      for (var i=0; i<ids.length; i++) {
        memo[ids[i]] = clusterId;
      }
      return memo;
    }, []);

    function merge(item) {
      var merged = mergeShapes(item.ids);
      var mergedId = shapeItems.length;
      shapeItems[mergedId] = merged;
      updateList(merged.friends, item.ids, mergedId);
    }

    // Find lowest-ranked merge candidate and remove it from the list
    // Scans entire list - n^2 performance - tested ~20sec for 50,000 polygons
    function nextItem() {
      var minId = -1,
          min = Infinity,
          item, i, n;
      for (i=0, n=mergeItems.length; i<n; i++) {
        item = mergeItems[i];
        if (item !== null && item.score < min) {
          min = item.score;
          minId = i;
        }
      }
      if (minId == -1) return null;
      item = mergeItems[minId];
      mergeItems[minId] = null;
      return item;
    }

    function getScore(item) {
      return calcScore(shapeItems[item.ids[0]], shapeItems[item.ids[1]]);
    }

    function mergeCentroids(dest, src) {
      var k = dest.area / (dest.area + src.area),
          a = dest.centroid,
          b = src.centroid;
      // TODO: consider using geodetic distance when appropriate
      a.x = a.x * k + b.x * (1 - k);
      a.y = a.y * k + b.y * (1 - k);
    }

    function mergeShapes(ids) {
      var dest = shapeItems[ids[0]];
      var src = shapeItems[ids[1]];
      dest.bounds.mergeBounds(src.bounds);
      dest.area += src.area;
      dest.ids = dest.ids.concat(src.ids);
      mergeCentroids(dest, src);
      shapeItems[ids[0]] = null;
      shapeItems[ids[1]] = null;
      dest.friends = filterFriends(dest.friends.concat(src.friends));
      return dest;
    }

    // remove ids of duplicate and invalid merge candidates
    function filterFriends(friends) {
      var index = {};
      var merged = [];
      var id;
      for (var i=0; i<friends.length; i++) {
        id = friends[i];
        if ((id in index === false) && mergeItems[id] !== null) {
          merged.push(id);
          index[id] = true;
        }
      }
      return merged;
    }

    // re-index merge candidates after merging two shapes into a new shape
    function updateList(friends, oldIds, newId) {
      var item, id;
      for (var i=0, n=friends.length; i<n; i++) {
        id = friends[i];
        item = mergeItems[id];
        if (contains(item.ids, oldIds)) {
          mergeItems[id] = updateItem(item, oldIds, newId);
        }
      }
    }

    // re-index a merge candidate; return null if it duplicates a previously merged
    //   pair of shapes
    function updateItem(item, oldIds, newId) {
      var a = item.ids[0];
      var b = item.ids[1];
      var key;
      if (oldIds[0] == a || oldIds[1] == a) a = newId;
      if (oldIds[0] == b || oldIds[1] == b) b = newId;
      if (a == b) return null;
      item.ids = [a, b];
      key = clusterKey(item);
      if (key in mergeIndex) return null;
      mergeIndex[key] = true;
      item.score = getScore(item);
      if (item.score < 0) return null;
      return item;
    }

    function contains(a, b) {
      return a[0] === b[0] || a[0] === b[1] || a[1] === b[0] || a[1] === b[1];
    }

    function clusterKey(friend) {
      var a = friend.ids[0],
          b = friend.ids[1];
      if (b < a) {
        a = b;
        b = friend.ids[0];
      }
      return a + ',' + b;
    }
  }

  function getPolygonClusterCalculator(opts) {
    var maxWidth = opts.max_width || Infinity;
    var maxHeight = opts.max_height || Infinity;
    var maxArea = opts.max_area || Infinity;
    return function(a, b) {
      var area = a.area + b.area,
          // TODO: use geodetic distance when appropriate
          score = geom.distance2D(a.centroid.x, a.centroid.y, b.centroid.x, b.centroid.y),
          bounds = a.bounds.clone().mergeBounds(b.bounds);
      if (area > maxArea || bounds.width() > maxWidth ||
          bounds.height() > maxHeight) {
        score = -1;
      }
      return score;
    };
  }

  cmd.colorizer = function(opts) {
    if (!opts.name) {
      stop("Missing required name= parameter");
    }
    if (isReservedName(opts.name)) {
      stop('"' + opts.name + '" is a reserved name');
    }
    getStateVar('defs')[opts.name] = getColorizerFunction(opts);
  };

  function isReservedName(name) {
    return /^(stroke|stroke-width|stroke-dasharray|stroke-opacity|fill|fill-opacity|opacity|r|class)$/.test(name);
  }

  function getColorizerFunction(opts) {
    var nodataColor = opts.nodata || 'white';
    var round = opts.precision ? getRoundingFunction(opts.precision) : null;
    var colorFunction;

    if (!opts.random && (!opts.colors || !opts.colors.length)) {
      stop("Missing colors= parameter");
    }

    if (opts.random) {
      colorFunction = getRandomColorFunction(opts.colors);
    } else if (opts.breaks) {
      colorFunction = getSequentialColorFunction(opts.colors, opts.breaks, round);
    } else if (opts.categories) {
      colorFunction = getCategoricalColorFunction(opts.colors, opts.other, opts.categories);
    } else {
      stop("Missing categories= or breaks= parameter");
    }

    return function(val) {
      var col = colorFunction(val);
      return col || nodataColor;
    };
  }

  function fastStringHash(val) {
    // based on https://github.com/darkskyapp/string-hash (public domain)
    var str = String(val),
        hash = 5381,
        i = str.length;
    while (i > 0) {
      hash = (hash * 33) ^ str.charCodeAt(--i);
    }
    return Math.abs(hash);
  }

  function getRandomColorFunction(colors) {
    if (!colors || !colors.length) {
      colors = '#ccc,#888,#444'.split(',');
    }
    return function(val) {
      var n = colors.length;
      var i = val === undefined ?
          Math.floor(Math.random() * n) : fastStringHash(val) % n;
      return colors[i];
    };
  }


  function getCategoricalColorFunction(colors, otherColor, keys) {
    if (colors.length != keys.length) {
      stop("Number of colors should be equal to the number of categories");
    }

    return function(val) {
      var i = keys.indexOf(val);
      if (i >= 0) return colors[i];
      return val && otherColor ? otherColor : null;
    };
  }

  function validateSequentialBreaks(breaks) {
    // Accepts repeated values -- should this be allowed?
    var arr2 = breaks.map(parseFloat);
    utils.genericSort(arr2);
    for (var i=0; i<breaks.length; i++) {
      if (breaks[i] !== arr2[i]) stop('Invalid class breaks:', breaks.join(','));
    }
  }

  function getSequentialColorFunction(colors, breaks, round) {
    if (colors.length != breaks.length + 1) {
      stop("Number of colors should be one more than number of class breaks");
    }
    validateSequentialBreaks(breaks);
    return function(val) {
      var i = -1;
      if (Number(val) === val) { // exclude null, NaN, strings, etc.
        if (round) val = val(round);
        i = getClassId(val, breaks);
      }
      return i > -1 && i < colors.length ? colors[i] : null;
    };
  }

  // breaks: threshold values between ranges (ascending order)
  // Returns array index of a sequential range, or -1 if @val not numeric
  function getClassId(val, breaks) {
    var minVal = -Infinity,
        maxVal = Infinity,
        i = 0;
    if (!(val >= minVal && val <= maxVal)) {
      return -1;
    }
    while (i < breaks.length && val >= breaks[i]) i++;
    return i;
  }

  var Colorizer = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getColorizerFunction: getColorizerFunction,
    getSequentialColorFunction: getSequentialColorFunction
  });

  // This function creates a continuous mosaic of data values in a
  // given field by assigning data from adjacent polygon features to polygons
  // that contain null values.
  // The 'contiguous' option removes data islands to create contiguous groups
  // that are likely to be the result of unreliable data (e.g. faulty geocodes).

  cmd.dataFill = function(lyr, arcs, opts) {
    var field = opts.field;
    if (!field) stop("Missing required field= parameter");
    requireDataField(lyr, field);
    if (lyr.geometry_type != 'polygon') stop("Target layer must be polygon type");
    var getNeighbors = getNeighborLookupFunction(lyr, arcs);
    var fillCount, islandCount;

    // get function to check if a shape was empty before data-fill
    var initiallyEmpty = (function() {
      var flags = lyr.data.getRecords().map(function(rec) {
        return isEmptyValue(rec[field]);
      });
      return function(i) {return flags[i];};
    }());

    // step one: fill empty units
    fillCount = dataFillEmpty(field, lyr, arcs, getNeighbors);

    // step two: smooth perimeters
    dataFillSmooth(field, lyr, arcs, getNeighbors, initiallyEmpty);

    // step three: remove non-contiguous data islands
    if (opts.contiguous) {
      islandCount = dataFillIslandGroups(field, lyr, arcs, getNeighbors, opts);
    }

    message('Filled', fillCount, 'empty polygons' + utils.pluralSuffix(fillCount));
    if (islandCount > 0) {
      message('Removed', islandCount, 'non-contiguous polygon group' + utils.pluralSuffix(islandCount));
    }
  };

  // Assign values to units without data, using the values of neighboring units.
  function dataFillEmpty(field, lyr, arcs, getNeighbors) {
    var records = lyr.data.getRecords();
    var onShape = getDataFillCalculator(field, lyr, arcs, getNeighbors);
    var isEmpty = getEmptyValueFilter(field, lyr);
    var groups = {}; // groups, indexed by key
    var assignCount = 0;

    // step one: place features in groups based on data values of non-empty neighbors.
    // (grouping is an attempt to avoid ragged edges between groups of same-value units,
    // which occured when data was assigned to units independently of adjacent units).
    lyr.shapes.forEach(function(shp, i) {
      if (!isEmpty(i)) return; // only assign shapes with missing values
      var data = onShape(i);
      if (!data.group) return; // e.g. if no neighbors have data
      addDataToGroup(data, groups);
    });

    // step two: assign the same value to all members of a group
    Object.keys(groups).forEach(function(groupId) {
      var group = groups[groupId];
      var value = getMaxWeightValue(group);
      assignValueToShapes(group.shapes, value);
    });

    function assignValueToShapes(ids, val) {
      ids.forEach(function(id) {
        assignCount++;
        records[id][field] = val;
      });
    }

    function addDataToGroup(d, groups) {
      var group = groups[d.group];
      var j;
      if (!group) {
        groups[d.group] = {
          shapes: [d.shape],
          weights: d.weights,
          values: d.values
        };
        return;
      }
      group.shapes.push(d.shape);
      for (var i=0, n=d.values.length; i<n; i++) {
        // add new weights to the group's total weights
        j = group.values.indexOf(d.values[i]);
        group.weights[j] += d.weights[i];
      }
    }

    if (assignCount > 0) {
      // recursively fill empty neighbors of the newly filled shapes
      assignCount += dataFillEmpty(field, lyr, arcs, getNeighbors);
    }
    return assignCount;
  }


  // Try to smooth out jaggedness resulting from filling empty units
  // This function assigns a different adjacent data value to formerly empty units,
  // if this would produce a shorter boundary.
  function dataFillSmooth(field, lyr, arcs, getNeighbors, wasEmpty) {
    var onShape = getDataFillCalculator(field, lyr, arcs, getNeighbors);
    var records = lyr.data.getRecords();
    var updates = 0;
    lyr.shapes.forEach(function(shp, i) {
      if (!wasEmpty(i)) return; // only edit shapes that were originally empty
      var data = onShape(i);
      if (data.values.length < 2) return; // no other values are available
      var currVal = records[i][field];
      var topVal = getMaxWeightValue(data);
      if (currVal != topVal) {
        records[i][field] = topVal;
        updates++;
      }
    });
    return updates;
  }

  // Remove less-important data islands to ensure that data groups are contiguous
  //
  function dataFillIslandGroups(field, lyr, arcs, getNeighbors, opts) {
    var records = lyr.data.getRecords();
    var groupsByValue = {}; // array of group objects, indexed by data values
    var unitIndex = new Uint8Array(lyr.shapes.length);
    var currGroup = null;
    var islandCount = 0;
    var weightField = opts.weight_field || null;

    if (weightField) {
      requireDataField(lyr, weightField);
    }

    // 1. form groups of contiguous units with the same attribute value
    lyr.shapes.forEach(function(shp, shpId) {
      onShape(shpId);
    });

    // 2. retain the most important group for each value; discard satellite groups
    Object.keys(groupsByValue).forEach(function(val) {
      var groups = groupsByValue[val];
      var maxIdx;
      if (groups.length < 2) return;
      maxIdx = indexOfMaxValue(groups, 'weight');
      if (maxIdx == -1) return; // error condition...
      groups
        .filter(function(group, i) {return i != maxIdx;})
        .forEach(clearIslandGroup);
    });

    // 3. fill gaps left by removing groups
    if (islandCount > 0) {
      dataFillEmpty(field, lyr, arcs, getNeighbors);
    }
    return islandCount;

    function clearIslandGroup(group) {
      islandCount++;
      group.shapes.forEach(function(shpId) {
        records[shpId][field] = null;
      });
    }

    function onShape(shpId) {
      if (unitIndex[shpId] == 1) return; // already added to a group
      var val = records[shpId][field];
      var firstShape = false;
      if (isEmptyValue(val)) return;
      if (!currGroup) {
        // start a new group
        firstShape = true;
        currGroup = {
          value: val,
          shapes: [],
          weight: 0
        };
        if (val in groupsByValue === false) {
          groupsByValue[val] = [];
        }
        groupsByValue[val].push(currGroup);
      } else if (val != currGroup.value) {
        return;
      }
      if (weightField) {
        currGroup.weight += records[shpId][weightField];
      } else {
        currGroup.weight += geom.getShapeArea(lyr.shapes[shpId], arcs);
      }
      currGroup.shapes.push(shpId);
      unitIndex[shpId] = 1;
      // TODO: consider switching from depth-first traversal to breadth-first
      getNeighbors(shpId).forEach(onShape);
      if (firstShape) {
        currGroup = null;
      }
    }
  }


  // Return value with the greatest weight from a datafill object
  function getMaxWeightValue(d) {
    var maxWeight = Math.max.apply(null, d.weights);
    var i = d.weights.indexOf(maxWeight);
    return d.values[i]; // return highest weighted value
  }

  // TODO: move to a more sensible file... mapshaper-calc-utils?
  function indexOfMaxValue(arr, key) {
    var maxWeight = -Infinity;
    var idx = -1;
    arr.forEach(function(o, i) {
      if (o.weight > maxWeight) {
        idx = i;
        maxWeight = o.weight;
      }
    });
    return idx;
  }

  function isEmptyValue(val) {
     return !val && val !== 0;
  }

  function getEmptyValueFilter(field, lyr) {
    var records = lyr.data.getRecords();
    return function(i) {
      var rec = records[i];
      return rec ? isEmptyValue(rec[field]) : false;
    };
  }

  // Returns a function to fetch the values of a data field from the neighbors of
  // a polygon feature. Each value is assigned a weight in proportion to the
  // length of the borders between the polygon and its neighbors.
  function getDataFillCalculator(field, lyr, arcs, getNeighbors) {
    var isPlanar = arcs.isPlanar();
    var records = lyr.data.getRecords();
    var tmp;

    function onSharedArc(nabeId, arcId) {
      var weight, i;
      var val = records[nabeId][field];
      if (isEmptyValue(val)) return;
      // weight is the length of the shared border
      // TODO: consider support for alternate weighting schemes
      weight = geom.calcPathLen([arcId], arcs, !isPlanar);
      i = tmp.values.indexOf(val);
      if (i == -1) {
        tmp.values.push(val);
        tmp.weights.push(weight);
      } else {
        tmp.weights[i] += weight;
      }
    }

    return function(shpId) {
      tmp = {
        shape: shpId,
        weights: [],
        values: [],
        group: ''
      };
      getNeighbors(shpId, onSharedArc);
      tmp.group = tmp.values.concat().sort().join('~');
      return tmp;
    };
  }

  // Removes small gaps and all overlaps
  cmd.dissolve2 = function(layers, dataset, opts) {
    layers.forEach(requirePolygonLayer);
    var nodes = addIntersectionCuts(dataset, opts);
    return layers.map(function(lyr) {
      return dissolvePolygonLayer2(lyr, dataset, opts);
    });
  };

  // Returns a function for filtering multiple source-table records
  // (used by -join command)
  function getJoinFilter(data, exp) {
    var test = getJoinFilterTestFunction(exp, data);
    var calc = null;
    if (expressionHasCalcFunction(exp)) {
      calc = getJoinFilterCalcFunction(exp, data);
    }

    return function(srcIds, destRec) {
      var d = calc ? calc(srcIds) : null;
      var filtered = [],
          retn, i;
      for (i=0; i<srcIds.length; i++) {
        retn = test(srcIds[i], destRec, d);
        if (retn === true) {
          filtered.push(srcIds[i]);
        } else if (retn !== false) {
          stop('"where" expression must return true or false');
        }
      }
      return filtered;
    };
  }

  function expressionHasCalcFunction(exp) {
    return utils.some(['isMax', 'isMin', 'isMode'], function(name) {
      return exp.indexOf(name) > -1;
    });
  }


  function getJoinFilterCalcFunction(exp, data) {
    var values, counts, max, min, context, calc, n;

    context = {
      isMax: function(val) {
        if (val > max) max = val;
      },
      isMin: function(val) {
        if (val < min) min = val;
      },
      isMode: function(val) {
        if (!values) {
          values = [];
        }
        values.push(val);
      }
    };

    calc = compileFeatureExpression(exp, {data: data}, null, {context: context});

    function reset() {
      max = -Infinity;
      min = Infinity;
      values = null;
    }

    return function(ids) {
      var mode;
      reset();
      for (var i=0; i<ids.length; i++) {
        calc(ids[i]);
      }
      mode = values ? getModeData(values) : null;
      return {
        max: max,
        min: min,
        modes: mode ? mode.modes : null,
        margin: mode ? mode.margin : null
      };
    };
  }


  function getJoinFilterTestFunction(exp, data) {
    var test, calcRec, destRec;
    var context = {
      isMax: function(val) {
        return val === calcRec.max;
      },
      isMin: function(val) {
        return val === calcRec.min;
      },
      isMode: function(val) {
        return calcRec.modes.indexOf(val) > -1;
      }
    };
    // 'target' property is an accessor function,
    // so the object it references can be updated.
    Object.defineProperty(context, 'target', {
      get: function() {
        return destRec;
      },
      enumerable: true // so it can be mixed-in to the actual expression context
    });

    test = compileFeatureExpression(exp, {data: data}, null, {context: context, returns: true});

    // calcR: results from calculation phase, or null
    return function(srcId, destR, calcR) {
      calcRec = calcR;
      destRec = destR;
      return test(srcId);
    };
  }

  var JoinFilter = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getJoinFilter: getJoinFilter
  });

  // Join data from @src table to records in @dest table
  // @join function
  //    Receives index of record in the dest table
  //    Returns array of matching records in src table, or null if no matches
  //
  function joinTables(dest, src, join, opts) {
    var srcRecords = src.getRecords(),
        destRecords = dest.getRecords(),
        prefix = opts.prefix || '',
        unmatchedRecords = [],
        joinFields = getFieldsToJoin(dest.getFields(), src.getFields(), opts),
        sumFields = opts.sum_fields || [],
        copyFields = utils.difference(joinFields, sumFields),
        joinCounts = new Uint32Array(srcRecords.length),
        matchCount = 0,
        collisionCount = 0,
        collisionFields = [],
        skipCount = 0,
        retn = {},
        srcRec, srcId, destRec, joins, count, filter, calc, i, j, n, m;

    if (opts.where) {
      filter = getJoinFilter(src, opts.where);
    }

    if (opts.calc) {
      calc = getJoinCalc(src, opts.calc);
    }

    // join source records to target records
    for (i=0, n=destRecords.length; i<n; i++) {
      destRec = destRecords[i];
      joins = join(i);
      if (joins && filter) {
        skipCount += joins.length;
        joins = filter(joins, destRec);
        skipCount -= joins.length;
      }
      for (j=0, count=0, m=joins ? joins.length : 0; j<m; j++) {
        srcId = joins[j];
        srcRec = srcRecords[srcId];
        if (count === 0) {
          if (copyFields.length > 0) {
            // only copying the first match
            joinByCopy(destRec, srcRec, copyFields, prefix);
          }
        } else if (count == 1) {
          if (copyFields.length > 0 && !prefix) {
            findCollisionFields(destRec, srcRec, copyFields, collisionFields);
          }
          collisionCount++; // count target records with multiple joins
        }
        if (sumFields.length > 0) {
          joinBySum(destRec, srcRec, sumFields, prefix);
        }
        joinCounts[srcId]++;
        count++;
      }
      if (calc) {
        calc(joins, destRec);
      }
      if (count > 0) {
        matchCount++;
      } else if (destRec) {
        if (opts.unmatched) {
          // Save a copy of unmatched record, before null values from join fields
          // are added.
          unmatchedRecords.push(utils.extend({}, destRec));
        }
        updateUnmatchedRecord(destRec, copyFields, sumFields, prefix);
      }
    }

    printJoinMessage(matchCount, destRecords.length,
        countJoins(joinCounts), srcRecords.length, skipCount, collisionCount, collisionFields);

    if (opts.unjoined) {
      retn.unjoined = {
        name: 'unjoined',
        data: new DataTable(srcRecords.filter(function(o, i) {
          return joinCounts[i] === 0;
        }))
      };
    }
    if (opts.unmatched) {
      retn.unmatched = {
        name: 'unmatched',
        data: new DataTable(unmatchedRecords)
      };
    }
    return retn;
  }

  function validateFieldNames(arr) {
    arr.forEach(function(name) {
      if (/:(str|num)/.test(name)) {
        stop("Unsupported use of type hints. Use string-fields= or field-types= options instead");
      }
    });
  }

  function countJoins(counts) {
    var joinCount = 0;
    for (var i=0, n=counts.length; i<n; i++) {
      if (counts[i] > 0) {
        joinCount++;
      }
    }
    return joinCount;
  }

  // Unset fields of unmatched records get null/empty values
  function updateUnmatchedRecord(rec, copyFields, sumFields, prefix) {
    joinByCopy(rec, {}, copyFields, prefix);
    joinBySum(rec, {}, sumFields, prefix);
  }

  /*
  internal.getCountFieldName = function(fields) {
    var uniq = internal.getUniqFieldNames(fields.concat("joins"));
    return uniq.pop();
  };
  */

  function joinByCopy(dest, src, fields, prefix) {
    var f, f2;
    prefix = prefix || '';
    for (var i=0, n=fields.length; i<n; i++) {
      // dest[fields[i]] = src[fields[i]];
      // Use null when the source record is missing an expected value
      // TODO: think some more about whether this is desirable
      f = fields[i];
      f2 = prefix + f;
      if (Object.prototype.hasOwnProperty.call(src, f)) {
        dest[f2] = src[f];
      } else if (!Object.prototype.hasOwnProperty.call(dest, f2)) {
        dest[f2] = null;
      }
    }
  }

  function joinBySum(dest, src, fields, prefix) {
    var f, f2;
    prefix = prefix || '';
    for (var j=0; j<fields.length; j++) {
      f = fields[j];
      f2 = prefix + f;
      dest[f2] = (dest[f2] || 0) + (src[f] || 0);
    }
  }

  function findCollisionFields(dest, src, fields, collisionFields) {
    var f;
    for (var i=0, n=fields.length; i<n; i++) {
      f = fields[i];
      if (dest[f] !== src[f] && collisionFields.indexOf(f) === -1) {
        collisionFields.push(f);
      }
    }
  }

  function printJoinMessage(matches, n, joins, m, skipped, collisions, collisionFields) {
    // TODO: add tip for troubleshooting join problems, if join is less than perfect.
    if (matches > 0 === false) {
      message("No records could be joined");
      return;
    }
    message(utils.format("Joined data from %'d source record%s to %'d target record%s",
        joins, utils.pluralSuffix(joins), matches, utils.pluralSuffix(matches)));
    if (matches < n) {
      message(utils.format('%d/%d target records received no data', n-matches, n));
    }
    if (joins < m) {
      message(utils.format("%d/%d source records could not be joined", m-joins, m));
    }
    if (skipped > 0) {
      message(utils.format("%d/%d source records were skipped", skipped, m));
    }
    if (collisions > 0) {
      message(utils.format('%d/%d target records were matched by multiple source records', collisions, n));
      if (collisionFields.length > 0) {
        message(utils.format('Found inconsistent values in field%s [%s] during many-to-one join', utils.pluralSuffix(collisionFields.length), collisionFields.join(', ')));
      }
    }
  }

  function getFieldsToJoin(destFields, srcFields, opts) {
    var joinFields;
    if (opts.fields) {
      if (opts.fields.indexOf('*') > -1) {
        joinFields = srcFields;
      } else {
        joinFields = opts.fields;
        validateFieldNames(joinFields);
      }
    } else {
      // If a list of fields to join is not given, try to join all of the
      // source fields
      joinFields = srcFields;
      // exclude source key field from key-based join (if fields are not given explicitly)
      if (opts.keys) {
        joinFields = utils.difference(joinFields, [opts.keys[1]]);
      }
    }
    if (!opts.force && !opts.prefix) {
      // overwrite existing fields if the "force" option is set.
      // prefix also overwrites... TODO: consider changing this
      joinFields = utils.difference(joinFields, destFields);
    }
    return joinFields;
  }

  var JoinTables = /*#__PURE__*/Object.freeze({
    __proto__: null,
    joinTables: joinTables,
    validateFieldNames: validateFieldNames,
    updateUnmatchedRecord: updateUnmatchedRecord,
    findCollisionFields: findCollisionFields,
    getFieldsToJoin: getFieldsToJoin
  });

  cmd.divide = function(targetLayers, targetDataset, source, opts) {
    targetLayers.forEach(requirePolylineLayer);
    var mergedDataset = mergeLayersForOverlay(targetLayers, targetDataset, source, opts);
    var nodes = addIntersectionCuts(mergedDataset, opts);
    var polygonLyr = mergedDataset.layers.pop();
    requirePolygonLayer(polygonLyr);
    // Assume that topology is now built
    targetDataset.arcs = mergedDataset.arcs;
    targetLayers.forEach(function(polylineLyr) {
      dividePolylineLayer(polylineLyr, polygonLyr, nodes, opts);
    });
  };

  function dividePolylineLayer(polylineLyr, polygonLyr, nodes, opts) {
    var index = new PathIndex(polygonLyr.shapes, nodes.arcs);
    var records = polylineLyr.data ? polylineLyr.data.getRecords() : [];
    var shapes2 = [];
    var records2 = [];
    var index2 = [];
    var outputLines;
    var outputKeys;
    var outputMatches;
    polylineLyr.shapes.forEach(function(shp, i) {
      var rec = records[i] || {};
      if (!shp) {
        // case: record with no geometry -- retain in the output layer
        shapes2.push(null);
        records2.push(rec);
        return;
      }
      outputLines = [];
      outputKeys = [];
      outputMatches = [];
      forEachShapePart(shp, onPart);
      outputLines.forEach(function(shape2, i) {
        shapes2.push(shape2);
        records2.push(i > 0 ? utils.extend({}, rec) : rec); // assume input data is being replaced
        index2.push(outputMatches[i]);
      });
    });
    polylineLyr.shapes = shapes2;
    polylineLyr.data = new DataTable(records2);
    joinTables(polylineLyr.data, polygonLyr.data, function(i) {
      return index2[i] || [];
    }, opts);

    function addDividedParts(parts, keys, matches) {
      var keyId, key;
      for (var i=0; i<parts.length; i++) {
        key = keys[i];
        keyId = outputKeys.indexOf(key);
        if (keyId == -1) {
          outputKeys.push(key);
          outputLines.push([parts[i]]);
          outputMatches.push(matches[i]);
        } else {
          outputLines[keyId].push(parts[i]);
        }
      }
    }

    function getKey(shapeIds) {
      return shapeIds.sort().join(',');
      // multiple matches: treat like no match
      // return shapeIds.length == 1 ? String(shapeIds[0]) : '-1';
    }

    // Partition each part
    function onPart(ids) {
      var parts2 = [];
      var keys2 = [];
      var matches2 = [];
      var prevKey = null;
      var containingIds, key, part2, arcId;
      // assign each arc to a divided shape
      for (var i=0, n=ids.length; i<n; i++) {
        arcId = ids[i];
        containingIds = index.findShapesEnclosingArc(absArcId(arcId));
        key = getKey(containingIds);
        if (key === prevKey) {
          // case: continuation of a part
          part2.push(arcId);
        } else {
          // case: start of a new part
          part2 = [arcId];
          parts2.push(part2);
          keys2.push(key);
          matches2.push(containingIds);
        }
        prevKey = key;
      }
      addDividedParts(parts2, keys2, matches2);
    }
  }

  cmd.dots = function(lyr, arcs, opts) {
    requirePolygonLayer(lyr);
    requireDataField(lyr, opts.field);
    var records = lyr.data ? lyr.data.getRecords() : [];
    var shapes = [];
    lyr.shapes.forEach(function(shp, i) {
      var d = records[i];
      var n = d ? +d[opts.field] : 0;
      var coords = null;
      if (n > 0) {
        coords = createInnerPoints(shp, arcs, n);
      }
      shapes.push(coords);
    });
    return {
      type: 'point',
      shapes: shapes
    };
  };

  function createInnerPoints(shp, arcs, n) {
    if (!shp || shp.length != 1) {
      return null; // TODO: support polygons with holes and multipart polygons
    }
    return fillPolygonWithDots(shp, arcs, n);
  }


  function fillPolygonWithDots(shp, arcs, n) {
    var area = geom.getPlanarShapeArea(shp, arcs);
    var bounds = arcs.getMultiShapeBounds(shp);
  }

  cmd.drop2 = function(catalog, targets, opts) {
    targets.forEach(function(target) {
      cmd.drop(catalog, target.layers, target.dataset, opts);
    });
  };

  cmd.drop = function(catalog, layers, dataset, opts) {
    var updateArcs = false;

    layers.forEach(function(lyr) {
      var fields = lyr.data && opts.fields;
      var allFields = fields && fieldListContainsAll(fields, lyr.data.getFields());
      var deletion = !fields && !opts.geometry && !opts.holes || allFields && opts.geometry;
      if (opts.geometry) {
        updateArcs |= layerHasPaths(lyr);
        delete lyr.shapes;
        delete lyr.geometry_type;
      }
      if (opts.holes && lyr.geometry_type == 'polygon') {
        deleteHoles(lyr, dataset.arcs);
      }
      if (deletion) {
        catalog.deleteLayer(lyr, dataset);
      } else if (allFields) {
        delete lyr.data;
      } else if (fields) {
        opts.fields.forEach(lyr.data.deleteField, lyr.data);
      }
    });

    if (updateArcs) {
      pruneArcs(dataset);
    }
  };

  cmd.evaluateEachFeature = function(lyr, arcs, exp, opts) {
    var n = getFeatureCount(lyr),
        compiled, filter;

    // TODO: consider not creating a data table -- not needed if expression only references geometry
    if (n > 0 && !lyr.data) {
      lyr.data = new DataTable(n);
    }
    if (opts && opts.where) {
      filter = compileValueExpression(opts.where, lyr, arcs);
    }
    compiled = compileFeatureExpression(exp, lyr, arcs, {context: getStateVar('defs')});
    // call compiled expression with id of each record
    for (var i=0; i<n; i++) {
      if (!filter || filter(i)) {
        compiled(i);
      }
    }
  };

  var externalCommands = {};

  cmd.external = function(opts) {
    // TODO: remove duplication with -require command
    var _module, moduleFile, moduleName;
    if (!opts.module) {
      stop('Missing required "module" parameter');
    }
    if (cli.isFile(opts.module)) {
      moduleFile = opts.module;
    } else if (cli.isFile(opts.module + '.js')) {
      moduleFile = opts.module + '.js';
    } else {
      moduleName = opts.module;
    }
    if (moduleFile) {
      moduleFile = require('path').join(process.cwd(), moduleFile);
    }
    try {
      _module = require(moduleFile || moduleName);
      _module(coreAPI);
    } catch(e) {
      // stop(e);
      stop('Unable to load external module:', e.message);
    }
  };

  cmd.registerCommand = function(name, params) {
    var defn = {name: name, options: params.options || []};
    // Add definitions of options common to all commands (TODO: remove duplication)
    defn.options.push({name: 'target'});
    utils.defaults(defn, params);
    validateExternalCommand(defn);
    externalCommands[name] = defn;
  };

  function validateExternalCommand(defn) {
    var targetTypes = ['layer', 'layers'];
    if (typeof defn.command != 'function') {
      stop('Expected "command" parameter function');
    }
    if (!defn.target) {
      stop('Missing required "target" parameter');
    }
  }

  cmd.runExternalCommand = function(cmdOpts, catalog) {
    var name = cmdOpts.name;
    var cmdDefn = externalCommands[name];
    if (!cmdDefn) {
      stop('Unsupported command');
    }
    var targetType = cmdDefn.target;
    var opts = parseExternalCommand(name, cmdDefn, cmdOpts._);
    var targets = catalog.findCommandTargets(opts.target || '*');
    var target = targets[0];
    if (!target) {
      stop('Missing a target');
    }
    if (targetType == 'layer' && (target.layers.length != 1 || targets.length > 1)) {
      stop('This command only supports targeting a single layer');
    }
    if (targets.length > 1) {
      stop("Targetting layers from multiple datasets is not supported");
    }
    if (targetType == 'layer') {
      cmdDefn.command(target.layers[0], target.dataset, opts.options);
    } else if (targetType == 'layers') {
      cmdDefn.command(target.layers, target.dataset, opts.options);
    }
  };

  function parseExternalCommand(name, cmdDefn, tokens) {
    var parser = new CommandParser();
    var cmd = parser.command(name);
    (cmdDefn.options || []).forEach(function(o) {
      cmd.option(o.name, o);
    });
    var parsed = parser.parseArgv(['-' + name].concat(tokens));
    return parsed[0];
  }

  cmd.filterGeom = function(lyr, arcs, opts) {
    if (!layerHasGeometry(lyr)) {
      stop("Layer is missing geometry");
    }
    if (opts.bbox) {
      filterByBoundsIntersection(lyr, arcs, opts);
    }
    cmd.filterFeatures(lyr, arcs, {remove_empty: true, verbose: false});
  };

  function filterByBoundsIntersection(lyr, arcs, opts) {
    var filter = getBoundsIntersectionFilter(opts.bbox, lyr, arcs);
    editShapes(lyr.shapes, filter);
  }

  function getBoundsIntersectionFilter(bbox, lyr, arcs) {
    var bounds = new Bounds(bbox);
    var filter = lyr.geometry_type == 'point' ?
          getPointInBoundsTest(bounds) :
          getPathBoundsIntersectionTest(bounds, arcs);
    return filter;
  }

  function getPointInBoundsTest(bounds) {
    return function(xy) {
      var contains =  bounds.containsPoint(xy[0], xy[1]);
      return contains ? xy : null;
    };
  }

  // V1 too-simple test: bounding-box intersection
  // internal.getPathBoundsIntersectionTest = function(bounds, arcs) {
  //   return function(path) {
  //     return bounds.intersects(arcs.getSimpleShapeBounds(path)) ? path : null;
  //   };
  // };

  function getPathBoundsIntersectionTest(bounds, arcs) {
    var bbox = bounds.toArray(),
      left = bbox[0],
      bottom = bbox[1],
      right = bbox[2],
      top = bbox[3];

    return function(path) {
      // case: bounding boxes don't intersect -> the path doesn't intersect the box
      if (!bounds.intersects(arcs.getSimpleShapeBounds(path))) {
        return null;
      }
      var intersects = false;
      var ax, ay, bx, by;
      var iter = arcs.getShapeIter(path);

      if (iter.hasNext()) {
        ax = iter.x;
        ay = iter.y;
      }
      while (iter.hasNext()) {
        bx = ax;
        by = ay;
        ax = iter.x;
        ay = iter.y;
        if (segmentOutsideBBox(ax, ay, bx, by, left, bottom, right, top)) continue;
        if (segmentInsideBBox(ax, ay, bx, by, left, bottom, right, top)) {
          intersects = true;
          break;
        }
        if (geom.segmentIntersection(left, top, right, top, ax, ay, bx, by) ||
            geom.segmentIntersection(left, bottom, right, bottom, ax, ay, bx, by) ||
            geom.segmentIntersection(left, bottom, left, top, ax, ay, bx, by) ||
            geom.segmentIntersection(right, bottom, right, top, ax, ay, bx, by)) {
          intersects = true;
          break;
        }
      }

      // case: bbox is entirely inside this ring
      if (!intersects && geom.testPointInRing(left, bottom, path, arcs)) {
        intersects = true;
      }
      return intersects ? path : null;
    };
  }

  // Return a function for testing if a shape (path or point) intersects a bounding box
  // TODO: move this function to a different file
  function getBBoxIntersectionTest(bbox, lyr, arcs) {
    var filter = getBoundsIntersectionFilter(bbox, lyr, arcs);
    return function(shapeId) {
      var shp = lyr.shapes[shapeId];
      if (!shp) return false;
      for (var i=0; i<shp.length; i++) {
        if (filter(shp[i])) return true;
      }
      return false;
    };
  }

  // return array of shape ids
  function findShapesIntersectingBBox(bbox, lyr, arcs) {
    var test = getBBoxIntersectionTest(bbox, lyr, arcs);
    var ids = [];
    for (var i=0; i<lyr.shapes.length; i++) {
      if (test(i)) ids.push(i);
    }
    return ids;
  }

  var FilterGeom = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getBBoxIntersectionTest: getBBoxIntersectionTest,
    findShapesIntersectingBBox: findShapesIntersectingBBox
  });

  cmd.filterFeatures = function(lyr, arcs, opts) {
    var records = lyr.data ? lyr.data.getRecords() : null,
        shapes = lyr.shapes || null,
        n = getFeatureCount(lyr),
        filteredShapes = shapes ? [] : null,
        filteredRecords = records ? [] : null,
        filteredLyr = getOutputLayer(lyr, opts),
        invert = !!opts.invert,
        filter;

    if (opts.expression) {
      filter = compileValueExpression(opts.expression, lyr, arcs);
    }

    if (opts.remove_empty) {
      filter = combineFilters(filter, getNullGeometryFilter(lyr, arcs));
    }

    if (opts.bbox) {
      filter = combineFilters(filter, getBBoxIntersectionTest(opts.bbox, lyr, arcs));
    }

    if (!filter) {
      stop("Missing a filter criterion");
    }

    utils.repeat(n, function(shapeId) {
      var result = filter(shapeId);
      if (invert) result = !result;
      if (result === true) {
        if (shapes) filteredShapes.push(shapes[shapeId] || null);
        if (records) filteredRecords.push(records[shapeId] || null);
      } else if (result !== false) {
        stop("Expression must return true or false");
      }
    });

    filteredLyr.shapes = filteredShapes;
    filteredLyr.data = filteredRecords ? new DataTable(filteredRecords) : null;
    if (opts.no_replace) {
      // if adding a layer, don't share objects between source and filtered layer
      filteredLyr = copyLayer(filteredLyr);
    }

    if (opts.verbose !== false) {
      message(utils.format('Retained %,d of %,d features', getFeatureCount(filteredLyr), n));
    }

    return filteredLyr;
  };

  function getNullGeometryFilter(lyr, arcs) {
    var shapes = lyr.shapes;
    if (lyr.geometry_type == 'polygon') {
      return getEmptyPolygonFilter(shapes, arcs);
    }
    return function(i) {return !!shapes[i];};
  }

  function getEmptyPolygonFilter(shapes, arcs) {
    return function(i) {
      var shp = shapes[i];
      return !!shp && geom.getPlanarShapeArea(shapes[i], arcs) > 0;
    };
  }

  function combineFilters(a, b) {
    return (a && b && function(id) {
        return a(id) && b(id);
      }) || a || b;
  }

  cmd.filterIslands = function(lyr, dataset, optsArg) {
    var opts = utils.extend({sliver_control: 0}, optsArg); // no sliver control
    var arcs = dataset.arcs;
    var removed = 0;
    var filter;
    if (lyr.geometry_type != 'polygon') {
      return;
    }
    if (!opts.min_area && !opts.min_vertices) {
      message("Missing a criterion for filtering islands; use min-area or min-vertices");
      return;
    }

    if (opts.min_area) {
      filter = getSliverFilter(lyr, dataset, opts).filter;
    } else {
      filter = getVertexCountTest(opts.min_vertices, arcs);
    }
    removed += filterIslands(lyr, arcs, filter);
    if (opts.remove_empty) {
      cmd.filterFeatures(lyr, arcs, {remove_empty: true, verbose: false});
    }
    message(utils.format("Removed %'d island%s", removed, utils.pluralSuffix(removed)));
  };

  function getVertexCountTest(minVertices, arcs) {
    return function(path) {
      // first and last vertex in ring count as one
      return geom.countVerticesInPath(path, arcs) <= minVertices;
    };
  }

  function filterIslands(lyr, arcs, ringTest) {
    var removed = 0;
    var counts = new Uint8Array(arcs.size());
    countArcsInShapes(lyr.shapes, counts);

    var pathFilter = function(path, i, paths) {
      if (path.length == 1) { // got an island ring
        if (counts[absArcId(path[0])] === 1) { // and not part of a donut hole
          if (!ringTest || ringTest(path)) { // and it meets any filtering criteria
            // and it does not contain any holes itself
            // O(n^2), so testing this last
            if (!ringHasHoles(path, paths, arcs)) {
              removed++;
              return null;
            }
          }
        }
      }
    };
    editShapes(lyr.shapes, pathFilter);
    return removed;
  }

  function ringIntersectsBBox(ring, bbox, arcs) {
    for (var i=0, n=ring.length; i<n; i++) {
      if (arcs.arcIntersectsBBox(absArcId(ring[i]), bbox)) {
        return true;
      }
    }
    return false;
  }

  // Assumes that ring boundaries to not cross
  function ringHasHoles(ring, rings, arcs) {
    var bbox = arcs.getSimpleShapeBounds2(ring);
    var sibling, p;
    for (var i=0, n=rings.length; i<n; i++) {
      sibling = rings[i];
      // try to avoid expensive point-in-ring test
      if (sibling && sibling != ring && ringIntersectsBBox(sibling, bbox, arcs)) {
        p = arcs.getVertex(sibling[0], 0);
        if (geom.testPointInRing(p.x, p.y, ring, arcs)) {
          return true;
        }
      }
    }
    return false;
  }

  cmd.filterIslands2 = function(lyr, dataset, optsArg) {
    var opts = utils.extend({sliver_control: 0}, optsArg); // no sliver control
    var arcs = dataset.arcs;
    var removed = 0;
    var filter;
    if (lyr.geometry_type != 'polygon') {
      return;
    }
    if (!opts.min_area && !opts.min_vertices) {
      message("Missing a criterion for filtering islands; use min-area or min-vertices");
      return;
    }

    if (opts.min_area) {
      filter = getSliverFilter(lyr, dataset, opts).filter;
    } else {
      filter = getVertexCountTest(opts.min_vertices, arcs);
    }
    removed += filterIslands2(lyr, arcs, filter);
    if (opts.remove_empty) {
      cmd.filterFeatures(lyr, arcs, {remove_empty: true, verbose: false});
    }
    message(utils.format("Removed %'d island%s", removed, utils.pluralSuffix(removed)));
  };

  function buildIslandIndex(lyr, arcs, ringTest) {
    // index of all islands
    // (all rings are considered to belong to an island)
    var islandIndex = [];
    // this index maps id of first arc in each ring to
    // an island in islandIndex
    var firstArcIndex = new ArcToIdIndex(arcs);
    var shpId;
    var parts;

    lyr.shapes.forEach(function(shp, i) {
      if (!shp) return;
      shpId = i;
      forEachShapePart(parts, eachRing);

    });

    function eachRing(ring, ringId, shp) {
      var area = geom.getPathArea(ring, arcs);
      var firstArcId = ring[0];
      if (area <= 0) return; // skip holes (really?)
      var islandId = firstArcIndex.getId(firstArcId);
      var islandData;
      if (islandId == -1) {
        islandData = {
          area: 0
        };
        islandId = islandIndex.length;
        islandIndex.push(islandData);
      } else {
        islandData = islandIndex[islandId];
      }
      islandData.area += area;

    }

  }


  function filterIslands2(lyr, arcs, ringTest) {
    var removed = 0;
    var counts = new Uint8Array(arcs.size());
    countArcsInShapes(lyr.shapes, counts);

    var pathFilter = function(path, i, paths) {
      if (path.length == 1) { // got an island ring
        if (counts[absArcId(path[0])] === 1) { // and not part of a donut hole
          if (!ringTest || ringTest(path)) { // and it meets any filtering criteria
            // and it does not contain any holes itself
            // O(n^2), so testing this last
            if (!ringHasHoles(path, paths, arcs)) {
              removed++;
              return null;
            }
          }
        }
      }
    };
    editShapes(lyr.shapes, pathFilter);
    return removed;
  }

  function ArcToIdIndex(arcs) {
    var n = arcs.size();
    var fwdArcIndex = new Int32Array(n);
    var revArcIndex = new Int32Array(n);
    utils.initializeArray(fwdArcIndex, -1);
    utils.initializeArray(revArcIndex, -1);
    this.setId = function(arcId, id) {
      if (arcId >= 0) {
        fwdArcIndex[arcId] = id;
      } else {
        revArcIndex[~arcId] = id;
      }
    };

    this.getId = function(arcId) {
      var i = absArcId(arcId);
      if (i < n === false) return -1;
      return (arcId < 0 ? revArcIndex : fwdArcIndex)[i];
    };
  }

  cmd.filterFields = function(lyr, names) {
    var table = lyr.data;
    names = names || [];
    requireDataFields(table, names);
    if (!table) return;
    // old method: does not set field order e.g. in CSV output files
    // utils.difference(table.getFields(), names).forEach(table.deleteField, table);
    // the below method sets field order of CSV output, and is generally faster
    var map = mapFieldNames(names);
    lyr.data.update(getRecordMapper(map));
  };

  cmd.renameFields = function(lyr, names) {
    var map = mapFieldNames(names);
    requireDataFields(lyr.data, Object.keys(map));
    utils.defaults(map, mapFieldNames(lyr.data.getFields()));
    lyr.data.update(getRecordMapper(map));
  };

  function mapFieldNames(names) {
    return (names || []).reduce(function(memo, str) {
      var parts = str.split('='),
          dest = utils.trimQuotes(parts[0]),
          src = parts.length > 1 ? utils.trimQuotes(parts[1]) : dest;
      if (!src || !dest) stop("Invalid field description:", str);
      memo[src] = dest;
      return memo;
    }, {});
  }

  function getRecordMapper(map) {
    var fields = Object.keys(map);
    return function(src) {
      var dest = {}, key;
      for (var i=0, n=fields.length; i<n; i++) {
        key = fields[i];
        dest[map[key]] = src[key];
      }
      return dest;
    };
  }

  // internal.getRecordMapper = function(map) {
  //   var fields = Object.keys(map);
  //   return new Function("rec", "return {" + fields.map(function(name, i) {
  //     var key = JSON.stringify(name);
  //     return key + ": rec[" + key + "]";
  //   }).join(",") + "}");
  // };

  // TODO: use an actual index instead of linear search
  function PointIndex(shapes, opts) {
    var buf = utils.isNonNegNumber(opts.buffer) ? opts.buffer : 1e-3;
    var minDistSq, minId, target;
    this.findNearestPointFeature = function(shape) {
      minDistSq = Infinity;
      minId = -1;
      target = shape || [];
      forEachPoint(shapes, testPoint);
      return minId;
    };

    function testPoint(p, id) {
      var distSq;
      for (var i=0; i<target.length; i++) {
        distSq = geom.distanceSq(target[i][0], target[i][1], p[0], p[1]);
        if (distSq < minDistSq && distSq <= buf * buf) {
          minDistSq = distSq;
          minId = id;
        }
      }
    }
  }

  function joinPointsToPolygons(targetLyr, arcs, pointLyr, opts) {
    // TODO: option to copy points that can't be joined to a new layer
    var joinFunction = getPolygonToPointsFunction(targetLyr, arcs, pointLyr, opts);
    prepJoinLayers(targetLyr, pointLyr);
    return joinTables(targetLyr.data, pointLyr.data, joinFunction, opts);
  }

  function joinPolygonsToPoints(targetLyr, polygonLyr, arcs, opts) {
    var joinFunction = getPointToPolygonsFunction(targetLyr, polygonLyr, arcs, opts);
    prepJoinLayers(targetLyr, polygonLyr);
    return joinTables(targetLyr.data, polygonLyr.data, joinFunction, opts);
  }

  function joinPointsToPoints(targetLyr, srcLyr, opts) {
    var joinFunction = getPointToPointFunction(targetLyr, srcLyr, opts);
    prepJoinLayers(targetLyr, srcLyr);
    return joinTables(targetLyr.data, srcLyr.data, joinFunction, opts);
  }

  function prepJoinLayers(targetLyr, srcLyr) {
    if (!targetLyr.data) {
      // create an empty data table if target layer is missing attributes
      targetLyr.data = new DataTable(targetLyr.shapes.length);
    }
    if (!srcLyr.data) {
      stop("Can't join a layer that is missing attribute data");
    }
  }

  function getPointToPointFunction(targetLyr, srcLyr, opts) {
    var shapes = targetLyr.shapes;
    var index = new PointIndex(srcLyr.shapes, {});
    return function(targId) {
      var srcId = index.findNearestPointFeature(shapes[targId]);
      // TODO: accept multiple hits
      return srcId > -1 ? [srcId] : null;
    };
  }

  function getPolygonToPointsFunction(polygonLyr, arcs, pointLyr, opts) {
    // Build a reverse lookup table for mapping polygon ids to point ids.
    var joinFunction = getPointToPolygonsFunction(pointLyr, polygonLyr, arcs, opts);
    var index = [];
    var firstMatch = !!opts.first_match; // a point is assigned to the first matching polygon
    var hits, polygonId;
    pointLyr.shapes.forEach(function(shp, pointId) {
      var polygonIds = joinFunction(pointId);
      var n = polygonIds ? polygonIds.length : 0;
      var polygonId;
      for (var i=0; i<n; i++) {
        polygonId = polygonIds[i];
        if (polygonId in index) {
          index[polygonId].push(pointId);
        } else {
          index[polygonId] = [pointId];
        }
        if (firstMatch) break;
      }
    });

    return function(polygonId) {
      return index[polygonId] || null;
    };
  }


  // Returned function gets ids of all polygons that intersect a point (or the first
  //   point of multipoint features). TODO: handle multipoint features properly.
  function getPointToPolygonsFunction(pointLyr, polygonLyr, arcs, opts) {
    var index = new PathIndex(polygonLyr.shapes, arcs),
        points = pointLyr.shapes;

    return function(pointId) {
      var shp = points[pointId],
          polygonIds = shp ? index.findEnclosingShapes(shp[0]) : [];
      return polygonIds.length > 0 ? polygonIds : null;
    };
  }


  // TODO: remove (replaced by getPointToPolygonsFunction())
  function getPointToPolygonFunction(pointLyr, polygonLyr, arcs, opts) {
    var index = new PathIndex(polygonLyr.shapes, arcs),
        points = pointLyr.shapes;

    // @i id of a point feature
    return function(i) {
      var shp = points[i],
          shpId = -1;
      if (shp) {
        // TODO: handle multiple hits
        shpId = index.findEnclosingShape(shp[0]);
      }
      return shpId == -1 ? null : [shpId];
    };
  }

  var PointPolygonJoin = /*#__PURE__*/Object.freeze({
    __proto__: null,
    joinPointsToPolygons: joinPointsToPolygons,
    joinPolygonsToPoints: joinPolygonsToPoints,
    joinPointsToPoints: joinPointsToPoints,
    prepJoinLayers: prepJoinLayers,
    getPolygonToPointsFunction: getPolygonToPointsFunction
  });

  // This is a special-purpose function designed to copy a data field from a points
  // layer to a target polygon layer using a spatial join. It tries to create a continuous
  // mosaic of data values, even if some of the polygons are not intersected by points.
  // It is "fuzzy" because it treats locations in the points file as potentially unreliable.
  //
  // A typical use case is joining geocoded address data containing a neighborhood
  // or precinct field to a Census Block file, in preparation to dissolving the
  // blocks into larger polygons.
  //
  cmd.fuzzyJoin = function(polygonLyr, arcs, src, opts) {
    var pointLyr = src ? src.layer : null;
    if (!pointLyr || !layerHasPoints(pointLyr)) {
      stop('Missing a point layer to join from');
    }
    requireDataField(pointLyr, opts.field);
    requirePolygonLayer(polygonLyr);
    if (opts.dedup_points) {
      cmd.uniq(pointLyr, null, {expression: 'this.x + "~" + this.y + "~" + this.properties[' + JSON.stringify(opts.field) + ']', verbose: false});
    }
    fuzzyJoin(polygonLyr, arcs, pointLyr, opts);
  };

  function fuzzyJoin(polygonLyr, arcs, pointLyr, opts) {
    var field = opts.field;
    // using first_match param: don't let a point be assigned to multiple polygons
    var getPointIds = getPolygonToPointsFunction(polygonLyr, arcs, pointLyr, {first_match: true});
    var getFieldValues = getFieldValuesFunction(pointLyr, field);
    var assignedValues = [];
    var countData = [];
    var modeCounts = [];

    // Step one: assign join values to mode value; resolve ties
    polygonLyr.shapes.forEach(function(shp, i) {
      var pointIds = getPointIds(i) || [];
      var values = getFieldValues(pointIds);
      var modeData = getModeData(values, true);
      var modeValue = modeData.margin > 0 ? modeData.modes[0] : null;
      var isTie = modeValue === null && modeData.modes.length > 1;
      if (isTie) {
        // resolve ties by picking between the candidate data values
        // todo: consider using this method to evaluate near-ties as well
        modeValue = resolveFuzzyJoinTie(modeData.modes, pointLyr, pointIds, field, shp, arcs);
      }
      modeCounts[i] = modeData.count || 0;
      // retain count/mode data, to use later for restoring dropouts
      if (opts.no_dropouts) {
        countData.push(modeData);
      }
      assignedValues.push(modeValue);
    });

    insertFieldValues(polygonLyr, 'join-count', modeCounts);
    insertFieldValues(polygonLyr, field, assignedValues);

    // fill in missing values, etc. using the data-fill function
    cmd.dataFill(polygonLyr, arcs,
      {field: field, weight_field: 'join-count', contiguous: opts.contiguous});

    // restore dropouts
    if (opts.no_dropouts) {
      var missingValues = findDropoutValues(polygonLyr, pointLyr, field);
      if (missingValues.length > 0) {
        restoreDropoutValues(polygonLyr, field, missingValues, countData);
      }
    }

  }

  // Returns a function for converting an array of feature ids to an array of values from a given data field.
  function getFieldValuesFunction(lyr, field) {
    var records = lyr.data.getRecords();
    return function getFieldValues(ids) {
      var values = [], rec;
      for (var i=0; i<ids.length; i++) {
        rec = records[ids[i]];
        values.push(rec[field]);
      }
      return values;
    };
  }

  function findDropoutValues(targetLyr, sourceLyr, field) {
    var sourceValues = getUniqFieldValues(sourceLyr.data.getRecords(), field);
    var targetValues = getUniqFieldValues(targetLyr.data.getRecords(), field);
    var missing = utils.difference(sourceValues, targetValues);
    return missing;
  }

  function restoreDropoutValues(lyr, field, missingValues, countData) {
    var records = lyr.data.getRecords();
    var failures = [];
    var restoredIds = [];

    var targetIds = missingValues.map(function(missingValue) {
      var shpId = findDropoutInsertionShape(missingValue, countData);
      if (shpId > -1 && restoredIds.indexOf(shpId) === -1) {
        records[shpId][field] = missingValue;
        restoredIds.push(shpId);
      } else {
        failures.push(missingValue);
      }
    });

    message('Restored', restoredIds.length, 'dropout value' + utils.pluralSuffix(restoredIds.length));

    // TODO: handle different kinds of failure differently:
    // a. values that point-to-polygon failed to match to a polygon
    // b. multiple dropout values are assigned to the same target polygon
    // c. restoring a dropout results in replacing the only instance of another value
    if (failures.length > 0) {
      message('Failed to restore dropout value(s):', failures.join(', '));
    }
  }

  function findDropoutInsertionShape(value, countData) {
    var id = -1;
    var count = 0;
    countData.forEach(function(d, shpId) {
      var i = d.values.indexOf(value);
      var n = i > -1 ? d.counts[i] : 0;
      if (n > count) {
        id = shpId;
        count = n;
      }
    });
    return id;
  }

  // TODO: move to more appropriate file
  function getPointsToPolygonDistance(points, poly, arcs) {
    // todo: handle multipoint geometry (this function will return an invalid distance
    // if the first point in a multipoint feature falls outside the target polygon
    var p = points[0];
    // unsigned distance to nearest polygon boundary
    return geom.getPointToShapeDistance(p[0], p[1], poly, arcs);
  }

  function resolveFuzzyJoinTie(modeValues, pointLyr, pointIds, field, shp, arcs) {
    var weights = modeValues.map(function() {return 0;}); // initialize to 0
    pointIds.forEach(function(pointId) {
      var coords = pointLyr.shapes[pointId];
      var val = pointLyr.data.getRecordAt(pointId)[field];
      var i = modeValues.indexOf(val);
      if (i === -1) return;
      var dist = getPointsToPolygonDistance(coords, shp, arcs);
      weights[i] += dist;
    });
    // use value with the highest weight
    var maxWeight = Math.max.apply(null, weights);
    var maxValue = modeValues[weights.indexOf(maxWeight)];
    return maxValue;
  }

  cmd.graticule = function(dataset, opts) {
    var graticule = createGraticule(opts);
    var dest, src;
    if (dataset) {
      // project graticule to match dataset
      dest = getDatasetCRS(dataset);
      src = getCRS('wgs84');
      if (!dest) stop("Coordinate system is unknown, unable to create a graticule");
      projectDataset(graticule, src, dest, {}); // TODO: densify?
    }
    return graticule;
  };

  // create graticule as a dataset
  function createGraticule(opts) {
    var precision = 1; // degrees between each vertex
    var step = 10;
    var majorStep = 90;
    var xn = Math.round(360 / step) + 1;
    var yn = Math.round(180 / step) + 1;
    var xx = utils.range(xn, -180, step);
    var yy = utils.range(yn, -90, step);
    var meridians = xx.map(function(x) {
      var ymin = -90,
          ymax = 90;
      if (x % majorStep !== 0) {
        ymin += step;
        ymax -= step;
      }
      return createMeridian(x, ymin, ymax, precision);
    });
    var parallels = yy.map(function(y) {
      return createParallel(y, -180, 180, precision);
    });
    var geojson = {
      type: 'FeatureCollection',
      features: meridians.concat(parallels)
    };
    var graticule = importGeoJSON(geojson, {});
    graticule.layers[0].name = 'graticule';
    return graticule;
  }

  function graticuleFeature(coords, o) {
    return {
      type: 'Feature',
      properties: o,
      geometry: {
        type: 'LineString',
        coordinates: coords
      }
    };
  }

  function createMeridian(x, ymin, ymax, precision) {
    var coords = [];
    for (var y = ymin; y < ymax; y += precision) {
      coords.push([x, y]);
    }
    coords.push([x, ymax]);
    return graticuleFeature(coords, {type: 'meridian', value: x});
  }

  function createParallel(y, xmin, xmax, precision) {
    var coords = [];
    for (var x = xmin; x < xmax; x += precision) {
      coords.push([x, y]);
    }
    coords.push([xmax, y]);
    return graticuleFeature(coords, {type: 'parallel', value: y});
  }

  cmd.include = function(opts) {
    var content, obj, context;
    // TODO: handle web context
    if (!opts.file) {
      stop("Missing name of a JS file to load");
    }
    // opts.input is an optional file cache (used by applyCommands())
    cli.checkFileExists(opts.file, opts.input);
    content = cli.readFile(opts.file, 'utf8', opts.input);
    if (typeof content == 'string') {
      if (!/^\s*\{[\s\S]*\}\s*$/.test(content)) {
        stop("Expected a JavaScript object containing key:value pairs");
      }
      try {
        // Try to isolate the imported JS code from the program scope and global environment
        // TODO: consider whether this is desirable... it may be pointless anyway
        //   as long as we're passing through the 'require()' function
        context = getBaseContext();
        context.require = require;
        obj = Function('ctx', 'with(ctx) {return (' + content + ');}').call({}, context);
        // obj = eval('(' + content + ')');
      } catch(e) {
        stop(e.name, 'in JS source:', e.message);
      }
    } else if (typeof content == 'object') {
      // content could be an object if an object is passed to applyCommands()
      obj = content;
    }

    utils.extend(getStateVar('defs'), obj);
  };

  var MAX_RULE_LEN = 50;

  cmd.printInfo = function(layers) {
    var str = '';
    layers.forEach(function(o, i) {
      var title =  'Layer:    ' + (o.layer.name || '[unnamed layer]');
      var tableStr = getAttributeTableInfo(o.layer);
      var tableWidth = measureLongestLine(tableStr);
      var ruleLen = Math.min(Math.max(title.length, tableWidth), MAX_RULE_LEN);
      str += '\n';
      str += utils.lpad('', ruleLen, '=') + '\n';
      str += title + '\n';
      str += utils.lpad('', ruleLen, '-') + '\n';
      str += getLayerInfo(o.layer, o.dataset);
      str += tableStr;
    });
    message(str);
  };

  function measureLongestLine(str) {
    return Math.max.apply(null, str.split('\n').map(function(line) {return stringDisplayWidth(line);}));
  }

  function stringDisplayWidth(str) {
    var w = 0;
    for (var i = 0, n=str.length; i < n; i++) {
      w += charDisplayWidth(str.charCodeAt(i));
    }
    return w;
  }

  // see https://www.cl.cam.ac.uk/~mgk25/ucs/wcwidth.c
  // this is a simplified version, focusing on double-width CJK chars and ignoring nonprinting etc chars
  function charDisplayWidth(c) {
    if (c >= 0x1100 &&
      (c <= 0x115f || c == 0x2329 || c == 0x232a ||
      (c >= 0x2e80 && c <= 0xa4cf && c != 0x303f) || /* CJK ... Yi */
      (c >= 0xac00 && c <= 0xd7a3) || /* Hangul Syllables */
      (c >= 0xf900 && c <= 0xfaff) || /* CJK Compatibility Ideographs */
      (c >= 0xfe10 && c <= 0xfe19) || /* Vertical forms */
      (c >= 0xfe30 && c <= 0xfe6f) || /* CJK Compatibility Forms */
      (c >= 0xff00 && c <= 0xff60) || /* Fullwidth Forms */
      (c >= 0xffe0 && c <= 0xffe6) ||
      (c >= 0x20000 && c <= 0x2fffd) ||
      (c >= 0x30000 && c <= 0x3fffd))) return 2;
    return 1;
  }

  function getLayerData(lyr, dataset) {
    var n = getFeatureCount(lyr);
    var o = {
      geometry_type: lyr.geometry_type,
      feature_count: n,
      null_shape_count: 0,
      null_data_count: lyr.data ? countNullRecords(lyr.data.getRecords()) : n
    };
    if (lyr.shapes) {
      o.null_shape_count = countNullShapes(lyr.shapes);
      o.bbox =getLayerBounds(lyr, dataset.arcs).toArray();
      o.proj4 = getProjInfo(dataset);
    }
    return o;
  }

  // TODO: consider polygons with zero area or other invalid geometries
  function countNullShapes(shapes) {
    var count = 0;
    for (var i=0; i<shapes.length; i++) {
      if (!shapes[i] || shapes[i].length === 0) count++;
    }
    return count;
  }

  function countNullRecords(records) {
    var count = 0;
    for (var i=0; i<records.length; i++) {
      if (!records[i]) count++;
    }
    return count;
  }

  function countRings(shapes, arcs) {
    var holes = 0, rings = 0;
    editShapes(shapes, function(ids) {
      var area = geom.getPlanarPathArea(ids, arcs);
      if (area > 0) rings++;
      if (area < 0) holes++;
    });
    return {rings: rings, holes: holes};
  }

  function getLayerInfo(lyr, dataset) {
    var data = getLayerData(lyr, dataset);
    var str = '';
    str += "Type:     " + (data.geometry_type || "tabular data") + "\n";
    str += utils.format("Records:  %,d\n",data.feature_count);
    if (data.null_shape_count > 0) {
      str += utils.format("Nulls:     %'d", data.null_shape_count) + "\n";
    }
    if (data.geometry_type && data.feature_count > data.null_shape_count) {
      str += "Bounds:   " + data.bbox.join(',') + "\n";
      str += "CRS:      " + data.proj4 + "\n";
    }
    str += "Source:   " + (getLayerSourceFile(lyr, dataset) || 'n/a') + "\n";
    return str;
  }

  function getAttributeTableInfo(lyr, i) {
    if (!lyr.data || lyr.data.size() === 0 || lyr.data.getFields().length === 0) {
      return "Attribute data: [none]\n";
    }
    return "\nAttribute data\n" + formatAttributeTable(lyr.data, i);
  }

  function formatAttributeTable(data, i) {
    var fields = applyFieldOrder(data.getFields(), 'ascending');
    var vals = fields.map(function(fname) {
      return data.getReadOnlyRecordAt(i || 0)[fname];
    });
    var maxIntegralChars = vals.reduce(function(max, val) {
      if (utils.isNumber(val)) {
        max = Math.max(max, countIntegralChars(val));
      }
      return max;
    }, 0);
    var col1Arr = ['Field'].concat(fields);
    var col2Arr = vals.reduce(function(memo, val) {
      memo.push(formatTableValue(val, maxIntegralChars));
      return memo;
    }, [i >= 0 ? 'Value' : 'First value']);
    var col1Chars = maxChars(col1Arr);
    var col2Chars = maxChars(col2Arr);
    var sepStr = (utils.rpad('', col1Chars + 2, '-') + '+' +
        utils.rpad('', col2Chars + 2, '-')).substr(0, MAX_RULE_LEN);
    var sepLine = sepStr + '\n';
    var table = sepLine;
    col1Arr.forEach(function(col1, i) {
      var w = stringDisplayWidth(col1);
      table += ' ' + col1 + utils.rpad('', col1Chars - w, ' ') + ' | ' +
        col2Arr[i] + '\n';
      if (i === 0) table += sepLine; // separator after first line
    });
    return table + sepLine;
  }



  function formatNumber$1(val) {
    return val + '';
  }

  function maxChars(arr) {
    return arr.reduce(function(memo, str) {
      var w = stringDisplayWidth(str);
      return w > memo ? w : memo;
    }, 0);
  }

  function formatString(str) {
    var replacements = {
      '\n': '\\n',
      '\r': '\\r',
      '\t': '\\t'
    };
    var cleanChar = function(c) {
      // convert newlines and carriage returns
      // TODO: better handling of non-printing chars
      return c in replacements ? replacements[c] : '';
    };
    str = str.replace(/[\r\t\n]/g, cleanChar);
    return "'" + str + "'";
  }

  function countIntegralChars(val) {
    return utils.isNumber(val) ? (formatNumber$1(val) + '.').indexOf('.') : 0;
  }

  function formatTableValue(val, integralChars) {
    var str;
    if (utils.isNumber(val)) {
      str = utils.lpad("", integralChars - countIntegralChars(val), ' ') +
        formatNumber$1(val);
    } else if (utils.isString(val)) {
      str = formatString(val);
    } else if (utils.isObject(val)) { // if {} or [], display JSON
      str = JSON.stringify(val);
    } else {
      str = String(val);
    }
    return str;
  }

  function getSimplificationInfo(arcs) {
    var nodeCount = new NodeCollection(arcs).size();
    // get count of non-node vertices
    var internalVertexCount = countInteriorVertices(arcs);
  }

  function countInteriorVertices(arcs) {
    var count = 0;
    arcs.forEach2(function(i, n) {
      if (n > 2) {
        count += n - 2;
      }
    });
    return count;
  }

  var Info = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getLayerData: getLayerData,
    getAttributeTableInfo: getAttributeTableInfo,
    formatTableValue: formatTableValue
  });

  // TODO: make sure that the inlay shapes and data are not shared
  cmd.inlay = function(targetLayers, src, targetDataset, opts) {
    var mergedDataset = mergeLayersForOverlay(targetLayers, targetDataset, src, opts);
    var inlayLyr = mergedDataset.layers[mergedDataset.layers.length - 1];
    requirePolygonLayer(inlayLyr);
    targetLayers.forEach(requirePolygonLayer);
    var eraseSrc = {layer: inlayLyr, dataset: mergedDataset};
    var erasedLayers = cmd.eraseLayers(targetLayers, eraseSrc, mergedDataset, opts);
    var outputLayers = erasedLayers.map(function(lyr0) {
      // similar to applyCommandToLayerSelection() (mapshaper-command-utils.js)
      var lyr1 = copyLayer(inlayLyr);
      var lyr2 = cmd.mergeLayers([lyr0, lyr1], {force: true})[0];
      lyr2.name = lyr0.name;
      return lyr2;
    });
    targetDataset.arcs = mergedDataset.arcs;
    return outputLayers;
  };

  cmd.lines = function(lyr, dataset, opts) {
    opts = opts || {};
    if (opts.callouts) {
      requirePointLayer(lyr);
      return pointsToCallouts(lyr, dataset, opts);
    } else if (lyr.geometry_type == 'point') {
      return pointsToLines(lyr, dataset, opts);
    } else if (opts.segments) {
      return [convertShapesToSegments(lyr, dataset)];
    } else if (opts.arcs) {
      return [convertShapesToArcs(lyr, dataset)];
    } else if (lyr.geometry_type == 'polygon') {
      return polygonsToLines(lyr, dataset.arcs, opts);
    } else {
      requirePolygonLayer(lyr, "Command requires a polygon or point layer");
    }
  };

  function convertShapesToArcs(lyr, dataset) {
    var arcs = dataset.arcs;
    var test = getArcPresenceTest(lyr.shapes, arcs);
    var records = [];
    var shapes = [];
    for (var i=0, n=arcs.size(); i<n; i++) {
      if (!test(i)) continue;
      records.push({arcid: i});
      shapes.push([[i]]);
    }
    return {
      geometry_type: 'polyline',
      data: new DataTable(records),
      shapes: shapes
    };
  }

  function convertShapesToSegments(lyr, dataset) {
    var arcs = dataset.arcs;
    var features = [];
    var geojson = {type: 'FeatureCollection', features: []};
    var test = getArcPresenceTest(lyr.shapes, arcs);
    var arcId;
    for (var i=0, n=arcs.size(); i<n; i++) {
      arcId = i;
      if (!test(arcId)) continue;
      arcs.forEachArcSegment(arcId, onSeg);
    }
    function onSeg(i1, i2, xx, yy) {
      var a = xx[i1],
          b = yy[i1],
          c = xx[i2],
          d = yy[i2];
      geojson.features.push({
        type: 'Feature',
        properties: {arc: arcId, i1: i1, i2: i2, x1: a, y1: b, x2: c, y2: d},
        geometry: {type: 'LineString', coordinates: [[a, b], [c, d]]}
      });
    }
    var merged = mergeDatasets([dataset, importGeoJSON(geojson, {})]);
    dataset.arcs = merged.arcs;
    // buildTopology(dataset);
    return merged.layers.pop();
  }

  function pointsToLines(lyr, dataset, opts) {
    var geojson = opts.groupby ?
      groupedPointsToLineGeoJSON(lyr, opts.groupby, opts) :
      pointShapesToLineGeometry(lyr.shapes); // no grouping: return single line with no attributes
    var dataset2 = importGeoJSON(geojson);
    var outputLayers = mergeDatasetsIntoDataset(dataset, [dataset2]);
    if (!opts.no_replace) {
      outputLayers[0].name = lyr.name || outputLayers[0].name;
    }
    return outputLayers;
  }

  function pointsToCallouts(lyr, dataset, opts) {
    var records = lyr.data ? lyr.data.getRecords() : null;
    var calloutLen = getLayerBounds(lyr).width() / 50;
    var pointToSegment = function(p) {
      return [p, [p[0] + calloutLen, p[1]]];
    };
    var geojson = {
      type: 'FeatureCollection',
      features: lyr.shapes.map(function(shp, i) {
        return {
          type: 'Feature',
          properties: records ? records[i] : null,
          geometry: {
            type: 'MultiLineString',
            coordinates: shp.map(pointToSegment)
          }
        };
      })
    };
    var dataset2 = importGeoJSON(geojson);
    var outputLayers = mergeDatasetsIntoDataset(dataset, [dataset2]);
    if (!opts.no_replace) {
      outputLayers[0].name = lyr.name || outputLayers[0].name;
    }
    return outputLayers;
  }

  function groupedPointsToLineGeoJSON(lyr, field, opts) {
    var groups = [];
    var getGroupId = getCategoryClassifier([field], lyr.data);
    var dataOpts = utils.defaults({fields: [field]}, opts);
    var records = aggregateDataRecords(lyr.data.getRecords(), getGroupId, dataOpts);
    var features;
    lyr.shapes.forEach(function(shape, i) {
      var groupId = getGroupId(i);
      if (groupId in groups === false) {
        groups[groupId] = [];
      }
      groups[groupId].push(shape);
    });
    features = groups.map(function(shapes, i) {
      return {
        type: 'Feature',
        properties: records[i],
        geometry: shapes.length > 1 ? pointShapesToLineGeometry(shapes) : null
      };
    });
    return {
      type: 'FeatureCollection',
      features: features
    };
  }

  // TOOD: automatically convert rings into separate shape parts
  function pointShapesToLineGeometry(shapes) {
    var coords = [];
    forEachPoint(shapes, function(p) {
      coords.push(p.concat());
    });
    return {type: 'LineString', coordinates: coords};
  }

  function polygonsToLines(lyr, arcs, opts) {
    opts = opts || {};
    var filter = opts.where ? compileFeaturePairFilterExpression(opts.where, lyr, arcs) : null,
        decorateRecord = opts.each ? getLineRecordDecorator(opts.each, lyr, arcs) : null,
        classifier = getArcClassifier(lyr.shapes, arcs, {filter: filter}),
        fields = utils.isArray(opts.fields) ? opts.fields : [],
        rankId = 0,
        shapes = [],
        records = [],
        outputLyr;

    if (fields.length > 0 && !lyr.data) {
      stop("Missing a data table");
    }

    addLines(extractOuterLines(lyr.shapes, classifier), 'outer');

    fields.forEach(function(field) {
      var data = lyr.data.getRecords();
      var key = function(a, b) {
        var arec = data[a];
        var brec = data[b];
        var aval, bval;
        if (!arec || !brec || arec[field] === brec[field]) {
          return null;
        }
        return a + '-' + b;
      };
      requireDataField(lyr, field);
      addLines(extractLines(lyr.shapes, classifier(key)), field);
    });

    addLines(extractInnerLines(lyr.shapes, classifier), 'inner');
    outputLyr = createLineLayer(shapes, records);
    outputLyr.name = opts.no_replace ? null : lyr.name;
    return outputLyr;

    function addLines(lines, typeName) {
      var attr = lines.map(function(shp, i) {
        var rec = {RANK: rankId, TYPE: typeName};
        if (decorateRecord) decorateRecord(rec, shp);
        return rec;
      });
      shapes = utils.merge(lines, shapes);
      records = utils.merge(attr, records);
      rankId++;
    }
  }


  // kludgy way to implement each= option of -lines command
  function getLineRecordDecorator(exp, lyr, arcs) {
    // repurpose arc classifier function to convert arc ids to shape ids of original polygons
    var procArcId = getArcClassifier(lyr.shapes, arcs)(procShapeIds);
    var compiled = compileFeaturePairExpression(exp, lyr, arcs);
    var tmp;

    function procShapeIds(shpA, shpB) {
      compiled(shpA, shpB, tmp);
    }

    return function(rec, shp) {
      tmp = rec;
      procArcId(shp[0][0]);
      return rec;
    };
  }


  function createLineLayer(lines, records) {
    return {
      geometry_type: 'polyline',
      shapes: lines,
      data: records ? new DataTable(records) : null
    };
  }

  function extractOuterLines(shapes, classifier) {
    var key = function(a, b) {return b == -1 ? String(a) : null;};
    return extractLines(shapes, classifier(key));
  }

  function extractInnerLines(shapes, classifier) {
    var key = function(a, b) {return b > -1 ? a + '-' + b : null;};
    return extractLines(shapes, classifier(key));
  }

  function extractLines(shapes, classify) {
    var lines = [],
        index = {},
        prev = null,
        prevKey = null,
        part;

    traversePaths(shapes, onArc, onPart);

    function onArc(o) {
      var arcId = o.arcId,
          key = classify(arcId),
          isContinuation, line;
      if (!!key) {
        line = key in index ? index[key] : null;
        isContinuation = key == prevKey && o.shapeId == prev.shapeId && o.partId == prev.partId;
        if (!line) {
          line = [[arcId]]; // new shape
          index[key] = line;
          lines.push(line);
        } else if (isContinuation) {
          line[line.length-1].push(arcId); // extending prev part
        } else {
          line.push([arcId]); // new part
        }

        // if extracted line is split across endpoint of original polygon ring, then merge
        if (o.i == part.arcs.length - 1 &&  // this is last arc in ring
            line.length > 1 &&              // extracted line has more than one part
            line[0][0] == part.arcs[0]) {   // first arc of first extracted part is first arc in ring
          line[0] = line.pop().concat(line[0]);
        }
      }
      prev = o;
      prevKey = key;
    }

    function onPart(o) {
      part = o;
    }

    return lines;
  }

  var Lines = /*#__PURE__*/Object.freeze({
    __proto__: null,
    polygonsToLines: polygonsToLines,
    createLineLayer: createLineLayer,
    extractInnerLines: extractInnerLines
  });

  cmd.innerlines = function(lyr, arcs, opts) {
    opts = opts || {};
    requirePolygonLayer(lyr);
    var filter = opts.where ? compileFeaturePairFilterExpression(opts.where, lyr, arcs) : null;
    var classifier = getArcClassifier(lyr.shapes, arcs, {filter: filter});
    var lines = extractInnerLines(lyr.shapes, classifier);
    var outputLyr = createLineLayer(lines, null);

    if (lines.length === 0) {
      message("No shared boundaries were found");
    }
    outputLyr.name = opts.no_replace ? null : lyr.name;
    return outputLyr;
  };

  cmd.inspect = function(lyr, arcs, opts) {
    var ids = selectFeatures(lyr, arcs, opts);
    var msg;
    if (ids.length == 1) {
      msg = getFeatureInfo(ids[0], lyr, arcs);
    } else {
      msg = utils.format("Expression matched %d feature%s. Select one feature for details", ids.length, utils.pluralSuffix(ids.length));
    }
    message(msg);
  };

  function getFeatureInfo(id, lyr, arcs) {
      var msg = "Feature " + id + '\n';
      msg += getShapeInfo(id, lyr, arcs);
      msg += getAttributeTableInfo(lyr, id);
      return msg;
  }

  function getShapeInfo(id, lyr, arcs) {
    var shp = lyr.shapes ? lyr.shapes[id] : null;
    var type = lyr.geometry_type;
    var info, msg;
    if (!shp || !type) {
      return 'Geometry: [null]\n';
    }
    msg = 'Geometry\n  Type: ' + type + '\n';
    if (type == 'point') {
      msg += '  Points: ' + shp.length + '\n';
    } else if (type == 'polyline') {
      msg += '  Parts: ' + shp.length + '\n';
    } else if (type == 'polygon') {
      info = getPolygonInfo(shp, arcs);
      msg += utils.format('  Rings: %d cw, %d ccw\n', info.cw, info.ccw);
      msg += '  Planar area: ' + info.area + '\n';
      if (info.sph_area) {
        msg += '  Spherical area: ' + info.sph_area + ' sq. meters\n';
      }
    }
    return msg;
  }

  function getPolygonInfo(shp, arcs) {
    var o = {rings: shp.length, cw: 0, ccw: 0, area: 0};
    var area;
    for (var i=0; i<shp.length; i++) {
      area = geom.getPlanarPathArea(shp[i], arcs);
      if (area > 0) {
        o.cw++;
      } else if (area < 0) {
        o.ccw++;
      }
      o.area += area;
    }
    if (!arcs.isPlanar()) {
      o.sph_area = geom.getSphericalShapeArea(shp, arcs);
    }
    return o;
  }

  function selectFeatures(lyr, arcs, opts) {
    var n = getFeatureCount(lyr),
        ids = [],
        filter;
    if (!opts.expression) {
      stop("Missing a JS expression for selecting a feature");
    }
    filter = compileValueExpression(opts.expression, lyr, arcs);
    utils.repeat(n, function(id) {
      var result = filter(id);
      if (result === true) {
        ids.push(id);
      } else if (result !== false) {
        stop("Expression must return true or false");
      }
    });
    return ids;
  }

  function joinPolygonsViaMosaic(targetLyr, targetDataset, source, opts) {
    var mergedDataset = mergeLayersForOverlay([targetLyr], targetDataset, source, opts);
    var nodes = addIntersectionCuts(mergedDataset, opts);
    var sourceLyr = mergedDataset.layers.pop();
    targetDataset.arcs = mergedDataset.arcs;
    prepJoinLayers(targetLyr, sourceLyr);
    var mergedLyr = {
      geometry_type: 'polygon',
      shapes: targetLyr.shapes.concat(sourceLyr.shapes)
    };
    var mosaicIndex = new MosaicIndex(mergedLyr, nodes, {flat: false});

    var joinOpts = utils.extend({}, opts);
    var joinFunction = getPolygonToPolygonFunction(targetLyr, sourceLyr, mosaicIndex);
    var retn = joinTables(targetLyr.data, sourceLyr.data, joinFunction, joinOpts);

    if (opts.interpolate) {
      interpolateFieldsByArea(targetLyr, sourceLyr, mosaicIndex, opts);
    }
    return retn;
  }

  function interpolateFieldsByArea(destLyr, sourceLyr, mosaicIndex, opts) {
    var sourceFields = opts.interpolate;
    var getShapeArea = opts.planar ? geom.getPlanarShapeArea : geom.getShapeArea;
    var sourceLen = sourceLyr.shapes.length;
    var destLen = destLyr.shapes.length;
    var mosaicShapes = mosaicIndex.mosaic;
    var arcs = mosaicIndex.nodes.arcs;
    var mosaicRecords = mosaicShapes.map(function(shp, i) {
      var rec = {
        area: getShapeArea(shp, arcs),
        weight: 0,
        sourceId: -1
      };
      return rec;
    });

    sourceLyr.shapes.forEach(function(sourceShp, sourceId) {
      var tileIds = mosaicIndex.getTileIdsByShapeId(sourceId + destLen);
      var shapeArea = getShapeArea(sourceShp, arcs);
      var tileRec;
      for (var i=0; i<tileIds.length; i++) {
        tileRec = mosaicRecords[tileIds[i]];
        if (tileRec.sourceId > -1) {
          // overlap in source layer
          continue;
        }
        tileRec.weight = tileRec.area / shapeArea;
        tileRec.sourceId = sourceId;
      }
    });

    destLyr.data.getRecords().forEach(function(destRec, destId) {
      var sourceRecords = sourceLyr.data.getRecords();
      var tileIds = mosaicIndex.getTileIdsByShapeId(destId);
      var tileRecords = [], i, field;
      for (i=0; i<tileIds.length; i++) {
        tileRecords.push(mosaicRecords[tileIds[i]]);
      }
      for (i=0; i<sourceFields.length; i++) {
        field = sourceFields[i];
        destRec[field] = getInterpolatedValue(field, tileRecords, sourceRecords);
      }
    });
  }

  function getInterpolatedValue(field, tileRecords, sourceRecords) {
    var value = 0, tileRec, sourceRec;
    for (var i=0; i<tileRecords.length; i++) {
      tileRec = tileRecords[i];
      if (tileRec.sourceId == -1) continue;
      sourceRec = sourceRecords[tileRec.sourceId];
      value += tileRec.weight * sourceRec[field];
    }
    return value;
  }

  function getIdConversionFunction(offset, length) {
    return function (mergedIds) {
      var ids = [], id;
      for (var i=0; i<mergedIds.length; i++) {
        id = mergedIds[i] - offset;
        if (id >= 0 && id < length) ids.push(id);
      }
      return ids;
    };
  }

  // Returned function converts a target layer feature id to multiple source feature ids
  function getPolygonToPolygonFunction(targetLyr, srcLyr, mosaicIndex) {
    var mergedToSourceIds = getIdConversionFunction(targetLyr.shapes.length, srcLyr.shapes.length);
    return function(targId) {
      var tileIds = mosaicIndex.getTileIdsByShapeId(targId);
      var sourceIds = [], tmp;
      for (var i=0; i<tileIds.length; i++) {
        tmp = mosaicIndex.getSourceIdsByTileId(tileIds[i]);
        tmp = mergedToSourceIds(tmp);
        sourceIds = sourceIds.length > 0 ? sourceIds.concat(tmp) : tmp;
      }
      sourceIds = utils.uniq(sourceIds);
      return sourceIds;
    };
  }

  // Parse a formatted value in DMS DM or D to a numeric value. Returns NaN if unparsable.
  // Delimiters: degrees: D|d|°; minutes: '; seconds: "
  function parseDMS(str) {
    var rxp = /^([nsew+-]?)([0-9.]+)[d°]? ?([0-9.]*)['′]? ?([0-9.]*)["″]? ?([nsew]?)$/i;
    var match = rxp.exec(str.trim());
    var d = NaN;
    var deg, min, sec, inv;
    if (match) {
      deg = match[2] || '0';
      min = match[3] || '0';
      sec = match[4] || '0';
      d = (+deg) + (+min) / 60 + (+sec) / 3600;
      if (/[sw-]/i.test(match[1]) || /[sw]/i.test(match[5])) {
        d = -d;
      }
    }
    return d;
  }

  // Find ids of vertices with identical coordinates to x,y in an ArcCollection
  // Caveat: does not exclude vertices that are not visible at the
  //   current level of simplification.
  function findVertexIds(x, y, arcs) {
    var data = arcs.getVertexData(),
        xx = data.xx,
        yy = data.yy,
        ids = [];
    for (var i=0, n=xx.length; i<n; i++) {
      if (xx[i] == x && yy[i] == y) ids.push(i);
    }
    return ids;
  }

  function getVertexCoords(i, arcs) {
    var data = arcs.getVertexData();
    return [data.xx[i], data.yy[i]];
  }

  function vertexIsArcEnd(idx, arcs) {
    // Test whether the vertex at index @idx is the endpoint of an arc
    var data = arcs.getVertexData(),
        ii = data.ii,
        nn = data.nn;
    for (var j=0, n=ii.length; j<n; j++) {
      if (idx === ii[j] + nn[j] - 1) return true;
    }
    return false;
  }

  function vertexIsArcStart(idx, arcs) {
    var ii = arcs.getVertexData().ii;
    for (var j=0, n=ii.length; j<n; j++) {
      if (idx === ii[j]) return true;
    }
    return false;
  }

  function setVertexCoords(x, y, i, arcs) {
    var data = arcs.getVertexData();
    data.xx[i] = x;
    data.yy[i] = y;
  }

  function findNearestVertex(x, y, shp, arcs, spherical) {
    var calcLen = spherical ? geom.greatCircleDistance : geom.distance2D,
        minLen = Infinity,
        minX, minY, dist, iter;
    for (var i=0; i<shp.length; i++) {
      iter = arcs.getShapeIter(shp[i]);
      while (iter.hasNext()) {
        dist = calcLen(x, y, iter.x, iter.y);
        if (dist < minLen) {
          minLen = dist;
          minX = iter.x;
          minY = iter.y;
        }
      }
    }
    return minLen < Infinity ? {x: minX, y: minY} : null;
  }

  // Returns x,y coordinates of the vertex that is closest to the bbox center point
  //   (uses part with the largest-area bbox in )
  // TODO: explore other methods for replacing a polyline with a point.
  function polylineToPoint(shp, arcs, opts) {
    var spherical = !arcs.isPlanar();
    var part = !shp ? null : (shp.length == 1 ? shp[0] : findLongestPolylinePart(shp, arcs, spherical));
    if (!part) return null;
    var bbox = arcs.getSimpleShapeBounds(part);
    var p = findNearestVertex(bbox.centerX(), bbox.centerY(), [part], arcs, spherical);
    return p;
  }

  function findLongestPolylinePart(shp, arcs, spherical) {
    var maxLen = 0;
    var maxPart = null;
    shp.forEach(function(path) {
      var len = geom.calcPathLen(path, arcs, spherical);
      if (len > maxLen) {
        maxLen = len;
        maxPart = path;
      }
    });
    return maxPart;
  }

  cmd.createPointLayer = function(srcLyr, dataset, opts) {
    var destLyr = getOutputLayer(srcLyr, opts);
    var arcs = dataset.arcs;
    if (opts.intersections) {
      testIntersections(arcs);
      destLyr = srcLyr;
    } else if (opts.interpolated) {
      // TODO: consider making attributed points, including distance from origin
      destLyr.shapes = interpolatedPointsFromVertices(srcLyr, dataset, opts);
    } else if (opts.vertices) {
      destLyr.shapes = pointsFromVertices(srcLyr, arcs, opts);
    } else if (opts.vertices2) {
      destLyr.shapes = pointsFromVertices2(srcLyr, arcs, opts);
    } else if (opts.endpoints) {
      destLyr.shapes = pointsFromEndpoints(srcLyr, arcs, opts);
    } else if (opts.x || opts.y) {
      destLyr.shapes = pointsFromDataTable(srcLyr.data, opts);
    } else if (srcLyr.geometry_type == 'polygon') {
      destLyr.shapes = pointsFromPolygons(srcLyr, arcs, opts);
    } else if (srcLyr.geometry_type == 'polyline') {
      destLyr.shapes = pointsFromPolylines(srcLyr, arcs, opts);
    } else if (!srcLyr.geometry_type) {
      destLyr.shapes = pointsFromDataTableAuto(srcLyr.data);
    } else {
      stop("Expected a polygon or polyline layer");
    }
    destLyr.geometry_type = 'point';

    var nulls = destLyr.shapes.reduce(function(sum, shp) {
      if (!shp) sum++;
      return sum;
    }, 0);

    if (nulls > 0) {
      message(utils.format('%,d of %,d points are null', nulls, destLyr.shapes.length));
    }
    if (srcLyr.data) {
      destLyr.data = opts.no_replace ? srcLyr.data.clone() : srcLyr.data;
    }
    return destLyr;
  };

  // TODO: finish testing stripe count functions and remove
  function testIntersections(arcs) {
    var pointCount =  arcs.getFilteredPointCount(),
        arcCount = arcs.size(),
        segCount = pointCount - arcCount,
        stripes = calcSegmentIntersectionStripeCount2(arcs),
        stripes2 = Math.ceil(stripes / 10),
        stripes3 = stripes * 10,
        stripes4 = calcSegmentIntersectionStripeCount(arcs);

    console.log("points:", pointCount, "arcs:", arcCount, "segs:", segCount);
    [stripes2, stripes, stripes3, stripes4].forEach(function(n) {
      console.time(n + ' stripes');
      findSegmentIntersections(arcs, {stripes: n});
      console.timeEnd(n + ' stripes');
    });
  }

  function interpolatePoint2D(ax, ay, bx, by, k) {
    var j = 1 - k;
    return [ax * j + bx * k, ay * j + by * k];
  }

  function interpolatePointsAlongArc(ids, arcs, interval) {
    var iter = arcs.getShapeIter(ids);
    var distance = arcs.isPlanar() ? geom.distance2D : geom.greatCircleDistance;
    var coords = [];
    var elapsedDist = 0;
    var prevX, prevY;
    var segLen, k, p;
    if (iter.hasNext()) {
      coords.push([iter.x, iter.y]);
      prevX = iter.x;
      prevY = iter.y;
    }
    while (iter.hasNext()) {
      segLen = distance(prevX, prevY, iter.x, iter.y);
      while (elapsedDist + segLen >= interval) {
        k = (interval - elapsedDist) / segLen;
        // TODO: consider using great-arc distance for lat-long points
        p = interpolatePoint2D(prevX, prevY, iter.x, iter.y, k);
        elapsedDist = 0;
        coords.push(p);
        prevX = p[0];
        prevY = p[1];
        segLen = distance(prevX, prevY, iter.x, iter.y);
      }
      elapsedDist += segLen;
      prevX = iter.x;
      prevY = iter.y;
    }
    if (elapsedDist > 0) {
      coords.push([prevX, prevY]);
    }
    return coords;
  }

  function interpolatedPointsFromVertices(lyr, dataset, opts) {
    var interval = convertIntervalParam(opts.interval, getDatasetCRS(dataset));
    var coords;
    if (interval > 0 === false) stop("Invalid interpolation interval:", opts.interval);
    if (lyr.geometry_type != 'polyline') stop("Expected a polyline layer");
    return lyr.shapes.map(function(shp, shpId) {
      coords = [];
      if (shp) shp.forEach(nextPart);
      return coords.length > 0 ? coords : null;
    });
    function nextPart(ids) {
      var points = interpolatePointsAlongArc(ids, dataset.arcs, interval);
      coords = coords.concat(points);
    }
  }

  // Unique vertices within each feature
  function pointsFromVertices(lyr, arcs, opts) {
    var coords, index;
    if (lyr.geometry_type != "polygon" && lyr.geometry_type != 'polyline') {
      stop("Expected a polygon or polyline layer");
    }
    return lyr.shapes.map(function(shp, shpId) {
      coords = [];
      index = {}; // TODO: use more efficient index
      (shp || []).forEach(nextPart);
      return coords.length > 0 ? coords : null;
    });

    function addPoint(p) {
      var key = p.x + '~' + p.y;
      if (key in index === false) {
        index[key] = true;
        coords.push([p.x, p.y]);
      }
    }

    function nextPart(ids) {
      var iter = arcs.getShapeIter(ids);
      while (iter.hasNext()) {
        addPoint(iter);
      }
    }
  }

  // Simple conversion of path vertices to points (duplicate locations not removed)
  // TODO: Provide some way to rebuild paths from points (e.g. multipart features)
  function pointsFromVertices2(lyr, arcs, opts) {
    var coords;
    if (lyr.geometry_type != "polygon" && lyr.geometry_type != 'polyline') {
      stop("Expected a polygon or polyline layer");
    }
    return lyr.shapes.map(function(shp, shpId) {
      coords = [];
      (shp || []).forEach(nextPart);
      return coords.length > 0 ? coords : null;
    });

    function nextPart(ids) {
      var iter = arcs.getShapeIter(ids);
      while (iter.hasNext()) {
        coords.push([iter.x, iter.y]);
      }
    }
  }

  function pointsFromEndpoints(lyr, arcs) {
    var coords, index;
    if (lyr.geometry_type != "polygon" && lyr.geometry_type != 'polyline') {
      stop("Expected a polygon or polyline layer");
    }
    return lyr.shapes.map(function(shp, shpId) {
      coords = [];
      index = {}; // TODO: use more efficient index
      (shp || []).forEach(nextPart);
      return coords.length > 0 ? coords : null;
    });

    function addPoint(p) {
      var key = p.x + '~' + p.y;
      if (key in index === false) {
        index[key] = true;
        coords.push([p.x, p.y]);
      }
    }

    function nextPart(ids) {
      for (var i=0; i<ids.length; i++) {
        addPoint(arcs.getVertex(ids[i], 0));
        addPoint(arcs.getVertex(ids[i], -1));
      }
    }
  }

  function pointsFromPolylines(lyr, arcs, opts) {
    return lyr.shapes.map(function(shp) {
      var p = polylineToPoint(shp, arcs, opts);
      return p ? [[p.x, p.y]] : null;
    });
  }

  function pointsFromPolygons(lyr, arcs, opts) {
    var func = opts.inner ? findAnchorPoint : geom.getShapeCentroid;
    return lyr.shapes.map(function(shp) {
      var p = func(shp, arcs);
      return p ? [[p.x, p.y]] : null;
    });
  }

  function coordinateFromValue(val) {
    var tmp;
    if (utils.isFiniteNumber(val)) {
      return val;
    }
    // exclude empty string (not a valid coordinate, but would get coerced to 0)
    if (utils.isString(val) && val !== '') {
      tmp = +val;
      if (utils.isFiniteNumber(tmp)) {
        return tmp;
      }
      tmp = parseDMS(val); // try to parse as DMS
      if (utils.isFiniteNumber(tmp)) {
        return tmp;
      }
    }
    return NaN;
  }

  function findXField(fields) {
    var rxp = /^(lng|long?|longitude|x)$/i;
    return utils.find(fields, function(name) {
      return rxp.test(name);
    });
  }

  function findYField(fields) {
    var rxp = /^(lat|latitude|y)$/i;
    return utils.find(fields, function(name) {
      return rxp.test(name);
    });
  }

  function pointsFromDataTableAuto(data) {
    var fields = data ? data.getFields() : [];
    var opts = {
      x: findXField(fields),
      y: findYField(fields)
    };
    return pointsFromDataTable(data, opts);
  }

  function pointsFromDataTable(data, opts) {
    if (!data) stop("Layer is missing a data table");
    if (!opts.x || !opts.y || !data.fieldExists(opts.x) || !data.fieldExists(opts.y)) {
      stop("Missing x,y data fields");
    }

    return data.getRecords().map(function(rec) {
      var x = coordinateFromValue(rec[opts.x]),
          y = coordinateFromValue(rec[opts.y]);
      if (isNaN(x) || isNaN(y)) {
        return null;
      }
      return [[x, y]];
    });
  }

  var Points = /*#__PURE__*/Object.freeze({
    __proto__: null,
    pointsFromPolygons: pointsFromPolygons,
    coordinateFromValue: coordinateFromValue,
    findXField: findXField,
    findYField: findYField
  });

  function joinPolygonsViaPoints(targetLyr, targetDataset, source, opts) {

    var sourceLyr = source.layer,
        sourceDataset = source.dataset,
        pointLyr, retn;

    if (targetLyr.shapes.length > sourceLyr.shapes.length) {
      // convert target polygons to points, then join source data to points
      pointLyr = pointsFromPolygonsForJoin(targetLyr, targetDataset);
      retn = joinPolygonsToPoints(pointLyr, sourceLyr, sourceDataset.arcs, opts);
      targetLyr.data = pointLyr.data;
    } else {
      // convert source polygons to points, then join points to target polygons
      pointLyr = pointsFromPolygonsForJoin(sourceLyr, sourceDataset);
      retn = joinPointsToPolygons(targetLyr, targetDataset.arcs, pointLyr, opts);
    }
    return retn;
  }

  function pointsFromPolygonsForJoin(lyr, dataset) {
    // TODO use faster method to get inner points
    return {
      geometry_type: 'point',
      shapes: pointsFromPolygons(lyr, dataset.arcs, {inner: true}),
      data: lyr.data // TODO copy if needed
    };
  }

  function joinPolygonsToPolygons(targetLyr, targetDataset, source, opts) {
    if (opts.point_method) {
      return joinPolygonsViaPoints(targetLyr, targetDataset, source, opts);
    } else {
      return joinPolygonsViaMosaic(targetLyr, targetDataset, source, opts);
    }
  }

  cmd.join = function(targetLyr, dataset, src, opts) {
    var srcType, targetType, retn;
    if (!src || !src.layer.data || !src.dataset) {
      stop("Missing a joinable data source");
    }
    if (opts.keys) {
      // join using data in attribute fields
      if (opts.keys.length != 2) {
        stop("Expected two key fields: a target field and a source field");
      }
      retn = joinAttributesToFeatures(targetLyr, src.layer.data, opts);
    } else {
      // spatial join
      srcType = src.layer.geometry_type;
      targetType = targetLyr.geometry_type;
      if (srcType == 'point' && targetType == 'polygon') {
        retn = joinPointsToPolygons(targetLyr, dataset.arcs, src.layer, opts);
      } else if (srcType == 'polygon' && targetType == 'point') {
        retn = joinPolygonsToPoints(targetLyr, src.layer, src.dataset.arcs, opts);
      } else if (srcType == 'point' && targetType == 'point') {
        retn = joinPointsToPoints(targetLyr, src.layer, opts);
      } else if (srcType == 'polygon' && targetType == 'polygon') {
        retn = joinPolygonsToPolygons(targetLyr, dataset, src, opts);
      } else {
        stop(utils.format("Unable to join %s geometry to %s geometry",
            srcType || 'null', targetType || 'null'));
      }
    }

    if (retn.unmatched) {
      dataset.layers.push(retn.unmatched);
    }
    if (retn.unjoined) {
      dataset.layers.push(retn.unjoined);
    }
  };

  function joinAttributesToFeatures(lyr, srcTable, opts) {
    var keys = opts.keys,
        destKey = keys[0],
        srcKey = keys[1],
        destTable = lyr.data,
        joinFunction = getJoinByKey(destTable, destKey, srcTable, srcKey);
    validateFieldNames(keys);
    return joinTables(destTable, srcTable, joinFunction, opts);
  }

  // Return a function for translating a target id to an array of source ids based on values
  // of two key fields.
  function getJoinByKey(dest, destKey, src, srcKey) {
    var destRecords = dest.getRecords();
    var srcRecords = src.getRecords();
    var index = createTableIndex(srcRecords, srcKey);
    var srcType, destType;
    if (srcRecords.length == 0) {
      // allow empty external tables
      return function(i) {return [];};
    }
    requireDataField(src, srcKey, 'External table is missing a field named:');
    requireDataField(dest, destKey, 'Target layer is missing key field:');
    srcType = getColumnType(srcKey, src.getRecords());
    destType = getColumnType(destKey, destRecords);
    validateJoinFieldType(srcKey, srcType);
    validateJoinFieldType(destKey, destType);
    if (srcType != destType) {
      stop("Join keys have mismatched data types:", destType, "and", srcType);
    }
    return function(i) {
      var destRec = destRecords[i],
          val = destRec ? destRec[destKey] : null,
          retn = null;
      if (destRec && val in index) {
        retn = index[val];
        if (!Array.isArray(retn)) retn = [retn];
      }
      return retn;
    };
  }

  function validateJoinFieldType(field, type) {
    if (!type || type == 'object') {
      stop('[' + field + '] field has an unsupported data type. Expected string or number.');
    }
  }

  function createTableIndex(records, f) {
    var index = {}, rec, key;
    for (var i=0, n=records.length; i<n; i++) {
      rec = records[i];
      key = rec[f];
      if (key in index === false) {
        index[key] = i;
      } else if (Array.isArray(index[key])) {
        index[key].push(i);
      } else {
        index[key] = [index[key], i];
      }
    }
    return index;
  }

  var Join = /*#__PURE__*/Object.freeze({
    __proto__: null,
    joinAttributesToFeatures: joinAttributesToFeatures
  });

  cmd.mosaic = function(layers, dataset, opts) {
    var lyr = layers[0];
    if (!lyr || layers.length > 1) {
      stop('Command takes a single target layer');
    }
    requirePolygonLayer(lyr);
    var nodes = addIntersectionCuts(dataset, opts);
    var mosaicIndex = new MosaicIndex(lyr, nodes, {flat: false});
    var mosaicShapes = mosaicIndex.mosaic;
    var records2;

    var lyr2 = {
      name: 'name' in lyr ? lyr.name : undefined,
      shapes: mosaicShapes,
      geometry_type: 'polygon',
    };

    if (opts.calc) {
      records2 = recombineDataRecords(lyr.data.getRecords(), mosaicIndex.getSourceIdsByTileId, mosaicShapes.length, opts);
      lyr2.data = new DataTable(records2);
    }

    return [lyr2];
  };

  cmd.polygonGrid = function(targetLayers, targetDataset, opts) {
    requireProjectedDataset(targetDataset);
    var params = getGridParams(targetLayers, targetDataset, opts);
    var geojson;
    if (params.type == 'square') {
      geojson = getSquareGridGeoJSON(getSquareGridCoordinates(params));
    } else if (params.type == 'hex') {
      geojson = getHexGridGeoJSON(getHexGridCoordinates(params));
    } else if (params.type == 'hex2') {
      // use rotated grid
      geojson = getHexGridGeoJSON(getHexGridCoordinates(swapGridParams(params)));
      swapPolygonCoords(geojson);
    } else {
      stop('Unsupported grid type');
    }
    alignGridToBounds(geojson, params.bbox);
    var gridDataset = importGeoJSON(geojson, {});
    gridDataset.info = targetDataset.info; // copy CRS to grid dataset // TODO: improve
    buildTopology(gridDataset);
    gridDataset.layers[0].name = opts.name || 'grid';
    if (opts.debug) gridDataset.layers.push(cmd.pointGrid2(targetLayers, targetDataset, opts));
    return gridDataset;
  };

  // TODO: Update -point-grid command to use this function
  cmd.pointGrid2 = function(targetLayers, targetDataset, opts) {
    var params = getGridParams(targetLayers, targetDataset, opts);
    var geojson;
    if (params.type == 'square') {
      geojson = getPointGridGeoJSON(getSquareGridCoordinates(params));
    } else if (params.type == 'hex') {
      geojson = getPointGridGeoJSON(getHexGridCoordinates(params));
    } else {
      stop('Unsupported grid type');
    }
    alignGridToBounds(geojson, params.bbox);
    var gridDataset = importGeoJSON(geojson, {});
    if (opts.name) gridDataset.layers[0].name = opts.name;
    return gridDataset.layers[0];
  };

  function swapGridParams(params) {
    var bbox = params.bbox;
    return utils.defaults({
      width: params.height,
      height: params.width,
      bbox: [bbox[1], bbox[0], bbox[3], bbox[2]]
    }, params);
  }

  function swapPolygonCoords(json) {
    json.geometries.forEach(function(geom) {
      geom.coordinates[0] = geom.coordinates[0].map(function(p) {
        return [p[1], p[0]];
      });
    });
  }

  function getGridParams(layers, dataset, opts) {
    var params = {};
    var crs = dataset ? getDatasetCRS(dataset) : null;
    if (opts.interval) {
      params.interval = convertIntervalParam(opts.interval, crs);
    } else {
      stop('Missing required interval option');
    }
    if (opts.bbox) {
      params.bbox = opts.bbox;
    } else if (dataset) {
      dataset = utils.defaults({layers: layers}, dataset);
      params.bbox = getDatasetBounds(dataset).toArray();
    } else {
      stop('Missing grid bbox');
    }
    params.width = params.bbox[2] - params.bbox[0];
    params.height = params.bbox[3] - params.bbox[1];
    params.type = opts.type || 'square';
    return params;
  }

  function getPointGridGeoJSON(arr) {
    var geometries = [];
    arr.forEach(function(row) {
      row.forEach(function(xy) {
        geometries.push({
          type: 'Point',
          coordinates: xy
        });
      });
    });
    return {type: 'GeometryCollection', geometries: geometries};
  }

  function getHexGridGeoJSON(arr) {
    var geometries = [], a, b, c, d, e, f;
    var rows = arr.length - 2;
    var row, col, midOffset, evenRow;
    for (row = 0; row < rows; row++) {
      evenRow = row % 2 === 0;
      col = evenRow ? 0 : 2;
      midOffset = evenRow ? 0 : -1;
      for (; true; col += 3) {
        a = arr[row][col];
        b = arr[row + 1][col + midOffset]; // middle-left
        c = arr[row + 2][col];
        d = arr[row + 2][col + 1];
        e = arr[row + 1][col + 2 + midOffset]; // middle-right
        f = arr[row][col + 1];
        if (!d || !e) break; // end of row
        geometries.push({
          type: 'Polygon',
          coordinates: [[a, b, c, d, e, f, a]]
        });
      }
    }
    return {type: 'GeometryCollection', geometries: geometries};
  }

  function getSquareGridGeoJSON(arr) {
    var geometries = [], a, b, c, d;
    for (var row = 0, rows = arr.length - 1; row < rows; row++) {
      for (var col = 0, cols = arr[row].length - 1; col < cols; col++) {
        a = arr[row][col];
        b = arr[row + 1][col];
        c = arr[row + 1][col + 1];
        d = arr[row][col + 1];
        geometries.push({
          type: 'Polygon',
          coordinates: [[a, b, c, d, a]]
        });
      }
    }
    return {type: 'GeometryCollection', geometries: geometries};
  }

  function getHexGridCoordinates(params) {
    var xInterval = params.interval;
    var yInterval = Math.sqrt(3) * xInterval / 2;
    var xOddRowShift = xInterval / 2;
    var xmax = params.width + xInterval * 2; // width of hexagon is 2 * xInterval
    var ymax = params.height + yInterval * 2; // height of hexagon is 2 * yInterval
    var y = -yInterval;
    var rows = [];
    var x, row;
    while (y < ymax) {
      x = rows.length % 2 === 0 ? 0 : -xOddRowShift;
      row = [];
      rows.push(row);
      while (x < xmax) {
        row.push([x, y]);
        x += xInterval;
      }
      y += yInterval;
    }
    return rows;
  }

  function getSquareGridCoordinates(params) {
    var y = 0, rows = [],
        interval = params.interval,
        xmax = params.width + interval,
        ymax = params.height + interval,
        x, row;
    while (y < ymax) {
      x = 0;
      row = [];
      rows.push(row);
      while (x < xmax) {
        row.push([x, y]);
        x += interval;
      }
      y += interval;
    }
    return rows;
  }

  function alignGridToBounds(geojson, bbox) {
    var geojsonBbox = findPolygonGridBounds(geojson);
    var dx = (bbox[2] + bbox[0]) / 2 - (geojsonBbox[2] + geojsonBbox[0]) / 2;
    var dy = (bbox[3] + bbox[1]) / 2 - (geojsonBbox[3] + geojsonBbox[1]) / 2;
    shiftPolygonGrid(geojson, dx, dy);
  }

  function shiftPolygonGrid(geojson, dx, dy) {
    geojson.geometries.forEach(function(geom) {
      if (geom.type == 'Point') {
        geom.coordinates = [geom.coordinates[0] + dx, geom.coordinates[1] + dy];
      }
      if (geom.type == 'Polygon') {
        geom.coordinates[0] = geom.coordinates[0].map(function(xy) {
          return [xy[0] + dx, xy[1] + dy];
        });
      }
    });
  }

  function findPolygonGridBounds(geojson) {
    var boundsFunctions = {
      Point: pointBounds,
      Polygon: polygonBounds
    };
    return geojson.geometries.reduce(function(memo, geom) {
      var getBounds = boundsFunctions[geom.type];
      var bbox = getBounds(geom);
      if (!memo) return bbox;
      updateBounds(memo, bbox[0], bbox[1]);
      updateBounds(memo, bbox[2], bbox[3]);
      return memo;
    }, null);

    function polygonBounds(geom) {
      return geom.coordinates[0].reduce(function(bbox, p) {
        if (!bbox) return [p[0], p[1], p[0], p[1]];
        updateBounds(bbox, p[0], p[1]);
        return bbox;
      }, null);
    }

    function pointBounds(geom) {
      var p = geom.coordinates;
      return [p[0], p[1], p[0], p[1]];
    }

    function updateBounds(bbox, x, y) {
      if (x < bbox[0]) bbox[0] = x;
      if (y < bbox[1]) bbox[1] = y;
      if (x > bbox[2]) bbox[2] = x;
      if (y > bbox[3]) bbox[3] = y;
    }
  }

  cmd.pointGrid = function(dataset, opts) {
    var gridOpts = getPointGridParams(dataset, opts);
    return createPointGridLayer(createPointGrid(gridOpts), opts);
  };

  function getPointGridParams(dataset, opts) {
    var params = {};
    var crs = dataset ? getDatasetCRS(dataset) : null;
    if (opts.interval) {
      params.interval = convertIntervalParam(opts.interval, crs);
    } else if (opts.rows > 0 && opts.cols > 0) {
      params.rows = opts.rows;
      params.cols = opts.cols;
    } else {
      // error, handled later
    }
    if (opts.bbox) {
      params.bbox = opts.bbox;
    } else if (dataset) {
      params.bbox = getDatasetBounds(dataset).toArray();
    } else {
      params.bbox = [-180, -90, 180, 90];
    }
    return params;
  }

  function createPointGridLayer(rows, opts) {
    var points = [], lyr;
    rows.forEach(function(row, rowId) {
      for (var i=0; i<row.length; i++) {
        points.push([row[i]]);
      }
    });
    lyr = {
      geometry_type: 'point',
      shapes: points
    };
    if (opts.name) lyr.name = opts.name;
    return lyr;
  }


  // Returns a grid of [x,y] points so that point(c,r) == arr[r][c]
  function createPointGrid(opts) {
    var bbox = opts.bbox,
        w = bbox[2] - bbox[0],
        h = bbox[3] - bbox[1],
        rowsArr = [], rowArr,
        cols, rows, dx, dy, x0, y0, x, y;

    if (opts.interval > 0) {
      dx = opts.interval;
      dy = opts.interval;
      cols = Math.round(w / dx) - 1;
      rows = Math.round(h / dy) - 1;
      x0 = bbox[0] + (w - cols * dx) / 2;
      y0 = bbox[1] + (h - rows * dy) / 2;
    } else if (opts.rows > 0 && opts.cols > 0) {
      cols = opts.cols;
      rows = opts.rows;
      dx = (w / cols);
      dy = (h / rows);
      x0 = bbox[0] + dx / 2;
      y0 = bbox[1] + dy / 2;
    }

    if (dx > 0 === false || dy > 0 === false) {
      stop('Invalid grid parameters');
    }

    y = y0;
    while (y <= bbox[3]) {
      x = x0;
      rowsArr.push(rowArr = []);
      while (x <= bbox[2]) {
        rowArr.push([x, y]);
        x += dx;
      }
      y += dy;
    }
    return rowsArr;
  }

  function closeUndershoots(lyr, dataset, opts) {
    var maxGapLen = opts.gap_tolerance ? convertIntervalParam(opts.gap_tolerance, getDatasetCRS(dataset)) : 0;
    var arcs = dataset.arcs;
    var arcFilter = getArcPresenceTest(lyr.shapes, arcs);
    var nodes = new NodeCollection(dataset.arcs, arcFilter);
    var dangles = findPotentialUndershoots(nodes, maxGapLen);
    if (dangles.length === 0) return nodes;
    var arcShapes = arcsToShapes(arcs, arcFilter);
    var index = new PathIndex(arcShapes, arcs);
    var extensions = dangles.reduce(function(memo, dangle) {
      var candidates = index.findPointEnclosureCandidates(dangle.point, maxGapLen);
      var nearestHit = findUndershootTarget(dangle, candidates, arcs, maxGapLen);
      if (nearestHit) {
        memo.push(getArcExtension(nearestHit, dangle.arc, arcs));
      }
      return memo;
    }, []);

    // TODO: consider alternative: append small patch arcs to paths instead of shifting endpoints
    dataset.arcs = insertArcExtensions(arcs, extensions);
    return addIntersectionCuts(dataset, {});
  }

  // Return information about an arc that @endpoint can connect with to close a gap
  // @candidates: array of ids of possible target arcs
  function findUndershootTarget(endpoint, candidates, arcs, maxGapLen) {
    var absId = absArcId(endpoint.arc);
    var target = null;
    candidates.forEach(function(candId) {
      var hit;
      if (candId == absId) return; // ignore self-intersections
      hit = geom.getPointToPathInfo(endpoint.point[0], endpoint.point[1], [candId], arcs);
      if (hit && hit.distance <= maxGapLen && (!target || hit.distance < target.distance)) {
        target = hit;
      }
    });
    return target;
  }


  // Create a polyline shape for each arc in an ArcCollection
  function arcsToShapes(arcs, filter) {
    var shapes = [];
    for (var i=0, n=arcs.size(); i<n; i++) {
      shapes.push(filter(i) ? [[i]] : null);
    }
    return shapes;
  }

  // Find unconnected (dangling) arcs that don't look like overshoots
  function findPotentialUndershoots(nodes, maxLen) {
    return nodes.findDanglingEndpoints().filter(function(o) {
      return geom.calcPathLen([o.arc], nodes.arcs) > maxLen;
    });
  }

  function insertArcExtensions(arcs, extensions) {
    var data = arcs.getVertexData();
    extensions.forEach(function(obj) {
      var i = arcs.indexOfVertex(obj.arc, -1);
      data.xx[i] = obj.point[0];
      data.yy[i] = obj.point[1];
    });

    // re-index arc bounds
    arcs.updateVertexData(data.nn, data.xx, data.yy, data.zz);
    return arcs;
  }

  function chooseCloserPoint(p, a, b) {
    return geom.distance2D(p[0], p[1], a[0], a[1]) < geom.distance2D(p[0], p[1], b[0], b[1]) ? a : b;
  }

  function pointIsEndpoint(p, a, b) {
    return p[0] == a[0] && p[1] == a[1] || p[0] == b[0] && p[1] == b[1];
  }

  // move point <b> a bit farther away from <a>
  function addTinyOvershoot(a, b) {
    var dist = geom.distance2D(a[0], a[1], b[0], b[1]);
    var k = (dist + 1e-6) / dist;
    return [a[0] + k * (b[0] - a[0]), a[1] + k * (b[1] - a[1])];
  }

  function getArcExtension(hit, arcId, arcs) {
    var v0 = arcs.getVertex(arcId, -1),
        endPtOld = [v0.x, v0.y],
        v1 = arcs.getVertex(arcId, -2),
        p1 = [v1.x, v1.y],
        s1 = hit.segment[0],
        s2 = hit.segment[1],
        endPtNew = geom.findClosestPointOnSeg(endPtOld[0], endPtOld[1], s1[0], s1[1], s2[0], s2[1]);
    if (!pointIsEndpoint(endPtNew, s1, s2)) {
      // add small overshoot if new endpoint is not a vertex, to make sure intersection
      // is correctly detected later
      endPtNew = addTinyOvershoot(p1, endPtNew);
      // handle floating point rounding errors by snapping to a segment endpoint
      if (!geom.segmentIntersection(p1[0], p1[1], endPtNew[0], endPtNew[1], s1[0], s1[1], s2[0], s2[1])) {
        endPtNew = chooseCloserPoint(p1, s1, s2);
      }
      // TODO: test edge cases; moving the endpoint of a dangling arc could create
      //   invalid geometry, e.g. duplicate points
    }
    return {
      arc: arcId,
      point: endPtNew
    };
  }

  cmd.polygons = function(layers, dataset, opts) {
    layers.forEach(requirePolylineLayer);
    // use larger-than-default snapping in addIntersectionCuts()
    // (kludge, snaps together some almost-identical pairs of lines in ne_10m_land_ocean_seams.shp)
    // if (opts.gap_tolerance) {
      //opts = utils.defaults({snap_interval: opts.gap_tolerance * 0.1}, opts);
    // }
    addIntersectionCuts(dataset, opts);
    return layers.map(function(lyr) {
      if (lyr.geometry_type != 'polyline') stop("Expected a polyline layer");
      if (opts.from_rings) {
        return createPolygonLayerFromRings(lyr, dataset);
      }
      return createPolygonLayer(lyr, dataset, opts);
    });
  };

  // Convert a polyline layer of rings to a polygon layer
  function createPolygonLayerFromRings(lyr, dataset) {
    var arcs = dataset.arcs;
    var openCount = 0;
    editShapes(lyr.shapes, function(part) {
      if (geom.pathIsClosed(part, arcs)) {
        return part;
      }
      openCount++;
      return null;
    });
    if (openCount > 0) {
      message('Removed', openCount, 'open ' + (openCount == 1 ? 'ring' : 'rings'));
    }
    lyr.geometry_type = 'polygon';
    rewindPolygons(lyr, arcs);
    return lyr;
  }

  function createPolygonLayer(lyr, dataset, opts) {
    var nodes = closeUndershoots(lyr, dataset, opts);
    var data = buildPolygonMosaic(nodes);
    return {
      geometry_type: 'polygon',
      name: lyr.name,
      shapes: data.mosaic
    };
  }

  // Create rectangles around each feature in a layer
  cmd.rectangles = function(targetLyr, targetDataset, opts) {
    if (!layerHasGeometry(targetLyr)) {
      stop("Layer is missing geometric shapes");
    }
    var crs = getDatasetCRS(targetDataset);
    var records = targetLyr.data ? targetLyr.data.getRecords() : null;
    var geometries = targetLyr.shapes.map(function(shp) {
      var bounds = targetLyr.geometryType == 'point' ?
        getPointFeatureBounds(shp) : targetDataset.arcs.getMultiShapeBounds(shp);
      bounds = applyRectangleOptions(bounds, crs, opts);
      if (!bounds) return null;
      return convertBboxToGeoJSON(bounds.toArray(), opts);
    });
    var geojson = {
      type: 'FeatureCollection',
      features: geometries.map(function(geom, i) {
        var rec = records && records[i] || null;
        if (rec && opts.no_replace) {
          rec = utils.extend({}, rec); // make a copy
        }
        return {
          type: 'Feature',
          properties: rec,
          geometry: geom
        };
      })
    };
    var dataset = importGeoJSON(geojson, {});
    var outputLayers = mergeDatasetsIntoDataset(targetDataset, [dataset]);
    if (!opts.no_replace) {
      outputLayers[0].name = targetLyr.name || outputLayers[0].name;
    }
    return outputLayers;
  };

  // Create rectangles around one or more target layers
  //
  cmd.rectangle2 = function(target, opts) {
    var datasets = target.layers.map(function(lyr) {
      var dataset = cmd.rectangle({layer: lyr, dataset: target.dataset}, opts);
      if (!opts.no_replace) {
        dataset.layers[0].name = lyr.name || dataset.layers[0].name;
      }
      return dataset;
    });
    return mergeDatasetsIntoDataset(target.dataset, datasets);
  };

  cmd.rectangle = function(source, opts) {
    var offsets, bounds, crs, coords, sourceInfo;
    if (source) {
      bounds = getLayerBounds(source.layer, source.dataset.arcs);
      sourceInfo = source.dataset.info;
      crs = getDatasetCRS(source.dataset);
    } else if (opts.bbox) {
      bounds = new Bounds(opts.bbox);
      crs = getCRS('wgs84');
    }
    bounds = bounds && applyRectangleOptions(bounds, crs, opts);
    if (!bounds || !bounds.hasBounds()) {
      stop('Missing rectangle extent');
    }
    var geojson = convertBboxToGeoJSON(bounds.toArray(), opts);
    var dataset = importGeoJSON(geojson, {});
    dataset.layers[0].name = opts.name || 'rectangle';
    if (sourceInfo) {
      setDatasetCRS(dataset, sourceInfo);
    }
    return dataset;
  };

  function applyRectangleOptions(bounds, crs, opts) {
    var isGeoBox = probablyDecimalDegreeBounds(bounds);
    if (opts.offset) {
      bounds = applyBoundsOffset(opts.offset, bounds, crs);
    }
    if (bounds.area() > 0 === false) return null;
    if (opts.aspect_ratio) {
      bounds = applyAspectRatio(opts.aspect_ratio, bounds);
    }
    if (isGeoBox) {
      bounds = clampToWorldBounds(bounds);
    }
    return bounds;
  }

  // opt: aspect ratio as a single number or a range (e.g. "1,2");
  function applyAspectRatio(opt, bounds) {
    var range = String(opt).split(',').map(parseFloat),
      aspectRatio = bounds.width() / bounds.height(),
      min, max; // min is height limit, max is width limit
    if (range.length == 1) {
      range.push(range[0]);
    } else if (range[0] > range[1]) {
      range.reverse();
    }
    min = range[0];
    max = range[1];
    if (!min && !max) return bounds;
    if (!min) min = -Infinity;
    if (!max) max = Infinity;
    if (aspectRatio < min) {
      bounds.fillOut(min);
    } else if (aspectRatio > max) {
      bounds.fillOut(max);
    }
    return bounds;
  }

  function applyBoundsOffset(offsetOpt, bounds, crs) {
    var offsets = convertFourSides(offsetOpt, crs, bounds);
    bounds.padBounds(offsets[0], offsets[1], offsets[2], offsets[3]);
    return bounds;
  }

  function convertBboxToGeoJSON(bbox, opts) {
    var coords = [[bbox[0], bbox[1]], [bbox[0], bbox[3]], [bbox[2], bbox[3]],
        [bbox[2], bbox[1]], [bbox[0], bbox[1]]];
    return {
      type: 'Polygon',
      coordinates: [coords]
    };
  }

  var Rectangle = /*#__PURE__*/Object.freeze({
    __proto__: null,
    applyAspectRatio: applyAspectRatio
  });

  cmd.renameLayers = function(layers, names) {
    var nameCount = names && names.length || 0;
    var name = '';
    var suffix = '';
    layers.forEach(function(lyr, i) {
      if (i < nameCount) {
        name = names[i];
      }
      if (name && nameCount < layers.length && (i >= nameCount - 1)) {
        suffix = (suffix || 0) + 1;
      }
      lyr.name = name + suffix;
    });
  };

  // Parse an array or a string of command line tokens into an array of
  // command objects.
  function parseCommands(tokens) {
    if (Array.isArray(tokens) && utils.isObject(tokens[0])) {
      // argv seems to contain parsed commands already... make a copy
      return tokens.map(function(cmd) {
        return {name: cmd.name, options: Object.assign({}, cmd.options)};
      });
    }
    if (utils.isString(tokens)) {
      tokens = splitShellTokens(tokens);
    }
    return getOptionParser().parseArgv(tokens);
  }

  function standardizeConsoleCommands(raw) {
    var str = raw.replace(/^mapshaper\b/, '').trim();
    if (/^[a-z]/.test(str)) {
      // add hyphen prefix to bare command
      str = '-' + str;
    }
    return str;
  }

  // Parse a command line string for the browser console
  function parseConsoleCommands(raw) {
    var blocked = ['i', 'include', 'require', 'external'];
    var str = standardizeConsoleCommands(raw);
    var parsed;
    parsed = parseCommands(str);
    parsed.forEach(function(cmd) {
      var i = blocked.indexOf(cmd.name);
      if (i > -1) {
        stop("The -" + blocked[i] + " command cannot be run in the browser");
      }
    });
    return parsed;
  }

  var ParseCommands = /*#__PURE__*/Object.freeze({
    __proto__: null,
    parseCommands: parseCommands,
    standardizeConsoleCommands: standardizeConsoleCommands,
    parseConsoleCommands: parseConsoleCommands
  });

  cmd.run = function(targets, catalog, opts, cb) {
    var commandStr, commands;
    if (opts.include) {
      cmd.include({file: opts.include});
    }
    if (!opts.commands) {
      stop("Missing commands parameter");
    }
    commandStr = runGlobalExpression(opts.commands, targets);
    if (commandStr) {
      commands = parseCommands(commandStr);
      runParsedCommands(commands, catalog, cb);
    } else {
      cb(null);
    }
  };

  function runGlobalExpression(expression, targets) {
    var ctx = getBaseContext();
    var output, targetData;
    // TODO: throw an informative error if target is used when there are multiple targets
    if (targets.length == 1) {
      targetData = getRunCommandData(targets[0]);
      Object.defineProperty(ctx, 'target', {value: targetData});
    }
    utils.extend(ctx, getStateVar('defs'));
    try {
      output = Function('ctx', 'with(ctx) {return (' + expression + ');}').call({}, ctx);
    } catch(e) {
      stop(e.name, 'in JS source:', e.message);
    }
    return output;
  }


  function getRunCommandData(target) {
    var lyr = target.layers[0];
    var data = getLayerData(lyr, target.dataset);
    data.layer = lyr;
    data.dataset = target.dataset;
    return data;
  }

  cmd.require = function(targets, opts) {
    var defs = getStateVar('defs');
    var moduleFile, moduleName, mod;
    if (!opts.module) {
      stop("Missing module name or path to module");
    }
    if (cli.isFile(opts.module)) {
      moduleFile = opts.module;
    } else if (cli.isFile(opts.module + '.js')) {
      moduleFile = opts.module + '.js';
    } else {
      moduleName = opts.module;
    }
    if (moduleFile) {
      moduleFile = require('path').join(process.cwd(), moduleFile);
    }
    try {
      mod = require(moduleFile || moduleName);
    } catch(e) {
      stop(e);
    }
    if (moduleName || opts.alias) {
      defs[opts.alias || moduleName] = mod;
    } else {
      Object.assign(defs, mod);
    }
    if (opts.init) {
      runGlobalExpression(opts.init, targets);
    }
  };

  symbolRenderers.circle = function(d, x, y) {
    var o = importPoint([x, y], d, {});
    applyStyleAttributes(o, 'Point', d);
    return [o];
  };

  symbolRenderers.label = function(d, x, y) {
    var o = importStyledLabel(d, [x, y]);
    return [o];
  };

  symbolRenderers.image = function(d, x, y) {
    var w = d.width || 20,
        h = d.height || 20;
    var o = {
      tag: 'image',
      properties: {
        width: w,
        height: h,
        x: x - w / 2,
        y: y - h / 2,
        href: d.href || ''
      }
    };
    return [o];
  };

  symbolRenderers.square = function(d, x, y) {
    var o = importPoint([x, y], d, {point_symbol: 'square'});
    applyStyleAttributes(o, 'Point', d);
    return [o];
  };

  symbolRenderers.line = function(d, x, y) {
    var coords, o;
    coords = [[x, y], [x + (d.dx || 0), y + (d.dy || 0)]];
    o = importLineString(coords);
    applyStyleAttributes(o, 'LineString', d);
    return [o];
  };

  symbolRenderers.polyline = function(d, x, y) {
    var coords = d.coordinates || [];
    var o = importMultiLineString(coords);
    applyStyleAttributes(o, 'LineString', d);
    return [o];
  };

  symbolRenderers.group = function(d, x, y) {
    return (d.parts || []).reduce(function(memo, o) {
      var sym = renderSymbol(o, x, y);
      if (d.chained) {
        x += (o.dx || 0);
        y += (o.dy || 0);
      }
      return memo.concat(sym);
    }, []);
  };

  cmd.scalebar = function(catalog, opts) {
    var frame = findFrameDataset(catalog);
    var obj, lyr;
    if (!frame) {
      stop('Missing a map frame');
    }
    obj = utils.defaults({type: 'scalebar'}, opts);
    lyr = {
      name: opts.name || 'scalebar',
      data: new DataTable([obj])
    };
    frame.layers.push(lyr);
  };

  // TODO: generalize to other kinds of furniture as they are developed
  function getScalebarPosition(d) {
    var opts = { // defaults
      valign: 'top',
      halign: 'left',
      voffs: 10,
      hoffs: 10
    };
    if (+d.left > 0) {
      opts.hoffs = +d.left;
    }
    if (+d.top > 0) {
      opts.voffs = +d.top;
    }
    if (+d.right > 0) {
      opts.hoffs = +d.right;
      opts.halign = 'right';
    }
    if (+d.bottom > 0) {
      opts.voffs = +d.bottom;
      opts.valign = 'bottom';
    }
    return opts;
  }

  furnitureRenderers.scalebar = function(d, frame) {
    var pos = getScalebarPosition(d);
    var metersPerPx = getMapFrameMetersPerPixel(frame);
    var label = d.label_text || getAutoScalebarLabel(frame.width, metersPerPx);
    var scalebarKm = parseScalebarLabelToKm(label);
    var barHeight = 3;
    var labelOffs = 4;
    var fontSize = +d.font_size || 13;
    var width = Math.round(scalebarKm / metersPerPx * 1000);
    var height = Math.round(barHeight + labelOffs + fontSize * 0.8);
    var labelPos = d.label_position == 'top' ? 'top' : 'bottom';
    var anchorX = pos.halign == 'left' ? 0 : width;
    var anchorY = barHeight + labelOffs;
    var dx = pos.halign == 'right' ? frame.width - width - pos.hoffs : pos.hoffs;
    var dy = pos.valign == 'bottom' ? frame.height - height - pos.voffs : pos.voffs;

    if (labelPos == 'top') {
      anchorY = -labelOffs;
      dy += Math.round(labelOffs + fontSize * 0.8);
    }

    if (width > 0 === false) {
      stop("Null scalebar length");
    }
    var barObj = {
      tag: 'rect',
      properties: {
        fill: 'black',
        x: 0,
        y: 0,
        width: width,
        height: barHeight
      }
    };
    var labelOpts = {
        'label-text': label,
        'font-size': fontSize,
        'text-anchor': pos.halign == 'left' ? 'start': 'end',
        'dominant-baseline': labelPos == 'top' ? 'auto' : 'hanging'
        //// 'dominant-baseline': labelPos == 'top' ? 'text-after-edge' : 'text-before-edge'
        // 'text-after-edge' is buggy in Safari and unsupported by Illustrator,
        // so I'm using 'hanging' and 'auto', which seem to be well supported.
        // downside: requires a kludgy multiplier to calculate scalebar height (see above)
      };
    var labelObj = symbolRenderers.label(labelOpts, anchorX, anchorY)[0];
    var g = {
      tag: 'g',
      children: [barObj, labelObj],
      properties: {
        transform: 'translate(' + dx + ' ' + dy + ')'
      }
    };
    return [g];
  };

  function getAutoScalebarLabel(mapWidth, metersPerPx) {
    var minWidth = 100; // TODO: vary min size based on map width
    var minKm = metersPerPx * minWidth / 1000;
    var options = ('1/8 1/5 1/4 1/2 1 1.5 2 3 4 5 8 10 12 15 20 25 30 40 50 75 ' +
      '100 150 200 250 300 350 400 500 750 1,000 1,200 1,500 2,000 ' +
      '2,500 3,000 4,000 5,000').split(' ');
    return options.reduce(function(memo, str) {
      if (memo) return memo;
      var label = formatDistanceLabelAsMiles(str);
      if (parseScalebarLabelToKm(label) > minKm) {
         return label;
      }
    }, null) || '';
  }

  function formatDistanceLabelAsMiles(str) {
    var num = parseScalebarNumber(str);
    return str + (num > 1 ? ' MILES' : ' MILE');
  }

  // See test/mapshaper-scalebar.js for examples of supported formats
  function parseScalebarLabelToKm(str) {
    var units = parseScalebarUnits(str);
    var value = parseScalebarNumber(str);
    if (!units || !value) return NaN;
    return units == 'mile' ? value * 1.60934 : value;
  }

  function parseScalebarUnits(str) {
    var isMiles = /miles?$/.test(str.toLowerCase());
    var isKm = /(km|kilometers?|kilometres?)$/.test(str.toLowerCase());
    return isMiles && 'mile' || isKm && 'km' || '';
  }

  function parseScalebarNumber(str) {
    var fractionRxp = /^([0-9]+) ?\/ ?([0-9]+)/;
    var match, value;
    str = str.replace(/[\s]/g, '').replace(/,/g, '');
    if (fractionRxp.test(str)) {
      match = fractionRxp.exec(str);
      value = +match[1] / +match[2];
    } else {
      value = parseFloat(str);
    }
    return value > 0 && value < Infinity ? value : NaN;
  }

  var Scalebar = /*#__PURE__*/Object.freeze({
    __proto__: null,
    formatDistanceLabelAsMiles: formatDistanceLabelAsMiles,
    parseScalebarLabelToKm: parseScalebarLabelToKm
  });

  function calcSimplifyStats(arcs, use3D) {
    var distSq = use3D ? pointSegGeoDistSq : geom.pointSegDistSq,
        calcAngle = use3D ? geom.signedAngleSph : geom.signedAngle,
        removed = 0,
        retained = 0,
        collapsedRings = 0,
        max = 0,
        sum = 0,
        sumSq = 0,
        iprev = -1,
        jprev = -1,
        measures = [],
        angles = [],
        zz = arcs.getVertexData().zz,
        count, stats;

    arcs.forEachSegment(function(i, j, xx, yy) {
      var ax, ay, bx, by, d2, d, skipped, angle, tmp;
      ax = xx[i];
      ay = yy[i];
      bx = xx[j];
      by = yy[j];

      if (i == jprev) {
        angle = calcAngle(xx[iprev], yy[iprev], ax, ay, bx, by);
        if (angle > Math.PI) angle = 2 * Math.PI - angle;
        if (!isNaN(angle)) {
          angles.push(angle * 180 / Math.PI);
        }
      }
      iprev = i;
      jprev = j;

      if (zz[i] < Infinity) {
        retained++;
      }
      skipped = j - i - 1;
      if (skipped < 1) return;
      removed += skipped;

      if (ax == bx && ay == by) {
        collapsedRings++;
      } else {
        d2 = 0;
        while (++i < j) {
          tmp = distSq(xx[i], yy[i], ax, ay, bx, by);
          d2 = Math.max(d2, tmp);
        }
        sumSq += d2;
        d = Math.sqrt(d2);
        sum += d;
        measures.push(d);
        max = Math.max(max, d);
      }
    });

    function pointSegGeoDistSq(alng, alat, blng, blat, clng, clat) {
      var xx = [], yy = [], zz = [];
      geom.convLngLatToSph([alng, blng, clng], [alat, blat, clat], xx, yy, zz);
      return geom.pointSegDistSq3D(xx[0], yy[0], zz[0], xx[1], yy[1], zz[1],
            xx[2], yy[2], zz[2]);
    }

    stats = {
      angleMean: 0,
      displacementMean: 0,
      displacementMax: max,
      collapsedRings: collapsedRings,
      removed: removed,
      retained: retained,
      uniqueCount: countUniqueVertices(arcs),
      removableCount: removed + retained
    };

    if (angles.length > 0) {
      // stats.medianAngle = utils.findMedian(angles);
      stats.angleMean = utils.sum(angles) / angles.length;
      // stats.lt30 = utils.findRankByValue(angles, 30) / angles.length * 100;
      // stats.lt45 = utils.findRankByValue(angles, 45) / angles.length * 100;
      // stats.lt60 = utils.findRankByValue(angles, 60) / angles.length * 100;
      // stats.lt90 = utils.findRankByValue(angles, 90) / angles.length * 100;
      // stats.lt120 = utils.findRankByValue(angles, 120) / angles.length * 100;
      // stats.lt135 = utils.findRankByValue(angles, 135) / angles.length * 100;
      stats.angleQuartiles = [
        utils.findValueByPct(angles, 0.75),
        utils.findValueByPct(angles, 0.5),
        utils.findValueByPct(angles, 0.25)
      ];
    }

    if (measures.length > 0) {
      stats.displacementMean = sum / measures.length;
      // stats.median = utils.findMedian(measures);
      // stats.stdDev = Math.sqrt(sumSq / measures.length);
      stats.displacementQuartiles = [
        utils.findValueByPct(measures, 0.75),
        utils.findValueByPct(measures, 0.5),
        utils.findValueByPct(measures, 0.25)
      ];
    }
    return stats;
  }

  function countUniqueVertices(arcs) {
    // TODO: exclude any zero-length arcs
    var endpoints = arcs.size() * 2;
    var nodes = new NodeCollection(arcs).size();
    return arcs.getPointCount() - endpoints + nodes;
  }

  // A minheap data structure used for computing Visvalingam simplification data.
  //
  function Heap() {
    var heapBuf = utils.expandoBuffer(Int32Array),
        indexBuf = utils.expandoBuffer(Int32Array),
        itemsInHeap = 0,
        dataArr,
        heapArr,
        indexArr;

    this.init = function(values) {
      var i;
      dataArr = values;
      itemsInHeap = values.length;
      heapArr = heapBuf(itemsInHeap);
      indexArr = indexBuf(itemsInHeap);
      for (i=0; i<itemsInHeap; i++) {
        insertValue(i, i);
      }
      // place non-leaf items
      for (i=(itemsInHeap-2) >> 1; i >= 0; i--) {
        downHeap(i);
      }
    };

    this.size = function() {
      return itemsInHeap;
    };

    // Update a single value and re-heap
    this.updateValue = function(valIdx, val) {
      var heapIdx = indexArr[valIdx];
      dataArr[valIdx] = val;
      if (!(heapIdx >= 0 && heapIdx < itemsInHeap)) {
        error("Out-of-range heap index.");
      }
      downHeap(upHeap(heapIdx));
    };

    this.popValue = function() {
      return dataArr[this.pop()];
    };

    // Return the idx of the lowest-value item in the heap
    this.pop = function() {
      var popIdx;
      if (itemsInHeap <= 0) {
        error("Tried to pop from an empty heap.");
      }
      popIdx = heapArr[0];
      insertValue(0, heapArr[--itemsInHeap]); // move last item in heap into root position
      downHeap(0);
      return popIdx;
    };

    function upHeap(idx) {
      var parentIdx;
      // Move item up in the heap until it's at the top or is not lighter than its parent
      while (idx > 0) {
        parentIdx = (idx - 1) >> 1;
        if (greaterThan(idx, parentIdx)) {
          break;
        }
        swapItems(idx, parentIdx);
        idx = parentIdx;
      }
      return idx;
    }

    // Swap item at @idx with any lighter children
    function downHeap(idx) {
      var minIdx = compareDown(idx);

      while (minIdx > idx) {
        swapItems(idx, minIdx);
        idx = minIdx; // descend in the heap
        minIdx = compareDown(idx);
      }
    }

    function swapItems(a, b) {
      var i = heapArr[a];
      insertValue(a, heapArr[b]);
      insertValue(b, i);
    }

    // Associate a heap idx with the index of a value in data arr
    function insertValue(heapIdx, valId) {
      indexArr[valId] = heapIdx;
      heapArr[heapIdx] = valId;
    }

    // @a, @b: Indexes in @heapArr
    function greaterThan(a, b) {
      var idx1 = heapArr[a],
          idx2 = heapArr[b],
          val1 = dataArr[idx1],
          val2 = dataArr[idx2];
      // If values are equal, compare array indexes.
      // This is not a requirement of the Visvalingam algorithm,
      // but it generates output that matches Mahes Visvalingam's
      // reference implementation.
      // See https://hydra.hull.ac.uk/assets/hull:10874/content
      return (val1 > val2 || val1 === val2 && idx1 > idx2);
    }

    function compareDown(idx) {
      var a = 2 * idx + 1,
          b = a + 1,
          n = itemsInHeap;
      if (a < n && greaterThan(idx, a)) {
        idx = a;
      }
      if (b < n && greaterThan(idx, b)) {
        idx = b;
      }
      return idx;
    }
  }

  var Visvalingam = {};

  Visvalingam.getArcCalculator = function(metric, is3D) {
    var heap = new Heap(),
        prevBuf = utils.expandoBuffer(Int32Array),
        nextBuf = utils.expandoBuffer(Int32Array),
        calc = is3D ?
          function(b, c, d, xx, yy, zz) {
            return metric(xx[b], yy[b], zz[b], xx[c], yy[c], zz[c], xx[d], yy[d], zz[d]);
          } :
          function(b, c, d, xx, yy) {
            return metric(xx[b], yy[b], xx[c], yy[c], xx[d], yy[d]);
          };

    // Calculate Visvalingam simplification data for an arc
    // @kk (Float64Array|Array) Receives calculated simplification thresholds
    // @xx, @yy, (@zz) Buffers containing vertex coordinates
    return function calcVisvalingam(kk, xx, yy, zz) {
      var arcLen = kk.length,
          prevArr = prevBuf(arcLen),
          nextArr = nextBuf(arcLen),
          val, maxVal = -Infinity,
          b, c, d; // indexes of points along arc

      if (zz && !is3D) {
        error("[visvalingam] Received z-axis data for 2D simplification");
      } else if (!zz && is3D) {
        error("[visvalingam] Missing z-axis data for 3D simplification");
      } else if (kk.length > xx.length) {
        error("[visvalingam] Incompatible data arrays:", kk.length, xx.length);
      }

      // Initialize Visvalingam "effective area" values and references to
      //   prev/next points for each point in arc.
      for (c=0; c<arcLen; c++) {
        b = c-1;
        d = c+1;
        if (b < 0 || d >= arcLen) {
          val = Infinity; // endpoint maxVals
        } else {
          val = calc(b, c, d, xx, yy, zz);
        }
        kk[c] = val;
        nextArr[c] = d;
        prevArr[c] = b;
      }
      heap.init(kk);

      // Calculate removal thresholds for each internal point in the arc
      //
      while (heap.size() > 0) {
        c = heap.pop(); // Remove the point with the least effective area.
        val = kk[c];
        if (val === Infinity) {
          break;
        }
        if (val < maxVal) {
          // don't assign current point a lesser value than the last removed vertex
          kk[c] = maxVal;
        } else {
          maxVal = val;
        }

        // Recompute effective area of neighbors of the removed point.
        b = prevArr[c];
        d = nextArr[c];
        if (b > 0) {
          val = calc(prevArr[b], b, d, xx, yy, zz);
          heap.updateValue(b, val);
        }
        if (d < arcLen-1) {
          val = calc(b, d, nextArr[d], xx, yy, zz);
          heap.updateValue(d, val);
        }
        nextArr[b] = d;
        prevArr[d] = b;
      }
    };
  };

  Visvalingam.standardMetric = geom.triangleArea;
  Visvalingam.standardMetric3D = geom.triangleArea3D;

  Visvalingam.getWeightedMetric = function(opts) {
    var weight = Visvalingam.getWeightFunction(opts);
    return function(ax, ay, bx, by, cx, cy) {
      var area = geom.triangleArea(ax, ay, bx, by, cx, cy),
          cos = geom.cosine(ax, ay, bx, by, cx, cy);
      return weight(cos) * area;
    };
  };

  Visvalingam.getWeightedMetric3D = function(opts) {
    var weight = Visvalingam.getWeightFunction(opts);
    return function(ax, ay, az, bx, by, bz, cx, cy, cz) {
      var area = geom.triangleArea3D(ax, ay, az, bx, by, bz, cx, cy, cz),
          cos = geom.cosine3D(ax, ay, az, bx, by, bz, cx, cy, cz);
      return weight(cos) * area;
    };
  };

  Visvalingam.getWeightCoefficient = function(opts) {
    return opts && utils.isNumber(opts && opts.weighting) ? opts.weighting : 0.7;
  };

  // Get a parameterized version of Visvalingam.weight()
  Visvalingam.getWeightFunction = function(opts) {
    var k = Visvalingam.getWeightCoefficient(opts);
    return function(cos) {
      return -cos * k + 1;
    };
  };

  // Weight triangle area by inverse cosine
  // Standard weighting favors 90-deg angles; this curve peaks at 120 deg.
  Visvalingam.weight = function(cos) {
    var k = 0.7;
    return -cos * k + 1;
  };

  Visvalingam.getEffectiveAreaSimplifier = function(use3D) {
    var metric = use3D ? Visvalingam.standardMetric3D : Visvalingam.standardMetric;
    return Visvalingam.getPathSimplifier(metric, use3D);
  };

  Visvalingam.getWeightedSimplifier = function(opts, use3D) {
    var metric = use3D ? Visvalingam.getWeightedMetric3D(opts) : Visvalingam.getWeightedMetric(opts);
    return Visvalingam.getPathSimplifier(metric, use3D);
  };

  Visvalingam.getPathSimplifier = function(metric, use3D) {
    return Visvalingam.scaledSimplify(Visvalingam.getArcCalculator(metric, use3D));
  };


  Visvalingam.scaledSimplify = function(f) {
    return function(kk, xx, yy, zz) {
      f(kk, xx, yy, zz);
      for (var i=1, n=kk.length - 1; i<n; i++) {
        // convert area metric to a linear equivalent
        kk[i] = Math.sqrt(kk[i]) * 0.65;
      }
    };
  };

  function getSimplifyMethodLabel(slug) {
    return {
      dp: "Ramer-Douglas-Peucker",
      visvalingam: "Visvalingam",
      weighted_visvalingam: "Weighted Visvalingam"
    }[slug] || "Unknown";
  }

  function printSimplifyInfo(arcs, opts) {
    var method = getSimplifyMethod(opts);
    var name = getSimplifyMethodLabel(method);
    var spherical = useSphericalSimplify(arcs, opts);
    var stats = calcSimplifyStats(arcs, spherical);
    var pct1 = (stats.removed + stats.collapsedRings) / stats.uniqueCount || 0;
    var pct2 = stats.removed / stats.removableCount || 0;
    var aq = stats.angleQuartiles;
    var dq = stats.displacementQuartiles;
    var lines = ["Simplification statistics"];
    lines.push(utils.format("Method: %s (%s) %s", name, spherical ? 'spherical' : 'planar',
        method == 'weighted_visvalingam' ? '(weighting=' + Visvalingam.getWeightCoefficient(opts) + ')' : ''));
    lines.push(utils.format("Removed vertices: %,d", stats.removed + stats.collapsedRings));
    lines.push(utils.format("   %.1f% of %,d unique coordinate locations", pct1 * 100, stats.uniqueCount));
    lines.push(utils.format("   %.1f% of %,d filterable coordinate locations", pct2 * 100, stats.removableCount));
    lines.push(utils.format("Simplification threshold: %.4f %s", arcs.getRetainedInterval(),
        spherical ? 'meters' : ''));
    lines.push(utils.format("Collapsed rings: %,d", stats.collapsedRings));
    lines.push("Displacement statistics");
    lines.push(utils.format("   Mean displacement: %.4f", stats.displacementMean));
    lines.push(utils.format("   Max displacement: %.4f", stats.displacementMax));
    if (dq) {
      lines.push(utils.format("   Quartiles: %.2f, %.2f, %.2f", dq[0], dq[1], dq[2]));
    }
    lines.push("Vertex angle statistics");
    lines.push(utils.format("   Mean angle: %.2f degrees", stats.angleMean));
    // lines.push(utils.format("   Angles < 45: %.2f%", stats.lt45));
    if (aq) {
      lines.push(utils.format("   Quartiles: %.2f, %.2f, %.2f", aq[0], aq[1], aq[2]));
    }

    message(lines.join('\n   '));
  }

  // Remove line-segment intersections introduced by simplification by rolling
  // back simplification along intersecting segments.
  //
  // Limitation of this method: it can't remove intersections that are present
  // in the original dataset.
  // TODO: don't roll back simplification for unrepairable intersections.
  //
  function postSimplifyRepair(arcs) {
    var intersections = findSegmentIntersections(arcs),
        unfixable = repairIntersections(arcs, intersections),
        countPre = intersections.length,
        countPost = unfixable.length,
        countFixed = countPre > countPost ? countPre - countPost : 0,
        msg;
    if (countPre > 0) {
      msg = utils.format("Repaired %'i intersection%s", countFixed,
          utils.pluralSuffix(countFixed));
      if (countPost > 0) {
        msg += utils.format("; %'i intersection%s could not be repaired", countPost,
            utils.pluralSuffix(countPost));
      }
      message(msg);
    }
  }

  // @intersections (Array) Output from findSegmentIntersections()
  // Returns array of unresolved intersections, or empty array if none.
  // (export for GUI)
  function repairIntersections(arcs, intersections) {
    while (unwindIntersections(arcs, intersections) > 0) {
      intersections = findSegmentIntersections(arcs);
    }
    return intersections;
  }

  function unwindIntersections(arcs, intersections) {
    var data = arcs.getVertexData(),
        zlim = arcs.getRetainedInterval(),
        changes = 0,
        loops = 0,
        replacements, queue, target, i;

    // create a queue of unwind targets
    queue = getUnwindTargets(intersections, zlim, data.zz);
    utils.sortOn(queue, 'z', !!"ascending");

    while (queue.length > 0) {
      target = queue.pop();
      // redetect unwind target, in case a previous unwind operation has changed things
      // TODO: don't redetect if target couldn't have been affected
      replacements = redetectIntersectionTarget(target, zlim, data.xx, data.yy, data.zz);
      if (replacements.length == 1) {
        replacements = unwindIntersection(replacements[0], zlim, data.zz);
        changes++;
      } else  {
        // either 0 or multiple intersections detected
      }

      for (i=0; i<replacements.length; i++) {
        insertUnwindTarget(queue, replacements[i]);
      }
    }
    if (++loops > 500000) {
      verbose("Caught an infinite loop at intersection:", target);
      return 0;
    }
    return changes;
  }

  function getUnwindTargets(intersections, zlim, zz) {
    return intersections.reduce(function(memo, o) {
      var target = getUnwindTarget(o, zlim, zz);
      if (target !== null) {
        memo.push(target);
      }
      return memo;
    }, []);
  }

  // @o an intersection object
  // returns null if no vertices can be added along both segments
  // else returns an object with properties:
  //   a: intersecting segment to be partitioned
  //   b: intersecting segment to be retained
  //   z: threshold value of one or more points along [a] to be re-added
  function getUnwindTarget(o, zlim, zz) {
    var ai = findNextRemovableVertex(zz, zlim, o.a[0], o.a[1]),
        bi = findNextRemovableVertex(zz, zlim, o.b[0], o.b[1]),
        targ;
    if (ai == -1 && bi == -1) {
      targ = null;
    } else if (bi == -1 || ai != -1 && zz[ai] > zz[bi]) {
      targ = {
        a: o.a,
        b: o.b,
        z: zz[ai]
      };
    } else {
      targ = {
        a: o.b,
        b: o.a,
        z: zz[bi]
      };
    }
    return targ;
  }

  // Insert an intersection into sorted position
  function insertUnwindTarget(arr, obj) {
    var ins = arr.length;
    while (ins > 0) {
      if (arr[ins-1].z <= obj.z) {
        break;
      }
      arr[ins] = arr[ins-1];
      ins--;
    }
    arr[ins] = obj;
  }

  // Partition one of two intersecting segments by setting the removal threshold
  // of vertices indicated by @target equal to @zlim (the current simplification
  // level of the ArcCollection)
  function unwindIntersection(target, zlim, zz) {
    var replacements = [];
    var start = target.a[0],
        end = target.a[1],
        z = target.z;
    for (var i = start + 1; i <= end; i++) {
      if (zz[i] == z || i == end) {
        replacements.push({
          a: [start, i],
          b: target.b,
          z: z
        });
        if (i != end) zz[i] = zlim;
        start = i;
      }
    }
    if (replacements.length < 2) error("Error in unwindIntersection()");
    return replacements;
  }

  function redetectIntersectionTarget(targ, zlim, xx, yy, zz) {
    var segIds = getIntersectionCandidates(targ, zlim, xx, yy, zz);
    var intersections = intersectSegments(segIds, xx, yy);
    return getUnwindTargets(intersections, zlim, zz);
  }

  function getIntersectionCandidates(o, zlim, xx, yy, zz) {
    var segIds = getSegmentVertices(o.a, zlim, xx, yy, zz);
    segIds = segIds.concat(getSegmentVertices(o.b, zlim, xx, yy, zz));
    return segIds;
  }

  // Get all segments defined by two endpoints and the vertices between
  // them that are at or above the current simplification threshold.
  // TODO: test intersections with identical start + end ids
  function getSegmentVertices(seg, zlim, xx, yy, zz) {
    var start, end, prev, ids = [];
    if (seg[0] <= seg[1]) {
      start = seg[0];
      end = seg[1];
    } else {
      start = seg[1];
      end = seg[0];
    }
    prev = start;
    for (var i=start+1; i<=end; i++) {
      if (zz[i] >= zlim) {
        if (xx[prev] < xx[i]) {
          ids.push(prev, i);
        } else {
          ids.push(i, prev);
        }
        prev = i;
      }
    }
    return ids;
  }

  var PostSimplifyRepair = /*#__PURE__*/Object.freeze({
    __proto__: null,
    postSimplifyRepair: postSimplifyRepair,
    repairIntersections: repairIntersections
  });

  var DouglasPeucker = {};

  DouglasPeucker.metricSq3D = geom.pointSegDistSq3D;
  DouglasPeucker.metricSq = geom.pointSegDistSq;

  // @dest array to contain point removal thresholds
  // @xx, @yy arrays of x, y coords of a path
  // @zz (optional) array of z coords for spherical simplification
  //
  DouglasPeucker.calcArcData = function(dest, xx, yy, zz) {
    var len = dest.length,
        useZ = !!zz;

    dest[0] = dest[len-1] = Infinity;
    if (len > 2) {
      procSegment(0, len-1, 1, Number.MAX_VALUE);
    }

    function procSegment(startIdx, endIdx, depth, distSqPrev) {
      // get endpoint coords
      var ax = xx[startIdx],
          ay = yy[startIdx],
          cx = xx[endIdx],
          cy = yy[endIdx],
          az, cz;
      if (useZ) {
        az = zz[startIdx];
        cz = zz[endIdx];
      }

      var maxDistSq = 0,
          maxIdx = 0,
          distSqLeft = 0,
          distSqRight = 0,
          distSq;

      for (var i=startIdx+1; i<endIdx; i++) {
        if (useZ) {
          distSq = DouglasPeucker.metricSq3D(xx[i], yy[i], zz[i], ax, ay, az, cx, cy, cz);
        } else {
          distSq = DouglasPeucker.metricSq(xx[i], yy[i], ax, ay, cx, cy);
        }

        if (distSq >= maxDistSq) {
          maxDistSq = distSq;
          maxIdx = i;
        }
      }

      // Case -- threshold of parent segment is less than threshold of curr segment
      // Curr max point is assigned parent's threshold, so parent is not removed
      // before child as simplification is increased.
      //
      if (distSqPrev < maxDistSq) {
        maxDistSq = distSqPrev;
      }

      if (maxIdx - startIdx > 1) {
        distSqLeft = procSegment(startIdx, maxIdx, depth+1, maxDistSq);
      }
      if (endIdx - maxIdx > 1) {
        distSqRight = procSegment(maxIdx, endIdx, depth+1, maxDistSq);
      }

      // Case -- max point of curr segment is highest-threshold point of an island polygon
      // Give point the same threshold as the next-highest point, to prevent
      // a 3-vertex degenerate ring.
      if (depth == 1 && ax == cx && ay == cy) {
        maxDistSq = Math.max(distSqLeft, distSqRight);
      }

      dest[maxIdx] =  Math.sqrt(maxDistSq);
      return maxDistSq;
    }
  };

  function keepEveryPolygon(arcData, layers) {
    layers.forEach(function(lyr) {
      if (lyr.geometry_type == 'polygon') {
        protectLayerShapes(arcData, lyr.shapes);
      }
    });
  }

  function protectLayerShapes(arcData, shapes) {
    shapes.forEach(function(shape) {
      protectShape(arcData, shape);
    });
  }

  // Protect a single shape from complete removal by simplification
  // @arcData an ArcCollection
  // @shape an array containing one or more arrays of arc ids, or null if null shape
  //
  function protectShape(arcData, shape) {
    var maxArea = 0,
        arcCount = shape ? shape.length : 0,
        maxRing, area;
    // Find ring with largest bounding box
    for (var i=0; i<arcCount; i++) {
      area = arcData.getSimpleShapeBounds(shape[i]).area();
      if (area > maxArea) {
        maxRing = shape[i];
        maxArea = area;
      }
    }

    if (!maxRing || maxRing.length === 0) {
      // invald shape
      verbose("[protectShape()] Invalid shape:", shape);
    } else {
      protectPolygonRing(arcData, maxRing);
    }
  }

  // Re-inflate a polygon ring that has collapsed due to simplification by
  //   adding points in reverse order of removal until polygon is inflated.
  function protectPolygonRing(arcData, ring) {
    var zlim = arcData.getRetainedInterval(),
        // use epsilon as min area instead of 0, in case f.p. rounding produces
        // a positive area for a collapsed polygon.
        minArea = 1e-10,
        area, added;
    arcData.setRetainedInterval(Infinity);
    area = geom.getPlanarPathArea(ring, arcData);
    while (area <= minArea) {
      added = lockMaxThreshold(arcData, ring);
      if (added === 0) {
        verbose("[protectMultiRing()] Failed on ring:", ring);
        break;
      }
      area = geom.getPlanarPathArea(ring, arcData);
    }
    arcData.setRetainedInterval(zlim);
  }

  // Protect the vertex or vertices with the largest non-infinite
  // removal threshold in a ring.
  //
  function lockMaxThreshold(arcData, ring) {
    var targZ = 0,
        targArcId,
        raw = arcData.getVertexData(),
        arcId, id, z,
        start, end;

    for (var i=0; i<ring.length; i++) {
      arcId = ring[i];
      if (arcId < 0) arcId = ~arcId;
      start = raw.ii[arcId];
      end = start + raw.nn[arcId] - 1;
      id = findNextRemovableVertex(raw.zz, Infinity, start, end);
      if (id == -1) continue;
      z = raw.zz[id];
      if (z > targZ) {
        targZ = z;
        targArcId = arcId;
      }
    }
    if (targZ > 0) {
      // There may be more than one vertex with the target Z value; lock them all.
      start = raw.ii[targArcId];
      end = start + raw.nn[targArcId] - 1;
      return replaceInArray(raw.zz, targZ, Infinity, start, end);
    }
    return 0;
  }

  function replaceInArray(zz, value, replacement, start, end) {
    var count = 0;
    for (var i=start; i<=end; i++) {
      if (zz[i] === value) {
        zz[i] = replacement;
        count++;
      }
    }
    return count;
  }

  var KeepShapes = /*#__PURE__*/Object.freeze({
    __proto__: null,
    keepEveryPolygon: keepEveryPolygon,
    protectShape: protectShape,
    replaceInArray: replaceInArray
  });

  cmd.simplify = function(dataset, opts) {
    var arcs = dataset.arcs;
    if (!arcs || arcs.size() === 0) return; // removed in v0.4.125: stop("Missing path data");
    opts = getStandardSimplifyOpts(dataset, opts); // standardize options
    simplifyPaths(arcs, opts);

    // calculate and apply simplification interval
    if (opts.percentage || opts.percentage === 0) {
      arcs.setRetainedPct(utils.parsePercent(opts.percentage));
    } else if (opts.interval || opts.interval === 0) {
      arcs.setRetainedInterval(convertSimplifyInterval(opts.interval, dataset, opts));
    } else if (opts.resolution) {
      arcs.setRetainedInterval(convertSimplifyResolution(opts.resolution, arcs, opts));
    } else if (opts.presimplify) {
      return;
    } else {
      stop("Missing a simplification amount");
    }

    finalizeSimplification(dataset, opts);
  };

  function finalizeSimplification(dataset, opts) {
    var arcs = dataset.arcs;
    if (opts.keep_shapes) {
      keepEveryPolygon(arcs, dataset.layers);
    }

    if (!opts.no_repair && arcs.getRetainedInterval() > 0) {
      postSimplifyRepair(arcs);
    }

    if (opts.stats) {
      printSimplifyInfo(arcs, opts);
    }

    // stash simplification options (used by gui settings dialog)
    dataset.info = utils.defaults({simplify: opts}, dataset.info);
  }

  function getStandardSimplifyOpts(dataset, opts) {
    opts = opts || {};
    return utils.defaults({
      method: getSimplifyMethod(opts),
      spherical: useSphericalSimplify(dataset.arcs, opts)
    }, opts);
  }

  function useSphericalSimplify(arcs, opts) {
    return !opts.planar && !arcs.isPlanar();
  }

  // Calculate simplification thresholds for each vertex of an arc collection
  // (modifies @arcs ArcCollection in-place)
  function simplifyPaths(arcs, opts) {
    var simplifyPath = getSimplifyFunction(opts);
    arcs.setThresholds(new Float64Array(arcs.getPointCount())); // Create array to hold simplification data
    if (opts.spherical) {
      simplifyPaths3D(arcs, simplifyPath);
      protectWorldEdges(arcs);
    } else {
      simplifyPaths2D(arcs, simplifyPath);
    }
    if (opts.lock_box) {
      protectContentEdges(arcs);
    }
  }

  function simplifyPaths2D(arcs, simplify) {
    arcs.forEach3(function(xx, yy, kk, i) {
      simplify(kk, xx, yy);
    });
  }

  function simplifyPaths3D(arcs, simplify) {
    var xbuf = utils.expandoBuffer(Float64Array),
        ybuf = utils.expandoBuffer(Float64Array),
        zbuf = utils.expandoBuffer(Float64Array);
    arcs.forEach3(function(xx, yy, kk, i) {
      var n = xx.length,
          xx2 = xbuf(n),
          yy2 = ybuf(n),
          zz2 = zbuf(n);
      geom.convLngLatToSph(xx, yy, xx2, yy2, zz2);
      simplify(kk, xx2, yy2, zz2);
    });
  }

  function getSimplifyMethod(opts) {
    var m = opts.method;
    if (!m || m == 'weighted' || m == 'visvalingam' && opts.weighting) {
      m =  'weighted_visvalingam';
    }
    return m;
  }

  function getSimplifyFunction(opts) {
    var f;
    if (opts.method == 'dp') {
      f = DouglasPeucker.calcArcData;
    } else if (opts.method == 'visvalingam') {
      f = Visvalingam.getEffectiveAreaSimplifier(opts.spherical);
    } else if (opts.method == 'weighted_visvalingam') {
      f = Visvalingam.getWeightedSimplifier(opts, opts.spherical);
    } else {
      stop('Unsupported simplify method:', opts.method);
    }
    return f;
  }

  function protectContentEdges(arcs) {
    var e = 1e-14;
    var bb = arcs.getBounds();
    bb.padBounds(-e, -e, -e, -e);
    limitSimplificationExtent(arcs, bb.toArray(), true);
  }

  // @hardLimit
  //    true: never remove edge vertices
  //    false: never remove before other vertices
  function limitSimplificationExtent(arcs, bb, hardLimit) {
    var arcBounds = arcs.getBounds().toArray();
    // return if content doesn't reach edges
    if (geom.containsBounds(bb, arcBounds) === true) return;
    arcs.forEach3(function(xx, yy, zz) {
      var lockZ = hardLimit ? Infinity : 0,
      x, y;
      for (var i=0, n=zz.length; i<n; i++) {
        x = xx[i];
        y = yy[i];
        if (x >= bb[2] || x <= bb[0] || y <= bb[1] || y >= bb[3]) {
          if (lockZ === 0) {
            lockZ = findMaxThreshold(zz);
          }
          if (zz[i] !== Infinity) { // don't override lock value
            zz[i] = lockZ;
          }
        }
      }
    });
  }

  // Protect polar coordinates and coordinates at the prime meridian from
  // being removed before other points in a path.
  // Assume: coordinates are in decimal degrees
  //
  function protectWorldEdges(arcs) {
    // Need to handle coords with rounding errors:
    // -179.99999999999994 in test/data/ne/ne_110m_admin_0_scale_rank.shp
    // 180.00000000000003 in ne/ne_50m_admin_0_countries.shp
    limitSimplificationExtent(arcs, getWorldBounds(1e-12), false);
  }

  // Return largest value in an array, ignoring Infinity (lock value)
  //
  function findMaxThreshold(zz) {
    var z, maxZ = 0;
    for (var i=0, n=zz.length; i<n; i++) {
      z = zz[i];
      if (z > maxZ && z < Infinity) {
        maxZ = z;
      }
    }
    return maxZ;
  }

  function parseSimplifyResolution(raw) {
    var parts, w, h;
    if (utils.isNumber(raw)) {
      w = raw;
      h = raw;
    }
    else if (utils.isString(raw)) {
      parts = raw.split(/[x ,]/);
      w = Number(parts[0]) || 0;
      h = parts.length == 2 ? Number(parts[1]) || 0 : w;
    }
    if (!(w >= 0 && h >= 0 && w + h > 0)) {
      stop("Invalid simplify resolution:", raw);
    }
    return [w, h]; // TODO: validate;
  }

  function calcPlanarInterval(xres, yres, width, height) {
    var fitWidth = xres !== 0 && width / height > xres / yres || yres === 0;
    return fitWidth ? width / xres : height / yres;
  }

  // Calculate a simplification interval for unprojected data, given an output resolution
  // (This is approximate, since we don't know how the data will be projected for display)
  function calcSphericalInterval(xres, yres, bounds) {
    // Using length of arc along parallel through center of bbox as content width
    // TODO: consider using great circle instead of parallel arc to calculate width
    //    (doesn't work if width of bbox is greater than 180deg)
    var width = geom.degreesToMeters(bounds.width()) * Math.cos(bounds.centerY() * geom.D2R);
    var height = geom.degreesToMeters(bounds.height());
    return calcPlanarInterval(xres, yres, width, height);
  }

  function convertSimplifyInterval(param, dataset, opts) {
    var crs = getDatasetCRS(dataset);
    var interval;
    if (useSphericalSimplify(dataset.arcs, opts)) {
      interval = convertDistanceParam(param, crs);
    } else {
      interval = convertIntervalParam(param, crs);
    }
    return interval;
  }

  // convert resolution to an interval
  function convertSimplifyResolution(param, arcs, opts) {
    var res = parseSimplifyResolution(param);
    var bounds = arcs.getBounds();
    var interval;
    if (useSphericalSimplify(arcs, opts)) {
      interval = calcSphericalInterval(res[0], res[1], bounds);
    } else {
      interval = calcPlanarInterval(res[0], res[1], bounds.width(), bounds.height());
    }
    // scale interval to double the resolution (single-pixel resolution creates
    //  visible artifacts)
    interval *= 0.5;
    return interval;
  }

  var Simplify = /*#__PURE__*/Object.freeze({
    __proto__: null,
    finalizeSimplification: finalizeSimplification,
    getStandardSimplifyOpts: getStandardSimplifyOpts,
    useSphericalSimplify: useSphericalSimplify,
    simplifyPaths: simplifyPaths,
    getSimplifyMethod: getSimplifyMethod,
    protectWorldEdges: protectWorldEdges,
    parseSimplifyResolution: parseSimplifyResolution,
    calcPlanarInterval: calcPlanarInterval,
    calcSphericalInterval: calcSphericalInterval,
    convertSimplifyInterval: convertSimplifyInterval,
    convertSimplifyResolution: convertSimplifyResolution
  });

  cmd.sortFeatures = function(lyr, arcs, opts) {
    var n = getFeatureCount(lyr),
        ascending = !opts.descending,
        compiled = compileValueExpression(opts.expression, lyr, arcs),
        values = [];

    utils.repeat(n, function(i) {
      values.push(compiled(i));
    });

    var ids = utils.getSortedIds(values, ascending);
    if (lyr.shapes) {
      utils.reorderArray(lyr.shapes, ids);
    }
    if (lyr.data) {
      utils.reorderArray(lyr.data.getRecords(), ids);
    }
  };

  cmd.snap = function(dataset, opts) {
    var interval = 0;
    var arcs = dataset.arcs;
    var arcBounds = arcs && arcs.getBounds();
    if (!arcBounds || !arcBounds.hasBounds()) {
      stop('Dataset is missing path data');
    }
    if (opts.interval) {
      interval = convertIntervalParam(opts.interval, getDatasetCRS(dataset));
    } else {
      interval = getHighPrecisionSnapInterval(arcBounds.toArray());
    }
    arcs.flatten(); // bake in any simplification
    var snapCount = snapCoordsByInterval(arcs, interval);
    message(utils.format("Snapped %s point%s", snapCount, utils.pluralSuffix(snapCount)));
    if (snapCount > 0) {
      arcs.dedupCoords();
      buildTopology(dataset);
    }
  };

  // @expression: optional field name or expression
  //
  cmd.splitLayer = function(src, expression, opts) {
    var lyr0 = opts && opts.no_replace ? copyLayer(src) : src,
        properties = lyr0.data ? lyr0.data.getRecords() : null,
        shapes = lyr0.shapes,
        index = {},
        splitLayers = [],
        namer = getSplitNameFunction(lyr0, expression);

    // if (splitField) {
    //   internal.requireDataField(lyr0, splitField);
    // }

    utils.repeat(getFeatureCount(lyr0), function(i) {
      var name = namer(i),
          lyr;

      if (name in index === false) {
        index[name] = splitLayers.length;
        lyr = {
          geometry_type: lyr0.geometry_type,
          name: name,
          data: properties ? new DataTable() : null,
          shapes: shapes ? [] : null
        };
        splitLayers.push(lyr);
      } else {
        lyr = splitLayers[index[name]];
      }
      if (shapes) {
        lyr.shapes.push(shapes[i]);
      }
      if (properties) {
        lyr.data.getRecords().push(properties[i]);
      }
    });
    return splitLayers;
  };

  function getSplitNameFunction(lyr, exp) {
    var compiled;
    if (!exp) {
      // if not splitting on an expression and layer is unnamed, name split-apart layers
      // like: split-1, split-2, ...
      return function(i) {
        return (lyr && lyr.name || 'split') + '-' + (i + 1);
      };
    }
    lyr = {name: lyr.name, data: lyr.data}; // remove shape info
    compiled = compileValueExpression(exp, lyr, null);
    return function(i) {
      var val = compiled(i);
      return String(val);
      // return val || val === 0 ? String(val) : '';
    };
  }


  // internal.getSplitKey = function(i, field, properties) {
  //   var rec = field && properties ? properties[i] : null;
  //   return String(rec ? rec[field] : i + 1);
  // };

  // internal.getSplitLayerName = function(base, key) {
  //   return (base ? base + '-' : '') + key;
  // };

  // internal.getStringInterpolator = function(str) {
  //   var body = 'with($$ctx) { return `' + str + '`; }';
  //   var f = new Function("$$ctx", body);
  //   return function(o) {
  //     var s = '';
  //     try {
  //       s = f(ctx);
  //     } catch(e) {
  //       stop("Unable to interpolate [" + str + "]");
  //     }
  //     return s;
  //   }
  // };

  var Split = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getSplitNameFunction: getSplitNameFunction
  });

  cmd.svgStyle = function(lyr, dataset, opts) {
    var filter;
    if (!lyr.data) {
      initDataTable(lyr);
    }
    if (opts.where) {
      filter = compileValueExpression(opts.where, lyr, dataset.arcs);
    }
    Object.keys(opts).forEach(function(optName) {
      var svgName = optName.replace('_', '-'); // undo cli parser name conversion
      if (!isSupportedSvgStyleProperty(svgName)) {
        return;
      }
      var strVal = opts[optName].trim();
      var accessor = getSymbolPropertyAccessor(strVal, svgName, lyr);
      getLayerDataTable(lyr).getRecords().forEach(function(rec, i) {
        if (filter && !filter(i)) {
          // make sure field exists if record is excluded by filter
          if (svgName in rec === false) {
            rec[svgName] = undefined;
          }
        } else {
          rec[svgName] = accessor(i);
        }
      });
    });
  };

  function rotateSymbolCoords(coords, rotation) {
    var f;
    if (!rotation) return;
    // invert sign of rotation, because y-axis is flipped in SVG/HTML screen coords.
    f = getAffineTransform(-rotation, 1, [0, 0], [0, 0]);
    // TODO: avoid re-instantiating function on every call
    forEachPoint(coords, function(p) {
      var p2 = f(p[0], p[1]);
      p[0] = p2[0];
      p[1] = p2[1];
    });
  }

  symbolBuilders.arrow = function(d) {
    var len = 'length' in d ? d.length : 10;
    var stroke = d.stroke || 'magenta';
    var strokeWidth = 'stroke-width' in d ? d['stroke-width'] : 1;
    var coords = getStrokeArrowCoords(len);
    var curve = d.curve || 0;
    var obj = {
      type: 'polyline',
      coordinates: coords,
      stroke: stroke,
      'stroke-width': strokeWidth
    };

    if (d.rotation) {
      rotateSymbolCoords(coords, d.rotation);
    }

    if (curve && coords[0].length == 2) { // curve arrow stem
      curve = adjustArrowCurve(coords[0], curve);
      addBezierArcControlPoints(coords[0][0], coords[0][1], curve);
    }

    if (d.effect == "fade") {
      // TODO
    }
    return obj;
  };

  function adjustArrowCurve(stem, curve) {
    var dx = stem[1][0] - stem[0][0];
    return dx < 0 ? -curve : curve;
  }

  function getStrokeArrowCoords(len) {
    var stalk = [[0, 0], [0, -len]];
    return [stalk];
  }

  function getFilledArrowCoords(d) {
    // TODO
  }

  // TODO: refactor to remove duplication in mapshaper-svg-style.js
  cmd.symbols = function(lyr, opts) {
    var f, filter;
    // console.log("-symbols opts", opts)
    requirePointLayer(lyr);
    f = getSymbolDataAccessor(lyr, opts);
    if (opts.where) {
      filter = compileValueExpression(opts.where, lyr, null);
    }
    getLayerDataTable(lyr).getRecords().forEach(function(rec, i) {
      if (filter && filter(i)) {
        if ('svg-symbol' in rec === false) {
          rec['svg-symbol'] = undefined;
        }
      } else {
        rec['svg-symbol'] = buildSymbol(f(i));
      }
    });
  };

  // Returns an svg-symbol data object for one symbol
  function buildSymbol(properties) {
    var type = properties.type;
    var f = symbolBuilders[type];
    if (!type) {
      stop('Missing required "type" parameter');
    } else if (!f) {
      stop('Unknown symbol type:', type);
    }
    return f(properties);
  }

  var Symbols = /*#__PURE__*/Object.freeze({
    __proto__: null,
    buildSymbol: buildSymbol
  });

  cmd.target = function(catalog, opts) {
    var type = (opts.type || '').toLowerCase().replace('linestring', 'polyline');
    var pattern = opts.target || '*';
    var targets = catalog.findCommandTargets(pattern, type);
    if (type && 'polygon,polyline,point'.split(',').indexOf(type) == -1) {
      stop("Invalid layer type:", opts.type);
    }
    if (targets.length === 0) {
      stop("No layers were matched (pattern: " + pattern + (type ? ' type: ' + type : '') + ")");
    }
    if (opts.name || opts.name === '') {
      // TODO: improve this
      targets[0].layers[0].name = opts.name;
    }
    catalog.setDefaultTargets(targets);
  };

  cmd.union = function(targetLayers, targetDataset, opts) {
    if (targetLayers.length < 2) {
      stop('Command requires at least two target layers');
    }
    targetLayers.forEach(requirePolygonLayer);

    // Need to add cuts before creating merged layer (arc ids may change)
    var nodes = addIntersectionCuts(targetDataset, opts);
    var allFields = [];
    var allShapes = [];
    var layerData = [];
    targetLayers.forEach(function(lyr, i) {
      var fields = lyr.data ? lyr.data.getFields() : [];
      if (opts.fields) {
        fields = opts.fields.indexOf('*') > 1 ? fields :
          fields.filter(function(name) {return opts.fields.indexOf(name) > -1;});
      }
      layerData.push({
        layer: lyr,
        fields: fields,
        records: lyr.data ? lyr.data.getRecords() : null,
        offset: allShapes.length,
        size: lyr.shapes.length
      });
      allFields = allFields.concat(fields);
      allShapes = allShapes.concat(lyr.shapes);
    });
    var unionFields = utils.uniqifyNames(allFields, function(name, n) {
      return name + '_' + n;
    });
    var mergedLyr = {
      geometry_type: 'polygon',
      shapes: allShapes
    };
    var mosaicIndex = new MosaicIndex(mergedLyr, nodes, {flat: false});
    var mosaicShapes = mosaicIndex.mosaic;
    var mosaicRecords = mosaicShapes.map(function(shp, i) {
      var mergedIds = mosaicIndex.getSourceIdsByTileId(i);
      var values = [];
      var lyrInfo, srcId, rec;
      for (var lyrId=0, n=layerData.length; lyrId < n; lyrId++) {
        lyrInfo = layerData[lyrId];
        srcId = unionFindOriginId(mergedIds, lyrInfo.offset, lyrInfo.size);
        rec = srcId == -1 || lyrInfo.records === null ? null : lyrInfo.records[srcId];
        unionAddDataValues(values, lyrInfo.fields, rec);
      }
      return unionMakeDataRecord(unionFields, values);
    });

    var unionLyr = {
      name: 'union',
      geometry_type: 'polygon',
      shapes: mosaicShapes,
      data: new DataTable(mosaicRecords)
    };
    return [unionLyr];
  };

  function unionFindOriginId(mergedIds, offset, length) {
    var mergedId;
    for (var i=0; i<mergedIds.length; i++) {
      mergedId = mergedIds[i];
      if (mergedId >= offset && mergedId < offset + length) {
        return mergedId - offset;
      }
    }
    return -1;
  }

  function unionAddDataValues(arr, fields, rec) {
    for (var i=0; i<fields.length; i++) {
      arr.push(rec ? rec[fields[i]] : null);
    }
  }

  function unionMakeDataRecord(fields, values) {
    var rec = {};
    for (var i=0; i<fields.length; i++) {
      rec[fields[i]] = values[i];
    }
    return rec;
  }

  cmd.uniq = function(lyr, arcs, opts) {
    var n = getFeatureCount(lyr),
        compiled = compileValueExpression(opts.expression, lyr, arcs),
        maxCount = opts.max_count || 1,
        counts = {},
        keepFlags = [],
        verbose = !!opts.verbose,
        invert = !!opts.invert,
        index = !!opts.index,
        records = lyr.data ? lyr.data.getRecords() : null,
        filter = function(d, i) {return keepFlags[i];};


    utils.repeat(n, function(i) {
      var val = compiled(i);
      var count = val in counts ? counts[val] + 1 : 1;
      var keep = count <= maxCount;
      var rec;
      if (index) {
        keep = true;
        rec = records && records[i];
        if (rec) rec.index = count;
      } else if (invert) {
        keep = !keep;
      }
      keepFlags[i] = keep;
      counts[val] = count;
      if (verbose && !keep) {
        message(utils.format('Removing feature %i key: [%s]', i, val));
      }
    });

    if (lyr.shapes) {
      lyr.shapes = lyr.shapes.filter(filter);
    }
    if (records) {
      lyr.data = new DataTable(records.filter(filter));
    }
    if (opts.verbose !== false) {
      message(utils.format('Retained %,d of %,d features', getFeatureCount(lyr), n));
    }
  };

  cmd.shape = function(opts) {
    var coords = opts.coordinates;
    var offsets = opts.offsets || [];
    var coordinates = [];
    var geojson, dataset, type, i, x, y;

    if (!coords || coords.length >= 2 === false) {
      stop('Missing list of coordinates');
    }
    for (i=0; i<coords.length; i+= 2) {
      x = coords[i];
      y = coords[i + 1];
      coordinates.push([x, y]);
    }
    for (i=0; i<offsets.length; i+=2) {
      x += offsets[i];
      y += offsets[i + 1];
      coordinates.push([x, y]);
    }
    if (GeoJSON.pathIsRing(coordinates)) {
      type = 'Polygon';
    } else if (opts.closed && coordinates.length >= 3) {
      type = 'Polygon';
      coordinates.push(coordinates[0]);
    } else {
      type = 'LineString';
    }
    geojson = {
      type: type,
      coordinates: type == 'Polygon' ? [coordinates] : coordinates
    };
    dataset = importGeoJSON(geojson, {});
    dataset.layers[0].name = opts.name || 'shape';
    return dataset;
  };

  cmd.variableSimplify = function(layers, dataset, opts) {
    var lyr = layers[0];
    var arcs = dataset.arcs;
    var getShapeThreshold;
    var arcThresholds;
    if (layers.length != 1) {
      stop('Variable simplification requires a single target layer');
    }
    if (!layerHasPaths(lyr)) {
      stop('Target layer is missing path data');
    }

    opts = getStandardSimplifyOpts(dataset, opts);
    simplifyPaths(arcs, opts);

    if (opts.interval) {
      getShapeThreshold = getVariableIntervalFunction(opts.interval, lyr, dataset, opts);
    } else if (opts.percentage) {
      getShapeThreshold = getVariablePercentageFunction(opts.percentage, lyr, dataset, opts);
    } else if (opts.resolution) {
      getShapeThreshold = getVariableResolutionFunction(opts.resolution, lyr, dataset, opts);
    } else {
      stop("Missing a simplification expression");
    }

    arcThresholds = calculateVariableThresholds(lyr, arcs, getShapeThreshold);
    applyArcThresholds(arcs, arcThresholds);
    arcs.setRetainedInterval(1e20); // set to a huge value
    finalizeSimplification(dataset, opts);
    arcs.flatten(); // bake in simplification (different from standard -simplify)
  };

  function getVariableIntervalFunction(exp, lyr, dataset, opts) {
    var compiled = compileSimplifyExpression(exp, lyr, dataset.arcs);
    return function(shpId) {
      var val = compiled(shpId);
      return convertSimplifyInterval(val, dataset, opts);
    };
  }

  function getVariableResolutionFunction(exp, lyr, dataset, opts) {
    var compiled = compileSimplifyExpression(exp, lyr, dataset.arcs);
    return function(shpId) {
      var val = compiled(shpId);
      return convertSimplifyResolution(val, dataset.arcs, opts);
    };
  }

  function getVariablePercentageFunction(exp, lyr, dataset, opts) {
    var compiled = compileSimplifyExpression(exp, lyr, dataset.arcs);
    var pctToInterval = getThresholdFunction(dataset.arcs);
    return function(shpId) {
      var val = compiled(shpId);
      var pct = utils.parsePercent(val);
      return pctToInterval(pct);
    };
  }

  // TODO: memoize?
  function compileSimplifyExpression(exp, lyr, arcs) {
    return compileValueExpression(exp, lyr, arcs);
  }

  // Filter arcs based on an array of thresholds
  function applyArcThresholds(arcs, thresholds) {
    var zz = arcs.getVertexData().zz;
    arcs.forEach2(function(start, n, xx, yy, zz, arcId) {
      var arcZ = thresholds[arcId];
      var z;
      for (var i=1; i<n-1; i++) {
        z = zz[start + i];
        // if (z >= arcZ || arcZ === Infinity) { // Infinity test is a bug
        if (z >= arcZ) {
          // protect vertices with thresholds that are >= than the computed threshold
          // for this arc
          zz[start + i] = Infinity;
        }
      }
    });
  }

  function calculateVariableThresholds(lyr, arcs, getShapeThreshold) {
    var thresholds = new Float64Array(arcs.size()); // init to 0s
    var UNUSED = -1;
    var currThresh;
    utils.initializeArray(thresholds, UNUSED);
    lyr.shapes.forEach(function(shp, shpId) {
      currThresh = getShapeThreshold(shpId);
      forEachArcId(shp || [], procArc);
    });
    // set unset arcs to 0 so they are not simplified
    for (var i=0, n=thresholds.length; i<n; i++) {
      if (thresholds[i] == UNUSED) {
        thresholds[i] = 0;
      }
    }
    return thresholds;

    function procArc(arcId) {
      var i = arcId < 0 ? ~arcId : arcId;
      var savedThresh = thresholds[i];
      if (savedThresh > currThresh || savedThresh == UNUSED) {
        thresholds[i] = currThresh;
      }
    }
  }

  // Split the shapes in a layer according to a grid
  // Return array of layers. Use -o bbox-index option to create index
  //
  cmd.splitLayerOnGrid = function(lyr, arcs, opts) {
    var shapes = lyr.shapes,
        type = lyr.geometry_type,
        setId = !!opts.id_field, // assign id but, don't split to layers
        fieldName = opts.id_field || "__split__",
        classify = getShapeClassifier(getLayerBounds(lyr, arcs), opts.cols, opts.rows),
        properties, layers;

    if (!type) {
      stop("Layer has no geometry");
    }

    if (!lyr.data) {
      lyr.data = new DataTable(shapes.length);
    }
    properties = lyr.data.getRecords();

    lyr.shapes.forEach(function(shp, i) {
      var bounds = type == 'point' ? getPointBounds([shp]) : arcs.getMultiShapeBounds(shp);
      var name = bounds.hasBounds() ? classify(bounds) : '';
      var rec = properties[i] = properties[i] || {};
      rec[fieldName] = name;
    });

    if (setId) return lyr; // don't split layer (instead assign cell ids)

    return cmd.splitLayer(lyr, fieldName).filter(function(lyr) {
      var name = lyr.data.getRecordAt(0)[fieldName];
      lyr.name = name;
      lyr.data.deleteField(fieldName);
      return !!name;
    });

    function getShapeClassifier(bounds, cols, rows) {
      var xmin = bounds.xmin,
          ymin = bounds.ymin,
          w = bounds.width(),
          h = bounds.height();

      if (rows > 0 === false || cols > 0 === false) {
        stop('Invalid grid parameters');
      }

      if (w > 0 === false || h > 0 === false) {
        cols = 1;
        rows = 1;
      }

      return function(bounds) {
        var c = Math.floor((bounds.centerX() - xmin) / w * cols),
            r = Math.floor((bounds.centerY() - ymin) / h * rows);
        c = utils.clamp(c, 0, cols-1) || 0;
        r = utils.clamp(r, 0, rows-1) || 0;
        return "r" + r + "c" + c;
      };
    }
  };

  // Recursively divide a layer into two layers until a (compiled) expression
  // no longer returns true. The original layer is split along the long side of
  // its bounding box, so that each split-off layer contains half of the original
  // shapes (+/- 1).
  //
  cmd.subdivideLayer = function(lyr, arcs, exp) {
    return subdivide(lyr, arcs, exp);
  };

  function subdivide(lyr, arcs, exp) {
    var divide = evalCalcExpression(lyr, arcs, exp),
        subdividedLayers = [],
        tmp, bounds, lyr1, lyr2, layerName;

    if (!utils.isBoolean(divide)) {
      stop("Expression must evaluate to true or false");
    }
    if (divide) {
      bounds = getLayerBounds(lyr, arcs);
      tmp = divideLayer(lyr, arcs, bounds);
      lyr1 = tmp[0];
      if (lyr1.shapes.length > 1 && lyr1.shapes.length < lyr.shapes.length) {
        utils.merge(subdividedLayers, subdivide(lyr1, arcs, exp));
      } else {
        subdividedLayers.push(lyr1);
      }

      lyr2 = tmp[1];
      if (lyr2.shapes.length > 1 && lyr2.shapes.length < lyr.shapes.length) {
        utils.merge(subdividedLayers, subdivide(lyr2, arcs, exp));
      } else {
        subdividedLayers.push(lyr2);
      }
    } else {
      subdividedLayers.push(lyr);
    }
    layerName = getSplitNameFunction(lyr);
    subdividedLayers.forEach(function(lyr2, i) {
      lyr2.name = layerName(i);
      utils.defaults(lyr2, lyr);
    });
    return subdividedLayers;
  }

  // split one layer into two layers containing the same number of shapes (+-1),
  // either horizontally or vertically
  //
  function divideLayer(lyr, arcs, bounds) {
    var properties = lyr.data ? lyr.data.getRecords() : null,
        shapes = lyr.shapes,
        lyr1, lyr2;
    lyr1 = {
      geometry_type: lyr.geometry_type,
      shapes: [],
      data: properties ? [] : null
    };
    lyr2 = {
      geometry_type: lyr.geometry_type,
      shapes: [],
      data: properties ? [] : null
    };

    var useX = bounds && bounds.width() > bounds.height();
    // TODO: think about case where there are null shapes with NaN centers
    var centers = shapes.map(function(shp) {
      var bounds = arcs.getMultiShapeBounds(shp);
      return useX ? bounds.centerX() : bounds.centerY();
    });
    var ids = utils.range(centers.length);
    ids.sort(function(a, b) {
      return centers[a] - centers[b];
    });
    ids.forEach(function(shapeId, i) {
      var dest = i < shapes.length / 2 ? lyr1 : lyr2;
      dest.shapes.push(shapes[shapeId]);
      if (properties) {
        dest.data.push(properties[shapeId]);
      }
    });

    if (properties) {
      lyr1.data = new DataTable(lyr1.data);
      lyr2.data = new DataTable(lyr2.data);
    }
    return [lyr1, lyr2];
  }

  function runCommand(command, catalog, cb) {
    var name = command.name,
        opts = command.options,
        source,
        outputDataset,
        outputLayers,
        outputFiles,
        targets,
        targetDataset,
        targetLayers,
        arcs;

    try { // catch errors from synchronous functions

      T.start();
      if (!catalog) catalog = new Catalog();

      if (name == 'rename-layers') {
        // default target is all layers
        targets = catalog.findCommandTargets(opts.target || '*');
        targetLayers = targets.reduce(function(memo, obj) {
          return memo.concat(obj.layers);
        }, []);

      } else if (name == 'o') {
        // when combining GeoJSON layers, default is all layers
        // TODO: check that combine_layers is only used w/ GeoJSON output
        targets = catalog.findCommandTargets(opts.target || opts.combine_layers && '*');

      } else if (name == 'info' || name == 'proj' || name == 'drop' || name == 'target') {
        // these commands accept multiple target datasets
        targets = catalog.findCommandTargets(opts.target);

      } else {
        targets = catalog.findCommandTargets(opts.target);

        // special case to allow -merge-layers and -union to combine layers from multiple datasets
        // TODO: support multi-dataset targets for other commands
        if (targets.length > 1 && (name == 'merge-layers' || name == 'union')) {
          targets = mergeCommandTargets(targets, catalog);
        }

        if (targets.length == 1) {
          targetDataset = targets[0].dataset;
          arcs = targetDataset.arcs;
          targetLayers = targets[0].layers;
          // target= option sets default target
          catalog.setDefaultTarget(targetLayers, targetDataset);

        } else if (targets.length > 1) {
          stop("This command does not support targetting layers from different datasets");
        }
      }

      if (targets.length === 0) {
        if (opts.target) {
          stop(utils.format('Missing target: %s\nAvailable layers: %s',
              opts.target, getFormattedLayerList(catalog)));
        }
        if (!(name == 'graticule' || name == 'i' || name == 'help' ||
            name == 'point-grid' || name == 'shape' || name == 'rectangle' ||
            name == 'include')) {
          throw new UserError("No data is available");
        }
      }

      if (opts.source) {
        source = findCommandSource(convertSourceName(opts.source, targets), catalog, opts);
      }

      if (name == 'affine') {
        cmd.affine(targetLayers, targetDataset, opts);

      } else if (name == 'buffer') {
        // applyCommandToEachLayer(cmd.buffer, targetLayers, targetDataset, opts);
        outputLayers = cmd.buffer(targetLayers, targetDataset, opts);

      } else if (name == 'data-fill') {
        applyCommandToEachLayer(cmd.dataFill, targetLayers, arcs, opts);

      } else if (name == 'cluster') {
        applyCommandToEachLayer(cmd.cluster, targetLayers, arcs, opts);

      } else if (name == 'calc') {
        applyCommandToEachLayer(cmd.calc, targetLayers, arcs, opts);

      } else if (name == 'clean') {
        cmd.cleanLayers(targetLayers, targetDataset, opts);

      } else if (name == 'clip') {
        outputLayers = cmd.clipLayers(targetLayers, source, targetDataset, opts);

      } else if (name == 'colorizer') {
        outputLayers = cmd.colorizer(opts);

      } else if (name == 'dissolve') {
        outputLayers = applyCommandToEachLayer(cmd.dissolve, targetLayers, arcs, opts);

      } else if (name == 'dissolve2') {
        outputLayers = cmd.dissolve2(targetLayers, targetDataset, opts);

      } else if (name == 'divide') {
        cmd.divide(targetLayers, targetDataset, source, opts);

      } else if (name == 'dots') {
        outputLayers = applyCommandToEachLayer(cmd.dots, targetLayers, arcs, opts);

      } else if (name == 'drop') {
        cmd.drop2(catalog, targets, opts);
        // cmd.drop(catalog, targetLayers, targetDataset, opts);

      } else if (name == 'each') {
        applyCommandToEachLayer(cmd.evaluateEachFeature, targetLayers, arcs, opts.expression, opts);

      } else if (name == 'erase') {
        outputLayers = cmd.eraseLayers(targetLayers, source, targetDataset, opts);

      } else if (name == 'explode') {
        outputLayers = applyCommandToEachLayer(cmd.explodeFeatures, targetLayers, arcs, opts);

      } else if (name == 'external') {
        cmd.external(opts);

      } else if (name == 'filter') {
        outputLayers = applyCommandToEachLayer(cmd.filterFeatures, targetLayers, arcs, opts);

      } else if (name == 'filter-fields') {
        applyCommandToEachLayer(cmd.filterFields, targetLayers, opts.fields);

      } else if (name == 'filter-geom') {
        applyCommandToEachLayer(cmd.filterGeom, targetLayers, arcs, opts);

      } else if (name == 'filter-islands') {
        applyCommandToEachLayer(cmd.filterIslands, targetLayers, targetDataset, opts);

      } else if (name == 'filter-islands2') {
        applyCommandToEachLayer(cmd.filterIslands2, targetLayers, targetDataset, opts);

      } else if (name == 'filter-slivers') {
        applyCommandToEachLayer(cmd.filterSlivers, targetLayers, targetDataset, opts);

      } else if (name == 'frame') {
        cmd.frame(catalog, source, opts);

      } else if (name == 'fuzzy-join') {
        applyCommandToEachLayer(cmd.fuzzyJoin, targetLayers, arcs, source, opts);

      } else if (name == 'graticule') {
        catalog.addDataset(cmd.graticule(targetDataset, opts));

      } else if (name == 'help') {
        // placing this here to handle errors from invalid command names
        getOptionParser().printHelp(command.options.command);

      } else if (name == 'i') {
        if (opts.replace) catalog = new Catalog();
        targetDataset = cmd.importFiles(command.options);
        if (targetDataset) {
          catalog.addDataset(targetDataset);
          outputLayers = targetDataset.layers; // kludge to allow layer naming below
        }

      } else if (name == 'include') {
        cmd.include(opts);

      } else if (name == 'info') {
        cmd.printInfo(expandCommandTargets(targets));

      } else if (name == 'inlay') {
        outputLayers = cmd.inlay(targetLayers, source, targetDataset, opts);

      } else if (name == 'inspect') {
        applyCommandToEachLayer(cmd.inspect, targetLayers, arcs, opts);

      } else if (name == 'innerlines') {
        outputLayers = applyCommandToEachLayer(cmd.innerlines, targetLayers, arcs, opts);

      } else if (name == 'join') {
        applyCommandToEachLayer(cmd.join, targetLayers, targetDataset, source, opts);

      } else if (name == 'lines') {
        outputLayers = applyCommandToEachLayer(cmd.lines, targetLayers, targetDataset, opts);

      } else if (name == 'merge-layers') {
        // returned layers are modified input layers
        // (assumes that targetLayers are replaced by outputLayers below)
        outputLayers = cmd.mergeLayers(targetLayers, opts);

      } else if (name == 'mosaic') {
        // opts.no_replace = true; // add mosaic as a new layer
        outputLayers = cmd.mosaic(targetLayers, targetDataset, opts);

      } else if (name == 'o') {
        outputFiles = exportTargetLayers(targets, opts);
        if (opts.final) {
          // don't propagate data if output is final
          catalog = null;
        }
        return writeFiles(outputFiles, opts, done);

      } else if (name == 'point-grid') {
        outputLayers = [cmd.pointGrid(targetDataset, opts)];
        if (!targetDataset) {
          catalog.addDataset({layers: outputLayers});
        }

      } else if (name == 'grid') {
        outputDataset = cmd.polygonGrid(targetLayers, targetDataset, opts);

      } else if (name == 'points') {
        outputLayers = applyCommandToEachLayer(cmd.createPointLayer, targetLayers, targetDataset, opts);

      } else if (name == 'polygons') {
        outputLayers = cmd.polygons(targetLayers, targetDataset, opts);

      } else if (name == 'proj') {
        initProjLibrary(opts, function() {
          var err = null;
          try {
            targets.forEach(function(targ) {
              var destArg = opts.match || opts.crs || opts.projection;
              var srcInfo, destInfo;
              if (opts.init) {
                srcInfo = getCrsInfo(opts.init, catalog);
                if (!srcInfo.crs) stop("Unknown projection source:", opts.init);
                setDatasetCRS(targ.dataset, srcInfo);
              }
              if (destArg) {
                destInfo = getCrsInfo(destArg, catalog);
                cmd.proj(targ.dataset, destInfo, opts);
              }
            });
          } catch(e) {
            err = e;
          }
          done(err);
        });
        return; // async command

      } else if (name == 'rectangle') {
        if (source || opts.bbox || targets.length === 0) {
          catalog.addDataset(cmd.rectangle(source, opts));
        } else {
          outputLayers = cmd.rectangle2(targets[0], opts);
        }

      } else if (name == 'rectangles') {
        outputLayers = applyCommandToEachLayer(cmd.rectangles, targetLayers, targetDataset, opts);

      } else if (name == 'rename-fields') {
        applyCommandToEachLayer(cmd.renameFields, targetLayers, opts.fields);

      } else if (name == 'rename-layers') {
        cmd.renameLayers(targetLayers, opts.names);

      } else if (name == 'require') {
        cmd.require(targets, opts);

      } else if (name == 'run') {
        cmd.run(targets, catalog, opts, done);
        return;

      } else if (name == 'scalebar') {
        cmd.scalebar(catalog, opts);

      } else if (name == 'shape') {
        catalog.addDataset(cmd.shape(opts));

      } else if (name == 'simplify') {
        if (opts.variable) {
          cmd.variableSimplify(targetLayers, targetDataset, opts);
        } else {
          cmd.simplify(targetDataset, opts);
        }

      } else if (name == 'slice') {
        outputLayers = cmd.sliceLayers(targetLayers, source, targetDataset, opts);

      } else if (name == 'snap') {
        cmd.snap(targetDataset, opts);

      } else if (name == 'sort') {
        applyCommandToEachLayer(cmd.sortFeatures, targetLayers, arcs, opts);

      } else if (name == 'split') {
        outputLayers = applyCommandToEachLayer(cmd.splitLayer, targetLayers, opts.expression, opts);

      } else if (name == 'split-on-grid') {
        outputLayers = applyCommandToEachLayer(cmd.splitLayerOnGrid, targetLayers, arcs, opts);

      } else if (name == 'stitch') {
        cmd.stitch(targetDataset);

      } else if (name == 'style') {
        applyCommandToEachLayer(cmd.svgStyle, targetLayers, targetDataset, opts);

      } else if (name == 'symbols') {
        applyCommandToEachLayer(cmd.symbols, targetLayers, opts);

      } else if (name == 'subdivide') {
        outputLayers = applyCommandToEachLayer(cmd.subdivideLayer, targetLayers, arcs, opts.expression);

      } else if (name == 'target') {
        cmd.target(catalog, opts);

      } else if (name == 'union') {
        outputLayers = cmd.union(targetLayers, targetDataset, opts);

      } else if (name == 'uniq') {
        applyCommandToEachLayer(cmd.uniq, targetLayers, arcs, opts);

      } else {
        // throws error if command is not registered
        cmd.runExternalCommand(command, catalog);
      }

      // apply name parameter
      if (('name' in opts) && outputLayers) {
        // TODO: consider uniqifying multiple layers here
        outputLayers.forEach(function(lyr) {
          lyr.name = opts.name;
        });
      }

      if (outputDataset) {
        catalog.addDataset(outputDataset); // also sets default target
        outputLayers = outputDataset.layers;
        if (targetLayers && !opts.no_replace) {
          // remove target layers from target dataset
          targetLayers.forEach(function(lyr) {
            catalog.deleteLayer(lyr, targetDataset);
          });
        }
      } else if (outputLayers && targetDataset && outputLayers != targetDataset.layers) {
        // integrate output layers into the target dataset
        if (opts.no_replace) {
          // make sure commands do not return input layers with 'no_replace' option
          if (!outputLayersAreDifferent(outputLayers, targetLayers || [])) {
            error('Command returned invalid output');
          }

          targetDataset.layers = targetDataset.layers.concat(outputLayers);
        } else {
          // TODO: consider replacing old layers as they are generated, for gc
          replaceLayers(targetDataset, targetLayers, outputLayers);
          // some operations leave unreferenced arcs that should be cleaned up
          if ((name == 'clip' || name == 'erase' || name == 'rectangle' ||
              name == 'rectangles' || name == 'filter' && opts.cleanup) && !opts.no_cleanup) {
            dissolveArcs(targetDataset);
          }
        }
        // use command output as new default target
        catalog.setDefaultTarget(outputLayers, targetDataset);
      }



      // delete arcs if no longer needed (e.g. after -points command)
      // (after output layers have been integrated)
      if (targetDataset) {
        cleanupArcs(targetDataset);
      }
    } catch(e) {
      return done(e);
    }

    done(null);

    function done(err) {
      T.stop('-');
      cb(err, err ? null : catalog);
    }
  }

  function outputLayersAreDifferent(output, input) {
    return !utils.some(input, function(lyr) {
      return output.indexOf(lyr) > -1;
    });
  }


  // Apply a command to an array of target layers
  function applyCommandToEachLayer(func, targetLayers) {
    var args = utils.toArray(arguments).slice(2);
    return targetLayers.reduce(function(memo, lyr) {
      var result = func.apply(null, [lyr].concat(args));
      if (utils.isArray(result)) { // some commands return an array of layers
        memo = memo.concat(result);
      } else if (result) { // assuming result is a layer
        memo.push(result);
      }
      return memo;
    }, []);
  }

  // Parse command line args into commands and run them
  // Function takes an optional Node-style callback. A Promise is returned if no callback is given.
  //   function(argv[, input], callback)
  //   function(argv[, input]) (returns Promise)
  // argv: String or array containing command line args.
  // input: (optional) Object containing file contents indexed by filename
  //
  function runCommands(argv) {
    var opts = importRunArgs.apply(null, arguments);
    _runCommands(argv, opts, function(err) {
      opts.callback(err);
    });
    if (opts.promise) return opts.promise;
  }

  // Similar to runCommands(), but returns output files to the callback or Promise
  //   instead of using file I/O.
  // Callback signature: function(<error>, <data>) -- data is an object
  //   containing output from any -o commands, indexed by filename.
  //
  function applyCommands(argv) {
    var opts = importRunArgs.apply(null, arguments);
    var callback = opts.callback;
    var outputArr = opts.output = []; // output gets added to this array
    _runCommands(argv, opts, function(err) {
      if (err) {
        return callback(err);
      }
      if (opts.legacy) return callback(null, toLegacyOutputFormat(outputArr));
      return callback(null, toOutputFormat(outputArr));
    });
    if (opts.promise) return opts.promise;
  }

  // Run commands with extra heap memory
  //   function(argv[, options], callback)
  //   function(argv[, options]) (returns Promise)
  // options: (optional) object with "xl" property, e.g. {xl: "16gb"}
  //
  function runCommandsXL(argv) {
    var opts = importRunArgs.apply(null, arguments);
    var mapshaperScript = require('path').join(__dirname, 'bin/mapshaper');
    var gb = parseFloat(opts.options.xl) || 8;
    var err;
    if (gb < 1 || gb > 64) {
      err = new Error('Unsupported heap size:' + gb + 'GB');
      printError(err);
      opts.callback(err);
      return opts.promise; // may be undefined
    }
    if (!loggingEnabled()) argv += ' -quiet'; // kludge to pass logging setting to subprocess
    var mb = Math.round(gb * 1000);
    var command = [process.execPath, '--max-old-space-size=' + mb, mapshaperScript, argv].join(' ');
    var child = require('child_process').exec(command, {}, function(err, stdout, stderr) {
      opts.callback(err);
    });
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
    if (opts.promise) return opts.promise;
  }

  // Parse the arguments from runCommands() or applyCommands()
  function importRunArgs(arg0, arg1, arg2) {
    var opts = {options: {}};
    if (utils.isFunction(arg1)) {
      opts.callback = arg1;
    } else if (utils.isFunction(arg2)) {
      opts.callback = arg2;
      // identify legacy input format (used by some tests)
      opts.legacy = arg1 && guessInputContentType(arg1) != null;
      opts.input = arg1;
    } else {
      // if no callback, create a promise and a callback for resolving the promise
      opts.promise = new Promise(function(resolve, reject) {
        opts.callback = function(err, data) {
          if (err) reject(err);
          else resolve(data);
        };
      });
    }
    if (!opts.legacy && utils.isObject(arg1)) {
      if (arg1.xl) {
        // options for runCommandsXL()
        opts.options = arg1;
      } else {
        // input data for runCommands() and applyCommands()
        opts.input = arg1;
      }
    }
    return opts;
  }

  // Return an object containing content of zero or more output files, indexed by filename.
  function toOutputFormat(arr) {
    return arr.reduce(function(memo, o) {
      memo[o.filename] = o.content;
      return memo;
    }, {});
  }

  // Unified function for processing calls to runCommands() and applyCommands()
  function _runCommands(argv, opts, callback) {
    var outputArr = opts.output || null,
        inputObj = opts.input,
        commands;
    try {
      commands = parseCommands(argv);
    } catch(e) {
      printError(e);
      return callback(e);
    }

    if (opts.legacy) {
      message("Warning: deprecated input format");
      commands = convertLegacyCommands(commands, inputObj);
      inputObj = null;
    }

    // add options to -i -o -join -clip -erase commands to bypass file i/o
    // TODO: find a less kludgy solution, e.g. storing input data using setStateVar()
    commands.forEach(function(cmd) {
      if (commandTakesFileInput(cmd.name) && inputObj) {
        cmd.options.input = inputObj;
      }
      if (cmd.name == 'o' && outputArr) {
        cmd.options.output = outputArr;
      }
    });
    runParsedCommands(commands, null, callback);
  }

  function commandTakesFileInput(name) {
    return (name == 'i' || name == 'join' || name == 'erase' || name == 'clip' || name == 'include');
  }

  function toLegacyOutputFormat(arr) {
    if (arr.length > 1) {
      // Return an array if multiple files are output
      return utils.pluck(arr, 'content');
    }
    if (arr.length == 1) {
      // Return content if a single file is output
      return arr[0].content;
    }
    return null;
  }

  function convertLegacyCommands(arr, inputObj) {
    var i = utils.find(arr, function(cmd) {return cmd.name == 'i';});
    var o = utils.find(arr, function(cmd) {return cmd.name == 'o';});
    if (!i) {
      i = {name: 'i', options: {}};
      arr.unshift(i);
    }
    i.options.files = ['__input__'];
    i.options.input = {__input__: inputObj};
    if (!o) {
      arr.push({name: 'o', options: {}});
    }
    return arr;
  }

  // TODO: rewrite tests and remove this function
  function testCommands(argv, done) {
    _runCommands(argv, {}, function(err, catalog) {
      var targets = catalog ? catalog.getDefaultTargets() : [];
      var output;
      if (!err && targets.length > 0) {
        // returns dataset for compatibility with some older tests
        output = targets[0].dataset;
      }
      done(err, output);
    });
  }

  // Execute a sequence of parsed commands
  // @commands Array of parsed commands
  // @catalog: Optional Catalog object containing previously imported data
  // @cb: function(<error>, <catalog>)
  //
  function runParsedCommands(commands, catalog, cb) {
    if (!catalog) {
      cb = createAsyncContext(cb); // use new context when creating new catalog
      catalog = new Catalog();
    } else if (catalog instanceof Catalog === false) {
      error("Changed in v0.4: runParsedCommands() takes a Catalog object");
    }

    if (!utils.isFunction(done)) {
      error("Missing a callback function");
    }

    if (!utils.isArray(commands)) {
      error("Expected an array of parsed commands");
    }

    if (commands.length === 0) {
      return done(new UserError("No commands to run"));
    }
    commands = readAndRemoveSettings(commands);
    if (!runningInBrowser()) {
      printStartupMessages();
    }
    commands = runAndRemoveInfoCommands(commands);
    if (commands.length === 0) {
      return done(null);
    }
    if (!runningInBrowser() && commands[commands.length-1].name == 'o') {
      // in CLI, set 'final' flag on final -o command, so the export function knows
      // that it can modify the output dataset in-place instead of making a copy.
      commands[commands.length-1].options.final = true;
    }
    commands = divideImportCommand(commands);
    utils.reduceAsync(commands, catalog, nextCommand, done);

    function nextCommand(catalog, cmd, next) {
      setStateVar('current_command', cmd.name); // for log msgs
      runCommand(cmd, catalog, next);
    }

    function done(err, catalog) {
      if (err) printError(err);
      cb(err, catalog);
      setStateVar('current_command', null);
    }
  }

  // If an initial import command indicates that several input files should be
  //   processed separately, then duplicate the sequence of commands to run
  //   once for each input file
  // @commands Array of parsed commands
  // Returns: either original command array or array of duplicated commands.
  //
  function divideImportCommand(commands) {
    var firstCmd = commands[0],
        opts = firstCmd.options;

    if (firstCmd.name != 'i' || opts.stdin || opts.merge_files ||
      opts.combine_files || !opts.files || opts.files.length < 2) {
      return commands;
    }

    return (opts.files).reduce(function(memo, file) {
      var importCmd = {
        name: 'i',
        options: utils.defaults({
          files:[file],
          replace: true  // kludge to replace data catalog
        }, opts)
      };
      memo.push(importCmd);
      memo.push.apply(memo, commands.slice(1));
      return memo;
    }, []);
  }

  function printStartupMessages() {
    // print heap memory message if running with a custom amount
    var rxp = /^--max-old-space-size=([0-9]+)$/;
    var arg = process.execArgv.find(function(s) {
      return rxp.test(s);
    });
    if (arg) {
      message('Allocating', rxp.exec(arg)[1] / 1000, 'GB of heap memory');
    }
  }

  // Some settings use command syntax and are parsed as commands.
  function readAndRemoveSettings(commands) {
    return commands.filter(function(cmd) {
      if (cmd.name == 'verbose') {
        setStateVar('VERBOSE', true);
      } else if (cmd.name == 'quiet') {
        setStateVar('QUIET', true);
      } else if (cmd.name == 'debug') {
        setStateVar('DEBUG', true);
      } else {
        return true;
      }
      return false;
    });
  }

  // Run informational commands and remove them from the array of parsed commands
  function runAndRemoveInfoCommands(commands) {
    return commands.filter(function(cmd) {
      if (cmd.name == 'version') {
        print(typeof VERSION == 'undefined' ? '' : VERSION);
      } else if (cmd.name == 'encodings') {
        printEncodings();
      } else if (cmd.name == 'projections') {
        printProjections();
      } else {
        return true;
      }
      return false;
    });
  }

  var RunCommands = /*#__PURE__*/Object.freeze({
    __proto__: null,
    runCommands: runCommands,
    applyCommands: applyCommands,
    runCommandsXL: runCommandsXL,
    testCommands: testCommands,
    runParsedCommands: runParsedCommands,
    runAndRemoveInfoCommands: runAndRemoveInfoCommands
  });

  // the mapshaper public api only has 4 functions
  var coreAPI = {
    runCommands,
    applyCommands,
    runCommandsXL,
    enableLogging
  };

  // Return an array containing points from a path iterator, clipped to a bounding box
  // Currently using this function for clipping styled polygons in the GUI to speed up layer rendering.
  // Artifacts along the edges make this unsuitable for clipping datasets
  // TODO: support clipping a single-part shape to multiple parts
  // TODO: prevent artifacts along edges
  function clipIterByBounds(iter, bounds) {
    var points = [];
    var bbox = getClippingBBox(bounds);
    var xy, xyp, first, isRing;
    while (iter.hasNext()) {
      xy = [iter.x, iter.y];
      addClippedPoint(points, xyp, xy, bbox);
      xyp = xy;
      if (!first) first = xy;
    }
    // detect closed rings
    isRing = pointsAreEqual(first, xy);
    if (isRing && points.length > 0 && !pointsAreEqual(points[0], points[points.length - 1])) {
      // some rings need to be closed
      points.push(points[0].concat());
    }
    if (isRing && points.length < 4 || points.length < 2) {
      // catch defective rings and polylines
      points = [];
    }
    return points;
  }

  function pointsAreEqual(a, b) {
    return a && b && a[0] === b[0] && a[1] === b[1];
  }

  //  2 3 4
  //  1 8 5
  //  0 7 6
  function getPointSector(x, y, bbox) {
    var bl = bbox[0];
    var tr = bbox[2];
    var i;
    if (x > tr[0]) {
      i = y > tr[1] && 4 || y >= bl[1] && 5 || 6; // right col
    } else if (x >= bl[0]) {
      i = y > tr[1] && 3 || y >= bl[1] && 8 || 7; // middle col
    } else {
      i = y > tr[1] && 2 || y >= bl[1] && 1 || 0; // left col
    }
    return i;
  }

  function isCornerSector(q) {
    return q == 0 || q == 2 || q == 4 || q == 6;
  }

  function isEdgeSector(q) {
    return q == 1 || q == 3 || q == 5 || q == 7;
  }

  // Number of CCW turns to normalize
  function getSectorRotation(q) {
    return q > 1 && q < 8 ? Math.floor(q / 2) : 0;
  }

  // i: rotation number
  // b: bbox object
  function rotateClippingBox(i, bbox) {
    var a = bbox[0],
        b = bbox[1],
        c = bbox[2],
        d = bbox[3];
    if (i === 0) {
      bbox = [a, b, c, d];
    } else if (i == 1) {
      bbox = [b, c, d, a];
    } else if (i == 2) {
      bbox = [c, d, a, b];
    } else if (i == 3) {
      bbox = [d, a, b, c];
    } else error('Invalid rotation number');
    return bbox;
  }

  // Convert a Bounds object to an array of 4 points designed to be rotated
  function getClippingBBox(bounds) {
    return [[bounds.xmin, bounds.ymin],
            [bounds.xmin, bounds.ymax],
            [bounds.xmax, bounds.ymax],
            [bounds.xmax, bounds.ymin]];
  }

  // i: ccw turns (0-3)
  function rotateSector(i, q) {
    return q < 8 && q >= 0 ? (q + 8 - i * 2) % 8 : q;
  }

  function getCornerBySector(q, bbox) {
    if (isCornerSector(q)) {
      return bbox[q / 2].concat();
    }
    error('Invalid corner sector:', q);
  }

  function addCornerPoint(points, q, bbox) {
    points.push(getCornerBySector(q, bbox));
  }

  function projectPointToEdge(p, s1, s2) {
    return s1[0] == s2[0] ? [s1[0], p[1]] : [p[0], s1[1]];
  }

  function addClippedPoint(points, p1, p2, bbox) {
    var q1 = p1 ? getPointSector(p1[0], p1[1], bbox) : -1;
    var q2 = getPointSector(p2[0], p2[1], bbox);
    var rot;
    // even polylines need to be connected along bbox edges to prevent artifact
    //   segments cutting through the bbox
    // TODO: convert disconnected parts to individual polylines or rings
    var closed = true;

    if (q1 == 8 && q2 == 8) {
      // segment is fully within box
      points.push(p2);

    } else if (q1 == q2) {
      // segment is fully within one outer sector (ignore it)

    } else if (q1 == -1) {
      // p2 is first point in the path
      if (q2 == 8) {
        points.push(p2);
      } else if (closed && isCornerSector(q2)) {
        addCornerPoint(points, q2, bbox);
      }

    } else if (q1 == 8) {
      // segment leaves box
      addSegmentBoundsIntersection(points, p1, p2, bbox);
      if (closed && isCornerSector(q2)) {
        addCornerPoint(points, q2, bbox);
      }

    } else if (q2 == 8) {
      // segment enters box
      addSegmentBoundsIntersection(points, p1, p2, bbox);
      points.push(p2);

    } else {
      // segment travels from one outer sector to another outer sector
      // normalise segment by rotating bbox so that p1 is
      // in the 0 or 1 sector relative to the bbox coordinates, if p1 is in an
      // outer segment
      rot = getSectorRotation(q1);
      bbox = rotateClippingBox(rot, bbox);
      q1 = rotateSector(rot, q1);
      q2 = rotateSector(rot, q2);
      if (q1 == 0) {
        // first point is in a corner sector
        if (q2 === 0 || q2 === 1 || q2 === 7) {
          // move to adjacent side -- no point

        } else if (q2 == 2 || q2 == 6) {
          // move to adjacent corner
          if (closed) addCornerPoint(points, q2, bbox);

        } else if (q2 == 3) {
          // far left edge (intersection or left corner)
          if (!addSegmentBoundsIntersection(points, p1, p2, bbox) && closed) addCornerPoint(points, 2, bbox);

        } else if (q2 == 4) {
          // opposite corner
          if (!addSegmentBoundsIntersection(points, p1, p2, bbox)) {
            // determine if bbox is to the left or right of segment
            if (geom.orient2D(p1[0], p1[1], p2[0], p2[1], bbox[0][0], bbox[0][1]) > 1) {
              // bbox is on the left (seg -> nearest corner is CCW)
              addCornerPoint(points, 6, bbox);
            } else {
              // bbox is on the right
              addCornerPoint(points, 2, bbox);
            }
          }
          if (closed) addCornerPoint(points, q2, bbox);

        } else if (q2 == 5) {
          // far right edge (intersection or right corner)
          if (!addSegmentBoundsIntersection(points, p1, p2, bbox) && closed) addCornerPoint(points, 6, bbox);
        }

      } else if (q1 == 1) {
        // first point is in a side sector
        if (q2 == 2 || q2 === 0) {
          // near left corner, near right corner
          addCornerPoint(points, q2, bbox);

        } else if (q2 == 3) {
          // to left side
          if (!addSegmentBoundsIntersection(points, p1, p2, bbox) && closed) addCornerPoint(points, 2, bbox);

        } else if (q2 == 4) {
          // to far left corner
          if (!addSegmentBoundsIntersection(points, p1, p2, bbox) && closed) addCornerPoint(points, 2, bbox);
          if (closed) addCornerPoint(points, 4, bbox);

        } else if (q2 == 5) {
          // to opposite side
          addSegmentBoundsIntersection(points, p1, p2, bbox);

        } else if (q2 == 6) {
          // to far right corner
          if (!addSegmentBoundsIntersection(points, p1, p2, bbox) && closed) addCornerPoint(points, 0, bbox);
          if (closed) addCornerPoint(points, 6, bbox);

        } else if (q2 == 7) {
          // to right side
          if (!addSegmentBoundsIntersection(points, p1, p2, bbox) && closed) addCornerPoint(points, 0, bbox);
        }

      } else {
        error("Sector error");
      }
    }
  }

  function addSegmentSegmentIntersection(points, a, b, c, d) {
    var p = geom.segmentIntersection(a[0], a[1], b[0], b[1], c[0], c[1],
          d[0], d[1]);
    if (p) points.push(p);
  }

  function addSegmentBoundsIntersection(points, a, b, bounds) {
    var hits = [];
    addSegmentSegmentIntersection(hits, a, b, bounds[0], bounds[1]); // first edge
    addSegmentSegmentIntersection(hits, a, b, bounds[0], bounds[3]); // last edge
    addSegmentSegmentIntersection(hits, a, b, bounds[1], bounds[2]);
    addSegmentSegmentIntersection(hits, a, b, bounds[2], bounds[3]);
    if (hits.length > 0 ) {
      points.push.apply(points, hits);
      return true;
    }
    return false;
  }

  // TODO: Need to rethink polygon repair: these function can cause problems
  // when part of a self-intersecting polygon is removed
  //
  function repairPolygonGeometry(layers, dataset, opts) {
    var nodes = addIntersectionCuts(dataset);
    layers.forEach(function(lyr) {
      repairSelfIntersections(lyr, nodes);
    });
    return layers;
  }

  // Remove any small shapes formed by twists in each ring
  // // OOPS, NO // Retain only the part with largest area
  // // this causes problems when a cut-off hole has a matching ring in another polygon
  // TODO: consider cases where cut-off parts should be retained
  //
  function repairSelfIntersections(lyr, nodes) {
    var splitter = getSelfIntersectionSplitter(nodes);

    lyr.shapes = lyr.shapes.map(function(shp, i) {
      return cleanPolygon(shp);
    });

    function cleanPolygon(shp) {
      var cleanedPolygon = [];
      forEachShapePart(shp, function(ids) {
        // TODO: consider returning null if path can't be split
        var splitIds = splitter(ids);
        if (splitIds.length === 0) {
          error("[cleanPolygon()] Defective path:", ids);
        } else if (splitIds.length == 1) {
          cleanedPolygon.push(splitIds[0]);
        } else {
          var shapeArea = geom.getPlanarPathArea(ids, nodes.arcs),
              sign = shapeArea > 0 ? 1 : -1,
              mainRing;

          var maxArea = splitIds.reduce(function(max, ringIds, i) {
            var pathArea = geom.getPlanarPathArea(ringIds, nodes.arcs) * sign;
            if (pathArea > max) {
              mainRing = ringIds;
              max = pathArea;
            }
            return max;
          }, 0);

          if (mainRing) {
            cleanedPolygon.push(mainRing);
          }
        }
      });
      return cleanedPolygon.length > 0 ? cleanedPolygon : null;
    }
  }

  var PolygonRepair = /*#__PURE__*/Object.freeze({
    __proto__: null,
    repairPolygonGeometry: repairPolygonGeometry,
    repairSelfIntersections: repairSelfIntersections
  });

  // Attach functions exported by modules to the "internal" object,
  // so they can be run by tests and by the GUI.
  // TODO: rewrite tests to import functions directly from modules,
  //       export only functions called by the GUI.

  var internal = {};
  internal.svg = Object.assign({}, SvgCommon, SvgStringify, SvgPathUtils, GeojsonToSvg);

  // Assign functions and objects exported from modules to the 'internal' namespace
  // to maintain compatibility with tests and to expose (some of) them to the GUI.

  Object.assign(internal, {
    Dbf,
    DbfReader,
    DouglasPeucker,
    geojson: GeoJSON,
    ShpType,
    topojson: TopoJSON,
    Visvalingam,
    ArcCollection,
    Bounds,
    clipIterByBounds,
    CommandParser,
    DataTable,
    editArcs,
    GeoJSONReader,
    Heap,
    NodeCollection,
    parseDMS,
    PathIndex,
    PolygonIndex,
    ShpReader,
    Transform
  });

  Object.assign(internal,
    AnchorPoints,
    ArcClassifier,
    ArcDissolve,
    Bbox2Clipping,
    BinArray$1,
    BufferCommon,
    Calc,
    CalcUtils,
    Catalog$1,
    ClipErase,
    ClipPoints,
    Colorizer,
    CustomProjections,
    DataAggregation,
    DatasetUtils,
    DataUtils,
    DbfImport,
    DelimExport,
    DelimImport,
    DelimReader,
    Encodings,
    Explode,
    Export,
    Expressions,
    FileExport,
    FileImport,
    FilenameUtils,
    FileReader$1,
    FileTypes,
    FilterGeom,
    Frame,
    Furniture,
    Geodesic,
    GeojsonExport,
    GeojsonImport,
    Import,
    Info,
    IntersectionCuts,
    Join,
    JoinCalc,
    JoinFilter,
    JoinTables,
    JsonImport,
    JsonTable,
    KeepShapes,
    LatLon,
    LayerUtils,
    Lines,
    Logging,
    MergeFiles,
    Merging,
    MosaicIndex$1,
    OptionParsingUtils,
    OutputFormat,
    OverlayUtils,
    ParseCommands,
    PathBuffer,
    PathEndpoints,
    PathExport,
    Pathfinder,
    PathfinderUtils,
    PathImport,
    PathRepair,
    PathUtils,
    PixelTransform,
    PointPolygonJoin,
    Points,
    PointUtils,
    PolygonDissolve,
    PolygonDissolve2,
    PolygonHoles,
    PolygonMosaic,
    PolygonNeighbors,
    PolygonRepair,
    PolygonTiler$1,
    PolylineClipping,
    PostSimplifyRepair,
    Proj,
    Projections,
    Rectangle,
    Rounding,
    RunCommands,
    Scalebar,
    SegmentIntersection,
    ShapeIter$1,
    ShapeUtils,
    ShpCommon,
    ShpExport,
    ShpImport,
    Simplify,
    SimplifyFast,
    SimplifyPct,
    Slivers,
    Snapping,
    SourceUtils,
    Split,
    State,
    Stringify,
    Svg,
    SvgProperties,
    Symbols,
    TargetUtils,
    TopojsonExport,
    TopojsonImport,
    Topology,
    Units,
    SvgHatch
  );

  // The entry point for the core mapshaper module
  var moduleAPI = Object.assign({
    cli, geom, utils, internal,
    importFile // Adding importFile() for compatibility with old tests; todo: rewrite tests
  }, cmd, coreAPI);  // Adding command functions to the top-level module API, for test compatibility

  if (typeof module === "object" && module.exports) {
    module.exports = moduleAPI;
  } else if (typeof window === "object" && window) {
    window.mapshaper = moduleAPI;
  }

}());
