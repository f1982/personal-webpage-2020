import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import Typegraphy from '@material-ui/core/Typography'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

import menuStyles from './menubar.module.css'

// base button style
const MenuBarItemBase = css`
  font-size: 1rem;
  font-weight: bold;
  display: inline-block;
  position: relative;
  width: 120px;
  height: 186px;
  box-sizing: border-box;
  text-align: center;
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

    /* font-size: 1.25rem; */
    font-weight: bold;
    text-transform: uppercase;
    transition: 0.25s cubic-bezier(0.5, -1, 0.5, 2);
    opacity: 0;
  }
  /* Normally show this, before user hover */
  &::before {
    content: attr(data-text);
    font-family: ${props => props.theme.typography.fontFamily};
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    bottom: 17.7%;
    color: ${props => props.theme.palette.primary.contrastText || '#ffcc00'};
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
    background-color: inherit;
    color: ${props => props.theme.palette.primary.contrastText || '#ffcc00'};
  }
  &:hover {
    background-color: ${props =>
      props.theme.palette.secondary.main || '#ffcc00'};
    span {
      opacity: 1;
      bottom: 17.7%;
    }
    &::before {
      content: attr(data-text);
      background-color: #5c636d; //color of text shadow
      opacity: 0;
      bottom: 0;
    }
  }
`
export const MenuBarItem = styled(NavLink)`
  ${MenuBarItemBase}
`

export const MenuBar: any = styled('nav')`
  z-index: 999;
  width: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  background-color: inherit;
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

  @media screen and (max-width: 768px) {
    display: none;
    z-index: 998;
  }
`

const ResponsiveMenuBar = (
  props: {
    routes: any[]
    toggleOpenIcon?: React.ReactNode
    toggleCloseIcon?: React.ReactNode
    smallDeviceWidth: number
  } = {
    routes: [],
    toggleOpenIcon: null,
    toggleCloseIcon: null,
    smallDeviceWidth: 768
  }
) => {
  return (
    <MenuBar data-testid='longMenubar' minimumWidth={props.smallDeviceWidth}>
      {props.routes.map((route, index) => {
        if (index < 0) return null
        return (
          <MenuBarItem
            data-text={route.title}
            data-mark={route.mark}
            key={index}
            exact={route.exact}
            to={route.path}
            activeClassName={menuStyles.activeNavLink}>
            <Typegraphy variant='button'>
              <span>{route.title}</span>
            </Typegraphy>
          </MenuBarItem>
        )
      })}
    </MenuBar>
  )
}

/**
 * Small menu bar related
 */
const SmallMenuBarIconSize = 32
const ToggleButton = styled.a`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`

const MobileMenuBar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 999;
  opacity: 1;
`
const SmallMenuBarItem = styled(NavLink)`
  padding: 1rem;
  display: block;
  border-bottom: 1px solid #f0f0f0;
  &:hover {
    color: #ccc;
  }
  &:active {
    color: #fff;
    font-size: 2rem;
  }
`

interface SmallMenuBarProps {
  routes: any[]
  smallDeviceWidth?: number
  toggleOpenIcon?: React.ReactNode
  toggleCloseIcon?: React.ReactNode
}

const SmallMenuBar = ({ routes }: SmallMenuBarProps) => {
  const [isShowing, setisShowing] = useState(false)

  const toggle = () => {
    setisShowing(!isShowing)
    if (isShowing) {
      document.body.style.overflow = 'unset'
    } else {
      document.body.style.overflow = 'hidden'
    }
  }
  return (
    <div data-testid='smallMenubar'>
      <ToggleButton onClick={toggle} style={{ marginRight: '2rem' }}>
        <FaBars
          size={SmallMenuBarIconSize}
          style={{ verticalAlign: `middle` }}
        />
      </ToggleButton>
      <MobileMenuBar style={{ display: isShowing === true ? `block` : `none` }}>
        <div style={{ textAlign: `right`, padding: `1rem` }}>
          <FaTimes size={SmallMenuBarIconSize} onClick={toggle} />
        </div>
        <div style={{ padding: `0 1rem` }}>
          {routes.map((route, index) => {
            return (
              <SmallMenuBarItem
                key={index}
                to={route.path}
                onClick={toggle}
                activeClassName={menuStyles.activeSmallNavLink}>
                <Typegraphy variant='button'>{route.title}</Typegraphy>
              </SmallMenuBarItem>
            )
          })}
        </div>
      </MobileMenuBar>
    </div>
  )
}
export default ResponsiveMenuBar

export { SmallMenuBar }
