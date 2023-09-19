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
      <Alert type='danger' title='Network error' details='Turn off airplane mode. Color contrast is 5.69:1' />
    </div>
  ),
}