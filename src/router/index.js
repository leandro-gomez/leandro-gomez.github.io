import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Thanks from '../views/Thanks.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/thanks',
    name: 'Thanks',
    component: Thanks
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/gists',
    name: 'Gists',
    component: () => import(/* webpackChunkName: "gists" */ '../views/Gists.vue')
  },
  {
    path: '/repos',
    name: 'GithubRepositories',
    component: () => import(/* webpackChunkName: "repos" */ '../views/GithubRepositories.vue')
  },
  {
    path: '/books',
    name: 'FavBooks',
    component: () => import(/* webpackChunkName: "books" */ '../views/FavBooks.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
