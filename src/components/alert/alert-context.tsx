import { Feedback } from '#design/feedback'
import { createContext, useContext } from 'react'

const AlertContext = createContext<Feedback | null>(null)

type Props = { feedback: Feedback; children: React.ReactNode }
export const AlertProvider = ({ feedback, ...props }: Props) => <AlertContext.Provider value={feedback} {...props} />
// eslint-disable-next-line react-refresh/only-export-components
export const useAlertContext = () => {
  const feedback = useContext(AlertContext)

  if (feedback === null) {
    throw new Error('useAlertContext has to be used with <AlertContext.Provider>')
  }

  return feedback
}
