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
    case 'initial': {
      return (
        <PopupWrapper>
          <PopupButton
            onClick={props.startNextTimer}
            text={'Begin the Ritual'}
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
    case 'wait': {
      return (
        <PopupWrapper>
          <PopupButton
            onClick={props.startNextTimer}
            text={'Continue the Ritual'}
          />
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
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    startNextTimer: timerActions.startNextTimer,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
