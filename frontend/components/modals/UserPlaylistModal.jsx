import React from 'react';
import Modal from 'react-modal';
import PlaylistModalIndex from './PlaylistModalIndex';
import NewPlaylistButton from '../buttons/NewPlaylistButton';

export default function(props) {
  return(
    <Modal
      isOpen={props.isOpen}
      shouldCloseOnOverlayClick={false}
      onRequestClose={props.handleCloseModal}
      className='playlist-modal'
      overlayClassName='playlist-overlay'
      >
      <div className='new-playlist-wrapper'>
        <div className='new-playlist-container'>
            <div className="form-header modal">
              <button className='close-button'
                onClick={props.handleCloseModal}
                >X</button>
              <h1>Add to playlist
                <NewPlaylistButton isButtonVisible={true} />
              </h1>
            </div>
            <ul className='playlist-items modal'>
              <PlaylistModalIndex { ...props }/>
            </ul>
          </div>
        </div>
    </Modal>
  );
}
