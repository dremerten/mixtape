import React from 'react';
import TrackDropDown from '../dropdowns/TrackDropDown';
import { Link } from 'react-router-dom';
import TrackDropDownButton from '../dropdowns/TrackDropDownButton';

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
      const trackIndex = this.props.indexItems.indexOf(this.props.track);

      this.props.playSingleTrack({
        context: this.props.context,
        currentTrack: this.props.track.id,
        nextTracks: this.props.indexItems.slice(trackIndex + 1).map(t => t.id),
        history: this.props.indexItems.slice(0, trackIndex).map(t => t.id)
      });
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
                <Link to={`/view/artists/${track.artistId}/overview`}>{`${track.artist}`}</Link>
                 &nbsp;&middot;&nbsp;
                <Link to={`/browse/albums/${track.albumId}`}>{`${track.album}`}</Link>
              </span>
            </div>
            <div className='track-detail-duration'>
              <TrackDropDownButton item={this.props.track} />
              <span>{track.duration}</span>
            </div>
          </div>
        </li>
      </div>
    );
  }

}

export default Track;
