import React from 'react';
import styled from 'styled-components';
import Header from './comps/Header';
import Footer from './comps/Footer';

const MainContainer = styled.div`
    padding: 1rem 0;
`;
interface LayoutProp {
    children: any;
}
const DefaultLayout = (props: LayoutProp) => (
    <div>
        <Header />
        <MainContainer>{props.children}</MainContainer>
        <Footer />
    </div>
);

export default DefaultLayout;
