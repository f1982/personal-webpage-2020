import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import routes from '../../../pages';
import SingleButton from '../../../comps/SingleButton';
const Wrapper = styled.div`
    padding-top: 4rem;
    padding-right: 4rem;
    text-align: right;
`;
const NavBar = styled.div`
    display: inline-block;
`;
const NavButton = styled(NavLink)`
    padding: 10px;
`;

const Header = () => (
    <Wrapper>
        <NavBar>
            {routes.map((route, index) => (
                <NavButton key={route.path} exact={route.exact} to={route.path}>
                    {route.title}
                </NavButton>
            ))}
        </NavBar>
        <span style={{ width: `1rem`, padding: `1rem` }}></span>
        <SingleButton>Resume</SingleButton>
    </Wrapper>
);

export default Header;
