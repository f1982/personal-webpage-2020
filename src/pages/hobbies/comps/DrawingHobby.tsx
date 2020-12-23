import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { SingleButton } from '../../../comps/Button'
import _ from 'lodash'

const TriangleShape = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  grid-column: 3 / span 3;
  grid-row: 1 / span 3;
  background-color: gray;
  clip-path: polygon(100% 0, 0% 0, 50% 100%);

  z-index: 10;
  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    position: initial;
  }
`

const Wrapper = styled.div`
  display: grid;
  position: relative;
  width: 100%;
  max-width: 970px;
  margin: 3rem auto;
  text-align: center;
  grid-template-columns: 2fr 2fr 2fr 1fr 2fr 2fr 2fr;
  grid-template-rows: 1fr 4fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
  @media screen and (max-width: 768px) {
    display: block;
    padding: 1rem;
  }

  > * {
    opacity: 0;
    /* Read element property of  --distance */
    transform: translate3d(var(--distance, -2rem), 0, 0);
    /* Read element property of  --delay */
    transition: opacity 700ms var(--delay, 0ms),
      transform 700ms var(--delay, 0ms);
  }
  #cover {
    /* opacity: 0; */
    transform: translate3d(0, 2rem, 0);
  }
  /*
    Once this component show up in the display area
    All element opacity is 1 and move to right position
    */
  &.is-visible {
    > * {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  #hobby-title {
    grid-column: 3 / span 3;
    grid-row: 3 / span 1;
    text-align: center;
    z-index: 12;
    h3 {
      color: #fff;
      color: #333;
      @media screen and (max-width: 768px) {
      }
    }
  }
  h2 {
    position: absolute;
    width: 100%;
    grid-column: 2 / span 5;
    grid-row: 2 / span 1;
    color: #f8e71c;
    font-family: 'Impact';
    font-size: 8rem;
    text-align: center;
    z-index: 9;
    font-style: normal;
    letter-spacing: 1rem;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  p {
    margin: 1rem auto;
    grid-column: 1 / span 7;
    grid-row: 4 / span 2;
    text-align: justify;
    align-self: stretch;
  }
  #links {
    grid-column: 3 / span 3;
    grid-row: 6 / span 1;
    text-align: center;
  }
`

const DrawingHobby = () => {
  const [node, setNode] = useState<HTMLDivElement>()
  // Declare intersection observer
  const io = new IntersectionObserver(
    (entries: any[]) => {
      entries.forEach(entry => {
        const { intersectionRatio, target } = entry
        if (intersectionRatio > 0.25) {
          target.classList.add('is-visible')
        } else {
          target.classList.remove('is-visible')
        }
      })
    },
    {
      threshold: 0.25
    }
  )

  const containerRef = useCallback(node => {
    setNode(node)
  }, [])

  useEffect(() => {
    if (node) {
      // Setting of every child element
      // Get all children element
      const sectionChildren = node.children
      for (let i = 0; i < sectionChildren.length; i++) {
        const el: HTMLElement = sectionChildren[i] as HTMLElement
        // set variable for every element inside the grid div
        el.style.setProperty('--delay', `${i * 200}ms`)
        el.style.setProperty('--distance', `${_.sample([-2, 0, 2])}rem`)
      }
      // Observe element
      io.observe(node)
    }
    return () => {
      // unobserve
      if (node) {
        io.unobserve(node)
      }
    }
  }, [node, io])

  return (
    <Wrapper ref={containerRef}>
      <TriangleShape id='cover'>
        <img
          src={process.env.PUBLIC_URL + 'static/images/hobby-drawing-cover.jpg'}
          alt='Drawing Hobby'
        />
      </TriangleShape>
      <div id='hobby-title'>
        <h3>DRAWING</h3>
      </div>
      <h2>DRAWING</h2>
      <p>
        I feel that drawing is an easy way to express your ideas and also an
        efficient way to communicate with others. When I first time decided to
        draw something seriously was that when I saw the famous cartoon series
        of the Dragon Balls which created by Toriyama Akira. I keep this hobby
        as a tool to record some ideas or an approach for design.
      </p>
      <div id='links'>
        <a
          href='https://photos.app.goo.gl/9GZrmEyXhCBReKGP6'
          target='_blank'
          rel='noopener noreferrer'>
          <SingleButton>Drawing Album</SingleButton>
        </a>
      </div>
    </Wrapper>
  )
}

export default DrawingHobby
