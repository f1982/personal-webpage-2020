import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';
import { TextBlock } from 'react-placeholder/lib/placeholders';
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
    vertical-align: middle;
`;

const HorizatalContainer = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    & p {
        /* text-align: justify; */
    }
`;

const HorizatalItem = styled.div`
    flex: 1;
`;

const AvatarImg = styled.img``;

const HighlightFont = styled.h3`
    display: inline-block;
`;

interface PropsType {
    whatIDo: string;
    whatILike: string;
}

const DoAndLike = (props: PropsType) => {
    const handleScroll = () => {};

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
                    <UserAvatar src={Avatar}></UserAvatar>
                </HorizatalItem>
                <HorizatalItem>
                    <p>{props.whatIDo}</p>
                </HorizatalItem>
            </HorizatalContainer>

            <HorizatalContainer>
                <HorizatalItem>
                    <p style={{ textAlign: `right` }}>{props.whatILike}</p>
                </HorizatalItem>
                <HorizatalItem style={{ textAlign: `left`, paddingLeft: `2rem` }}>
                    <AvatarImg src={hobbyImg} />
                </HorizatalItem>
            </HorizatalContainer>
        </Wrapper>
    );
};

export default DoAndLike;
