import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import List from './views/List.vue'
import AddPackageForm from './views/AddPackageForm.vue'
import AppointTime from './views/AppointTime.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect:'/list',
      component: Home,
      children:[{
        path:'list',
        name:'list',
        component:List
      },
      {
        path:'addPackageForm',
        name:'addPackageForm',
        component:AddPackageForm
      },
      {
        path:'appointTimeForm',
        name:'appointTimeForm',
        component:AppointTime
      }
    ]
    },
    
  ]
})
