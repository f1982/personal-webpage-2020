import { connect } from 'react-redux';
import AppView from './AppView';

const mapStatesToProps = (rootState: any) => ({
  settings: rootState.appConfig.settings,
  loadedState: rootState.appConfig.loadedState
});

const mapDispatchToProps = (dispatch: any) => ({
  syncAppConfig: dispatch.appConfig.syncConfig
});

export default connect(mapStatesToProps, mapDispatchToProps)(AppView);
