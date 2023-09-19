import { HTMLAttributes } from 'react'
import { Variants, tokens, towardsEnd } from './alert.css'

import { ButtonClose } from '#components/button-close/button-close'
import { AlertProvider, AlertType } from './alert-context'

// The recipe type Variants, assumes the type is optional but I want to enforce it is non-optional
type Props = Omit<HTMLAttributes<HTMLDivElement> & Variants, 'type'> & {
  type: AlertType
  children: React.ReactNode
}

export const Alert = ({ type, children }: Props) => {
  return (
    <AlertProvider type={type}>
      <div role='alert' className={`${tokens({ type })}`}>
        {children}
        <ButtonClose className={towardsEnd} feedback={type} elevated />
      </div>
    </AlertProvider>
  )
}
