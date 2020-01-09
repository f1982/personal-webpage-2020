import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';

import { createStore, combineReducers, applyMiddleware } from 'redux';

import reducer from './reducers/index';
import Counter from './comps/Counter';
import thunk from 'redux-thunk';

const middleWare = [thunk];

const store = createStore(reducer, applyMiddleware(...middleWare));

// (async () => {
//   console.log("render");
//   ReactDOM.render(
//     // <Provider store={{}}>
//       <App />
//     // </Provider>
//     ,
//     document.getElementById("root") as HTMLElement
//   );
// })();

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Counter />
            <App />
        </Provider>,
        document.getElementById('root') as HTMLElement
    );
};

render();
