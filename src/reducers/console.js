import { SET_NEXT_TIMER, START_NEXT_TIMER } from '../actions/timer';

const initialState = {
  messages: [
    'The black altar awaits. The New Moon rises, and the witching hour approaches. Tonight you will summon your master Beelzebub, King of Pestilence, to grant you a boon.',
  ],
  nextMessages: [
    'You begin the incantation. "Beelzebub, Lord of Flies, I invoke thee / Come forth, Prince of Hell, and manifest thyself." You repeat this invocation one hundred and fifty times.',
    'The incantaion complete, you light the first candle. The room feels colder, and you detect the faint smell of rotten flesh. You have a moment to rest before continuing the ritual.',
    'You breathe in deeply, the stench of death and cinder filling your nostrils. This ritual calls for several periods of tranquility, in order to keep your mind sharp.',
    'Completing your first rest, you quickly consult the unholy text. The next step calls for the desecration of your sacred instruments, the goblet and the dagger.',
    'Focusing on dark intent, you lift your dagger and slice the palm of your left hand. You hold it over the silver chalice, bleeding, and chant an ancient incantation of desecration.',
    'You place the dagger back upon the altar and light the second candle. The room feels colder still, and the odor of decay grows stronger. You hear the faint buzzing of insects.',
    'Taking your second pause, you wrap a strip of linen around your wounded hand. You stretch your arms over your head and reflect upon your actions. The point of no return approaches.',
    '2nd S end',
    '3rd T start',
    'You light the third candle.',
    '3rd S start',
    '3rd S end',
    '4th T start',
    'You light the fourth candle.',
    'Final rest start',
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
