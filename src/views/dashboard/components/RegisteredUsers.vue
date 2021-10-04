<template>
  <div class="d-flex align-items-center justify-content-center mb-5">
    <div
      class="
        counter
        d-inline
        text-warning
        border-right
        pr-2
        mr-2
        border-warning
      "
    >
      <i class="fas fa-solid fa-users mr-2" style="font-size: 50px"></i>
      <!-- <b-icon icon="person" /> -->
      <span>{{total}}</span>
    </div>
    <h3 class="text-dark">Usuários</h3>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import DashboardRequest from '@/domain/dashboard/DashboardRequest';

export default Vue.extend({
  name: 'RegisteredUsers',
  data: () => ({ total: '0' }),
  mounted() {
    this.getData();
  },
  computed: mapGetters({ getUserData: 'getUserData' }),

  beforeDestroy() {
    clearTimeout();
  },
  methods: {
    async getData() {
      if (this.getUserData.role === 'admin') {
        try {
          const { data }: any = await DashboardRequest.getTotalUsers();
          this.total = String(data).padStart(2, '0');
        } finally {
          setTimeout(() => this.getData(), 10000);
        }
      }
    },
  },
});
</script>
<style lang="scss" scoped>
.counter {
  font-size: 70px;
}
</style>
