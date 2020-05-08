import React from 'react';
import styled from 'styled-components';
import { Link, useRouteMatch, NavLink } from 'react-router-dom';
import '../assets/styles/test.css';

const Wrapper = styled.div`
    text-align: right;
    @media screen and (max-width: 768px) {
    }
`;

const navActiveClassName = 'navActiveClassName';
let NavBar: any = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 1rem auto;
    display: flex;
    flex-direction: row;
    & .${navActiveClassName} {
        color: #fff;
        background-color: #2ee59d;
        box-shadow: 0px 16px 20px rgba(46, 229, 157, 0.4);
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;
NavBar.navActiveClassName = navActiveClassName;

const NavLinkItem = styled(NavLink)`
    height: 45px;
    padding: 1rem 1rem;
    margin-right: 0.5rem;
    font-weight: 500;
    border-radius: 20px;
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    &:hover {
        background-color: #2ee534;
        color: #eee;
        border-radius: 10px;
    }
`;

const Submenu = (props: any) => {
    return (
        <Wrapper>
            <NavBar>
                {props.items.map((item: any, index: number) => (
                    <NavLinkItem key={index} to={item.url} activeClassName={NavBar.navActiveClassName}>
                        {item.title}
                    </NavLinkItem>
                ))}
            </NavBar>
        </Wrapper>
    );
};

export default Submenu;
