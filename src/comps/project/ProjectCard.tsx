import React from 'react';
import styled from 'styled-components';
import ProgressiveImage from '../ProgressiveImage/ProgressiveImage';

const Wrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  flex-basis: 400px;
  flex-grow: 1;
  min-width: 400px;
  /* box-sizing: border-box; */
  transition: 0.3s;
  &:hover {
    border-radius: 2rem;
    box-shadow: 0px 10px 10px 2px rgba(0, 0, 0, 0.1);
  }
`;

const CardImage = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 160px;
  margin: 1rem 1rem;
  position: relative;
  > span {
    position: absolute;
    padding: 1px 10px;
    color: #fff;
    font-weight: bold;
    border-radius: 10px;
    top: -10px;
    right: 20px;
    background-color: #8ddaf4;
  }
`;

const CardContent = styled.div`
  margin: 0.5rem 1rem;
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: 60%;
  h5 {
    text-align: left;
    margin: 0.5rem 0;
  }
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
`;

export interface ProjectItemProp {
  title: string;
  cover: string;
  description: string;
  platform?: string;
}

/**
 * Project item
 *
 * @param props
 */
const ProjectItem = ({ title, cover, description, platform = '' }: ProjectItemProp) => {
  return (
    <Wrapper role='frame'>
      <CardImage>
        <ProgressiveImage width='100%' height='254px' src={cover} alt={title} />
        {platform ? <span>{platform}</span> : null}
      </CardImage>
      <CardContent>
        <h5>{title}</h5>
        <p>{description}</p>
      </CardContent>
    </Wrapper>
  );
};

export default ProjectItem;
