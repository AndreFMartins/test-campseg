import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueAuth from '@websanova/vue-auth/dist/v2/vue-auth';
import VueAxios from 'vue-axios';
import VueIziToast from 'vue-izitoast';
import VueSweetalert2 from 'vue-sweetalert2';
import App from '@/App.vue';
import router from '@/support/router';
import store from '@/support/store';
import '@/assets/scss/app.scss';
import http from '@/support/http/HttpRequest';
import auth from '@/support/auth';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueSweetalert2);
Vue.use(VueAxios, http);
Vue.use(VueAuth, {
  ...auth,
  plugins: {
    http,
    router,
  },
});

// @ts-ignore
Vue.use(VueIziToast, {
  position: 'topRight',
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
