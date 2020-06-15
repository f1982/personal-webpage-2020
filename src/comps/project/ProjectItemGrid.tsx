import React from 'react';
import styled from 'styled-components';
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
    /* box-sizing: border-box; */
    transition: 0.3s;

    &:hover {
        border-radius: 2rem;
        box-shadow: 0px 20px 20px 3px rgba(0, 0, 0, 0.5);
    }
`;

const CardImage = styled.div`
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 160px;
    margin: 0.5rem 1rem;

    > img {
        width: 100%;
        height: 330px;
        object-fit: cover;
        border-radius: 2rem;
    }
`;

const CardContent = styled.div`
    margin: 0.5rem 1rem;
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
                <h5 style={{ margin: `0.5rem` }}>{props.itemData.title}</h5>
                <p style={{ textAlign: `justify` }}>{props.itemData.description}</p>
            </CardContent>
        </Wrapper>
    );
};

export default ProjectItem;
