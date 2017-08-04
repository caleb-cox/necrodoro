import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
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
  align-items: flex-start;
  image-rendering: pixelated;
`;

const Display = props => (
  <DisplayWrapper>
    <Popup />
    <CandleFlame
      visible={props.litCandles >= 1}
      position={{ x: 19, y: 137 }}
    />
    <CandleFlame
      visible={props.litCandles >= 2}
      position={{ x: 291, y: 135 }}
    />
    <CandleFlame
      visible={props.litCandles >= 3}
      position={{ x: 52, y: 109 }}
    />
    <CandleFlame
      visible={props.litCandles >= 4}
      position={{ x: 260, y: 107 }}
    />
  </DisplayWrapper>
);

function mapStateToProps(state) {
  return {
    litCandles: state.timer.litCandles,
  };
}

export default connect(mapStateToProps)(Display);
