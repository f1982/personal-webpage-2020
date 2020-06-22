import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SingleButton } from '../../comps/SingleButton';
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

const RectangleAngle = -30 - Math.random() * 20 + 'deg';
const Wrapper = styled.div`
    /* text-align: center; */
`;
const HorizentalExtendBG = styled.div`
    width: 100%;
    /* z-index: 1; */
    /* background-color: #efc854; */
    /* box-sizing: content-box; */
    overflow: hidden;
    position: relative;
    :before {
        content: '';
        position: absolute;
        z-index: -10;
        background-color: #efc800;
        top: 30%;
        left: -30%;
        width: 150%;
        height: 60%;
        /* border-top: 120px solid #8ddaf4;
        border-bottom: 20px solid #e9c8ff; */
        transform: rotate(${RectangleAngle});
    }
`;
const ShowcaseBar = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-content: flex-start;
    align-items: center;
    padding: 3rem 0;
    /* z-index: 990; */
    @media screen and (max-width: 768px) {
        flex-flow: column-reverse;
        padding: 1rem 0.5rem 1rem 0.5rem;
    }
`;

const IntroRight = styled.div`
    width: 764px;
    height: 430px;
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: right;
    text-align: center;
    @media screen and (max-width: 768px) {
        width: 100%;
        /* padding-top: 56.7%; */
        height: 282px;
        padding: 0.5rem 0;
    }
`;

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
    console.log('props', props);
    const [ready, setReady] = useState(false);

    const { syncHome } = props;
    // console.log('syncHome', syncHome);
    // console.log('appConfig', appConfig);
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
                        <HeyThere />
                        <IntroRight>
                            <ShowcaseBox />
                        </IntroRight>
                    </ShowcaseBar>
                </div>
            </HorizentalExtendBG>

            <SectionNarrow>
                <DoAndLike whatIDo={props.whatIDo} whatILike={props.whatILike} />
            </SectionNarrow>

            <SectionNarrow>
                <HighlightProject
                    projects={props.projects}
                    moreProjectCallback={() => {
                        console.log('more project callback');
                    }}
                />
            </SectionNarrow>

            <Links linkData={props.links.sns} iconColor='#EFC854' category='all' />
        </Wrapper>
    );
};

export default Home;
