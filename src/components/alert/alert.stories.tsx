import type { Meta, StoryObj } from '@storybook/react'
import Alert from '#components/alert'
import vars from '#design/public-tokens.css'

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
      {/* <Alert type='error1' title='Network error' details='Turn off airplane mode' />
      <Alert type='error2' title='Network error' details='Turn off airplane mode' />
      <Alert type='error3' title='Network error' details='Turn off airplane mode' />
      <Alert type='error4' title='Network error' details='Turn off airplane mode' />
      <Alert type='error5' title='Network error' details='Turn off airplane mode' /> */}
      {/* <Alert type='error6' title='Network error' details='Turn off airplane mode. Color contrast is 5.66:1' />
      <Alert type='error7' title='Network error' details='Turn off airplane mode. Color contrast is 4.9:1' /> */}
      <Alert type='danger' title='Network error' details='Turn off airplane mode. Color contrast is 5.69:1' />
      {/* <Alert type='error9' title='Network error' details='Turn off airplane mode. Color contrast is 5.69:1' /> */}
    </div>
  ),
}
