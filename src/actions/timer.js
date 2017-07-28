export const START_TIMER = 'START_TIMER';
export const END_TIMER = 'END_TIMER';

const timerActions = {
  startTimer: () => ({
    type: START_TIMER,
  }),
  endTimer: (lastTimerType, timersCompleted) => {
    let newTimerType;
    let newDuration;
    let newTimersCompleted;

    if (lastTimerType === 'long') {
      newTimersCompleted = timersCompleted + 1;
      newTimerType = newTimersCompleted === 4 ? 'medium' : 'short';
      newDuration = newTimersCompleted === 4 ? 15 : 5;
    } else {
      newTimerType = 'long';
      newDuration = 25;
      newTimersCompleted = timersCompleted;
    }

    return {
      type: END_TIMER,
      newTimerState: {
        timerType: newTimerType,
        duration: newDuration,
        timersCompleted: newTimersCompleted,
      },
    };
  },
};

export default timerActions;
