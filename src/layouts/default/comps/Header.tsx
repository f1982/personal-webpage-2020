import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { NavLink, Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import routes from '../../../pages';
import '../../../assets/styles/test.css';

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

const Wrapper = styled.header`
    width: 100%;
    max-width: 1200px;
    text-align: right;
    margin: 0 auto;
    @media screen and (max-width: 600px) {
    }
`;

const navActiveItem = 'navActiveItem';
let NavMenu: any = styled(animated.nav)`
    margin: 1.5rem;
    & .${navActiveItem} {
        color: #fff;
        font-weight: 700;
        border: 1px solid #7ce0c4;
        background-color: #7ce0c4;
    }
    ul {
        display: inline-block;
        list-style-type: none;
        margin: 0;
        overflow: auto;
        & li {
            float: left;
        }
    }

    @media screen and (max-width: 768px) {
        margin: 0;
        ul {
            display: block;
            & li {
                float: none;
            }
        }
    }
`;

//Use this class name for React Router activeClassName
NavMenu.navActiveItem = navActiveItem;

const NavButton = styled(NavLink)`
    display: inline-block;
    padding: 0.75rem;
    border: 1px solid #fff;
    transition: all 0.3s ease 0s;
    color: #eee;
    width: 100%;
    text-align: center;
    &:hover {
        /* text-decoration: line-through; */
        color: #fff;
        background-color: #eee;
        border: 1px solid #7ce0c4;
    }
`;

const OutLink = styled.a`
    display: inline-block;
    box-sizing: border-box;
    padding: 0.75rem;
    border: 1px solid #fff;
    transition: all 0.3s ease 0s;
    color: #eee;
    width: 100%;
    text-align: center;
    &:hover {
        /* text-decoration: line-through; */
        color: #fff;
        background-color: #eee;
        border: 1px solid #7ce0c4;
    }
`;

const RightMenuItem = styled.a`
    height: 50px;
    display: none;
    @media screen and (max-width: 600px) {
        display: block;
    }
`;

interface HeaderPropType {
    menuCollapse?: boolean;
}

const initialProps: HeaderPropType = {
    menuCollapse: false
};

const Header = (props: HeaderPropType = initialProps) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [springProps, set] = useSpring(() => ({ opacity: 0, display: `none` }));

    // Update spring with new props
    set({
        opacity: isCollapsed === false ? 1 : 0,
        display: isCollapsed === false ? `inline-block` : `none`
    });

    /**
     * 监控窗口变化，如果窗口大于 600px 显示顶部导航
     */
    useLayoutEffect(() => {
        function updateSize() {
            if (window.innerWidth > 600 && isCollapsed === true) {
                setIsCollapsed(false);
            } else if (window.innerWidth <= 600) {
                setIsCollapsed(true);
            }
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, [isCollapsed]);

    /**
     * 切换显示菜单状态
     */
    const toggle = () => {
        console.log('toggle');
        setIsCollapsed(!isCollapsed);
    };

    /**
     * Views
     */
    return (
        <Wrapper>
            {/* <LogoSVG /> */}
            <RightMenuItem onClick={toggle}>
                <FaBars size='48' color='#ccc' />
            </RightMenuItem>
            <NavMenu>
                <ul>
                    {routes.map((route, index) => (
                        <li key={index}>
                            <NavButton exact={route.exact} to={route.path} activeClassName={NavMenu.navActiveItem}>
                                {route.title}
                            </NavButton>
                        </li>
                    ))}
                    <li>
                        <OutLink href='http://blog.f1982.com' target='_blank' rel='noopener noreferrer'>
                            Blog
                        </OutLink>
                    </li>
                    <li>
                        <OutLink href='#'>Resume</OutLink>
                    </li>
                </ul>
            </NavMenu>
        </Wrapper>
    );
};

export default Header;
