import React from 'react';
import styled from 'styled-components';

const TSItem = styled.span`
    font-family: 'Roboto', sans-serif;
    padding: 0.2rem;
    color: #fff;
    background-color: #1e87f0;
    border-radius: 0.5rem;
    list-style-type: none;
    :hover {
        background: #555;
    }
`;

interface TechnologyStackItemProp {
    technology: string;
}

const TechnologyStackItem = (props: TechnologyStackItemProp) => {
    return <TSItem>{props.technology}</TSItem>;
};

export { TechnologyStackItem };
