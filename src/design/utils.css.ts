import { style } from '@vanilla-extract/css'
// TODO: Use vanilla extract sprinkles to create global utility classes
export const alignSelfStart = style({ alignSelf: 'start' })
export const alignItemsCenter = style({ alignItems: 'center' })
export const alignItemsStart = style({ alignItems: 'start' })
export const alignItemsBaseline = style({ alignItems: 'baseline' })
export const justifyContentsSpaceBetween = style({ justifyContent: 'space-between' })
export const flex = style({ display: 'flex' })
export const flexCol = style({ flexDirection: 'column' })
export const flexGrow = style({ flexGrow: 1 })
export const towardsEnd = style({ marginLeft: 'auto' })

export const mt1 = style({ marginTop: '1rem' })
export const top0 = style({ top: 0 })
export const right0 = style({ right: 0 })
export const gapSm = style({ gap: '0.5rem' })
export const relative = style({ position: 'relative' })
export const absolute = style({ position: 'absolute' })
