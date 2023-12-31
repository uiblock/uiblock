# Tokens

Design token general name is --ub-~~component~~-font-concept-prop-variant-~~state-scale~~-mode where:
-  concept is `body` and sometimes it is removed if the prop is shared with the `heading` concept
-  prop is one of `size`, `line-height`, `weight`, `family`, `align`
-  variant
   -  For `size` prop: the variants are `md`, `sm`, `xs`
   -  For `line-height` prop: the variants are `md`, `sm`, `xs`
   -  For `weight` prop: the variants are `bold`, `semibold`, `medium`, `regular`, `thin`
   -  For `family` prop: the variants are `system`, `mono`
   -  For `align` prop: the variants are `start`, `center`, `end`

General name for color design token is --ub-~~component~~-color-~~concept~~-prop-variant-mode where
- prop is `txt`
- variant: `default`, `subtle`

```
--ub-color-txt-default
--ub-color-txt-subtle

--ub-font-body-size-md
--ub-font-body-size-sm
--ub-font-body-size-xs

--ub-font-body-line-height-md
--ub-font-body-line-height-sm
--ub-font-body-line-height-xs

--ub-font-weight-bold
--ub-font-weight-semibold
--ub-font-weight-medium
--ub-font-weight-regular
--ub-font-weight-thin

--ub-font-family-system
--ub-font-family-mono

--ub-font-align-start
--ub-font-align-center
--ub-font-align-end
```

# Component Props

## color
It controls the foreground color text
- default value: `default`
- possible values: `subtle`, `default`
- mapped tokens:
```
--ub-color-txt-default
--ub-color-txt-subtle
```

## size
It uses a predefined tokens to set the font size & line height. The mix of these values ensures that the text aligns perfectly in a 4px grid system.
- default value: `md` so that it covers accessibility guideline for readable text.
- possible values: `md`, `sm`, `xs`
- mapped tokens:
```
--ub-font-body-size-md
--ub-font-body-line-height-md

--ub-font-body-size-sm
--ub-font-body-line-height-sm

--ub-font-body-size-xs
--ub-font-body-line-height-xs
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
It controls font weight.
- default value: `regular`
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
