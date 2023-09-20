import { HTMLAttributes } from 'react'
import { Variants, tokens, towardsEnd } from './alert.css'

import { ButtonClose } from '#components/button-close/button-close'
import { AlertProvider } from './alert-context'
import { Feedback } from '#design/feedback'

// The recipe feedback type is optional but I want to enforce it is non-optional to please TS
type Props = Omit<HTMLAttributes<HTMLDivElement> & Variants, 'type'> & {
  feedback: Feedback
}

export const Alert = ({ feedback, children }: Props) => {
  return (
    <AlertProvider feedback={feedback}>
      <div role='alert' className={`${tokens({ feedback })}`}>
        {children}
        <ButtonClose className={towardsEnd} feedback={feedback} elevated />
      </div>
    </AlertProvider>
  )
}
