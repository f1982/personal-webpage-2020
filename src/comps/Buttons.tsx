import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span``;
const BubbleColor = '#fff';
const InnterButton = styled.button`
    padding: 0.75rem 2rem;
    font-weight: 500;
    color: #fff;
    border: 2px solid #fff;
    font-size: 1rem;
    background-color: #efc854;
    border-radius: 1.5rem;
    transition: all 0.3s ease 0s;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    &:hover {
        box-shadow: 0px 8px 10px rgba(226, 142, 1, 0.5);
        color: #fff;
        transform: translateY(-1px);
        &:before {
            content: '';
            pointer-events: none;
            opacity: 0.6;
            background: radial-gradient(
                    circle at 20% 35%,
                    transparent 0,
                    transparent 2px,
                    ${BubbleColor} 3px,
                    ${BubbleColor} 4px,
                    transparent 4px
                ),
                radial-gradient(
                    circle at 75% 44%,
                    transparent 0,
                    transparent 2px,
                    ${BubbleColor} 3px,
                    ${BubbleColor} 4px,
                    transparent 4px
                ),
                radial-gradient(
                    circle at 46% 52%,
                    transparent 0,
                    transparent 4px,
                    ${BubbleColor} 5px,
                    ${BubbleColor} 6px,
                    transparent 6px
                );

            width: 100%;
            height: 200%;
            top: 0;
            left: 0;
            position: absolute;
            animation: bubbles 5s linear infinite both;
        }
        @keyframes bubbles {
            from {
                transform: translate();
            }
            to {
                transform: translate(0, -66.666%);
            }
        }
    }
`;

interface ButtonProp {
    children: string;
    callback?: Function;
}
const SingleButton = (props: ButtonProp) => {
    return (
        <Wrapper>
            <InnterButton
                onClick={() => {
                    void (props.callback ? props.callback() : null);
                }}>
                {props.children}
            </InnterButton>
        </Wrapper>
    );
};

// Close Button

const ButtonWidth = 32;
const ButtonHeight = 8;
const ButtonSize = 32;

const CloseButtonWrapper = styled.a`
    height: ${ButtonSize}px;
    width: ${ButtonSize}px;
    position: relative;
    box-sizing: border-box;
    line-height: ${ButtonSize}px;
    display: inline-block;
    /* background-color: #ffcc00; */

    &:before,
    &:after {
        content: '';
        position: absolute;
        transform-origin: center;
        transform: rotate(-45deg);
        top: 50%;
        /* left: 50%; */
        /* transform: translate(50%,-50%);  */
        /* margin-top: -${ButtonHeight / 2}px;
        margin-left: -${ButtonWidth / 2}px; */
        /* transform-origin: center center; */
        display: block;
        height: ${ButtonHeight}px;
        width: ${ButtonWidth}px;
        background-color: #4a4a4a;
        transition: all 0.25s ease-out;
        will-change: transform;
    }

    &:after {
        transform: rotate(-135deg);
    }

    &:hover {
        &:before {
            transform: rotate(0deg);
            /* width: 8px; */
        }
        &:after {
            transform: rotate(-180deg);
            /* width: 8px; */
        }
    }
`;

const ProjectCloseButton = (props: any) => {
    return <CloseButtonWrapper />;
};

// Close Button

const GoTopButtonWidth = 48;
const GoTopButtonHeight = 48;
const GoTopButtonSize = 48;

const GoTopButtonStyle = styled.a`
    height: ${GoTopButtonHeight}px;
    width: ${GoTopButtonWidth}px;
    position: relative;
    box-sizing: border-box;
    line-height: ${GoTopButtonSize}px;
    display: inline-block;
    /* background-color: #ffcc00; */

    &:before,
    &:after {
        content: '';
        position: absolute;
        /* transform-origin: center; */
        transform: translate(0px, 0px);
        transform: rotate(0deg);
        top: 50%;
        /* left: 50%; */
        /* transform: translate(50%,-50%);  */
        /* margin-top: -${ButtonHeight / 2}px;
        margin-left: -${ButtonWidth / 2}px; */
        /* transform-origin: center center; */
        display: block;
        height: ${ButtonHeight}px;
        width: ${ButtonWidth}px;
        background-color: #4a4a4a;
        transition: all 0.25s ease-out;
        will-change: transform;
    }
    &:before {
        transform: translate(-10px, 0px) rotate(-45deg);
    }
    &:after {
        transform: translate(10px, 0px) rotate(45deg);
        /* transform: translate(10px,0px); */
    }

    &:hover {
        &:before {
            transform: translate(-5px, -10px)  rotate(-240deg);
            /* width: 8px; */
        }
        &:after {
            transform: translate(5px, -10px)  rotate(240deg);
            /* width: 8px; */
        }
    }
`;

const GoTopButton = (props: any) => {
    return <GoTopButtonStyle />;
};

export { SingleButton, ProjectCloseButton, GoTopButton };
