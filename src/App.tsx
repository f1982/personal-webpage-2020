import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ReactGA from 'react-ga';
import routes from './pages';
import Layout from './layouts/default';
import Welcome from './pages/welcome';
import NoMatchPage from './pages/NoMatchPage';
import { SettingContext } from './Settings';
// import ClosurePage from './pages/closure/Closure';
// import log from './utils/loglevel-middleware';

//Initialize Google Analytic
ReactGA.initialize('UA-171033058-1');

const history = require('history').createBrowserHistory();
history.listen((location: any) => {
    ReactGA.set({ page: window.location.hash });
    ReactGA.pageview(window.location.hash);
});

const App: React.FunctionComponent = (props: any) => {
    const { syncAppConfig } = props;

    useEffect(() => {
        ReactGA.pageview('/');
        syncAppConfig();
    }, [syncAppConfig]);

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Helmet titleTemplate='%s - Andy Cao Personal Website'>
                <meta name='description' content='An opensource personal website by React' />
            </Helmet>
            <SettingContext.Provider value={{ contentWidth: 950, smallDeviceWidth: 768 }}>
                <Switch>
                    {/* <Route path='*' component={ClosurePage} /> */}
                    <Route path='/welcome' component={Welcome} />
                    {routes.map((route) => (
                        <Layout key={route.path} path={route.path} exact={route.exact} component={route.component} />
                    ))}
                    <Redirect path='/' exact to='/welcome' />
                    <Route path='*' component={NoMatchPage} />
                </Switch>
            </SettingContext.Provider>
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
