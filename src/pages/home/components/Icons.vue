<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item  of iconList" :key="item.id">
        <div class="icon">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="图片不显示，我显示">
          </div>
          <p class="icon-desc">热门景点</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [
        {
          id: '0001',
          imgUrl: '',
          desc: '景点门票'
        },
        {
          id: '0002',
          imgUrl: '',
          desc: '景点门票'
        },
        {
          id: '0003',
          imgUrl: '',
          desc: '景点门票'
        },
        {
          id: '0004',
          imgUrl: '',
          desc: '景点门票'
        },
        {
          id: '0005',
          imgUrl: '',
          desc: '景点门票'
        },
        {
          id: '0006',
          imgUrl: '',
          desc: '景点门票'
        },
        {
          id: '0007',
          imgUrl: '',
          desc: '景点门票'
        },
        {
          id: '0008',
          imgUrl: '',
          desc: '景点门票'
        },
        {
          id: '0008',
          imgUrl: '',
          desc: '景点门票'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/common.scss';
.icons >>> .swiper-container {
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  background: red;
}
.icon {
  position: relative;
  overflow: hidden;
  float: left;
  height: 0;
  width: 25%;
  padding-bottom: 25%;
  // background-color: aqua;
  .icon-img {
    position: absolute;
    top: 0;
    bottom: 0.44rem;
    left: 0;
    right: 0;
    box-sizing: border-box;
    padding: 0.1rem;
    // background-color: blue;
    .icon-img-content {
      display: block;
      height: 100%;
      margin: 0 auto;
    }
  }
  .icon-desc {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 0.44rem;
    line-height: 0.44rem;
    text-align: center;
    color: $pcolor;
  }
}
</style>
