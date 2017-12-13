import React from 'react';
import Modal from 'react-modal';
import PlaylistModalIndex from './PlaylistModalIndex';


export default function(props) {
  debugger
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
            <div className="form-header">
              <button className='close-button'
                onClick={props.handleCloseModal}
                >X</button>
              <h1>Add to playlist</h1>
            </div>
            <div className='playlist-items'>
              <PlaylistModalIndex />
            </div>
        </div>
      </div>
    </Modal>
  );
}
