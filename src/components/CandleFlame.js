import React from 'react';
import styled, { keyframes } from 'styled-components';
import candleFlame from '../assets/candle-flame.png';

const CandleFlame = (props) => {
  const flicker = keyframes`
    from {
      transform: translateX(1px);
    }

    to {
      transform: translateX(-1px);
    }
  `;

  const Wrapper = styled.div`
    height: 19px;
    width: 9px;
    background-image: url(${candleFlame});
    background-position: center;
    background-clip: content-box;
    position: absolute;
    left: ${props.position.x}px;
    top: ${props.position.y}px;
    animation: ${flicker} 250ms infinite alternate steps(3);
  `;

  if (!props.visible) {
    return null;
  }

  return (
    <Wrapper />
  );
};

export default CandleFlame;
