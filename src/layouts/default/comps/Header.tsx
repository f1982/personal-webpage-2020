import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaBars, FaWindowClose } from 'react-icons/fa';
import routes from '../../../pages';
import menuStyles from '../../../assets/styles/menubar.module.css';
import ResponsiveMenuBar from '../../../comps/MenuBar';

const LogoSVG = () => {
    return (
        <svg width='88px' height='40px' viewBox='0 0 88 40'>
            <g id='andycao' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                <g id='andy-logo-copy' fill='#CFCFCF'>
                    <polygon
                        id='Rectangle'
                        points='6.12939328 0 87.6378601 0 87.6378601 6.18181818 0 6.18181818'></polygon>
                    <polygon
                        id='Rectangle'
                        points='0 33.4545455 58.8688508 33.4545455 55.8134445 39.6363636 6.31322476 39.6363636'></polygon>
                    <polygon
                        id='Rectangle-2'
                        points='0 6.00839372 6.51851852 0 6.51851852 39.6363636 0 33.5543879'></polygon>
                    <polygon
                        id='Rectangle-2'
                        points='76.8077087 16.025542 65.8300594 39.6269678 58.2885098 39.6583845 72.9551765 8.12574621'></polygon>
                    <polyline
                        id='Rectangle-2'
                        points='84.3622182 33.0909091 87.6378601 39.6363636 73.5144033 39.6363636 73.5144033 33.0909091 83.862521 33.0909091'></polyline>
                    <polygon
                        id='Rectangle-2'
                        points='72.9872104 8.12574621 87.653877 39.6583845 80.1388665 39.6840256 69.1198974 15.9937642'></polygon>
                </g>
            </g>
        </svg>
    );
};

const ScreenSmallWidth: number = 768;

const Wrapper = styled.header`
    /* position: fixed;
    top: 0;
    left: 0; */
    width: 100%;
    height: 6rem;
    background-color: #fff;
`;

const Inner = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: 0 1rem;
`;

const Spacer = styled.div`
    flex: 1;
`;

// base button style
const ButtonStyle = css`
    font-family: 'Lalezar';
    font-size: 1.5rem;
    font-weight: 700;
    display: inline-block;
    position: relative;
    margin: 0.5rem 0;
    padding: 0.5rem 1rem;
    border: 1px solid #fff;
    text-align: center;

    span {
        display: inline-block;
        font-size: 1rem;
        font-weight: 500;
        text-transform: uppercase;
        transition: 0.25s cubic-bezier(0.5, -1, 0.5, 2);
        transform: translate(0, -20px);
        opacity: 0;
    }
    &::before {
        content: attr(data-text);
        position: absolute;
        left: 20;
        transition: 0.25s cubic-bezier(0.5, -1, 0.5, 2);
        opacity: 1;
        transform: translate(0, 0px);
    }
    &::after {
        content: attr(data-mark);
    }
    &:link,
    :visited {
        color: #333;
    }
    &:hover {
        color: #fff;
        background-color: #7ce0c4;
        border: 1px solid #7ce0c4;
        span {
            opacity: 1;
            transform: translate(0, 0px);
        }
        &::before {
            content: attr(data-text);
            background-color: #000;
            opacity: 0;
            transform: translate(0, 20px);
        }
    }
`;
const NavButton = styled(NavLink)`
    ${ButtonStyle}
`;

const OutLink = styled.a`
    ${ButtonStyle}
`;

const Header = (props: any) => {
    return (
        <>
            <Wrapper>
                <Inner>
                    <LogoSVG />
                    <Spacer />
                    <ResponsiveMenuBar
                        toggleCloseIcon={<FaWindowClose size='32' />}
                        toggleOpenIcon={<FaBars size='32' />}>
                        {routes.map((route, index) => {
                            return (
                                <NavButton
                                    data-text={route.title}
                                    data-mark={route.mark}
                                    key={index}
                                    exact={route.exact}
                                    to={route.path}
                                    activeClassName={menuStyles.activeNavLink}>
                                    <span>!{route.title}!</span>
                                </NavButton>
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
                    </ResponsiveMenuBar>
                </Inner>
            </Wrapper>
        </>
    );
};

export default Header;
