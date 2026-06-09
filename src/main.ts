import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'virtual:svg-icons-register'
import GlobalComponents from '@/components/index.ts'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus,{
  locale: zhCn, //中文
})
app.use(GlobalComponents)
import '@/styles/index.scss'

app.mount('#app')

