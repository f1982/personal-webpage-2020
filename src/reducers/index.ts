import { combineReducers } from 'redux';
import aboutReducer from './about.reducer';
import worksReducer from './works.reducer';

type Actions = 'reset' | 'increment' | 'decrement';

interface Action {
    type: Actions;
}
const counter = (state: number = 10, action: Action) => {
    console.log('action', action);
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;

        default:
            return state;
    }
};

export default combineReducers({
    counter,
    aboutReducer,
    worksReducer
});
