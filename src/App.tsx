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
import ClosurePage from './pages/closure/Closure';
// import log from './utils/loglevel-middleware';

//Initialize Google Analytic
ReactGA.initialize('UA-171033058-1');

const history = require('history').createBrowserHistory();
history.listen((location: any) => {
    ReactGA.set({ page: window.location.hash });
    ReactGA.pageview(window.location.hash);
});

// set this variable to true to close the whole website
const websiteClosed = false;
const pageTitleTemplate = `%s | Andy's Personal Website`;

interface IProps {
    syncAppConfig: Function;
}

const App: React.FC<IProps> = ({ syncAppConfig }) => {

    useEffect(() => {
        ReactGA.pageview('/');
        syncAppConfig();
    }, [syncAppConfig]);

    return (
        <>
            {
                websiteClosed ?
                    <ClosurePage />
                    :
                    <Router basename={process.env.PUBLIC_URL}>
                        <Helmet titleTemplate={pageTitleTemplate} >
                            <meta name="description" content="Andy is a software developer, he loves to make mobile apps, website and games." />
                        </Helmet>
                        <SettingContext.Provider value={{ contentWidth: 950, smallDeviceWidth: 768 }}>
                            <Switch>
                                <Route path='/welcome' component={Welcome} />
                                {
                                    routes.map((route) => (
                                        <Layout key={route.path} path={route.path} exact={route.exact} component={route.component} />
                                    ))
                                }
                                <Redirect path='/' exact to='/welcome' />
                                <Route component={NoMatchPage} />
                            </Switch>
                        </SettingContext.Provider>
                    </Router >
            }
        </>

    );
};

const mapStatesToProps = (rootState: any) => ({
    settings: rootState.appConfig.settings
});

const mapDispatchToProps = (dispatch: any) => ({
    syncAppConfig: dispatch.appConfig.syncConfig
});

export default connect(mapStatesToProps, mapDispatchToProps)(App);
