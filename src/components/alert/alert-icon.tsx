import { CircleCheckIcon, ErrorIcon, InfoIcon } from '#components/icons'
import { IconProps } from '#components/icons/icon'
import { useAlert } from './alert-context'

type Props = IconProps
export const AlertIcon = (props: Props) => {
  const type = useAlert()
  switch (type) {
    case 'danger':
    case 'warn':
      return <ErrorIcon size='lg' {...props} />
    case 'success':
      return <CircleCheckIcon size='lg' {...props} />
    case 'info':
      return <InfoIcon size='lg' {...props} />
  }
}
