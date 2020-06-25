import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SingleButton } from '../../comps/Buttons';
import { ParticleCircle } from './canvas';

const Wrapper = styled.div`
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
    & h3 {
        letter-spacing: 1rem;
        text-transform: uppercase;
        background-color: #fff;
        width: max-content;
        margin: 0 auto;
        padding: 0 1.5rem;
    }
    & p {
        background-color: #fff;
        color: #666;
        width: max-content;
        margin: 1.5rem auto;
        padding: 0.1rem 1rem;
    }
    @media screen and (max-width: 750px) {
        width: 100%;
        h3 {
            letter-spacing: 0.2rem;
            font-size: 2.25rem;
        }
    }
`;

const WelcomeButton = styled(SingleButton)`
    margin: 1.5rem;
`;

const WelcomeCanvas = styled.canvas`
    background-color: #fff;
    width: 100%;
    height: 100vh;
`;

const Welcome = (props: any) => {
    useEffect(() => {
        const canvas: any = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        const welcome = new ParticleCircle(canvas, ctx);
        welcome.init();

        resizeCanvas();
        window.onresize = () => {
            resizeCanvas();
        };

        function resizeCanvas() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            welcome.clear();
            welcome.init();
        }

        return () => {};
    }, []);
    return (
        <Wrapper id='bg'>
            <Centered>
                <h3>Hey! I'm Andy</h3>
                <p>Welcome to my space</p>
                <Link to='/home'>
                    <WelcomeButton>ENTER</WelcomeButton>
                </Link>
            </Centered>
            <WelcomeCanvas id='canvas' />
        </Wrapper>
    );
};

export default Welcome;
