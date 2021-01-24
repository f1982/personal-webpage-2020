import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { BrowserRouter as Router } from 'react-router-dom'

import Header from './Header'

export default {
  title: 'UI/Header',
  component: Header,
  argTypes: {}
} as Meta

const Template: Story = args => (
  <Router>
    <Header routes={args.routes} />
  </Router>
)

export const FullSize = Template.bind({})

const routes = [
  {
    title: 'Home',
    path: '/home',
    exact: true,
    meta: {
      layout: 'vetical-layout'
    },
    component: null
  },
  {
    title: 'Works',
    path: '/works',
    exact: true,
    component: null
  },
  {
    title: 'Hobbies',
    path: '/hobbies',
    exact: true,
    component: null
  },
  {
    title: 'About',
    path: '/about',
    exact: true,
    component: null
  },
  {
    title: 'Contact',
    path: '/contact',
    exact: true,
    component: null
  },
  {
    title: 'Resume',
    path: '/resume',
    exact: true,
    mark: '🔥',
    component: null
  }
]

FullSize.args = {
  routes
}

export const HalfSize = Template.bind({})
HalfSize.args = {
  routes: routes.slice(0, 3)
}
