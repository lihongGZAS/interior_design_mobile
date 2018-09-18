<template>
  <div class="product-box">
    <div class="product-img">
      <img :src="firstImg" alt="产品图片">
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
      <div class="goods-info-show" v-for="(item, i) in showImages" :key="i">
        <div class="goods-img-pos">
          <div class="goods-inter">
            <div class="goods-info-img">
              <router-link to="/detail">
                <img :src="item.ImgUrl" alt="图片">
              </router-link>
            </div>
          </div>
          <div class="goods-info-intro">
            <h4>{{item.Name}}</h4>
            <span>{{item.Desc}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product',
  data() {
    return {
      firstImg: '',
      productIcons: [],
      productIcons2: [],
      productIcons11: [],
      iconIndex: 0,
      showIcons: [],
      iconLt: '../../static/images/iconLt.png',
      iconRt: '../../static/images/iconRt.png',

      productAllImgs: [],
      getShowImg: [],
      showImages: [], // 当前显示的图片组

      goods_name: '衣帽柜定制1',
      goods_desc: '现代简约',
    }
  },
  mounted: function() {
    this.init();
  },
  methods: {
    init: function() {
      
      // 请求产品信息
      this.$http.get("https://www.ehometd.com/temporary/api/other/all.php?fc=bianlifile&FID=459&Class=3", {
        params: {
          ID: 459
        }
      })
      .then(response => {
        this.productAllImgs = response.data.Sub; // 存储所有图片的对象
        this.firstImg = this.productAllImgs[460].File[0].ImgUrl;
        // 请求产品系列图标
        this.$http.get("https://www.ehometd.com/temporary/api/other/all.php?fc=bianlifile&FID=440&Class=3", {
          params: {
            ID: 459
          }
        })
        .then(response => {
          // console.log(response);
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
          this.choiseImgs();
        })
        .catch(function(error) {
          console.log(error);
        });
      })
      .catch(function(error) {
        console.log(error);
      });
      
    },
    choiseImgs: function() {
      for (let i in this.productAllImgs) {
        if (this.showIcons[0].Name === this.productAllImgs[i].Name) {
          this.showImages = this.productAllImgs[i].File;
        }
      }
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
      
      // 切换不同系列显示当前系列图片
      this.choiseImgs();
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

      // 切换不同系列显示当前系列图片
      this.choiseImgs();
    }
  }
}
</script>

<style scoped>
  @import '../../static/css/product.css' 
</style>


