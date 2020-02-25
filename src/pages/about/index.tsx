import { connect } from 'react-redux';
import About from './About';

const mapStatesToProps = (rootState: any) => {
    const { loadedState, timelines, summary } = rootState.about;
    return {
        loadedState: loadedState,
        summary: summary,
        timelines: timelines
    };
};

/**
 * Map dispath to props
 * 可以映射方法到 About 这个组件里
 * @param dispatch
 */
const mapDispatchToProps = (dispatch: any) => ({
    syncInfo: dispatch.about.syncInfo
});
export default connect(mapStatesToProps, mapDispatchToProps)(About);
