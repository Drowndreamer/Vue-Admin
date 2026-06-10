<script setup>
import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus'
import { ref } from 'vue'
import { useLayoutSettingStore } from '@/stores/module/setting'
import { useRoute, useRouter } from 'vue-router'
const $route = useRoute()
const $router = useRouter()

import { useUserStore } from '@/stores/module/user.ts'
const userStore = useUserStore()

const layoutSettingStore = useLayoutSettingStore()
const changeIcon = () => {
  layoutSettingStore.fold = !layoutSettingStore.fold
}
const toRefresh = () => {
  layoutSettingStore.refresh = !layoutSettingStore.refresh
}
const toFull = () => {
  let full = document.fullscreenElement
  if (!full) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}
const logOut = () => {
  userStore.userLogout()
  $router.push({ path: '/login', query: { redirect: $route.path } })
}
</script>

<template>
  <div class="nav">
    <div class="left">
      <el-icon @click="changeIcon" :size="20" style="margin-right: 10px;">
        <component :is="layoutSettingStore.fold ? 'Fold' : 'Expand'"></component>
      </el-icon>
      <!-- //左侧面包屑 -->
      <el-breadcrumb separator-icon="ArrowRight">
        <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index" v-show="item.name" :to="item.path">
          <el-icon :size="10">
            <component :is="item.meta.icon"></component>
          </el-icon>
          {{ item.meta.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class=" right">
      <el-button type="primary" size="small" icon="Refresh" circle @click="toRefresh"></el-button>
      <el-button type="primary" size="small" icon="FullScreen" circle @click="toFull"></el-button>
      <el-button type="primary" size="small" icon="Setting" circle></el-button>
      <img :src="userStore.avatar" alt="" style="width: 24px;height: 24px;margin: 0 10px;border-radius: 50%">
      <!-- //下拉菜单 -->
      <el-dropdown>
        <span class="el-dropdown-link">
          {{ userStore.username }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="logOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped lang="scss">
.nav {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(to right, rgb(160, 107, 107), white);

  .left {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }

  .right {
    display: flex;
    align-items: center;
  }
}
</style>