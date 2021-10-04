<template>
  <div>
   <navbar/>
    <b-container class="min-vh-100" fluid>
          <b-row>
            <b-col
              class="
                header-information
                d-flex
                flex-column
                align-items-center
                justify-content-center
                text-white
              "
            >
              <div><i class="fa fa-user"></i> {{ getUserData.name }}<br /></div>
              <h1 v-if="pageTitle">{{ pageTitle }}</h1>
            </b-col>
          </b-row>
          <b-row class="content">
            <b-container>
              <b-row>
                <b-col class="card-dashboard-gradient bg-white py-4 px-2">
                  <router-view />
                </b-col>
              </b-row>
            </b-container>
          </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import Navbar from '@/views/template/Navbar.vue';
import Footer from '@/views/template/Footer.vue';

export default Vue.extend({
  name: 'Template',
  components: { Navbar, Footer },
  computed: {
    pageTitle() {
      return this.$route?.meta?.title;
    },
    ...mapGetters({ getUserData: 'getUserData' }),
  },
  created() {
    this.$store.commit('GET_USER_INFORMATION');
  },
});
</script>
<style lang="scss" scoped>
.header-information {
  background: #f8b500;
  background: -webkit-linear-gradient(to top, #f8b500, #fceabb);
  background: linear-gradient(to top, #f8b500, #fceabb);
  height: 20rem;
}
.content {
  margin-top: -5rem;
}

.card-dashboard-gradient {
  background: #304352;
  background: -webkit-linear-gradient(to right, #d7d2cc, #304352);
  background: linear-gradient(to right, #d7d2cc, #304352);
}
</style>
