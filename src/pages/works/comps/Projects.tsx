import React from "react";
import styled from "styled-components";
import { Popup } from "../../../comps/Popup";
import { ProjectObject } from "../../../types/interfaces";
import { ProjectItem } from "./ProjectItem";
import { ProjectDetail } from "./ProjectDetail";

const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

interface ProjectProp {
  data: Array<ProjectObject>;
}

const Projects = (props: ProjectProp) => {
  const [popupClosed, setPopupClosed] = React.useState(true);

  //Only popupClosed variable change, this callback will be fired
  React.useEffect(() => {
    console.log("popupClosed changed...");
  }, [popupClosed]);

  const [showedProject, setShowedProject] = React.useState<any>(null);

  const closePopupHandler = (event: React.MouseEvent) => {
    console.log("close popup");
    setShowedProject(null);
  };

  const tapProjectHandler = (item: ProjectObject) => {
    console.log("project item tapped", item);
    setShowedProject(item);
  };

  return (
    <>
      <h3>Projects</h3>
      <ProjectsContainer id="projects">
        {props.data &&
          props.data.map((item: ProjectObject) => {
            return (
              <ProjectItem
                name={item.title}
                key={item.id}
                itemData={item}
                callback={tapProjectHandler}
              ></ProjectItem>
            );
          })}
      </ProjectsContainer>
      {showedProject !== null ? (
        <Popup
          id="test"
          content={<ProjectDetail itemData={showedProject} />}
          closeHandler={closePopupHandler}
        ></Popup>
      ) : null}
    </>
  );
};

export { Projects };
