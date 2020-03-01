import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SingleButton from '../../comps/SingleButton';

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

        function assignToDiv() {
            // this kind of function you are looking for
            let dataUrl = canvas.toDataURL();
            let bg: any = document.getElementById('bg');
            bg.style.background = 'url(' + dataUrl + ')';
        }

        const draw = () => {
            // replace with your logic
            ctx.fillStyle = 'rgb(100, 250, 100)';
            ctx.fillRect(0, 0, 35, 30);
            ctx.fillStyle = 'rgba(100, 250, 250, 0.5)';
            ctx.fillRect(80, 230, 35, 30);
        };

        draw();
        assignToDiv();

        return () => {};
    }, []);
    return (
        <Wrapper id='bg'>
            <Centered>
                <h3>Hey! I'm Andy Cao</h3>
                <p>Welcome to my space</p>
                <Link to='/home'>
                    <SingleButton>Start</SingleButton>
                </Link>
            </Centered>
            <canvas id='canvas'></canvas>
        </Wrapper>
    );
};

export default Welcome;
