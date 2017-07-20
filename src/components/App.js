import React from 'react';
import styled from 'styled-components';
import Display from './Display';
import Console from './Console';

const AppWrapper = styled.div`
  height: 320px;
  width: 320px;
  border: 1px solid white;
`;

const App = () => (
  <AppWrapper>
    <Display />
    <Console />
  </AppWrapper>
);


export default App;
