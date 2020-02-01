import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { HashRouter as Router, Route } from 'react-router-dom';
import routes from './pages';
import Layout from './layouts/default';
import { RootState } from './reducers';

interface IAppProp {}
const App = (props: any) => {
    const [loadState, setLoadState] = useState('loading');

    /**
     * Load app data
     */
    useEffect(() => {
        // props.dispatch(loadAppData);
        props.syncAppConfig();
    }, []);

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Helmet titleTemplate='%s - Andy Cao personal website'>
                <meta name='description' content='A Opensource Website by React.js' />
            </Helmet>
            <Layout>
                <p>{JSON.stringify(props.a)}</p>
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
const mapStatesToProps = (rootState: any) => ({
    a:rootState.appConfig.settings
})

/**
 * 映射方法，这样 app view 里用 prop 就可以直接调用了
 * @param dispatch 
 */
const mapDispatchToProps = (dispatch: any) => ({
    syncAppConfig: dispatch.appConfig.syncConfig
});

export default connect(mapStatesToProps, mapDispatchToProps)(App);
