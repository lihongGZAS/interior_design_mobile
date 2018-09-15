<template>
  <div class="trademark-box">
    <!-- <swiper loop auto :list="demo06_list" :index="demo06_index" @on-index-change="demo06_onIndexChange"></swiper>
    <p>current index: {{demo06_index}}</p> -->
      <!-- <div style="width:40px;height:40px;border: 1px solid red;"></div> -->
  </div>
</template>

<script>
import { Swiper } from 'vux'
// const baseList = [{
//   url: 'javascript:',
//   img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
//   title: '送你一朵fua'
// }, {
//   url: 'javascript:',
//   img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
//   title: '送你一辆车'
// }, {
//   url: 'javascript:',
//   img: 'https://static.vux.li/demo/5.jpg', // 404
//   title: '送你一次旅行',
//   fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
// }]
// const urlList = baseList.map((item, index) => ({
//   url: 'http://m.baidu.com',
//   img: item.img,
//   fallbackImg: item.fallbackImg,
//   title: `(可点击)${item.title}`
// }))
export default {
  name: 'trademark',
  components: {
    Swiper,
  },
  data() {
    return {
      // demo03_list: demoList,
      // demo06_list: urlList,
      // demo06_index: 0,
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
      })
      .catch(function(error) {
        console.log(error);
      });
    },
    demo06_onIndexChange (index) {
      this.demo06_index = index
    },
  }
}
</script>

<style scope>
  @import '../../static/css/trademark.css'
</style>


