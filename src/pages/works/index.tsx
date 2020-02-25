import { connect } from 'react-redux';
import Projects from './Projects';

/**
 *  从 RootState 里提取出来这个 Component 需要用的变量
 *  这里的 State 就是数据（状态）的意思，不要混淆
 *
 * @param rootState
 */
const mapStatesToProps = (rootState: any) => {
    const { items, loadedState } = rootState.projects;
    // return rootState.projects;
    return {
        loadedState: loadedState,
        total: items.length,
        items: items
    };
};

const mapReducersToProps = (dispatch: any) => {
    console.log('dispatch', dispatch.projects);
    return {
        syncProjects: dispatch.projects.syncProjects
    };
};

export default connect(mapStatesToProps, mapReducersToProps)(Projects);
