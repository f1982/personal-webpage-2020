import { connect } from 'react-redux'
import Projects from './Projects'

/**
 *  从 RootState 里提取出来这个 Component 需要用的变量
 *  这里的 State 就是数据（状态）的意思，不要混淆
 *
 * @param rootState
 */
const mapStatesToProps = (rootState: any) => {
  return {
    total: rootState.appConfig.projects.length,
    projects: rootState.appConfig.projects
  }
}

// const mapReducersToProps = (dispatch: any) => {
//   return {}
// }

export default connect(mapStatesToProps)(Projects)
