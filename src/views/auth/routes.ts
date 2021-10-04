import { RouteConfig } from 'vue-router';

const Auth = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "auth" */ '@/views/auth/pages/Auth.vue');

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'auth',
    component: Auth,
    meta: {
      auth: false,
    },
  },
];

export default routes;
