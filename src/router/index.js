import { createRouter, createWebHistory } from 'vue-router'
import StartView from '../views/StartView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: StartView
    },

    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },

    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
