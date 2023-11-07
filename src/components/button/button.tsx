import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Variants, tokens } from './button.css'
import { twMerge } from 'tailwind-merge'

export type ButtonWithVariants = ButtonHTMLAttributes<HTMLButtonElement> & Variants
type Props = ButtonWithVariants & {
  leadingIcon?: ReactNode
  trailingIcon?: ReactNode
}

const Button = ({
  children,
  variant = 'subtle',
  size = 'md',
  className = '',
  leadingIcon,
  trailingIcon,
  feedback,
  elevated,
  ...props
}: Props) => (
  <button {...props} className={twMerge(tokens({ variant, size, feedback, elevated }), className)}>
    {leadingIcon}
    {children}
    {trailingIcon}
  </button>
)

export default Button
