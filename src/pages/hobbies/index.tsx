import React from 'react';
import styled from 'styled-components';

import TitleImage from '../../comps/TitleImage';
import Helmet from 'react-helmet';
import '../../assets/styles/glitch.scss';
import { Link, Switch, Route, useRouteMatch, useParams } from 'react-router-dom';
import { SingleButton } from '../../comps/Buttons';

import { LeftImageItem, RightImageItem, HobbyTextItem } from './comps/HobbyItems';
import VideoMakingSection from './comps/VideoMakingSection';
import HobbyDetail from './comps/HobbyDetail';
const imageURL = process.env.PUBLIC_URL + 'static/images/title-hobby.jpg';

const Hobbies = () => {
    const match = useRouteMatch();
    // console.log('match', match);

    const submenuItems = [
        { id: 'rc', url: `${match.url}/rc`, title: 'RC' },
        { id: 'video', url: `${match.url}/video`, title: 'Video' },
        { id: 'paint', url: `${match.url}/paint`, title: 'paint' }
    ];

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
                <Route path={`${match.path}/:making-video`}>
                    <HobbyDetail title='video' detail={null}></HobbyDetail>
                </Route>
                <Route>
                    <TitleImage
                        title='Everybody needs a hobby'
                        subtitle='很庆幸自己是个有爱好的人，这些年虽然爱好一直也在变化，但是几乎不会逃出以下几种。某种程度来说，我觉得人天生是有宿命的。把时间献祭给自己所钟爱的人或者事物，无疑是幸福的。'
                        backgroundImageURL={imageURL}></TitleImage>

                    <VideoMakingSection />
                    <LeftImageItem title='FPV Hobby' introduction={intro} image='static/images/hobby_drone.png' />
                    <HobbyTextItem title='Drone' introduction={intro} />
                    <RightImageItem
                        title='Electronic'
                        introduction={intro}
                        image='static/images/hobby_old_camera.png'
                    />
                </Route>
            </Switch>
        </>
    );
};
export default Hobbies;
