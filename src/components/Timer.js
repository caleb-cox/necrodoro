import React from 'react';

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
    const msStart = new Date().getTime();

    const timer = () => {
      const msNow = new Date().getTime();

      const secElapsed = Math.floor((msNow - msStart) / 1000);
      let secRemaining = this.state.secDuration - secElapsed;

      const minRemaining = Math.floor(secRemaining / 60);
      secRemaining %= 60;

      this.setState({ minRemaining, secRemaining });
      if (secElapsed >= this.state.secDuration) clearInterval(this.state.intervalId);
    };

    this.state.intervalId = setInterval(timer, 250);
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    const timeNumToString = (n) => {
      let numString = n < 10 ? `0${n}` : `${n}`;

      if (numString === '60') numString = '00';
      return numString;
    };

    const minString = timeNumToString(this.state.minRemaining);
    const secString = timeNumToString(this.state.secRemaining);

    return (
      <div>
        {minString}:{secString}
      </div>
    );
  }
}

export default Timer;
