import { style, createThemeContract, assignVars } from '@vanilla-extract/css'
import vars from '#design/public-tokens.css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { fontTokens, getFontWeights } from '#design/font.css'

/*********************************************************************************/
// variant
const spec = {
  l1: { fontSize: vars.font.size[250], lineHeight: vars.font.lineHeight[300], fontWeight: vars.font.weight.bold },
  l2: { fontSize: vars.font.size[200], lineHeight: vars.font.lineHeight[250], fontWeight: vars.font.weight.semibold },
  l3: { fontSize: vars.font.size[175], lineHeight: vars.font.lineHeight[200], fontWeight: vars.font.weight.semibold },
  l4: { fontSize: vars.font.size[150], lineHeight: vars.font.lineHeight[175], fontWeight: vars.font.weight.semibold },
  l5: { fontSize: vars.font.size[125], lineHeight: vars.font.lineHeight[150], fontWeight: vars.font.weight.semibold },
  l6: { fontSize: vars.font.size[100], lineHeight: vars.font.lineHeight[150], fontWeight: vars.font.weight.semibold },
}

export type Level = keyof typeof spec
const levels = Object.keys(spec) as Level[]

const toCssVars = (k: Level) =>
  createThemeContract({
    [`ub-font-heading-size-${k}`]: null,
    [`ub-font-heading-line-height-${k}`]: null,
    [`ub-font-heading-weight-${k}`]: null,
  })

type FontVars = ReturnType<typeof createThemeContract>
const toCssStyles = (fontVars: FontVars, i: number) => {
  const level = levels[i]
  return style(
    {
      vars: assignVars(fontVars, {
        [`ub-font-heading-size-${level}`]: spec[level].fontSize,
        [`ub-font-heading-line-height-${level}`]: spec[level].lineHeight,
        [`ub-font-heading-weight-${level}`]: spec[level].fontWeight,
      }),
      fontSize: fontVars[`ub-font-heading-size-${level}`],
      lineHeight: fontVars[`ub-font-heading-line-height-${level}`],
      fontWeight: fontVars[`ub-font-heading-weight-${level}`],
    },
    `variant-${level}`,
  )
}

const [l1, l2, l3, l4, l5, l6] = levels.map(toCssVars).map(toCssStyles)

/*********************************************************************************/
// font weight
// In order to override the font weight defined by the variant l1,l2,..l6. Define a new css variable
// then assign font-weight css rule to the new css variable
// TODO: may be i can take the font weight rule out of the variant l1...l6 to simplify things
// Or find a better way to reassign the value of the css variable ub-font-heading-weight-${level}
const [bold, semibold, medium, regular, thin] = getFontWeights()

/*********************************************************************************/
export const tokens = recipe({
  variants: {
    variant: { l1, l2, l3, l4, l5, l6 },
    ...fontTokens,
    weight: { bold, semibold, medium, regular, thin },
  },
})

export type Variants = RecipeVariants<typeof tokens>
