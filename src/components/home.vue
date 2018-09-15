<template>
  <div class="home-div">
    <div class="home-desc-img" :style="{height: homeImgHeight + 'px'}">
      <img :src="indexImg" alt="首页宣传图片">
    </div>
    <div class="company-intro-div" :style="{backgroundImage: 'url(' + indexImg + ')',backgroundSize: '100%'}">
      <div class="company-intro-text">
        <h3>{{company_intrro_title}}</h3>
        {{company_intro_text}}
      </div>
      <div class="company-intro-img">
        <img :src="company_intro_img" alt="企业介绍图片">
      </div>
    </div>
    <div class="series-list">
      <div class="series-list-info" v-for="(item, i) in seriesData" :key="i">
        <div class="series-list-lt">
          <span>{{item.P1}}</span>
          <h3>{{item.P2}}</h3>
          <span class="see-more-span">+</span>
        </div>
        <div class="series-list-rt">
          <div class="series-rt-img">
            <img :src="item.ImgUrl" alt="系列图片">
          </div>
        </div>
      </div>
    </div>
    <div class="see-more">
      <span>查看更多></span>
    </div>
    <div class="goods-list">
      <div class="goods-list-icons">
        <div class="goods-list-icon">
          <img :src="iconLt" alt="">
        </div>
        <div class="goods-list-icon" v-for="(item, i) in goodsIcons" :key="i">
          <img :src="item.ImgUrl" alt="">
          <p>{{item.Name}}</p>
        </div>
        <!-- <div class="goods-list-icon">
          <img :src="iconHt" alt="">
          <p>测试2</p>
        </div>
        <div class="goods-list-icon">
          <img :src="iconHt" alt="">
          <p>测试3</p>
        </div> -->
        <div class="goods-list-icon">
          <img :src="iconRt" alt="">
        </div>
      </div>
      <div class="goods-info-show">
        <div class="goods-img-pos">
          <div class="goods-inter">
            <div class="goods-info-img">
              <img :src="goods_img" alt="图片">
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
      homeImgHeight: 606,
      indexImg: '',
      company_intrro_title: '',
      company_intro_text: '',
      company_intro_img: '',

      seriesData: [],
      goodsIcons: [
        {ImgUrl: '../../static/images/iconHeart.png', Name: '衣帽柜'},
        {ImgUrl: '../../static/images/iconHeart.png', Name: '收纳柜'},
        {ImgUrl: '../../static/images/iconHeart.png', Name: '鞋柜'}
      ],
      
      iconLt: '../../static/images/iconLt.png',
      iconRt: '../../static/images/iconRt.png',
      // iconHt: '../../static/images/iconHeart.png',
      goods_img: '',
      goods_name: '衣帽柜定制1',
      goods_desc: '现代简约',

      footer_logo: '',
      footer_icon1: '',
      footer_icon2: ''
    }
  },
  mounted: function() {
    this.init();
    this.clientHeight = `${document.documentElement.clientHeight}`;
    console.log(this.clientHeight);
    // console.log(this.$refs.headerPage.offsetHight);
  },
  methods: {
    init: function() {
      this.$http.get("https://www.ehometd.com/temporary/api/other/all.php?fc=bianlifile&FID=440&Class=3", {
        params: {
          ID: 12345
        }
      })
      .then(response => {
        // console.log(response);
        this.indexImg = response.data.Sub[488].File[0].ImgUrl;
        this.company_intrro_title = response.data.Sub[478].File[0].P1;
        this.company_intro_text = response.data.Sub[478].File[0].P2;
        this.company_intro_img = response.data.Sub[478].File[0].ImgUrl;

        this.seriesData = response.data.Sub[477].File;
        // this.goodsIcons = response.data.Sub[]

        // this.goods_img = response.data.Sub[488].File[0].ImgUrl;

        this.footer_logo = response.data.Sub[483].File[1].ImgUrl;
      })
      .catch(function(error) {
        console.log(error);
      });
    },
  }
}
</script>

<style scoped>
  @import '../../static/css/home.css'
</style>

