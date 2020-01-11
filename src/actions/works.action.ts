import { Dispatch } from 'redux';
import notify from '../utils/notify';
import { LOADED_WORKS, LOADING_WORKS, LOADED_ERROR_WORKS } from '../constants';
import ajax from '../utils/ajax';

const API_URL='raw/de5a5e318fc29a239771ed9f431b7c8132b7b643/projects.json'
/**
 * Action Types
 */
type ProjectActionTypes = LOADING_WORKS | LOADED_WORKS;

/**
 * Action 里所有要用到的变量
 * type 是必须的，用来区分 action 的类型
 * 其他变量根据需要自己设置
 */
export interface FetchWorksAction {
    type: ProjectActionTypes;
    payload: Array<any>;
    msg: '';
}

const loadProjects = async (dispatch: Dispatch) => {
    const responseData = await ajax({
        url: API_URL,
        params: { category: 'flash', page: 1 }
    });
    const { data: projects } = responseData;
    console.log('projects', projects);

    dispatch({
        type: LOADED_WORKS,
        payload: projects
    });
};
// export
/**
 * dispatch 会自动传递过来
 * @param dispatch
 */
const fetchWorks = (dispatch: Dispatch) => {
    //错误处理，把加载出错的信息 throw 出去给 catch
    const handleErrors = (response: any) => {
        if (!response.ok) {
            throw Error(response.statusText);
            return;
        }
        return response.json();
    };

    return fetch(`http://localhost:3000/static/data/projects.json`)
        .then(handleErrors)
        .then(json => {
            console.log('json', json.data);
            dispatch({
                type: 'works_fetch_done',
                payload: json.data
            });
        })
        .catch(function(error) {
            //出错处理，把错误结果显示出来
            //这里有多个选择
            //1.直接报错
            //2.抛给页面处理
            console.log(error);
            notify(error);
            // dispatch({
            //     type: 'works_fetch_error',
            //     payload:[],
            //     msg: error
            // });
        });
};

export { loadProjects, fetchWorks };
