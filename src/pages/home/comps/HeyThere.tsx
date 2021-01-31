import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

import { SingleButton } from '../../../comps/Button'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 170px;
  height: auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
    padding: 0 0.5rem;
  }
`
const IM = styled.i`
  font-size: 4.3rem;
  line-height: -5rem;
  @media screen and (max-width: 768px) {
    font-size: 3rem;
    /* line-height: 1rem; */
  }
  position: relative;
  ::after {
    content: '[ch ow]';
    font-size: 0.75rem;
    /* line-height: 1.5rem; */
    letter-spacing: 2px;
    color: #fff;
    position: absolute;
    text-shadow: 0px 0px 1px #000;
    right: 0;
    bottom: 0;
  }
`

const HeyThere = () => {
  return (
    <Wrapper>
      <Typography variant='body1'>Hi there,</Typography>

      <Typography variant='h1'>
        <IM>I&apos;M ANDY CAO</IM>
      </Typography>

      <Typography variant='body1'>Software Developer</Typography>
      <Link to='/contact'>
        <SingleButton color='primary'>Contact</SingleButton>
      </Link>
    </Wrapper>
  )
}

export default HeyThere
