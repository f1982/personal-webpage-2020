import React, { useState } from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

import ProgressiveImage from '../../../comps/ProgressiveImage/ProgressiveImage'

import CoverImage from '../../../assets/images/andy-at-cornfield.jpg'

const Wrapper = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    transform: translateY(2px);
  }
`

const VideoPlayer = styled(ReactPlayer)`
  display: block;
  width: 100%;
  height: 100%;
`

const ShowcaseBox = () => {
  const [playIndex] = useState(1)
  // setPlayIndex(1);
  return (
    <Wrapper>
      {playIndex === 0 ? (
        <VideoPlayer
          url='https://www.youtube.com/watch?v=8Vw3RryITv0'
          width='100%'
          height='100%'
        />
      ) : (
        <ProgressiveImage
          src={CoverImage}
          width='100%'
          height='100%'
          radius='2rem'
        />
      )}
    </Wrapper>
  )
}
export default ShowcaseBox
