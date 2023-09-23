type Props = { className?: string; children: React.ReactNode }
export const AlertBody = ({ children, className = '' }: Props) => <div className={className}>{children}</div>
