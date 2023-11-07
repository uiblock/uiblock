import { cva, VariantProps } from 'cva'

const common = cva('flex items-center gap-2 p-5 bg-gray-900 rounded-lg')

export const tokens = cva(common(), {
  variants: {
    feedback: {
      danger: 'border border-red-400 text-red-400',
      warn: 'border border-yellow-500 text-yellow-500',
      success: 'border border-green-500 text-green-500',
      info: 'border border-blue-500 text-blue-500',
    },
  },
})

export type Variants = VariantProps<typeof tokens>
