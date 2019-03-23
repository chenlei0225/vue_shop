/**
 * Created by Administrator on 2019/3/12 0012.
 */
import Msite from '../views/Msite.vue'
import Order from '../views/Order.vue'
import Profile from '../views/Profile.vue'
import Search from '../views/Search.vue'
import Login from '../views/Login.vue'
import Shop from '../views/Shop/Shop.vue'
import ShopGoods from '../views/Shop/ShopGoods.vue'
import ShopRating from '../views/Shop/ShopRating.vue'
import ShopInfo from '../views/Shop/ShopInfo.vue'


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
  },
  {
    path:'/login',
    component:Login,
  },
  {
    path:'/shop',
    component:Shop,
    children:[
      {
        path:'/shop/goods',
        component:ShopGoods,
      },
      {
        path:'/shop/ratings',
        component:ShopRating,
      },
      {
        path:'/shop/info',
        component:ShopInfo,
      },
      {
        path:'/shop',
        redirect:'/shop/goods'
      }
    ]
  },
  {
    path:'/',
    redirect:'/msite'
  }
]
