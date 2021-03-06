import Home from './Home';
import { connect } from 'react-redux';
/**
 *  从 RootState 里提取出来这个 Component 需要用的变量
 *  这里的 State 就是数据（状态）的意思，不要混淆
 *
 * @param rootState
 */
const mapStatesToProps = (rootState: any) => {
    // const { projects, whatIDo, whatILike, sns } = rootState.home;
    return {
        ...rootState.home,
        ...rootState.appConfig
    };
};

const mapReducersToProps = (dispatch: any) => ({
    syncHome: dispatch.home.syncHome
});

export default connect(mapStatesToProps, mapReducersToProps)(Home);
