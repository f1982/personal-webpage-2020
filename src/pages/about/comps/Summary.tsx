import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const SummaryText = styled.p`
  padding: 0.5rem 2rem;
  text-align: justify;
`;

interface SummaryProps {
  children?:string
}
const Summary = (props: SummaryProps) => {
  return (
    <Wrapper>
      <SummaryText>
        {props.children}
      </SummaryText>
    </Wrapper>
  );
};

export { Summary };
