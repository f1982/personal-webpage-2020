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

const Wrapper = styled.div`
    /* text-align: center; */
`;
const HorizentalExtendBG = styled.div`
    width: 100%;
    background-color: #eee;
`;
const SectionRow = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-flow: row;
    margin: 1.5rem auto;
    padding: 1.5rem 0;
    @media screen and (max-width: 768px) {
        flex-flow: column;
        padding: 0.5rem 0.5rem;
    }
`;

const Row = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 1rem auto;
`;

const IntroLeft = styled.div`
    display: flex;
    flex-flow: column;
    width: 300px;
    margin-right: 1.5rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        margin-right: 0;
        margin-bottom: 1.5rem;
    }
`;

const IntroRight = styled.div`
    margin-left: 1rem;
    flex: 1;
    flex-shrink: 0;
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
    const hiImageURL = process.env.PUBLIC_URL + 'static/images/hi.png';
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
                <SectionRow>
                    <ReactPlaceholder style={IntroLeftHolderStyle} type='media' rows={7} ready={ready}>
                        <IntroLeft>
                            <div>
                                <h4>Hi there,</h4>
                            </div>
                            <div>
                                <img style={{ width: `300px` }} src={hiImageURL} alt='Hi I am Andy' />
                            </div>
                            <h5>Software Developer</h5>
                            <Link to='/about/intro'>
                                <SingleButton>Say Hi!</SingleButton>
                            </Link>
                        </IntroLeft>
                    </ReactPlaceholder>
                    <IntroRight
                        style={{
                            backgroundImage: `url(${bgImageURL})`
                        }}>
                        <ReactPlaceholder style={IntroLeftHolderStyle} type='media' rows={7} ready={ready}>
                            <ShowcaseBox />
                        </ReactPlaceholder>
                    </IntroRight>
                </SectionRow>
            </HorizentalExtendBG>
            <Row>
                <DoAndLike whatIDo={props.whatIDo} whatILike={props.whatILike} />
            </Row>

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
            <Links data={props.sns} category='all'></Links>
        </Wrapper>
    );
};

export default Home;
