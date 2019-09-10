import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index/index.vue'
import Login from '../views/login/login.vue'

const Commodity = () => import('../views/commodityManagement/commodity')
const ProductGroup = () => import('../views/commodityManagement/productGroup')
const Live = () => import('../views/courseManage/live')
const Radio = () => import('../views/courseManage/radio')
const Subject = () => import('../views/courseManage/subject')
const Video = () => import('../views/courseManage/video')
const UserList = () => import('../views/user/userList')
const FeedBack = () => import('../views/user/feedBack')
const MessageList = () => import('../views/user/messageList')

Vue.use(Router)

const constRouterMap = [
  {
    path: '/',
    name: 'index',
    component: Index

  },

  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login
  }]

const router = new Router({
  routes: constRouterMap
})

const routerMap = {
  Commodity,
  ProductGroup,
  Live,
  Radio,
  Subject,
  Video,
  UserList,
  FeedBack,
  MessageList
}

export {
  router,
  routerMap,
  constRouterMap
}
