import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Header } from './comps/Header';
import { Summary } from './comps/Summary';
import TitleImage from '../../comps/TitleImage';
import Submenu from '../../comps/SubMenu2';
import { Experience } from '../../comps/TimelineWork';
import TimelineLife from '../../comps/TimelineLife';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import Introduction from './comps/Introduction';

const Wrapper = styled.div`
    width: 100%;
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: 1rem;
`;

const About = (props: any) => {
    console.log('props', props);
    const { syncInfo } = props;
    const match = useRouteMatch();
    useEffect(() => {
        syncInfo();
    }, [syncInfo]);

    const submenuItems = [
        { id: 'intro', url: `${match.url}/intro`, title: 'Introduction', active: true },
        { id: 'work', url: `${match.url}/work`, title: 'Work Experience' },
        { id: 'life', url: `${match.url}/life`, title: 'Life Experience' },
        { id: 'skill', url: `${match.url}/skill`, title: 'Skills' }
    ];
    const imageURL = process.env.PUBLIC_URL + 'static/images/about_img_bar.jpg';

    const aboutHtml = (
        <>
            <div id='header'>
                <Header name='Andy Cao' position='Software Developer'></Header>
            </div>
            <div>
                <h3>test1</h3>
                <p>{props.summary}</p>
                <h3>test2</h3>
                <p>{props.summary}</p>
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
                backgroundImageURL={imageURL}
            />
            {/* <Submenu items={submenuItems} /> */}
            {props.loadedState === 'loaded' ? (
                <Wrapper>
                    <div>
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
                                <h3>test1</h3>
                                <img src='http://127.0.0.1:3000/static/images/hobby_drone.png' />
                                <p>
                                    I am Andy Cao. I come from China. I born in a very small village called Shangtai. I
                                    move to Fushun with my parent. I went to university at Luoyang, and then I want to
                                    Beijing worked for 14 years.{' '}
                                </p>
                                <h3>test1</h3>
                                <p>Now I live in Auckland New Zealand with my wife and 3 years old daughter Zoe.</p>
                                <p>
                                    I am an optimistic man in my life. I have many hobbies such as RC airplane, drone,
                                    making video and making games.
                                </p>
                                <h3>test1</h3>
                                <p>
                                    On the other side, I have been working as a software developer for about 18 years. I
                                    started to get into this area with Flash when I was at University. And then I fell
                                    love with iOS. For now I focus on front-end and web development. and I also keep an
                                    eye on design.
                                </p>
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
