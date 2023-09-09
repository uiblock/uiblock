import { faX, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Icon, IconProps } from './icon'

export const XIcon = (props: IconProps) => <Icon {...props} icon={faX} />
export const XMarkIcon = (props: IconProps) => <Icon {...props} icon={faXmark} />
