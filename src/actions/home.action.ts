import { Dispatch } from 'redux';
import notify from '../utils/notify';
import { HOME_DATA_LOADED } from '../constants';
import ajax from '../utils/ajax';

const API_URL = 'home.json';
/**
 * Action Types
 */
type ProjectActionTypes = HOME_DATA_LOADED | '';

/**
 * Action 里所有要用到的变量
 * type 是必须的，用来区分 action 的类型
 * 其他变量根据需要自己设置
 */
export interface FetchHomeDataAction {
    type: ProjectActionTypes;
    payload: any;
}

const loadHomeData = async (dispatch: Dispatch) => {
    const responseData = await ajax({
        url: API_URL,
        params: { category: 'flash', page: 1 }
    });

    dispatch({
        type: HOME_DATA_LOADED,
        payload: responseData.data
    });
};

export { loadHomeData };
