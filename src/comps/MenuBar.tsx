import React, { useState, useLayoutEffect, useEffect, useContext } from 'react';
import styled from 'styled-components';
import menuStyles from '../assets/styles/menubar.module.css';

const ScreenSmallWidth: number = 768;

let MenuBar: any = styled.nav<{ minimumWidth: number }>`
    width: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    background-color: #fff;

    transition: 0.3s cubic-bezier(0.5, -1, 0.5, 2);
    opacity: 1;

    @media screen and (max-width: ${(props) => props.minimumWidth}px) {
        width: 100%;
        position: absolute;
        top: 80px;
        left: 0;
        margin: 0;
        opacity: 1;
    }
`;

const ToggleButton = styled.a<{ minimumWidth: number }>`
    display: none;
    @media screen and (max-width: ${(props) => props.minimumWidth || 768}px) {
        display: block;
    }
`;

const ResponsiveMenuBar = (
    props: {
        toggleOpenIcon?: React.ReactNode;
        toggleCloseIcon?: React.ReactNode;
        children: React.ReactNode;
        smallDeviceWidth: number;
    } = {
        toggleOpenIcon: null,
        toggleCloseIcon: null,
        children: null,
        smallDeviceWidth: 768
    }
) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    useLayoutEffect(() => {
        function updateSize() {
            if (window.innerWidth > props.smallDeviceWidth && isCollapsed === true) {
                setIsCollapsed(false);
            }
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    const toggle = (evt: any) => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div style={{ zIndex: 999 }}>
            <ToggleButton onClick={toggle} minimumWidth={props.smallDeviceWidth}>
                {isCollapsed === true
                    ? props.toggleOpenIcon || <span>Open</span>
                    : props.toggleCloseIcon || <span>Close</span>}
            </ToggleButton>
            <MenuBar style={{ opacity: isCollapsed ? 0 : 1 }} minimumWidth={props.smallDeviceWidth}>
                {props.children}
            </MenuBar>
        </div>
    );
};

export default ResponsiveMenuBar;
