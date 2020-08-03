import React from 'react';
import styled from 'styled-components';
import { TimelineObject } from '../../types/interfaces';

import TimeBubble from './TimeBubble';

interface TimelineItemProps {
    itemData: TimelineObject;
    id: string;
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    /* justify-content: center; */
    align-items: center;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;
const DateColumn = styled.div`
    /* flex-shrink: 1; */
    /* flex: 1; */
    padding-right: 2rem;
    text-align: right;
    width: 380px;
    height: 100%;
    display: inline-block;
    justify-content: space-between;
`;
const ContentColumn = styled.div`
    /* flex-shrink: 0; */
    flex: 1;
    width: 100%;
    display: inline-block;
    & h5 {
        /* margin: 0 0; */
    }
    & ul {
        width: 100%;
        padding: 1.5rem;
        & li {
            font-weight: 800;
            /* margin: 2px 5px; */
            word-wrap: break-word;
            word-break: normal;
        }
    }
`;

const VerticalBar = styled.div`
    display: inline-block;
    height: 160px;
    border-radius: 0.75rem;
    width: 0.75rem;
    background-color: #77b1f6;

    @media screen and (max-width: 768px) {
        height: 0.75rem;
    }
`;

const TimelineItem = (props: TimelineItemProps) => {
    let { itemData } = props;

    const dateString = itemData.start + ' - ' + itemData.end;
    return (
        <Wrapper>
            <DateColumn>
                <div>
                    <TimeBubble direction='right'>{dateString}</TimeBubble>
                </div>
                <h5>{itemData.company}</h5>
                <div>
                    <p>
                        {itemData.position.map((item: any) => {
                            return item + ', ';
                        })}
                    </p>
                </div>
            </DateColumn>
            <VerticalBar />
            <ContentColumn>
                <div style={{ paddingLeft: `2rem` }}></div>
                <ul>
                    {itemData.desc.map((desc, index) => {
                        return <li key={index}>{desc}</li>;
                    })}
                </ul>
            </ContentColumn>
        </Wrapper>
    );
};

export { TimelineItem };
