import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Example1 from '@/components/Example1'
import Example2 from '@/components/Example2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/example1',
      component: Example1
    },
    {
      path: '/example2',
      component: Example2
    }
  ]
})
