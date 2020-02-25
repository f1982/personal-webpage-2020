import { createModel } from '@rematch/core';
import ajax from '../../utils/ajax';

const API_URL = 'projects.json';

const projects = createModel({
    state: {
        loadedState: '',
        currentCategory: '',
        items: []
    },
    reducers: {
        updateLoadingState: (state, newLoadedState) => {
            return { ...state, loadedState: newLoadedState };
        },
        updateProjects: (state, projects) => {
            return { ...state, items: projects, loadedState: 'loaded' };
        }
    },
    effects: {
        async syncProjects() {
            this.updateLoadingState('loading');
            const response = await ajax({
                url: API_URL
            });
            const { data } = response;
            this.updateProjects(data);
        }
    }
});

export default projects;
