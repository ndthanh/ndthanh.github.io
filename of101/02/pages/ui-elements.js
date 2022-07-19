export default {
  name: 'UIElement',

  setup() {
    const { ref } = Vue
    const title = 'UI Elements'
    return {
      title,
      slide: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  },

  template: `
        <q-page padding>
            <q-breadcrumbs>
                <q-breadcrumbs-el icon="home" to="/" />
                <q-breadcrumbs-el :label="title" />
            </q-breadcrumbs>
            <h6>Một số loại UI Elements mà bạn có thể sử dụng</h6>
            <p class="text-bold">Các loại Buttons</p>
            <div class="q-pa-md q-gutter-sm">
              <q-btn flat color="primary" label="Flat" />
              <q-btn flat rounded color="primary" label="Flat Rounded" />
              <q-btn flat round color="primary" icon="card_giftcard" />
              <br>
              <q-btn outline color="primary" label="Outline" />
              <q-btn outline rounded color="primary" label="Outline Rounded" />
              <q-btn outline round color="primary" icon="card_giftcard" />
              <br>
              <q-btn push color="primary" label="Push" />
              <q-btn push color="primary" round icon="card_giftcard" />
              <q-btn push color="white" text-color="primary" label="Push" />
              <q-btn push color="white" text-color="primary" round icon="card_giftcard" />
              <br>
              <q-btn unelevated color="primary" label="Unelevated" />
              <q-btn unelevated rounded color="primary" label="Unelevated Rounded" />
              <q-btn unelevated round color="primary" icon="card_giftcard" />
              <br>
              <q-btn no-caps color="primary" label="No caps" />
              <br>
              <q-btn class="glossy" color="teal" label="Glossy" />
              <q-btn class="glossy" rounded color="deep-orange" label="Glossy Rounded" />
              <q-btn class="glossy" round color="primary" icon="card_giftcard" />
              <q-btn class="glossy" round color="secondary" icon="local_florist" />
              <q-btn class="glossy" round color="deep-orange" icon="local_activity" />
            </div>

            <p class="text-bold">Các loại Input</p>
            <div class="q-pa-md">
              <div class="q-gutter-md" style="max-width: 300px">
                <q-input v-model="text" label="Standard" />

                <q-input filled v-model="text" label="Filled" />

                <q-input outlined v-model="text" label="Outlined" />

                <q-input standout v-model="text" label="Standout" />

                <q-input standout="bg-teal text-white" v-model="text" label="Custom standout" />

                <q-input borderless v-model="text" label="Borderless" />

                <q-input rounded filled v-model="text" label="Rounded filled" />

                <q-input rounded outlined v-model="text" label="Rounded outlined" />

                <q-input rounded standout v-model="text" label="Rounded standout" />

                <q-input square filled v-model="text" label="Square filled" />

                <q-input square outlined v-model="text" label="Square outlined" />

                <q-input square standout v-model="text" label="Square standout" />
              </div>
            </div>

            <p class="text-bold">Các loại banner</p>
            <div class="q-pa-md q-gutter-sm">
              <q-banner class="bg-primary text-white">
                Unfortunately, the credit card did not go through, please try again.
                <template v-slot:action>
                  <q-btn flat color="white" label="Dismiss" />
                  <q-btn flat color="white" label="Update Credit Card" />
                </template>
              </q-banner>

              <q-banner class="bg-grey-3">
                <template v-slot:avatar>
                  <q-icon name="signal_wifi_off" color="primary" />
                </template>
                You have lost connection to the internet. This app is offline.
                <template v-slot:action>
                  <q-btn flat color="primary" label="Turn on Wifi" />
                </template>
              </q-banner>

              <q-banner inline-actions class="text-white bg-red">
                You have lost connection to the internet. This app is offline.
                <template v-slot:action>
                  <q-btn flat color="white" label="Turn ON Wifi" />
                </template>
              </q-banner>
            </div>

            <p class="text-bold">Carousel</p>
            <div class="q-pa-md">
              <div class="q-gutter-md">
                <q-carousel
                  v-model="slide"
                  transition-prev="scale"
                  transition-next="scale"
                  swipeable
                  animated
                  control-color="white"
                  navigation
                  padding
                  arrows
                  height="300px"
                  class="bg-primary text-white shadow-1 rounded-borders"
                >
                  <q-carousel-slide name="style" class="column no-wrap flex-center">
                    <q-icon name="style" size="56px" />
                    <div class="q-mt-md text-center">
                      {{ lorem }}
                    </div>
                  </q-carousel-slide>
                  <q-carousel-slide name="tv" class="column no-wrap flex-center">
                    <q-icon name="live_tv" size="56px" />
                    <div class="q-mt-md text-center">
                      {{ lorem }}
                    </div>
                  </q-carousel-slide>
                  <q-carousel-slide name="layers" class="column no-wrap flex-center">
                    <q-icon name="layers" size="56px" />
                    <div class="q-mt-md text-center">
                      {{ lorem }}
                    </div>
                  </q-carousel-slide>
                  <q-carousel-slide name="map" class="column no-wrap flex-center">
                    <q-icon name="terrain" size="56px" />
                    <div class="q-mt-md text-center">
                      {{ lorem }}
                    </div>
                  </q-carousel-slide>
                </q-carousel>

                <q-carousel
                  v-model="slide"
                  transition-prev="jump-right"
                  transition-next="jump-left"
                  swipeable
                  animated
                  control-color="white"
                  prev-icon="arrow_left"
                  next-icon="arrow_right"
                  navigation-icon="radio_button_unchecked"
                  navigation
                  padding
                  arrows
                  height="300px"
                  class="bg-purple text-white shadow-1 rounded-borders"
                >
                  <q-carousel-slide name="style" class="column no-wrap flex-center">
                    <q-icon name="style" size="56px" />
                    <div class="q-mt-md text-center">
                      {{ lorem }}
                    </div>
                  </q-carousel-slide>
                  <q-carousel-slide name="tv" class="column no-wrap flex-center">
                    <q-icon name="live_tv" size="56px" />
                    <div class="q-mt-md text-center">
                      {{ lorem }}
                    </div>
                  </q-carousel-slide>
                  <q-carousel-slide name="layers" class="column no-wrap flex-center">
                    <q-icon name="layers" size="56px" />
                    <div class="q-mt-md text-center">
                      {{ lorem }}
                    </div>
                  </q-carousel-slide>
                  <q-carousel-slide name="map" class="column no-wrap flex-center">
                    <q-icon name="terrain" size="56px" />
                    <div class="q-mt-md text-center">
                      {{ lorem }}
                    </div>
                  </q-carousel-slide>
                </q-carousel>
              </div>
            </div>
        </q-page>
    `,
}