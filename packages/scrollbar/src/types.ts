import { ExtractPropTypes } from 'vue'

export const scrollbarProps = {
} as const

export type ScrollbarProps = ExtractPropTypes<typeof scrollbarProps>
