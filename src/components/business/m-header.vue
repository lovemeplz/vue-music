<template>
  <div class="m-header">
    <div class="icon">
      <img class="img" src="@/assets/images/icons/logo.png" alt="">
    </div>
    <h1 class="text">Cool Music</h1>
    <!-- <router-link tag="div" class="mine" to="/user"> -->
      <!-- <i class="icon-mine"></i> -->
    <!-- </router-link> -->
  </div>
</template>
<script>
export default {
  name: "MHeader"
}
</script>

<style lang="scss">
@import "@/styles/variable.scss";
  // @import "~/styles/mixin.scss";
  .m-header{
    position: relative;
    height: 44px;
    text-align: center;
    color: $color-theme;
    .icon{
      display: inline-block;
      vertical-align: top;
      line-height: 32px;
      width: 30px;
      height: 32px;
      background-size: 30px 32px;
      margin: 6px 9px 0 0;
      .img{
        width: 30px;
      }
    }
    .text{
      display: inline-block;
      font-size: $font-size-large;
      vertical-align: middle;
    }
    .icon-mine:before{
          content: "\E912";
    }
  }

  // .m-header
  //   position:relative;
  //   height:44px;
  //   text-align:center
  //   color:$color-theme
  //   .icon
  //     display:inline-block
  //     vertical-align: top
  //     line-height:32px
  //     width: 30px
  //     height: 32px
  //     bg-image('logo')
  //     background-size: 30px 32px
  //     margin:6px 9px 0 0
  //   .text
  //     display:inline-block
  //     line-height:44px
  //     font-size: $font-size-large
  //     vertical-align: top
</style>

