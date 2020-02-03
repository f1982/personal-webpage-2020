import React, { useEffect } from 'react';
import styled from 'styled-components';
import SingleButton from '../../comps/SingleButton';
import HighlightProject from './comps/HighlightProject';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Links } from '../../comps/Links';
import ShowcaseBox from './comps/ShowcaseBox';

const SectionRow = styled.div`
    display: flex;
    flex-flow: row;
    margin: 3.8rem 2rem;
    @media screen and (max-width: 750px) {
        flex-flow: column;
        margin: 1rem;
    }
`;

const IntroLeft = styled.div`
    display: flex;
    flex-flow: column;
    width: 300px;
    @media screen and (max-width: 750px) {
        width: 100%;
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

const VerticalContainer = styled.div`
    display: flex;
    flex-flow: column;
    flex: 1;
    padding: 1rem;
`;

const Home = (props: any) => {
    const { syncHome } = props;
    const hiImageURL = process.env.PUBLIC_URL + 'static/images/hi.png';
    const bgImageURL = process.env.PUBLIC_URL + 'static/images/intro_pic_bg.png';

    useEffect(() => {
        syncHome();
    }, [syncHome]);

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <SectionRow>
                <IntroLeft>
                    <div>
                        <h4>Hi there,</h4>
                    </div>
                    <div>
                        <img style={{ width: `300px` }} src={hiImageURL} alt='Hi I am Andy' />
                    </div>
                    <div>
                        <h5>Software Developer</h5>
                    </div>
                    <div>
                        <Link to='about'>
                            <SingleButton>Say Hi!</SingleButton>
                        </Link>
                    </div>
                </IntroLeft>
                <IntroRight
                    style={{
                        backgroundImage: `url(${bgImageURL})`
                    }}>
                    <ShowcaseBox></ShowcaseBox>
                </IntroRight>
            </SectionRow>
            <SectionRow>
                <VerticalContainer>
                    <div>
                        <h5>What I Do?</h5>
                    </div>
                    <div>
                        <p>{props.whatIDo}</p>
                    </div>
                </VerticalContainer>
                <VerticalContainer>
                    <div>
                        <h5>Who I Like?</h5>
                    </div>
                    <div>
                        <p>{props.whatILike}</p>
                    </div>
                </VerticalContainer>
            </SectionRow>
            <HighlightProject
                projects={props.projects}
                moreProjectCallback={() => {
                    console.log('more project callback');
                }}
            />
            <Links data={props.sns} category='all'></Links>
        </>
    );
};

export default Home;
