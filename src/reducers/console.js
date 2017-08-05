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
    'Your rest completed, you quickly prepare for the next part of the ritual. From under the altar you take an old ceramic jar. You pull off the lid and reach inside.',
    'From the jar, you take a lump of grey, rotting flesh. The liver of a black goat, marinated in fetid water. You hold it over the altar and offer it to your dark master.',
    'The offering now made, you light the third candle. The sound of buzzing insects grows louder, the foul stench stronger. In the darkness yonder, you see some kind of movement.',
    'You take your final rest. A bead of freezing sweat falls down your brow. Were the elders right? Is this ritual too demanding? Bah, a million poxes on those old fools!',
    'Now comes the last step in the invocation. You pour the chalice of blood over the rotten goat liver, swear a small oath of protection, and reach once more under the altar.',
    'In your hands you hold a fork and knife. From the darkness, you hear what may be laughter. You cut off a piece of liver and eat it. The remaining flesh is consumed in black fire.',
    'You light the fourth candle. The buzzing of insects grows to a cacophany, and the smell of death becomes too much to bear. You vomit violently across the altar. You look up...',
    'Taking the form of an enormous fly, Beelzebub hovers before you. He is absolutely horrifying in his splendor. From His thousand tiny mouths, he screams, "Heyyyyyyyy... what up."',
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
