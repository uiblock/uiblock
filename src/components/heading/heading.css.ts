import { style } from '@vanilla-extract/css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { fontTokens, l1, l2, l3, l4, l5, l6, weightSpec, Weight } from '#design/font.css'

/*********************************************************************************/
// font weight
// If weight token is undefined, font-weight is depicted from l1,l2,...l6.
// If weight token is defined, it overrides the font-weight defined by the variant l1,l2,..l6. Use compoundVariants as a workaround to achieve that regardless of
//  other combination of tokens that are set with the weight token
const overrideFontWeight = (Object.keys(weightSpec) as Weight[]).map((weight: Weight) => ({
  variants: { weight },
  style: style({ fontWeight: weightSpec[weight] }),
}))
/*********************************************************************************/
export const tokens = recipe({
  compoundVariants: [...overrideFontWeight],
  variants: {
    variant: { l1, l2, l3, l4, l5, l6 },
    ...fontTokens,
  },
})

export type Variants = RecipeVariants<typeof tokens>
