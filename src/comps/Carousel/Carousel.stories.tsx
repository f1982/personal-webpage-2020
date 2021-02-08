import React, { ComponentProps } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Carousel from './Carousel'

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

interface ItemProps {
  url: string
  alt: string
}
const getItem: React.FC<ItemProps> = ({ url, alt }: ItemProps) => (
  <div key={url}>
    <img src={url} alt={alt} />
    <h1>{alt}</h1>
  </div>
)
export const NestedElements = Template.bind({})
NestedElements.args = {
  sliders: [
    <div key='3'>
      <img src='https://placebear.com/420/320?image=3' alt='333' />
      <h1>3</h1>
    </div>,
    getItem({ url: 'https://placebear.com/420/320?image=3', alt: '2' }),
    getItem({ url: 'https://placebear.com/420/370?image=2', alt: '1' }),
    getItem({ url: 'https://placebear.com/420/380?image=1', alt: '0' })
  ]
}

export const ImageElements = Template.bind({})
ImageElements.args = {
  sliders: [
    <img key='3' alt='3' src='https://placebear.com/420/320?image=3' />,
    <img key='3' alt='2' src='https://placebear.com/423/320?image=3' />,
    <img key='3' alt='1' src='https://placebear.com/424/320?image=3' />
  ]
}

export const SingleElement = Template.bind({})
SingleElement.args = {
  sliders: [<img key='3' alt='3' src='https://placebear.com/420/320?image=3' />]
}
