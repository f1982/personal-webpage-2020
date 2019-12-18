import * as React from "react";
import { Header } from './components/Header'
import { ProjectItem } from './components/ProjectItem'
import styled, { ThemeProvider } from 'styled-components'
import { Menu, MenuItem, MIData } from './components/Menu'
import { GlobalStyle, myTheme } from './theme'
import axios from 'axios';

// import "./App.css";
// import Counter from "./Counter";
// import CounterReducer from "./CounterReducer";
// import CounterTitle from "./CounterTitle";
// import GitHubLogo from "./GitHubLogo";
// import Title from "./Title";

const menuData: MIData[] = [
  { name: 'Home', link: 'link', index: 0 },
  { name: 'About', link: 'link', index: 1 },
  { name: 'Works', link: 'link', index: 2 },
  { name: 'Contact', link: 'link', index: 3 },
]

// const EXAMPLE_NAMES = Object.keys(EXAMPLES) as Examples[];
const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`


const App = () => {

  axios.get('data.json')
    .then(function (response) {
      // handle success
      console.log(response.data.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  // Use state to keep track of the current displayed example component
  const [example, setExample] = React.useState<String>("Counter");
  const [count, setCount] = React.useState<Number>(20);

  // The currently selected example component that should be rendered
  //   const ExampleComponent = EXAMPLES[example];

  // A list of buttons for all examples to render
  //   const exampleButtons = EXAMPLE_NAMES.map(name => (
  // <button></button>

  const projects = ['a', 'b', 'cc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'dfsdfdf'];
  return (
    <>
      <ThemeProvider theme={myTheme}>
        <Menu data={menuData}></Menu>

        <Header name='Andy123' position='Developer'></Header>
        {/* <MenuItem name="Menu"></MenuItem>
        <MenuItem name="Menu"></MenuItem> */}
        <ProjectsContainer>
          {projects.map((item: string) => { return <ProjectItem name={item} key={item.toString()}></ProjectItem> })}
        </ProjectsContainer>
      </ThemeProvider>

      <button onClick={() => { setExample('test') }}>Count </button>
      {example} {count}
      <GlobalStyle />
    </>
  );
};

export default App;