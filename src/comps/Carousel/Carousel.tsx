import React, { useState } from 'react'

export interface CarouselDataItem {
  url: string
  alt: string
}
interface CarouselProps {
  items: CarouselDataItem[]
  showDots: boolean
}
const Carousel: React.FC<CarouselProps> = (props: CarouselProps) => {
  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault()
  //   // console.log(event.targe)
  // }

  const [index, setIndex] = useState(0)

  const numSlides = props.items.length
  const handleClick = (direction: string) => {
    const increment = direction === 'left' ? -1 : 1
    const newIndex = (index + increment + numSlides) % numSlides
    console.log('newIndex', newIndex)
    setIndex(newIndex)
  }

  return (
    <div>
      <h1>{index}</h1>
      <button
        disabled={index === 0}
        onClick={() => {
          handleClick('left')
        }}>
        Left
      </button>
      <button
        disabled={numSlides < 2 || index >= numSlides - 1}
        onClick={() => {
          handleClick('right')
        }}>
        Right
      </button>

      <div key={props.items[index].url}>
        <img src={props.items[index].url} alt={props.items[index].alt} />
        <p>{props.items[index].alt}</p>
      </div>
      {/* {props.items.map((item: CarouselDataItem) => {
        return (
          <div key={item.url}>
            <img src={item.url} alt={item.alt} />
            <p>{item.alt}</p>
          </div>
        )
      })} */}
    </div>
  )
}

const CarouselItem = (url: string, alt: string) => {
  return (
    <div key={url}>
      <img src={url} alt={alt} />
      <p>{alt}</p>
    </div>
  )
}

export { CarouselItem }

export default Carousel
