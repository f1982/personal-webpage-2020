import React from 'react'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  max-width: 970px;
  margin: 0 auto;
`
interface StyledComponentProps {
  name: string
  $mode: number
}
const StyledComponentWithProps = styled('button')(
  ({ name, $mode }: StyledComponentProps) => css`
    background-color: ${$mode === 1 ? 'red' : 'blue'};
    width: 300px;
    height: 300px;
    &:before {
      content: '${name}';
      width: 100%;
    }
  `
)

const Resume = () => {
  return (
    <Wrapper>
      <h1>Resume of Andy Cao</h1>
      <StyledComponentWithProps $mode={1} name='I am 1' />
      <StyledComponentWithProps $mode={2} name='I am 2' />
    </Wrapper>
  )
}

export default Resume
