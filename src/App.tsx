import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './pages';
import Layout from './layouts/default';
import Welcome from './pages/welcome';

import GSection from './examples/section';
import * as log from 'loglevel';

log.disableAll();
const App = (props: any) => {
    const { syncAppConfig, settings } = props;

    useEffect(() => {
        log.info('hello, i am loglevel');

        syncAppConfig();
    }, [syncAppConfig]);

    useEffect(() => {}, [settings]);

    //test
    const [showSection, setShowSection] = useState(true);

    //for test
    // return (
    //     <>
    //         <div style={{ backgroundColor: `yellow`, height: `100vh` }}></div>
    //         {showSection ? <GSection bgColor='#ffcc99' style='style2' title='I am andy cao' /> : null}

    //         <button
    //             onClick={() => {
    //                 setShowSection(false);
    //             }}>
    //             Remove Section
    //         </button>
    //         <GSection bgColor='#ffcc00' style='style1' title='Lise Meitner was an Austrian-Swedish' />
    //         <div style={{ backgroundColor: `yellow`, height: `100vh` }}></div>
    //     </>
    // );

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Helmet titleTemplate='%s - Andy Cao personal website'>
                <meta name='description' content='An opensource personal website by React' />
            </Helmet>
            {/* test */}

            {/* test */}
            <Switch>
                <Route exact path='/'>
                    <Welcome></Welcome>
                    {/* <div>test</div> */}
                </Route>
                <Route>
                    <Layout>
                        {routes.map((route) => (
                            <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
                        ))}
                    </Layout>
                </Route>
            </Switch>
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
