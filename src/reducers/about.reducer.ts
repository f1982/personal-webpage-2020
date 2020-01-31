import { LOADED_ABOUT, AboutAction } from '../actions/about.action';

/**
 * About state format
 */
interface AboutState {
    myName: string;
    myPosition: string;
    summary: string;
    timelines: any;
}

/**
 * Initial value for the state
 */
const initialState: AboutState = {
    myName: 'noname',
    myPosition: 'noposition',
    summary: '',
    timelines: {}
};

/**
 * About reducer
 * 
 * @param state reducer state
 * @param action reducer action
 */
const aboutReducer = (state: AboutState = initialState, action: AboutAction) => {
    console.log('action', action);
    switch (action.type) {
        case LOADED_ABOUT:
            const { timelines ,summary} = action.payload;
            return { ...state,
                summary: summary, 
                timelines: timelines };
        default:
            return state;
    }
};

export default aboutReducer;
export {initialState}