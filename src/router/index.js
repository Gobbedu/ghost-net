import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormView from '../views/FormView.vue'
import PlotView from '../views/PlotView.vue'
import ContactView from '../views/ContactView.vue'


const routes = [
  { path: '/',          name: 'home',    component: HomeView  },
  { path: '/form',      name: 'form',    component: FormView  },
  { path: '/analytics', name: 'plot',    component: PlotView  },
  { path: '/contact',   name: 'contact', component: ContactView  },
/* { path: '/about',name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // webpackChunkName: "about"
    component: () => import('../views/AboutView.vue')
  }
*/
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
