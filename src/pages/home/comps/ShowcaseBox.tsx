import React, { useState } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const Wrapper = styled.div`
    display: inline-block;
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
        transform: translateY(2px);
    }
`;

const MyImage = styled.div<{ src: string }>`
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    /* background-blend-mode: multiply; */
    /* background-image: linear-gradient(white, yellow), url(${(props) => props.src}); */
    background-image: url(${(props) => props.src});
    @media screen and (max-width: 768px) {
        border-radius: 1rem;
    }
`;

const VideoPlayer = styled(ReactPlayer)`
    display: block;
    width: 100%;
    height: 100%;
`;

const mainImageURL = process.env.PUBLIC_URL + 'static/images/home_showcase_base.jpg';
// const showIndex: number = 0;
const ShowcaseBox = (props: any) => {
    const [playIndex] = useState(1);
    // setPlayIndex(1);
    return (
        <Wrapper>
            {playIndex === 0 ? (
                <VideoPlayer url='https://www.youtube.com/watch?v=8Vw3RryITv0' width='100%' height='100%' />
            ) : (
                <MyImage src={mainImageURL} />
            )}
        </Wrapper>
    );
};
export default ShowcaseBox;
