import React from 'react'
import styled from 'styled-components'
import Button, { ButtonProps } from '@material-ui/core/Button'

const BubbleColor = '#fff'
const InnterButton = styled(Button)`
  padding: 0.75rem 2rem;
  font-weight: bold;
  color: #fff;
  border: 2px solid #fff;
  font-size: 1rem;
  background-color: ${({ theme }) =>
    theme?.palette?.secondary?.main || '#ffcc00'};
  border-radius: 0.75rem;
  transition: all 0.3s ease 0s;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  &:hover {
    transform: translateY(1px);
    background-color: ${({ theme }) =>
      theme?.palette?.primary?.main || '#85ff4d'};
    &:before {
      content: '';
      pointer-events: none;
      opacity: 0.6;
      background: radial-gradient(
          circle at 20% 35%,
          transparent 0,
          transparent 2px,
          ${BubbleColor} 3px,
          ${BubbleColor} 4px,
          transparent 4px
        ),
        radial-gradient(
          circle at 75% 44%,
          transparent 0,
          transparent 2px,
          ${BubbleColor} 3px,
          ${BubbleColor} 4px,
          transparent 4px
        ),
        radial-gradient(
          circle at 46% 52%,
          transparent 0,
          transparent 4px,
          ${BubbleColor} 5px,
          ${BubbleColor} 6px,
          transparent 6px
        );
      width: 100%;
      height: 200%;
      top: 0;
      left: 0;
      position: absolute;
      animation: bubbles 5s linear infinite both;
    }
    @keyframes bubbles {
      from {
        transform: translate();
      }
      to {
        transform: translate(0, -66.666%);
      }
    }
  }
  &:focus {
    outline: 0;
  }
`

interface NormalButtonProps extends ButtonProps {
  id?: string
  children?: string
  callback?: Function
}
const NormalButton = (props: NormalButtonProps) => {
  return (
    <InnterButton
      variant='contained'
      color='primary'
      {...props}
      onClick={() => {
        props.callback && props.callback()
      }}>
      {props.children}
    </InnterButton>
  )
}

export default NormalButton
