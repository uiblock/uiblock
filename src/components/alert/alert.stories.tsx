import type { Meta, StoryObj } from '@storybook/react'
import Alert from '#components/alert'
import vars from '#design/public-tokens.css'
import { AlertIcon } from './alert-icon'

const meta: Meta<typeof Alert> = {
  component: Alert,
}

export default meta
type Story = StoryObj<typeof Alert>

export const Variants: Story = {
  name: 'error',
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        color: vars.color.yellow[990],
      }}
    >
      <Alert type='danger'>
        <AlertIcon />
        Turn off airplane mode. Color contrast is 5.69:1
      </Alert>
      <Alert type='warn'>
        <AlertIcon />
        Turn off airplane mode. Color contrast is 8.03:1
      </Alert>
      <Alert type='success'>
        <AlertIcon />
        Airplane mode is off. Color contrast is 7.03:1
      </Alert>
    </div>
  ),
}
