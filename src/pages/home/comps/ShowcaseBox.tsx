import React, { useState } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const Wrapper = styled.div`
    display: inline-block;
    margin: 1rem auto;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    /* box-shadow: 0px 12px 15px rgba(0, 0, 0, 0.1); */
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    &:hover {
        /* box-shadow: 0px 36px 20px rgba(0, 0, 0, 0.1); */
        transform: translateY(10px);
    }
`;

const MyImage = styled.div`
    display: block;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left;
`;

const VideoPlayer = styled(ReactPlayer)`
    display: block;
    width: 100%;
    height: 100%;
`;

const ShowcaseBox = (props: any) => {
    const [playIndex, setPlayIndex] = useState(0);
    const mainImageURL = process.env.PUBLIC_URL + 'static/images/home_showcase_base.jpg';
    return (
        <Wrapper>
            {/* <VideoPlayer url='https://www.youtube.com/watch?v=8Vw3RryITv0' width='760px' height='460px' /> */}

            <MyImage style={{ backgroundImage: `url(${mainImageURL})` }}></MyImage>
        </Wrapper>
    );
};
export default ShowcaseBox;
