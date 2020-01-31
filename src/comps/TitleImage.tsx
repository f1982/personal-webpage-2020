import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 25rem;
    padding: 6rem;
    color: #fff;
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: left;

    @media screen and (max-width: 600px) {
        padding: 2rem;
        background-size: auto 100%;
    }
`;

const Subtitle = styled.p`
    color: #fff;
    opacity: .8;
`;

export interface TitleImageProp {
    title: string;
    subtitle: string;
    backgroundImageURL: string;
}

const TitleImage = (props: TitleImageProp) => {
    const { title, subtitle, backgroundImageURL } = props;

    return (
        <Wrapper style={{ backgroundImage: `url(${backgroundImageURL})` }}>
            <h1>{title}</h1>
            <Subtitle>{subtitle}</Subtitle>
        </Wrapper>
    );
};

export default TitleImage;
