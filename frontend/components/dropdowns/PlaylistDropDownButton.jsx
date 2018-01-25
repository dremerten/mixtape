import React from 'react';
import PlaylistDropDown from './PlaylistDropDown';
import { showDropdown } from '../../actions/ui_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = (dispatch, ownProps) => {
  const playlistId = ownProps.match.params.playlistId;

  return {
    showDropdown: (e) => {
      e.stopPropagation();

      dispatch(showDropdown(`playlist-dropdown-${playlistId}`));
    }
  };
};


const PlaylistDropdownButton = props => (
  <div>
    <div className='playlist-dropdown-button' onClick={props.showDropdown}>
      &middot;&middot;&middot;
    </div>
    <PlaylistDropDown />
  </div>
);


export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(PlaylistDropdownButton)
);
