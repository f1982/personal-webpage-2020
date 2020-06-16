import React, { useContext } from 'react';
import styled from 'styled-components';
import Header from './comps/Header';
import Footer from './comps/Footer';
import { SettingContext } from '../../Settings';
const Wrapper = styled.div`
    /* background-color: #000; */
    /* padding: 0 1rem; */
`;
const Inner = styled.div`
    /* background-color: #fff; */
    position: relative;
`;
const MainContainer = styled.div`
    width: 100%;
`;
interface LayoutProp {
    children: any;
}
const DefaultLayout = (props: LayoutProp) => {
    const context = useContext(SettingContext);
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
