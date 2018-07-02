import React from 'react';
import { connect } from 'react-redux';
import { showModal } from '../../actions/ui_actions';

const NewPlaylistButton = function({ showModal }) {

  return(
    <div>
      <button
        className={'new-playlist'}
        onClick={showModal}
        >
        NEW PLAYLIST
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  showModal: () => dispatch(showModal('newPlaylistModal'))
});

export default connect(null, mapDispatchToProps)(NewPlaylistButton);
