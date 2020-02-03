import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.a`
    margin: 0 0.2rem;
    padding: 0.5rem;
    border: 1px solid #fff;
    border-radius: 30%;
    text-decoration: none;
    background-color: #fff;

    transition: border 0.3s, border-radius 0.3s;
    will-change: transform;

    &:hover {
        /* background-color: #ff0000; */
        border-radius: 50%;
        border: 1px solid #ccc;
        /* color: #ccc; */
        text-shadow: 0px 2px #666;
    }
`;
interface LinkItemSimpleProp {
    title: string;
    link: string;
    alt?: string;
    icon?: JSX.Element;
}

const LinkItemSimple = (props: LinkItemSimpleProp) => {
    return (
        <Wrapper href={props.link} title={props.alt} target='_blank'>
            {props.icon}
        </Wrapper>
    );
};

export default LinkItemSimple;
