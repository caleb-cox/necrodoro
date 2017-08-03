import { SET_NEXT_TIMER, START_NEXT_TIMER } from '../actions/timer';

const initialState = {
  popupType: 'debug',
};

export default function example(state = initialState, action) {
  switch (action.type) {
    case SET_NEXT_TIMER: {
      return Object.assign({}, state, {
        popupType: 'wait',
      });
    }
    case START_NEXT_TIMER: {
      return Object.assign({}, state, {
        popupType: 'timer',
      });
    }
    default:
      return state;
  }
}
