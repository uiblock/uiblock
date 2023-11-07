import { cva, VariantProps } from 'cva'
import { fontTokens } from '#design/font.css'

/*********************************************************************************/
// font weight
// If weight token is undefined, font-weight is depicted from l1,l2,...l6.
// If weight token is defined, it overrides the font-weight defined by the variant l1,l2,..l6.

/*********************************************************************************/
export const tokens = cva('', {
  variants: {
    variant: { l1: 'text-l1', l2: 'text-l2', l3: 'text-l3', l4: 'text-l4', l5: 'text-l5', l6: 'text-l6' },
    ...fontTokens,
  },
})

export type Variants = VariantProps<typeof tokens>
