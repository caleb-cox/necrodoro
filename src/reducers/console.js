import { START_NEXT_TIMER } from '../actions/timer';

const initialState = {
  messages: [
    'The black altar awaits...',
  ],
};

export default function example(state = initialState, action) {
  switch (action.type) {
    case START_NEXT_TIMER: {
      return state;
    }
    default:
      return state;
  }
}
