import React from 'react';
import styled from 'styled-components';
import howie from '../assets/howie.ogg';

const TimerWrapper = styled.div`
  font-size: 4em;
  line-height: 1em;
  margin: 4px;
`;

const scream = new Audio(howie);
scream.volume = 0.5;

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secDuration: ((props.minutes * 60) + props.seconds),
      minRemaining: props.minutes,
      secRemaining: props.seconds,
    };
  }

  componentDidMount() {
    const start = new Date().getTime();

    const timer = () => {
      const secElapsed = Math.floor((new Date().getTime() - start) / 1000);
      let secRemaining = this.state.secDuration - secElapsed;
      const minRemaining = Math.floor(secRemaining / 60);

      secRemaining %= 60;
      this.setState({ minRemaining, secRemaining });

      if (secElapsed >= this.state.secDuration) {
        clearInterval(this.state.intervalId);
        scream.play();
        // Dispatch the end-of-timer action
      }
    };

    this.state.intervalId = setInterval(timer, 250);
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    const timeNumToString = (n) => {
      let numString = n < 10 ? `0${n}` : `${n}`;

      if (n === 60 || n < 0) numString = '00';
      return numString;
    };

    const minString = timeNumToString(this.state.minRemaining);
    const secString = timeNumToString(this.state.secRemaining);

    return (
      <TimerWrapper>
        {minString}:{secString}
      </TimerWrapper>
    );
  }
}

export default Timer;
