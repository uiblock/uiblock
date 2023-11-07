import { cva, VariantProps } from 'cva'
import { fontTokens } from '#design/font.css'

export const tokens = cva('', {
  variants: {
    size: { md: 'text-md', sm: 'text-sm', xs: 'text-sm' },
    color: { default: 'text-white', subtle: 'text-gray-400' },
    ...fontTokens,
  },
})

export type Variants = VariantProps<typeof tokens>
