import type { Meta, StoryObj } from '@storybook/react'
import Alert from '#components/alert'
import { AlertIcon } from './alert-icon'
import { AlertTitle } from './alert-title'
import { AlertBody } from './alert-body'
import { alignItemsCenter, flex, flexCol, flexGrow, mt1, gapSm, alignItemsStart } from '#design/utils.css'
import Button from '#components/button'
import Text from '#components/text'
import { l3 } from '#design/font.css'

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
      }}
    >
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
        <Alert feedback='danger' className={`${flexCol} ${alignItemsStart}`} dismissible={false}>
          <div className={`${flex} ${gapSm}`}>
            <AlertIcon />
            <AlertTitle>Autn quid repellendus</AlertTitle>
          </div>
          <AlertBody className={`${flex} ${flexCol}`}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className={`${alignItemsStart} ${flex} ${gapSm}`}>
              <Button className={`${mt1}`}>Cancel</Button>
              <Button variant='primary' className={`${mt1}`}>
                Open settings
              </Button>
            </div>
          </AlertBody>
        </Alert>
      </div>
      <div>
        <div>Composition example 2</div>
        <Alert feedback='success' dismissible={false}>
          <div className={`${flex} ${flexCol} ${alignItemsCenter} ${flexGrow} ${gapSm}`}>
            <AlertIcon size='xl' />
            <AlertTitle>
              <Text color='default' className={l3}>
                Possimus Esse
              </Text>
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
