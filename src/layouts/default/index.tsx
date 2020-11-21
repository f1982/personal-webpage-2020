import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div``;
const Inner = styled.div`
  position: relative;
`;
const MainContainer = styled.div`
  width: 100%;
`;

interface IDefaultProps {
  header: React.FC;
  footer: React.FC;
  children: React.ReactNode;
}

const DefaultLayout: React.FC<IDefaultProps> = ({ header: Header, footer: Footer, children }: IDefaultProps) => {
  console.count('render default');
  return (
    <Wrapper>
      <Inner>
        <Header />
        <MainContainer>{children}</MainContainer>
        <Footer />
      </Inner>
    </Wrapper>
  );
};

const SectionWide: React.FunctionComponent = (props: any) => (
  <section style={{ width: `100%` }}>{props.children}</section>
);
const SectionNarrow: React.FunctionComponent = (props: any) => (
  <div style={{ width: `100%`, maxWidth: `970px`, margin: `4rem auto` }}>{props.children}</div>
);

export default DefaultLayout;

export { SectionWide, SectionNarrow };
