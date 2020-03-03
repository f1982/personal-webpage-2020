import React from 'react';
import styled from 'styled-components';
// import { TechnologyStackItem } from './TechnologyStack';
import { ProjectObject } from '../../types/interfaces';

interface ProjectItemProp {
    name?: string;
    itemData: ProjectObject;
    callback?: Function;
}

const ProjectImg = styled.img`
    position: absolute;
    width: 100%;
    height: auto;
    left: 0;
`;
const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0;
`;

const ProjectName = styled.h5`
    position: absolute;
    width: 100%;
    margin: 1rem auto;
    bottom: 0%;
    text-align: center;
    opacity: 0;
    color: #fff;
    /* transform: translateY(-20px); */
    transition: all 0.3s;
    will-change: opacity, color;
`;
const TechItem = styled.span``;

const Wrapper = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #eee;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.6s, border 0.5s;
    transform: translateZ(0);
    transition: 0.3s;
    will-change: transform;

    &:after {
        position: absolute;
        content: '';
        z-index: 10;
        width: 200%;
        height: 100%;
        top: -90%;
        left: -80px;
        opacity: 0.1;
        transform: rotate(45deg);
        background: linear-gradient(to top, transparent, #fff 15%, rgba(255, 255, 255, 0.6));
        transition: 0.3s;
    }
    &:hover,
    &:focus,
    &:active {
        box-shadow: 0px 20px 20px 3px rgba(0, 0, 0, 0.5);
        transform: translateY(-3px) scale(1.05) rotateX(15deg);
        &:after {
            transform: rotate(15deg);
            top: -60%;
            opacity: 0.45;
        }
        /* Other component */
        ${Overlay} {
            /* opacity: 0.8; */
            color: #fff;
            text-shadow: 0px 8px 10px #666;
        }
        ${ProjectName} {
            opacity: 1;
            transform: translateY(-20px);
        }
    }
    /* @media only screen and (max-width: 700px) {
        width: 48%;
        margin: 1rem 0;
    }

    @media only screen and (max-width: 500px) {
        width: 100%;
    } */
`;

/**
 * Project item
 *
 * @param props
 */
const ProjectItem = (props: ProjectItemProp) => {
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

    return (
        <Wrapper>
            <ProjectImg src={props.itemData.cover} />
            <Overlay></Overlay>
            <ProjectName>{props.itemData.title}</ProjectName>
        </Wrapper>
    );
};

export { ProjectItem, TechItem };
