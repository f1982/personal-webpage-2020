import React, { ComponentProps } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { ContactForm } from './ContactForm'

export default {
  title: 'UI/ContactForm',
  component: ContactForm,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

const Template: Story<ComponentProps<typeof ContactForm>> = args => (
  <ContactForm {...args} />
)

export const Normal = Template.bind({})
Normal.args = {
  onSubmit: values => {
    alert(JSON.stringify(values))
  }
}
