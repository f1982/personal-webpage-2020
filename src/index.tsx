import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';

import { StoreProvider } from './store';

import Counter from './comps/Counter';

const render = () => {
    ReactDOM.render(
        <StoreProvider>
            <Counter />
            <App />
        </StoreProvider>,
        document.getElementById('root') as HTMLElement
    );
};

render();
