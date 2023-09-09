import Button, { ButtonWithVariants } from '#components/button/button'
import { XMarkIcon } from '#components/icons'

// variant must be inline so no there is no point of keeping it as a prop
type Props = Omit<ButtonWithVariants, 'variant'>

export const CloseButton = ({ size = 'md', ...props }: Props) => (
  <Button variant='inline' size={size} {...props}>
    {/* <XIcon size={size} /> */}
    <XMarkIcon size={size} />
  </Button>
)
