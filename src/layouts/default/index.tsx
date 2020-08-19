import React from 'react';
import styled from 'styled-components';
import Header from './comps/Header';
import Footer from './comps/Footer';
import { Route } from 'react-router-dom';
const Wrapper = styled.div``;
const Inner = styled.div`
    position: relative;
`;
const MainContainer = styled.div`
    width: 100%;
`;

interface IDefaultProps {
    component: any;
    path?: string;
    exact?: boolean;
}

const DefaultLayout: React.SFC<IDefaultProps> = (props: IDefaultProps) => {
    const { component: Component, ...rest } = props;
    return (
        <Route
            {...rest}
            render={(matchProps: any) => (
                <Wrapper>
                    <Inner>
                        <Header />
                        <MainContainer>
                            <Component {...matchProps} />
                        </MainContainer>
                        <Footer />
                    </Inner>
                </Wrapper>
            )}
        />
    );
};

const SectionWide = (props: any) => <section style={{ width: `100%` }}>{props.children}</section>;
const SectionNarrow = (props: any) => (
    <div style={{ width: `100%`, maxWidth: `970px`, margin: `4rem auto` }}>{props.children}</div>
);

export default DefaultLayout;

export { SectionWide, SectionNarrow };
