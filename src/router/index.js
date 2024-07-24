import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Cart from '../components/Cart.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue')
    },
    {
      path: '/category/:name',
      name: 'category',
      component: () => import('../views/AllCategoryView.vue'),
      props: true,
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('../views/ProductDetailView.vue'),
      props: true,
    },
  ],
});

export default router;


