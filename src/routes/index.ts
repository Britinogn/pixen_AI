import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Generator from '../views/Generator.vue'
import { supabase } from '../lib/supabaseClient'

const routes: RouteRecordRaw[] = [

  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/',
    redirect: '/generator',
  },
  
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { hideNavbar:true , hideFooter:true },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {  hideNavbar:true , hideFooter:true },
  },
  {
    path: '/generator',
    name: 'Generator',
    component: Generator,
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, _from, next) => {
  const { data } = await supabase.auth.getSession()
  if (to.meta.requiresAuth && !data.session) {
    next('/login')
  } else if (to.path === '/login' && data.session) {
    next('/generator')
  } else {
    next()
  }
})

export default router