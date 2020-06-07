import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TitleImage from '../../comps/TitleImage';
import ProjectList from '../../comps/project/ProjectList';
import ProjectListGrid from '../../comps/project/ProjectListGrid';
import Submenu from '../../comps/SubMenu2';
import { Helmet } from 'react-helmet';
import { Link, Switch, Route, useRouteMatch, useParams } from 'react-router-dom';
import { SectionWide, SectionNarrow } from '../../layouts/default';

const ProjectCategory = (props: any) => {
    const params = useParams();
    let { category } = useParams();
    if (category === 'all' || category === 'game' || category === 'app') {
    } else {
        category = 'all';
    }
    console.log('category', category);
    return <ProjectListGrid data={props.data} category={category} />;
};

const imageURL = process.env.PUBLIC_URL + 'static/images/projects_img_bar.jpg';

const Projects = (props: any) => {
    const { syncProjects, items: projectItems } = props;

    const match = useRouteMatch();
    const submenuItems = [
        { id: 1, url: `${match.url}/all`, title: 'all', active: true },
        { id: 2, url: `${match.url}/app`, title: 'app' },
        { id: 3, url: `${match.url}/game`, title: 'game' }
    ];

    useEffect(() => {
        syncProjects();
    }, [syncProjects]);

    return (
        <>
            <Helmet>
                <title>Projects</title>
            </Helmet>
            <SectionWide>
                <TitleImage title='Projects' subtitle='My Passions & I Love.' backgroundImageURL={imageURL} />
            </SectionWide>
            {props.loadedState === 'loaded' ? (
                <>
                    <SectionNarrow>
                        <Switch>
                            <Route path={`${match.path}/:category`}>
                                <ProjectCategory data={projectItems} />
                            </Route>
                            <Route path={`${match.path}`}>
                                <ProjectCategory data={projectItems} />
                            </Route>
                        </Switch>
                    </SectionNarrow>
                </>
            ) : (
                <p>loading</p>
            )}
        </>
    );
};

export default Projects;
