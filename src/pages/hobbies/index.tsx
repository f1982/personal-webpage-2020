import React from 'react';
// import styled from 'styled-components';

import TitleImage from '../../comps/MediaBanner';
import Helmet from 'react-helmet';
import '../../assets/styles/glitch.scss';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
// import { SingleButton } from '../../comps/Buttons';

import { LeftImageItem, RightImageItem, HobbyTextItem } from './comps/HobbyItems';
import VideoMakingSection from './comps/VideoMakingSection';
import VideoHobby from './comps/VideoHobby';
import RCHobby from './comps/RCHobby';
import DrawingHobby from './comps/DrawingHobby';
const imageURL = process.env.PUBLIC_URL + 'static/images/banner-fpv.jpg';

const Hobbies = () => {
    const match = useRouteMatch();
    // console.log('match', match);

    // const submenuItems = [
    //     { id: 'rc', url: `${match.url}/rc`, title: 'RC' },
    //     { id: 'video', url: `${match.url}/video`, title: 'Video' },
    //     { id: 'paint', url: `${match.url}/paint`, title: 'paint' }
    // ];

    let intro = `I work out of Harrisburg PA, I love pour over coffee, I have a cat named after MacGyver, my favorite
    number is 22, I'm not a huge fan of IPAs, I play video games like it's my life, I knew what I wanted
    to do at the age of 13, I downhill mountain bike, my favorite food is bacon, and I broke my left arm
    twice.`;
    return (
        <>
            <Helmet>
                <title>Hobbies</title>
            </Helmet>
            <Switch>
                <Route>
                    <TitleImage imageURL={imageURL}></TitleImage>
                    <RCHobby />
                    <DrawingHobby />
                    <VideoHobby />
                </Route>
            </Switch>
        </>
    );
};
export default Hobbies;
