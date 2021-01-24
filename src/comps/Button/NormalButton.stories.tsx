import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import NormalButton from './NormalButton'

export default {
  title: 'UI/NormalButton',
  component: NormalButton,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

const Template: Story = args => <NormalButton {...args}></NormalButton>

export const Primary = Template.bind({})
Primary.args = {
  children: 'hello world'
}
