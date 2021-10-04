import driverAuthBearer from '@websanova/vue-auth/dist/drivers/auth/bearer.esm';
import driverHttpAxios from '@websanova/vue-auth/dist/drivers/http/axios.1.x.esm';
import driverRouterVueRouter from '@websanova/vue-auth/dist/drivers/router/vue-router.2.x.esm';

export default {
  drivers: {
    auth: driverAuthBearer,
    http: driverHttpAxios,
    router: driverRouterVueRouter,
  },
  options: {
    rolesKey: 'role',
    stores: ['storage'],
    authRedirect: '/',
    tokenDefaultKey: 'user-token',
    loginData: {
      url: 'auth', method: 'POST', redirect: '/dashboard', fetchUser: true,
    },
    logoutData: {
      url: 'auth/logout', method: 'POST', redirect: '/', makeRequest: true,
    },
    fetchData: { url: 'auth/user', method: 'GET', enabled: true },
    refreshData: {
      url: 'auth/refresh', method: 'GET', enabled: true, interval: 30,
    },
  },
};
