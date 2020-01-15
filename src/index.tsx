import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { GlobalStyle, myTheme } from './theme';
import { ThemeProvider } from 'styled-components';
import App from './App';

import { StoreProvider } from './store';

import Counter from './comps/Counter';

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
