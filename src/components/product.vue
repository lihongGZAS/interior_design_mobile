<template>
  <div class="product-box">
    <div class="product-img">
      <img src="" alt="产品图片">
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
      <div class="goods-info-show" v-for="i in 5" :key="i">
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
  </div>
</template>

<script>
export default {
  name: 'product',
  data() {
    return {
      iconLt: '../../static/images/iconLt.png',
      iconRt: '../../static/images/iconRt.png',
      iconHt: '../../static/images/iconHeart.png',
      goods_name: '衣帽柜定制1',
      goods_desc: '现代简约',
    }
  }
}
</script>

<style scoped>
  @import '../../static/css/product.css' 
</style>


