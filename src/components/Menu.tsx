import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { FaBeer, FaAddressBook } from 'react-icons/fa';

export interface MIData {
    name: string, link: string, index: number
}

export interface MenuProps {
    data?: Array<MIData>
}

const TopNav = styled.ul`
    background-color: #333;
    overflow: hidden;
    list-style-type: none;
    margin: 0 auto;
    padding: 0;
    margin-bottom: 2rem;
    @media screen and (max-width: 600px) {
    }
`

const MenuItem = styled.li`
    float: left;
    @media screen and (max-width: 600px) {
        float: none;
    }
`

const MenuItemA = styled.a`
    display: block;
    color: #FFF;
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    &:hover {
        background-color: #555;
        color: white;
    }
`

const Menu = (props: MenuProps) => {
    console.log('MenuProps', props);

    const [menuData, setMenuData] = useState<MIData[]>([]);


    useEffect(() => {
        setMenuData(props.data || []);
        console.log('set state value')
        return () => {
        };
    }, [])
    // console.log('menuData', menuData);
    const myFunction = (event: React.MouseEvent) => {

    }

    const hasData = () => {
        return menuData != undefined && menuData != null;
    }

    const buttonHandler = (e: React.MouseEvent) => {
        console.log('menu item click');
    }

    return (
        <TopNav>
            {menuData && menuData.length > 0 &&
                menuData.map((item) => {
                    return (
                        <MenuItem key={item.name}>
                            <MenuItemA onClick={buttonHandler}>{item.name}</MenuItemA>
                        </MenuItem>
                    );
                })
            }
        </TopNav>
    )

}

export {
    MenuItem,
    Menu
}