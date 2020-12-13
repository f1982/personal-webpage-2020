import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { HashRouter as Router, Route, Switch, Redirect, useLocation } from 'react-router-dom'
import ReactGA from 'react-ga'
import routes from './router'
import Layout from './layouts/default'
import Header from './comps/common/Header'
import Footer from './comps/common/Footer'
import Welcome from './pages/welcome'
import PageNotFound from './pages/404'
import { SettingContext } from './Settings'
import ClosurePage from './pages/closure/Closure'
// import log from './utils/loglevel-middleware'

// initialize Google Analytic
ReactGA.initialize('UA-171033058-1', {
  testMode: process.env.NODE_ENV === 'test',
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
          {loadedState === 'loaded' ? (
            <Router>
              <SettingContext.Provider
                value={{
                  contentWidth: 950,
                  smallDeviceWidth: 768,
                }}>
                <Switch>
                  <Route exact path='/welcome' component={Welcome} />
                  <Redirect path='/' exact to='/welcome' />
                  <Route exact path='/404' component={PageNotFound} />

                  <Route>
                    <Layout header={() => <Header routes={routes} />} footer={Footer}>
                      <Switch>
                        {routes.map(({ path, exact, component }) => (
                          <Route key={path} path={path} exact={exact} component={component} />
                        ))}
                        <Redirect to='/404' />
                      </Switch>
                    </Layout>
                  </Route>

                  {/* <Redirect to='/404' /> */}
                </Switch>
              </SettingContext.Provider>
              <LocationDisplay />
            </Router>
          ) : null}
        </>
      )}
    </>
  )
}

export default AppView
