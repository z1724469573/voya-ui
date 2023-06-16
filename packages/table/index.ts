import Table from './src/table.vue'
import { App } from 'vue'

Table.name = 'yyg-table'

Table.install = (app: App): void => {
  // 注册组件
  app.component(Table.name, Table)
}

export default Table
