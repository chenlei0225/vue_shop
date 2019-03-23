/**
 * Created by Administrator on 2019/3/21 0021.
 */
import Vue from 'vue'

import {REQUEST_GOODS,REQUEST_INFO,REQUEST_RATINGS,DECREMENT_COUNT,INCREMENT_COUNT} from '../mutation-type'
import {reqGoods,reqInfo,reqRatings} from '../../api'

const state = {
  goods:[],
  info:{},
  ratings:[],
  isShowFood:false,
  cartFoods:[]
}

const actions = {
  async [REQUEST_GOODS]({commit},callback){
    const result = await reqGoods()
    if(result.code===0){
      const goods = result.data
      commit(REQUEST_GOODS,goods)
    }
    typeof callback=== 'function' && callback()
  },
  async [REQUEST_RATINGS]({commit}){
    const result = await reqRatings()
    if(result.code===0){
      const ratings = result.data
      commit(REQUEST_RATINGS,ratings)
    }
  },
  async [REQUEST_INFO]({commit}){
    const result = await reqInfo()
    if(result.code===0){
      const info = result.data
      commit(REQUEST_INFO,info)
    }
  },
  change({commit},isShowFood){
    commit('changeIsShowFood',isShowFood)
  },
  updateFoodCount({commit},{isAdd,food}){
    if(isAdd){
      commit(INCREMENT_COUNT,food)
    }else {
      commit(DECREMENT_COUNT,food)
    }
  }
}

const mutations = {
  [REQUEST_GOODS](state,goods){
    state.goods = goods
  },
  [REQUEST_RATINGS](state,ratings){
    state.ratings = ratings
  },
  [REQUEST_INFO](state,info){
    state.info = info
  },
  [INCREMENT_COUNT](state,food){
    if(food.count){
      food.count++
    }else {
      Vue.set(food, 'count', 1)
      state.cartFoods.push(food)
    }
  },
  [DECREMENT_COUNT](state,food){
    if(food.count){
      food.count--
      if(food.count===0){
        state.cartFoods.splice(state.cartFoods.indexOf(food),1)
      }
    }
  },
  changeIsShowFood(state,isShowFood){
    state.isShowFood = isShowFood
  }
}

const getters = {
  totalCount(state){
    return state.cartFoods.reduce((pre,food)=>pre+food.count,0)
  },
  totalPrice(state){
    return state.cartFoods.reduce((pre,food)=>pre+food.price*food.count,0)
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
