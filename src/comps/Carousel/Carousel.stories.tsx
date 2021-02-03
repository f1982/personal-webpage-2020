import React, { ComponentProps } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Carousel, { CarouselDataItem } from './Carousel'

export default {
  title: 'UI/Carousel',
  component: Carousel,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

const Template: Story<ComponentProps<typeof Carousel>> = args => (
  <Carousel {...args}></Carousel>
)

export const MinimalSize = Template.bind({})
MinimalSize.args = {
  items: [{ url: 'http://placekitten.com/200/300', alt: 'alt1' }],
  showDots: false
}

export const NormalSize = Template.bind({})
NormalSize.args = {
  items: [
    { url: 'http://placekitten.com/200/300', alt: 'alt1' },
    { url: 'http://placekitten.com/300/200', alt: 'alt2' },
    { url: 'http://placekitten.com/250/300', alt: 'alt3' },
    { url: 'http://placekitten.com/320/200', alt: 'alt4' }
  ],
  showDots: false
}
