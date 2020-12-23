import React from 'react'
import styled from 'styled-components'

const GoTopButtonWidth = 48
const GoTopButtonHeight = 48
const GoTopButtonSize = 48

const GoTopButtonStyle = styled.a`
  height: ${GoTopButtonHeight}px;
  width: ${GoTopButtonWidth}px;
  position: relative;
  box-sizing: border-box;
  line-height: ${GoTopButtonSize}px;
  display: inline-block;
  /* background-color: #ffcc00; */

  &:before,
  &:after {
    content: '';
    position: absolute;
    /* transform-origin: center; */
    transform: translate(0px, 0px);
    transform: rotate(0deg);
    top: 50%;
    /* left: 50%; */
    /* transform: translate(50%,-50%);  */
    /* margin-top: -${GoTopButtonHeight / 2}px;
        margin-left: -${GoTopButtonWidth / 2}px; */
    /* transform-origin: center center; */
    display: block;
    height: ${GoTopButtonHeight}px;
    width: ${GoTopButtonWidth}px;
    background-color: #4a4a4a;
    transition: all 0.25s ease-out;
    will-change: transform;
  }
  &:before {
    transform: translate(-10px, 0px) rotate(-45deg);
  }
  &:after {
    transform: translate(10px, 0px) rotate(45deg);
    /* transform: translate(10px,0px); */
  }

  &:hover {
    &:before {
      transform: translate(-5px, -10px) rotate(-240deg);
      /* width: 8px; */
    }
    &:after {
      transform: translate(5px, -10px) rotate(240deg);
      /* width: 8px; */
    }
  }
`

const GoTopButton = (props: any) => {
  return <GoTopButtonStyle />
}

export default GoTopButton
