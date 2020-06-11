import React from 'react';
import styled from 'styled-components';
// import { TechnologyStackItem } from './TechnologyStack';
import { ProjectObject } from '../../types/interfaces';

interface ProjectItemProp {
    name?: string;
    itemData: ProjectObject;
    callback?: Function;
}

// const ProjectImg = styled.img`
//     position: absolute;
//     width: 100%;
//     height: auto;
//     border-radius: 20px;
//     left: 0;
// `;

const ImgBg = styled.div<{ url: string }>`
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-image: url(${(props) => props.url});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
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

const Wrapper = styled.div<{ url: string }>`
    position: relative;
    box-sizing: border-box;
    border-radius: 20px;

    width: 100%;
    height: 100%;
    overflow: hidden;
    /* background-color: #eee; */
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url(${(props) => props.url});
    box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.6s, border 0.5s;
    transform: translateZ(0);
    transition: 0.3s;
    will-change: transform;
    /* The light in front of the item */
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
        /* transform: translateY(-3px) scale(1.05) rotateX(15deg); */
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
            /* transform: translateY(-20px); */
        }
    }
`;

/**
 * Project item
 *
 * @param props
 */
const ProjectItem = (props: ProjectItemProp) => {
    return (
        <Wrapper url={props.itemData.cover}>
            {/* <ProjectImg src={props.itemData.cover} /> */}
            {/* <ImgBg url={props.itemData.cover} /> */}
            {/* <Overlay></Overlay> */}
            <ProjectName>{props.itemData.title}</ProjectName>
        </Wrapper>
    );
};

export { ProjectItem, TechItem };
