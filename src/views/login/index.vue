<script setup>

import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue';
import { useUserStore } from '@/stores/module/user'
import { useRouter, useRoute } from 'vue-router'
import { ElNotification } from 'element-plus';
import { getTime } from '@/utils/time'
let loginForm = reactive({ username: 'admin', password: '111111' })
const useStore = useUserStore()
let $router = useRouter()
const $route = useRoute()
const loginForms = ref()
const login = async () => {
  await loginForms.value.validate()
  isLoading.value = true
  try {
    await useStore.userLogin(loginForm)
    $router.push({ path: $route.query.redirect || '/' })
    ElNotification({
      type: 'success',
      message: '登录成功',
      title: `hi,${getTime()}`
    })
  } catch (error) {
    ElNotification({
      type: 'error',
      message: error.message
    })
  } finally {
    isLoading.value = false
  }
}
let isLoading = ref(false)
const rules = {
  username: [
    { required: true, min: 5, max: 15, message: '账号长度应在6 ~ 15位', trigger: 'change' }
  ],
  password: [
    { required: true, min: 5, max: 15, message: '密码长度应在6 ~ 15位', trigger: 'change' }
  ]
}
</script>

<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginForms">
          <h1>哈基米后台管理系统</h1>
          <h2>欢迎来到哈基米曼波</h2>
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" :prefix-icon="User"></el-input>
          </el-form-item>
          <el-form-item prop='password'>
            <el-input v-model="loginForm.password" type="password" :prefix-icon="Lock" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button :loading="isLoading" class="login_btn" type="primary" size="default" @click="login">
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;

  .login_form {
    position: relative;
    top: 30vh;
    width: 80%;
    background: url('@/assets/images/login_form.png');
    background-size: cover;
    padding: 40px 40px;

    h1 {
      font-size: 40px;
      color: #fff;
    }

    h2 {
      font-size: 20px;
      color: red;
      margin: 20px 0;
    }

    .login_btn {
      width: 100%;
    }
  }
}
</style>