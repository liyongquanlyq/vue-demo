import Vue from 'vue'
import Router from 'vue-router'
import MainHome from '@/views/home/MainHome'
import NewsList from '@/views/news/NewsList'
import NewsDetail from '@/views/news/NewsDetail'
import ShareEntityDetail from '@/views/circle/ShareEntityDetail'
import Login from '@/views/user/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home/:type',
      name: 'MainHome',
      component: MainHome
    },
    {
      path: '/news',
      component: NewsList
    },
    {
      path: '/news/list/:type',
      component: NewsList
    },
    {
      path: '/news/detail/:type',
      name: 'NewsDetail',
      component: NewsDetail
    },
    {
      path: '/circle/detail/:type',
      name: 'ShareEntityDetail',
      component: ShareEntityDetail
    },
    {
      path: '/user/login',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      redirect: '/home/index'
    }
  ]
})
