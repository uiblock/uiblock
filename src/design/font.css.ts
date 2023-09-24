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
export const weightSpec = {
  bold: vars.font.weight.bold,
  semibold: vars.font.weight.semibold,
  medium: vars.font.weight.medium,
  regular: vars.font.weight.regular,
  thin: vars.font.weight.thin,
}
export type Weight = keyof typeof weightSpec
const weights = Object.keys(weightSpec) as Weight[]
const [bold, semibold, medium, regular, thin] = weights.map(w => style({ fontWeight: weightSpec[w] }, 'weight'))

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

/*********************************************************************************/
// levels classes to be used for heading tags and tiles like alert title
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

const toHeadingStyle = (level: Level) => {
  const { fontSize, lineHeight, fontWeight } = spec[level]
  return style(
    {
      fontSize,
      lineHeight,
      fontWeight,
    },
    level,
  )
}
export const [l1, l2, l3, l4, l5, l6] = levels.map(toHeadingStyle)
