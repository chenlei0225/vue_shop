/**
 * Created by Administrator on 2019/3/18 0018.
 */
window.addEventListener('DOMContentLoaded',function () {
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
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
},false)
