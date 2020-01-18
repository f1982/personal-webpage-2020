import { combineReducers } from 'redux';
import appReducer from './app.reducer';
import aboutReducer from './about.reducer';
import worksReducer from './works.reducer';
import homeReducer from './home.reducer';

const rootReducer =  combineReducers({
    appReducer,
    aboutReducer,
    worksReducer,
    homeReducer
});


export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
