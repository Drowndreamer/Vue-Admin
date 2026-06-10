<script setup>
import Logo from '@/layout/logo/index.vue'
import Menu from '@/layout/menu/index.vue'
//获取用户相关的小仓库
import { useUserStore } from '@/stores/module/user'
import Main from '@/layout/main/index.vue'
import { useRoute } from 'vue-router'
import Nav from '@/layout/nav/index.vue'
import { useLayoutSettingStore } from '@/stores/module/setting'
const layoutSettingStore = useLayoutSettingStore()
const userStore = useUserStore()
const $route = useRoute()
</script>

<template>
  <div class="layout_container">
    <div class="layout_left">
      <Logo />
      <el-scrollbar class="scrollbar">
        <el-menu :default-active="$route.path" background-color="#001529" text-color="white"
          :collapse="layoutSettingStore.fold">
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="layout_nav" :class="{ fold: layoutSettingStore.fold }">
      <Nav></Nav>
    </div>
    <div class="layout_right" :class="{ fold: layoutSettingStore.fold }">
      <Main></Main>
    </div>


  </div>
</template>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .layout_left {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;
    transition: all .3s;


    .scrollbar {
      width: 100%;
      height: calc(100% - 43px);

      .el-menu {
        border-right: none;
      }
    }


  }

  .layout_nav {
    position: fixed;
    width: calc(100% - $base-menu-width);
    height: $base-top-height;
    left: $base-menu-width;
    top: 0;
    color: black;
    transition: all .3s;

    &.fold {
      width: calc(100% - 43px);
      left: 43px;
    }
  }

  .layout_right {
    position: absolute;
    top: $base-top-height;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: calc(100% - $base-top-height);
    background-color: skyblue;
    padding: 20px;
    box-sizing: border-box;
    overflow: auto; //让滚动条不会撑破盒子内容，即在盒子内进行滚动条的滚动
    transition: all .3s;

    &.fold {
      width: calc(100% - 43px);
      left: 43px;

    }
  }
}
</style>