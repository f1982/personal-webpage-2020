import { LOADED_WORKS } from '../constants';
import { FetchWorksAction } from '../actions/works.action';
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

/**
 *
 * @param state
 * @param action
 */
export default (state: WorksState = initialWorksState, action: FetchWorksAction) => {
    switch (action.type) {
        case 'loading':
            return {
                ...state,
                apiLoadingState: 'loading'
            };
        case LOADED_WORKS:
            console.log('works_fetch_done');
            return {
                ...state,
                apiLoadingState: 'loaded', //这里修改会覆盖原来 state 里的这个值
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
