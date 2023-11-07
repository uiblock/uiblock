import { cx } from 'cva'

type Props = React.HTMLAttributes<HTMLDivElement>
export const AlertTitle = ({ className = '', ...props }: Props) => (
  <div className={cx('text-l5', className)} {...props} />
)
