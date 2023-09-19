import { style } from '@vanilla-extract/css'
import vars from '#design/public-tokens.css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const flex = style({
  // TODO: add utility classes using sprinkles
  display: 'flex',
  gap: vars.space[2],
})

export const towardsEnd = style({
  // TODO: add utility classes using sprinkles
  marginLeft: 'auto',
})

const common = style([
  flex,
  {
    alignItems: 'center',
    background: vars.color.gray[100],
    padding: '20px',
  },
])

const danger = style({
  border: `1px solid ${vars.color.red[930]}`,
  color: vars.color.red[930],
})

const warn = style({
  border: `1px solid ${vars.color.yellow[780]}`,
  color: vars.color.yellow[780],
})

export const tokens = recipe({
  base: [common],
  variants: {
    type: { danger, warn },
  },
})

export type Variants = RecipeVariants<typeof tokens>
