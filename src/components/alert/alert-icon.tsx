import { CircleCheckIcon, ErrorIcon, InfoIcon } from '#components/icons'
import { useAlert } from './alert-context'

export const AlertIcon = () => {
  const type = useAlert()
  switch (type) {
    case 'danger':
    case 'warn':
      return <ErrorIcon size='lg' />
    case 'success':
      return <CircleCheckIcon size='lg' />
    case 'info':
      return <InfoIcon size='lg' />
  }
}
