import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import List from './views/List.vue'
import AddPackageForm from './views/AddPackageForm.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[{
        path:'list',
        name:'list',
        component:List
      },
      {
        path:'form',
        name:'form',
        component:AddPackageForm
      }
    ]
    },
    
  ]
})
