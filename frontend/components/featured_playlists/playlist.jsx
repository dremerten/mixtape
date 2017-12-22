import React from 'react';
import Track from '../tracks/track';
import TrackList from '../tracks/TrackList';
import Spinner from '../Spinner';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      paused: this.props.inProgress
    };
  }

  componentDidMount() {
    let playlistId = this.props.match.params.playlistId;
    if (playlistId) {
      this.props.fetchPlaylist(playlistId);
    }
  }

  componentWillUnmount() {
    this.props.removeItems();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.loading != this.state.loading) {
      this.setState({ loading: !this.state.loading});
    }

    let id = this.props.match.params.playlistId;
    let newId = newProps.match.params.playlistId;

    if ( newId !== id) {
      this.props.fetchPlaylist(newId);
    }
  }

  render() {
    const { loading } = this.state;

    debugger
    return(
      <div className="playlist-show-wrapper" style={ { background: 'linear-gradient(rgb(115, 39, 38), rgb(11, 3, 3) 85%) fixed' } }>
      { loading ?
        <Spinner />
        :
        <div className="playlist-show-container">
          <div className="playlist-info">
            <div
              className='playlist-image show'
              style={ { backgroundImage: 'url(' + this.props.playlist.imageUrl + ')'} }>
              <div className="shadow-light show-light"></div>
            </div>
            <div className='headers'>
              <div className='playlist-title'>
                {this.props.playlist.name}
              </div>
              <div className='sub-header'>
                by <span>{this.props.playlist.author_name}</span>
              </div>
              <div className='sub-header'>
                {this.props.playlist.trackIds.length} SONGS
              </div>
            </div>
          </div>
          <div className='tracklist-container'>
            <TrackList indexItems={this.props.tracks} { ...this.props } />
          </div>
        </div>
        }
      </div>
    );
  }

}

export default Playlist;
