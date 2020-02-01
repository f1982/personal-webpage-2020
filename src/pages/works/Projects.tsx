import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TitleImage from '../../comps/TitleImage';

import Projects from '../../comps/project/Projects';
import SubMenu from '../../comps/SubMenu';

const SpaceBar = styled.div`
    height: 2rem;
`;
interface WorksProp {}

const Works = (props: any) => {
    const [currentProjectCategory, setCurrentProjectCategory] = useState('all');
    const categoryMenuItems = [
        { id: 1, title: 'all', active: true },
        { id: 2, title: 'app' },
        { id: 3, title: 'game' }
    ];
    useEffect(() => {
        props.syncProjects();
    }, []);

    useEffect(() => {
        console.log('apiLoadingState changed');
    }, [props.apiLoadingState]);

    const imageURL = process.env.PUBLIC_URL + 'static/images/projects_img_bar.jpg';

    return (
        <>
            <TitleImage title='Projects' subtitle='My Passions & I Love.' backgroundImageURL={imageURL}></TitleImage>
            <SubMenu
                items={categoryMenuItems}
                callback={(item: any) => {
                    console.log('item:', item);
                    setCurrentProjectCategory(item.title);
                }}
            />
            <SpaceBar></SpaceBar>
            <Projects data={props.items} category={currentProjectCategory}></Projects>
        </>
    );
};

export default Works;
