import React, { useState } from 'react';
import styled from 'styled-components';
import IconScan from '../../../assets/icon-phone-scan.png';
import IconGoUp from '../../../assets/icon-go-top.png';
import { Links } from '../../../comps/Links';
import { Popup } from '../../../comps/Popup';
import { useLocation } from 'react-router-dom';
var QRCode = require('qrcode.react');
const Wrapper = styled.div`
    padding-top: 3rem;
`;

const Inner = styled.div`
    width: 100%;
    max-width: 970px;
    margin: 0 auto;
`;
const Copyright = styled.p`
    font-size: 10px;
`;

const Under = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
        text-align: center;
    }
`;

const FooterLink = styled.a`
    display: inline-block;
    overflow: hidden;
    height: 30px;
    width: 80px;
    &:hover {
        /* height: 80px; */
    }
`;

const LinkData = [
    {
        id: 1,
        name: 'Instagram',
        type: 'outside',
        icon: 'instagram',
        link: 'https://www.instagram.com/iandycao/',
        alt: "Andy's Instagram",
        tag: null,
        hidden: 0
    },
    {
        id: 5,
        name: 'Twitter',
        type: 'outside',
        icon: 'twitter',
        link: 'https://twitter.com/enjoywound',
        alt: "Andy's Twitter",
        tag: null,
        hidden: 0
    },
    {
        id: 3,
        name: 'Youtube',
        type: 'outside',
        icon: 'youtube',
        link: 'https://www.youtube.com/c/AndyCaoisme',
        alt: "Andy's Youtube Channel",
        tag: null,
        hidden: 0
    }
];

const getCurrentURL = () => {
    return window.location.href;
};

const Footer = () => {
    const [showQRCode, setShowQRCode] = useState(false);
    return (
        <Wrapper>
            {showQRCode ? (
                <Popup
                    id='qr-code'
                    containerWidth='300px'
                    containerHeight='420px'
                    closeHandler={() => {
                        setShowQRCode(false);
                    }}>
                    <div
                        style={{
                            display: `flex`,
                            flexDirection: `column`,
                            justifyContent: `center`,
                            alignItems: `center`,
                            height: `100%`,
                            padding: `1rem`
                        }}>
                        <QRCode value={getCurrentURL()} />
                        <div style={{ textAlign: `center` }}>
                            <p>
                                📱Scan this QR code
                                <br />
                                You can continue to 👀browse on other devices
                            </p>
                        </div>
                    </div>
                </Popup>
            ) : null}

            <Inner>
                <div
                    style={{
                        display: `flex`,
                        flexDirection: `row`,
                        padding: `0 0.5rem`,
                        justifyContent: `space-between`
                    }}>
                    <FooterLink
                        onClick={() => {
                            setShowQRCode(true);
                        }}>
                        <img src={IconScan} />
                    </FooterLink>

                    <FooterLink
                        onClick={() => {
                            window.scrollTo(0, 0);
                        }}
                        style={{ textAlign: `right` }}>
                        <img src={IconGoUp} />
                    </FooterLink>
                </div>
            </Inner>

            <div
                style={{
                    width: `100%`,
                    height: `1px`,
                    backgroundColor: `#fff`,
                    borderStyle: `solid`,
                    borderColor: `#D2D2D2`,
                    borderWidth: `0 0 1px 0`
                }}></div>
            <Inner style={{ padding: `3rem 0` }}>
                <Under>
                    <div>
                        <p style={{ margin: `0.5rem auto` }}>
                            Have a mind that is open to everything and attached to nothing
                        </p>
                        <small style={{ color: `#ccc` }}>Copyright @2020 f1982.com Design by Andy</small>
                    </div>
                    <div>
                        <Links linkData={LinkData} iconColor='#ccc' iconSize={24} category='all' />
                    </div>
                </Under>
            </Inner>
        </Wrapper>
    );
};

export default Footer;
