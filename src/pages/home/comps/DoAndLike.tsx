import React from 'react';
import styled from 'styled-components';
import Avatar from '../../../assets/avatar-pixel.jpg';

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-flow: column;
    @media screen and (max-width: 768px) {
        flex-flow: column;
        margin: 0rem;
    }
`;

const UserAvatar = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
`;

const HorizatalContainer = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    & p {
        /* text-align: justify; */
    }
    @media screen and (max-width: 768px) {
        flex-flow: column;
        padding: 0 0.5rem;
    }
`;

const HorizatalItem = styled.div`
    flex: 1;
`;

const AvatarImg = styled.img``;

const HighlightFont = styled.h3`
    display: inline-block;
    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
        line-height: 1rem;
    }
`;

const WhatIDoParagraph = styled.p`
    text-align: right;
    @media screen and (max-width: 768px) {
        text-align: justify;
    }
`;

interface PropsType {
    whatIDo: string;
    whatILike: string;
}

const DoAndLike = (props: PropsType) => {
    const hobbyImg = process.env.PUBLIC_URL + 'static/images/transmiter.png';
    return (
        <Wrapper>
            <div style={{ textAlign: `center`, marginBottom: `2rem` }}>
                <HighlightFont>Love to explore and make,</HighlightFont>
                <br />
                <HighlightFont>leaving some works on this planet</HighlightFont>
            </div>
            <HorizatalContainer>
                <HorizatalItem style={{ textAlign: `right`, paddingRight: `2rem` }}>
                    <UserAvatar src={Avatar} />
                </HorizatalItem>
                <HorizatalItem>
                    <p>{props.whatIDo}</p>
                </HorizatalItem>
            </HorizatalContainer>

            <HorizatalContainer>
                <HorizatalItem>
                    <WhatIDoParagraph>{props.whatILike}</WhatIDoParagraph>
                </HorizatalItem>
                <HorizatalItem style={{ textAlign: `left`, paddingLeft: `2rem` }}>
                    <AvatarImg src={hobbyImg} />
                </HorizatalItem>
            </HorizatalContainer>
        </Wrapper>
    );
};

export default DoAndLike;
