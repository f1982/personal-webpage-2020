import React, { useEffect } from 'react'
import { useRouteMatch, Switch, Route, useHistory } from 'react-router-dom'
import Typegraphy from '@material-ui/core/Typography'
import { Helmet } from 'react-helmet'

import ImageBanner from '../../comps/common/MediaBanner'
import { Experience } from '../../comps/timeline/TimelineWork'
import TimelineLife from '../../comps/timeline/TimelineLife'
import Summary from './comps/Summary'
import { SectionNarrow } from '../../layouts/default'

import ImageAndyOnBeach from '../../assets/images/andy-on-beach.jpg'

const videoURL = process.env.PUBLIC_URL + 'static/videos/desk.mp4'

const About = (props: any) => {
  const history = useHistory()
  const { syncInfo } = props
  const match = useRouteMatch()
  useEffect(() => {
    syncInfo()
  }, [syncInfo])

  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name='description' content='There are something about me' />
      </Helmet>
      <ImageBanner imageURL={ImageAndyOnBeach} videoURL={videoURL} />

      <div style={{ marginTop: `3rem` }} />
      <Switch>
        <Route path={`${match.path}/work`}>
          <Experience data={props.timelines.works} />
        </Route>
        <Route path={`${match.path}/timeline`}>
          <button
            onClick={() => {
              history.goBack()
            }}>
            close
          </button>
          <SectionNarrow>
            <TimelineLife data={props.timelines.life} />
          </SectionNarrow>
        </Route>
        <Route path={`${match.path}/skill`}>
          <Typegraphy variant='h1'>Skills</Typegraphy>
        </Route>
        <Route path={`${match.path}/intro`}>intro</Route>
        <Route>
          <Summary data={props.sections} />
        </Route>
      </Switch>
      {props.loadedState === 'loaded' ? (
        <></>
      ) : (
        <Typegraphy>loading</Typegraphy>
      )}
    </>
  )
}

export default About
