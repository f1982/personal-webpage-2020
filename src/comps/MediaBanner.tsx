import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import ReactPlayer from 'react-player';

const Wrapper = styled.div`
    position: relative;
    height: 16rem;
    overflow: hidden;
`;

const LanscapeImage = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 50%;
    position: relative;
    transition: all 2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    /* transform: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94); */
    @media screen and (max-width: 768px) {
        height: 8rem;
    }
    &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        background-color: rgb(0, 0, 0);
        transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        opacity: 0.3;
    }
    &:hover {
        background-position-y: 60%;
        &:after {
            opacity: 0.1;
        }
    }
`;

const TextLayer = styled.div`
    position: absolute;
    pointer-events: none;
    width: 100%;
    height: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 970px;
    text-align: left;
    padding: 1.5rem;
    box-sizing: border-box;

    @media screen and (max-width: 768px) {
        padding: 0.5rem;
    }
`;

export interface MediaBannerProps {
    imageURL: string;
    title?: string;
    subtitle?: string;
    videoURL?: string;
}

const MediaBanner = (props: MediaBannerProps) => {
    const { title = '', subtitle = '', imageURL = '', videoURL = '' } = props;

    const [showMediaType, setShowMediaType] = useState('image');

    //3 precondition should be met
    //1. it's not on mobile phone
    //2. it's set video url
    //3. show time more than 3s
    useEffect(() => {
        console.log('set timeout');
        let counter: number = 0;
        if (videoURL) {
            counter = setTimeout(() => {
                console.log('timeout');
                setShowMediaType('video');
            }, 5000);
        }
        return () => {
            console.log('clear timeout');
            if (counter) clearTimeout(counter);
        };
    }, [videoURL]);

    return (
        <Wrapper>
            {showMediaType === 'image' ? (
                <LanscapeImage style={{ backgroundImage: `url(${imageURL})` }} />
            ) : (
                <video
                    src={videoURL}
                    autoPlay={true}
                    width='100%'
                    style={{ position: `absolute`, top: `0`, objectFit: `cover`, filter: `brightness(50%);` }}
                    controls={false}
                    loop={true}>
                    Sorry,Your browser does not support the video replay.
                </video>
                // <ReactPlayer
                //     url='https://www.youtube.com/watch?v=8Vw3RryITv0'
                //     playing={true}
                //     width='100%'
                //     height='100%'
                // />
            )}

            <TextLayer>
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </TextLayer>
        </Wrapper>
    );
};

export default MediaBanner;
