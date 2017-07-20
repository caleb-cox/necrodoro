import React from 'react';
import styled from 'styled-components';
import Timer from './Timer';
import PopupButton from './PopupButton';

const PopupWrapper = styled.div`
  max-width: 75%;
  max-height: 75%;
  overflow: hidden;
  background-color: black;
  padding: 12px;
  border: 1px solid white;
  box-shadow: 0 0 0 2px black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
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
    case 'debugButtons': {
      return (
        <PopupWrapper>
          <PopupButton onClick={console.log} text={'begin the ritual of krobnar'} />
          <PopupButton onClick={console.log} text={'consume the eye of the rabbit'} />
          <PopupButton onClick={console.log} text={'bleed into the silver goblet'} />
          <PopupButton onClick={console.log} text={'gleam the puzzle cube'} />
        </PopupWrapper>
      );
    }
    default: {
      return null;
    }
  }
};

export default Popup;
