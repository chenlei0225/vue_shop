<template>
  <div id="app">
    <router-view/>
    <Footer v-show="$route.meta.isShow"/>
  </div>
</template>

<script>
  import Footer from './components/Footer.vue'
  import {reqAddress} from './api'
  export default {
    async mounted(){
      const result = await reqAddress(116.36867,40.10038)
      console.log(result);
    },
    components:{
      Footer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
    position relative
</style>
