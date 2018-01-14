import React from 'react';
import NewPlaylistModal from '../modals/NewPlaylistModal';
import { connect } from 'react-redux';
import { showModal, closeModal } from '../../actions/ui_actions';
import { SCROLL_BREAKPOINT } from '../../util/constants';

const NewPlaylistButton = function({ isVisible, showModal }) {

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

// const mapStateToProps = (state, ownProps) => {
//   return {
//     isVisible: state.ui.scroll < SCROLL_BREAKPOINT
//   };
// };

const mapDispatchToProps = (dispatch, ownProps) => ({
  showModal: () => dispatch(showModal('newPlaylistModal'))
});

export default connect(null, mapDispatchToProps)(NewPlaylistButton);
