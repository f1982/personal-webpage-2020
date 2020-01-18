import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import TitleImage from '../../comps/TitleImage';

import { loadProjects } from './../../actions/works.action';
import Projects from '../../comps/Projects';
import SubMenu from '../../comps/SubMenu';

const SpaceBar = styled.div`
    height: 2rem;
`;
interface WorksProp {}

const Works = (props: any) => {
    console.log('Works props', props);
    const { dispatch } = props;
    const [currentProjectCategory, setCurrentProjectCategory] = useState('all');
    const categoryMenuItems = [
        { id: 1, title: 'all', active: true },
        { id: 2, title: 'app' },
        { id: 3, title: 'game' }
    ];
    useEffect(() => {
        //load api
        console.log('props.items', props.items);
        dispatch(loadProjects);
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

/**
 *  从 RootState 里提取出来这个 Component 需要用的变量
 *  这里的 State 就是数据（状态）的意思，不要混淆
 *
 * @param rootState
 */
const mapStatesToProps = (rootState: any) => {
    const { items, apiLoadingState, currentCategory } = rootState.worksReducer;
    return {
        apiLoadingState,
        currentCategory,
        items
    };
};

export default connect(mapStatesToProps)(Works);
