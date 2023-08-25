import type { Meta, StoryObj } from '@storybook/react'
import Text from '#components/text'

const meta: Meta<typeof Text> = {
  component: Text,
}

export default meta
type Story = StoryObj<typeof Text>

export const Variants: Story = {
  name: 'variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'start', color: 'teal' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'start' }}>
        <Text>Text in default color</Text>
        <Text color='subtle'>Text in subtle color</Text>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'start' }}>
        <Text>This is a div</Text>
        <Text as='span'>This is a span</Text>
        <Text as='p'>
          This is a paragraph. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, magnam ab, ullam
          aperiam nemo mollitia veritatis dolorum nam eveniet ducimus inventore earum. Dolore ratione molestiae
          explicabo magni, deserunt nisi ea.
        </Text>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'start' }}>
        <Text>Default size md</Text>
        <Text size='sm'>Different size sm</Text>
        <Text size='xs'>Different size xs</Text>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'start' }}>
        <Text weight='thin'>Text in thin weight</Text>
        <Text>Text in regular weight</Text>
        <Text weight='medium'>Text in medium weight</Text>
        <Text weight='semibold'>Text in semibold weight</Text>
        <Text weight='bold'>Text in bold weight</Text>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', border: '1px solid', width: '80%' }}>
        <Text>Text with start alignment</Text>
        <Text align='center'>Text with center alignment</Text>
        <Text align='end'>Text with end alignment</Text>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Text>Text with system font</Text>
        <Text family='mono'>Text with monospace font</Text>
      </div>
    </div>
  ),
}
