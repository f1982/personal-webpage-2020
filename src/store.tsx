import * as React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index';
import { Provider } from 'react-redux';

const middleWare = [thunk];

const store = createStore(reducer, applyMiddleware(...middleWare));

const StoreProvider = (props: any) => {
    return <Provider store={store}>{props.children}</Provider>;
};

export default StoreProvider;
