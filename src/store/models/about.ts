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

const about = createModel({
    state: {
        loadedState: '',
        summary: {},
        timelines: []
    },
    reducers: {
        updateLoadedState(state, loadedState) {
            return { ...state, loadedState: loadedState };
        },
        updateTimeline(state, timelines) {
            console.log('timelines', timelines);
            return { ...state, timelines: timelines };
        },

        updateSummary(state, summary) {
            return { ...state, summary: summary };
        }
    },
    effects: {
        async syncInfo() {
            this.updateLoadedState('loading');
            const responseData = await ajax({
                url: API_URL
            });
            const { data } = responseData;
            this.updateTimeline(data.timelines);
            this.updateSummary(data.summary);
            this.updateLoadedState('loaded');
        }
    }
});

export default about;
