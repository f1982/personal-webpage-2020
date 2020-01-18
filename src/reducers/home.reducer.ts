import { HOME_DATA_LOADED } from '../constants';
import { FetchHomeDataAction } from '../actions/home.action';
import { LinkObject, ProjectObject } from '../types/interfaces';
/**
 * 定义 works 这个页面需要的变量
 */
interface HomeState {
    whatIDo: string;
    whatILike: string;
    highlightProjects: Array<ProjectObject>;
    sns: Array<LinkObject>;
}

/**
 * Reducer 初次使用的一些预设值（默认值）
 */
const initialHomeState: HomeState = {
    whatIDo: '',
    whatILike: '',
    highlightProjects: [],
    sns: []
};

/**
 *
 * @param state
 * @param action
 */
const homeReducer = (state: HomeState = initialHomeState, action: FetchHomeDataAction) => {
    // console.log('action', action);
    switch (action.type) {
        case HOME_DATA_LOADED:
            const { whatILike, whatIDo, projects, sns } = action.payload;
            return {
                ...state,
                whatIDo: whatIDo,
                whatILike: whatILike,
                highlightProjects: projects,
                sns: sns
            };
        default:
            return state;
    }
};

export default homeReducer;
