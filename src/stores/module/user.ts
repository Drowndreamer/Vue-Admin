import {defineStore} from 'pinia'
import type {loginForm} from '@/api/user/type'
import {reqLogin} from '@/api/user/index'
import {ref} from 'vue'
export const useUserStore = defineStore('user', () => {
  let token = localStorage.getItem('TOKEN')
  const userLogin = async (data:loginForm) => {
    const res:any = await reqLogin(data)
    //成功
    if(res.code === 200){
      //pinia仓库存储token
      token = res.data.token
      localStorage.setItem('TOKEN', res.data.token)
      return 'ok'
    }else{
      return Promise.reject(new Error(res.data.message))
    }
  }

  return {
    userLogin,

  } 
})