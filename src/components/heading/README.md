# Tokens

Design token general name is --ub-font-concept-prop-variant-~~state-~~scale-mode where:
-  concept is `heading`
-  prop is one of `size`, `line-height`, `weight`, `family`, `align`
-  variant and scale
   -  For the combination of `size`, `line-height`, `weight`: the variant/scale are `l1` ,  `l2`, `l3`, `l4`, `l5`, `l6` 
   -  For `family` prop: the variants are `system`, `monospace`
   -  For `align` prop: the variants are `start`, `center`, `end`


## Common Tokens

--ub-font-heading-family-system

## variant

Each variant uses a predetermined combination of the font tokens to set the font size, line height & font weight. The mix of these values ensures that the heading align perfectly in a 4px grid system.

### l1

--ub-font-heading-size-l1
--ub-font-heading-line-height-l1
--ub-font-heading-weight-l1


### l2

--ub-font-heading-size-l2
--ub-font-heading-line-height-l2
--ub-font-heading-weight-l2

### l3

--ub-font-heading-size-l3
--ub-font-heading-line-height-l3
--ub-font-heading-weight-l3

### l4

--ub-font-heading-size-l4
--ub-font-heading-line-height-l4
--ub-font-heading-weight-l4

### l5

--ub-font-heading-size-l5
--ub-font-heading-line-height-l5
--ub-font-heading-weight-l5

### l6

--ub-font-heading-size-l6
--ub-font-heading-line-height-l6
--ub-font-heading-weight-l6


## align

By default the heading is centered aligned but you can override this design token prop using one of the these variants

--ub-font-heading-align-start
--ub-font-heading-align-center
--ub-font-heading-align-end

## weight
By default the heading font weight is set through the predefined `variant`` tokens however, the weight can be overridden by this prop (if needed). This should be done sparingly

--ub-font-heading-weight-bold
--ub-font-heading-weight-semibold
--ub-font-heading-weight-medium
--ub-font-heading-weight-regular
--ub-font-heading-weight-thin

## family
By default the global `CSSReset` component loads the platform specific font family. This is very efficient because browsers don't have to spend anytime downloading font files. Instead browsers are only loading the fonts that are already installed in the platform.
But this can be overridden at the heading component using

--ub-font-heading-family-system
--ub-font-heading-family-mono