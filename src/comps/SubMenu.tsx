import React from 'react';
import styled from 'styled-components';
import { Link, useRouteMatch, NavLink } from 'react-router-dom';
import '../assets/styles/test.css';

const Wrapper = styled.div`
    padding-top: 2rem;
    padding-right: 4rem;
    text-align: right;
`;

const navActiveClassName = 'navActiveClassName';
let NavBar: any = styled.div`
    width: 1200px;
    margin: 1rem auto;
    & .${navActiveClassName} {
        color: #fff;
        background-color: #2ee59d;
        box-shadow: 0px 16px 20px rgba(46, 229, 157, 0.4);
    }
`;
NavBar.navActiveClassName = navActiveClassName;

const NavLinkItem = styled(NavLink)`
    height: 45px;
    padding: 1rem 1rem;
    margin-right: 0.5rem;
    font-weight: 500;
    border-radius: 20px;
    /* color: #fff; */
    /* background-color: #2ee59d; */
    /* box-shadow: 0px 16px 20px rgba(46, 229, 157, 0.4); */
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    &:hover {
        background-color: #2ee534;
        color: #eee;
        /* transform: translateY(-2px); */
        /* padding: 0.5rem; */
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
