<template>
  <div ref="homePage" class="home-div" :style="{height: homeImgHeight + 'px', marginTop: '-' + homeImgHeight + 'px'}">
    <div class="home-desc-img" :style="{height: '100%'}">
      <img :src="indexImg" alt="首页宣传图片">
      <div class="company-logo-desc">
        <div class="home-top-logo">
          <img :src="home_top_logo" alt="">
        </div>
        <h5>{{company_home_desc}}</h5>
      </div>
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
            <router-link :to="{path: '/detail'}">
              <img :src="item.ImgUrl" alt="系列图片">
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="see-more">
      <span>查看更多></span>
    </div>
    <div class="goods-list">
      <div class="goods-list-icons">
        <div class="goods-list-icon" @click="preSeries">
          <div class="goods-icon">
            <img :src="iconLt" alt="">
          </div>
        </div>
        <div class="goods-list-icon" v-for="(item, i) in showIcons" :key="i">
          <div class="goods-icon">
            <img :src="item.ImgUrl" alt="">
          </div>
          <span>{{item.Name}}</span>
        </div>
        <div class="goods-list-icon" @click="nextSeries">
          <div class="goods-icon">
            <img :src="iconRt" alt="">
          </div>
        </div>
      </div>
      <div class="goods-info-show">
        <div class="goods-img-pos">
          <div class="goods-inter">
            <div class="goods-info-img">
              <router-link to="/detail">
                <img :src="goods_img" alt="图片">
              </router-link>
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
          <span class="go-top-icon">^</span>
        </div>
        <div class="footer-icon-1 footer-bottom-icon">
          <span>预约</span>
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
      clientHeight: 0, // 获取当前设备可视区域高度
      margin_top: 0,
      homeImgHeight: 0,
      indexImg: '',
      home_top_logo: '',
      company_home_desc: '',
      company_intrro_title: '',
      company_intro_text: '',
      company_intro_img: '',

      seriesData: [],
      
      iconLt: '../../static/images/iconLt.png',
      iconRt: '../../static/images/iconRt.png',

      iconIndex: 0, //当前高亮图标下标值
      productIcons: [], // 未点击时的图标
      productIcons2: [], // 点击过的高亮图标
      productIcons11: [], // 中间值图标数组
      showIcons: [], // 展示出来的图标

      seriesAllImgs: [], // 所有的产品信息
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
    this.homeImgHeight = Number(this.clientHeight) - 60;
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
        this.indexImg = response.data.Sub[488].File[0].ImgUrl;
        this.company_home_desc = '专业致力于全屋定制研发、制造、销售于一体企业';
        this.company_intrro_title = response.data.Sub[478].File[0].P1;
        this.company_intro_text = response.data.Sub[478].File[0].P2;
        this.company_intro_img = response.data.Sub[478].File[0].ImgUrl;

        this.seriesData = response.data.Sub[477].File;

        this.home_top_logo = response.data.Sub[483].File[3].ImgUrl;
        this.footer_logo = response.data.Sub[483].File[1].ImgUrl;
      })
      .catch(function(error) {
        console.log(error);
      });

      // 产品系列图标
      this.$http.get("https://www.ehometd.com/temporary/api/other/all.php?fc=bianlifile&FID=440&Class=3", {
        params: {
          ID: 459
        }
      })
      .then(response => {
        this.productIcons = response.data.Sub[527].Sub[528].File;
        this.productIcons2 = response.data.Sub[527].Sub[529].File;

        this.productIcons11 = JSON.parse(JSON.stringify(this.productIcons)); // 深拷贝获取初始productIcons的数据
        for(let i=0; i<3; i++) {
          this.showIcons.push(this.productIcons11[i]);
        }
        for(let k=0; k<this.productIcons2.length; k++) {
          if(this.showIcons[0].Name === this.productIcons2[k].Name) {
            this.showIcons[0] = this.productIcons2[k]; // 设置第一个系列图标高亮显示
          }
        }
      })
      .catch(function(error) {
        console.log(error);
      });

      // 请求产品信息
      this.$http.get("https://www.ehometd.com/temporary/api/other/all.php?fc=bianlifile&FID=459&Class=3", {
        params: {
          ID: 459
        }
      })
      .then(response => {
        console.log(response);
        this.seriesAllImgs = response.data.Sub;
        this.goods_img = response.data.Sub[460].File[0].ImgUrl; // 初始默认为第一个系列的第一张图片
        this.goods_name = response.data.Sub[460].File[0].Name;
        this.goods_desc = response.data.Sub[460].File[0].Desc;
      })
      .catch(function(error) {
        console.log(error);
      });

    },
    changeFixed(clientHeight){ //动态修改样式
      this.$refs.homePage.style.height = clientHeight+'px';
    },
    // 点击切换上一个系列
    preSeries: function() {
      this.iconIndex++;
      if(this.iconIndex > 4) {
        this.iconIndex = 0;
      }
      this.showIcons = [];
      if((this.iconIndex+2) < 5 ) {
        for(let i=this.iconIndex; i<=this.iconIndex+2; i++) {
          this.showIcons.push(this.productIcons[i]);
        }
      } else if((this.iconIndex+2) === 5) {
        this.showIcons.push(this.productIcons[3]);
        this.showIcons.push(this.productIcons[4]);
        this.showIcons.push(this.productIcons[0]);
      } else {
        this.showIcons.push(this.productIcons[4]);
        this.showIcons.push(this.productIcons[0]);
        this.showIcons.push(this.productIcons[1]);
      }

      for(let k=0; k<this.productIcons2.length; k++) {
        if(this.showIcons[0].Name === this.productIcons2[k].Name) {
          this.showIcons[0] = this.productIcons2[k]; // 设置第一个系列图标高亮显示
        }
      }
    },
    // 点击切换下一个系列
    nextSeries: function() {
      this.iconIndex--;
      if(this.iconIndex < 0) {
        this.iconIndex = 4;
      }
      this.showIcons = [];
      if(this.iconIndex === 4) {
        this.showIcons.push(this.productIcons[4]);
        this.showIcons.push(this.productIcons[0]);
        this.showIcons.push(this.productIcons[1]);
      } else if(this.iconIndex === 3) {
        this.showIcons.push(this.productIcons[3]);
        this.showIcons.push(this.productIcons[4]);
        this.showIcons.push(this.productIcons[0]);
      } else {
        this.showIcons.push(this.productIcons[this.iconIndex]);
        this.showIcons.push(this.productIcons[this.iconIndex+1]);
        this.showIcons.push(this.productIcons[this.iconIndex+2]);
      }

      for(let k=0; k<this.productIcons2.length; k++) {
        if(this.showIcons[0].Name === this.productIcons2[k].Name) {
          this.showIcons[0] = this.productIcons2[k]; // 设置第一个系列图标高亮显示
        }
      }
    }
  }
}
</script>

<style scoped>
  @import '../../static/css/home.css'
</style>

