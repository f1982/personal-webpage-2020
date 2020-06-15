import React, { useState, useLayoutEffect, useEffect, useContext } from 'react';
import styled, { css } from 'styled-components';
import menuStyles from '../assets/styles/menubar.module.css';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { sample } from 'lodash';
import { FaWindowClose, FaSatellite, FaBars, FaCloudscale, FaTimes } from 'react-icons/fa';
const ScreenSmallWidth: number = 768;

// base button style
const MenuBarItemBase = css`
    /* font-family: 'Lalezar'; */
    font-size: 1rem;
    font-weight: bold;
    display: inline-block;
    position: relative;
    width: 120px;
    height: 186px;
    box-sizing: border-box;
    text-align: center;
    /* margin: 0.5rem 0; */
    /* padding: 0.5rem 1rem; */

    background-color: #fff;

    transition: 0.25s cubic-bezier(0.5, -1, 0.5, 2);
    @media screen and (max-width: 768px) {
        height: 80px;
    }
    /* Show this after user hover */
    span {
        display: inline-block;
        position: absolute;
        transform: translateX(-50%);
        left: 50%;
        bottom: 50%;

        font-size: 1.25rem;
        font-weight: bold;
        text-transform: uppercase;
        transition: 0.25s cubic-bezier(0.5, -1, 0.5, 2);
        opacity: 0;
    }
    /* Normally show this, before user hover */
    &::before {
        content: attr(data-text);
        position: absolute;
        transform: translateX(-50%);
        left: 50%;
        bottom: 17.7%;
        color: #5c636d;
        text-transform: uppercase;
        transition: 0.25s cubic-bezier(0.5, -1, 0.5, 2);
        opacity: 1;
        /* transform: translate(0, 0px); */
    }
    &::after {
        position: absolute;
        top: 0;
        right: 0;
        content: attr(data-mark);
    }
    &:link,
    :visited {
    }
    &:hover {
        background-color: #74ddf7;
        span {
            opacity: 1;
            bottom: 17.7%;
        }
        &::before {
            content: attr(data-text);
            background-color: #5c636d;
            opacity: 0;
            bottom: 0;
        }
    }
`;
const MenuBarItem = styled(NavLink)`
    ${MenuBarItemBase}
`;

const OutLink = styled.a`
    ${MenuBarItemBase}
`;

const MenuBar: any = styled.nav<{ minimumWidth: number }>`
    width: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    background-color: #fff;

    transition: 0.3s cubic-bezier(0.5, -1, 0.5, 2);

    > * {
        border-color: #ececec;
        border-style: solid;
        border-width: 0 0 0 1px;
    }
    /* Right item only have right border */
    > *:last-child {
        border-width: 0 1px 0;
    }

    @media screen and (max-width: ${(props) => props.minimumWidth}px) {
        /* visibility: hidden; */
        display: none;
        /* width: 100%;
        position: absolute;
        top: 80px;
        left: 0;
        margin: 0;
        opacity: 1; */
    }
`;

const ResponsiveMenuBar = (
    props: {
        routes: any[];
        toggleOpenIcon?: React.ReactNode;
        toggleCloseIcon?: React.ReactNode;
        smallDeviceWidth: number;
    } = {
        routes: [],
        toggleOpenIcon: null,
        toggleCloseIcon: null,
        smallDeviceWidth: 768
    }
) => {
    return (
        <div style={{ zIndex: 999 }}>
            <MenuBar minimumWidth={props.smallDeviceWidth}>
                {props.routes.map((route, index) => {
                    if (index < 1) return;
                    return (
                        <MenuBarItem
                            data-text={route.title}
                            data-mark={route.mark}
                            key={index}
                            exact={route.exact}
                            to={route.path}
                            activeClassName={menuStyles.activeNavLink}>
                            <span>{sample(['🌮', '🥑', '🍋', '🥪', '🍩'])}</span>
                        </MenuBarItem>
                    );
                })}

                {/* <OutLink
                            data-text='Blog'
                            href='http://blog.f1982.com'
                            target='_blank'
                            rel='noopener noreferrer'>
                            <span>Blog</span>
                        </OutLink>

                        <OutLink data-text='Resume' href='#'>
                            <span>Resume</span>
                        </OutLink> */}
            </MenuBar>
        </div>
    );
};

/**
 * Small menu bar related
 */
const SmallMenuBarIconSize = 36;
const ToggleButton = styled.a<{ minimumWidth: number }>`
    display: none;
    /* z-index: 1001; */
    @media screen and (max-width: 768px) {
        display: block;
    }
`;

const MobileMenuBar = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 999;
    opacity: 1;
    /* padding: 1rem; */
    a:active {
        color: #fff;
    }
`;
const SmallMenuBarItem = styled(NavLink)`
    padding: 1rem;
    display: block;
    border-bottom: 1px solid #ccc;
    &:hover {
        color: #ccc;
    }
    &:active {
        color: #fff;
        font-size: 2rem;
    }
`;

const SmallMenuBar = (
    props: {
        routes: any[];
        smallDeviceWidth: number;
        toggleOpenIcon?: React.ReactNode;
        toggleCloseIcon?: React.ReactNode;
    } = { routes: [], smallDeviceWidth: 768, toggleCloseIcon: null, toggleOpenIcon: null }
) => {
    const [isShowing, setisShowing] = useState(false);

    const toggle = (evt: any) => {
        setisShowing(!isShowing);
        if (isShowing) {
            document.body.style.overflow = 'unset';
        } else {
            document.body.style.overflow = 'hidden';
        }
    };
    return (
        <>
            <ToggleButton onClick={toggle} minimumWidth={768}>
                <FaBars size={SmallMenuBarIconSize} />
            </ToggleButton>
            <MobileMenuBar style={{ display: isShowing == true ? `block` : `none` }}>
                <div style={{ textAlign: `right`, padding: `1rem` }}>
                    <FaTimes size={SmallMenuBarIconSize} onClick={toggle} />
                </div>
                <div style={{ paddingLeft: `1rem` }}>
                    {props.routes.map((route, index) => {
                        return (
                            <SmallMenuBarItem
                                key={index}
                                to={route.path}
                                onClick={toggle}
                                activeClassName={menuStyles.activeSmallNavLink}>
                                {route.title}
                            </SmallMenuBarItem>
                        );
                    })}
                </div>
            </MobileMenuBar>
        </>
    );
};
export default ResponsiveMenuBar;

export { SmallMenuBar };
