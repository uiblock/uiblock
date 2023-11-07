import Button, { ButtonWithVariants } from '#components/button/button'
import { XMarkIcon } from '#components/icons'

// variant must be inline so remove the prop
type Props = Omit<ButtonWithVariants, 'variant'>

export const ButtonClose = ({ size = 'md', ...props }: Props) => (
  <Button variant='inline' size={size} {...props}>
    <XMarkIcon />
  </Button>
)
