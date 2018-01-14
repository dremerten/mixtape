import React from 'react';
import Modal from 'react-modal';
import NewPlaylistForm from '../featured_playlists/new_playlist';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/ui_actions';

const NewPlaylistModal = props => (
  <Modal
    isOpen={props.isOpen}
    shouldCloseOnOverlayClick={false}
    onRequestClose={props.closeModal}
    className='playlist-modal'
    overlayClassName='playlist-overlay'
    >
    <NewPlaylistForm

       />
  </Modal>
);

const mapStateToProps = (state, ownProps) => {
  return {
    isOpen: Boolean(state.ui.modals.newPlaylistModal.isOpen),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    closeModal: () => dispatch(closeModal('newPlaylistModal'))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPlaylistModal));
