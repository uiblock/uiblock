import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Variants, tokens } from './button.css'

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  Variants & {
    leadingIcon?: ReactNode
    trailingIcon?: ReactNode
  }

const Button = ({ children, variant = 'outline', leadingIcon, trailingIcon, ...props }: Props) => (
  <button {...props} className={`${tokens({ variant })}`}>
    {leadingIcon}
    {children}
    {trailingIcon}
  </button>
)

export default Button
