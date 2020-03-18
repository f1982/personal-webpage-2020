import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding-top: 3rem;
    height: 10rem;
    background-color: #89cebf;
`;
const Copyright = styled.div`
    font-size: 10px;
    color: #eee;
    width: 100%;
    text-align: center;
`;
const Footer = () => (
    <Wrapper>
        <Copyright>Copyright @2020 f1982.com Design by Andy</Copyright>
    </Wrapper>
);

export default Footer;
