import { connect } from 'react-redux'

import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useLocation
} from 'react-router-dom'
import ReactGA from 'react-ga'
import routes from './router'
import Layout from '../layouts/default'
import Header from '../comps/common/Header'
import Footer from '../comps/common/Footer'
import Welcome from './welcome'
import PageNotFound from './404'
import ClosurePage from './closure/Closure'
// import log from './utils/loglevel-middleware'

// initialize Google Analytic
ReactGA.initialize('UA-171033058-1', {
  testMode: process.env.NODE_ENV === 'test'
})

const history = require('history').createBrowserHistory()
history.listen((location: any) => {
  ReactGA.set({ page: window.location.hash })
  ReactGA.pageview(window.location.hash)
})

// set this variable to true to close the whole website
const websiteClosed = false
const pageTitleTemplate = `%s | Andy's Personal Website`

export const LocationDisplay = () => {
  const location = useLocation()
  return <div data-testid='location-display'>{location.pathname}</div>
}
interface IProps {
  syncAppConfig?: Function
  settings?: any
  loadedState?: string
}

const AppView: React.FC<IProps> = ({ syncAppConfig, loadedState }) => {
  useEffect(() => {
    ReactGA.pageview('/')
    if (syncAppConfig) syncAppConfig()
  }, [syncAppConfig])

  return (
    <>
      <Helmet titleTemplate={pageTitleTemplate}>
        <meta
          name='description'
          content='Andy is a software developer, he loves to make mobile apps, website and games.'
        />
      </Helmet>
      {websiteClosed ? (
        <ClosurePage />
      ) : (
        <React.Fragment>
          {loadedState === 'loaded' ? (
            <Router>
              <Switch>
                <Route exact path='/welcome' component={Welcome} />
                <Redirect path='/' exact to='/welcome' />
                <Route exact path='/404' component={PageNotFound} />
                <Route>
                  <Layout
                    header={() => <Header routes={routes} />}
                    footer={Footer}>
                    <Switch>
                      {routes.map(({ path, exact, component }) => (
                        <Route
                          key={path}
                          path={path}
                          exact={exact}
                          component={component}
                        />
                      ))}
                      <Redirect to='/404' />
                    </Switch>
                  </Layout>
                </Route>
              </Switch>
              {/* <LocationDisplay /> */}
            </Router>
          ) : null}
        </React.Fragment>
      )}
    </>
  )
}

const mapStatesToProps = (rootState: any) => ({
  loadedState: rootState.appConfig.loadingState
})

const mapDispatchToProps = (dispatch: any) => ({
  syncAppConfig: dispatch.appConfig.syncConfig
})

export { AppView }
export default connect(mapStatesToProps, mapDispatchToProps)(AppView)
