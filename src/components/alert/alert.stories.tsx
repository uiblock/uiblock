import type { Meta, StoryObj } from '@storybook/react'
import Alert from '#components/alert'
import { AlertIcon } from './alert-icon'
import { AlertTitle } from './alert-title'
import { AlertBody } from './alert-body'
import Button from '#components/button'
import Text from '#components/text'

const meta: Meta<typeof Alert> = {
  component: Alert,
}

export default meta
type Story = StoryObj<typeof Alert>

export const Variants: Story = {
  name: 'feedback',
  render: () => (
    <div className='flex flex-col gap-2'>
      <Alert feedback='danger'>
        <AlertIcon />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Color contrast is 5.69:1
      </Alert>
      <Alert feedback='warn'>
        <AlertIcon />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Color contrast is 8.03:1
      </Alert>
      <Alert feedback='success'>
        <AlertIcon />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Color contrast is 7.03:1
      </Alert>
      <Alert feedback='info'>
        <AlertIcon />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Color contrast is 6.09:1
      </Alert>
      <div>
        Non-dismissible Alert
        <Alert feedback='warn' dismissible={false}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Alert>
      </div>
      <div>
        <div>Composition example 1</div>
        <Alert feedback='danger' className='flex-col items-start' dismissible={false}>
          <div className='flex gap-2 items-baseline'>
            <AlertIcon />
            <AlertTitle>Autn quid repellendus</AlertTitle>
          </div>
          <AlertBody className='flex flex-col'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className='flex items-start gap-2 mt-1'>
              <Button>Perspiciatis</Button>
              <Button variant='primary'>Commodi atque</Button>
            </div>
          </AlertBody>
        </Alert>
      </div>
      <div>
        <div>Composition example 2</div>
        <Alert feedback='success' dismissible={false}>
          <div className='flex flex-col flex-grow gap-2 items-center'>
            <AlertIcon size='xl' />
            <AlertTitle>
              <Text className='text-l3'>Possimus Esse</Text>
            </AlertTitle>
            <AlertBody>
              <Text color='subtle'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
            </AlertBody>
          </div>
        </Alert>
      </div>
    </div>
  ),
}
