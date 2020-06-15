import React from 'react';
import styled from 'styled-components';
import { Popup } from '../Popup';
import { ProjectObject } from '../../types/interfaces';
import { ProjectItem } from './ProjectItem';
import { ProjectDetail } from './ProjectDetail';
import ProjectCloseButton from './ProjectCloseButton';
import { Link, useRouteMatch, useLocation, useHistory } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const ProjectsContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 1200px;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 1rem auto;
    > * {
        /* margin: 2em 0; */
        /* padding-top: 56.25%; */
        border-radius: 20px;
        width: 48%;
        height: 280px;
    }
    /* <500px */
    @media screen and (max-width: 768px) {
        width: 90%;
        > * {
            width: 100%;
        }
        /* except last child, each other have a 3 rem margin */
        > *:not(:last-child) {
            margin-bottom: 3rem;
        }
    }
`;

const Projects = (props: any) => {
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
        <>
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
                    closeButton={<ProjectCloseButton></ProjectCloseButton>}
                    closeHandler={closePopupHandler}>
                    <ProjectDetail itemData={findItem(query.get('id'))} />
                </Popup>
            ) : (
                <></>
            )}
        </>
    );
};

export default Projects;
