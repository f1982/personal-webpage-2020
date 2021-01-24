import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import GoTopButton from './GoTopButton'

export default {
  title: 'Example/GoTopButton(unused)',
  component: GoTopButton,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

const Template: Story = args => <GoTopButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button'
}
