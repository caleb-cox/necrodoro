import { combineReducers } from 'redux';
import timer from './timer';
import popup from './popup';
import menu from './menu';

const rootReducer = combineReducers({ timer, popup, menu });

export default rootReducer;
