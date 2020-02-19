import React from 'react';
import styled from 'styled-components';
import Header from './comps/Header';
import Footer from './comps/Footer';

const Wrapper = styled.div``;
const MainContainer = styled.div``;
interface LayoutProp {
    children: any;
}
const DefaultLayout = (props: LayoutProp) => (
    <>
        <Header />
        <MainContainer>{props.children}</MainContainer>
        <Footer />
    </>
);

export default DefaultLayout;
