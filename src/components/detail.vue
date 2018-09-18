<template>
  <div class="detail-div" ref="detailPage" :style="{height: detailHeight + 'px',marginTop: '-' + detailHeight + 'px'}">
    <div class="inner-detail-div">
      <div class="detail-imgs-box">
        <img :src="nowImg" alt="产品图片">
      </div>
      <div class="goods-simple-intro">
        <span class="goods-name-text">{{goods_name}}</span>
        <span>{{goods_style}}</span>
      </div>
      <div class="goods-detail-intro">
        <p>{{good_details}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data() {
    return {
      clientHeight: 0,
      detailHeight: '',
      nowImg: '',
      goods_name: '橱柜名',
      goods_style: '风格',
      good_details: 'hello world, hello world,hello world, hello world,hello world, hello world,hello world, hello world,hello world, hello world,hello world, hello world,hello world, hello world,hello world, hello world,hello world, hello world,hello world, hello world,hello world, hello world,hello world, hello world,'
    }
  },
  mounted: function() {
    this.getInfo();
    this.clientHeight = `${document.documentElement.clientHeight}`;
    this.detailHeight = Number(this.clientHeight) - 60;
  },
  watch: {
    // 如果 `clientHeight` 发生改变，这个函数就会运行
    clientHeight: function () {
      this.changeFixed(this.clientHeight)
    }
  },
  methods: {
    changeFixed(clientHeight){ //动态修改样式
      this.$refs.detailPage.style.height = clientHeight+'px';
    },
    getInfo: function() {
      // 请求产品信息
      this.$http.get("https://www.ehometd.com/temporary/api/other/all.php?fc=bianlifile&FID=459&Class=3", {
        params: {
          ID: 459
        }
      })
      .then(response => {
        this.nowImg = response.data.Sub[460].File[0].ImgUrl; // 初始默认为第一个系列的第一张图片
        this.goods_name = response.data.Sub[460].File[0].Name;
        this.goods_style = response.data.Sub[460].File[0].Desc;
      })
      .catch(function(error) {
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>
  @import '../../static/css/detail.css'
</style>


