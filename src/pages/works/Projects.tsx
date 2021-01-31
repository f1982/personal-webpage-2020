import React from 'react'
import { Helmet } from 'react-helmet'
import { Switch, Route, useRouteMatch, useParams } from 'react-router-dom'
import ReactGA from 'react-ga'
import Typegraphy from '@material-ui/core/Typography'

import { SectionWide, SectionNarrow } from '../../layouts/default'
import ProjectListGrid from '../../comps/project'
import TitleImage from '../../comps/common/MediaBanner'
import { ProjectObject } from '../../types/interfaces'
// import loglevel from '../../utils/loglevel-middleware'

import ImageBanner from '../../assets/images/image-banner-projects.jpg'
const videoURL = process.env.PUBLIC_URL + 'static/videos/coding.mp4'

const ProjectCategory = (props: any) => {
  let { category } = useParams<{ category: string }>()
  if (!category) {
    category = 'coding'
  }
  return (
    <ProjectListGrid
      itemData={props.data}
      type={category}
      eventHandler={(projectName: string) => {
        ReactGA.event({
          category: 'ViewContent',
          action: 'View Project',
          label: projectName
        })
      }}
    />
  )
}

interface IProps {
  projects: ProjectObject[]
}

const Projects: React.FC<IProps> = ({ projects }) => {
  const match = useRouteMatch()
  return (
    <>
      <Helmet>
        <title>Projects</title>
        <meta
          name='description'
          content='There are some projects that I have participated'
        />
      </Helmet>
      <SectionWide>
        <TitleImage imageURL={ImageBanner} videoURL={videoURL} />
      </SectionWide>
      <div style={{ textAlign: `center`, marginTop: `3rem` }}>
        <Typegraphy variant='h3' component='h1'>
          Projects
        </Typegraphy>
        <Typegraphy>
          This is part of the project I participated in, and there are some
          projects that I have not organized and listed.
        </Typegraphy>
      </div>
      <SectionNarrow>
        <Switch>
          <Route path={`${match.path}/:category`}>
            <ProjectCategory data={projects} />
          </Route>
          <Route path={`${match.path}`}>
            <ProjectCategory data={projects} />
          </Route>
        </Switch>
      </SectionNarrow>
    </>
  )
}

export default Projects
