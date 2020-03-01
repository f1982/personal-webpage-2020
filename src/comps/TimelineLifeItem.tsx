import React from 'react';
import styled from 'styled-components';
import { TimelineLifeObject } from '../types/interfaces';

const LeftWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media screen and (max-width: 1200px) {
        flex-direction: column-reverse;
    }
`;

const RightWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    @media screen and (max-width: 1200px) {
        flex-direction: column-reverse;
    }
`;

const LeftVertical = styled.div`
    width: 50%;
    text-align: right;
    box-sizing: border-box;
    @media screen and (max-width: 1200px) {
        width: 100%;
    }
`;
const ItemTitle = styled.h4`
    /* margin: 0 0; */
`;
const ItemSubTitle = styled.h5`
    /* margin: 0 0; */
`;

const MiddleVertical = styled.div`
    width: 200px;
    background-color: #50e3c2;
    color: #fff;
    margin: 0 1rem;
    @media screen and (max-width: 1200px) {
        width: 100%;
        margin: 0;
    }
`;

const RightVertical = styled.div`
    width: 50%;
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
                        <ItemTitle>{title}</ItemTitle>
                        <ItemSubTitle>{subtitle}</ItemSubTitle>
                        <p>{description}</p>
                    </LeftVertical>
                    <MiddleVertical style={{ textAlign: 'left' }}>
                        <h1>{start}</h1>
                    </MiddleVertical>
                    <RightVertical></RightVertical>
                </LeftWrapper>
            ) : (
                <RightWrapper>
                    <LeftVertical style={{ textAlign: 'left' }}>
                        <ItemTitle>{title}</ItemTitle>
                        <ItemSubTitle>{subtitle}</ItemSubTitle>
                        <p>{description}</p>
                    </LeftVertical>
                    <MiddleVertical style={{ textAlign: 'right' }}>
                        <h1>{start}</h1>
                    </MiddleVertical>
                    <RightVertical></RightVertical>
                </RightWrapper>
            )}
        </>
    );
};

export default TimelineItem;
