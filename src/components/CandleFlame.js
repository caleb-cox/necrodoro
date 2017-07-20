import React from 'react';
import styled, { keyframes } from 'styled-components';
import candleFlame from '../assets/candle-flame.png';

const flickerAnimation = keyframes`
  from {
    transform: translateX(1px);
  }

  to {
    transform: translateX(-1px);
  }
`;

const CandleFlame = (props) => {
  const Wrapper = styled.div`
    height: 19px;
    width: 9px;
    background-image: url(${candleFlame});
    background-position: center;
    position: absolute;
    left: ${props.position.x}px;
    top: ${props.position.y}px;
    animation: ${flickerAnimation} 250ms infinite alternate steps(2, start);
    image-rendering: pixelated;
  `;

  if (!props.visible) {
    return null;
  }

  return (
    <Wrapper />
  );
};

export default CandleFlame;
