import { style } from '@vanilla-extract/css'
import vars from '#design/public-tokens.css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { feedback, feedbackSpec } from '#design/feedback'
import { flex, alignItemsCenter } from '#design/utils.css'

const common = style([
  flex,
  alignItemsCenter,
  {
    background: vars.color.gray[100],
    padding: '20px',
    gap: '0.5rem',
    borderRadius: vars.size[2],
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
