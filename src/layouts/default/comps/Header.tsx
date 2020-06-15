import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { FaBars, FaWindowClose } from 'react-icons/fa';
import routes from '../../../pages';
import menuStyles from '../../../assets/styles/menubar.module.css';
import ResponsiveMenuBar, { SmallMenuBar } from '../../../comps/MenuBar';
import { SettingContext } from '../../../Settings';
import Logo from '../../../assets/logo.png';

const ScreenSmallWidth: number = 768;

const Wrapper = styled.header`
    /* position: fixed;
    top: 0;
    left: 0; */
    width: 100%;
    /* height: 6rem; */
    z-index: 99;
    background-color: #fff;
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.09);
`;

const Inner = styled.div<{ minimumWidth: number }>`
    width: 100%;
    max-width: ${(props) => props.minimumWidth}px;
    height: 100%;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        padding: 0.5rem;
    }
`;

const Spacer = styled.div`
    flex: 1;
`;
const LogoImg = styled.img`
    @media screen and (max-width: 768px) {
        height: 56px;
    }
`;
const Header = (props: any) => {
    const settingContext = useContext(SettingContext);
    const match = useRouteMatch();

    return (
        <>
            <Wrapper>
                <Inner minimumWidth={settingContext.contentWidth}>
                    <NavLink to='/home'>
                        <LogoImg src={Logo} />
                    </NavLink>
                    <Spacer />
                    <ResponsiveMenuBar
                        routes={routes}
                        toggleCloseIcon={<FaWindowClose size='32' />}
                        toggleOpenIcon={<FaBars size='32' />}
                        smallDeviceWidth={768}></ResponsiveMenuBar>
                    <SmallMenuBar routes={routes} smallDeviceWidth={768} />
                </Inner>
            </Wrapper>
        </>
    );
};

export default Header;
