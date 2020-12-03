import React from 'react';
import styled from 'styled-components';

const ButtonWidth = 32;
const ButtonHeight = 8;
const ButtonSize = 32;

const CloseButtonWrapper = styled.a`
  height: ${ButtonSize}px;
  width: ${ButtonSize}px;
  position: relative;
  box-sizing: border-box;
  line-height: ${ButtonSize}px;
  display: inline-block;
  &:before,
  &:after {
    content: '';
    position: absolute;
    transform-origin: center;
    transform: rotate(-45deg);
    top: 50%;
    display: block;
    height: ${ButtonHeight}px;
    width: ${ButtonWidth}px;
    background-color: #4a4a4a;
    transition: all 0.25s ease-out;
    will-change: transform;
  }
  &:after {
    transform: rotate(-135deg);
  }
  &:hover {
    &:before {
      transform: rotate(0deg);
    }
    &:after {
      transform: rotate(-180deg);
    }
  }
`;

const ProjectCloseButton = () => {
  return <CloseButtonWrapper role='close-button' />;
};

export default ProjectCloseButton;
