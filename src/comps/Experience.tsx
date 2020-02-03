import React from 'react';
import { TimelineObject } from '../types/interfaces';
import { TimelineItem } from './TimelineItem';

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
