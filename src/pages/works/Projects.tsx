import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TitleImage from '../../comps/TitleImage';
import ProjectList from '../../comps/project/ProjectList';
import SubMenu from '../../comps/SubMenu';
import { Helmet } from 'react-helmet';
import { Link, Switch, Route, useRouteMatch, useParams } from 'react-router-dom';

const ProjectCategory = (props: any) => {
    const params = useParams();
    let { category } = useParams();
    if (category === 'all' || category === 'game' || category === 'app') {
    } else {
        category = 'all';
    }
    console.log('category', category);
    return <ProjectList data={props.data} category={category}></ProjectList>;
};

const SpaceBar = styled.div`
    height: 2rem;
`;

const imageURL = process.env.PUBLIC_URL + 'static/images/projects_img_bar.jpg';
const categoryMenuItems = [
    { id: 1, title: 'all', active: true },
    { id: 2, title: 'app' },
    { id: 3, title: 'game' }
];

const Projects = (props: any) => {
    const { syncProjects, items: projectItems } = props;

    let match = useRouteMatch();

    useEffect(() => {
        syncProjects();
    }, [syncProjects]);

    return (
        <>
            <Helmet>
                <title>Projects</title>
            </Helmet>
            <TitleImage title='Projects' subtitle='My Passions & I Love.' backgroundImageURL={imageURL}></TitleImage>
            {props.loadedState === 'loaded' ? (
                <>
                    {categoryMenuItems.map((item: any, index: number) => (
                        <nav key={index}>
                            <Link to={`${match.url}/${item.title}`}>{item.title}</Link>
                            <span> </span>
                        </nav>
                    ))}
                    <h1>{props.loadedState}</h1>
                    <Switch>
                        <Route path={`${match.path}/:category`}>
                            <ProjectCategory data={projectItems} />
                        </Route>
                        <Route path={`${match.path}`}>
                            <ProjectCategory data={projectItems} />
                        </Route>
                    </Switch>
                </>
            ) : (
                <p>loading</p>
            )}
        </>
    );
};

export default Projects;
