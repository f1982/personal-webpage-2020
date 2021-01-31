import React from 'react'
import styled from 'styled-components'
import Typegraphy from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import ReactGA from 'react-ga'

import { SingleButton } from '../../../comps/Button'
import Projects from '../../../comps/project'
import loglevel from '../../../utils/loglevel-middleware'

const Wrapper = styled.div`
  margin: 1rem auto;
  text-align: center;
`
const Intro = styled.div`
  margin: 1.5rem auto;
  width: 50%;
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`

export interface HighlightProjectProp {
  moreProjectCallback?: Function
  projects: []
}
const HighlightProjects = (props: any) => {
  return (
    <Wrapper>
      <Typegraphy variant='h2'>Projects</Typegraphy>
      <Intro>
        <Typegraphy>
          Here are some projects that I have done recently.
        </Typegraphy>
      </Intro>

      <Projects
        itemData={props.projects}
        type='coding'
        top={2}
        eventHandler={(projectName: string) => {
          loglevel.info('project detail event handler', projectName)
          ReactGA.event({
            category: 'ViewContent',
            action: 'View Project',
            label: projectName
          })
        }}></Projects>
      <div style={{ marginTop: `3rem` }}>
        <Link to='works'>
          <SingleButton>MORE</SingleButton>
        </Link>
      </div>
    </Wrapper>
  )
}
export default HighlightProjects
