import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Country from '@/views/Country.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  { path: '/:name', component: Country },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
