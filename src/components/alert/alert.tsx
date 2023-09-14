import { HTMLAttributes } from 'react'
import { Variants, tokens, flex, flexCol, towardsEnd } from './alert.css'
import { H4 } from '#components/heading'
import { Text } from '#components/text/text'
import { ErrorIcon } from '#components/icons'
import { ButtonClose } from '#components/button-close/button-close'

type Props = HTMLAttributes<HTMLDivElement> & Variants & { details?: string }

export const Alert = ({ type, title, details }: Props) => {
  return (
    <div role='alert' className={`${tokens({ type })}`}>
      <ErrorIcon />
      <div className={`${flex} ${flexCol}`}>
        {!title ? null : <H4>{title}</H4>}
        {!details ? null : <Text>{details}</Text>}
      </div>
      <ButtonClose className={towardsEnd} feedback={type} elevated />
    </div>
  )
}
