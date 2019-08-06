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
   <div class="left">
   <el-col>
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#eeeeee"
      text-color="#000000"
      unique-opened="true"
      router
      active-text-color="#000000">
      <el-submenu>
        <template slot="title">
          <i class="el-icon-user" style="color: #007AFF;"></i>
          <span>员工资料</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/top" style="color: #007AFF;" >基本资料</el-menu-item>
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

<style scoped>
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
    .left{
      margin: 60px 0 0 -100px;
     width: 200px;
    float: left;
  }
</style>
