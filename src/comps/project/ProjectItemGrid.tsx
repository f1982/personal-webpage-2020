import React from 'react';
import styled from 'styled-components';
// import { TechnologyStackItem } from './TechnologyStack';
import { ProjectObject } from '../../types/interfaces';

interface ProjectItemProp {
    name?: string;
    itemData: ProjectObject;
}

const Wrapper = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    flex-basis: 400px;
    flex-grow: 1;
    min-width: 400px;
`;

const CardImage = styled.div`
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 150px;
    margin: 10px;
    > img {
        width: 100%;
        object-fit: cover;
    }
`;
const CardContent = styled.div`
    margin: 10px;
    flex-shrink: 1;
    flex-grow: 1;
    flex-basis: 60%;
`;

/**
 * Project item
 *
 * @param props
 */
const ProjectItem = (props: ProjectItemProp) => {
    return (
        <Wrapper>
            <CardImage>
                <img src={props.itemData.cover} />
            </CardImage>
            <CardContent>
                <h4>{props.itemData.title}</h4>
                {props.itemData.description}
            </CardContent>
        </Wrapper>
    );
};

export default ProjectItem;
