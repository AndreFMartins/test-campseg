import { RouteConfig } from 'vue-router';

const Dashboard = (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/pages/Dashboard.vue');

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'dashboard',
    meta: {
      title: 'Dashboard',
    },
    component: Dashboard,
  },
];

export default routes;
