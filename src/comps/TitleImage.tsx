import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 39rem;
    color: #fff;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left;
`;

const Inner = styled.div`
    width: 100%;
    margin: 0rem auto;
    padding: 2rem;
    box-sizing: border-box;
    @media screen and (min-width: 1200px) {
        /* css-code; */
        width: 1200px;
    }
`;

const TextBlock = styled.div`
    width: 620px;
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
                <TextBlock>
                    <h2>{title}</h2>
                    <Subtitle>{subtitle}</Subtitle>
                </TextBlock>
            </Inner>
        </Wrapper>
    );
};

export default TitleImage;
