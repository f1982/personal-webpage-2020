import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;
const SummaryText = styled.p`
    padding: 0.5rem 2rem;
    text-align: justify;
    /* text-transform: capitalize; */
    :first-letter {
        color: #903;
        float: left;
        font-family: Georgia;
        font-size: 75px;
        line-height: 60px;
        padding-top: 4px;
        padding-right: 8px;
        padding-left: 3px;
    }
`;

interface SummaryProps {
    children?: string;
}
const Summary = (props: SummaryProps) => {
    return (
        <Wrapper>
            <SummaryText>{props.children}</SummaryText>
        </Wrapper>
    );
};

export { Summary };
