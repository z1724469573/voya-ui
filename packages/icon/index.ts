import Icon from './src/icon.vue'
import { App } from 'vue'

Icon.name = 'voya-icon'

Icon.install = (app: App): void => {
  // 注册组件
  app.component(Icon.name, Icon)
}

export default Icon
