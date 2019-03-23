<template>
  <div>shopRating</div>
</template>

<script>
  export default {
    mounted(){
      this.$store.dispatch('request_ratings')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
