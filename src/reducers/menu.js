import { SET_NEXT_MENU } from '../actions/menu';
import CHOICES from '../assets/choices';

const initialState = {
  choices: [
    CHOICES.eye,
  ],
  lastChoiceKey: null,
};

export default function example(state = initialState, action) {
  switch (action.type) {
    case SET_NEXT_MENU: {
      return Object.assign({}, state, {});
    }
    default:
      return state;
  }
}
