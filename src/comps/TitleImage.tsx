import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 16rem;
    color: #fff;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 50%;
    position: relative;
    transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    /* transform: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94); */
    @media screen and (max-width: 768px) {
        height: 8rem;
    }
    &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        background-color: rgb(0, 0, 0);
        transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        opacity: 0.3;
    }
    &:hover {
        background-position-y: 60%;
        &:after {
            opacity: 0.1;
        }
    }
`;

const Inner = styled.div`
    width: 100%;
    max-width: 970px;
    margin: 0 auto;
    padding: 2rem;
    box-sizing: border-box;
    @media screen and (max-width: 768px) {
        padding: 0.5rem;
    }
`;

export interface TitleImageProp {
    title: string;
    subtitle: string;
    backgroundImageURL: string;
}

const TitleImage = (props: TitleImageProp) => {
    const { backgroundImageURL } = props;

    return (
        <Wrapper style={{ backgroundImage: `url(${backgroundImageURL})` }}>
            <Inner></Inner>
        </Wrapper>
    );
};

export default TitleImage;
