import type { Meta, StoryObj } from '@storybook/react'
import { SpinnerIcon, CaretDownIcon, CalendarIcon } from '#components/icons'
import Button from '#components/button'

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Variants: Story = {
  name: 'variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'start', color: 'teal' }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <div>Variant</div>
        <Button variant='primary'>Primary Button</Button>
        <Button>Outline Button</Button>
        <Button variant='inline'>Inline Button</Button>
      </div>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <div>Icon only</div>
        <Button variant='outline'>
          <SpinnerIcon />
        </Button>
        <Button variant='inline'>
          <SpinnerIcon />
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <div>Icon with text</div>
        <Button leadingIcon={<SpinnerIcon />}>Loading</Button>
        <Button trailingIcon={<CaretDownIcon />}>Open menu</Button>
        <Button leadingIcon={<CalendarIcon />} trailingIcon={<CaretDownIcon />}>
          Open calendar
        </Button>
      </div>
    </div>
  ),
}
