import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FaBars, FaWindowClose } from 'react-icons/fa'
import ResponsiveMenuBar, { SmallMenuBar } from '../MenuBar'

const Wrapper = styled.header`
  width: 100%;
  z-index: 99;
  background-color: #fff;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.09);
`

const Inner = styled.div`
  width: 100%;
  max-width: 950px;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`

const Spacer = styled.div`
  flex: 1;
`

const LogoImg = styled.img`
  vertical-align: middle;
  @media screen and (max-width: 768px) {
    height: 48px;
  }
`

interface IProps {
  routes: any[]
}

const Header: React.FC<IProps> = ({ routes }: IProps) => {
  return (
    <>
      <Wrapper>
        <Inner>
          <NavLink to='/home'>
            <LogoImg src={process.env.PUBLIC_URL + 'static/images/logo.png'} />
          </NavLink>
          <Spacer />
          <ResponsiveMenuBar
            routes={routes}
            toggleCloseIcon={<FaWindowClose size='32' />}
            toggleOpenIcon={<FaBars size='32' />}
            smallDeviceWidth={768}
          />
          <SmallMenuBar routes={routes} smallDeviceWidth={768} />
        </Inner>
      </Wrapper>
    </>
  )
}

export default Header
