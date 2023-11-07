import { twMerge } from '#tailwind-merge'
import { Variants, tokens } from './text.css'

type Props = React.HTMLAttributes<HTMLDivElement | HTMLSpanElement | HTMLParagraphElement> &
  Variants & { as?: 'div' | 'span' | 'p' }
export const Text = ({
  as: Tag = 'div',
  size = 'md',
  weight,
  align,
  className = '',
  color,
  family,
  ...props
}: Props) => <Tag className={twMerge(`${tokens({ color, size, align, weight, family })}`, className)} {...props} />
