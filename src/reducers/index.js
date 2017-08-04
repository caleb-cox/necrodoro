import { combineReducers } from 'redux';
import timer from './timer';
import popup from './popup';
import console from './console';

const rootReducer = combineReducers({ timer, popup, console });

export default rootReducer;
