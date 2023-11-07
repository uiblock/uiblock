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
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col gap-4'>
        <Text>Text in default color</Text>
        <Text color='subtle'>Text in subtle color</Text>
      </div>

      <div className='flex flex-col gap-4'>
        <Text>This is a div</Text>
        <Text as='span'>This is a span</Text>
        <Text as='p'>
          This is a paragraph. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, magnam ab, ullam
          aperiam nemo mollitia veritatis dolorum nam eveniet ducimus inventore earum. Dolore ratione molestiae
          explicabo magni, deserunt nisi ea.
        </Text>
      </div>

      <div className='flex flex-col gap-4'>
        <Text>Default size md</Text>
        <Text size='sm'>Different size sm</Text>
        <Text size='xs'>Different size xs</Text>
      </div>

      <div className='flex flex-col gap-4'>
        <Text weight='thin'>Text in thin weight</Text>
        <Text>Text in regular weight</Text>
        <Text weight='medium'>Text in medium weight</Text>
        <Text weight='semibold'>Text in semibold weight</Text>
        <Text weight='bold'>Text in bold weight</Text>
      </div>

      <div className='flex flex-col gap-1 border border-yellow-500 w-[80%]'>
        <Text>Text with start alignment</Text>
        <Text align='center'>Text with center alignment</Text>
        <Text align='end'>Text with end alignment</Text>
      </div>

      <div className='flex flex-col gap-4'>
        <Text>Text with system font</Text>
        <Text family='mono'>Text with monospace font</Text>
      </div>

      <div>
        <Text className={'text-l2'}>Div tag looking as h2</Text>
      </div>
    </div>
  ),
}
