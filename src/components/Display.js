import React from 'react';
import styled from 'styled-components';
import background from '../assets/background.png';
import CandleFlame from './CandleFlame';

class Display extends React.Component {
  constructor() {
    super();
    this.state = {
      litCandles: 4,
    };
  }

  render() {
    const litCandles = this.state.litCandles;

    const Wrapper = styled.div`
      height: 239px;
      width: 100%;
      background-image: url(${background});
      background-position: center;
      background-clip: content-box;
      border-bottom: 1px dashed white;
      position: relative;
    `;

    return (
      <Wrapper>
        <CandleFlame visible={litCandles >= 1} position={{ x: 19, y: 136 }} />
        <CandleFlame visible={litCandles >= 3} position={{ x: 52, y: 108 }} />
        <CandleFlame visible={litCandles >= 4} position={{ x: 260, y: 106 }} />
        <CandleFlame visible={litCandles >= 2} position={{ x: 291, y: 134 }} />
      </Wrapper>
    );
  }
};

export default Display;
