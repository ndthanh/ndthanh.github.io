const app = Vue.createApp({
  data() {
    return {}
  },
  methods: {
    onSetColor() {
      window.Excel.run(async context => {
        const range = context.workbook.getSelectedRange();
        range.format.fill.color = 'green';
        await context.sync();
      });
    },
    NOTIFY(msg, type = 1) {
      this.$q.notify({
        message: msg,
        progress: true,
        type: type == 1 ? 'positive' : 'negative',
        color: type == 1 ? 'green' : 'red',
        position: 'top',
        timeout: 2000
      })
    }
  },
  created() { },
  mounted() { }
})

window.Office.onReady(() => {
  app.use(Quasar)
  Quasar.iconSet.set(Quasar.iconSet.fontawesomeV6)
  app.mount('#q-app')
});