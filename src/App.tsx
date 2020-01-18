import React, { useState, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Helmet } from 'react-helmet';
import { HashRouter as Router, Route } from 'react-router-dom';
import routes from './pages';
import Layout from './layouts/default';
import loadAppData from './actions/app.action';
import { RootState } from './reducers';

interface IAppProp {}
const App = (props: any) => {
    const [loadState, setLoadState] = useState('loading');

    /**
     * Load app data
     */
    useEffect(() => {
        props.dispatch(loadAppData);
    }, []);

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Helmet titleTemplate='%s - Andy Cao personal website'>
                <meta name='description' content='A Opensource Website by React.js' />
            </Helmet>
            <Layout>
                {routes.map(route => (
                    <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
                ))}
            </Layout>
        </Router>
    );
};

/**
 *  从 RootState 里提取出来这个 Component 需要用的变量
 *  这里的 State 就是数据（状态）的意思，不要混淆
 *  如果需要把 某个 reduer 里的 state（数据格式）映射到 props 里使用，才进行 connect 的操作
 * @param rootState
 */
const mapStatesToProps = (rootState: RootState) => {
    //这里只是为了读取数据，然后把 dispatch 这个参数传递到 props 里
    return {};
};

export default connect(mapStatesToProps)(App);
