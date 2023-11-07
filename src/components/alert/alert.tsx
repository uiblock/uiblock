import { Variants, tokens } from './alert.css'
import { AlertContext } from './alert-context'
import { Feedback } from '#design/feedback'
import ButtonClose from '#components/button-close'
import { twMerge } from 'tailwind-merge'

// The recipe feedback type is optional but I want to enforce it is non-optional to please TS
type Props = Omit<React.HTMLAttributes<HTMLDivElement> & Variants, 'type'> & {
  feedback: Feedback
  dismissible?: boolean
}

export const Alert = ({ feedback, children, className = '', dismissible = true }: Props) => {
  return (
    <AlertContext.Provider value={feedback}>
      <div role='alert' className={twMerge(`${tokens({ feedback })}`, className)}>
        {children}
        {dismissible ? <ButtonClose className='ml-auto' feedback={feedback} elevated /> : null}
      </div>
    </AlertContext.Provider>
  )
}
