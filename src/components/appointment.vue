<template>
  <div ref="headerPage" class="appointment-div" :style="{backgroundImage: 'url(' + bgImg + ')',backgroundSize: '100%',height: outerboxHeight + 'px',marginTop: '-' + outerboxHeight + 'px'}">
    <div class="appointment-form">
      <h2>预约</h2>
      <input type="text" placeholder="姓名" v-model="inputName" class="appointmant-inputs input-name">
      <input type="text" placeholder="手机" v-model="inputPhone" class="appointmant-inputs input-phone">
      <textarea name="" id="" cols="30" rows="6" placeholder="备注" v-model="inputAddress"></textarea>
      <div class="appointment-btn-box">
        <div class="go-to-home appoint-btn">
          <router-link to="/">返回首页</router-link>
        </div>
        <div class="submit-btn appoint-btn" @click="addyuyue">确定</div>
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
      inputName: '',
      inputPhone: '',
      inputAddress: ''
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
    },
    //预约
    addyuyue(){
      if (this.inputName=='' || this.inputPhone =='' || this.inputAddress=='') {
        this.$message({
          type:'error',
          message:'姓名、手机号、楼盘名不得为空',
        })
      } else {
        this.$s.$http.get("https://www.ehometd.com/temporary/api/backapi/record.php?",  {
          params: {
            FI: 'efactory',
            Name1: '姓名',
            Info1: this.inputName,
            Name2: '手机号',
            Info2: this.inputPhone,
            Name3: '楼盘名',
            Info3: this.inputAddress
          }
        })
        .then(responseyy => {
          // // console.log(res(responseyy)
          this.$message({
            type: responseyy.body.code==200? 'success' : 'warning',
            message: responseyy.body.msg
          })
        })
      }
    }
  }
}
</script>

<style scoped>
  @import '../../static/css/appointment.css'
</style>

