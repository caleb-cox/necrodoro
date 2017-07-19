import React from 'react';
import styled from 'styled-components';
import background from '../assets/background.png';
import CandleFlame from './CandleFlame';

const Display = () => {
  const Wrapper = styled.div`
    height: 239px;
    width: 100%;
    background-image: url(${background});
    background-position: center;
    background-clip: content-box;
    border-bottom: 1px dotted white;
    position: relative;
  `;

  return (
    <Wrapper>
      <CandleFlame position={{ x: 19, y: 136 }} />
      <CandleFlame position={{ x: 52, y: 108 }} />
      <CandleFlame position={{ x: 260, y: 106 }} />
      <CandleFlame position={{ x: 291, y: 134 }} />
    </Wrapper>
  );
};

export default Display;
