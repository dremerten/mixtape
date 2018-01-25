import React from 'react';
import TrackDropDown from './TrackDropDown';
import { showDropdown } from '../../actions/ui_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = (dispatch, ownProps) => {
  const trackId = ownProps.item.id;

  return {
    showDropdown: (e) => {
      e.stopPropagation();

      dispatch(showDropdown(`track-dropdown-${trackId}`));
    }
  };
};


const TrackDropDownButton = props => (
  <div>
    <button className='track-dropdown-button' onClick={props.showDropdown}>
      &middot;&middot;&middot;
    </button>
    <TrackDropDown item={props.item} />
  </div>
);

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(TrackDropDownButton)
);
