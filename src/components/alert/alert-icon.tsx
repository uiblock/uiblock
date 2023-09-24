import { CircleCheckIcon, ErrorIcon, InfoIcon } from '#components/icons'
import { IconProps } from '#components/icons/icon'
import { useAlert } from './alert-context'

type Props = IconProps
export const AlertIcon = (props: Props) => {
  const type = useAlert()
  switch (type) {
    case 'danger':
    case 'warn':
      return <ErrorIcon {...props} />
    case 'success':
      return <CircleCheckIcon {...props} />
    case 'info':
      return <InfoIcon {...props} />
  }
}
