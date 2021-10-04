<template>
  <b-container>
    <b-row>
      <b-col class="align-self-center"> <RegisteredUsers v-if="getUserData.role === 'admin'" /> </b-col>
      <b-col> <OnlineUsersComponent /> </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import OnlineUsersComponent from '@/views/dashboard/components/OnlineUsersComponent.vue';
import RegisteredUsers from '@/views/dashboard/components/RegisteredUsers.vue';

export default Vue.extend({
  name: 'Dashboard',
  components: {
    OnlineUsersComponent,
    RegisteredUsers,
  },
  computed: mapGetters({ getUserData: 'getUserData' }),
});
</script>
