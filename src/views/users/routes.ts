import { RouteConfig } from 'vue-router';

const Users = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "users" */ '@/views/users/pages/Users.vue');

const routes: Array<RouteConfig> = [
  {
    path: '/users',
    name: 'users',
    component: Users,
    meta: {
      auth: { roles: 'admin', redirect: { name: 'dashboard' }, forbiddenRedirect: '/dashboard' },
      title: 'Gerenciar usuários',
    },
  },
];

export default routes;
