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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
