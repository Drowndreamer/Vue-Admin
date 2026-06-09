<script setup>
import Logo from '@/layout/logo/index.vue'

</script>

<template>
  <div class="layout_container">
    <div class="layout_left">
      <Logo />
      <el-scrollbar class="scrollbar">
        <el-menu background-color="#001529" text-color="white">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">数据 大屏</el-menu-item>
          <el-sub-menu index="3">
            <template #title> 权限管理 </template>
            <el-menu-item index="3-1">用户管理</el-menu-item>
            <el-menu-item index="3-2">角色管理</el-menu-item>
            <el-menu-item index="3-3">菜单管理</el-menu-item>

          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="layout_top">

    </div>
    <div class="layout_right">
      <div class="main" style="height:4000px"></div>
    </div>


  </div>
</template>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;

  .layout_left {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;

    .scrollbar {
      width: 100%;
      height: calc(100% - 50px);
    }
  }

  .layout_top {
    position: fixed;
    width: calc(100% - $base-menu-width);
    height: $base-top-height;
    left: $base-menu-width;
    background-color: cyan;
    top: 0;
  }

  .layout_right {
    position: absolute;
    top: $base-top-height;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: calc(100% - $base-top-height);
    background-color: #fff;
    padding: 20px;
    overflow: auto; //让滚动条不会撑破盒子内容，即在盒子内进行滚动条的滚动
  }
}
</style>