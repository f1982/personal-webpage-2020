import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding-top: 3rem;
`;

const Inner = styled.div`
    width: 100%;
    max-width: 970px;
    margin: 0 auto;
    /* border: solid 1px #ff0000; */
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
    }
`;
const Footer = () => (
    <Wrapper>
        <Inner>
            <div style={{ display: `flex`, flexDirection: `row`, justifyContent: `space-between` }}>
                <span>
                    <a href='#'>Top</a>
                </span>
                <span>
                    <a href='mobile'>Mobile</a>
                </span>
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
                    <p>Have a mind that is open to everything and attached to nothing</p>
                    <small>Copyright @2020 f1982.com Design by Andy</small>
                </div>
                <div>sns apps</div>
            </Under>
        </Inner>
    </Wrapper>
);

export default Footer;
