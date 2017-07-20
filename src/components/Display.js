import React from 'react';
import styled from 'styled-components';
import background from '../assets/background.png';
import CandleFlame from './CandleFlame';
import Popup from './Popup';

const DisplayWrapper = styled.div`
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

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      litCandles: 4,
      popupType: 'debugTimer',
    };
  }

  render() {
    const popupType = this.state.popupType;
    const litCandles = this.state.litCandles;

    return (
      <DisplayWrapper>
        <Popup popupType={popupType} />
        <CandleFlame visible={litCandles >= 1} position={{ x: 19, y: 137 }} />
        <CandleFlame visible={litCandles >= 3} position={{ x: 52, y: 109 }} />
        <CandleFlame visible={litCandles >= 4} position={{ x: 260, y: 107 }} />
        <CandleFlame visible={litCandles >= 2} position={{ x: 291, y: 135 }} />
      </DisplayWrapper>
    );
  }
}

export default Display;
