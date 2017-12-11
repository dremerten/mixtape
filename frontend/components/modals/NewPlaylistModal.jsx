import React from 'react';
import Modal from 'react-modal';
import NewPlaylistForm from '../featured_playlists/new_playlist';

export default function(props) {
  return(
    <Modal
      isOpen={props.isModalOpen}
      shouldCloseOnOverlayClick={false}
      onRequestClose={props.handleCloseModal}
      className='playlist-modal'
      overlayClassName='playlist-overlay'
      >
      <NewPlaylistForm handleCloseModal={props.handleCloseModal} />
    </Modal>
  );
}
