import * as React from "react";
import styled, { ThemeProvider } from 'styled-components'
import axios from 'axios';
import { TimelineObject, ProjectObject, MenuItemObject } from './interfaces'

import { GlobalStyle, myTheme } from './theme'
import { Header } from './components/Header'
import { Summary } from './components/Summary'
import { Projects } from './components/Projects'
import { Menu } from './components/Menu'

//for tests
import { startMobXTest } from './tests/MobXTests'
import { Experience } from "./components/Experience";

startMobXTest();

const menuData: MenuItemObject[] = [
  { name: 'Home', link: '', index: 0 },
  { name: 'About', link: '#header', index: 1 },
  { name: 'Works', link: '#projects', index: 2 },
  { name: 'Contact', link: '', index: 3 },
]

// const EXAMPLE_NAMES = Object.keys(EXAMPLES) as Examples[];


const App = () => {
  // Use state to keep track of the current displayed example component
  const [example, setExample] = React.useState<String>("Counter");
  const [count, setCount] = React.useState<Number>(20);

  const [dataSource, setDataSource] = React.useState<any>(null);
  const [projects, setProjects] = React.useState<ProjectObject[]>([]);
  const [timelineItems, setTimelineItems] = React.useState<TimelineObject[]>([])



  React.useEffect(() => {
    axios.get('data.json')
      .then(function (response) {
        // handle success
        // console.log(response.data.data);
        setDataSource(response.data.data);
        // setProjects(response.data.data.projects);
        // setTimelineItems(response.data.data.timelines.experience);
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





  // The currently selected example component that should be rendered
  //   const ExampleComponent = EXAMPLES[example];

  // A list of buttons for all examples to render
  //   const exampleButtons = EXAMPLE_NAMES.map(name => (
  // <button></button>

  // const projects2 = ['a', 'b', 'cc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'dfsdfdf'];





  return (
    <>
      <ThemeProvider theme={myTheme}>
        {

          dataSource === null ?
            <p>loading</p>
            :
            <div>
              <Menu data={menuData}></Menu>
              <div id="header">
                <Header name='Andy123' position='Developer'></Header>
              </div>
              <h3>Summary</h3>
              <Summary></Summary>

              <Experience data={dataSource.timelines['experience']}></Experience>
              <Projects data={dataSource.projects}></Projects>
              <GlobalStyle />
            </div>

        }
      </ThemeProvider>

    </>
  );
};

export default App;