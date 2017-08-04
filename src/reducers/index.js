import { combineReducers } from 'redux';
import timer from './timer';
import popup from './popup';

const rootReducer = combineReducers({ timer, popup });

export default rootReducer;
