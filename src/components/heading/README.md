# Tokens

Design token general name is --ub-font-concept-prop-variant-~~state~~-scale-mode where:
-  concept is `heading` and sometimes it is removed if the prop is shared with the `text` concept
-  prop is one of `size`, `line-height`, `weight`, `family`, `align`
-  variant
   -  For `line-height` prop: the variants are `l1`, `l2`, `l3`, `l4`, `l5`, `l6`
   -  For `size` prop: the variants are `l1`, `l2`, `l3`, `l4`, `l5`, `l6`
   -  For `weight` prop: the variants are `l1`, `l2`, `l3`, `l4`, `l5`, `l6`. But if you want to override the font weight uses these variants instead `bold`, `semibold`, `medium`, `regular`, `thin`. It's confusing and I need to simplify this
   -  For `family` prop: the variants are `system`, `mono`
   -  For `align` prop: the variants are `start`, `center`, `end`

```
--ub-font-heading-size-l1
--ub-font-heading-size-l2
--ub-font-heading-size-l3
--ub-font-heading-size-l4
--ub-font-heading-size-l5
--ub-font-heading-size-l6

--ub-font-heading-line-height-l1
--ub-font-heading-line-height-l2
--ub-font-heading-line-height-l3
--ub-font-heading-line-height-l4
--ub-font-heading-line-height-l5
--ub-font-heading-line-height-l6

--ub-font-heading-weight-l1
--ub-font-heading-weight-l2
--ub-font-heading-weight-l3
--ub-font-heading-weight-l4
--ub-font-heading-weight-l5
--ub-font-heading-weight-l6

--ub-font-weight-bold
--ub-font-weight-semibold
--ub-font-weight-medium
--ub-font-weight-regular
--ub-font-weight-thin

--ub-font-align-start
--ub-font-align-center
--ub-font-align-end

--ub-font-family-system
--ub-font-family-mono
```

# Component Props

But by default, the color foreground token is inherited from parent elements/components. So there is no need to create a separate prop for the color.

## variant
It uses a predefined tokens to set the font size, line height & font weight. The mix of these values ensures that the heading aligns perfectly in a 4px grid system.
- default value: `l1` for `h1` tag, `l2` for `h2` tag ...etc.
- possible values: `l1`, `l2`, `l3`, `l4`, `l5`, `l6`
- mapped tokens:
```
--ub-font-heading-size-l1
--ub-font-heading-line-height-l1
--ub-font-heading-weight-l1

--ub-font-heading-size-l2
--ub-font-heading-line-height-l2
--ub-font-heading-weight-l2

--ub-font-heading-size-l3
--ub-font-heading-line-height-l3
--ub-font-heading-weight-l3

--ub-font-heading-size-l4
--ub-font-heading-line-height-l4
--ub-font-heading-weight-l4

--ub-font-heading-size-l5
--ub-font-heading-line-height-l5
--ub-font-heading-weight-l5

--ub-font-heading-size-l6
--ub-font-heading-line-height-l6
--ub-font-heading-weight-l6
```

## align
It controls text alignment withing container box.
- default value: `start` (left in LTR languages).
- possible values: `start`, `center`, `end`
- mapped tokens:
```
--ub-font-align-start
--ub-font-align-center
--ub-font-align-end
```


## weight
By default the font weight is set through the predefined `variant` prop however, the weight can be overridden by this prop (if needed). This should be done sparingly
- possible values: `bold`, `semibold`, `medium`, `regular`, `thin`
- mapped tokens:
  
```
--ub-font-weight-bold
--ub-font-weight-semibold
--ub-font-weight-medium
--ub-font-weight-regular
--ub-font-weight-thin
```

## family
By default the global `CSSReset` component loads the platform specific font family. This is very efficient because browsers don't have to spend anytime downloading font files. Instead browsers are only loading the fonts that are already installed in the platform.
- default value: `system`
- possible values: `system`, `mono`
- mapped tokens:

```
--ub-font-family-system
--ub-font-family-mono
```