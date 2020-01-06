import React from 'react'
import styled from 'styled-components'
import { TimelineObject, ProjectObject } from '../types/interfaces';
import { TimelineItem } from './TimelineItem';

interface ExperienceProp {
    data?: Array<TimelineObject>
}
const Experience = (props: any) => {
    return (
        <>
            <h3>Experience</h3>
            {
                props.data && props.data.map((item: TimelineObject) => {
                    return (
                        item.hidden ? null : <TimelineItem id="a" key={item.id} itemData={item}></TimelineItem>
                    );
                })
            }
        </>
    )
}

export {
    Experience
}