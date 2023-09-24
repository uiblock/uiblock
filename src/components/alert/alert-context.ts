import { Feedback } from '#design/feedback'
import { createContext, useContext } from 'react'

export const AlertContext = createContext<Feedback | null>(null)

export const useAlert = () => {
  const feedback = useContext(AlertContext)

  if (feedback === null) {
    throw new Error('useAlert has to be used with <AlertContext.Provider>')
  }

  return feedback
}
