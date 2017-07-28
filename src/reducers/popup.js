import { START_TIMER, END_TIMER } from '../actions/timer';

const initialState = {
  popupType: 'initial',
};

export default function example(state = initialState, action) {
  switch (action.type) {
    case START_TIMER: {
      return Object.assign({}, state, {
        popupType: 'timer',
      });
    }
    case END_TIMER: {
      return Object.assign({}, state, {
        popupType: 'wait',
      });
    }
    default:
      return state;
  }
}
