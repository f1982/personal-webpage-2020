import { HOME_DATA_LOADED } from '../constants';
import { FetchHomeDataAction } from '../actions/home.action';
/**
 * 定义 works 这个页面需要的变量
 */
interface WorksState {
    whatIDo: string;
    whatILike: string;
    highlightProjects: Array<any>;
}

/**
 * Reducer 初次使用的一些预设值（默认值）
 */
const initialWorksState: WorksState = {
    whatIDo: '',
    whatILike: '',
    highlightProjects: []
};

/**
 *
 * @param state
 * @param action
 */
export default (state: WorksState = initialWorksState, action: FetchHomeDataAction) => {
    console.log('action', action);
    switch (action.type) {
        case HOME_DATA_LOADED:
            const { whatILike, whatIDo, projects } = action.payload;
            return {
                ...state,
                whatIDo: whatIDo,
                whatILike: whatILike,
                highlightProjects: projects
            };
        default:
            return state;
    }
};
