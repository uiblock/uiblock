import { cva, cx, VariantProps } from 'cva'
import { Feedback, feedback } from '#design/feedback'
import { ClassProp } from 'cva/types'

const common = cva([
  'border-none rounded-md transition-all ease-in duration-[200ms] py-0 px-4',
  // Needed for the icon + label
  'flex items-center justify-center gap-2',
])

/*********************************************************************************/
const a11yCommon = cva(
  'outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-yellow-600',
)

/*********************************************************************************/
const primary = cva([
  'bg-white text-black hover:bg-gray-100 hover:text-gray-900',
  ' active:bg-gray-200 active:text-gray-800',
  ' focus-visible:bg-gray-100 focus-visible:text-gray-900',
])

/*********************************************************************************/
const subtle = cva([
  'bg-transparent text-gray-400 shadow ring-1 ring-gray-400',
  'hover:bg-gray-900 hover:text-gray-300',
  'active:bg-gray-800 active:text-gray-200',
  'focus-visible:bg-gray-900 focus-visible:text-gray-300',
])

/*********************************************************************************/
const inline = cva([
  'bg-transparent text-gray-400',
  'hover:bg-gray-900 hover:text-gray-300',
  'active:bg-gray-800 active:text-gray-200',
  'focus-visible:bg-gray-900 focus-visible:text-gray-300',
])
/*********************************************************************************/

export const inlineFeedbackSpec = {
  danger: 'text-red-400 hover:text-red-400 active:text-red-400 focus-visible:text-red-400',
  warn: 'text-yellow-400 hover:text-yellow-400 active:text-yellow-400 focus-visible:text-yellow-400',
  success: 'text-green-400 hover:text-green-400 active:text-green-400 focus-visible:text-green-400',
  info: 'text-blue-400 hover:text-blue-400 active:text-blue-400 focus-visible:text-blue-400',
}

const toInlineFeedbackCompoundVariants = (
  acc: Array<{ [k: string]: boolean | string | ((props?: ClassProp | undefined) => string) }>,
  f: Feedback,
) => {
  const withFeedbackStyle = cva([inlineFeedbackSpec[f], 'active:bg-gray-800'])()
  // another alternative to backdrop brightness is to use'hover:bg-gray-800', 'active:bg-gray-700'
  const withFeedbackStyleOnElevation = cva([
    withFeedbackStyle,
    'hover:bg-transparent hover:backdrop-brightness-150',
    'active:bg-gray-800',
  ])()
  return acc.concat(
    {
      variant: 'inline',
      feedback: f,
      className: withFeedbackStyle,
    },
    {
      variant: 'inline',
      feedback: f,
      elevated: true,
      className: withFeedbackStyleOnElevation,
    },
  )
}

/*********************************************************************************/
export const tokens = cva(cx(common(), a11yCommon()), {
  variants: {
    variant: { primary: primary(), subtle: subtle(), inline: inline() },
    size: {
      // https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
      md: 'min-h-44 min-w-44',
      lg: 'min-h-60 min-w-60 aspect-[3/1]',
    },
    feedback: { danger: '', warn: '', success: '', info: '' },
    elevated: { true: {} },
  },
  compoundVariants: [...feedback.reduce(toInlineFeedbackCompoundVariants, [])],
})

export type Variants = VariantProps<typeof tokens>
