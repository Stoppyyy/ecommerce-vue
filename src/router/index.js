import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    /*
    {
      path: '/product/:id',
      name: 'product',
      component: ProductView
    },
    */
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
      path: '/electronics',
      name: 'electronics',
      component: () => import('../views/ElectronicsView.vue')
    },
    {
      path: '/jewelery',
      name: "jewelery",
      component: () => import('../views/JeweleryView.vue')
    },
    {
      path: '/mens-clothing',
      name: "men's clothing",
      component: () => import('../views/MensClothingView.vue')
    },
    {
      path: '/womens-clothing',
      name: "women's clothing",
      component: () => import('../views/WomensClothingView.vue')
    },
  ]
})

export default router;


