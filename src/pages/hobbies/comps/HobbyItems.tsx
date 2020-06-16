import React from 'react';
import styled from 'styled-components';
import { SingleButton } from '../../../comps/SingleButton';

const MaxContentWidth: number = 900;
const MobileScreeWidth: number = 768;

const ItemWrapper = styled.section`
    width: 100%;
`;

const ItemWrapperBG = styled.section`
    width: 100%;
    background-color: #333;
`;

const Row1200 = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-flow: row;
    margin: ${(props) => props.theme.baseLine * 2}rem auto;
    /* background-color: #ffcc00; */

    @media screen and (min-width: ${MaxContentWidth}px) {
        width: 1200px;
    }
    @media screen and (max-width: 750px) {
        flex-flow: column;
    }
`;

const Row12001 = styled.div`
    /* display: flex; */
    width: 100%;
    height: 100%;
    /* flex-flow: column; */
    margin: ${(props) => props.theme.baseLine * 2}rem auto;
    /* background-color: #ffcc00; */
    text-align: center;
    color: #fff;

    @media screen and (min-width: 1200px) {
        width: 1200px;
    }
`;

const LeftSide = styled.div`
    width: 40%;
    /* border: 1px solid #ff0000; */
    box-sizing: border-box;
    img {
        width: 100%;
        height: auto;
        margin: ${(props) => props.theme.baseLine}rem auto;
    }
    @media screen and (max-width: 750px) {
        width: 100%;
    }
`;
const RightSide = styled.div`
    width: 60%;
    padding: ${(props) => props.theme.baseLine}rem;
    /* border: 1px solid #ff0000; */
    box-sizing: border-box;
    @media screen and (max-width: 750px) {
        width: 100%;
    }
`;

interface HobbyItemProp {
    title: string;
    image?: string;
    introduction: string;
    link?: string;
}

const LeftImageItem = (props: HobbyItemProp) => {
    return (
        <ItemWrapper>
            <Row1200>
                <LeftSide>
                    <img src={props.image}></img>
                </LeftSide>
                <RightSide>
                    <h3>{props.title}</h3>
                    <p>{props.introduction}</p>
                    {props.link ? <SingleButton>MORE</SingleButton> : null}
                </RightSide>
            </Row1200>
        </ItemWrapper>
    );
};

const RightImageItem = (props: HobbyItemProp) => {
    return (
        <ItemWrapper>
            <Row1200>
                <RightSide>
                    <h3>{props.title}</h3>
                    <p>{props.introduction}</p>
                    {props.link ? <SingleButton>MORE</SingleButton> : null}
                </RightSide>
                <LeftSide>
                    <img src={props.image}></img>
                </LeftSide>
            </Row1200>
        </ItemWrapper>
    );
};

const HobbyTextItem = (props: HobbyItemProp) => {
    return (
        <ItemWrapperBG>
            <Row12001>
                <h3>{props.title}</h3>
                <p>{props.introduction}</p>
                {props.link ? <SingleButton>MORE</SingleButton> : null}
            </Row12001>
        </ItemWrapperBG>
    );
};

export { LeftImageItem, RightImageItem, HobbyTextItem };
