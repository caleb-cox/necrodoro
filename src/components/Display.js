import React from 'react';
import styled from 'styled-components';
import background from '../assets/background.png';

const Display = () => {
  const Wrapper = styled.div`
    height: 239px;
    width: 100%;
    background-image: url(${background});
    background-position: center;
    background-clip: content-box;
    border-bottom: 1px dotted white;
  `;

  return (
    <Wrapper />
  );
};

export default Display;
