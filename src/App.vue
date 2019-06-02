<template>
  <div id='app'>
    <MHeader/>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from 'business/m-header'
import Tab from 'business/tab'
export default {
  name: 'app',
  components: {
    MHeader,
    Tab
  }
}
</script>

<style>

</style>
