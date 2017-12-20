import React from 'react';
import Track from '../tracks/track';
import TrackIndex from '../tracks/TrackIndex';
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
    let tracks, title, author, count;
    let imageUrl = { backgroundImage: "url('album_default.jpg')" };
    const { loading } = this.state;


    // if (this.props.playlist) {
    //   tracks
    //   tracks = this.props.tracks.map(track => (
    //     <Track
    //       { ...this.props}
    //       track={track}
    //       collectionId={this.props.playlist.id}
    //       showDropdown={this.props.showDropdown}
    //       key={track.id} />
    //     )
    //   );

    //   title = this.props.playlist.name;
    //   author = this.props.playlist.author_name;
    //   count = this.props.tracks.length;
    //
    //   if (!tracks.length) {
    //     tracks = [<span className="track-row-wrapper no-hover" key={1}>
    //       There aren't any tracks on this playlist yet.
    //     </span>];
    //   }
    //   imageUrl = { backgroundImage: 'url(' + this.props.playlist.imageUrl + ')' };
    // }
    return(
      <div className="playlist-show-wrapper">
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
                {this.props.playlist.length} SONGS
              </div>
            </div>
          </div>
          <TrackIndex tracks={this.props.playlist.tracks} { ...this.props } />
        </div>
        }
      </div>
    );
  }

}

export default Playlist;
