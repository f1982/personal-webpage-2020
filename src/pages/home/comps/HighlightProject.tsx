import React from 'react';
import styled from 'styled-components';
import { SingleButton } from '../../../comps/Buttons';
import Projects from '../../../comps/project/ProjectListGrid';
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
                <p>Here are some projects that I am recently focusing on</p>
            </Intro>

            <Projects data={props.projects} category='all' top={2}></Projects>
            <div style={{ marginTop: `3rem` }}>
                <Link to='works'>
                    <SingleButton>MORE</SingleButton>
                </Link>
            </div>
        </Wrapper>
    );
};
export default HighlightProjects;
