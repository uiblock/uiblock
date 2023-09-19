import { l5 } from '#design/font.css'
type Props = { className?: string; children: React.ReactNode }
export const AlertTitle = ({ className, children }: Props) => (
  <div className={`${l5} ${className ?? ''}`}>{children}</div>
)
