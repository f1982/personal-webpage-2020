import { combineReducers } from 'redux';
import aboutReducer from './about.reducer';
import worksReducer from './works.reducer';
import homeReducer from './home.reducer';

export default combineReducers({
    aboutReducer,
    worksReducer,
    homeReducer
});
