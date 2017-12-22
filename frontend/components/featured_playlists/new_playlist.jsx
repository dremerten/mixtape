import { connect } from 'react-redux';
import { createPlaylist } from '../../actions/playlist_actions';
import { withRouter } from 'react-router-dom';
import React from 'react';


class NewPlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(e) {
    e.preventDefault();

    this.setState({ name: e.target.value });
  }


  handleSubmit(e) {
    e.preventDefault();
    const { name } = this.state;
    this.props.createPlaylist({ name }).then(({ data }) => (
      this.props.history.push(`/collection/playlists/${data.playlist.id}`)
    ))
  }


  render() {
    return(
      <div className="new-playlist-wrapper">
        <div
          className="new-playlist-container"
          >
          <div className="form-wrapper">
            <div className="form-header">
              <button className='close-button'
                onClick={this.props.handleCloseModal}
                >X</button>
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
                    onClick={this.props.handleCloseModal}
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

const mapDispatchToProps = dispatch => ({
  createPlaylist: playlist => dispatch(createPlaylist(playlist))
});

export default withRouter(connect(
  null,
  mapDispatchToProps
)(NewPlaylistForm));
