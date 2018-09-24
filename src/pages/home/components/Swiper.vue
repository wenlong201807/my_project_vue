<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item  of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="图片不显示，我显示">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>

    </swiper>
  </div>

</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList:
      [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1807/ec/278a34afb59a0d02.jpg_750x200_3292a705.jpg'
        },
        {
          id: '0002',
          imgUrl: 'https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/anquan_20180716.png'
        }
      ]
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  }
}
</script>

<style lang="stylus" scoped>
// 样式穿透写法
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff !important;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 29%;
  background-color: #ccc;

  .swiper-img {
    width: 100%;
  }
}
</style>
