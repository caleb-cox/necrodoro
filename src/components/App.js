import React from 'react';
import styled from 'styled-components';
import Console from './Console';

const App = () => {
  const Wrapper = styled.div`
    height: 320px;
    width: 320px;
    border: 1px dotted white;
    position: relative;
  `;

  return (
    <Wrapper>
      <Console />
    </Wrapper>
  );
};

export default App;
