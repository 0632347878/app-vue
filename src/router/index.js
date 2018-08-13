import Vue        from 'vue'
import Router     from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Part       from '@/components/part'
import Table      from '@/components/table'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/page',
      name: 'Part',
      component: Part
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    }
  ]
})
