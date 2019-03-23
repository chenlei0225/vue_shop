<template>
  <div :class="`star star-${size}`">
    <span class="star-item" :class="starClass" v-for="(starClass,index) in starClasses" :key="index"></span>
  </div>
</template>

<script>
  export default {
    props:{
      rating:Number,
      size:String
    },
    computed:{
      starClasses(){
        let arr = []
        const onCount = Math.floor(this.rating)
        const halfCount = Math.round(this.rating)-onCount
        for (let i = 0; i < 5; i++) {
          if(i<onCount){
            arr.push('on')
          }else if(i<onCount+halfCount){
            arr.push('half')
          }else {
            arr.push('off')
          }
        }
        return arr
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../assets/stylus/mixins.styl"
  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('../assets/images/stars/star48_on')
        &.half
          bg-image('../assets/images/stars/star48_half')
        &.off
          bg-image('../assets/images/stars/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('../assets/images/stars/star36_on')
        &.half
          bg-image('../assets/images/stars/star36_half')
        &.off
          bg-image('../assets/images/stars/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('../assets/images/stars/star24_on')
        &.half
          bg-image('../assets/images/stars/star24_half')
        &.off
          bg-image('../assets/images/stars/star24_off')
</style>
