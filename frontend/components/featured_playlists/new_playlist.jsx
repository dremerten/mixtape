import React from 'react';
import { connect } from 'react-redux';
import { createPlaylist } from '../../actions/playlist_actions';
import { withRouter } from 'react-router-dom';
import { addTrackToPlaylist } from 'react-router-dom';
import { closeModal, closeAllModals } from '../../actions/ui_actions';
import { saveTrackToPlaylist } from '../../actions/track_actions';
import NewPlaylistButton from '../buttons/NewPlaylistButton';


class NewPlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.addAfterCreate = this.addAfterCreate.bind(this);
  }

  update(e) {
    e.preventDefault();

    this.setState({ name: e.target.value });
  }

  addAfterCreate(playlistId) {
    if (this.props.shouldAddTrack) {
      this.props.addTrack(this.props.trackId, playlistId);
    }

    return playlistId;
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.submit(this.state).then(id =>
      this.addAfterCreate(id)).then((id) => {
        this.props.closeAllModals();

        if (!this.props.shouldAddTrack) {
          this.props.history.push(`/collection/playlists/${id}`);
        }
      });
  }


  render() {
    return(
      <div className="new-playlist-wrapper">
        <div
          className="new-playlist-container"
          >
          <div className="form-wrapper">
            <div className="form-header">
              <img className='close-button'
                onClick={this.props.closeModal}
                src={staticAssets.closeButton}
                ></img>
              <h1>Create new playlist</h1>
            </div>
            <div className="search-input-container">
              <div className="input-heading-wrapper playlist-input">
                <span className="input-header">Playlist Name</span>
              </div>
              <form>
                <input
                  className="search-input-field playlist-input"
                  onChange={e => this.update(e)}
                  placeholder="Start typing..."
                  type="text"
                  value={this.state.name}
                  ></input>
                <div className="new-playlist-buttons">
                  <div
                    className="new-playlist-button-cancel"
                    onClick={this.props.closeModal}
                    >CANCEL</div>
                    <input
                      type="submit"
                      onClick={this.handleSubmit}
                      value="SUBMIT"
                      className="new-playlist-button-submit">
                    </input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    shouldAddTrack: Boolean(state.ui.modals.userPlaylistModal.isOpen),
    trackId: state.ui.modals.clickedFrom
  };
};

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal('newPlaylistModal')),
  closeAllModals: () => dispatch(closeAllModals()),
  submit: playlist => dispatch(createPlaylist(playlist)),
  addTrack: (trackId, playlistId) => dispatch(saveTrackToPlaylist(trackId, playlistId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPlaylistForm));
