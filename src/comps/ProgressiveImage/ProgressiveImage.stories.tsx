import React, { ComponentProps } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import ProgressiveImage from './ProgressiveImage'

export default {
  title: 'UI/ProgressiveImage',
  component: ProgressiveImage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

const Template: Story<ComponentProps<typeof ProgressiveImage>> = args => (
  <ProgressiveImage {...args}></ProgressiveImage>
)

export const Primary = Template.bind({})
Primary.args = {
  width: '300px',
  height: '200px',
  src: 'http://lorempixel.com/400/200'
}
