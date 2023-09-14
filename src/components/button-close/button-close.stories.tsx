import type { Meta, StoryObj } from '@storybook/react'
import ButtonClose from '#components/button-close'
import vars from '#design/public-tokens.css'

const meta: Meta<typeof ButtonClose> = {
  component: ButtonClose,
}

export default meta
type Story = StoryObj<typeof ButtonClose>

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
        <ButtonClose />
      </div>
      <div>
        size lg
        <ButtonClose size='lg' />
      </div>
    </div>
  ),
}
