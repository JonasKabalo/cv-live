import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import OpenAI from './pages/OpenAI.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/openai',
    name: 'OpenAI',
    component: OpenAI,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
