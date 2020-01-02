import React from 'react'
import styled from 'styled-components'

const TSItem = styled.span`
    border: 2px solid #ffcc00;
    margin: 0 0.5rem;
    padding: 0.1rem;
    background-color: ${props => props.theme.colors.secondary};
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