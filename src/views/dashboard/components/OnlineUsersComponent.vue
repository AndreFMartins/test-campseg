<template>
  <div class="w-100 d-flex flex-column align-items-center">
    <h4>Equipamentos da rede</h4>
    <apexchart
      type="donut"
      width="380"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import VueApexCharts from 'vue-apexcharts';
import DashboardRequest from '@/domain/dashboard/DashboardRequest';

export default Vue.extend({
  name: 'OnlineUsersComponent',
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      series: [0, 0],
      chartOptions: {
        chart: {
          width: 380,
          type: 'donut',
        },
        legend: {
          labels: {
            colors: '#fff',
            useSeriesColors: false,
          },
        },
        labels: ['Online', 'Offline'],

        colors: ['#f8b500', '#000000'],

        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: 'left',
              },
            },
          },
        ],
      },
    };
  },
  mounted() {
    this.getData();
  },
  beforeDestroy() {
    clearTimeout();
  },
  methods: {
    async getData() {
      try {
        const { data }: any = await DashboardRequest.getOnlineEquipments();
        const result = data.shift();
        const series = [result.Online, result.Offline];
        if (series.some((value, index) => this.series[index] !== value)) {
          this.series = series;
        }
      } finally {
        setTimeout(() => this.getData(), 5000);
      }
    },
  },
});
</script>
