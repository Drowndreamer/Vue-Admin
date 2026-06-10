import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import pinia from '@/stores/index'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'virtual:svg-icons-register'
import GlobalComponents from '@/components/index.ts'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(ElementPlus, {
  locale: zhCn, //中文
})
app.use(GlobalComponents)
import '@/styles/index.scss'
import './permission.ts'
app.mount('#app')

