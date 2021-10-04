<template>
  <b-container>
    <b-navbar toggleable="md" type="dark">
      <b-navbar-toggle target="nav-collapse"/>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <template v-for="(item, idx) in sidebarItems">
            <b-nav-item :to="item.action" :key="idx" class="rounded">
              <i :class="item.icon"></i> {{ item.title }}
            </b-nav-item>
          </template>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item @click="$auth.logout()" link-classes="text-danger">
            <i class="fas fa-solid fa-power-off"></i> Sair
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'Navbar',
  computed: {
    ...mapGetters({ getUserData: 'getUserData' }),
    sidebarItems() {
      return [
        {
          title: 'Dashboard',
          icon: 'fas fa-tachometer-alt',
          action: '/dashboard',
        },
        {
          title: 'Usuários',
          icon: 'fas fa-solid fa-user',
          action: '/users',
          role: 'admin',
        },
      ].filter(
        (item) => item.role === undefined || item.role === this.getUserData?.role,
      );
    },
  },
});
</script>
