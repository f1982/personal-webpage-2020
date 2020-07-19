import React from 'react';
import { Router, MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';
import ResponsiveMenuBar, { MenuBar, MenuBarItem, SmallMenuBar } from './MenuBar';
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

test('only with a title ', () => {
    const tree = renderer
        .create(
            // When testing react-router related element
            // you need to add <MemoryRouter> for wrapping the test components
            <MemoryRouter>
                <ResponsiveMenuBar
                    routes={routes}
                    toggleCloseIcon={<span>close</span>}
                    toggleOpenIcon={<span>open</span>}
                    smallDeviceWidth={768}
                />
                //{' '}
            </MemoryRouter>
        )
        .toJSON();
});

test('show menubar in a small screen ', () => {
    // When testing react-router related element
    // you need to add <MemoryRouter> for wrapping the test components
    const tree = renderer
        .create(
            <MemoryRouter style={{ display: 'block' }}>
                <ResponsiveMenuBar
                    routes={routes}
                    toggleCloseIcon={<span>close</span>}
                    toggleOpenIcon={<span>open</span>}
                    smallDeviceWidth={768}
                />
            </MemoryRouter>
        )
        .toJSON();

    //Desktop screen size
    expect(tree).toHaveStyleRule('display', 'flex');
    expect(tree).toHaveStyleRule('z-index', '999');
    //Small screen size
    //小屏幕手机状态
    expect(tree).toHaveStyleRule('display', 'none', {
        media: 'screen and (max-width: 768px)'
    });
    expect(tree).toHaveStyleRule('z-index', '998', {
        media: 'screen and (max-width: 768px)'
    });
});

test('menu item hover ', () => {
    const tree = renderer
        .create(
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
        )
        .toJSON();

    expect(tree).toHaveStyleRule('font-size', '1rem');

    expect(tree).toHaveStyleRule('background-color', '#74ddf7', {
        modifier: ':hover'
    });
});

// test('display correctly', () => {
//     const tree = renderer.create(<MediaBanner title='hello' />).toJSON();
//     expect(tree).toHaveStyleRule('position', 'relative');
//     expect(tree).toHaveStyleRule('height', '16rem');
//     expect(tree).toHaveStyleRule('height', '11rem', {
//         media: 'screen and (max-width: 768px)'
//     });
// });
