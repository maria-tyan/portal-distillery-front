import { Bar } from 'vue-chartjs';

export default {
  extends: Bar,
  props: ['data', 'options'],
  mounted() {
    console.log(this.data, this.options);
    this.renderChart(this.data, this.options);
  },
};
