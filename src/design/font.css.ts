import { style, createThemeContract, assignVars } from '@vanilla-extract/css'
import vars from '#design/public-tokens.css'

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
  .map(a => createThemeContract({ [`ub-font-align-${a}`]: null }))
  .map((v, i) =>
    style(
      {
        vars: assignVars(v, { [`ub-font-align-${alignValues[i]}`]: alignSpec[alignValues[i]] }),
        textAlign: v[`ub-font-align-${alignValues[i]}`],
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
export const getFontWeights = () =>
  weights
    .map(a => createThemeContract({ [`ub-font-weight-${a}`]: null }))
    .map((v, i) =>
      style(
        {
          vars: assignVars(v, { [`ub-font-weight-${weights[i]}`]: weightSpec[weights[i]] }),
          fontWeight: v[`ub-font-weight-${weights[i]}`],
        },
        'weight',
      ),
    )
const [bold, semibold, medium, regular, thin] = getFontWeights()

/*********************************************************************************/
// family
const familySpec = {
  system: vars.font.family.system,
  mono: vars.font.family.mono,
}
type Family = keyof typeof familySpec
const families = Object.keys(familySpec) as Family[]
const [system, mono] = families
  .map(a => createThemeContract({ [`ub-font-family-${a}`]: null }))
  .map((v, i) =>
    style(
      {
        vars: assignVars(v, { [`ub-font-family-${families[i]}`]: familySpec[families[i]] }),
        fontFamily: v[`ub-font-family-${families[i]}`],
      },
      'family',
    ),
  )

/*********************************************************************************/
export const fontTokens = {
  align: { start, center, end },
  weight: { bold, semibold, medium, regular, thin },
  family: { system, mono },
}
