<template>
  <div class="custom-series">
    <div class="series-list" v-for="(item, i) in seriesData" :key="i">
      <div class="series-list-content">
        <div class="series-img">
          <img :src="item.ImgUrl" alt="系列图">
        </div>
        <div class="series-desc">
          <h3>{{item.P1}}</h3>
          <h4>{{item.P2}}</h4>
          <p>{{item.P3}}</p>
          <div class="detail-btn-box">
            <div class="detail-vux-button">更多详情</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { XButton } from 'vux'
export default {
  name: 'custom',
  components: {
    XButton
  },
  data() {
    return {
      seriesData: [
        // {ImgUrl: '', Name: '系列名称', seriesStyle: '设计风格', desc: '选用了最具亲和力、最近时尚感的配色、以超高性价比的选材，进一步优化对轻奢品质生活的定义'},
        // {ImgUrl: '', Name: '系列名称', seriesStyle: '设计风格', desc: '描述选用了最具亲和力、最近时尚感的配色、以超高性价比的选材，进一步优化对轻奢品质生活的定义2'}
      ],
      series_img: '',

    }
  },
  mounted: function() {
    this.init();
  },
  methods: {
    init: function() {
      this.$http.get("https://www.ehometd.com/temporary/api/other/all.php?fc=bianlifile&FID=440&Class=3", {
        params: {
          ID: 12345
        }
      })
      .then(response => {
        console.log(response);
        this.seriesData = response.data.Sub[482].File;
      })
      .catch(function(error) {
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>
  @import '../../static/css/customization.css'
</style>


