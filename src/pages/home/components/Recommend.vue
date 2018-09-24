<template>
  <div class="recommend_wrap">
    <h2 class="title">畅销推荐</h2>
    <ul class="list_wrap">
      <li class="item" v-for="(item) in recommendlist" :key="item.id">
        <img class="item_img" :src="item.src" alt="" title="item.title">
        <div class="item_content">
          <h3 class="con_title">{{item.title}}</h3>
          <p class="con_par">{{item.content}}</p>
          <p class="con_price">
            <span class="price_color">￥{{item.price}}</span>起 &nbsp;&nbsp;&nbsp;
            <el-button type="primary" size="mini">查看详情</el-button>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Homerecommend',
  data () {
    return {
      recommendlist: [

      ]
    }
  },
  created () {
    this.getrecommend()
  },
  methods: {
    async getrecommend () {
      const {data} = await this.$http.get('/recommendlist')
      // console.log(data)
      this.recommendlist = data
      // console.log(this.recommendlist)
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../../assets/styles/mixins.less';
.recommend_wrap {
  .title {
    line-height: 0.8rem;
    background-color: #ccc;
    text-indent: 0.2rem;
  }
  .list_wrap {
    padding: 10px 10px 0;
    .item {
      display: flex;
      justify-content: space-around;
      align-items: space-around;
      margin-bottom: 0.1rem;
      .item_img {
        height: 1rem;
        width: 1rem;
        // background: red;
        margin-right: 0.2rem;
      }
      .item_content {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: calc(100% - 1.2rem);
        // background: #ccc;
        .con_title {
          font-weight: bold;
        }
        .price_color {
          color: red;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
