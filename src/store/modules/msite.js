/**
 * Created by Administrator on 2019/3/21 0021.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import {REQUEST_SHOPS,REQUEST_CATEGORYS,REQUEST_ADDRESS} from '../mutation-type'
import {reqShops,reqCategorys,reqAddress} from '../../api'

Vue.use(Vuex)

const state = {
  address:{},
  longitude:116.36867,
  latitude:40.10038,
  shops:[],
  categorys:[],
}

const actions = {
  async [REQUEST_SHOPS]({commit,state}){
    const {longitude,latitude} = state
    const result = await reqShops({longitude,latitude})
    if(result.code===0){
      commit(REQUEST_SHOPS,result.data)
    }
  },
  async [REQUEST_CATEGORYS]({commit,state}){
    const {longitude,latitude} = state
    const result = await reqCategorys({longitude,latitude})
    if(result.code===0){
      commit(REQUEST_CATEGORYS,result.data)
    }
  },
  async [REQUEST_ADDRESS]({commit,state}){
    const {longitude,latitude} = state
    const result = await reqAddress(longitude,latitude)
    if(result.code===0){
      commit(REQUEST_ADDRESS,result.data)
    }
  },
}

const mutations = {
  [REQUEST_SHOPS](state,shops){
    state.shops = shops
  },
  [REQUEST_CATEGORYS](state,categorys){
    state.categorys = categorys
  },
  [REQUEST_ADDRESS](state,address){
    state.address = address
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
