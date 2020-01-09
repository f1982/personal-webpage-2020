import { combineReducers } from 'redux';

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

type ProjectReducerType = 'loading' | 'loaded';

const projects = (state: Array<any>=[], action: { type: ProjectReducerType; payload: Array<any> }) => {
    switch (action.type) {
        case 'loading':
            return [...state];
        default:
            return state;
    }
};

export default combineReducers({
    counter,
    projects
});
