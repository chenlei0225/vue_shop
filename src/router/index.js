/**
 * Created by Administrator on 2019/3/12 0012.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)
const router = new VueRouter({
  mode:'history',
  routes
})
export default router
