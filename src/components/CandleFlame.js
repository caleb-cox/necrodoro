import React from 'react';
import styled from 'styled-components';
import candleFlame from '../assets/candle-flame.png';

const CandleFlame = (props) => {
  const Wrapper = styled.div`
    height: 19px;
    width: 9px;
    background-image: url(${candleFlame});
    background-position: center;
    background-clip: content-box;
    position: absolute;
    left: ${props.position.x}px;
    top: ${props.position.y}px;
  `;

  return (
    <Wrapper />
  );
};

export default CandleFlame;
