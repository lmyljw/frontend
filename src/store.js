import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueRouter from 'vue-router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView)
Vue.use(Vuex)
Vue.use(VueRouter)
export default new Vuex.Store({
  state: {
      packageList:[],
      showing:'All',
      pacakage:{
        id:0,
        customerName:"",
        phoneNumber:"",
        status:0,
        appoinmentTime:0
      }
  },
  mutations: {
    showAll(state){
      state.showing='All'
    },
    showAppointed(state){
      state.showing='Appointed'
    },
    showUnappoint(state){
      state.showing='Unappoint'
    },
    showFetched(state){
      state.showing='Fetched';
    },
    initItem(state,payload){
      payload.data.map(item=>{
        switch(item.status){
          case(1):item.status='已取件';break;
          case(2):item.status='已预约';break;
          case(3):item.status='未预约';break;
        }
      })
      payload.data.map(item=>{
        if(item.appoinmentTime==0){
          item.appoinmentTime=''
        }else{
          var datetimeType=''
          var date=new Date(item.appoinmentTime)
          datetimeType+= date.getFullYear();   
          datetimeType+= "-" + date.getMonth(); 
          datetimeType+= "-" + date.getDay();   
          datetimeType+= " " + date.getHours();   
          datetimeType+= ":" + date.getMinutes();      
          datetimeType+= ":" + date.getSeconds();      
          item.appoinmentTime=datetimeType
        }
      })
      state.packageList=payload.data;
    },
    confirmFetch(state,index){
      state.packageList[index].status='已取件';
    },
    addSuccess(){
      $Message.info('This is a info tip');
    }
  },

  actions: {
    initItem(context){
      axios.get('http://localhost:8088/express-packages')
      .then((response)=>{
        context.commit('initItem',response)
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    confirmFetch(context,index){
      this.package=context.state.packageList[index]
      this.package.status=1
      axios.put('http://localhost:8088/express-packages/'+this.package.id,this.package)
      .then((response)=>{
        context.commit('confirmFetch',index)
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      })
    },
    appointTime(context,pacakage){
      console.log(context.state.packageList)
      let target=context.state.packageList.filter(item=>item.id==parseInt(pacakage.id))
      console.log(target)
      target[0].status=2
      target[0].appoinmentTime=pacakage.appoinmentTime
      axios.put('http://localhost:8088/express-packages/'+pacakage.id,target[0])
      .then((response)=>{
        context.commit('appointTime')
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      })
    },
    addPackage(context,pacakage){
      pacakage.status=3;
      axios.post('http://localhost:8088/express-packages',pacakage)
      .then((response)=>{
        context.commit('addSuccess')
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      })
    },
  }
})
