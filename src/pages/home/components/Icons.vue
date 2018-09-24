<template>
  <swiper :options="swiperOption">
    <swiper-slide>
      <div class="icons_wrap">
        <ul class="icons">
          <div class="icon" v-for="(item,index) of iconlist" :key="index">
            <img class="icon_img" :src="item.src" alt="">
            <h3>{{item.title}}1</h3>
          </div>
        </ul>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="icons_wrap">
        <ul class="icons">
          <div class="icon" v-for="(item,index) of iconlist" :key="index">
            <img class="icon_img" :src="item.src" alt="">
            <h3>{{item.title}}2</h3>
          </div>
        </ul>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        autoplay: false
      },
      iconlist: [
        {src: '../../../../static/icons/audio.png', title: '录像'},
        {src: '../../../../static/icons/caran.png', title: '拍摄'},
        {src: '../../../../static/icons/content.png', title: '选择目的'},
        {src: '../../../../static/icons/download.png', title: '出发'},
        {src: '../../../../static/icons/search.png', title: '荒野行军'},
        {src: '../../../../static/icons/love.png', title: '路由圣地'},
        {src: '../../../../static/icons/pc.png', title: '电脑'},
        {src: '../../../../static/icons/person.png', title: '人事'}
      ]
    }
  },
  computed: {
    pages () { // 分页显示功能
      const pages = []
      this.recommendlist.forEach((item, index) => {
        const page = Math.floor(index / 4)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../../assets/styles/mixins.less';
// @import '../../../assets/styles/mixins.styl';
.icons_wrap {
  height: 217px;
  width: 100%;
  box-sizing: border-box;
  background-color: #eee;
}
.icons {
  display: flex;
  justify-content: space-around;
  align-content: space-around;
  flex-wrap: wrap;
  padding: 0 0px 10px;
  .icon {
    flex: 1 0 25%;
    text-align: center;
    min-width: 20px;
    // 超出文字隐藏效果，以三个点显示
    .ellipse(); // less
    //ellipse(); // stylus
    // overflow: hidden;
    // white-space: nowrap;
    // text-overflow: ellipsis;
    &:hover {
      background-color: #eee;
    }
    .icon_img {
      height: 60%;
      width: 70%;
      margin: 10px;
      // background-color: pink;
    }
  }
}
</style>
