import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ChatBot from './views/ChatBot';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: ChatBot,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    }
  ]
})
