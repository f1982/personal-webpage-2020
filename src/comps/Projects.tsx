import React from 'react';
import styled from 'styled-components';
import { Popup } from './Popup';
import { ProjectObject } from '../types/interfaces';
import { ProjectItem } from './ProjectItem';
import { ProjectDetail } from './ProjectDetail';

const ProjectsContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 1rem auto;
    /* @media screen and (max-width: 600px) {
        width: 760px;
        background-color:#eee;
    } */
`;

interface ProjectProp {
    category: string;
    data: Array<ProjectObject>;
}

const Projects = (props: ProjectProp) => {
    console.log('projects props', props);

    let { data: items, category } = props;
    const [popupClosed, setPopupClosed] = React.useState(true);

    const [showedProject, setShowedProject] = React.useState<any>(null);
    //Only popupClosed variable change, this callback will be fired
    React.useEffect(() => {
        console.log('popupClosed changed...');
    }, [popupClosed]);

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
    console.log('filtered', filtered);

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
                    closeHandler={closePopupHandler}></Popup>
            ) : null}
        </>
    );
};

export default Projects;
