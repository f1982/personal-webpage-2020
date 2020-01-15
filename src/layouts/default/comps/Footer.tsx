import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    height: 10rem;
    background-color: #89cebf;
`;
const Copyright = styled.div`
    font-size: 12px;
    color: #eee;
    position: absolute;
    bottom: 1rem;
    width: 100%;
    text-align: center;
`;
const Footer = () => (
    <Wrapper>
        {/* <h2>Footer</h2> */}
        <Copyright>@2020 Copyright f1982.com Design by Andy</Copyright>
    </Wrapper>
);

export default Footer;
