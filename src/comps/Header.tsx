import * as React from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import { FaAddressBook, FaEnvelopeOpenText, FaMobileAlt, FaAt } from 'react-icons/fa';
import { GlobalStyle, myTheme } from '../theme';
import Avatar from '../assets/avatar-pixel.jpg';

interface SProps {
    theme?: any;
    name?: string;
    position?: string;
}

const UserContainer = styled.div`
    text-align: center;
    margin-bottom: 2rem;
`;
const UserAvatar = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    vertical-align: middle;
`;
const UserName = styled.h3`
    color: ${props => props.theme.colors.main};
    padding-top: 1rem;
    margin: 0;
`;
const UserPosition = styled.h4`
    color: ${props => props.theme.colors.secondary};
    padding: 0;
    /* margin-bottom: 0 0 1rem 0; */
    margin: 0;
`;
const InfoItem = styled.span`
    margin-right: 10px;
    line-height: 1.2rem;
    vertical-align: middle;
`;
const InfoItemText = styled.small`
    line-height: 1.2rem;
    vertical-align: middle;
    color: ${props => props.theme.colors.secondary};
`;

//icons
const EnvelopeOpenText = styled(FaEnvelopeOpenText)`
    color: #ffcc00;
    vertical-align: middle;
    margin-right: 4px;
`;

const MobileAlt = styled(FaMobileAlt)`
    color: #ffcc00;
    vertical-align: middle;
    margin-right: 4px;
`;
const At = styled(FaAt)`
    color: #ffcc00;
    vertical-align: middle;
    margin-right: 4px;
`;

/**
 * Header
 *
 * @param props
 */
const Header = (props: SProps) => {
    return (
        <UserContainer>
            <UserAvatar src={Avatar}></UserAvatar>
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
    );
};

export { Header };
