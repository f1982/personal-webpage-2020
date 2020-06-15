import React from 'react';
import styled from 'styled-components';
import { Popup } from '../Popup';
import { ProjectObject } from '../../types/interfaces';
import ProjectItem from './ProjectItemGrid';
import { ProjectDetail } from './ProjectDetail';
import ProjectCloseButton from './ProjectCloseButton';
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
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`;

const ProjectGrid = (props: any) => {
    let history = useHistory();
    let { path, url } = useRouteMatch();
    let query = useQuery();
    // console.log('query', query.get('id'));
    let { data: items, category } = props;

    const findItem = (id: any) => {
        return items.find((item: ProjectObject) => item.id === parseInt(id));
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
                <Popup id='test' closeButton={<ProjectCloseButton />} closeHandler={closePopupHandler}>
                    <ProjectDetail itemData={findItem(query.get('id'))} />
                </Popup>
            ) : null}
        </Wrapper>
    );
};

export default ProjectGrid;
