import React from 'react';
import styled from 'styled-components';
import Timer from './Timer';
import PopupButton from './PopupButton';

const PopupWrapper = styled.div`
  max-width: 60%;
  max-height: 80%;
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
  function buttonTest() {
    console.log('hey');
  }

  switch (props.popupType) {
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
    case 'debugButtons': {
      return (
        <PopupWrapper>
          <Timer minutes={1} seconds={10} />
          <PopupButton onClick={buttonTest} text={'begin the ritual'} />
          <PopupButton onClick={buttonTest} text={'eat rabbit eye'} />
          <PopupButton onClick={buttonTest} text={'spill goat blood'} />
        </PopupWrapper>
      );
    }
    default: {
      return null;
    }
  }
};

export default Popup;
