import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormView from '../views/FormView.vue'
import PlotView from '../views/PlotView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ForgotPassword from '../views/ForgotPassword.vue'

const routes = [
  { path: '/',          name: 'Home',     component: HomeView  },
  { path: '/report',    name: 'Form',     component: FormView  },
  { path: '/analytics', name: 'Analytics',component: PlotView  },
  { path: '/login',     name: 'Login',    component: LoginView  },
  { path: '/register',  name: 'Register', component: RegisterView},
  { path: '/recover',   name: 'Recover',  component: ForgotPassword},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
