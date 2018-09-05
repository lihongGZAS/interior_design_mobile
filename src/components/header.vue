<template>
  <div class="header-div">
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">
      <span>全屋定制</span>
      <x-icon slot="overwrite-left" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;" @click="showMenuModule"></x-icon>
    </x-header>
    <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
    </div>
    <drawer width="200px;" :show.sync="drawerVisibility" :drawer-style="{'background-color':'red', width: '200px'}">
      
      <group title="全屋定制" link="/">
        <cell title="首页" link="/demo" @click.native="drawerVisibility = false"></cell>
        <cell title="产品" link="/project" @click.native="drawerVisibility = false"></cell>
        <cell title="品牌实力" link="/dram" @click.native="drawerVisibility = false"></cell>
        <cell title="联系我们" link="/demo" @click.native="drawerVisibility = false"></cell>
      </group>
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
        drawerVisibility: true,
        entryUrl: document.location.href,
      }
    },
    computed: {
      
    },
    methods: {
      showMenuModule: function() {
        console.log(6666666666);
        console.log(this.drawerVisibility)
        if(!this.drawerVisibility) {
          this.drawerVisibility = true;
        }
      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* @import '~vux/src/styles/reset.less';
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/tap.less'; */
  .header-div {
    height: 100%;

  }
</style>
