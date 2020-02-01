import { init } from '@rematch/core';

import * as models from './models/';

const stores = init({ models });

export default stores;
export const { dispatch } = stores;
