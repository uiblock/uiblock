import { CircleCheckIcon, ErrorIcon } from '#components/icons'
import { useAlert } from './alert-context'

export const AlertIcon = () => {
  const type = useAlert()
  switch (type) {
    case 'danger':
      return <ErrorIcon size='lg' />
    case 'success':
      return <CircleCheckIcon size='lg' />
    default:
      return <ErrorIcon size='lg' />
  }
}
