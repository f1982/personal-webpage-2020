import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
// import Progressive from '../../../comps/ProgressiveImage';
import { SingleButton } from '../../../comps/Buttons';
import _ from 'lodash';
import log from 'loglevel';
import CoverImage from '../../../assets/hobby-drawing-cover.jpg';

const TriangleShape = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    grid-column: 3 / span 3;
    grid-row: 1 / span 3;
    background-color: gray;
    clip-path: polygon(0 0, 100% 0, 50% 100%);
    z-index: 10;
    @media screen and (max-width: 768px) {
        position: initial;
    }
`;

const GridContainer = styled.div`
    display: grid;
    position: relative;
    width: 100%;
    max-width: 970px;
    margin: 3rem auto;
    text-align: center;
    grid-template-columns: 2fr 2fr 2fr 1fr 2fr 2fr 2fr;
    grid-template-rows: 1fr 4fr 1fr 1fr 1fr 1fr;
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
    #cover {
        /* opacity: 0; */
        transform: translate3d(0, 2rem, 0);
    }
    /* 
    Once this component show up in the display area
    All element opacity is 1 and move to right position
    */
    &.is-visible {
        > * {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }
    h2 {
        position: absolute;
        width: 100%;
        grid-column: 2 / span 5;
        grid-row: 2 / span 1;
        color: #f8e71c;
        font-family: 'Impact';
        font-size: 8rem;
        text-align: center;
        z-index: 9;
        font-style: normal;
        letter-spacing: 1rem;
        @media screen and (max-width: 768px) {
            display: none;
        }
    }
    h3 {
        grid-column: 3 / span 3;
        grid-row: 3 / span 1;
        text-align: center;
        color: #fff;
        z-index: 12;
        color: #333;
        @media screen and (max-width: 768px) {
        }
    }
    p {
        margin: 1rem auto;
        grid-column: 2 / span 5;
        grid-row: 4 / span 2;
        text-align: justify;
        align-self: stretch;
    }
    #links {
        grid-column: 3 / span 3;
        grid-row: 6 / span 1;
        text-align: center;
    }
`;

const DrawingHobby = () => {
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
                // log.info(intersectionRatio, target, '');
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
            <TriangleShape id='cover'>
                <img src={CoverImage} style={{ width: '100%' }}></img>
            </TriangleShape>
            {/* <img src='https://picsum.photos/200' /> */}
            <h3>DRAWING</h3>
            <h2>DRAWING</h2>
            <p>
                I work out of Harrisburg PA, I love pour over coffee, I have a cat named after MacGyver, my favorite
                number is 22, I'm not a huge fan of IPAs, I play video games like it's my life, I knew what I wanted to
                do at the age of 13, I downhill mountain bike, my favorite food is bacon, and I broke my left arm twice.
            </p>
            <div id='links'>
                <a
                    href='https://photos.google.com/share/AF1QipNtWKaWltlWMiw9nr_FYn9mecSDqdIhaMcERWGhJ1XL18Kl_7fBtCXcu0uftkphtA?key=S1BGenlYWkJKWDVJbnUyZ2JWcmVnUjZaVHN4aDBB'
                    target='_blank'>
                    <SingleButton>Drawing Album</SingleButton>
                </a>
                {/* <SingleButton>Test</SingleButton> */}
            </div>
        </GridContainer>
    );
};

export default DrawingHobby;
