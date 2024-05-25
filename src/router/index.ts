import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import PostContainer from '../components/PostContainer.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/postcontainer',
    name: 'PostContainer',
    component: PostContainer
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
