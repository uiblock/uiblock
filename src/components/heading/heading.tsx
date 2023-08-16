import { HTMLAttributes } from 'react'
import { Level, Variants, tokens } from './heading.css'

type Props = HTMLAttributes<HTMLHeadingElement> & Variants

const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const

export const [H1, H2, H3, H4, H5, H6] = headings.map(
  (HeadingTag, i) =>
    ({ variant = `l${i + 1}` as Level, align = 'center', weight, family, ...props }: Props) => (
      <HeadingTag {...props} className={`${tokens({ variant, align, weight, family })}`} />
    ),
)
