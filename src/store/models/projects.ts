import { createModel } from '@rematch/core'
import ajax from '../../utils/ajax'
import { ProjectObject } from '../../types/interfaces'

const API_URL = 'projects.json'

let baseUrl = process.env.REACT_APP_STATIC_BASES_URL
baseUrl = baseUrl + 'images/projects/'

const projects = createModel({
  state: {
    loadedState: '',
    currentCategory: '',
    items: []
  },
  reducers: {
    updateLoadingState: (state, newLoadedState) => {
      return { ...state, loadedState: newLoadedState }
    },
    updateProjects: (state, projects) => {
      // update static file path base on the .env file configuration
      projects.forEach((object: ProjectObject) => {
        object.cover = object.cover ? baseUrl + object.cover : ''
        object.icon = object.icon ? baseUrl + object.icon : ''
        object.qrcode = object.qrcode !== '' ? baseUrl + object.qrcode : ''
        for (let i = 0; i < object.images.length; i++) {
          object.images[i] = baseUrl + object.images[i]
        }
      })
      return { ...state, items: projects, loadedState: 'loaded' }
    }
  },
  effects: {
    async syncProjects() {
      this.updateLoadingState('loading')
      const response = await ajax({
        url: API_URL
      })
      const { data } = response
      this.updateProjects(data)
    }
  }
})

export default projects
