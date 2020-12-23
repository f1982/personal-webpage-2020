import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

const Wrapper = styled(animated.div)`
  width: 8rem;
  height: 8rem;
  display: inline-block;
  border: 2px solid #ffcc00;
  margin: 0 0.5rem;
  padding: 0.1rem;
  background-color: #fff;
  border-radius: 50%;
  text-decoration: none;
  vertical-align: middle;
  line-height: 8rem;
  text-align: center;
  opacity: 0;
  &:hover {
    background-color: #eee;
  }
`

const ActiveBorder = styled(animated.div)`
  position: relative;
  text-align: center;
  height: 100%;
  width: 100%;
  border-radius: 100%;
  background-color: #39b4cc;
  background-image: linear-gradient(180deg, transparent 50%, #a2ecfb 50%),
    linear-gradient(50deg, #a2ecfb 50%, transparent 50%);
`
const Circle = styled(animated.div)``
export const TitleSpan = styled.span``
const LevelSpan = styled.span``

interface SkillItemProp {
  title: string
  level: number
}

const SkillItem = (skillProps: SkillItemProp) => {
  const [props, set] = useSpring(() => ({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 250 }
  }))

  const mouseOverHandler = (event: React.MouseEvent) => {
    set({ opacity: 0 })
  }
  const mouseOutHandler = (event: React.MouseEvent) => {
    set({ opacity: 1 })
  }

  return (
    <Wrapper
      style={props}
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}>
      <ActiveBorder>
        <Circle>
          <TitleSpan id='title'>{skillProps.title}</TitleSpan>
          <LevelSpan>{skillProps.level}</LevelSpan>
        </Circle>
      </ActiveBorder>
    </Wrapper>
  )
}

export { SkillItem }
// export default SkillItem;
