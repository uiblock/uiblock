import { HTMLAttributes } from 'react'
import { Variants, tokens, flex, flexCol, towardsEnd } from './alert.css'
import { H4 } from '#components/heading'
import { Text } from '#components/text/text'
import { ErrorIcon } from '#components/icons'
import { CloseButton } from '#components/close-button/close-button'

type Props = HTMLAttributes<HTMLDivElement> & Variants & { details?: string }

export const Alert = ({ type, title, details }: Props) => {
  return (
    <div role='alert' className={`${tokens({ type })}`}>
      <ErrorIcon />
      <div className={`${flex} ${flexCol}`}>
        {!title ? null : <H4>{title}</H4>}
        {!details ? null : <Text>{details}</Text>}
      </div>
      <CloseButton className={towardsEnd} />
    </div>
  )
}
