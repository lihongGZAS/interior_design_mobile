<template>
  <div class="trademark-box" ref="headerPage" :style="{height: trademarkHeight + 'px',marginTop: '-' + trademarkHeight + 'px'}">
    <swiper :auto="isAuto" :height="trademarkHeight+'px'" :min-moving-distance="50">
      <swiper-item v-for="(item, i) in seriesData" :key="i">
        <div class="series-list">
          <div class="series-list-content">
            <div class="series-img">
              <img :src="item.ImgUrl" alt="系列图">
            </div>
            <div class="series-desc">
              <h3>{{item.P1}}</h3>
              <h4>{{item.P2}}</h4>
              <p>{{item.P3}}</p>
            </div>
          </div>
        </div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'vux'
export default {
  name: 'trademark',
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {
      clientHeight: 0,
      trademarkHeight: 0,
      seriesData: [],
      series_img: '',
      isAuto: true
    }
  },
  mounted: function() {
    this.init();
    this.clientHeight = `${document.documentElement.clientHeight}`;
    this.trademarkHeight = Number(this.clientHeight) - 60;
  },
  watch: {
    // 如果 `clientHeight` 发生改变，这个函数就会运行
    clientHeight: function () {
      this.changeFixed(this.clientHeight)
    }
  },
  methods: {
    init: function() {
      this.$http.get("https://www.ehometd.com/temporary/api/other/all.php?fc=bianlifile&FID=440&Class=3", {
        params: {
          ID: 12345
        }
      })
      .then(response => {
        this.seriesData = response.data.Sub[482].File;
      })
      .catch(function(error) {
        console.log(error);
      });
    },
    changeFixed(clientHeight){ //动态修改样式
      this.$refs.headerPage.style.height = clientHeight+'px';
    },
  }
}
</script>

<style scope>
  @import '../../static/css/trademark.css'
</style>


