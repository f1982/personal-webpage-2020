import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import TitleImage from '../../comps/TitleImage';

import { loadProjects } from './../../actions/works.action';
import { Projects } from '../../comps/Projects';
import SubMenu from '../../comps/SubMenu';

const SpaceBar = styled.div`
    height: 2rem;
`
interface WorksProp {}

const Works = (props: any) => {
    console.log('Works props', props);
    const { dispatch } = props;
    const categoryMenuItems = [
        { id: 1, title: 'All', active: true },
        { id: 2, title: 'Mobile Apps' },
        { id: 3, title: 'Games' }
    ];
    useEffect(() => {
        //load api
        console.log('props.items', props.items);
        dispatch(loadProjects);
    }, []);

    useEffect(() => {
        console.log('apiLoadingState changed');
    }, [props.apiLoadingState]);

    const imageURL = process.env.PUBLIC_URL + 'static/images/project_title.png';

    return (
        <>
            <TitleImage title='Projects' subtitle='My Passions & I Love.' backgroundImageURL={imageURL}></TitleImage>
            <SubMenu items={categoryMenuItems} />
            <SpaceBar></SpaceBar>
            <Projects data={props.items}></Projects>
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
