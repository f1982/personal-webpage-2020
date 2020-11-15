import React from 'react';
import { Router, MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';
import ResponsiveMenuBar, { MenuBar, MenuBarItem, SmallMenuBar } from './index';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import menuStyles from '../assets/styles/menubar.module.css';
const resizeWindow = (x, y) => {
    window.innerWidth = x;
    window.innerHeight = y;
    window.dispatchEvent(new Event('resize'));
};

const routes = [
    {
        title: 'Home',
        path: '/home',
        exact: true,
        component: null
    },
    {
        title: 'Works',
        path: '/works',
        component: null
    },
    {
        title: 'Hobbies',
        path: '/hobbies',
        component: null
    },
    {
        title: 'About',
        path: '/about',
        component: null
    },
    {
        title: 'Contact',
        path: '/contact',
        component: null
    }
];

test('base setups', () => {
    const tree = renderer.create(
        <MemoryRouter>
            <ResponsiveMenuBar
                routes={routes}
                toggleCloseIcon={<span>close</span>}
                toggleOpenIcon={<span>open</span>}
                smallDeviceWidth={768}
            />
        </MemoryRouter>
    );
    const json = tree.toJSON();

    //Desktop screen size
    expect(json).toHaveStyleRule('display', 'flex');
    expect(json).toHaveStyleRule('z-index', '999');

    //display as set
    expect(tree.root.findByType(ResponsiveMenuBar).children[0].props.children.length).toEqual(routes.length);
});

// When testing react-router related element
// you need to add <MemoryRouter> for wrapping the test components
//Small screen size
//小屏幕手机状态
test('show menubar in a small screen ', () => {
    const tree = renderer
        .create(
            <MemoryRouter>
                <ResponsiveMenuBar
                    routes={routes}
                    toggleCloseIcon={<span>close</span>}
                    toggleOpenIcon={<span>open</span>}
                    smallDeviceWidth={768}
                />
            </MemoryRouter>
        )
        .toJSON();
    expect(tree).toHaveStyleRule('display', 'none', {
        media: 'screen and (max-width: 768px)'
    });
});

test('menu item hover ', () => {
    const tree = renderer.create(
        <MemoryRouter>
            <MenuBarItem
                data-text='title'
                data-mark='mark'
                exact={false}
                to='/test'
                activeClassName={menuStyles.activeNavLink}>
                <span>'🌮'</span>
            </MenuBarItem>
        </MemoryRouter>
    );
    const treeJSON = tree.toJSON();

    expect(treeJSON).toHaveStyleRule('font-size', '1rem');

    expect(treeJSON).toHaveStyleRule('background-color', '#74ddf7', {
        modifier: ':hover'
    });
    //Right active class name set
    expect(tree.root.findByType(MenuBarItem).props.activeClassName).toEqual(menuStyles.activeNavLink);
});

// test('display correctly', () => {
//     const tree = renderer.create(<MediaBanner title='hello' />).toJSON();
//     expect(tree).toHaveStyleRule('position', 'relative');
//     expect(tree).toHaveStyleRule('height', '16rem');
//     expect(tree).toHaveStyleRule('height', '11rem', {
//         media: 'screen and (max-width: 768px)'
//     });
// });
