import { ExtractPropTypes } from 'vue'

export const vbuttonProps = {
  type: {
    type: String,
    default: 'default'
  },
  disabled: {
    type: Boolean,
    default: false
  }
} as const

export type VbuttonProps = ExtractPropTypes<typeof vbuttonProps>
