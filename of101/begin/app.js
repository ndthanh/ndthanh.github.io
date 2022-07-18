const app = Vue.createApp({
  data() {
    return {
      dealerId: null,
      productSN: null,
      product: {
        ten_san_pham: '',
        thoi_han_bao_hanh: 0,
        dung_luong: '',
        mau_sac: '',
        trang_thai: '',
        thoi_diem: '',
        dai_ly: '',
        bao_hanh_den: ''
      },
      isLoadingProductData: false,
      isActivatingInProgress: false,
      isProcessingWarranty: false,
      status: {
        'kich_hoat_bao_hanh': 'Đã kích hoạt bảo hành',
        'xu_ly_bao_hanh': 'Xử lý bảo hành',
        'dai_ly_nhap_kho': 'Trong kho đại lý'
      },
      expanded: false,
      secret: null,
      isPwd: true
    }
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