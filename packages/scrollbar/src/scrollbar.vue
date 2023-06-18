<template>
  <div>
    voya-scrollbar
  </div>
</template>

<script lang="ts" setup name="voya-scrollbar">
import { defineProps } from 'vue'
import { scrollbarProps } from './types'

defineProps(scrollbarProps)
</script>

<style scoped lang="scss">
.voya-scrollbar {
}
</style>
