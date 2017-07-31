export const SET_NEXT_TIMER = 'SET_NEXT_TIMER';
export const START_NEXT_TIMER = 'START_NEXT_TIMER';

export const SHORT_TIMER_DURATION = 5;
export const MEDIUM_TIMER_DURATION = 15;
export const LONG_TIMER_DURATION = 25;

const timerActions = {
  setNextTimer: (timerId) => {
    const nextLitCandles = Math.ceil((timerId % 8) / 2);
    const nextTimerId = timerId + 1;

    let nextDuration;
    if (nextTimerId % 8 === 0) {
      nextDuration = MEDIUM_TIMER_DURATION;
    } else if (nextTimerId % 2 === 0) {
      nextDuration = SHORT_TIMER_DURATION;
    } else {
      nextDuration = LONG_TIMER_DURATION;
    }

    return {
      type: SET_NEXT_TIMER,
      nextTimerState: {
        duration: nextDuration,
        timerId: nextTimerId,
        litCandles: nextLitCandles,
      },
    };
  },
  startNextTimer: () => ({
    type: START_NEXT_TIMER,
  }),
};

export default timerActions;
