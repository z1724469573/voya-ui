import { App } from 'vue'
import Foo from '@demo-ui-lib/foo'
import Table from '@demo-ui-lib/table'
import Vbutton from '@demo-ui-lib/vbutton'
import Icon from '@demo-ui-lib/icon'
import Scrollbar from '@demo-ui-lib/scrollbar'
// import component end
import '../scss/index.scss'

const components = [
  Foo,
  Table,
  Vbutton,
  Icon,
  Scrollbar
] // components

// 全局动态添加组件
const install = (app: App): void => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export default {
  install
}
