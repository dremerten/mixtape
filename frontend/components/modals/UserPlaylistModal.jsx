import React from 'react';
import Modal from 'react-modal';
import PlaylistModalIndex from './PlaylistModalIndex';
import NewPlaylistButton from '../buttons/NewPlaylistButton';
import { connect } from 'react-redux';
import { fetchPlaylists, removePlaylists } from '../../actions/playlist_actions';
// export default function(props) {
class UserPlaylistModal extends React.Component {
  componentWillReceiveProps(newProps) {
    this.props.fetchItems();
  }

  componentWillUnmount() {
    this.props.removeItems();
  }

  render() {
    return(
      <Modal
        isOpen={this.props.isOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={this.props.handleCloseModal}
        className='playlist-modal'
        overlayClassName='playlist-overlay'
        >
        <div className='new-playlist-wrapper'>
          <div className='new-playlist-container'>
              <div className="form-header modal">
                <button className='close-button'
                  onClick={this.props.handleCloseModal}
                  >X</button>
                <h1>Add to playlist
                  <NewPlaylistButton isButtonVisible={true} />
                </h1>
              </div>
              <ul className='playlist-items modal'>
                <PlaylistModalIndex { ...this.props }/>
              </ul>
            </div>
          </div>
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchPlaylists({ type: 'user' })),
  removeItems: () => dispatch(removePlaylists())
});

export default connect(null, mapDispatchToProps)(UserPlaylistModal);
