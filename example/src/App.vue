<template>
  <div class="site">
    <h1>组件库测试站点</h1>
    <p>
      测试站点主要用于开发过程中测试组件，即在开发过程中由业务驱动组件开发。
    </p>
    <yyg-table />
    <voya-vbutton/>
    <voya-vbutton type="primary" disabled/>
    <voya-vbutton type="success"/>
    <voya-vbutton type="info"/>
    <voya-vbutton type="warning"/>
    <voya-vbutton type="danger"/>
    <yyg-foo :msg="msg"> </yyg-foo>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('hello world')
</script>

<style scoped lang="scss">
.site {
  padding: 20px;
}
</style>
