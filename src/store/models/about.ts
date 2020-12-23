import { createModel } from '@rematch/core'
import ajax from '../../utils/ajax'

const API_URL = 'about.json'

/**
 * About state format
 */
// interface AboutState {
//   myName: string
//   myPosition: string
//   summary: string
//   timelines: any
// }

const about = createModel({
  state: {
    loadedState: '',
    sections: {},
    timelines: []
  },
  reducers: {
    updateLoadedState(state, loadedState) {
      return { ...state, loadedState: loadedState }
    },
    updateTimeline(state, timelines) {
      return { ...state, timelines: timelines }
    },

    updateSections(state, sections) {
      return { ...state, sections: sections }
    }
  },
  effects: {
    async syncInfo() {
      this.updateLoadedState('loading')
      const responseData = await ajax({
        url: API_URL
      })
      const { data } = responseData
      this.updateTimeline(data.timelines)
      this.updateSections(data.sections)
      this.updateLoadedState('loaded')
    }
  }
})

export default about
