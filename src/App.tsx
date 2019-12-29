import * as React from "react";
import styled, { ThemeProvider } from 'styled-components'
import axios from 'axios';
import { TimelineObject, ProjectObject } from './interfaces'

import { GlobalStyle, myTheme } from './theme'
import { Header } from './components/Header'
import { Summary } from './components/Summary'
import { ProjectItem } from './components/ProjectItem'
import { Menu, MenuItem, MIData } from './components/Menu'
import { TimelineItem } from './components/TimelineItem'
import { Popup } from './components/Popup'


const menuData: MIData[] = [
  { name: 'Home', link: '', index: 0 },
  { name: 'About', link: '#header', index: 1 },
  { name: 'Works', link: '#works', index: 2 },
  { name: 'Contact', link: '', index: 3 },
]

// const EXAMPLE_NAMES = Object.keys(EXAMPLES) as Examples[];
const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`


const App = () => {
  // Use state to keep track of the current displayed example component
  const [example, setExample] = React.useState<String>("Counter");
  const [count, setCount] = React.useState<Number>(20);

  const [popupClosed, setPopupClosed] = React.useState(true);

  const [projects, setProjects] = React.useState<ProjectObject[]>([]);
  const [timelineItems, setTimelineItems] = React.useState<TimelineObject[]>([])

  const [showedProject, setShowedProject] = React.useState<ProjectObject>();

  React.useEffect(() => {
    axios.get('data.json')
      .then(function (response) {
        // handle success
        console.log(response.data.data);
        setProjects(response.data.data.projects);
        setTimelineItems(response.data.data.timelines.experience);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    return () => {

    };
  }, []);

  React.useEffect(() => {
    console.log('popupClosed changed...')
  }, [popupClosed])



  // The currently selected example component that should be rendered
  //   const ExampleComponent = EXAMPLES[example];

  // A list of buttons for all examples to render
  //   const exampleButtons = EXAMPLE_NAMES.map(name => (
  // <button></button>

  // const projects2 = ['a', 'b', 'cc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'dfsdfdf'];

  const tapProjectHandler = (item: ProjectObject) => {
    console.log('project item tapped', item);
    // setPopupClosed(false);
    setShowedProject(item);
  }

  const closePopupHandler = (event: React.MouseEvent) => {
    console.log('close popup');
    setPopupClosed(true);

  }

  return (
    <>
      {console.log('draw...')}
      <ThemeProvider theme={myTheme}>
        <Menu data={menuData}></Menu>
        <div id="header">
          <Header name='Andy123' position='Developer'></Header>
        </div>
        <h3>Summary</h3>
        <Summary></Summary>
        <h3>Experience</h3>
        {
          timelineItems && timelineItems.map((item: TimelineObject) => {
            return (<TimelineItem id="a" key={item.id} itemData={item}></TimelineItem>);
          })
        }
        <h3>Projects</h3>
        <ProjectsContainer id="works">
          {projects && projects.map((item: ProjectObject) => {
            return (
              <ProjectItem name={item.title} background="https://imageurl.jpg" key={item.id} itemData={item} callback={tapProjectHandler}></ProjectItem>
            )
          })}
        </ProjectsContainer>
        {
          popupClosed == false ? <Popup id="test" itemData={showedProject} closeHandler={closePopupHandler}></Popup> : null
        }

      </ThemeProvider>

      <GlobalStyle />
    </>
  );
};

export default App;