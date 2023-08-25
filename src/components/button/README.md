# Tokens

## Common Tokens
--ub-btn-border
--ub-btn-border-radius
--ub-btn-size-height
--ub-btn-size-width
--ub-btn-space

## Accessibility Tokens
--ub-btn-color-a11y-focus
--ub-btn-color-a11y-focus-inset
--ub-btn-shadow-a11y-focus


## Variants

- Button variant uses a predefined styles including background color, text-color, border color, border radius. Implicitly, it sets the styles for all button states such as `hover`, `active`, `focus`...etc
  - `primary`: used for more prominent actions.
  - `outline`: used for less prominent actions. This is the default variant
  - `inline`: **only** used within `ActionBar` where multiple sibling actions are grouped together. It causes accessibility concern if used outside `ActionBar` because it looks like a text without any interaction (like hover). __TODO__ Might move this variant later so it is not abused by consumers
- Size variant determines spacial characteristics such font-size, line-height,  padding.

### Primary
--ub-btn-color-bg-primary
--ub-btn-color-txt-primary
--ub-btn-color-bg-primary-hover
--ub-btn-color-txt-primary-hover
--ub-btn-color-bg-primary-focus
--ub-btn-color-txt-primary-focus
--ub-btn-color-bg-primary-active
--ub-btn-color-txt-primary-active

### Outline
--ub-btn-color-bg-outline
--ub-btn-color-txt-outline
--ub-btn-shadow-outline
--ub-btn-color-bg-outline-hover
--ub-btn-color-txt-outline-hover
--ub-btn-shadow-outline-hover
--ub-btn-color-bg-outline-focus
--ub-btn-color-txt-outline-focus
--ub-btn-color-bg-outline-active
--ub-btn-color-txt-outline-active

### Inline
--ub-btn-color-bg-inline
--ub-btn-color-txt-inline
--ub-btn-color-bg-inline-hover
--ub-btn-color-txt-inline-hover
--ub-btn-color-bg-inline-focus
--ub-btn-color-txt-inline-focus
--ub-btn-color-bg-inline-active
--ub-btn-color-txt-inline-active
