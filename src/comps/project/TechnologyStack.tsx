import React from 'react';
import styled from 'styled-components';

const TSItem = styled.span`
  font-family: Menlo, Monaco, monospace, 'Courier New';
  padding: 2px 0.5rem;
  font-size: 0.75rem;
  background-color: #eee;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  line-height: 1rem;
  list-style-type: none;
  :hover {
    background: #555;
  }
`;

interface TechnologyStackItemProp {
  technology: string;
}

const TechnologyStackItem = ({ technology }: TechnologyStackItemProp) => {
  return (
    <TSItem>
      <small>{technology}</small>
    </TSItem>
  );
};

export { TechnologyStackItem };
