import React from 'react';
import TitleImage from '../../comps/MediaBanner';
import Helmet from 'react-helmet';
import '../../assets/styles/glitch.scss';
import { Switch, Route } from 'react-router-dom';
import VideoHobby from './comps/VideoHobby';
import RCHobby from './comps/RCHobby';
import DrawingHobby from './comps/DrawingHobby';
const imageURL = process.env.PUBLIC_URL + 'static/images/banner-fpv.jpg';

const Hobbies = () => {
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
