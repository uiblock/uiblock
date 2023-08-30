import { style, createThemeContract, assignVars } from '@vanilla-extract/css'
import vars from '#design/public-tokens.css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

const commonVars = createThemeContract({
  'ub-btn-border': null,
  'ub-btn-border-radius': null,
  'ub-btn-size-height': null,
  'ub-btn-size-width': null,
  'ub-btn-space': null,
})
const common = style({
  vars: assignVars(commonVars, {
    'ub-btn-border': 'none',
    'ub-btn-border-radius': vars.size[2],
    'ub-btn-size-height': vars.size[11],
    'ub-btn-size-width': vars.size[11],
    'ub-btn-space': vars.space[2],
  }),
  border: commonVars['ub-btn-border'],
  borderRadius: commonVars['ub-btn-border-radius'],
  // https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
  minHeight: commonVars['ub-btn-size-height'],
  minWidth: commonVars['ub-btn-size-width'],
  padding: `0 ${commonVars['ub-btn-space']}`,
  transition: 'all ease-in 0.2s',

  // Needed for the icon + label
  // TODO: add utility classes using sprinkles
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.space[2],
})

/*********************************************************************************/

// Common accessibility

const a11yVars = createThemeContract({
  'ub-btn-color-a11y-focus': null,
  'ub-btn-color-a11y-focus-inset': null,
  'ub-btn-shadow-a11y-focus': null,
})
const a11y = style([
  {
    vars: assignVars(a11yVars, {
      'ub-btn-color-a11y-focus': vars.color.blue[860],
      'ub-btn-color-a11y-focus-inset': vars.color.gray.base,
      'ub-btn-shadow-a11y-focus': `0 0 0 2px ${a11yVars['ub-btn-color-a11y-focus-inset']},0 0 0 4px ${a11yVars['ub-btn-color-a11y-focus']}`,
    }),
    ':focus-visible': {
      outline: 'none',
      boxShadow: a11yVars['ub-btn-shadow-a11y-focus'],
    },
  },
])

/*********************************************************************************/

// Primary

const hoverPrimaryVars = createThemeContract({
  'ub-btn-color-bg-primary-hover': null,
  'ub-btn-color-txt-primary-hover': null,
})
const hoverPrimary = style(
  {
    ':hover': {
      vars: assignVars(hoverPrimaryVars, {
        'ub-btn-color-bg-primary-hover': vars.color.gray[900],
        'ub-btn-color-txt-primary-hover': vars.color.gray[100],
      }),
      background: hoverPrimaryVars['ub-btn-color-bg-primary-hover'],
      color: hoverPrimaryVars['ub-btn-color-txt-primary-hover'],
    },
  },
  'primary_hover',
)
const activePrimaryVars = createThemeContract({
  'ub-btn-color-bg-primary-active': null,
  'ub-btn-color-txt-primary-active': null,
})
const activePrimary = style(
  {
    ':active': {
      vars: assignVars(activePrimaryVars, {
        'ub-btn-color-bg-primary-active': vars.color.gray[800],
        'ub-btn-color-txt-primary-active': vars.color.gray[200],
      }),
      background: activePrimaryVars['ub-btn-color-bg-primary-active'],
      color: activePrimaryVars['ub-btn-color-txt-primary-active'],
    },
  },
  'primary_active',
)
const a11yPrimaryVars = createThemeContract({
  'ub-btn-color-bg-primary-focus': null,
  'ub-btn-color-txt-primary-focus': null,
})
const a11yPrimary = style(
  {
    ':focus-visible': {
      vars: assignVars(a11yPrimaryVars, {
        'ub-btn-color-bg-primary-focus': vars.color.gray[900],
        'ub-btn-color-txt-primary-focus': vars.color.gray[100],
      }),
      background: a11yPrimaryVars['ub-btn-color-bg-primary-focus'],
      color: a11yPrimaryVars['ub-btn-color-txt-primary-focus'],
    },
  },
  'a11y_primary',
)
const primaryVars = createThemeContract({
  'ub-btn-color-bg-primary': null,
  'ub-btn-color-txt-primary': null,
})
const primary = style([
  {
    vars: assignVars(primaryVars, {
      'ub-btn-color-bg-primary': vars.color.gray[1000],
      'ub-btn-color-txt-primary': vars.color.gray.base,
    }),
    background: primaryVars['ub-btn-color-bg-primary'],
  },
  a11yPrimary,
  activePrimary,
  hoverPrimary,
])

/*********************************************************************************/

// subtle button

