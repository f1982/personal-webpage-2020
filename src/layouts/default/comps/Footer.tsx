import React from 'react';
import styled from 'styled-components';

const Copyright = styled.div`
    font-size: 15px;
    color: #ffcc00;
`;
const Footer = () => (
    <div>
        <h2>Footer</h2>
        <Copyright>copyright</Copyright>
    </div>
);

export default Footer;
