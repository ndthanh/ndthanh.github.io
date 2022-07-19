export default {
  name: 'ExcelProperties',
  components: {},

  setup() {
    const { ref } = Vue
    const title = 'Excel Properties'
    const log = ref('test')

    const readExcelProperties = () => {
      console.log('reading excel properties')
      Quasar.Notify.create('This is information')
      window.Excel.run(async context => {
        context.application.load("decimalSeparator,thousandsSeparator");
        context.application.cultureInfo.numberFormat.load("numberDecimalSeparator,numberGroupSeparator");
        await context.sync();

        // Local settings are set under the "Options > Advanced" menu.
        const localDecimalSeparator = context.application.decimalSeparator;
        const localThousandsSeparator = context.application.thousandsSeparator;

        const systemDecimalSeparator = context.application.cultureInfo.numberFormat.numberDecimalSeparator;
        const systemThousandsSeparator = context.application.cultureInfo.numberFormat.numberGroupSeparator;

        Quasar.Notify.create('This is information')
        Quasar.Notify.create(`Local decimal separator: ${localDecimalSeparator}`)

        log.value = `
        Local character settings: 
          Local decimal separator: ${localDecimalSeparator}
          Local thousands separator: ${localThousandsSeparator}

        System culture settings: 
          System decimal separator: ${systemDecimalSeparator}
          System thousands separator: ${systemThousandsSeparator}
        `

        await context.sync();
      });
    }

    return { title, log, readExcelProperties }
  },

  template: `
        <q-page padding>
            <q-breadcrumbs>
                <q-breadcrumbs-el icon="home" to="/" />
                <q-breadcrumbs-el :label="title" />
            </q-breadcrumbs>
            <h6>Truy cập một số thuộc tính của Excel thông qua OfficeJS Excel API</h6>            
            <q-btn
              push
              label="Đọc thuộc tính"
              text-color="primary"
              @click="readExcelProperties"
            ></q-btn>
            <pre>{{ log }}</pre>
        </q-page>
    `,
}