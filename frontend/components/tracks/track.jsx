import React from 'react';
import TrackDropDown from '../dropdowns/TrackDropDown';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.track = props.track;
    this.currentTrack = props.currentTrack;
    this.state = {
      inProgress: props.currentTrack &&
        (props.currentTrack.id == this.track.id) &&
        props.inProgress
    };

    this.isCurrentTrack = this.isCurrentTrack.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.isPlaylist = this.isPlaylist.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  isCurrentTrack() {
    return this.props.currentTrack &&
    this.props.currentTrack.id == this.track.id;
  }

  play() {
    this.props.play();
  }

  pause() {
    this.props.pause();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.currentTrack && newProps.currentTrack.id == this.track.id) {
      this.setState({
        inProgress: newProps.inProgress
      });
    } else {
      this.setState({
        inProgress: false
      });
    }
  }

  handleClick(e) {
    e.stopPropagation();

    this.props.showDropdown(`track-dropdown-${this.track.id}`);
  }

  handlePlay() {
    if (this.isCurrentTrack()) {
      this.props.inProgress ? this.pause() : this.play();
      this.setState({ inProgress: !this.state.inProgress });
    } else {
      this.props.playSingleTrack(this.track);
      this.setState({ inProgress: true });
    }
  }

  isPlaylist() {
    return !!(this.props.match.params.playlistId);
  }


  render() {
    let playButton = <i className="fa fa-play track-play-pause" aria-hidden="true"></i>;
    let trackInfo;

    if (this.state.inProgress) {
      playButton = <i className="fa fa-pause track-play-pause" aria-hidden="true"></i>;
    }

    return(
      <div className='track-row-wrapper'>
        <li className='track-row'>
          <div className='track-play-pause' onClick={this.handlePlay}>
            {playButton}
          </div>
          <div className="track-info">
            <div className='track-details'>
              <span className='track-title'>{this.props.track.title}</span>
              <span
                className='track-album-artist'
                style={{display: (this.isPlaylist()) ? "" : "none"}}
                >
                <span>{`${this.track.artist}`}</span>
                &middot;
                <span>{`${this.track.album}`}</span>
              </span>
            </div>
            <div>
              <button
                className='track-dropdown-button'
                onClick={this.handleClick}
                >
                ...
              </button>
              <span>
                {this.track.duration}
              </span>
            </div>
          </div>
          <TrackDropDown
            ref={(el) => { this.dropDown = el; }}
            trackId={this.track.id}
            collectionId={this.props.collectionId}
            />
        </li>
      </div>
    );
  }

}

export default Track;

//
