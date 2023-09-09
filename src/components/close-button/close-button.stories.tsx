import type { Meta, StoryObj } from '@storybook/react'
import CloseButton from '#components/close-button'
import vars from '#design/public-tokens.css'

const meta: Meta<typeof CloseButton> = {
  component: CloseButton,
}

export default meta
type Story = StoryObj<typeof CloseButton>

export const Variants: Story = {
  name: 'variants',
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '2rem',
        color: vars.color.yellow[990],
      }}
    >
      <div>
        size md
        <CloseButton />
      </div>
      <div>
        size lg
        <CloseButton size='lg' />
      </div>
    </div>
  ),
}
