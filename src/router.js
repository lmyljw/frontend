import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import List from './components/List.vue'
import AddPackageForm from './components/AddPackageForm.vue'
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
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
  ]
})
