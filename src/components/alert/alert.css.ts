import { style } from '@vanilla-extract/css'
import vars from '#design/public-tokens.css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const flex = style({
  // TODO: add utility classes using sprinkles
  display: 'flex',
  gap: vars.space[2],
})

export const flexCol = style({
  flexDirection: 'column',
})

export const towardsEnd = style({
  marginLeft: 'auto',
})

const common = style([
  flex,
  {
    transition: 'all ease-in 0.2s',
    alignItems: 'baseline',
    background: vars.color.gray[100],
    padding: '20px',
    // borderRadius: '10px',
  },
])

const error1 = style({
  background: vars.color.red[950],
  border: `1px solid ${vars.color.red[980]}`,
  color: vars.color.gray.base,
})

const error2 = style({
  background: vars.color.red[980],
  color: vars.color.gray.base,
})

const error3 = style({
  border: `1px solid ${vars.color.red[980]}`,
  color: vars.color.gray[1000],
})

const error4 = style({
  border: `1px solid ${vars.color.red[980]}`,
  color: vars.color.red[980],
})

const error5 = style({
  border: `1px solid ${vars.color.red[980]}`,
  color: vars.color.red[980],
  background: vars.color.gray.base,
})

const error6 = style({
  color: vars.color.gray.base,
  background: vars.color.red[880], //'#e14938',
})

const error7 = style({
  border: `1px solid #ec5244`,
  color: '#ec5244',
})

const error8 = style({
  border: `1px solid ${vars.color.red[930]}`,
  color: vars.color.red[930],
})

const error9 = style({
  boxShadow: `0px 0px 4px 1px ${vars.color.red[930]}`,
  // border: `1px solid ${vars.color.red[930]}`,
  color: vars.color.red[930],
})

export const tokens = recipe({
  base: [common],
  variants: {
    type: { error1, error2, error3, error4, error5, error6, error7, error8, error9 },
  },
})

export type Variants = RecipeVariants<typeof tokens>
