import { SET_NEXT_TIMER, START_NEXT_TIMER } from '../actions/timer';

const initialState = {
  messages: [
    'The black altar awaits...',
  ],
  nextMessages: [
    'First long timer started',
    'First long timer ended',
    'First short timer started',
    'First short timer ended',
    'Second long timer started',
    'Second long timer ended',
    'Second short timer started',
    'Second short timer ended',
    'Third long timer started',
    'Third long timer ended',
    'Third short timer started',
    'Third short timer ended',
    'Fourth long timer started',
    'Fourth long timer ended',
    'Fourth short timer started',
  ],
};

export default function example(state = initialState, action) {
  switch (action.type) {
    case SET_NEXT_TIMER: {
      if (state.nextMessages.length === 0) {
        return Object.assign({}, state, initialState);
      }
    }
    // falls through
    case START_NEXT_TIMER: {
      const newMessages = [
        ...state.messages,
        state.nextMessages[0],
      ];
      const newNextMessages = state.nextMessages.slice(1);

      return Object.assign({}, state, {
        messages: newMessages,
        nextMessages: newNextMessages,
      });
    }
    default:
      return state;
  }
}
