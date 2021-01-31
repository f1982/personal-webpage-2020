import React from 'react'
import styled from 'styled-components'
import Typegraphy from '@material-ui/core/Typography'

const Wrapper = styled.a`
  margin: 0 0.5rem;
  border: 1px solid #fff;
  border-radius: 30%;
  text-decoration: none;
  transition: border 0.3s, border-radius 0.3s;
  will-change: transform;

  &:hover {
    border-radius: 50%;
    border: 1px solid #ccc;
    text-shadow: 0px 2px #666;
  }
`
interface LinkItemSimpleProp {
  title: string
  link: string
  alt?: string
  icon?: JSX.Element
}

const LinkItemSimple = (props: LinkItemSimpleProp) => {
  return (
    <Wrapper href={props.link} title={props.alt} target='_blank'>
      <Typegraphy>{props.icon}</Typegraphy>
    </Wrapper>
  )
}

export default LinkItemSimple
