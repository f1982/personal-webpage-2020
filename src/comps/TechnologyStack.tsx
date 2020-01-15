import React from 'react'
import styled from 'styled-components'

const TSItem = styled.span`
    font-family: '';
    font-size: 12px;
    border: 2px solid #333;
    margin: 0 0.5rem;
    padding: 0.3rem;
    background-color: #fff;
    border-radius: 0.5rem;
`
interface TechnologyStackItemProp {
    technology: string
}

const TechnologyStackItem = (props: TechnologyStackItemProp) => {
    return (
        <TSItem>
            {props.technology}
        </TSItem>
    )
}

export {
    TechnologyStackItem
}