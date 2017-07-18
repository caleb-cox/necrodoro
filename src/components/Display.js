import React from 'react';
import styled from 'styled-components';
import tempImage from '../temp.png';

const Display = () => {
  const Wrapper = styled.div`
    height: 75%;
    width: 100%;
    position: absolute;
    top: 0;
    background-image: url(${tempImage});
    background-position: center;
  `;

  return (
    <Wrapper />
  );
};

export default Display;
