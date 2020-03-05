import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SingleButton from '../../comps/SingleButton';
import { WelcomeAnimation, ParticleCircle } from './canvas';

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
`;

const Centered = styled.div`
    width: 720px;
    height: auto;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`;
const Title = styled.h1`
    top: 50vh;
`;

const Welcome = (props: any) => {
    useEffect(() => {
        const canvas: any = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        resizeCanvas();
        window.onresize = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            resizeCanvas();
        };

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        function assignToDiv() {
            // this kind of function you are looking for
            let dataUrl = canvas.toDataURL();
            let bg: any = document.getElementById('bg');
            bg.style.background = 'url(' + dataUrl + ')';
        }

        // let welcome = new WelcomeAnimation(canvas, ctx);
        let welcome = new ParticleCircle(canvas, ctx);
        assignToDiv();

        return () => {};
    }, []);
    return (
        <Wrapper id='bg'>
            <Centered>
                <h3 style={{ letterSpacing: `1rem`, textTransform: `uppercase`, backgroundColor: `#fff` }}>
                    Hey! I'm Andy Cao
                </h3>
                <div
                    style={{
                        backgroundColor: `#000`,
                        color: `#fff`,
                        width: `max-content`,
                        margin: `0 auto`,
                        padding: `0.1rem 1rem`
                    }}>
                    {/* <p style={{ backgroundColor: `#000`, color: `#fff`, padding: `0.1rem 1rem` }}> */}
                    Welcome to my space
                    {/* </p> */}
                </div>
                <Link to='/home'>
                    <SingleButton>ENTER</SingleButton>
                </Link>
            </Centered>
            <canvas id='canvas' style={{ backgroundColor: `#fff` }}></canvas>
        </Wrapper>
    );
};

export default Welcome;
