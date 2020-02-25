import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { HashRouter as Router, Route } from 'react-router-dom';
import routes from './pages';
import Layout from './layouts/default';

const App = (props: any) => {
    const { syncAppConfig, settings } = props;

    useEffect(() => {
        syncAppConfig();
    }, [syncAppConfig]);

    useEffect(() => {
        console.log('a loaded', settings);
    }, [settings]);

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

const mapStatesToProps = (rootState: any) => ({
    settings: rootState.appConfig.settings
});

const mapDispatchToProps = (dispatch: any) => ({
    syncAppConfig: dispatch.appConfig.syncConfig
});

export default connect(mapStatesToProps, mapDispatchToProps)(App);
