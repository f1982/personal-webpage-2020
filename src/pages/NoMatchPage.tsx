import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

const Frame = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default () => {
    return (
        <Frame>
            <Helmet titleTemplate='%s - 404, Page not found.'>
                <meta name='description' content='404, Page not found.' />
            </Helmet>
            <h1>:(</h1>
            <h3>Oops! Page not found.</h3>
        </Frame>
    );
};
