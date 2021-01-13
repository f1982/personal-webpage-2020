import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// import ReactPlayer from 'react-player';

const Wrapper = styled.div`
  position: relative;
  height: 16rem;
  overflow: hidden;

  /* transform: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94); */
  @media screen and (max-width: 768px) {
    height: 11rem;
  }
`

const LanscapeImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  top: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 50%;
  transition: all 2s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: rgb(0, 0, 0);
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    opacity: 0.3;
  }

  &:hover {
    background-position-y: 60%;

    &:after {
      opacity: 0.1;
    }
  }
`

const LandscapeVideo = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  background-color: rgba(255, 255, 255, 0);
  object-fit: cover;
  transform: translateY(-50%);
  /* filter: grayscale(1) brightness(0.45) contrast(1.05); */
`

const TextLayer = styled.div`
  position: absolute;
  pointer-events: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: 970px;
  text-align: left;
  padding: 1.5rem;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    padding: 0.5rem;
  }
`

export interface MediaBannerProps {
  imageURL: string
  title?: string
  subtitle?: string
  videoURL?: string
}

const MediaBanner = (props: MediaBannerProps) => {
  const { title = '', subtitle = '', imageURL = '', videoURL = '' } = props
  const [showMediaType, setShowMediaType] = useState('image')
  // 3 precondition should be met
  // 1. it's not on mobile phone
  // 2. it's set video url
  // 3. show time more than 3s
  useEffect(() => {
    let counter: any = null
    if (videoURL) {
      counter = setTimeout(() => {
        setShowMediaType('video')
      }, 15000)
    }
    return () => {
      if (counter) clearTimeout(counter)
    }
  }, [videoURL])

  return (
    <Wrapper>
      <LanscapeImage style={{ backgroundImage: `url(${imageURL})` }} />
      {showMediaType === 'video' ? (
        <LandscapeVideo src={videoURL} autoPlay controls={false} loop>
          Sorry,Your browser does not support the video replay.
        </LandscapeVideo>
      ) : null}
      <TextLayer>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </TextLayer>
    </Wrapper>
  )
}

export default MediaBanner
