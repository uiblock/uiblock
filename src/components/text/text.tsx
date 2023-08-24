import { HTMLAttributes } from 'react'
import { Variants, tokens } from './text.css'

type Props = HTMLAttributes<HTMLDivElement | HTMLSpanElement | HTMLParagraphElement> &
  Variants & { as?: 'div' | 'span' | 'p' }
export const Text = ({
  as: Tag = 'div',
  size = 'md',
  align = 'start',
  weight = 'regular',
  family,
  ...props
}: Props) => <Tag {...props} className={`${tokens({ size, align, weight, family })}`} />
