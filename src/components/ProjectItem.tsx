import React from 'react'
import styled from 'styled-components'

interface TIProps {
    name?: string
}

const SkillItem = styled.span`
    padding: 2px;
    margin: 3px;
    border: 1px solid #ffcc33;
    background-color: #ffcc66;
    color: #fff;
    border-radius: 3px;
`
//
const TechSkillItem = (props: any) => {

    return (
        <SkillItem>{props.name}</SkillItem>
    )
}


interface SProp {
    name?: string,
    imageURL?: string,
    intro?: string
}

const ProjectImg = styled.img`
    width: 100%;
    height: 100%;
`;

const ProjectName = styled.h3`
`;
const TechStacks = styled.div``;
const TechItem = styled.span``
const LinkButton = styled.button`
   
`

const SkillContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const Wrapper = styled.div`
    width: 300px;
    height: 200px;
    padding: 0px;
    margin: 10px;
    background-image: url("https://cdn.dribbble.com/users/4502908/screenshots/9055832/media/1b7d2d927b5f46bb3c27388775454cd3.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    box-shadow: ${props=>props.theme.shadow};
    &:hover {
        /* padding: 20px; */
        /* border: 1px solid #ff0000; */
        ${TechStacks} {
            color: #ff0000;
        }
    }   
`


const ProjectItem = (props: SProp) => {
    let skills = ['asp', 'c++', 'XCode','php', 'java','js','ts']
    //Mouse move handler
    const mouseMoveHandler = (e: React.MouseEvent<Element, MouseEvent>) => {
        const elm: HTMLElement = e.target as HTMLElement;

        const x = e.pageX;
        const y = e.pageY;

        const coords = elm.getBoundingClientRect();

        const elmX = coords.left + (elm.offsetWidth / 2);
        const elmY = coords.top + (elm.offsetHeight / 2);

        const angleX = (elmY - y) / 15;
        const angleY = (elmX - x) / -15;

        elm.style.transform = `rotateX(${angleX}deg)
                              rotateY(${angleY}deg)`;

    };
    //render
    return (

        <Wrapper onMouseMove={mouseMoveHandler}>
            {/* <ProjectImg src=''></ProjectImg> */}
            <ProjectName>work name</ProjectName>
            <TechStacks>test</TechStacks>
            <LinkButton>This is a Button</LinkButton>
            <SkillContainer>
            {
                skills.map((item: string) => {
                    return <TechSkillItem key={item} name={item}></TechSkillItem>
                })
            }
            </SkillContainer>

        </Wrapper>
    )
}

export {
    ProjectItem,
    TechItem
}