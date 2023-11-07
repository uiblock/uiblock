import { extendTailwindMerge } from 'tailwind-merge'

export const twMerge = extendTailwindMerge({
  classGroups: {
    text: ['text-l1', 'text-l2', 'text-l3', 'text-l4', 'text-l5', 'text-l6', 'text-md', 'text-sm', 'text-xs'],
  },
})
