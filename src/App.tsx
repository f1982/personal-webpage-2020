import { connect } from 'react-redux'
import AppView from './AppView'

const mapStatesToProps = (rootState: any) => ({
  loadedState: rootState.appConfig.loadingState
})

const mapDispatchToProps = (dispatch: any) => ({
  syncAppConfig: dispatch.appConfig.syncConfig
})

export default connect(mapStatesToProps, mapDispatchToProps)(AppView)
