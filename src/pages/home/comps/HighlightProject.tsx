import React from 'react';
import styled from 'styled-components';
import SingleButton from '../../../comps/SingleButton';
import Projects from '../../../comps/project/ProjectList';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    margin: 1rem auto;
    text-align: center;
`;
const Intro = styled.div`
    margin: 1.5rem auto;
    width: 50%;
    text-align: center;
    @media screen and (max-width: 768px) {
        width: 90%;
    }
`;

export interface HighlightProjectProp {
    moreProjectCallback?: Function;
    projects: [];
}
const HighlightProjects = (props: any) => {
    return (
        <Wrapper>
            <h3>Projects</h3>
            <Intro>
                <p>
                    My passion and focus are application development. I hope I can develop software that can help people
                    to make a better life.
                </p>
            </Intro>

            <Projects data={props.projects} category='all'></Projects>
            <div style={{ marginTop: `3rem` }}>
                <Link to='works'>
                    <SingleButton>MORE</SingleButton>
                </Link>
            </div>
        </Wrapper>
    );
};
export default HighlightProjects;
