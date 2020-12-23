import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { Popup } from '../Popup'
import { ProjectObject } from '../../types/interfaces'
import ProjectItem from './ProjectCard'
import { ProjectDetail } from './ProjectDetail'
import { ProjectCloseButton } from '../Button'

const Wrapper = styled.section`
  width: 100%;
  margin: 1.5rem auto;
`

const ProjectsContainer = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`
const ProjectButton = styled.button`
  background-color: transparent;
  border: none;

  &:focus {
    outline: 0;
  }
`

const getPopupContainerWidth = () => {
  if (window.innerWidth < 768) {
    return '100%'
  } else {
    return '60%'
  }
}

const getPopupContainerHeight = () => {
  if (window.innerWidth < 768) {
    return '96%'
  } else {
    return '80%'
  }
}

interface PropsType {
  itemData: any[]
  eventHandler?: Function | null
  type?: string
  top?: number
}

const ProjectList = ({
  itemData,
  eventHandler = null,
  type = 'all',
  top = 0
}: PropsType) => {
  const [selectedProject, setSelectedProject] = useState<ProjectObject | null>()
  const [projectData, setProjectData] = useState<ProjectObject[]>([])

  // filter the array with type
  useEffect(() => {
    let filtered: ProjectObject[]
    if (type !== '' && type !== 'all') {
      filtered = itemData.filter(
        (item: ProjectObject) => item.type === type && item.state === 'release'
      )
    } else {
      filtered = itemData
    }
    if (top > 0) {
      filtered = filtered.slice(0, top)
    }
    setProjectData(filtered)
  }, [itemData, type, top])

  //   useEffect(() => {
  //     setSelectedProject(projectData[0]);
  //   }, [projectData]);

  const handleItemClick = (id: string) => {
    setSelectedProject(
      projectData.find((selectedItem: ProjectObject) => selectedItem.id === id)
    )
    eventHandler && eventHandler('SelectProject')
  }
  /**
   * Close popup panel
   *
   * @param event
   */
  const closePopupHandler = useCallback(
    (event: React.MouseEvent) => {
      setSelectedProject(null)
      eventHandler && eventHandler('CloseProject')
    },
    [setSelectedProject, eventHandler]
  )

  return (
    <Wrapper>
      <ProjectsContainer id='projects'>
        {projectData.map((item: ProjectObject) => {
          return (
            <ProjectButton
              title={'Show detail of project ' + item.title}
              key={item.id}
              onClick={() => {
                handleItemClick(item.id)
              }}>
              <ProjectItem
                title={item.title}
                cover={item.cover}
                platform={item.platform}
                description={item.description}
              />
            </ProjectButton>
          )
        })}
      </ProjectsContainer>
      {selectedProject ? (
        <Popup
          data-testid='popup-win'
          id={selectedProject.id}
          containerWidth={getPopupContainerWidth()}
          containerHeight={getPopupContainerHeight()}
          closeButton={<ProjectCloseButton />}
          closeHandler={closePopupHandler}>
          <ProjectDetail itemData={selectedProject} />
        </Popup>
      ) : null}
    </Wrapper>
  )
}

export default ProjectList
