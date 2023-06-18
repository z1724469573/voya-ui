import Scrollbar from './src/scrollbar.vue'
import { App } from 'vue'

Scrollbar.name = 'voya-scrollbar'

Scrollbar.install = (app: App): void => {
  // 注册组件
  app.component(Scrollbar.name, Scrollbar)
}

export default Scrollbar
