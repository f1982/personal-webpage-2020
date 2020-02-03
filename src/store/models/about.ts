import { createModel } from '@rematch/core';
import ajax from '../../utils/ajax';

const API_URL = 'about.json';

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
    timelines: []
};

const about = createModel({
    state: initialState,
    reducers: {
        updateInfo(stateOld: AboutState, state: AboutState) {
            // const { timelines, summary } = payload;
            // return { ...state, summary: summary, timelines: timelines };
            return state;
        }
    },
    effects: {
        async syncInfo() {
            const responseData = await ajax({
                url: API_URL
            });
            const { data } = responseData;
            this.updateInfo(data);
        }
    }
});

export default about;
