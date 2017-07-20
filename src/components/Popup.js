import React from 'react';
import styled from 'styled-components';
import Timer from './Timer';

const Popup = (props) => {
  const Wrapper = styled.div`
    max-width: 50%;
    max-height: 50%;
    overflow: hidden;
    background-color: black;
    padding: 12px;
    border: 1px solid white;
    box-shadow: 0 0 0 2px black;
    font-size: 4em;
    line-height: 1em;
  `;

  switch (props.popupType) {
    case 'lorem': {
      const Lorem = 'Propane and propane accessories. Dang it Peggy. Buaaaaaaah. I tell you what. Dang it Bobby. America, hooray, gosh darn it. Lorem ipsum I tell you what. I love Texas. Lol. Jabroni.';
      return (
        <Wrapper>
          {Lorem}
        </Wrapper>
      );
    }
    case 'shortTimer': {
      return (
        <Wrapper>
          <Timer minutes={5} seconds={0} />
        </Wrapper>
      );
    }
    case 'longTimer': {
      return (
        <Wrapper>
          <Timer minutes={25} seconds={0} />
        </Wrapper>
      );
    }
    case 'debugTimer': {
      return (
        <Wrapper>
          <Timer minutes={0} seconds={10} />
        </Wrapper>
      );
    }
    default: {
      return null;
    }
  }
};

export default Popup;
