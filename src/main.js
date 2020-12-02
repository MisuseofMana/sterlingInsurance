import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)

import Employee from './components/EmployeeBlock.vue'
import Home from './components/HomeBlock.vue'
import Medicare from './components/MedicareBlock.vue'
import Scheduling from './components/SchedulingBlock.vue'
import Team from './components/TeamBlock.vue'
import Serve from './components/ServeBlock.vue'
import NotFoundComponent from './components/NotFoundComponent.vue'


const routes = [
  {path: '/', component:Home },
  {path: '/employee', component:Employee },
  {path: '/medicare', component:Medicare },
  {path: '/scheduling', component:Scheduling },
  {path: '/who-we-serve', component:Serve },
  {path: '/our-team', component:Team },
  {path: '*', component:NotFoundComponent },
]

const router = new VueRouter({
  mode:'history',
  routes // short for `routes: routes`
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
