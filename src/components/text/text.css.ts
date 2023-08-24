import { style, createThemeContract, assignVars } from '@vanilla-extract/css'
import vars from '#design/public-tokens.css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { fontTokens } from '#design/font.css'

/*********************************************************************************/
// size
const spec = {
  md: { fontSize: vars.font.size[100], lineHeight: vars.font.lineHeight[125] },
  sm: { fontSize: vars.font.size[87], lineHeight: vars.font.lineHeight[125] },
  xs: { fontSize: vars.font.size[75], lineHeight: vars.font.lineHeight[100] },
}
type Size = keyof typeof spec
const levels = Object.keys(spec) as Size[]

const toCssVars = (k: Size) =>
  createThemeContract({
    [`ub-font-text-size-${k}`]: null,
    [`ub-font-text-line-height-${k}`]: null,
  })

type FontVars = ReturnType<typeof createThemeContract>
const toCssStyles = (fontVars: FontVars, i: number) => {
  const level = levels[i]
  return style(
    {
      vars: assignVars(fontVars, {
        [`ub-font-text-size-${level}`]: spec[level].fontSize,
        [`ub-font-text-line-height-${level}`]: spec[level].lineHeight,
      }),
      fontSize: fontVars[`ub-font-text-size-${level}`],
      lineHeight: fontVars[`ub-font-text-line-height-${level}`],
    },
    `size-${level}`,
  )
}

const [md, sm, xs] = levels.map(toCssVars).map(toCssStyles)

/*********************************************************************************/

export const tokens = recipe({
  variants: {
    size: { md, sm, xs },
    ...fontTokens,
  },
})

export type Variants = RecipeVariants<typeof tokens>
