<template>
  <div class="home-div">
    <!-- <div v-for="(src, index) in list" :key="index" style="background-color:yellow;text-align:center;">
      <span style="font-size:20px;">Loading</span>
      <x-img :src="src" :webp-src="`${src}?type=webp`" @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="-100" container="#vux_view_box_body"></x-img>
    </div> -->
    <div class="home-desc-img">
      <img :src="indexImg" alt="首页宣传图片">
    </div>
    <div class="company-intro-div">
      <div class="company-intro-text">{{company_intro_text}}</div>
      <div class="company-intro-img">
        <img :src="company_intro_img" alt="企业介绍图片">
      </div>
    </div>
    <div class="series-list">
      <div class="series-list-info" v-for="(item, i) in 4" :key="i">
        <div class="series-list-lt">
          <span>{{`系列${i}`}}</span>
          <h3>描述描述</h3>
          <span>+</span>
        </div>
        <div class="series-list-rt">
          <img :src="item.ImgUrl" alt="系列图片">
        </div>
      </div>
    </div>
    <div class="see-more">
      <span>查看更多</span>
    </div>
    <div class="goods-list">
      <div class="goods-list-icon">
        
      </div>
    </div>
  </div>
</template>

<script>
import { XImg, XButton } from 'vux'
export default {
  name: 'home',
  components: {
    XImg,
    XButton
  },
  methods: {
    success (src, ele) {
      console.log('success load', src)
      const span = ele.parentNode.querySelector('span')
      ele.parentNode.removeChild(span)
    },
    error (src, ele, msg) {
      console.log('error load', msg, src)
      const span = ele.parentNode.querySelector('span')
      span.innerText = 'load error'
    }
  },
  data () {
    return {
      // indexImg: 'https://o5omsejde.qnssl.com/demo/test1.jpg',
      indexImg: '',
      company_intro_text: '企业介绍企业介绍企业介绍企业介绍企业介绍企业介绍企业介绍企业介绍企业介绍企业介绍企业介绍企业介绍企业介绍企业介绍企业介绍企业介绍企业介绍',
      company_intro_img: '',
    }
  }
}
</script>

<style scoped>
  @import '../../static/css/home.css'
</style>

