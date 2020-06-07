import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SingleButton from '../../comps/SingleButton';
import HighlightProject from './comps/HighlightProject';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Links } from '../../comps/Links';
import ShowcaseBox from './comps/ShowcaseBox';
import DoAndLike from '../../pages/home/comps/DoAndLike';
import '../../assets/styles/home-css-animate.css';
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';
import { RectShape, TextBlock } from 'react-placeholder/lib/placeholders';
import { SectionWide, SectionNarrow } from '../../layouts/default';
import HeyThere from './comps/HeyThere';

const Wrapper = styled.div`
    /* text-align: center; */
`;
const HorizentalExtendBG = styled.div`
    width: 100%;
    /* z-index: 1; */
    background-color: #efc854;
    box-sizing: content-box;
`;
const ShowcaseBar = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-content: flex-start;
    align-items: center;
    /* margin: 1.5rem auto; */
    padding: 3rem 0;
    @media screen and (max-width: 768px) {
        flex-flow: column;
        padding: 0.5rem 0.5rem;
    }
`;

const IntroRight = styled.div`
    width: 764px;
    height: 430px;
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: right;
    text-align: center;
    @media screen and (max-width: 750px) {
        margin-left: 0rem;
        width: 100%;
        height: 300px;
    }
`;

const ItemStyle = {
    display: `inline-flex`,
    flexWrap: `wrap`,
    flexGrow: `1`,
    height: `300px`,
    minWidth: `400px`
};

const HighlightProjectPlaceholder = (
    <div
        style={{
            display: `grid`,
            gridTemplateColumns: `repeat(auto-fit, minmax(400px, 1fr))`,
            width: `1200px`,
            margin: `1rem auto`
        }}>
        <RectShape color='#E0E0E0' style={{ width: 250, height: 350 }} />
        <RectShape color='#E0E0E0' style={{ width: 250, height: 350 }} />
        <RectShape color='#E0E0E0' style={{ width: 250, height: 350 }} />
    </div>
);

const IntroLeftHolderStyle = {
    margin: `0.5rem, 1rem`,
    flex: 1,
    flexShrink: 0
};

const HorizentalCenteredHolder = {
    width: `100%`,
    maxWidth: `1200px`,
    margin: `1.5rem auto`
};

const Home = (props: any) => {
    const [ready, setReady] = useState(false);

    const { syncHome } = props;
    const bgImageURL = process.env.PUBLIC_URL + 'static/images/intro_pic_bg.png';

    useEffect(() => {
        syncHome();
        setReady(true);
    }, [syncHome]);

    return (
        <Wrapper>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <HorizentalExtendBG>
                <div style={{ width: `100%`, maxWidth: `970px`, margin: `0 auto` }}>
                    <ShowcaseBar>
                        <ReactPlaceholder style={IntroLeftHolderStyle} type='media' rows={7} ready={ready}>
                            <HeyThere />
                        </ReactPlaceholder>
                        <IntroRight>
                            <ReactPlaceholder style={IntroLeftHolderStyle} type='media' rows={7} ready={ready}>
                                <ShowcaseBox />
                            </ReactPlaceholder>
                        </IntroRight>
                    </ShowcaseBar>
                </div>
            </HorizentalExtendBG>

            <SectionNarrow>
                <DoAndLike whatIDo={props.whatIDo} whatILike={props.whatILike} />
            </SectionNarrow>

            <SectionNarrow>
                <ReactPlaceholder
                    style={HorizentalCenteredHolder}
                    ready={ready}
                    customPlaceholder={HighlightProjectPlaceholder}>
                    <HighlightProject
                        projects={props.projects}
                        moreProjectCallback={() => {
                            console.log('more project callback');
                        }}
                    />
                </ReactPlaceholder>
            </SectionNarrow>

            <Links data={props.sns} category='all'></Links>
        </Wrapper>
    );
};

export default Home;
