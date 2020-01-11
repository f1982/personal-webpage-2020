import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { loadProjects  } from './../../actions/works.action';
import { Projects } from './comps/Projects';
interface WorksProp {}

const Works = (props: any) => {
    console.log('Works props', props);
    const { dispatch } = props;
    useEffect(() => {
        //load api
        console.log('props.items', props.items);
        dispatch(loadProjects);
    }, []);

    useEffect(() => {
        console.log('apiLoadingState changed');
    }, [props.apiLoadingState]);
    return (
        <>
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
    console.log('rootState', rootState);
    const { items, apiLoadingState, currentCategory } = rootState.worksReducer;
    return {
        apiLoadingState,
        currentCategory,
        items
    };
};

export default connect(mapStatesToProps)(Works);
