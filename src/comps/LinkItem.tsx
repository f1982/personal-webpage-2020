import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.a`
    border: 2px solid #ffcc00;
    margin: 0 0.5rem;
    padding: 0.1rem;
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 0.5rem;
    text-decoration: none;
    &:hover{
        background-color: #eee;
    }
`
interface LinkItemProp {
    title: string,
    link: string,
    alt?: string,
    icon?: JSX.Element
}

const LinkItem = (props: LinkItemProp) => {
    return (
        <Wrapper href={props.link} title={props.alt} target="_blank">
            {props.icon} {props.title}
        </Wrapper>
    )
}

export {
    LinkItem
}