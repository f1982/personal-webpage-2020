import React from 'react';
import styled from 'styled-components';
import { TimelineLifeObject } from '../types/interfaces';

const LeftWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: linear-gradient(#efc854, #efc854) no-repeat;
    background-size: 20px 100%;
    background-position: 50% 50%;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        background: none;
        margin-bottom: 1rem;
    }
`;

const RightWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    background: linear-gradient(#f5c02e, #f5c02e) no-repeat;
    background-size: 20px 100%;
    background-position: 50% 50%;
    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
        background: none;
        margin-bottom: 1rem;
    }
`;

const LeftVertical = styled.div`
    width: 60%;
    text-align: right;
    box-sizing: border-box;
    h5 {
        margin: 0 0;
    }
    b {
        margin: 0 0;
    }
    p {
        margin: 0 0;
        margin-bottom: 1rem;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

const MiddleVertical = styled.div`
    width: 200px;
    /* background-color: #50e3c2; */
    color: #fff;
    margin: 0 1rem;

    @media screen and (max-width: 768px) {
        width: 100%;
        margin: 0;
    }
`;

const TimeHint = styled.div`
    font-size: 3rem;
    font-weight: bold;
    background-color: #f5c02e;
    /* border: 2px solid #39dbfa; */
    box-shadow: 6px 2px #39dbfa;
    border-radius: 40px;
    padding: 1rem 1rem;
`;

const RightVertical = styled.div`
    width: 50%;
    img {
        border-radius: 50%;
        width: 80px;
    }
`;

interface LifeItemProp {
    dir?: string;
    itemData?: TimelineLifeObject;
}

const TimelineItem = (props: LifeItemProp) => {
    console.log('props', props);
    const { dir, itemData } = props;
    const { start, title, subtitle, description } = itemData as TimelineLifeObject;
    return (
        <>
            {dir === 'left' ? (
                <LeftWrapper>
                    <LeftVertical>
                        <h5>{title}</h5>
                        <b>{subtitle}</b>
                        <p>{description}</p>
                    </LeftVertical>
                    <MiddleVertical style={{ textAlign: 'left' }}>
                        <TimeHint>
                            <i>{start}</i>
                        </TimeHint>
                    </MiddleVertical>
                    <RightVertical>
                        <img src='https://image.flaticon.com/icons/svg/147/147144.svg' />
                    </RightVertical>
                </LeftWrapper>
            ) : (
                <RightWrapper>
                    <LeftVertical style={{ textAlign: 'left' }}>
                        <h5>{title}</h5>
                        <b>{subtitle}</b>
                        <p>{description}</p>
                    </LeftVertical>
                    <MiddleVertical style={{ textAlign: 'right' }}>
                        <TimeHint>{start}</TimeHint>
                    </MiddleVertical>
                    <RightVertical></RightVertical>
                </RightWrapper>
            )}
        </>
    );
};

export default TimelineItem;
