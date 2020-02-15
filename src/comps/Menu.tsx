import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MenuItemObject } from '../types/interfaces';

export interface MenuProps {
    data?: Array<MenuItemObject>;
}

const Wrapper = styled.ul`
    background-color: #333;
    overflow: hidden;
    list-style-type: none;
    margin: 0 auto;
    padding: 0;
    margin-bottom: 2rem;
    @media screen and (max-width: 1200px) {
    }
`;

const MenuItem = styled.li`
    float: left;
    display: block;
    @media screen and (max-width: 1200px) {
        /* float: none; */
        display: none;
    }
`;

const MenuItemA = styled.a`
    display: block;
    color: #fff;
    padding: 8px 16px;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    &:hover {
        background-color: #555;
        color: white;
    }
`;

const RightMenuItem = styled.li`
    float: right;
    display: none;
    @media screen and (max-width: 1200px) {
        display: block;
    }
`;

const Menu = (props: MenuProps) => {
    const [menuData, setMenuData] = useState<MenuItemObject[]>([]);

    useEffect(() => {
        setMenuData(props.data || []);
        console.log('set state value');
        return () => {};
    }, []);
    // console.log('menuData', menuData);
    const myFunction = (event: React.MouseEvent) => {};

    const hasData = () => {
        return menuData != undefined && menuData != null;
    };

    const buttonHandler = (e: React.MouseEvent) => {
        console.log('menu item click');
    };

    return (
        <Wrapper>
            {menuData.length > 0 &&
                menuData.map(item => {
                    return (
                        <MenuItem key={item.name}>
                            {item.link ? (
                                <MenuItemA href={item.link}>{item.name}</MenuItemA>
                            ) : (
                                <MenuItemA onClick={buttonHandler}>{item.name}</MenuItemA>
                            )}
                        </MenuItem>
                    );
                })}
            <RightMenuItem>
                <MenuItemA>Right</MenuItemA>
            </RightMenuItem>
        </Wrapper>
    );
};

export { MenuItem, Menu };
