import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Header } from './comps/Header';
import { Summary } from './comps/Summary';
import TitleImage from '../../comps/TitleImage';
import Submenu from '../../comps/SubMenu2';
import { Experience } from '../../comps/TimelineWork';
import TimelineLife from '../../comps/TimelineLife';
import { useRouteMatch, Switch, Route, NavLink, useHistory } from 'react-router-dom';
import Introduction from './comps/Introduction';

const Wrapper = styled.div`
    width: 100%;
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: 1rem;
`;

const InlineLink = styled(NavLink)`
    color: #ffcc00;
    display: inline-block;
    font-weight: 700;
    position: relative;
    ::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        top: 50%;
        left: 0;
        background-color: #ffcc00;
    }
`;

const About = (props: any) => {
    console.log('props', props);
    let history = useHistory();
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

    const getMyAge = () => {
        var d = new Date();
        var n = d.getFullYear();
        return n - 1982;
    };
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
                                <button
                                    onClick={() => {
                                        history.goBack();
                                    }}>
                                    close
                                </button>
                                <TimelineLife data={props.timelines.life} />
                            </Route>
                            <Route path={`${match.path}/skill`}>
                                <h1>Skills</h1>
                            </Route>
                            <Route path={`${match.path}/intro`}>{aboutHtml}</Route>
                            <Route>
                                <h3>Hey,</h3>
                                <p>
                                    I am Andy, I am a software developer, from Beijing China 🇨🇳. Currently, I am living
                                    in Auckland, New Zealand 🇳🇿. I am {getMyAge()} years old now. I have made software,
                                    website, mobile application, games. Writing code is not only my job, but also a
                                    life-long hobby.
                                </p>
                                <img src='/static/images/hobby_drone.png' />
                                <p>
                                    I am an optimistic man in my life. I have many hobbies such as RC airplane, drone,
                                    making video and making games.
                                </p>

                                <h3>Living Place</h3>
                                <p>
                                    I born in a very small village in Liaoning China 🇨🇳. I move to Fushun with my parent
                                    when I was 11. I went to university at Luoyang, and then I want to Beijing worked
                                    for 14 years. Now, I am living in Northshore, Auckland. Here are the{' '}
                                    <InlineLink to={match.path + '/life'}>timeline</InlineLink>
                                </p>

                                <h3>Career</h3>
                                <p>
                                    On the other side, I have been working as a software developer for about 18 years. I
                                    started to get into this area with Flash when I was at University. And then I fell
                                    love with iOS. For now I focus on front-end and web development. and I also keep an
                                    eye on design. Here are my job{' '}
                                    <InlineLink to={match.path + '/work'}>timeline</InlineLink>
                                </p>
                                <h3>Hobbies</h3>
                                <p>
                                    I love to diy things, make my hands dirty. I know some electronic techniques, I like
                                    to make drone by myself, but I am a terrible pilot.{' '}
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
