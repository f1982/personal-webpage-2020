import React from 'react';
import { TimelineObject, TimelineLifeObject } from '../types/interfaces';
import TimelineLifeItem from './TimelineLifeItem';

interface TimelineLifeProp {
    data: TimelineLifeObject[];
}
const TimelineLife = (props: TimelineLifeProp) => {
    const { data } = props;
    return (
        <>
            {data &&
                data.map((item: TimelineLifeObject, index: number) => {
                    console.log('item', item);
                    let dir;
                    if (index % 2 === 0) {
                        dir = 'left';
                    } else {
                        dir = 'right';
                    }
                    return item.hidden ? null : <TimelineLifeItem dir={dir} key={index} itemData={item} />;
                })}
        </>
    );
};

export default TimelineLife;
