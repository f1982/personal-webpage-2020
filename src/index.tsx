import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle, myTheme } from './theme';
import { ThemeProvider } from 'styled-components';
import App from './App';

import StoreProvider from './store';


const render = () => {
    ReactDOM.render(
        <StoreProvider>
            <ThemeProvider theme={myTheme}>
                <App />
            </ThemeProvider>
            <GlobalStyle />
        </StoreProvider>,
        document.getElementById('root') as HTMLElement
    );
};

render();
