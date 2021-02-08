import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { fade, IconButton } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

type ButtonDirection = 'left' | 'right'

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
`

const LeftArrowButton = styled.div`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  left: 2%;
`

const RightArrowButton = styled.div`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  right: 2%;
`

const BottomToolBar = styled.div(
  ({ theme }) => css`
    position: absolute;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    height: 150px;
    width: 100%;
    pointer-events: none;
    bottom: 0;
    padding: 2rem;
    background: ${theme.palette.secondary.main};
    background: linear-gradient(
      0deg,
      ${fade(theme.palette.secondary.main, 0.7)} 0%,
      ${fade(theme.palette.secondary.main, 0)} 100%
    );
  `
)

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Pagination = styled.span`
  color: ${props => props.theme.palette.secondary.contrastText};
`

interface CarouselProps {
  sliders: React.ReactNode[]
}

const Carousel: React.FC<CarouselProps> = ({ sliders }: CarouselProps) => {
  const [index, setIndex] = useState(0)

  const total = sliders.length

  const handleClick = (direction: ButtonDirection) => {
    const increment = direction === 'left' ? -1 : +1
    setIndex((index + increment + total) % total)
  }

  return (
    <CarouselWrapper>
      {index > 0 && (
        <LeftArrowButton>
          <IconButton
            onClick={() => {
              handleClick('left')
            }}>
            <ArrowBackIosIcon />
          </IconButton>
        </LeftArrowButton>
      )}
      {index < total - 1 && (
        <RightArrowButton>
          <IconButton
            onClick={() => {
              handleClick('right')
            }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </RightArrowButton>
      )}
      {total > 0 && (
        <>
          {total > 1 && (
            <BottomToolBar>
              <Pagination>
                {index + 1}/{total}
              </Pagination>
            </BottomToolBar>
          )}
          <ItemContainer>{sliders[index]}</ItemContainer>
        </>
      )}
    </CarouselWrapper>
  )
}

export default Carousel
