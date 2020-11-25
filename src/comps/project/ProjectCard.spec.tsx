import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProjectCard, { ProjectItemProp } from './ProjectCard';

/**
 * Get styles from component created by using styled-component
 *
 * @param styledComponent Component
 * @param parameters parameter
 * @param index
 */
function getStyledComponentStyles<T>(styledComponent: Function, props: T | null = null, index = 0) {
  let componentClass = null;
  props ? (componentClass = styledComponent(props)) : (componentClass = styledComponent());
  const classId = componentClass.type.styledComponentId;
  const components = document.getElementsByClassName(classId);
  return window.getComputedStyle(components[index]);
}

function getStyledComponentClassName<T>(styledComponent: Function, props: T | null = null, index = 0) {
  let componentClass = null;
  props ? (componentClass = styledComponent(props)) : (componentClass = styledComponent());
  return componentClass.type.styledComponentId;
}

describe('<ProjectCard />', () => {
  const defaultProps: ProjectItemProp = {
    title: 'Roman nouveau épais mode.',
    cover: 'http://www.dowerg.de/',
    platform: 'iOS',
    description:
      'Eos corrupti sed fugit eaque iste vel autem. Labore alias voluptatum. Alias fugiat mollitia temporibus iste consequatur ullam.'
  };

  test('test render', () => {
    const { getByText } = render(<ProjectCard {...defaultProps} />);
    expect(getByText(/Roman nouveau/i)).toBeInTheDocument();
    expect(getByText(/iOS/i)).toBeInTheDocument();
    expect(getByText(/Eos corrupti sed fugit/i)).toBeInTheDocument();
  });

  test('should show specific style', () => {
    const { getByText } = render(<ProjectCard {...defaultProps} />);
    const style: any = getStyledComponentStyles<ProjectItemProp>(ProjectCard, defaultProps);
    expect(style.display).toBe('inline-flex');
    expect(style['min-width']).toBe('400px');
  });

  test('should change style when mouse over', () => {
    const { getByText } = render(<ProjectCard {...defaultProps} />);
    const title = getByText(/Roman nouveau/i);
    expect(title).toHaveStyle('margin: 0.5rem 0');
  });

  test('should ', () => {
    const { getByRole } = render(<ProjectCard {...defaultProps} />);
    const className = getStyledComponentClassName<ProjectItemProp>(ProjectCard, defaultProps);
    // getStyledComponentClassName<ProjectItemProp>(<ProjectCard {...defaultProps} />);
    const frame = getByRole('frame');
    expect(frame).toHaveStyle('flex-wrap: wrap');
    expect(frame).toHaveStyle('transition: 0.3s');
    expect(frame).toHaveStyle('flex-basis: 400px');
  });
});
