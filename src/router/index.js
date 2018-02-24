import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Categories from '@/components/Categories'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories
    }
  ]
})
