import React, { useEffect, useCallback, useState } from 'react';
import styled from 'styled-components';
import { SingleButton } from '../../../comps/common/Buttons';
import _ from 'lodash';

const Wrapper = styled.div`
    display: grid;
    width: 100%;
    max-width: 970px;
    margin: 3rem auto;
    text-align: center;
    grid-template-columns: 2fr 2fr 1fr 1fr 1fr 2fr 2fr;
    grid-template-rows: 1fr 1fr 2fr 2fr 1fr;
    gap: 1rem;
    @media screen and (max-width: 768px) {
        display: block;
        padding: 1rem;
    }

    > * {
        opacity: 0;
        /* Read element property of  --distance */
        transform: translate3d(var(--distance, -2rem), 0, 0);
        /* Read element property of  --delay */
        transition: opacity 700ms var(--delay, 0ms), transform 700ms var(--delay, 0ms);
    }

    &.is-visible {
        > * {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }

    img {
        grid-column: 2 / span 4;
        grid-row: 1 / span 4;
        width: 100%;
        max-width: 430px;
        margin: 0 auto;
        &:hover {
        }
    }

    p {
        margin: 1rem auto;
        grid-column: 5 / span 3;
        grid-row: 3 / span 2;
        text-align: justify;
    }
`;
const TitleContainer = styled.div`
    grid-column: 5 / span 3;
    grid-row: 2 / span 1;
    text-align: left;
    h3 {
        color: #333;
        @media screen and (max-width: 768px) {
            color: #333;
        }
    }
`;

const Links = styled.div`
    grid-column: 3 / span 3;
    grid-row: 5 / span 1;
    text-align: center;
`;

const VideoHobby = () => {
    const [node, setNode] = useState<HTMLDivElement>();

    //Declare intersection observer
    const io = new IntersectionObserver(
        (entries: any[]) => {
            entries.forEach((entry) => {
                const { intersectionRatio, target } = entry;
                if (intersectionRatio > 0.25) {
                    target.classList.add('is-visible');
                } else {
                    target.classList.remove('is-visible');
                }
            });
        },
        {
            threshold: 0.25
        }
    );

    const containerRef = useCallback((node) => {
        setNode(node);
    }, []);

    useEffect(() => {
        if (node) {
            //Set default variables for each element
            const sectionChildren = (node as HTMLElement).children;
            for (let i = 0; i < sectionChildren.length; i++) {
                let el: HTMLElement = sectionChildren[i] as HTMLElement;
                //set variable for every element inside the grid div
                el.style.setProperty('--delay', `${i * 200}ms`);
                el.style.setProperty('--distance', `${_.sample([-2, 0, 2])}rem`);
            }
            //Observe the node
            io.observe(node);
        }
        return () => {
            //unobserve
            if (node) {
                io.unobserve(node);
                io.disconnect();
                // console.log('unobserve');
            }
        };
    }, [node, io]);

    return (
        <Wrapper ref={containerRef}>
            <img src={process.env.PUBLIC_URL + 'static/images/video-hobby-cover.png'} alt='Andy RC Hobby' />
            <TitleContainer>
                <h3>Video Making</h3>
            </TitleContainer>
            <p>
                I don’t think human’s memory is very stable and accurate. Sometimes, when we recall the things that
                happened before we can only remember the blurred pictures. I consider video as an external memory for
                very precise and detailed information. Especially when I have my child, I try to record all the key
                memories.
            </p>
            <Links>
                <a href='http://tiny.cc/9owsqz' target='_blank' rel='noopener noreferrer'>
                    <SingleButton>Youtube</SingleButton>
                </a>
                <a href='https://space.bilibili.com/30429048' target='_blank' rel='noopener noreferrer'>
                    <SingleButton>Bilibili</SingleButton>
                </a>
            </Links>
        </Wrapper>
    );
};

export default VideoHobby;
