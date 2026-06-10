import router from '@/router/index'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import pinia from '@/stores/index'
import { useUserStore } from '@/stores/module/user'
import setting from './setting'
const userStore = useUserStore(pinia)
nprogress.configure({ showSpinner: false })
//全局前置守卫
router.beforeEach(async (to, from, next) => {

  nprogress.start()
  const token = userStore.token
  const username = userStore.username

  if (token) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (username) {
        next()
      } else {
        try {
          await userStore.userInfo()
          next()
        } catch (error) {
          userStore.userLogout()
          next({ path: '/login', query: { redirect: to.path } })
        }
      }
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next({ path: '/login', query: { redirect: to.path } })
    }
  }
})

// 全局后置守卫
router.afterEach((to, from) => {
  document.title = setting.title + '-' + to.meta.title
  nprogress.done()
})


