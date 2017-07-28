import { START_TIMER, END_TIMER } from '../actions/timer';

const initialState = {
  timerType: 'long',
  duration: 25,
  timersCompleted: 0,
};

export default function example(state = initialState, action) {
  switch (action.type) {
    case START_TIMER: {
      return Object.assign({}, state, {
        timersCompleted: state.timersCompleted === 4 && state.timerType === 'long'
          ? 0
          : state.timersCompleted,
      });
    }
    case END_TIMER: {
      return Object.assign({}, state, action.newTimerState);
    }
    default:
      return state;
  }
}
