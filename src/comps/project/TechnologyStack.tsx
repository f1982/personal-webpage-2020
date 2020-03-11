import React from 'react';
import styled from 'styled-components';

const TSItem = styled.span`
    font-family: Menlo, Monaco, monospace, 'Courier New';
    padding: 0.1rem 0.75rem;
    font-size: 0.75rem;
    background-color: #eee;
    border: 1px solid #ccc;
    border-radius: 0.75rem;
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
