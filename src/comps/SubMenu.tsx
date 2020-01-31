import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import routes from '../pages';
import SingleButton from './SingleButton';

const Wrapper = styled.div`
    padding-top: 4rem;
    padding-right: 4rem;
    text-align: right;
`;

const NavBar = styled.div`
    display: inline-block;
`;

const NavButton = styled.button`
    height: 45px;
    padding: 0 1rem;
    margin-right: 0.5rem;
    font-size: 1.2rem;
    /* text-transform: uppercase; */
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #50e3c2;
    /* background-color: #50e3c2; */
    border: none;
    border-radius: 45px;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    &:hover {
        background-color: #2ee59d;
        box-shadow: 0px 16px 20px rgba(46, 229, 157, 0.4);
        color: #fff;
        transform: translateY(-2px);
    }
    &:active {
        background-color: #2ee59d;
        box-shadow: 0px 16px 20px rgba(46, 229, 157, 0.4);
        color: #fff;
        transform: translateY(-2px);
    }
`;

const ActiveNavButton = styled.button`
    height: 45px;
    padding: 0 1rem;
    margin-right: 0.5rem;
    font-size: 1.2rem;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #fff;
    border: none;
    border-radius: 45px;
    background-color: #2ee59d;
    box-shadow: 0px 16px 20px rgba(46, 229, 157, 0.4);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    &:hover {
        background-color: #2ee59d;
        box-shadow: 0px 16px 20px rgba(46, 229, 157, 0.4);
        color: #fff;
        transform: translateY(-2px);
    }
    &:active {
        background-color: #2ee59d;
        box-shadow: 0px 16px 20px rgba(46, 229, 157, 0.4);
        color: #fff;
        transform: translateY(-2px);
    }
`;

const SubMenu = (props: any) => {
    const [currentActive, setCurrentActive] = React.useState(1);
    const activeItem = (id: number) => {
        const currentItem: any = props.items.find((item: any) => {
            return item.id == id;
        });
        // currentItem.active = true;
        setCurrentActive(currentItem.id);
        props.callback ? props.callback(currentItem) : null;
    };
    return (
        <Wrapper>
            <NavBar>
                {props.items.map((item: any, index: number) =>
                    item.id === currentActive ? (
                        <ActiveNavButton key={index}>{item.title}</ActiveNavButton>
                    ) : (
                        <NavButton
                            key={index}
                            onClick={() => {
                                console.log(item);
                                activeItem(item.id);
                            }}>
                            {item.title}
                        </NavButton>
                    )
                )}
            </NavBar>
        </Wrapper>
    );
};

export default SubMenu;
