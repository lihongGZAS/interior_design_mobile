<template>
  <div ref="headerPage">
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">
      <span>全屋定制</span>
      <x-icon slot="overwrite-left" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;" @click="showMenuModule"></x-icon>
    </x-header>
    <!-- 语言选择弹框 -->
    <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus"></actionsheet>
    </div>
    <drawer :show.sync="drawerVisibility" :drawer-style="{'background-color':'#888', width: '100%'}">
      <div slot="drawer">
        <group style="margin-top:20px;">
          <cell title="首页" link="/" @click.native="drawerVisibility = false"></cell>
          <cell title="全屋定制" link="/customization" @click.native="drawerVisibility = false"></cell>
          <cell title="产品" link="/product" @click.native="drawerVisibility = false"></cell>
          <cell title="品牌实力" link="/trademark" @click.native="drawerVisibility = false"></cell>
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
        showMenu: false,
        showMenus: false,
        menus: {
          'language.noop': '<span class="menu-title">Language</span>',
          'zh-CN': '中文',
          'en': 'English'
        },
        drawerVisibility: false,
        clientHeight: '',
      }
    },
    mounted: function() {
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
      showMenuModule: function() {
        this.drawerVisibility = !this.drawerVisibility;
      },
      changeFixed(clientHeight){ //动态修改样式
        this.$refs.headerPage.style.height = clientHeight+'px';
      },
      //获取高度
      initHeight(){  
          //获取浏览器可视区域高度
          // this.clientHeight = $(document).height(); // console.log($(document).height());//浏览器可视区域对象宽度
          this.clientHeight = `${document.documentElement.clientHeight}`;
          console.log(this.clientHeight);
          //当窗口或框架发生改变时触发
          window.onresize = () => {  
            //console.log("onresize进来了");
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
    height: 93.5%;
  }
</style>
