import { ExtractPropTypes } from 'vue'

export const iconProps = {
} as const

export type IconProps = ExtractPropTypes<typeof iconProps>
