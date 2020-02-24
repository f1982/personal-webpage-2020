import React from 'react';
import styled from 'styled-components';

const ButtonWidth = 50;
const ButtonHeight = 8;
const ButtonSize = 50;

const Wrapper = styled.a`
    height: ${ButtonSize}px;
    width: ${ButtonSize}px;
    position: relative;
    box-sizing: border-box;
    line-height: ${ButtonSize}px;
    display: inline-block;

    &:before,
    &:after {
        transform: rotate(-45deg);
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -${ButtonHeight / 2}px;
        margin-left: -${ButtonWidth / 2}px;
        display: block;
        height: ${ButtonHeight}px;
        width: ${ButtonWidth}px;
        background-color: #000;
        transition: all 0.25s ease-out;
    }

    &:after {
        transform: rotate(-135deg);
    }

    &:hover {
        &:before,
        &:after {
            transform: rotate(90deg);
        }
    }
`;

const ProjectCloseButton = (props: any) => {
    return <Wrapper></Wrapper>;
};

export default ProjectCloseButton;
