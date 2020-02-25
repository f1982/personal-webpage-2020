import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Header } from './comps/Header';
import { Summary } from './comps/Summary';
import TitleImage from '../../comps/TitleImage';
import SubMenu from '../../comps/SubMenu';
import { Experience } from '../../comps/Experience';
import TimelineLife from '../../comps/TimelineLife';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';

const Wrapper = styled.div`
    padding: 2rem;
`;

const About = (props: any) => {
    console.log('props', props);
    const { syncInfo } = props;
    let match = useRouteMatch();

    useEffect(() => {
        syncInfo();
    }, [syncInfo]);

    const timelineMenuItems = [
        { id: 'work', title: 'Work Experience', active: true },
        { id: 'life', title: 'Life Experience' },
        { id: 'intro', title: 'Introduction' },
        { id: 'skill', title: 'Skills' }
    ];
    const imageURL = process.env.PUBLIC_URL + 'static/images/about_img_bar.jpg';

    const aboutHtml = (
        <>
            <div id='header'>
                <Header name='Andy Cao' position='Software Developer'></Header>
            </div>
            <div style={{ padding: `3rem` }}>
                <Summary>{props.summary}</Summary>
            </div>
        </>
    );

    return (
        <>
            <Helmet>
                <title>About</title>
            </Helmet>
            <TitleImage
                title='About'
                subtitle='I live in Auckland New Zealand with my wife and 3 years old daughter. I love pour over coffee, I have a cat named Little Black.'
                backgroundImageURL={imageURL}></TitleImage>
            {timelineMenuItems.map((item: any, index: number) => (
                <nav key={index}>
                    <Link to={`${match.url}/${item.id}`}>{item.title}</Link>
                </nav>
            ))}

            {props.loadedState === 'loaded' ? (
                <Wrapper>
                    <div style={{ padding: `3rem` }}>
                        <Switch>
                            <Route path={`${match.path}/work`}>
                                <Experience data={props.timelines.works} />
                            </Route>
                            <Route path={`${match.path}/life`}>
                                <TimelineLife data={props.timelines.life} />
                            </Route>
                            <Route path={`${match.path}/skill`}>
                                <h1>Skills</h1>
                            </Route>
                            <Route path={`${match.path}/intro`}>{aboutHtml}</Route>
                            <Route path={`${match.path}`}>{aboutHtml}</Route>
                        </Switch>
                    </div>
                </Wrapper>
            ) : (
                <p>loading</p>
            )}
        </>
    );
};

export default About;
