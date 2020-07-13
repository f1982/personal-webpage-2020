import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { SingleButton } from '../../../comps/Buttons';
import _ from 'lodash';
import RCCoverImage from '../../../assets/hobby-rc-cover.jpg';

const Wrapper = styled.div`
    $randomNumber: random(5);
    display: grid;
    width: 100%;
    max-width: 970px;
    margin: 3rem auto;
    text-align: center;
    grid-template-columns: 2fr 2fr 1fr 1fr 1fr 3fr 2fr;
    grid-template-rows: 1fr 2fr 1fr 1fr 2fr 1fr;
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
        grid-column: 2 / span 5;
        grid-row: 1 / span 4;

        background-color: #ccc;
        width: 100%;
        max-width: 430px;
        line-height: 2rem;
        margin: 0 auto;
        object-fit: cover;
        border-radius: 50%;
        &:hover {
        }
    }

    h3 {
        display: block;
        grid-column: 3 / span 3;
        grid-row: 4 / span 1;
        text-align: center;
        color: #333;
        @media screen and (max-width: 768px) {
            color: #333;
        }
    }
    p {
        margin: 0 auto;
        padding: 1rem;
        grid-column: 1 / span 7;
        grid-row: 5 / span 1;
        text-align: justify;
    }
    #links {
        grid-column: 2 / span 5;
        grid-row: 6 / span 1;
        text-align: center;
    }
`;

const RCHobby = () => {
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
            //Setting of every child element
            //Get all children element
            const sectionChildren = node.children;
            for (let i = 0; i < sectionChildren.length; i++) {
                let el: HTMLElement = sectionChildren[i] as HTMLElement;
                //set variable for every element inside the grid div
                el.style.setProperty('--delay', `${i * 200}ms`);
                el.style.setProperty('--distance', `${_.sample([-2, 0, 2])}rem`);
            }
            //Observe element
            io.observe(node);
        }
        return () => {
            //unobserve
            if (node) {
                io.unobserve(node);
            }
        };
    }, [node, io]);

    return (
        <Wrapper ref={containerRef}>
            <img src={RCCoverImage} alt='RC Hobby' />
            <h3>RC Hobby</h3>
            <p>
                Making RC aeroplane was one of my dream in my childhood. When I was in primary school I have seen some
                magazines that introduced how to make RC aeroplane, I was shocked by the content and started to absorb
                the information that I can get. But actually, for a long period of time, I cannot get the right data or
                cannot find the right place to buy the components I need. Thanks for the Internet development and I can
                quickly find the groups and tutorials which let me enjoy to make or even design aircraft by myself.
            </p>
            <div id='links'>
                <a href='https://photos.app.goo.gl/huWtqV1XxnSan39P7' target='_blank' rel='noopener noreferrer'>
                    <SingleButton>Planes</SingleButton>
                </a>
                <a href='https://photos.app.goo.gl/TjSPdHm2zfGfzeA2A' target='_blank' rel='noopener noreferrer'>
                    <SingleButton>Devices</SingleButton>
                </a>
            </div>
        </Wrapper>
    );
};

export default RCHobby;
