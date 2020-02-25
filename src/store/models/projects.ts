import { createModel } from '@rematch/core';
import ajax from '../../utils/ajax';

const API_URL = 'projects.json';

/**
 * 定义 works 这个页面需要的变量
 */
// interface WorksState {
//     loadedState: string;
//     currentCategory: string;
//     items: Array<any>;
// }

/**
 * Reducer 初次使用的一些预设值（默认值）
 */
// const initialWorksState: WorksState = {
//     loadedState: 'notyet',
//     currentCategory: 'all',
//     items: []
// };

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
