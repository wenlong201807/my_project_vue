<template>
  <div class="weekend_wrap">
    <h2 class="title">周末去哪儿</h2>
    <ul class="list_wrap">
      <li class="item" v-for="(item) in weekendlist" :key="item.id">
        <img class="item_img" :src="item.src" alt="" title="item.title">
        <h3 class="con_title">{{item.title}}</h3>
        <p class="con_par">{{item.content}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Homeweekend',
  data () {
    return {
      weekendlist: []
    }
  },
  created () {
    this.getweekend()
  },
  methods: {
    async getweekend () {
      const {data} = await this.$http.get('/weekendlist')
      console.log(data)
      this.weekendlist = data
      console.log(this.weekendlist)
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../../assets/styles/mixins.less';

.weekend_wrap {
  .title {
    line-height: 0.8rem;
    background-color: #ccc;
    text-indent: 0.2rem;
  }
  .list_wrap {
    padding: 10px 10px 0;
    .item {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-content: space-around;
      margin-bottom: 0.2rem;
      // background: #ccc;
      .item_img {
        height: 1rem;
        width: 100%;

        margin-right: 0.2rem;
      }
      .con_title {
        font-weight: bold;
        line-height: 0.5rem;
      }
    }
  }
}
</style>
