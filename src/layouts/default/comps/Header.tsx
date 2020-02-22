import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import routes from '../../../pages';

const Wrapper = styled.header`
    padding-top: 1rem;
    padding-right: 4rem;
    text-align: right;
    @media screen and (max-width: 600px) {
        padding-top: 1rem;
        padding-right: 1rem;
    }
`;

const NavMenu = styled(animated.nav)`
    ul {
        display: inline-block;
        list-style-type: none;
        overflow: auto;
        & li {
            padding: 10px;
            float: left;
            @media screen and (max-width: 600px) {
                float: none;
            }
        }
    }
`;

const NavButton = styled(NavLink)`
    &:hover {
        text-decoration: line-through;
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
        setIsCollapsed(!isCollapsed);
    };

    /**
     * Views
     */
    return (
        <Wrapper>
            <RightMenuItem onClick={toggle}>
                <FaBars size='48' color='#ccc' />
            </RightMenuItem>
            <NavMenu style={springProps}>
                <ul>
                    {routes.map((route, index) => (
                        <li key={index}>
                            <NavButton exact={route.exact} to={route.path}>
                                {route.title}
                            </NavButton>
                        </li>
                    ))}
                    <li>
                        <a href='http://blog.f1982.com' target='_blank' rel='noopener noreferrer'>
                            Blog
                        </a>
                    </li>
                    <li>
                        <a href='#'>Resume</a>
                    </li>
                </ul>
            </NavMenu>
        </Wrapper>
    );
};

export default Header;
