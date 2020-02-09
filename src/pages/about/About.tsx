import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Header } from './comps/Header';
import { Summary } from './comps/Summary';
import TitleImage from '../../comps/TitleImage';
import SubMenu from '../../comps/SubMenu';
import { Experience } from '../../comps/Experience';
import { Helmet } from 'react-helmet';

const Wrapper = styled.div`
    padding: 2rem;
`;

const About = (props: any) => {
    const { syncInfo } = props;
    useEffect(() => {
        syncInfo();
    }, [syncInfo]);

    const timelineMenuItems = [
        { id: 2, title: 'Work Experience', active: true },
        { id: 1, title: 'Life Experience' }
    ];
    const imageURL = process.env.PUBLIC_URL + 'static/images/about_img_bar.jpg';

    return (
        <>
            <Helmet>
                <title>About</title>
            </Helmet>
            <TitleImage
                title='About'
                subtitle='I live in Auckland New Zealand with my wife and 3 years old daughter. I love pour over coffee, I have a cat named Little Black.'
                backgroundImageURL={imageURL}></TitleImage>
            <Wrapper>
                <div id='header'>
                    <Header name='Andy Cao' position='Software Developer'></Header>
                </div>
                {/* <h3>Summary</h3> */}
                <div style={{ padding: `3rem` }}>
                    <Summary>{props.summary}</Summary>
                </div>

                {/* <div>{JSON.stringify(props.aboutD ata.timelines.works)}</div> */}
                {/* <div>{props.summary}</div> */}

                <SubMenu items={timelineMenuItems} />
                <div style={{ padding: `3rem` }}>
                    <h3 style={{ textAlign: `center` }}>Experience</h3>
                    <Experience data={props.timelines.works}></Experience>
                </div>
            </Wrapper>
        </>
    );
};

export default About;
