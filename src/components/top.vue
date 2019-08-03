<template>
  <div class="top">
 <div class="top-l">微人事</div>
 <div class="top-r">
  <el-menu
   :default-active="activeIndex2"
   class="el-menu-demo"
   mode="horizontal"
   @select="handleSelect"
   background-color="#007AFF"
   text-color="#fff"
   active-text-color="#ffd04b">
   <el-submenu index="2">
     <template slot="title"> <el-avatar icon="el-icon-user-solid"></el-avatar>系统管理员</template>
     <el-menu-item index="2-1">个人中心</el-menu-item>
     <el-menu-item index="2-2">设置</el-menu-item>
     <el-menu-item index="2-3">退出</el-menu-item>
   </el-submenu>
 </el-menu></div>

  </div>
</template>

<script>
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  .top{
    width: 1317px;
    height: 60px;
    float: left;
    margin: -10px 0 0 -7px;
    background:#007AFF;
  }
  .top-l{
    width: 80px;
    height: 30px;
    float: left;
    margin: 10px 0 0 20px;
    font-size: 26px;
    color: #FFFFFF;
  }
  .top-r{
    width: 140px;
    height: 40px;
    float: right;
  }
</style>
