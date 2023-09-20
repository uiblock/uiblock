import { style } from '@vanilla-extract/css'
import vars from '#design/public-tokens.css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { feedback, feedbackSpec } from '#design/feedback'

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

const [danger, warn, success, info] = feedback.map(f =>
  style({
    border: `1px solid ${feedbackSpec[f]}`,
    color: feedbackSpec[f],
  }),
)

export const tokens = recipe({
  base: [common],
  variants: {
    feedback: { danger, warn, success, info },
  },
})

export type Variants = RecipeVariants<typeof tokens>
