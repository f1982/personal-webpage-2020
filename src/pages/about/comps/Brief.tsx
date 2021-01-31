import * as React from 'react'
import styled from 'styled-components'
import { FaEnvelopeOpenText, FaMobileAlt, FaAt } from 'react-icons/fa'

import AndyAvatar from './../../../assets/images/avatar-pixel.jpg'

interface SProps {
  theme?: any
  name?: string
  position?: string
}

const UserContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`

const UserAvatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  vertical-align: middle;
`

const UserName = styled.h3`
  padding-top: 1rem;
  margin: 0;
`

const UserPosition = styled.h5`
  padding: 0;
  margin-top: 1rem;
  color: #999;
`

const InfoItem = styled.span`
  margin-right: 10px;
  line-height: 1.2rem;
  vertical-align: middle;
`

const InfoItemText = styled.small`
  line-height: 1.2rem;
  vertical-align: middle;
  font-size: 16px;
`

const EnvelopeOpenText = styled(FaEnvelopeOpenText)`
  color: #ffcc00;
  vertical-align: middle;
  margin-right: 4px;
`

const MobileAlt = styled(FaMobileAlt)`
  color: #ffcc00;
  vertical-align: middle;
  margin-right: 4px;
`

const At = styled(FaAt)`
  color: #ffcc00;
  vertical-align: middle;
  margin-right: 4px;
`

/**
 * Header
 *
 * @param props
 */
const Header = (props: SProps) => {
  return (
    <UserContainer>
      <UserAvatar src={AndyAvatar}></UserAvatar>
      <UserName>{props.name}</UserName>
      <UserPosition>{props.position}</UserPosition>
      <ul>
        <InfoItem>
          <EnvelopeOpenText />
          <InfoItemText>caojundan@gmail.com</InfoItemText>
        </InfoItem>
        <InfoItem>
          <MobileAlt />
          <InfoItemText>0284293657</InfoItemText>
        </InfoItem>
        <InfoItem>
          <At />
          <InfoItemText>http://f1982.com</InfoItemText>
        </InfoItem>
      </ul>
    </UserContainer>
  )
}

export { Header }
