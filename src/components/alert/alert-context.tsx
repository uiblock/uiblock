import { createContext, useContext } from 'react'

export type AlertType = 'danger' | 'warn' | 'success'

const AlertContext = createContext<AlertType | null>(null)

type Props = { type: AlertType; children: React.ReactNode }
export const AlertProvider = ({ type, ...props }: Props) => <AlertContext.Provider value={type} {...props} />
// eslint-disable-next-line react-refresh/only-export-components
export const useAlertContext = () => {
  const type = useContext(AlertContext)

  if (type === null) {
    throw new Error('useAlertContext has to be used with <AlertContext.Provider>')
  }

  return type
}
