import React, { createRef } from 'react';
import styled from 'styled-components';
import { TechnologyStackItem } from './TechnologyStack';
import { ProjectObject } from '../types/interfaces';

interface ProjectItemProp {
    name?: string;
    itemData: ProjectObject;
    callback: Function;
}

const Overlay = styled.div`
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity:0;
`;

const ProjectName = styled.h5`
    position: absolute;
    width: 100%;
    margin: 1rem auto;
    top: 10%;
    text-align: center;
    opacity: 0;
    color: #fff;

    /* box-shadow: 3px 3px 3px  rgba(0, 0, 0, 0.8); */
    transition: opacity 0.6s, color 0.5s;
    will-change: opacity, color;
`;
const TechItem = styled.span``;
const LinkButton = styled.button``;

const SkillContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const Wrapper = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 300px;
    height: 400px;
    padding: 0px;
    margin: 2rem;
    /* border: 15px solid white; */
    background-color: #eee;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    /* box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3); */
    transition: box-shadow 0.6s, border 0.5s;
    will-change: transform;

    &:hover {
        /* border: 10px solid #fff; */

        box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
        ${Overlay} {
            opacity: 0.8;
            /* color: #fff;
            text-shadow: 0px 2px #666; */
        }
        ${ProjectName}{
            opacity: 1;
        }
    }
`;

/**
 * Project item
 *
 * @param props
 */
const ProjectItem = (props: ProjectItemProp) => {
    const titleRef = React.createRef<HTMLDivElement>();

    /**
     * Mouse event handler
     *
     * @param e MouseEvent
     */
    const mouseMoveHandler = (e: React.MouseEvent<Element, MouseEvent>) => {
        e.preventDefault();
        const elm: HTMLElement = e.target as HTMLElement;
        // const elm: HTMLElement = e.currentTarget as HTMLElement;
        // const elm: HTMLElement = wrapperRef as HTMLElement;
        const x = e.clientX;
        const y = e.clientY;
        const coords = elm.getBoundingClientRect();
        const elmX = coords.left + elm.offsetWidth / 2;
        const elmY = coords.top + elm.offsetHeight / 2;
        const angleX = (elmY - y) / 15;
        const angleY = (elmX - x) / -15;
        elm.style.transform = `rotateX(${angleX}deg)
                              rotateY(${angleY}deg)`;
    };

    const mouseOutHandler = (event: React.MouseEvent<Element, MouseEvent>) => {
        event.preventDefault();
        console.log('mouse out');
    };

    /**
     * Touch end handler
     *
     * @param e TouchEvent
     */
    const touchEndHandler = (event: React.TouchEvent | React.MouseEvent) => {
        console.log('touchEndHandler');
        if (props.callback) {
            props.callback(props.itemData);
        }
    };
    //render
    return (
        <Wrapper
            // onMouseMove={mouseMoveHandler}
            // onMouseOut={mouseOutHandler}
            onMouseDown={touchEndHandler}
            onTouchEnd={touchEndHandler}
            style={{
                backgroundImage: `url("${props.itemData.cover}")`
            }}>
            <Overlay>
                
            </Overlay>
            <ProjectName ref={titleRef}>{props.itemData.title}</ProjectName>

            {/* <SkillContainer>
                {
                    props.itemData.tech.split(',').map((item: string, index: number) => {
                        return <TechnologyStackItem key={index} technology={item}></TechnologyStackItem>
                    })
                }
            </SkillContainer> */}
        </Wrapper>
    );
};

export { ProjectItem, TechItem };
