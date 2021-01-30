import React, { ComponentProps } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import ProjectCard from './ProjectCard'

export default {
  title: 'UI/ProjectCard',
  component: ProjectCard
} as Meta

const Template: Story<ComponentProps<typeof ProjectCard>> = args => (
  <ProjectCard {...args}></ProjectCard>
)

export const SmallSize = Template.bind({})
SmallSize.args = {
  title: 'Project name',
  description:
    'Saepe autem rem inventore. Quia at occaecati ex maxime odio. Nihil unde quod vero minima quod.',
  cover: 'http://lorempixel.com/400/200',
  platform: 'iOS'
}
