/**
 * Created by Administrator on 2019/3/21 0021.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import {RESET_USER,REQUEST_USER,GET_USER} from '../mutation-type'
import {reqLogout,reqUser} from '../../api'

Vue.use(Vuex)

const state = {
  user:{}
}

const actions = {
  [REQUEST_USER]({commit},user){
    commit(REQUEST_USER,user)
  },
  [RESET_USER]({commit}){
    commit(RESET_USER)
  },
  async logout({commit}){
    const result = await reqLogout()
    if(result.code===0){
      commit(RESET_USER)
    }
  },
  async [GET_USER]({commit}){
    const result = await reqUser()
    if(result.code===0){
      const user = result.data
      commit(REQUEST_USER,user)
    }
  },
}

const mutations = {
  [REQUEST_USER](state,user){
    state.user = user
  },
  [RESET_USER](state){
    state.user = {}
  },
}

const getters = {

}

export default {
  state,
  actions,
  mutations,
  getters
}
