import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { TimelineObject } from '../types/interfaces';

interface TimelineItemProps {
    itemData: TimelineObject;
    id: string;
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
`;
const DateColumn = styled.div`
    flex-shrink: 1;
    width: 20%;
    padding-top: 50px;
    padding-right: 50px;
    text-align: right;
    display: inline-block;
`;
const ContentColumn = styled.div`
    flex-shrink: 0;
    width: 80%;
    display: inline-block;
    & h5 {
        margin: 0 0;
    }
    & ul {
        & li {
            font-weight: 800;
            margin: 2px 5px;
            word-wrap: break-word;
            word-break: normal;
        }
    }
`;

const TimelineItem = (props: TimelineItemProps) => {
    let { id, itemData } = props;
    return (
        <Wrapper>
            <DateColumn>
                {itemData.start}
                <br />
                {itemData.end}
            </DateColumn>
            <ContentColumn>
                <div style={{ paddingLeft: `2rem` }}>
                    <h5>{itemData.company}</h5>
                    <p><strong>{itemData.position}</strong></p>
                </div>
                <ul>
                    {itemData.desc &&
                        itemData.desc.map((desc, index) => {
                            return <li key={index}>{desc}</li>;
                        })}
                </ul>
            </ContentColumn>
        </Wrapper>
    );
};

export { TimelineItem };
