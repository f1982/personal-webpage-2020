import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { SingleButton } from '../../comps/Button'
import { ParticleCircle } from './canvas'
import Helmet from 'react-helmet'
import { Typography } from '@material-ui/core'

const Wrapper = styled.div`
  position: relative;
`

const Centered = styled.div`
  width: 720px;
  height: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  & h3 {
    letter-spacing: 1rem;
    text-transform: uppercase;
    width: max-content;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  & p {
    width: max-content;
    margin: 1.5rem auto;
    padding: 0.1rem 1rem;
  }
  @media screen and (max-width: 750px) {
    width: 100%;
    h3 {
      letter-spacing: 0.2rem;
      font-size: 2.25rem;
    }
  }
`

const WelcomeButton = styled(SingleButton)`
  margin: 1.5rem;
`

const WelcomeCanvas = styled.canvas`
  width: 100%;
  height: 100vh;
`

function resizeCanvas(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

const Welcome = () => {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'test') {
      const canvas = document.getElementById('canvas') as HTMLCanvasElement
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
      const welcome = new ParticleCircle(canvas, ctx)
      welcome.init()
      resizeCanvas(canvas)
      window.onresize = () => {
        resizeCanvas(canvas)
        welcome.clear()
        welcome.init()
      }
    }

    return () => {
      if (process.env.NODE_ENV !== 'test') {
        window.onresize = null
      }
    }
  }, [])

  return (
    <Wrapper id='bg'>
      <Helmet>
        <title>Welcome</title>
        <meta name='description' content="Welcome to Andy's space" />
      </Helmet>
      <Centered>
        <Typography variant='h2' component='h1'>
          Hey! I&apos;m Andy
        </Typography>
        <Typography>Welcome to my space</Typography>
        <Link to='/home'>
          <WelcomeButton id='enter-button'>ENTER</WelcomeButton>
        </Link>
      </Centered>
      <WelcomeCanvas id='canvas' />
    </Wrapper>
  )
}

export default Welcome
