import React from 'react'
import styled from 'styled-components'
import Typegraphy from '@material-ui/core/Typography'

import ProgressiveImage from '../ProgressiveImage/ProgressiveImage'

const Wrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  flex-basis: 400px;
  flex-grow: 1;
  min-width: 400px;
  transition: 0.3s;
  &:hover {
    border-radius: ${props => props.theme.shape.borderRadius || '0'}px;
    box-shadow: ${props =>
      props.theme.shadows.card || '0px 10px 10px 2px rgba(100, 0, 0, 0.4)'};
  }
`

const CardImage = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 160px;
  margin: 1rem 1rem;
  position: relative;
  > pre {
    position: absolute;
    padding: 1px 10px;
    color: #fff;
    font-weight: bold;
    border-radius: ${props => props.theme.shape.borderRadius || '0'}px;
    top: 0px;
    right: 20px;
    background-color: ${props => props.theme.palette.primary.main || '#ffcc00'};
  }
`

const CardContent = styled.div`
  margin: 0.5rem 1rem;
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: 60%;
  p {
    font-size: 1rem;
    text-align: left;
    position: relative;
    line-height: 1.5em;
    /* 高度为需要显示的行数*行高，比如这里我们显示两行，则为3 */
    height: 3em;
    overflow: hidden;
  }
  p:after {
    content: '...';
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0 5px;
    background-color: #fff;
  }
`

export interface ProjectItemProp {
  title: string
  cover: string
  description: string
  platform?: string
}

/**
 * Project item
 *
 * @param props
 */
const ProjectItem = ({
  title,
  cover,
  description,
  platform = ''
}: ProjectItemProp) => {
  return (
    <Wrapper role='frame'>
      <CardImage>
        <ProgressiveImage width='100%' height='254px' src={cover} alt={title} />
        {platform ? <pre>{platform}</pre> : null}
      </CardImage>
      <CardContent>
        <Typegraphy component='h5' variant='h5'>
          {title}
        </Typegraphy>
        <Typegraphy>{description}</Typegraphy>
      </CardContent>
    </Wrapper>
  )
}

export default ProjectItem
