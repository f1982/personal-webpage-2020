import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ReactGA from 'react-ga';
import routes from './router';
import Layout from './layouts/default';
import Header from './comps/common/Header';
import Footer from './comps/common/Footer';
import Welcome from './pages/welcome';
import PageNotFound from './pages/404';
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
  settings?: any;
  loadedState?: boolean;
}

const App: React.FC<IProps> = ({ syncAppConfig, settings, loadedState }) => {
  useEffect(() => {
    ReactGA.pageview('/');
    syncAppConfig();
  }, [syncAppConfig]);

  return (
    <>
      {websiteClosed ? (
        <ClosurePage />
      ) : (
        <>
          <Helmet titleTemplate={pageTitleTemplate}>
            <meta
              name='description'
              content='Andy is a software developer, he loves to make mobile apps, website and games.'
            />
          </Helmet>
          <Router>
            <SettingContext.Provider value={{ contentWidth: 950, smallDeviceWidth: 768 }}>
              <Switch>
                <Route path='/welcome' component={Welcome} />
                <Redirect path='/' exact to='/welcome' />
                <Route path='/404' component={PageNotFound} />

                <Route>
                  <Layout header={Header} footer={Footer}>
                    <Switch>
                      {routes.map(({ path, exact, component }) => (
                        <Route key={path} path={path} exact={exact} component={component} />
                      ))}
                      <Redirect to='/404' />
                    </Switch>
                  </Layout>
                </Route>

                <Redirect exact to='/404' />
              </Switch>
            </SettingContext.Provider>
          </Router>
        </>
      )}
    </>
  );
};

const mapStatesToProps = (rootState: any) => ({
  settings: rootState.appConfig.settings,
  loadedState: rootState.appConfig.loadedState
});

const mapDispatchToProps = (dispatch: any) => ({
  syncAppConfig: dispatch.appConfig.syncConfig
});

export default connect(mapStatesToProps, mapDispatchToProps)(App);
