import React from 'react';
import styled from 'styled-components';

const App = () => {
  const Wrapper = styled.div`
    height: 320px;
    width: 320px;
    border: 1px solid white;
  `;

  const Title = styled.h1`
    color: red;
  `;

  return (
    <Wrapper>
      <Title>Hello World</Title>
    </Wrapper>
  );
};

export default App;
