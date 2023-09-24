import { l5 } from '#design/font.css'

type Props = React.HTMLAttributes<HTMLDivElement>
export const AlertTitle = ({ className = '', ...props }: Props) => <div className={`${l5} ${className}`} {...props} />
