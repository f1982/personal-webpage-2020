import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
// import Progressive from '../../../comps/ProgressiveImage';
import { SingleButton } from '../../../comps/Buttons';
import _ from 'lodash';
import log from 'loglevel';
import RCCoverImage from '../../../assets/hobby-rc-cover.jpg';

const GridContainer = styled.div`
    $randomNumber: random(5);
    display: grid;
    width: 100%;
    max-width: 970px;
    margin: 3rem auto;
    text-align: center;
    grid-template-columns: 2fr 2fr 1fr 1fr 1fr 2fr 2fr;
    grid-template-rows: 3fr 2fr 1fr 1fr 2fr 1fr;
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
        /* height: 430px; */
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
        grid-column: 2 / span 5;
        grid-row: 5 / span 1;
        text-align: justify;
    }
    div {
        grid-column: 3 / span 3;
        grid-row: 6 / span 1;
        text-align: center;
    }
`;

const RCHobby = () => {
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        //Setting of every child element
        //Get all children element
        const sectionChildren = (ref.current as any).children;
        for (let i = 0; i < sectionChildren.length; i++) {
            let el = sectionChildren[i];
            console.log('el', el);
            //set variable for every element inside the grid div
            el.style.setProperty('--delay', `${i * 200}ms`);
            el.style.setProperty('--distance', `${_.sample([-2, 0, 2])}rem`);
        }
        //Intersection observer
        //Declare callback function
        const callback = (entries: any[]) => {
            entries.forEach((entry) => {
                const { intersectionRatio, target } = entry;
                log.info(intersectionRatio, target, '');
                if (intersectionRatio > 0.25) {
                    target.classList.add('is-visible');
                } else {
                    target.classList.remove('is-visible');
                }
            });
        };
        //Declare option
        const opt = {
            threshold: 0.25
        };
        //Declare intersection observer
        const io = new IntersectionObserver(callback, opt);
        //Observe element
        if (ref.current) {
            io.observe(ref.current as any);
        }

        return () => {
            //unobserve
            io.unobserve(ref.current as any);
        };
    }, [ref]);

    return (
        <GridContainer ref={ref}>
            <img src={RCCoverImage} />
            <h3>RC Hobby</h3>
            <p>
                I work out of Harrisburg PA, I love pour over coffee, I have a cat named after MacGyver, my favorite
                number is 22, I'm not a huge fan of IPAs, I play video games like it's my life, I knew what I wanted to
                do at the age of 13, I downhill mountain bike, my favorite food is bacon, and I broke my left arm twice.
            </p>
            <div>
                <SingleButton>Devices</SingleButton>
                <SingleButton>Planes</SingleButton>
            </div>
        </GridContainer>
    );
};

export default RCHobby;
