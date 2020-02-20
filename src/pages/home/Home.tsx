import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SingleButton from '../../comps/SingleButton';
import HighlightProject from './comps/HighlightProject';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Links } from '../../comps/Links';
import ShowcaseBox from './comps/ShowcaseBox';
import ContactForm from '../../comps/ContactForm';
import DoAndLike from '../../pages/home/comps/DoAndLike';
import '../../assets/styles/home-css-animate.css';

const Wrapper = styled.div`
    /* text-align: center; */
`;
const SectionRow = styled.div`
    display: flex;
    width: 1200px;
    flex-flow: row;
    margin: 3rem auto;
    @media screen and (max-width: 750px) {
        flex-flow: column;
        margin: 1rem;
    }
`;
const Row = styled.div`
    width: 1200px;
    margin: 1rem auto;
    /* 小于 1200px 就 100% */
    @media screen and (max-width: 1200px) {
        width: 100%;
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

const showStyle = styled.div``;

const Home = (props: any) => {
    const { syncHome } = props;
    const hiImageURL = process.env.PUBLIC_URL + 'static/images/hi.png';
    const bgImageURL = process.env.PUBLIC_URL + 'static/images/intro_pic_bg.png';

    const [className, setClassName] = useState('hidden');
    const handleScroll = () => {
        // console.log('scrollTop:', document.documentElement.scrollTop);
        if (document.documentElement.scrollTop > 25) {
            setClassName('show');
        } else {
            setClassName('hidden');
        }
    };
    useEffect(() => {
        syncHome();

        // window.onscroll = () => handleScroll();

        return () => {
            window.onscroll = null;
        };
    }, [syncHome]);

    return (
        <Wrapper>
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

            <Row>
                <DoAndLike whatIDo={props.whatIDo} whatILike={props.whatILike} />
            </Row>
            <HighlightProject
                projects={props.projects}
                moreProjectCallback={() => {
                    console.log('more project callback');
                }}
            />
            <Links data={props.sns} category='all'></Links>
            <Row>
                <ContactForm />
            </Row>
        </Wrapper>
    );
};

export default Home;
