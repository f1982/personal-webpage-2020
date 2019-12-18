import * as React from 'react'
import styled, { createGlobalStyle, css } from 'styled-components'
import {FaAddressBook,FaEnvelopeOpenText,FaMobileAlt, FaAt } from 'react-icons/fa';

interface SProps {
    theme?: any
    name?: string,
    position?: string
}

const UserContainer = styled.div`
    text-align: center;
    margin-bottom: 2rem;
`
const UserAvatar = styled.img`
    width:200px;
    height: 200px;
    border-radius: 50%;
    vertical-align: middle;
`
const UserName = styled.h3`
    color: ${props => props.theme.colors.main};
    padding-top: 1rem;
    margin: 0;
`
const UserPosition = styled.h4`
    color: ${props => props.theme.colors.secondary};
    padding: 0;
    /* margin-bottom: 0 0 1rem 0; */
    margin: 0;
`
const InfoItem = styled.span`
    margin-right: 10px;
    line-height: 1.2rem;
    vertical-align:middle;
`
const InfoItemText = styled.span`
    line-height: 1.2rem;
    vertical-align:middle;
`

const Summary = styled.p`
    padding: 0.5rem 2rem;
    text-align: justify;
`

//icons
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



const Header = (props: SProps) => {

    return (
        <UserContainer>
            <UserAvatar src='https://www.w3schools.com/howto/img_avatar.png'></UserAvatar>
            <UserName>{props.name}</UserName>
            <UserPosition>{props.position}</UserPosition>
            <ul>
                <InfoItem><EnvelopeOpenText /><InfoItemText>caojundan@gmail.com</InfoItemText></InfoItem>
                <InfoItem><MobileAlt /><InfoItemText>0284293657</InfoItemText></InfoItem>
                <InfoItem><At /><InfoItemText>http://f1982.com</InfoItemText></InfoItem>
            </ul>
            <Summary>
            15+ years experience specializing in the front-end, mobile apps and casual game development. Able to effectively self-manage during independent projects as well as collaborate in a team setting. The video app which I deeply participated in has obtained over 100 million downloads. The registrations of personal websites has exceeded 2000 per day and the downloads of the games that designed and developed by myself independently has exceeded 1 million times. Super nerd with macOS, Linux and enjoy to automate and optimize the development process and productive workflow. Interest in problem-solving, learning new technologies and tools.
            </Summary>
        </UserContainer>
    )
}

export {
    Header
};