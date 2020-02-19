import React from 'react';
import styled from 'styled-components';
import { Popup } from '../Popup';
import { ProjectObject } from '../../types/interfaces';
import { ProjectItem } from './ProjectItem';
import { ProjectDetail } from './ProjectDetail';
import ProjectCloseButton from './ProjectCloseButton';

const ProjectsContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 100%;
    margin: 1rem auto;
    @media screen and (min-width: 1200px) {
        width: 1200px;
    }
    > * {
        margin: 2em 0;
        height: 250px;
    }
`;

interface ProjectProp {
    category: string;
    data: Array<ProjectObject>;
}

const Projects = (props: ProjectProp) => {
    console.log('projects props', props);

    let { data: items, category } = props;

    const [showedProject, setShowedProject] = React.useState<any>(null);

    const closePopupHandler = (event: React.MouseEvent) => {
        console.log('close popup');
        setShowedProject(null);
    };

    const tapProjectHandler = (item: ProjectObject) => {
        setShowedProject(item);
    };

    let filtered: Array<ProjectObject>;
    if (category !== '' && category !== 'all') {
        filtered = items.filter(item => item.type === category);
    } else {
        filtered = items;
    }

    return (
        <>
            <ProjectsContainer id='projects'>
                {filtered.map((item: ProjectObject) => {
                    return (
                        <ProjectItem
                            name={item.title}
                            key={item.id}
                            itemData={item}
                            callback={tapProjectHandler}></ProjectItem>
                    );
                })}
            </ProjectsContainer>
            {showedProject !== null ? (
                <Popup
                    id='test'
                    content={<ProjectDetail itemData={showedProject} />}
                    closeButton={<ProjectCloseButton></ProjectCloseButton>}
                    closeHandler={closePopupHandler}></Popup>
            ) : null}
        </>
    );
};

export default Projects;
