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

const danger = style({
  border: `1px solid ${vars.color.red[930]}`,
  color: vars.color.red[930],
})

export const tokens = recipe({
  base: [common],
  variants: {
    type: { danger },
  },
})

export type Variants = RecipeVariants<typeof tokens>
