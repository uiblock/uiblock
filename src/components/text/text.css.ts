import { style, createThemeContract, assignVars } from '@vanilla-extract/css'
import vars from '#design/public-tokens.css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { fontTokens } from '#design/font.css'

/*********************************************************************************/
// color
const colorSpec = {
  default: vars.color.gray[1000],
  subtle: vars.color.gray[600],
}
type Color = keyof typeof colorSpec
const colors = Object.keys(colorSpec) as Color[]
const toCssColorVars = (c: Color) => createThemeContract({ [`ub-color-body-txt-${c}`]: null })
type ColorVars = ReturnType<typeof createThemeContract>
const toCssColorStyles = (colorVars: ColorVars, i: number) => {
  const color = colors[i]
  return style(
    {
      vars: assignVars(colorVars, {
        [`ub-color-body-txt-${color}`]: colorSpec[color],
      }),
      color: colorVars[`ub-color-body-txt-${color}`],
    },
    `color-${color}`,
  )
}

const [base, subtle] = colors.map(toCssColorVars).map(toCssColorStyles)

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
    [`ub-font-body-size-${k}`]: null,
    [`ub-font-body-line-height-${k}`]: null,
  })

type FontVars = ReturnType<typeof createThemeContract>
const toCssStyles = (fontVars: FontVars, i: number) => {
  const level = levels[i]
  return style(
    {
      vars: assignVars(fontVars, {
        [`ub-font-body-size-${level}`]: spec[level].fontSize,
        [`ub-font-body-line-height-${level}`]: spec[level].lineHeight,
      }),
      fontSize: fontVars[`ub-font-body-size-${level}`],
      lineHeight: fontVars[`ub-font-body-line-height-${level}`],
    },
    `size-${level}`,
  )
}

const [md, sm, xs] = levels.map(toCssVars).map(toCssStyles)

/*********************************************************************************/

export const tokens = recipe({
  variants: {
    size: { md, sm, xs },
    color: { default: base, subtle },
    ...fontTokens,
  },
})

export type Variants = RecipeVariants<typeof tokens>
