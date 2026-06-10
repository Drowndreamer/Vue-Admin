import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const allGlobalComponet = {SvgIcon, Pagination}
export default {
  install (app:any) {
    Object.keys(allGlobalComponet).forEach(key => {
      app.component(key, allGlobalComponet[key as keyof typeof allGlobalComponet])
    })
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  }
}