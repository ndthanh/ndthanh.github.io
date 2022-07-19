import router from './router.js'

const app = Vue.createApp({
  components: {},

  setup() {
    const { ref } = Vue
    const leftDrawerOpen = ref(false)

    return { leftDrawerOpen }
  },
  /**
   * Biến template chứa phần khung của trang Web
   * Một phần logic nhỏ chứa trạng thái đóng / mở được thiết lập
   * ở file này thông qua biến leftDrawerOpen.
   * Các "thành phần động" của trang Web sẽ được render 
   * vào trong thẻ <router-view />
   */
  template: `
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <!-- Phần nút hamburger menu dùng để đóng mở menu trái -->

        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <!-- Phần tiêu đề cạnh nút đóng mở menu bên tay trái -->

        <q-toolbar-title>
          Học Excel Online
        </q-toolbar-title>

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

        <!-- menu item "Home" -->

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

        <!-- menu item "Page1" -->

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

      <!-- <router-view /> tag để render các component khác -->

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