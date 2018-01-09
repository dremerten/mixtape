import React from 'react';
import Modal from 'react-modal';
import PlaylistModalIndex from './PlaylistModalIndex';
import NewPlaylistButton from '../buttons/NewPlaylistButton';
import { connect } from 'react-redux';
import { fetchModalPlaylists, removePlaylists } from '../../actions/playlist_actions';
import { shouldFetchPlaylists } from '../../selectors/playlist_selector';
import { closeModal } from '../../actions/ui_actions';
// export default function(props) {
class UserPlaylistModal extends React.Component {
  componentWillReceiveProps(newProps) {
    if (newProps.isOpen && newProps.shouldFetchItems) {
      newProps.fetchItems();
    }
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

const mapStateToProps = state => {
  return {
    isOpen: state.ui.modals.userPlaylistModal.isOpen,
    shouldFetchItems: shouldFetchPlaylists(state.session.currentUser.playlistIds, state),
    trackId: state.ui.modals.clickedFrom
  };
};

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchModalPlaylists()),
  removeItems: () => dispatch(removePlaylists()),
  handleCloseModal: () => dispatch(closeModal('userPlaylistModal')),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPlaylistModal);
