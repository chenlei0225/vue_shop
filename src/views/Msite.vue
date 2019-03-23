<template>
  <div>
    <section class="msite">
      <!--首页头部-->
      <Header :title="address.name||'正在定位中。。。'">
        <span class="header_search" slot="left">
          <i class="iconfont icon-sousuo"></i>
        </span>
        <span class="header_login" slot="right">
          <span class="header_login_text" v-if="!$store.state.user.user._id">登录|注册</span>
          <i class="iconfont icon-person" v-else></i>
        </span>
      </Header>
      <!--首页导航-->
      <nav class="msite_nav">
        <div class="swiper-container" v-if="categorys.length>0">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(categoryArr,index) in categorysArr" :key="index">
              <a href="javascript:" class="link_to_food" v-for="(category,index) in categoryArr">
                <div class="food_container">
                  <img :src="imgUrl+category.image_url">
                </div>
                <span>{{category.title}}</span>
              </a>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
        <img src="../assets/images/msite_back.svg" alt="" v-else>
      </nav>
      <!--首页附近商家-->
      <ShopList/>
    </section>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import 'swiper/dist/css/swiper.css'
  import Swiper from 'swiper'
  import ShopList from '../components/ShopList.vue'

  export default {
    data(){
      return {
        imgUrl:'https://fuss10.elemecdn.com'
      }
    },
    computed:{
      ...mapState({
        address:state => state.msite.address,
        categorys:state => state.msite.categorys
      }),
      categorysArr(){
        const {categorys} = this
        const bigArr = []
        let smallArr = []

        categorys.forEach(c=>{
          if(smallArr.length===0){
            bigArr.push(smallArr)
          }
          smallArr.push(c)
          if(smallArr.length===8){
            smallArr=[]
          }
        })
        return bigArr
      }
    },
    mounted(){
      this.$store.dispatch('request_address')
      this.$store.dispatch('request_categorys')
    },
    watch:{
      categorys(){
        this.$nextTick(()=>{
          var mySwiper = new Swiper ('.swiper-container', {
            loop: true, // 循环模式选项
            autoplay: {
              delay: 1000,//1秒切换一次
              disableOnInteraction: false,
            },
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },

          })
        })
      }
    },
    components:{
      ShopList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../assets/stylus/mixins.styl";
  .msite
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          > span.swiper-pagination-bullet-active
            background #02a774
</style>
