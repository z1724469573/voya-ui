import Vbutton from './src/vbutton.vue'
import { App } from 'vue'

Vbutton.name = 'voya-vbutton'

Vbutton.install = (app: App): void => {
  // 注册组件
  app.component(Vbutton.name, Vbutton)
}

export default Vbutton
