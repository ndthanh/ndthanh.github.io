import router from './router.js'
// Vue.$router = router

const app = Vue.createApp({
  components: {},

  setup() {
    const { onMounted, ref } = Vue
    const $q = Quasar.useQuasar()
    const leftDrawerOpen = ref(false)

    onMounted(async () => { })

    return { leftDrawerOpen }
  },
  template: `
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
          Học Excel Online
        </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Cây menu của Add-in</q-item-label>
        <q-item
          clickable
          to="/"
        >
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
            <q-item-label caption>Trang chủ</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          to="/page1"
        >
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Page1</q-item-label>
            <q-item-label caption>Go to Page1</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
  `
})

window.Office.onReady(() => {
  app.use(router)
  app.use(Quasar)
  Quasar.iconSet.set(Quasar.iconSet.fontawesomeV6)
  app.mount('#q-app')
});