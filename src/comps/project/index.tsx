import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Popup } from '../common/Popup';
import { ProjectObject } from '../../types/interfaces';
import ProjectItem from './ProjectCard';
import { ProjectDetail } from './ProjectDetail';
import { ProjectCloseButton } from '../common/Buttons';
import { Link, useRouteMatch, useLocation, useHistory } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Wrapper = styled.section`
    width: 100%;
    margin: 1.5rem auto;
`;

const ProjectsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    display: grid;
    grid-gap: 32px;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`;

const getPopupContainerWidth = () => {
    if (window.innerWidth < 768) {
        return '100%';
    } else {
        return '60%';
    }
};

const getPopupContainerHeight = () => {
    if (window.innerWidth < 768) {
        return '96%';
    } else {
        return '80%';
    }
};

interface PropsType {
    data: any[];
    eventHandler?: Function;
    type?: string;
    top?: number;
}

const findItem = (items: any[], id: string): ProjectObject => {
    return items.find((item: ProjectObject) => {
        return item.id === id;
    });
};

const ProjectGrid = (props: PropsType) => {
    let history = useHistory();
    let { url } = useRouteMatch();
    let query = useQuery();
    let { data: items, eventHandler, type = 'all', top = 0 } = props;

    const [projectItemData, setProjectItemData] = useState<ProjectObject | null>();
    const [projectData, setProjectData] = useState<ProjectObject[]>([]);

    useEffect(() => {
        if (query.get('id')) {
            let itemId: string = query.get('id') as string;
            let pd = findItem(items, itemId);
            if (pd) setProjectItemData(pd);
            // console.log('set project Item Data', projectItemData);
            if (eventHandler && projectItemData) {
                eventHandler(projectItemData.title);
            }
        }
        // eslint-disable-next-line
    }, [props.data, query.get('id')]);

    //filter the array with type
    useEffect(() => {
        let filtered: ProjectObject[];
        if (type !== '' && type !== 'all') {
            filtered = items.filter((item: ProjectObject) => {
                return item.type === type && item.state === 'release';
            });
        } else {
            filtered = items;
        }
        if (top > 0) {
            filtered = filtered.slice(0, top);
        }
        setProjectData(filtered);
    }, [items, type, top]);

    /**
     * Close popup panel
     *
     * @param event
     */
    const closePopupHandler = (event: React.MouseEvent) => {
        history.goBack();
        setProjectItemData(null);
    };

    return (
        <Wrapper>
            <ProjectsContainer id='projects'>
                {projectData.map((item: ProjectObject) => {
                    return (
                        <Link key={item.id} to={`${url}?id=${item.id}`}>
                            <ProjectItem key={item.id} name={item.title} itemData={item} />
                        </Link>
                    );
                })}
            </ProjectsContainer>
            {projectItemData ? (
                <Popup
                    id={projectItemData.id}
                    containerWidth={getPopupContainerWidth()}
                    containerHeight={getPopupContainerHeight()}
                    closeButton={<ProjectCloseButton />}
                    closeHandler={closePopupHandler}>
                    <ProjectDetail itemData={projectItemData} />
                </Popup>
            ) : null}
        </Wrapper>
    );
};

export default ProjectGrid;
