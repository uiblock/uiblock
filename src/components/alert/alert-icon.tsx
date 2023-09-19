import { ErrorIcon } from '#components/icons'
import { useAlertContext } from './alert-context'

export const AlertIcon = () => {
  const type = useAlertContext()
  switch (type) {
    case 'danger':
      return <ErrorIcon />
    default:
      return <ErrorIcon />
  }
}
