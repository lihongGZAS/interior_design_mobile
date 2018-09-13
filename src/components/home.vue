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
      <div class="goods-list-icons">
        <div class="goods-list-icon">
          <img :src="iconLt" alt="">
        </div>
        <div class="goods-list-icon">
          <img :src="iconHt" alt="">
          <p>测试</p>
        </div>
        <div class="goods-list-icon">
          <img :src="iconHt" alt="">
          <p>测试2</p>
        </div>
        <div class="goods-list-icon">
          <img :src="iconHt" alt="">
          <p>测试3</p>
        </div>
        <div class="goods-list-icon">
          <img :src="iconRt" alt="">
        </div>
      </div>
      <div class="goods-info-show">
        <div class="goods-img-pos">
          <div class="goods-inter">
            <div class="goods-info-img">
              <img src="" alt="图片">
            </div>
          </div>
          <div class="goods-info-intro">
            <h4>{{goods_name}}</h4>
            <span>{{goods_desc}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="see-more">
      <span>查看更多</span>
    </div>
    <div class="home-footer">
      <div class="logo-bq">
        <h3>版权说明</h3>
        <div class="footer-logo">
          <img :src="footer_logo" alt="logo">
        </div>
      </div>
      <div class="footer-icon">
        <div class="footer-icon-1">
          <img :src="footer_icon1" alt="icon1">
        </div>
        <div class="footer-icon-1">
          <img :src="footer_icon2" alt="icon2">
        </div>
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
    XButton,
  },
  data () {
    return {
      // indexImg: 'https://o5omsejde.qnssl.com/demo/test1.jpg',
      indexImg: '',
      company_intro_text: '企业介绍企业介绍企业介绍企业介绍企业介绍企业介绍企业介绍企业介绍企业介绍企业介绍企业介绍企业介绍企业介绍企业介绍企业介绍企业介绍企业介绍',
      company_intro_img: '',
      
      iconLt: '../../static/images/iconLt.png',
      iconRt: '../../static/images/iconRt.png',
      iconHt: '../../static/images/iconHeart.png',
      goods_name: '衣帽柜定制1',
      goods_desc: '现代简约',

      footer_logo: '',
      footer_icon1: '',
      footer_icon2: ''
    }
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
  }
}
</script>

<style scoped>
  @import '../../static/css/home.css'
</style>

