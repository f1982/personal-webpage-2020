import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.a`
    margin: 0 0.5rem;
    padding: 0.1rem;
    text-decoration: none;
    background-color: #fff;
    &:hover {
        background-color: #ff0000;
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
