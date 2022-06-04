<template>
  <div>
    <div class="inner-hero analytics">
      <div class="w-container">
        <h1 class="hero-header">Analytics</h1>
      </div>
    </div>

      <div class="med-divider"></div>
    <div class="analytics">
      <h2 style="text-align: center;">Graphs & Maps go Here</h2>
    </div>
    <div style="padding: 0 30%">
      <Bar
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
    />
  </div>
    
  </div>
</template>

<script>
import {Bar} from 'vue-chartjs'

import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 10
    },
    height: {
      type: Number,
      default: 10
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      chartData: {
        labels: [ 'January', 'February', 'March' ],
        datasets: [ { data: [40, 20, 12] } ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
};
</script>

<style lang="css" scoped>
.hero-header {
    margin-bottom: 14px;
    color: #fff;
    font-size: 50px;
    line-height: 51px;
    letter-spacing: 2px;
}
.inner-hero.analytics {
    height: 400px;
    padding-top: 180px;
    background-image: linear-gradient(133deg, #202023, rgba(97, 97, 97, 0)), url(../assets/beach.jpg);
    background-position: 0px 0px, 50% 50%;
    background-size: auto, 500px;
    background-repeat: repeat, repeat;
    background-attachment: scroll, scroll;
}

.inner-hero {
    position: relative;
    height: 300px;
    padding-top: 125px;
    background-position: 50% 50%;
    background-size: cover;
    text-align: center;
}

.med-divider {
    display: block;
    width: 20%;
    height: 1px;
    margin: 16px auto;
    background-color: #bdbdbd;
    /* list-style-type: lower-alpha; */
}

</style>