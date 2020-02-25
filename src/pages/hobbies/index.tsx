import React from 'react';
import styled from 'styled-components';

import TitleImage from '../../comps/TitleImage';
import Helmet from 'react-helmet';
import '../../assets/styles/glitch.scss';
import { Link, Switch, Route, useRouteMatch, useParams } from 'react-router-dom';
import SingleButton from '../../comps/SingleButton';

const imageURL = process.env.PUBLIC_URL + 'static/images/title-hobby.jpg';

const ItemWrapper = styled.div`
    width: 100%;
`;

const ItemWrapperBG = styled.div`
    width: 100%;
    background-color: #333;
`;

const Row1200 = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-flow: row;
    margin: 3rem auto;
    background-color: #ffcc00;

    @media screen and (min-width: 1200px) {
        width: 1200px;
    }
    @media screen and (max-width: 750px) {
        flex-flow: column;
    }
`;

const Row12001 = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-flow: column;
    margin: 3rem auto;
    /* background-color: #ffcc00; */
    text-align: center;
    color: #fff;

    @media screen and (min-width: 1200px) {
        width: 1200px;
    }
`;

const LeftSide = styled.div`
    width: 40%;
    /* border: 1px solid #ff0000; */
    box-sizing: border-box;
    img {
        width: 100%;
        height: auto;
        margin: 2rem auto;
    }
    @media screen and (max-width: 750px) {
        width: 100%;
    }
`;
const RightSide = styled.div`
    width: 60%;
    padding: 3rem;
    /* border: 1px solid #ff0000; */
    box-sizing: border-box;
    @media screen and (max-width: 750px) {
        width: 100%;
    }
`;

const HobbyItem = () => {
    return (
        <ItemWrapper>
            <Row1200>
                <LeftSide>
                    <img src='static/images/hobby_drone.png'></img>
                </LeftSide>
                <RightSide>
                    <h3>Drone/ RC / FPV Hobby</h3>
                    <p>
                        I work out of Harrisburg PA, I love pour over coffee, I have a cat named after MacGyver, my
                        favorite number is 22, I'm not a huge fan of IPAs, I play video games like it's my life, I knew
                        what I wanted to do at the age of 13, I downhill mountain bike, my favorite food is bacon, and I
                        broke my left arm twice.
                    </p>
                    <SingleButton>MORE</SingleButton>
                </RightSide>
            </Row1200>
        </ItemWrapper>
    );
};

const HobbyItemStyle2 = () => {
    return (
        <ItemWrapperBG>
            <Row12001>
                <h3>Drone/ RC / FPV Hobby</h3>
                <p>
                    I work out of Harrisburg PA, I love pour over coffee, I have a cat named after MacGyver, my favorite
                    number is 22, I'm not a huge fan of IPAs, I play video games like it's my life, I knew what I wanted
                    to do at the age of 13, I downhill mountain bike, my favorite food is bacon, and I broke my left arm
                    twice.
                </p>
                <SingleButton>MORE</SingleButton>
            </Row12001>
        </ItemWrapperBG>
    );
};

const HobbyItemStyle3 = () => {
    return (
        <ItemWrapper>
            <Row1200>
                <RightSide>
                    <h3>Drone/ RC / FPV Hobby</h3>
                    <p>
                        I work out of Harrisburg PA, I love pour over coffee, I have a cat named after MacGyver, my
                        favorite number is 22, I'm not a huge fan of IPAs, I play video games like it's my life, I knew
                        what I wanted to do at the age of 13, I downhill mountain bike, my favorite food is bacon, and I
                        broke my left arm twice.
                    </p>
                    <SingleButton>MORE</SingleButton>
                </RightSide>
                <LeftSide>
                    <img src='static/images/hobby_old_camera.png'></img>
                </LeftSide>
            </Row1200>
        </ItemWrapper>
    );
};

const Hobbies = () => {
    let match = useRouteMatch();
    console.log('match', match);

    return (
        <>
            <Helmet>
                <title>About</title>
            </Helmet>
            <TitleImage
                title='Everybody needs a hobby'
                subtitle='很庆幸自己是个有爱好的人，这些年虽然爱好一直也在变化，但是几乎不会逃出以下几种。某种程度来说，我觉得人天生是有宿命的。把时间献祭给自己所钟爱的人或者事物，无疑是幸福的。'
                backgroundImageURL={imageURL}></TitleImage>

            <HobbyItem />
            <HobbyItemStyle2 />
            <HobbyItemStyle3 />
            <div style={{ backgroundColor: '#000' }}>
                <h3>Still building...</h3>
            </div>
        </>
    );
};
export default Hobbies;
