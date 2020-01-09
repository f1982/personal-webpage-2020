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

type ProjectActionTypes = 'loading' | 'works_fetch_done' | 'works_fetch_error';

interface WorksState {
    apiLoadingState: string;
    currentCategory: string;
    items: Array<any>;
}

const initialWorksState: WorksState = {
    apiLoadingState: 'notyet',
    currentCategory: 'default',
    items: []
};
const projects = (
    state = {
        apiLoadingState: 'notyet',
        currentCategory: 'default',
        items: []
    },
    action: {
        type: ProjectActionTypes;
        payload: Array<any>;
        msg: '';
    }
) => {
    console.log('projects state', state);
    switch (action.type) {
        case 'loading':
            return {
                ...state,
                apiLoadingState: 'loading'
            };
        case 'works_fetch_done':
            console.log('works_fetch_done');
            return {
                ...state,
                items: action.payload
            };
        case 'works_fetch_error':
            return {
                ...state,
                apiLoadingState: action.msg
            };
        default:
            return state;
    }
};

export default combineReducers({
    counter,
    projects
});
