import { connect } from 'react-redux';
import About from './About';

const mapStatesToProps = (rootState: any) => {
    const { loadedState, timelines, sections } = rootState.about;
    console.log(rootState.about);
    return {
        loadedState: loadedState,
        sections: sections,
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
