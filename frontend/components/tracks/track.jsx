import React from 'react';
import TrackDropDown from '../dropdowns/TrackDropDown';
import { Link } from 'react-router-dom';

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
      this.props.playSingleTrack({
        track: this.props.track,
        context: this.props.indexItems.slice(this.props.indexItems.indexOf(this.props.track))
      });
    }
  }

  render() {
    const { track, buttonText, artistIsVisible } = this.props;

    debugger
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
                <Link to={`/artists/${track.artistId}/overview`}>{`${track.artist}`}</Link>
                 &nbsp;&middot;&nbsp;
                <Link to={`/browse/albums/${track.albumId}`}>{`${track.album}`}</Link>
              </span>
            </div>
            <div className='track-detail-duration'>
              <button
                className='track-dropdown-button'
                onClick={this.handleClick}
                >
                &middot;&middot;&middot;
              </button>
              <span>{track.duration}</span>
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
