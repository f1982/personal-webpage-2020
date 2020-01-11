import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import axios from 'axios';

import { HashRouter as Router, Route } from 'react-router-dom';
import { TimelineObject, ProjectObject, MenuItemObject } from './types/interfaces';

import { GlobalStyle, myTheme } from './theme';
import routes from './pages';
import Layout from './layouts/default';

import { FaWindowMaximize } from 'react-icons/fa';

import { Menu } from './comps/Menu';
import { Experience } from './comps/Experience';
import { Links } from './comps/Links';
import { Skills } from './comps/Skills';

import { connect } from 'react-redux';

const menuData: MenuItemObject[] = [
    { name: 'Home', link: '', index: 0 },
    { name: 'About', link: '#header', index: 1 },
    { name: 'Works', link: '#projects', index: 2 },
    { name: 'Contact', link: '', index: 3 }
];

// const EXAMPLE_NAMES = Object.keys(EXAMPLES) as Examples[];

const App = (props: any) => {
    console.log('props', props);
    // Use state to keep track of the current displayed example component
    const [example, setExample] = useState<String>('Counter');
    const [count, setCount] = useState<Number>(20);

    const [dataSource, setDataSource] = useState<any>(null);
    const [projects, setProjects] = useState<ProjectObject[]>([]);
    const [timelineItems, setTimelineItems] = useState<TimelineObject[]>([]);

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <ThemeProvider theme={myTheme}>
                {dataSource === null ? (
                    <Layout>
                        {routes.map(route => (
                            <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
                        ))}
                    </Layout>
                ) : (
                    <>
                        <Skills category='Program Language' data={dataSource['skill']['program']} />
                        <Links category='SNS' data={dataSource['links']['sns']} />
                        <Links category='Friends' data={dataSource['links']['friends']} />
                        <Menu data={menuData}></Menu>
                        <Experience data={dataSource.timelines['experience']}></Experience>
                    </>
                )}
            </ThemeProvider>
        </Router>
    );
};

//This function is used to connect the props property to reducer
//这里用来确定当前视图是否关联某个 reducer 里的 state(就是数值)
//通常应试是只关联自己关注的那个 state
const mapStatesToProps = (rootState: any) => {
    const { counter, projects } = rootState;
    return {
        counter,
        projects
    };
};
// export default connect(mapStatesToProps)(App);
export default App;
