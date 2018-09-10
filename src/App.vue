<template>
  <div id="app">
    <header-div></header-div>
    <router-view/>
  </div>
</template>

<script>
import headerDiv from '@/components/header'
export default {
  name: 'App',
  components:{
    headerDiv
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #0a60b9;
}
</style>
