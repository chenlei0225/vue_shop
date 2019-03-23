/**
 * Created by Administrator on 2019/3/19 0019.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import user from './modules/user'
import shop from './modules/shop'
import msite from './modules/msite'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules:{
    user,
    shop,
    msite
  }
})
