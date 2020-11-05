import React from 'react';
import Helmet from 'react-helmet';

import styled from 'styled-components';

const Info = styled.div`
    width: 480px;
    height: auto;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`;
const ClosurePage = () => {
    return <>
        <Helmet >
            <title>The website is temporary closed</title>
            <meta name="description" content="Sorry, the website is temporary closed. " />
        </Helmet>
        <Info>
            <h1>Sorry :(</h1>
            <p style={{ height: `2rem` }} />
            <p>The website is temporary closed.It may open again, you can try one day later.</p>
        </Info>

    </>
};

export default ClosurePage;
