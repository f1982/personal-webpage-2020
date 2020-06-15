import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 16rem;
    color: #fff;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @media screen and (max-width: 768px) {
        height: 8rem;
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

const TextBlock = styled.div`
    width: 620px;
    border: solid 3px #ffcc00;
    h2 {
        /* background-color: #fff;
        color: #ccc; */
    }
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;
const Subtitle = styled.p`
    color: #fff;
    opacity: 0.8;
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
            <Inner>
                {/* <TextBlock>
                    <h2>{title}</h2>
                    <Subtitle>{subtitle}</Subtitle>
                </TextBlock> */}
            </Inner>
        </Wrapper>
    );
};

export default TitleImage;
