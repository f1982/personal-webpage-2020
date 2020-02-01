import { createModel } from '@rematch/core';
import ajax from '../../utils/ajax';

const API_URL = 'projects.json';

/**
 * 定义 works 这个页面需要的变量
 */
interface WorksState {
    apiLoadingState: string;
    currentCategory: string;
    items: Array<any>;
}

/**
 * Reducer 初次使用的一些预设值（默认值）
 */
const initialWorksState: WorksState = {
    apiLoadingState: 'notyet',
    currentCategory: 'default',
    items: []
};

const projects = createModel({
    state: initialWorksState,
    reducers: {
        updateProjects: (old, projects) => {
            return { ...old, items: projects };
        }
    },
    effects: {
        async syncProjects() {
            const response = await ajax({
                url: API_URL
            });
            const { data } = response;
            this.updateProjects(data);
        }
    }
});

export default projects;
