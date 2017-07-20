import React from 'react';
import styled from 'styled-components';
import Timer from './Timer';

const PopupWrapper = styled.div`
  max-width: 50%;
  max-height: 50%;
  overflow: hidden;
  background-color: black;
  padding: 12px;
  border: 1px solid white;
  box-shadow: 0 0 0 2px black;
`;

const Popup = (props) => {
  switch (props.popupType) {
    case 'lorem': {
      const Lorem = 'Propane and propane accessories. Dang it Peggy. Buaaaaaaah. I tell you what. Dang it Bobby. America, hooray, gosh darn it. Lorem ipsum I tell you what. I love Texas. Lol. Jabroni.';
      return (
        <PopupWrapper>
          {Lorem}
        </PopupWrapper>
      );
    }
    case 'shortTimer': {
      return (
        <PopupWrapper>
          <Timer minutes={5} seconds={0} />
        </PopupWrapper>
      );
    }
    case 'longTimer': {
      return (
        <PopupWrapper>
          <Timer minutes={25} seconds={0} />
        </PopupWrapper>
      );
    }
    case 'debugTimer': {
      return (
        <PopupWrapper>
          <Timer minutes={1} seconds={0} />
        </PopupWrapper>
      );
    }
    default: {
      return null;
    }
  }
};

export default Popup;
