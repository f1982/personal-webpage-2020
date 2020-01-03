import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.span`
    border: 2px solid #ffcc00;
    margin: 0 0.5rem;
    padding: 0.1rem;
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 0.5rem;
`
interface HobbyItemProp {
    title: string
}

const HobbyItem = (props: HobbyItemProp) => {
    return (
        <Wrapper>
            {props.title}
        </Wrapper>
    )
}

export {
    HobbyItem
}