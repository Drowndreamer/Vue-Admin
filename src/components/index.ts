import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'
const allGlobalComponet = {SvgIcon, Pagination}


export default {
  install (app:any) {
    Object.keys(allGlobalComponet).forEach(key => {
      app.component(key, allGlobalComponet[key as keyof typeof allGlobalComponet])
    })
  }
}