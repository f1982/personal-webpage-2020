import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import axios from "axios";
import { HashRouter as Router, Route } from 'react-router-dom'
import {
  TimelineObject,
  ProjectObject,
  MenuItemObject
} from "./types/interfaces";
import { FaWindowMaximize } from "react-icons/fa";
import { GlobalStyle, myTheme } from "./theme";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { Projects } from "./components/Projects";
import { Menu } from "./components/Menu";
import { Experience } from "./components/Experience";
import { Links } from "./components/Links";
import { Skills } from "./components/Skills";
import Layout from "./layouts/default";
import routes from './pages'

const menuData: MenuItemObject[] = [
  { name: "Home", link: "", index: 0 },
  { name: "About", link: "#header", index: 1 },
  { name: "Works", link: "#projects", index: 2 },
  { name: "Contact", link: "", index: 3 }
];

// const EXAMPLE_NAMES = Object.keys(EXAMPLES) as Examples[];

const App = () => {
  // Use state to keep track of the current displayed example component
  const [example, setExample] = useState<String>("Counter");
  const [count, setCount] = useState<Number>(20);

  const [dataSource, setDataSource] = useState<any>(null);
  const [projects, setProjects] = useState<ProjectObject[]>([]);
  const [timelineItems, setTimelineItems] = useState<TimelineObject[]>([]);

  useEffect(() => {
    axios
      .get("static/data.json")
      .then(function(response) {
        // handle success
        // console.log(response.data.data);
        setDataSource(response.data.data);
        // setProjects(response.data.data.projects);
        // setTimelineItems(response.data.data.timelines.experience);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
    return () => {};
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={myTheme}>
        {dataSource === null ? (
          <p>loading</p>
        ) : (
          <Layout>
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}

            {/* <>
              <Skills
                category="Program Language"
                data={dataSource["skill"]["program"]}
              />
              <Links category="SNS" data={dataSource["links"]["sns"]} />
              <Links category="Friends" data={dataSource["links"]["friends"]} />
              <Menu data={menuData}></Menu>
              <Projects data={dataSource.projects}></Projects>
              <div id="header">
                <Header name="Andy123" position="Developer"></Header>
              </div>
              <h3>Summary</h3>
              <Summary></Summary>

              <Experience
                data={dataSource.timelines["experience"]}
              ></Experience>
              <GlobalStyle />
            </> */}
          </Layout>
        )}
      </ThemeProvider>
    </Router>
  );
};

export default App;
