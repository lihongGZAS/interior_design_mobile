<template>
  <div ref="headerPage">
    <x-header :right-options="{showMore: true}" style="background-color:#fff;" @on-click-more="showMenus = true">
      <span>
        <img :src="menuLogo" alt="">
      </span>
      <x-icon slot="overwrite-left" type="navicon" size="35" style="fill:#222;position:relative;top:-8px;left:-3px;" @click="showMenuModule"></x-icon>
    </x-header>
    <drawer :show.sync="drawerVisibility" :drawer-style="{'background-color':'#888', width: '100%'}" :style="{height: drawerHeight}">
      <div slot="drawer" @touchmove.prevent>
        <group style="margin-top:20px;">
          <cell title="首页" link="/" @click.native="drawerVisibility = false"></cell>
          <cell title="全屋定制" link="/customization" @click.native="drawerVisibility = false"></cell>
          <cell title="产品" link="/product" @click.native="drawerVisibility = false"></cell>
          <cell title="品牌实力" link="/trademark" @click.native="drawerVisibility = false"></cell>
          <cell title="预约" link="/trademark" @click.native="drawerVisibility = false"></cell>
        </group>
      </div>
    </drawer>
  </div>
</template>

<script>
  import { Group, Cell,  Drawer, Actionsheet, ButtonTab, XHeader, TransferDom } from 'vux'
  export default {
    name: 'headerDiv',
    directives: {
      TransferDom
    },
    components:{
      Group,
      Cell,
      Drawer,
      XHeader,
      Actionsheet,
      TransferDom
    },
    data () {
      return {
        showMenus: false,
        drawerVisibility: false,
        clientHeight: '',
        menuLogo: '',
        drawerHeight: ''
      }
    },
    mounted: function() {
      this.init();
      this.initHeight();
    },
    watch: {
      // 如果 `clientHeight` 发生改变，这个函数就会运行
      clientHeight: function () {
        this.changeFixed(this.clientHeight)
      }
    },
    computed: {
      
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
          this.menuLogo = response.data.Sub[483].File[0].ImgUrl;
        })
        .catch(function(error) {
          console.log(error);
        });
      },
      showMenuModule: function() {
        this.drawerVisibility = !this.drawerVisibility;
      },
      changeFixed(clientHeight){ //动态修改样式
        this.$refs.headerPage.style.height = clientHeight+'px';
      },
      //获取高度
      initHeight(){  
          //获取浏览器可视区域高度
          this.clientHeight = `${document.documentElement.clientHeight}`;
          this.drawerHeight = Number(this.clientHeight) - 60 + 'px';
          // console.log(this.clientHeight);
          //当窗口或框架发生改变时触发
          window.onresize = () => {  
            this.clientHeight = `${document.documentElement.clientHeight}`;
          };
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .vux-drawer {
    z-index: 999;
  }
  .vux-header {
    height: 60px;
  }
 .vux-header-title {
    height: 52px !important;
  }
  .vux-header .vux-header-title > span {
    height: 52px !important;
  }
  .vux-header-title-area, .vux-header .vux-header-title>span>img{
    height: 32px;
    margin-top: 10px;
  }
</style>
