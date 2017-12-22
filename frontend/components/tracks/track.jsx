import React from 'react';
import TrackDropDown from '../dropdowns/TrackDropDown';

class Track extends React.Component {
  constructor(props) {
    super(props);

    this.handlePlay = this.handlePlay.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.stopPropagation();

    this.props.showDropdown(`track-dropdown-${this.props.track.id}`);
  }

  handlePlay() {
    if (this.props.inProgress) {
      this.props.pause();
    } else if (this.props.isCurrentTrack) {
      this.props.play();
    } else {
      this.props.playSingleTrack(this.props.track);
    }
  }

  render() {
    const { track, buttonText, artistIsVisible } = this.props;

    return(
      <div className='track-row-wrapper'>
        <li className='track-row'>
          <div className='track-play-pause' onClick={this.handlePlay}>
            <i className={`fa fa-${this.props.buttonText} track-play-pause`} aria-hidden="true"/>
          </div>
          <div className="track-info">
            <div className='track-details'>
              <span className='track-title'>{this.props.track.title}</span>
              <span
                className='track-album-artist'
                style={{display: artistIsVisible ? "" : "none"}}
                >
                <span>{`${track.artist}`}</span>
                &middot;
                <span>{`${track.album}`}</span>
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
                {track.duration}
              </span>
            </div>
          </div>
          <TrackDropDown
            ref={(el) => { this.dropDown = el; }}
            trackId={this.props.track.id}
            collectionId={this.props.collectionId}
            />
        </li>
      </div>
    );
  }

}


export default Track;

//
