import { HTMLAttributes } from 'react'
import { Variants, tokens } from './text.css'

type Props = HTMLAttributes<HTMLDivElement | HTMLSpanElement | HTMLParagraphElement> &
  Variants & { as?: 'div' | 'span' | 'p' }
export const Text = ({
  as: Tag = 'div',
  size = 'md',
  align = 'start',
  weight = 'regular',
  color,
  family,
  ...props
}: Props) => <Tag className={`${tokens({ color, size, align, weight, family })}`} {...props} />
