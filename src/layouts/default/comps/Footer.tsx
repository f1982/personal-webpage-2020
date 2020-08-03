import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import IconScan from '../../../assets/icon-phone-scan.png';
import IconGoUp from '../../../assets/icon-go-top.png';
import { Links } from '../../../comps/link';
import { Popup } from '../../../comps/common/Popup';
var QRCode = require('qrcode.react');
const Wrapper = styled.div`
    padding-top: 1rem;
`;

const Inner = styled.div`
    width: 100%;
    max-width: 970px;
    margin: 0 auto;
`;

const BottomRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
        text-align: center;
    }
`;

const FooterButtonBase = css`
    display: inline-block;
    height: 60px;
    width: 60px;
    background-size: 100% auto;
    background-position-y:35px;
    background-repeat: no-repeat;
    background-image: url('${IconScan}');
    transition: all 0.35s cubic-bezier(0.250, 0.460, 0.450, 0.940);
    cursor: pointer;
    &:hover {
        background-position-y:10px;
    }
`;

const ScanContinueButton = styled.a`
    ${FooterButtonBase}
    background-image: url('${IconScan}');
`;

const BackToTopButton = styled.a`
    ${FooterButtonBase}
    background-image: url('${IconGoUp}');
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

const underLinkHandler = (evt: any) => {
    console.log('evt', evt.target.id);
};

const footerLinks = () => {
    return (
        <small style={{ color: `#ccc` }}>
            <span
                id='log-btn'
                onClick={(evt) => {
                    underLinkHandler(evt);
                }}>
                Logs
            </span>{' '}
            |{' '}
            <span
                id='links-btn'
                onClick={(evt) => {
                    underLinkHandler(evt);
                }}>
                Links
            </span>{' '}
            |{' '}
            <span
                id='statement-btn'
                onClick={(evt) => {
                    underLinkHandler(evt);
                }}>
                Statement
            </span>
        </small>
    );
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
                                <span role='img' aria-label='device'>
                                    📱
                                </span>
                                Scan this QR code
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
                    <ScanContinueButton
                        onClick={() => {
                            setShowQRCode(true);
                        }}></ScanContinueButton>

                    <BackToTopButton
                        onClick={() => {
                            window.scrollTo(0, 0);
                        }}
                        style={{ textAlign: `right` }}></BackToTopButton>
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
            <Inner style={{ padding: `3rem 0.5rem` }}>
                <BottomRow>
                    <div>
                        <p style={{ margin: `0.5rem auto` }}>
                            Have a mind that is open to everything and attached to nothing
                        </p>
                        {footerLinks()}
                    </div>
                    <div>
                        <Links linkData={LinkData} iconColor='#ccc' iconSize={24} category='all' />
                    </div>
                </BottomRow>
                <div style={{ textAlign: 'center', paddingTop: '1rem' }}>
                    <small style={{ color: `#ccc` }}>Copyright @2020 f1982.com Design by Andy</small>
                </div>
            </Inner>
        </Wrapper>
    );
};

export default Footer;