const hoverSubtleVars = createThemeContract({
  'ub-btn-color-bg-subtle-hover': null,
  'ub-btn-color-txt-subtle-hover': null,
  'ub-btn-shadow-subtle-hover': null,
})
const hoverSubtle = style(
  {
    ':hover': {
      vars: assignVars(hoverSubtleVars, {
        'ub-btn-color-bg-subtle-hover': vars.color.gray[100],
        'ub-btn-color-txt-subtle-hover': vars.color.gray[700],
        'ub-btn-shadow-subtle-hover': `0 0 0 1px ${vars.color.gray[700]}`,
      }),
      background: hoverSubtleVars['ub-btn-color-bg-subtle-hover'],
      color: hoverSubtleVars['ub-btn-color-txt-subtle-hover'],
    },
    boxShadow: hoverSubtleVars['ub-btn-shadow-subtle-hover'],
  },
  'subtle_hover',
)
const activeSubtleVars = createThemeContract({
  'ub-btn-color-bg-subtle-active': null,
  'ub-btn-color-txt-subtle-active': null,
  'ub-btn-shadow-subtle-active': null,
})
const activeSubtle = style(
  {
    ':active': {
      vars: assignVars(activeSubtleVars, {
        'ub-btn-color-bg-subtle-active': vars.color.gray[200],
        'ub-btn-color-txt-subtle-active': vars.color.gray[800],
        'ub-btn-shadow-subtle-active': `0 0 0 1px ${vars.color.gray[800]}`,
      }),
      background: activeSubtleVars['ub-btn-color-bg-subtle-active'],
      color: activeSubtleVars['ub-btn-color-txt-subtle-active'],
    },
    boxShadow: activeSubtleVars['ub-btn-shadow-subtle-active'],
  },
  'subtle_active',
)
const a11ySubtleVars = createThemeContract({
  'ub-btn-color-bg-subtle-focus': null,
  'ub-btn-color-txt-subtle-focus': null,
})
const a11ySubtle = style(
  {
    ':focus-visible': {
      vars: assignVars(a11ySubtleVars, {
        'ub-btn-color-bg-subtle-focus': vars.color.gray[100],
        'ub-btn-color-txt-subtle-focus': vars.color.gray[700],
      }),
      background: a11ySubtleVars['ub-btn-color-bg-subtle-focus'],
      color: a11ySubtleVars['ub-btn-color-txt-subtle-focus'],
      // As opposed to :hover css rules, no need to set the box-shadow here so that it's set by common a11y
    },
  },
  'subtle_a11y',
)
const subtleVars = createThemeContract({
  'ub-btn-color-bg-subtle': null,
  'ub-btn-color-txt-subtle': null,
  'ub-btn-shadow-subtle': null,
})
const subtle = style([
  {
    vars: assignVars(subtleVars, {
      'ub-btn-color-bg-subtle': 'transparent',
      'ub-btn-color-txt-subtle': vars.color.gray[600],
      'ub-btn-shadow-subtle': `0 0 0 1px ${vars.color.gray[600]}`,
    }),
    background: subtleVars['ub-btn-color-bg-subtle'],
    color: subtleVars['ub-btn-color-txt-subtle'],
    boxShadow: subtleVars['ub-btn-shadow-subtle'],
  },
  a11ySubtle,
  activeSubtle,
  hoverSubtle,
])

/*********************************************************************************/

// Inline button

const hoverInlineVars = createThemeContract({
  'ub-btn-color-bg-inline-hover': null,
  'ub-btn-color-txt-inline-hover': null,
})
const hoverInline = style(
  {
    ':hover': {
      vars: assignVars(hoverInlineVars, {
        'ub-btn-color-bg-inline-hover': vars.color.gray[100],
        'ub-btn-color-txt-inline-hover': vars.color.gray[700],
      }),
      background: hoverInlineVars['ub-btn-color-bg-inline-hover'],
      color: hoverInlineVars['ub-btn-color-txt-inline-hover'],
    },
  },
  'inline_hover',
)
const activeInlineVars = createThemeContract({
  'ub-btn-color-bg-inline-active': null,
  'ub-btn-color-txt-inline-active': null,
})
const activeInline = style(
  {
    ':active': {
      vars: assignVars(activeInlineVars, {
        'ub-btn-color-bg-inline-active': vars.color.gray[200],
        'ub-btn-color-txt-inline-active': vars.color.gray[800],
      }),
      background: activeInlineVars['ub-btn-color-bg-inline-active'],
      color: activeInlineVars['ub-btn-color-txt-inline-active'],
    },
  },
  'inline_active',
)
const a11yInlineVars = createThemeContract({
  'ub-btn-color-bg-inline-focus': null,
  'ub-btn-color-txt-inline-focus': null,
})
const a11yInline = style(
  {
    ':focus-visible': {
      vars: assignVars(a11yInlineVars, {
        'ub-btn-color-bg-inline-focus': vars.color.gray[100],
        'ub-btn-color-txt-inline-focus': vars.color.gray[700],
      }),
      background: a11yInlineVars['ub-btn-color-bg-inline-focus'],
      color: a11yInlineVars['ub-btn-color-txt-inline-focus'],
    },
  },
  'a11y_inline',
)
const inlineVars = createThemeContract({
  'ub-btn-color-bg-inline': null,
  'ub-btn-color-txt-inline': null,
})
const inline = style([
  {
    vars: assignVars(inlineVars, {
      'ub-btn-color-bg-inline': 'transparent',
      'ub-btn-color-txt-inline': vars.color.gray[600],
    }),
    background: inlineVars['ub-btn-color-bg-inline'],
    color: inlineVars['ub-btn-color-txt-inline'],
  },
  a11yInline,
  activeInline,
  hoverInline,
])

/*********************************************************************************/

export const tokens = recipe({
  base: [common, a11y],
  variants: {
    variant: { primary, subtle, inline },
  },
})

export type Variants = RecipeVariants<typeof tokens>
