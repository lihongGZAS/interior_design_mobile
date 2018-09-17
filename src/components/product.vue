<template>
  <div class="product-box">
    <div class="product-img">
      <img :src="firstImg" alt="产品图片">
    </div>
    <div class="goods-list">
      <div class="goods-list-icons">
        <div class="goods-list-icon">
          <img :src="iconLt" alt="">
        </div>
        <div class="goods-list-icon" v-for="(item, i) in showIcons" :key="i">
          <img :src="item.ImgUrl" alt="">
          <p>{{item.Name}}</p>
        </div>
        <div class="goods-list-icon">
          <img :src="iconRt" alt="">
        </div>
      </div>
      <div class="goods-info-show" v-for="(item, i) in showImages" :key="i">
        <div class="goods-img-pos">
          <div class="goods-inter">
            <div class="goods-info-img">
              <img :src="item.ImgUrl" alt="图片">
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

          for (let i in this.productAllImgs) {
            if (this.productIcons[0].Name === this.productAllImgs[i].Name) {
              this.getShowImg = this.productAllImgs[i].File; // 获取点击的那个系列的图片
              if(this.getShowImg.length >= 5) {  // 显示5张图片
                for(let i=0; i<5; i++) {
                  this.showImages.push(this.getShowImg[i]);
                }
              }
              else {
                this.showImages = this.getShowImg;
              }
            }
          }
        })
        .catch(function(error) {
          console.log(error);
        });
      })
      .catch(function(error) {
        console.log(error);
      });
      
    },
  }
}
</script>

<style scoped>
  @import '../../static/css/product.css' 
</style>


