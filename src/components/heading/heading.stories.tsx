import type { Meta, StoryObj } from '@storybook/react'
import { H1, H2, H3, H4, H5, H6 } from '#components/heading'
import vars from '#design/public-tokens.css'

const meta: Meta<typeof H1> = {
  component: H1,
}

export default meta
type Story = StoryObj<typeof H1>

export const Variants: Story = {
  name: 'variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        <H1>Heading 1</H1>
        <H2>Heading 2</H2>
        <H3>Heading 3</H3>
        <H4>Heading 4</H4>
        <H5>Heading 5</H5>
        <H6>Heading 6</H6>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        <H1 variant='l6'>Heading 1 in different variant</H1>
        <H6 variant='l1'>Heading 6 in different variant</H6>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        <H1 weight='thin'>Heading in different weight</H1>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          border: `1px solid ${vars.color.yellow[990]}`,
          width: '80%',
        }}
      >
        <H4>Heading with start alignment</H4>
        <H4 align='center'>Heading with center alignment</H4>
        <H4 align='end'>Heading with end alignment</H4>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <H4>Heading with system font</H4>
        <H4 family='mono'>Heading with monospace font</H4>
      </div>
    </div>
  ),
}
