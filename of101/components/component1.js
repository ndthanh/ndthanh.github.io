export default {
  name: 'One',

  setup() {
    const onSetColor = () => {
      window.Excel.run(async context => {
        const range = context.workbook.getSelectedRange();
        range.format.fill.color = 'green';
        await context.sync();
      });
    }
    return { onSetColor };
  },

  template: `
      <h2>Component One</h2>
      <q-btn
        push
        color="primary"
        label="Test OfficeJS Button"
        @click="onSetColor"
      ></q-btn>
  `,
};