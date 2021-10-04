import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import AuthRoutes from '@/views/auth/routes';
import DashboardRoutes from '@/views/dashboard/routes';
import UserRoutes from '@/views/users/routes';

const Template = () => import(/* webpackChunkName: "template" */ '@/views/template/Template.vue');
const ErrorPage = () => import(/* webpackChunkName: "error-page" */ '@/views/template/pages/ErrorPage.vue');
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  ...AuthRoutes,
  {
    path: '/dashboard',
    component: Template,
    meta: {
      auth: true,
    },
    children: [
      ...DashboardRoutes,
      ...UserRoutes,
    ],
  },
  { path: '*', beforeEnter: (to, from, next) => { next('/404'); } },
  {
    path: '/404',
    alias: '/403',
    name: 'error-page',
    component: ErrorPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
