import { defineStore } from 'pinia'
import type { loginForm } from '@/api/user/type'
import { reqLogin, reqUserInfo } from '@/api/user/index'
import { ref } from 'vue'
import { constantRoutes } from '@/router/constantRoutes'

export const useUserStore = defineStore('user', () => {
  let token = ref(localStorage.getItem('TOKEN'))
  let username = ref('')
  let avatar = ref('')
  let menuRoutes = constantRoutes
  const userLogin = async (data: loginForm) => {
    const res: any = await reqLogin(data)
    //成功
    if (res.code === 200) {
      //pinia仓库存储token
      token.value = res.data.token
      localStorage.setItem('TOKEN', res.data.token)
      return 'ok'
    } else {
      return Promise.reject(new Error(res.data.message))
    }
  }
  const userInfo = async () => {
    const res = await reqUserInfo()
    if (res.code == 200) {
      username.value = res.data.checkUser.username
      avatar.value = res.data.checkUser.avatar
      console.log(username.value)
      return 'ok'
    } else {
      return Promise.reject('获取用户信息失败')
    }
  }
  const userLogout = () => {
    token.value = ''
    avatar.value = ''
    username.value = ''
    localStorage.removeItem('TOKEN')
  }

  return {
    token,
    userLogin,
    menuRoutes,
    userInfo,
    avatar,
    username,
    userLogout
  }
})