import React from 'react';
import styled from 'styled-components';
import Display from './Display';
import Console from './Console';

const App = () => {
  const Wrapper = styled.div`
    height: 320px;
    width: 320px;
    border: 1px dashed white;
  `;

  return (
    <Wrapper>
      <Display />
      <Console />
    </Wrapper>
  );
};

export default App;
