import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Header } from './comps/Header';
import { Summary } from './comps/Summary';
import TitleImage from '../../comps/TitleImage';
import SubMenu from '../../comps/SubMenu';
import { Experience } from '../../comps/Experience';
import TimelineLife from '../../comps/TimelineLife';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import Introduction from './comps/Introduction';

const Wrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`;

const About = (props: any) => {
    console.log('props', props);
    const { syncInfo } = props;
    const match = useRouteMatch();
    console.log('About page match', match);

    useEffect(() => {
        syncInfo();
    }, [syncInfo]);

    const submenuItems = [
        { id: 'intro', url: `${match.url}/intro`, title: 'Introduction', active: true },
        { id: 'work', url: `${match.url}/work`, title: 'Work Experience' },
        { id: 'life', url: `${match.url}/life`, title: 'Life Experience' },
        { id: 'skill', url: `${match.url}/skill`, title: 'Skills' }
        // { id: 'intro', url: `/about/intro`, title: 'Introduction', active: true },
        // { id: 'work', url: `/about/work`, title: 'Work Experience' },
        // { id: 'life', url: `/about/life`, title: 'Life Experience' },
        // { id: 'skill', url: `/about/skill`, title: 'Skills' }
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
            <SubMenu items={submenuItems} />
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
                            <Route>
                                <Introduction />
                            </Route>
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
