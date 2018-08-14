import Vue        from 'vue'
import Router     from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Part       from '@/components/part'
import List       from '@/components/list'
import UserEdit   from '@/components/UserEdit.vue'

Vue.use(Router);

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
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/user/:id',
      component: UserEdit,
      props: true
    }
  ]

})
