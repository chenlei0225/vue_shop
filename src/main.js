import Vue from 'vue'
import {Button} from 'mint-ui'
import router from './router'
import store from './store'

import App from './App.vue'
import Star from './components/Star.vue'
import Header from './components/Header.vue'
import CartControl from './views/Shop/CartControl.vue'

import './mock/mockServer'

Vue.config.productionTip=false
Vue.component('Star',Star)
Vue.component('Header',Header)
Vue.component('CartControl',CartControl)
Vue.component(Button.name,Button)

new Vue({
  el:'#app',
  // render:h=>h(App)
  components:{
    App
  },
  template:'<App/>',
  router,
  store
})
