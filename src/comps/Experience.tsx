import React from 'react';
import styled from 'styled-components';
import { TimelineObject, ProjectObject } from '../types/interfaces';
import { TimelineItem } from './TimelineItem';

const SpaceBar = styled.div`
    height: 2rem;
`;
interface ExperienceProp {
    data?: Array<TimelineObject>;
}

const Experience = (props: any) => {
    return (
        <>
            {props.data &&
                props.data.map((item: TimelineObject) => {
                    return item.hidden ? null : <TimelineItem id='a' key={item.id} itemData={item} />;
                })}
        </>
    );
};

export { Experience };
