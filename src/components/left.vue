<template>
  <div class="body">
    <div class="left">
   <el-col >
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#eeeeee"
      text-color="#000000"
      unique-opened="true"
      active-text-color="#000000">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-user" style="color: #007AFF;"></i>
          <span >员工资料</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1" style="color: #007AFF;" >基本资料</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-postcard" style="color: #007AFF;"></i>
          <span>人事管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">员工奖罚</el-menu-item>
          <el-menu-item index="1-1">员工培训</el-menu-item>
          <el-menu-item index="1-1">员工调薪</el-menu-item>
          <el-menu-item index="1-1">员工调动</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-money" style="color: #007AFF;"></i>
          <span>薪资管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">工资账号管理</el-menu-item>
          <el-menu-item index="1-1">员工账号管理</el-menu-item>
          <el-menu-item index="1-1">工资表管理</el-menu-item>
          <el-menu-item index="1-1">月末处理</el-menu-item>
          <el-menu-item index="1-1">工资表查询</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="4">
        <template slot="title" index="top" @click="goTo('top')">
          <i class="el-icon-potato-strips" style="color: #007AFF;"></i>
          <span>统计管理</span>
        </template>
        <el-menu-item-group>
         <el-menu-item  index="top" @click="goTo('top')">综合信息统计</el-menu-item>
         <el-menu-item index="1-1">员工积分统计</el-menu-item>
         <el-menu-item index="1-1">人事信息统计</el-menu-item>
         <el-menu-item index="1-1">人事记录统计</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-menu" style="color: #007AFF;"></i>
          <span>系统管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">基础信息设置
          <li role="menuitem" tabindex="-1" class="el-menu-item is-active" style="padding-left: 30px; padding-right: 0px; margin-left: 0px; width: 170px; text-align: left;" width="180px">基本资料
                          </li>
          </el-menu-item>
          <el-menu-item index="1-1">系统管理</el-menu-item>
          <el-menu-item index="1-1">操作日志管理</el-menu-item>
          <el-menu-item index="1-1">操作员管理</el-menu-item>
          <el-menu-item index="1-1">备份恢复数据</el-menu-item>
          <el-menu-item index="1-1">初始化数据库</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

    </el-menu>
  </el-col>
  </div>

      <div class="right">
        <div v-show="flase">
        <l-tjibenzl></l-tjibenzl>
        </div>
        <div v-show="flase">
        <wage-n></wage-n>
        </div>
        <div v-show="flase">
        <wage-ms></wage-ms>
        </div>
        <div v-show="true">
        <zhujian></zhujian>
        </div>
      </div>
  <RouterView></RouterView>
  </div>
</template>

<script>
  import LTjibenzl from './jibenzl'
  import WageN from './WageN'
  import WageMs from './WageMs'
  import zhujian from './zhujian'
  export default {
    components:{
      LTjibenzl,
      WageN,
      WageMs,
      zhujian,
    },
    data() {
      return{
         activeName: 'second'
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
     goTo(path) {
      this.$router.replace(path);
    },
    handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
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
   .left{
     width: 200px;
    float: left;
  }
</style>
