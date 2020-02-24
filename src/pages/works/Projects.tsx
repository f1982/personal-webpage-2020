import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TitleImage from '../../comps/TitleImage';
import ProjectList from '../../comps/project/Projects';
import SubMenu from '../../comps/SubMenu';
import { Helmet } from 'react-helmet';

const SpaceBar = styled.div`
    height: 2rem;
`;

const Projects = (props: any) => {
    const { syncProjects, items: projectItems } = props;
    const [currentProjectCategory, setCurrentProjectCategory] = useState('all');
    const categoryMenuItems = [
        { id: 1, title: 'all', active: true },
        { id: 2, title: 'app' },
        { id: 3, title: 'game' }
    ];
    useEffect(() => {
        syncProjects();
    }, [syncProjects]);

    useEffect(() => {
        console.log('apiLoadingState changed');
    }, [props.apiLoadingState]);

    const imageURL = process.env.PUBLIC_URL + 'static/images/projects_img_bar.jpg';

    return (
        <>
            <Helmet>
                <title>Projects</title>
            </Helmet>

            <TitleImage title='Projects' subtitle='My Passions & I Love.' backgroundImageURL={imageURL}></TitleImage>
            <SubMenu
                items={categoryMenuItems}
                callback={(item: any) => {
                    console.log('item:', item);
                    setCurrentProjectCategory(item.title);
                }}
            />
            <SpaceBar></SpaceBar>
            <ProjectList data={projectItems} category={currentProjectCategory}></ProjectList>
        </>
    );
};

export default Projects;
