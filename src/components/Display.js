import React from 'react';
import styled from 'styled-components';
import background from '../assets/background.png';
import CandleFlame from './CandleFlame';
import Popup from './Popup';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      litCandles: 4,
      popupType: 'debugTimer',
    };
  }

  render() {
    const Wrapper = styled.div`
      height: 239px;
      width: 100%;
      background-image: url(${background});
      background-position: bottom;
      background-clip: content-box;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      image-rendering: pixelated;
    `;

    const popupType = this.state.popupType;
    const litCandles = this.state.litCandles;

    return (
      <Wrapper>
        <Popup popupType={popupType} />
        <CandleFlame visible={litCandles >= 1} position={{ x: 19, y: 136 }} />
        <CandleFlame visible={litCandles >= 3} position={{ x: 52, y: 108 }} />
        <CandleFlame visible={litCandles >= 4} position={{ x: 260, y: 106 }} />
        <CandleFlame visible={litCandles >= 2} position={{ x: 291, y: 134 }} />
      </Wrapper>
    );
  }
}

export default Display;
