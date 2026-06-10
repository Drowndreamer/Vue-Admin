<script setup lang="ts">
import { useRouter } from 'vue-router'
const props = defineProps(['menuList'])
const $router = useRouter()
const goRoute = (vc: any) => {
  $router.push(vc.index)
}
</script>
<script lang="ts">
export default {
  name: 'Menu'
}
</script>
<template>
  <template v-for="(item, index) in menuList" :key="item.path">
    <!-- 没有子路由 -->
    <template v-if="!item.children">
      <el-menu-item v-if="!item.meta.hidden" :index="item.path" @click="goRoute">
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        {{ item.meta.title }}
      </el-menu-item>
    </template>
    <!-- 有但是只有一个子路由 -->
    <template v-if="item.children && item.children.length === 1">
      <el-menu-item v-if="!item.meta.hidden" :index="item.children[0].path" @click="goRoute">
        <el-icon :size="20">
          <component :is="item.children[0].meta.icon"></component>
        </el-icon>
        {{ item.children[0].meta.title }}
      </el-menu-item>
    </template>
    <!-- 有且有大于1个的子路由 -->
    <el-sub-menu v-if="item.children && item.children.length > 1" :index="item.path">
      <template #title>
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        {{ item.meta.title }}
      </template>
      <Menu :menuList="item.children"></Menu>
    </el-sub-menu>
  </template>
</template>

<style scoped></style>