import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import PostContainer from '../components/MainPostContainer.vue'
import Search from '../components/SearchPostContainer.vue'
import PostDetails from '../components/PostDetails.vue'
import ProfilePage from '../components/ProfilePage.vue'
import AddPost from '../components/AddPost.vue'
import Settings from '../components/Settings.vue'
import AccountSettings from '../components/AccountSettings.vue'
import OtherProfilePage from '../components/OtherProfilePage.vue'
import TopicPage from '../components/TopicPage.vue'
import Report from '../components/Report.vue'
import SearchPage from '../components/SearchPage.vue'
import MessagePage from '../components/MessagePage.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: { showTopBar: false, showSidebars: false }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { showTopBar: false, showSidebars: false }
  },
  {
    path: '/postcontainer',
    name: 'PostContainer',
    component: PostContainer,
    meta: { showTopBar: true, showSidebars: true }
  },
  {
    path: '/search/:query',
    name: 'Search',
    component: Search,
    props: true,
    meta: { showTopBar: true, showSidebars: true }
  },
  {
    path: '/postdetails',
    name: 'PostDetails',
    component: PostDetails,
    meta: { showTopBar: true, showSidebars: true }
  },
  {
    path: '/profilepage',
    name: 'ProfilePage',
    component: ProfilePage,
    meta: { showTopBar: true, showSidebars: true }
  },
  {
    path: '/add-post',
    name: 'AddPost',
    component: AddPost,
    meta: { showTopBar: true, showSidebars: false }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: { showTopBar: true, showSidebars: false }
  },
  {
    path: '/account-settings',
    name: 'AccountSettings',
    component: AccountSettings,
    meta: { showTopBar: true, showSidebars: false }
  },
  {
    path: '/other-profile',
    name: 'OtherProfilePage',
    component: OtherProfilePage,
    meta: { showTopBar: true, showSidebars: true }
  },
  {
    path: '/topic-page',
    name: 'TopicPage',
    component: TopicPage,
    meta: { showTopBar: true, showSidebars: true }
  },
  {
    path: '/report',
    name: 'Report',
    component: Report,
    meta: { showTopBar: true, showSidebars: false }
  },
  {
    path: '/search-page',
    name: 'SearchPage',
    component: SearchPage,
    meta: { showTopBar: true, showSidebars: true }
  },
  {
    path: '/message-page',
    name: 'MessagePage',
    component: MessagePage,
    meta: { showTopBar: true, showSidebars: false }
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
