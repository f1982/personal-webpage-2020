import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import ProjectCloseButton from './CloseButton'

export default {
  title: 'UI/ProjectCloseButton',
  component: ProjectCloseButton,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

const Template: Story = args => <ProjectCloseButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button'
}
