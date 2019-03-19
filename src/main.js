import Vue from 'vue'
import App from './App.vue'

import router from './router'
import Header from './components/Header.vue'
import store from './store'

Vue.config.productionTip=false

Vue.component('Header',Header)

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
