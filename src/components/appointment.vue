<template>
  <div ref="headerPage" class="appointment-div" :style="{backgroundImage: 'url(' + bgImg + ')',backgroundSize: '100%',height: outerboxHeight + 'px',marginTop: '-' + outerboxHeight + 'px'}">
    <div class="appointment-form">
      <h2>预约</h2>
      <input type="text" placeholder="姓名" v-model="inputValue" class="appointmant-inputs input-name">
      <input type="text" placeholder="手机" v-model="inputPhone" class="appointmant-inputs input-phone">
      <textarea name="" id="" cols="30" rows="6" placeholder="备注"></textarea>
      <div class="appointment-btn-box">
        <div class="go-to-home appoint-btn">返回首页</div>
        <div class="submit-btn appoint-btn">确定</div>
      </div>
    </div>
  </div>
</template>

<i18n>
  placeholder:
    zh-CN: 提示
</i18n>  

<script>
import { XInput, XTextarea, Group } from 'vux'
export default {
  name: 'appointment',
  components: {
    XInput,
    XTextarea,
    Group
  },
  data() {
    return {
      bgImg: '',
      clientHeight: '',
      outerboxHeight: 0,
      inputValue: '',
      inputPhone: ''
    }
  },
  // 挂载完成后获取初始化数据
  mounted: function() {
    this.init();
    this.clientHeight = `${document.documentElement.clientHeight}`;
    this.outerboxHeight = Number(this.clientHeight) - 60;
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
        this.bgImg = response.data.Sub[491].File[0].ImgUrl;
      })
      .catch(function(error) {
        console.log(error);
      });
    },
    changeFixed(clientHeight){ //动态修改样式
      this.$refs.headerPage.style.height = clientHeight+'px';
    },
    onEvent (event) {
      console.log('on', event)
    }
  }
}
</script>

<style scoped>
  @import '../../static/css/appointment.css'
</style>

