/**
 * Created by Administrator on 2019/3/19 0019.
 */
import {reqShops,reqCategorys,reqAddress} from '../api'
import {REQUEST_SHOPS,REQUEST_CATEGORYS,REQUEST_ADDRESS} from './mutation-type'

export default {
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
  }
}
