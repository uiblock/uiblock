# Tokens

Design token general name is --ub-component-category-concept-prop-variant-state-scale-mode where:
- component is `btn`
- category is one of `color`, `border`, `space`, `size`, `shadow`
- concept is one of `action`, `a11y`
- prop
  - For category `color`, concept `action`: props are `bg`, `txt`
  - For category `border`, concept `action`: props are `radius` & none (to hold border attributes: width, color & line style)
  - For category `space`, concept `action`: no props.
  - For category `size`, concept `action`: props are `width`, `height`
  - For category `shadow`, concept `action`: none (to hold shadow attributes as in css rule: offset-x, offset-y, blur-radius, color) 
  - For category `shadow`, concept `a11`: none (same as above)
- variant: `primary`, `outline`, `inline`
- state: `hover`, `active`, `focus`

I decided to remove the `action` from token name for abbreviation

```css
/*common*/
--ub-btn-border
--ub-btn-border-radius
--ub-btn-size-height
--ub-btn-size-width
--ub-btn-space

/*accessibility*/
--ub-btn-color-a11y-focus
--ub-btn-color-a11y-focus-inset
--ub-btn-shadow-a11y-focus

/*primary*/
--ub-btn-color-bg-primary
--ub-btn-color-txt-primary
--ub-btn-color-bg-primary-hover
--ub-btn-color-txt-primary-hover
--ub-btn-color-bg-primary-focus
--ub-btn-color-txt-primary-focus
--ub-btn-color-bg-primary-active
--ub-btn-color-txt-primary-active

/*outline*/
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

/*inline*/
--ub-btn-color-bg-inline
--ub-btn-color-txt-inline
--ub-btn-color-bg-inline-hover
--ub-btn-color-txt-inline-hover
--ub-btn-color-bg-inline-focus
--ub-btn-color-txt-inline-focus
--ub-btn-color-bg-inline-active
--ub-btn-color-txt-inline-active
```

# Component Props

But by default, the font tokens are inherited from parent elements/components. So there is no need to create a separate prop.

## variant

It uses a predefined tokens to set background color, text-color, border color, border radius. Implicitly, it sets the styles for all button states such as `hover`, `active`, `focus`...etc
- default value: `outline` 
- possible values: `primary`, `outline`, `inline`
  - `primary`: used for more prominent actions.
  - `outline`: used for less prominent actions.
  - `inline`: **only** used within `ActionBar` where multiple sibling actions are grouped together. It causes accessibility concern if used outside `ActionBar` because unless you interact with it, it looks like a text. __TODO__ Might move this variant later so it is not abused by consumers
- mapped tokens:
```css
--ub-btn-color-bg-primary
--ub-btn-color-txt-primary
--ub-btn-color-bg-primary-hover
--ub-btn-color-txt-primary-hover
--ub-btn-color-bg-primary-focus
--ub-btn-color-txt-primary-focus
--ub-btn-color-bg-primary-active
--ub-btn-color-txt-primary-active


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


--ub-btn-color-bg-inline
--ub-btn-color-txt-inline
--ub-btn-color-bg-inline-hover
--ub-btn-color-txt-inline-hover
--ub-btn-color-bg-inline-focus
--ub-btn-color-txt-inline-focus
--ub-btn-color-bg-inline-active
--ub-btn-color-txt-inline-active
```