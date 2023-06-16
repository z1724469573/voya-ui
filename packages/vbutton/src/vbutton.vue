<template>
  <button :class="vClass"></button>
</template>

<script lang="ts" setup name="voya-vbutton">
import { vbuttonProps } from './types'
import { computed } from 'vue'

defineProps(vbuttonProps)

const vClass = computed(() => {
  return {}
})
</script>
