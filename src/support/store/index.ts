import Vue from 'vue';
import Vuex from 'vuex';
import JwtDecode from 'jwt-decode';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      role: 'common',
      name: '',
      username: '',
    },
  },
  getters: {
    getUserData: (state) => state.user,
  },
  mutations: {
    GET_USER_INFORMATION(state) {
      state.user = {
        ...state.user,
        ...((JwtDecode(localStorage.getItem('user-token') as string) as any)?.user ?? {}),
      };
    },
  },

});
