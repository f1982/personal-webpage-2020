import React from 'react'
import styled from 'styled-components'
import { SkillObject } from '../../types/interfaces'
import { SkillItem } from './SkillItem'

interface SkillProp {
  data: SkillObject[]
  category: string
  introduce?: string
}

const LinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`

const Skills = (props: SkillProp) => {
  return (
    <>
      {props.data.length < 1 ? (
        <div>no data</div>
      ) : (
        <div>
          <h5>{props.category}</h5>
          <LinkContainer>
            {props.data.map((item: SkillObject, index: number) => {
              const { name, level, hidden } = item
              return hidden ? null : (
                <SkillItem key={index} title={name} level={level}></SkillItem>
              )
            })}
          </LinkContainer>
        </div>
      )}
    </>
  )
}

export { Skills }
