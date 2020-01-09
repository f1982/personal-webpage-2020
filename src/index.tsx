import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';

import { createStore, combineReducers } from 'redux';

import counter from './reducers/index';
import Counter from './comps/Counter';

const store = createStore(counter);

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

store.subscribe(render);
