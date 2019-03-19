/**
 * Created by Administrator on 2019/3/12 0012.
 */
import Msite from '../views/Msite.vue'
import Order from '../views/Order.vue'
import Profile from '../views/Profile.vue'
import Search from '../views/Search.vue'
import Login from '../views/Login.vue'


export default [
  {
    path:'/msite',
    component:Msite,
    meta:{
      isShow:true
    }
  },
  {
    path:'/order',
    component:Order,
    meta:{
      isShow:true
    }
  },
  {
    path:'/profile',
    component:Profile,
    meta:{
      isShow:true
    }
  },
  {
    path:'/search',
    component:Search,
    meta:{
      isShow:true
    },
    children:[]

  },
  {
    path:'/login',
    component:Login,
    children:[]
  },
  {
    path:'/',
    redirect:'/msite'
  }
]
