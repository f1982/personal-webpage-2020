import React from 'react';
import styled from 'styled-components';
import { Popup } from '../Popup';
import { ProjectObject } from '../../types/interfaces';
import ProjectItem from './ProjectCard';
import { ProjectDetail } from './ProjectDetail';
import { ProjectCloseButton } from '../Buttons';
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
const ProjectGrid = (props: any) => {
    let history = useHistory();
    let { url } = useRouteMatch();
    let query = useQuery();
    let { data: items, category, top = 0 } = props;

    const findItem = (id: string) => {
        return items.find((item: ProjectObject) => item.id === id);
    };

    /**
     * Close popup panel
     * @param event
     */
    const closePopupHandler = (event: React.MouseEvent) => {
        history.goBack();
    };

    //filter the array with category
    let filtered: Array<ProjectObject>;
    if (category !== '' && category !== 'all') {
        filtered = items.filter((item: ProjectObject) => item.type === category);
    } else {
        filtered = items;
    }
    //Only show released project
    filtered = filtered.filter((item: ProjectObject) => item.state === 'release');

    if (top > 0) {
        filtered = filtered.slice(0, top);
    }

    //return views
    return (
        <Wrapper>
            <ProjectsContainer id='projects'>
                {filtered.map((item: ProjectObject) => {
                    return (
                        <Link key={item.id} to={`${url}?id=${item.id}`}>
                            <ProjectItem key={item.id} name={item.title} itemData={item} />
                        </Link>
                    );
                })}
            </ProjectsContainer>
            {query.get('id') ? (
                <Popup
                    id='test'
                    containerWidth={getPopupContainerWidth()}
                    containerHeight={getPopupContainerHeight()}
                    closeButton={<ProjectCloseButton />}
                    closeHandler={closePopupHandler}>
                    <ProjectDetail itemData={findItem(query.get('id') as string)} />
                </Popup>
            ) : null}
        </Wrapper>
    );
};

export default ProjectGrid;
