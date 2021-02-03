import React from 'react'
import styled from 'styled-components'

const TSItem = styled.span`
  font-family: Menlo, Monaco, monospace, 'Courier New';
  padding: 2px 0.5rem;
  margin-right: 0.5rem;
  font-size: 0.75rem;
`

interface TechnologyStackItemProp {
  technology: string
}

const TechnologyStackItem = ({ technology }: TechnologyStackItemProp) => {
  return <TSItem>{technology}</TSItem>
}

export { TechnologyStackItem }
