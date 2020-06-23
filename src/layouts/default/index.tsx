import React from 'react';
import styled from 'styled-components';
import Header from './comps/Header';
import Footer from './comps/Footer';
const Wrapper = styled.div``;
const Inner = styled.div`
    position: relative;
`;
const MainContainer = styled.div`
    width: 100%;
`;
interface LayoutProp {
    children: any;
}
const DefaultLayout = (props: LayoutProp) => {
    return (
        <Wrapper>
            <Inner>
                <Header />
                <MainContainer>{props.children}</MainContainer>
                <Footer />
            </Inner>
        </Wrapper>
    );
};

const SectionWide = (props: any) => <section style={{ width: `100%` }}>{props.children}</section>;
const SectionNarrow = (props: any) => (
    <div style={{ width: `100%`, maxWidth: `970px`, margin: `4rem auto` }}>{props.children}</div>
);

export default DefaultLayout;

export { SectionWide, SectionNarrow };
