import { FontAwesomeIconProps, FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props extends Omit<FontAwesomeIconProps, 'size'> {
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

// This component is just a wrapper around Font Awesome icons to fix that
// size prop does not have explicit "md" type instead it is undefined by default
export const Icon = ({ size = 'md', ...props }: Props) => (
  <FontAwesomeIcon size={size === 'md' ? undefined : size} {...props} />
)

export type IconProps = Omit<Props, 'icon'>
