import React from 'react'
import { TimelineLifeObject } from '../../types/interfaces'
import TimelineLifeItem, { Upper, Lower } from './TimelineLifeItem'

interface TimelineLifeProp {
  data: TimelineLifeObject[]
}
const TimelineLife = (props: TimelineLifeProp) => {
  const { data } = props
  return (
    <>
      <Upper />
      {data &&
        data.map((item: TimelineLifeObject, index: number) => {
          let dir
          index % 2 === 0 ? (dir = 'left') : (dir = 'right')
          return item.hidden ? null : (
            <TimelineLifeItem dir={dir} key={index} itemData={item} />
          )
        })}

      <Lower />
    </>
  )
}

export default TimelineLife
