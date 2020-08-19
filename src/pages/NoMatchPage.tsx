import React from 'react';
import styled from 'styled-components';

const Frame = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Page404 = (props: any) => {
    return (
        <Frame>
            <h1>404</h1>
            <h3>Can't find the page!</h3>
        </Frame>
    );
};

export default Page404;
