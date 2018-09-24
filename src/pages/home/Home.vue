
<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <homeweekend></homeweekend>
    <!-- <div>test</div> -->
  </div>

</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import Homeweekend from './components/weekend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeIcons,
    HomeSwiper,
    HomeRecommend,
    Homeweekend

  }
}
</script>

<style>
</style>
