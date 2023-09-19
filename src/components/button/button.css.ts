import { style } from '@vanilla-extract/css'
import vars from '#design/public-tokens.css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

const common = style({
  border: 'none',
  borderRadius: vars.size[2],
  transition: 'all ease-in 0.2s',

  // Needed for the icon + label
  // TODO: add utility classes using sprinkles
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.space[2],
})

/*********************************************************************************/
const a11yCommon = style([
  {
    ':focus-visible': {
      outline: 'none',
      boxShadow: `0 0 0 2px ${vars.color.gray.base},0 0 0 4px ${vars.color.blue[860]}`,
    },
  },
])

/*********************************************************************************/
const primary = style([
  {
    background: vars.color.gray[1000],
    ':hover': {
      background: vars.color.gray[900],
      color: vars.color.gray[100],
    },
    ':active': {
      background: vars.color.gray[800],
      color: vars.color.gray[200],
    },
    ':focus-visible': {
      background: vars.color.gray[900],
      color: vars.color.gray[100],
    },
  },
])

/*********************************************************************************/
const subtle = style([
  {
    background: 'transparent',
    color: vars.color.gray[600],
    boxShadow: `0 0 0 1px ${vars.color.gray[600]}`,
    ':hover': {
      background: vars.color.gray[100],
      color: vars.color.gray[700],
    },
    ':active': {
      background: vars.color.gray[200],
      color: vars.color.gray[800],
    },
    ':focus-visible': {
      background: vars.color.gray[100],
      color: vars.color.gray[700],
      // As opposed to :hover css rules, no need to set the box-shadow here so that it's set by common a11y
    },
  },
])

/*********************************************************************************/
const inline = style([
  {
    background: 'transparent',
    color: vars.color.gray[600],
    ':hover': {
      background: vars.color.gray[100],
      color: vars.color.gray[700],
    },
    ':active': {
      background: vars.color.gray[200],
      color: vars.color.gray[800],
    },
    ':focus-visible': {
      background: vars.color.gray[100],
      color: vars.color.gray[700],
    },
  },
])

/*********************************************************************************/
// size
// https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
const md = style({
  minHeight: vars.size[11],
  minWidth: vars.size[11],
  padding: `0 ${vars.space[2]}`,
})

const lg = style({
  minHeight: vars.size[15],
  minWidth: vars.size[15],
  padding: `0 ${vars.space[2]}`,
})

/*********************************************************************************/
// TODO: Can I do better here?
const danger = style({})
const warn = style({})
const info = style({})
const success = style({})

const feedback = ['danger', 'warn'] as const
type Feedback = (typeof feedback)[number]

const feedbackSpec = {
  danger: vars.color.red[930],
  warn: vars.color.yellow[780],
}

const toInlineFeedbackCompoundVariants = (
  acc: Array<{ variants: { [k: string]: string | boolean }; style: string }>,
  f: Feedback,
) => {
  const withFeedbackStyle = style({
    color: feedbackSpec[f],
    ':hover': { color: feedbackSpec[f] },
    ':active': { color: feedbackSpec[f], background: vars.color.gray[200] },
    ':focus-visible': { color: feedbackSpec[f] },
  })
  const withFeedbackStyleOnElevation = style([
    withFeedbackStyle,
    {
      ':hover': { background: 'transparent', backdropFilter: 'brightness(1.8)' },
      ':active': { background: vars.color.gray[200] },
    },
  ])
  return acc.concat(
    {
      variants: {
        variant: 'inline',
        feedback: f,
      },
      style: withFeedbackStyle,
    },
    {
      variants: {
        variant: 'inline',
        feedback: f,
        elevated: true,
      },
      style: withFeedbackStyleOnElevation,
    },
  )
}

/*********************************************************************************/
export const tokens = recipe({
  base: [common, a11yCommon],
  variants: {
    variant: { primary, subtle, inline },
    size: { lg, md },
    feedback: { danger, warn, info, success },
    elevated: { true: {} },
  },
  compoundVariants: [...feedback.reduce(toInlineFeedbackCompoundVariants, [])],
})

export type Variants = RecipeVariants<typeof tokens>
