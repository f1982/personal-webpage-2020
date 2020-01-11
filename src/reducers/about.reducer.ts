import { LOADED_ABOUT, AboutAction } from '../actions/about.action';

/**
 * About state format
 */
interface AboutState {
    myName: string;
    myPosition: string;
    summary: string;
    timeline: {
        experience: [];
        journey: [];
    };
}

/**
 * Initial value for the state
 */
const initialState: AboutState = {
    myName: 'noname',
    myPosition: 'noposition',
    summary: '',
    timeline: {
        experience: [],
        journey: []
    }
};

/**
 * About reducer
 * @param state reducer state
 * @param action reducer action
 */
const aboutReducer = (state: AboutState = initialState, action: AboutAction) => {
    switch (action.type) {
        case 'loading':
            return { ...state };
        case LOADED_ABOUT:
            return { ...state, timeline: action.payload };
        default:
            return state;
    }
};

export default aboutReducer;
