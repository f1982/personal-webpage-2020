import React from 'react';
import styled from 'styled-components';
import Header from './comps/Header';
import Footer from './comps/Footer';

const Wrapper = styled.div`
    background-color: #000;
    padding: 0.5rem;
`;
const Inner = styled.div`
    background-color: #fff;
    position: relative;
`;
const MainContainer = styled.div``;
interface LayoutProp {
    children: any;
}
const DefaultLayout = (props: LayoutProp) => (
    <Wrapper>
        <Inner>
            <Header />
            <MainContainer>{props.children}</MainContainer>
            <Footer />
        </Inner>
    </Wrapper>
);

export default DefaultLayout;
