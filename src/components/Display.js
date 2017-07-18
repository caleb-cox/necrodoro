import React from 'react';
import styled from 'styled-components';
import background from '../assets/background.png';

const Display = () => {
  const Wrapper = styled.div`
    height: 75%;
    width: 100%;
    position: absolute;
    top: 0;
    background-image: url(${background});
    background-position: center;
  `;

  return (
    <Wrapper />
  );
};

export default Display;
