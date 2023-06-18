<template>
  <button :class="[ns.b(),ns.m(props.type),ns.is('disabled', props.disabled)]">asd</button>
</template>

<script lang="ts" setup name="voya-vbutton">
import { vbuttonProps } from './types'
import { useNamespace } from '../../hooks/use-namespace'
const ns = useNamespace('button')

const props = defineProps(vbuttonProps)
</script>
