import { SET_NEXT_TIMER, LONG_TIMER_DURATION } from '../actions/timer';

const initialState = {
  litCandles: 0,
  timerId: 1,
  duration: LONG_TIMER_DURATION,
};

export default function example(state = initialState, action) {
  switch (action.type) {
    case SET_NEXT_TIMER: {
      return Object.assign({}, state, action.nextTimerState);
    }
    default:
      return state;
  }
}
