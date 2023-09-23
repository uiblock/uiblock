import type { Meta, StoryObj } from '@storybook/react'
import ButtonClose from '#components/button-close'

const meta: Meta<typeof ButtonClose> = {
  component: ButtonClose,
}

export default meta
type Story = StoryObj<typeof ButtonClose>

export const Variants: Story = {
  name: 'variants',
  render: () => <ButtonClose />,
}
