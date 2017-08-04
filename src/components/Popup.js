import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Timer from './Timer';
import PopupButton from './PopupButton';
import timerActions from '../actions/timer';

const PopupWrapper = styled.div`
  max-width: 200px;
  max-height: 200px;
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
  switch (props.type) {
    case 'wait': {
      let buttonText = '';

      if (props.timerId % 8 === 1) {
        buttonText = 'Begin the Ritual';
      } else if (props.timerId % 8 === 0) {
        buttonText = 'Complete the Ritual';
      } else if (props.timerId % 2 === 0) {
        buttonText = 'Gather your Strength';
      } else {
        buttonText = 'Resume the Ritual';
      }

      return (
        <PopupWrapper>
          <PopupButton
            onClick={props.startNextTimer}
            text={buttonText}
          />
        </PopupWrapper>
      );
    }
    case 'timer': {
      return (
        <PopupWrapper>
          <Timer />
        </PopupWrapper>
      );
    }
    default: {
      return null;
    }
  }
};

function mapStateToProps(state) {
  return {
    type: state.popup.popupType,
    timerId: state.timer.timerId,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    startNextTimer: timerActions.startNextTimer,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
