/**
 * Created by Administrator on 2019/3/19 0019.
 */
import {REQUEST_CATEGORYS,REQUEST_SHOPS,REQUEST_ADDRESS} from './mutation-type'

export default {
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
