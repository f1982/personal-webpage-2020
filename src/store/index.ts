import { init } from '@rematch/core'
import logger from 'redux-logger'
import * as models from './models/'

const stores = init({
  models,
  redux: {
    middlewares: [logger]
  }
})

export default stores
export const { dispatch } = stores
