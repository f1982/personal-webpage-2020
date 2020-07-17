import React from 'react';
import TitleImage from '../../comps/MediaBanner';
import ProjectListGrid from '../../comps/project/ProjectListGrid';
import { Helmet } from 'react-helmet';
import { Switch, Route, useRouteMatch, useParams } from 'react-router-dom';
import { SectionWide, SectionNarrow } from '../../layouts/default';

const ProjectCategory = (props: any) => {
    let { category } = useParams();
    if (!category) {
        category = 'all';
    }
    return <ProjectListGrid data={props.data} category={category} />;
};

const imageURL = process.env.PUBLIC_URL + 'static/images/image-banner-projects.jpg';
const videoURL = process.env.PUBLIC_URL + 'static/videos/coding.mp4';

const Projects = (props: any) => {
    const { projects } = props;

    const match = useRouteMatch();
    // const submenuItems = [
    //     { id: 1, url: `${match.url}/all`, title: 'all', active: true },
    //     { id: 2, url: `${match.url}/app`, title: 'app' },
    //     { id: 3, url: `${match.url}/game`, title: 'game' }
    // ];

    return (
        <>
            <Helmet>
                <title>Projects</title>
            </Helmet>
            <SectionWide>
                <TitleImage imageURL={imageURL} videoURL={videoURL} />
            </SectionWide>
            <div style={{ textAlign: `center`, marginTop: `3rem` }}>
                <h3>Projects</h3>
                <p>
                    This is part of the project I participated in, and there are some projects that I have not organized
                    and listed.
                </p>
            </div>
            <SectionNarrow>
                <Switch>
                    <Route path={`${match.path}/:category`}>
                        <ProjectCategory data={projects} />
                    </Route>
                    <Route path={`${match.path}`}>
                        <ProjectCategory data={projects} />
                    </Route>
                </Switch>
            </SectionNarrow>
        </>
    );
};

export default Projects;
