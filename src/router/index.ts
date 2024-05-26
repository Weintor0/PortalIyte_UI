import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import PostContainer from '../components/MainPostContainer.vue'
import Search from '../components/SearchPostContainer.vue'
import PostDetails from '../components/PostDetails.vue'
import ProfilePage from '../components/ProfilePage.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: { showTopBar: false }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { showTopBar: false }
  },
  {
    path: '/postcontainer',
    name: 'PostContainer',
    component: PostContainer,
    meta: { showTopBar: true }
  },
  {
    path: '/search/:query',
    name: 'Search',
    component: Search,
    props: true,
    meta: { showTopBar: true }
  },
  {
    path: '/postdetails',
    name: 'PostDetails',
    component: PostDetails,
    meta: { showTopBar: true }
  },
  {
    path: '/profilepage',
    name: 'ProfilePage',
    component: ProfilePage,
    meta: { showTopBar: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
