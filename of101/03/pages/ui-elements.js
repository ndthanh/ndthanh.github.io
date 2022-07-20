const stringOptions = [
  'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
]

export default {
  name: 'UIElement',

  setup() {
    const { ref } = Vue
    const title = 'UI Elements'
    const options = ref(stringOptions)

    return {
      step: ref(1),
      dateModel: ref({ from: '2020/07/08', to: '2020/07/17' }),
      title,
      slide: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',
      hex: ref('#FF00FF'),
      hexa: ref('#FF00FFCC'),
      rgb: ref('rgb(0,0,0)'),
      rgba: ref('rgba(255,0,255,0.8)'),
      model: ref(null),
      options,
      filterFn(val, update) {
        if (val === '') {
          update(() => {
            options.value = stringOptions

            // here you have access to "ref" which
            // is the Vue reference of the QSelect
          })
          return
        }

        update(() => {
          const needle = val.toLowerCase()
          options.value = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
        })
      },
      selected: ref('Pleasant surroundings'),
      ticked: ref(['Quality ingredients', 'Good table presentation']),
      expanded: ref(['Satisfied customers', 'Good service (disabled node)', 'Pleasant surroundings']),

      simple: [
        {
          label: 'Satisfied customers',
          children: [
            {
              label: 'Good food',
              children: [
                { label: 'Quality ingredients' },
                { label: 'Good recipe' }
              ]
            },
            {
              label: 'Good service (disabled node)',
              disabled: true,
              children: [
                { label: 'Prompt attention' },
                { label: 'Professional waiter' }
              ]
            },
            {
              label: 'Pleasant surroundings',
              children: [
                { label: 'Happy atmosphere' },
                { label: 'Good table presentation' },
                { label: 'Pleasing decor' }
              ]
            }
          ]
        }
      ]
    }
  },

  template: `
        <q-page padding>
            <q-breadcrumbs>
                <q-breadcrumbs-el icon="home" to="/" />
                <q-breadcrumbs-el :label="title" />
            </q-breadcrumbs>
            <h6>Một số loại UI Elements mà bạn có thể sử dụng</h6>
            
            <br>
            <p class="text-bold">Các loại Buttons</p>
            <q-separator />
            
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

            <br>
            <p class="text-bold">Các loại Input</p>
            <q-separator />

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

            <br>
            <p class="text-bold">Các loại banner</p>
            <q-separator />

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

            <br>
            <p class="text-bold">Carousel</p>
            <q-separator />

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

            <br>
            <p class="text-bold">Color picker</p>
            <q-separator />

            <div class="q-pa-md row items-start q-gutter-md">
              <q-color v-model="hex" class="my-picker" />
              <q-color v-model="hexa" class="my-picker" />
              <q-color v-model="rgb" class="my-picker" />
              <q-color v-model="rgba" class="my-picker" />
            </div>

            <br>
            <p class="text-bold">Select / Dropdown</p>
            <q-separator />

            <p>Selected: {{ model }}<p>
            <q-select
              filled
              v-model="model"
              use-input
              input-debounce="0"
              label="Hide selected"
              :options="options"
              @filter="filterFn"
              style="width: 250px"
            >
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">
                    No results
                  </q-item-section>
                </q-item>
              </template>
            </q-select>

            <br>
            <p class="text-bold">Date Picker</p>
            <q-separator />

            <div class="q-pa-md">
              <div class="q-pb-sm">
                Model: {{ dateModel }}
              </div>

              <q-date v-model="dateModel" range />
            </div>

            <br>
            <p class="text-bold">Spinner</p>
            <q-separator />
            
            <div class="q-pa-md q-gutter-xs">
              <div class="q-gutter-md row justify-center" style="font-size: 2em">
                <q-spinner-audio color="secondary"></q-spinner-audio>
                <q-spinner-ball color="red" />
                <q-spinner-bars color="purple" />
                <q-spinner-box color="deep-orange" />
                <q-spinner-clock color="brown" />
                <q-spinner-comment color="deep-purple" />
                <q-spinner-cube color="indigo" />
                <q-spinner-dots color="blue" />
                <q-spinner-facebook color="light-blue" />
                <q-spinner-gears color="cyan" />
                <q-spinner-grid color="teal" />
                <q-spinner-hearts color="green" />
                <q-spinner-hourglass color="light-green" />
                <q-spinner-infinity color="lime" />
                <q-spinner-ios color="yellow" />
                <q-spinner-orbit color="blue" />
                <q-spinner-oval color="amber" />
                <q-spinner-pie color="orange" />
                <q-spinner-puff color="deep-orange" />
                <q-spinner-radio color="brown" />
                <q-spinner-rings color="grey" />
                <q-spinner-tail color="blue-grey" />
              </div>
            </div>

            <br />
            <p class="text-bold">Stepper</p>
            <q-separator />

            <div class="q-pa-md">
              <q-stepper
                v-model="step"
                vertical
                color="primary"
                animated
              >
                <q-step
                  :name="1"
                  title="Select campaign settings"
                  icon="settings"
                  :done="step > 1"
                >
                  For each ad campaign that you create, you can control how much you're willing to
                  spend on clicks and conversions, which networks and geographical locations you want
                  your ads to show on, and more.

                  <q-stepper-navigation>
                    <q-btn @click="step = 2" color="primary" label="Continue" />
                  </q-stepper-navigation>
                </q-step>

                <q-step
                  :name="2"
                  title="Create an ad group"
                  caption="Optional"
                  icon="create_new_folder"
                  :done="step > 2"
                >
                  An ad group contains one or more ads which target a shared set of keywords.

                  <q-stepper-navigation>
                    <q-btn @click="step = 4" color="primary" label="Continue" />
                    <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
                  </q-stepper-navigation>
                </q-step>

                <q-step
                  :name="3"
                  title="Ad template"
                  icon="assignment"
                  disable
                >
                  This step won't show up because it is disabled.
                </q-step>

                <q-step
                  :name="4"
                  title="Create an ad"
                  icon="add_comment"
                >
                  Try out different ad text to see what brings in the most customers, and learn how to
                  enhance your ads using features like ad extensions. If you run into any problems with
                  your ads, find out how to tell if they're running and how to resolve approval issues.

                  <q-stepper-navigation>
                    <q-btn color="primary" label="Finish" />
                    <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
                  </q-stepper-navigation>
                </q-step>
              </q-stepper>
            </div>

            <br />
            <p class="text-bold">Tree</p>
            <q-separator />

            <div class="q-pa-md row q-col-gutter-sm">
            <q-tree class="col-12 col-sm-6"
              :nodes="simple"
              node-key="label"
              tick-strategy="leaf"
              v-model:selected="selected"
              v-model:ticked="ticked"
              v-model:expanded="expanded"
            />
            <div class="col-12 col-sm-6 q-gutter-sm">
              <div class="text-h6">Selected</div>
              <div>{{ selected }}</div>

              <q-separator spaced />

              <div class="text-h6">Ticked</div>
              <div>
                <div v-for="tick in ticked" :key="'ticked - ' + tick">
                  {{ tick }}
                </div>
              </div>

              <q-separator spaced />

              <div class="text-h6">Expanded</div>
              <div>
                <div v-for="expand in expanded" :key="'expanded - ' + expand">
                  {{ expand }}
                </div>
              </div>
            </div>
          </div>

        </q-page>
    `,
}