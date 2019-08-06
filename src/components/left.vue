<template>
  <div class="body">
 <el-main>
   <!-- <jichu></jichu> -->
   <RouterView class="right"/></el-main>
  </div>
</template>

<script>
  // import LTjibenzl from './jibenzl'
  // import WageN from './WageN'
  // import WageMs from './WageMs'
  // import zhujian from './zhujian'
  // import shiyan from './shiyan'
  // import jichu from './jichu'
  // export default {
  //   components:{
  //     LTjibenzl,
  //     WageN,
  //     WageMs,
  //     zhujian,
  //     shiyan,
  //     jichu,
  //   },
  //   data() {
  //     return{
  //     }
  //   },
  //   methods: {
  //     handleOpen(key, keyPath) {
  //       console.log(key, keyPath);
  //     },
  //     handleClose(key, keyPath) {
  //       console.log(key, keyPath);
  //     },
  //    goTo(path) {
  //     this.$router.replace(path);
  //   },
  //   handleClick(tab, event) {
  //       console.log(tab, event);
  //     }
  //   }
  // };
</script>

<style>
  .body{
    width:100%;
    float: left;
    margin: 0 0 0 -7px;
  }
  .right{
    width: 1100px;
    height: 600px;
    float: left;
    margin: 20px 0 0 20px;
  }

</style>
