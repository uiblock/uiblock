import type { Meta, StoryObj } from '@storybook/react'
import { SpinnerIcon, CaretDownIcon, CalendarIcon } from '#components/icons'
import Button from '#components/button'
import vars from '#design/public-tokens.css'

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Variants: Story = {
  name: 'variants',
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        alignItems: 'start',
        color: vars.color.yellow[990],
      }}
    >
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <div>Variant</div>
        <Button variant='primary'>Primary Button</Button>
        <Button>Subtle Button</Button>
        <Button variant='inline'>Inline Button</Button>
      </div>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <div>Inline with Feedback</div>
        <Button variant='inline' feedback='danger'>
          Danger Inline Button
        </Button>
        <Button variant='inline' feedback='warn'>
          Warning Inline Button
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <div>Icon only</div>
        <Button variant='subtle'>
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
