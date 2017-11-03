import { connect } from 'react-redux';
import { createPlaylist } from '../../actions/playlist_actions';
import { withRouter } from 'react-router-dom';
import React from 'react';


class NewPlaylist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      author_id: props.currentUser.id,
      active: props.active
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.update = this.update.bind(this);
  }

  update(e) {
    e.preventDefault();

    this.setState({ name: e.target.value })
  }


  handleSubmit(e) {
    e.preventDefault();
    let { name, author_id } = this.state

    this.props.createPlaylist({ name, author_id }).then(() =>
      this.setState({ active: false })
    )
  }

  componentWillReceiveProps(newProps) {
    if (newProps.active != this.props.active) {
      this.setState({ active: !this.state.active })
    }
  }

  closeModal() {
    this.setState({ active: false })
    this.props.history.push('/collection/playlists')
  }

  render() {
    return(
      <div className="new-playlist-wrapper">
      <div
        className="new-playlist-container"
        id='new-playlist'
        style={{ display: (this.state.active) ? "" : "none" }}
        >
        <div className="form-wrapper">
          <div className="form-header">
            <button className='close=button'
              onClick={this.closeModal}
              >X</button>
            <h1>Create new playlist</h1>
          </div>
          <div className="search-input-container">
            <div className="input-heading-wrapper playlist">
              <span className="input-header">Playlist Name</span>
            </div>
            <form>
              <input
                className="search-input-field playlist"
                onChange={e => this.update(e)}
                placeholder="Start typing..."
                type="text"
                value={this.state.name}
                ></input>
              <div className="new-playlist-buttons">
                <button
                  className="new-playlist-button-cancel"
                  onClick={this.closeModal}
                  >CANCEL</button>
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
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => ({
  createPlaylist: playlist => dispatch(createPlaylist(playlist))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPlaylist))
