<template>
  <div class="hello">
    <s-ytop></s-ytop>
    <s-yleft></s-yleft>
    <router-view></router-view>
  </div>
</template>

<script>
 import SYtop from './top'
 import SYleft from './left'
     export default{
       components:{
         SYtop,
         SYleft,
       },
       data() {
         return{

         };
       }
     }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #{
    padding:0;
    margin:0;
  }
.hello{
  width: 100%;
  height: 400px;
  float: left;
}
</style>
