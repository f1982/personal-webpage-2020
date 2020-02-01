import { connect } from 'react-redux';
import About from './About';

const mapStatesToProps = (rootState: any) => ({
    summary: rootState.about.summary,
    timelines: rootState.about.timelines
});

/**
 * Map dispath to props
 * 可以映射方法到 About 这个组件里
 * @param dispatch
 */
const mapDispatchToProps = (dispatch: any) => ({
    syncInfo: dispatch.about.syncInfo
});
export default connect(mapStatesToProps, mapDispatchToProps)(About);
