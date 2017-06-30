<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #app{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: scroll;
  }
  body{
    background-color: #f8f8f8;
  }
</style>
