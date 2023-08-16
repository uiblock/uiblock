import { style, createThemeContract, assignVars } from '@vanilla-extract/css'
import vars from '#design/public-tokens.css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

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
// align
const alignSpec = {
  start: vars.font.align.start,
  center: vars.font.align.center,
  end: vars.font.align.end,
}
type Align = keyof typeof alignSpec
const alignValues = Object.keys(alignSpec) as Align[]
const [start, center, end] = alignValues
  .map(a => createThemeContract({ [`ub-font-heading-align-${a}`]: null }))
  .map((v, i) =>
    style(
      {
        vars: assignVars(v, { [`ub-font-heading-align-${alignValues[i]}`]: alignSpec[alignValues[i]] }),
        textAlign: v[`ub-font-heading-align-${alignValues[i]}`],
      },
      'align',
    ),
  )

/*********************************************************************************/
// weight
const weightSpec = {
  bold: vars.font.weight.bold,
  semibold: vars.font.weight.semibold,
  medium: vars.font.weight.medium,
  regular: vars.font.weight.regular,
  thin: vars.font.weight.thin,
}
type Weight = keyof typeof weightSpec
const weights = Object.keys(weightSpec) as Weight[]
const [bold, semibold, medium, regular, thin] = weights
  .map(a => createThemeContract({ [`ub-font-heading-weight-${a}`]: null }))
  .map((v, i) =>
    style(
      {
        vars: assignVars(v, { [`ub-font-heading-weight-${weights[i]}`]: weightSpec[weights[i]] }),
        fontWeight: v[`ub-font-heading-weight-${weights[i]}`],
      },
      'weight',
    ),
  )

/*********************************************************************************/
// family
const familySpec = {
  system: vars.font.family.system,
  mono: vars.font.family.mono,
}
type Family = keyof typeof familySpec
const families = Object.keys(familySpec) as Family[]
const [system, mono] = families
  .map(a => createThemeContract({ [`ub-font-heading-family-${a}`]: null }))
  .map((v, i) =>
    style(
      {
        vars: assignVars(v, { [`ub-font-heading-family-${families[i]}`]: familySpec[families[i]] }),
        fontFamily: v[`ub-font-heading-family-${families[i]}`],
      },
      'family',
    ),
  )

/*********************************************************************************/

export const tokens = recipe({
  variants: {
    variant: { l1, l2, l3, l4, l5, l6 },
    align: { start, center, end },
    weight: { bold, semibold, medium, regular, thin },
    family: { system, mono },
  },
})

export type Variants = RecipeVariants<typeof tokens>
