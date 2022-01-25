import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'IP Address Tracker App',
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

// Updates title of the page
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})
export default router
