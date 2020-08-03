import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SingleButton } from '../../../comps/common/Buttons';
const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    width: 170px;
    height: auto;
    @media screen and (max-width: 768px) {
        width: 100%;
        margin-bottom: 1rem;
        padding: 0 0.5rem;
    }
`;
const IM = styled.h1`
    font-size: 4.3rem;
    line-height: 4rem;
    @media screen and (max-width: 768px) {
        font-size: 3rem;
        line-height: 1rem;
    }
`;
const Cao = styled.i`
    position: relative;
    ::after {
        content: '[ch ow]';
        font-size: 0.75rem;
        line-height: 1.5rem;
        letter-spacing: 2px;
        color: #fff;
        position: absolute;
        text-shadow: 0px 0px 1px #333;
        right: 0;
        bottom: 0;
    }
`;

const HeyThere = (props: any) => {
    // const hiImageURL = process.env.PUBLIC_URL + 'static/images/hi.png';
    return (
        <Wrapper>
            <div>Hi there,</div>
            <IM>
                <i>I'M ANDY</i>
                <Cao> CAO</Cao>
            </IM>
            <small style={{ margin: `0 0 0.75rem 0` }}>Software Developer</small>
            <Link to='/contact'>
                <SingleButton>Contact</SingleButton>
            </Link>
        </Wrapper>
    );
};

export default HeyThere;
