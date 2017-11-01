import React from 'react';

class Track extends React.Component {
  constructor(props) {
    super(props)
    this.track = props.track
    this.state = {
      inProgress: props.inProgress,
      duration: null
     }
  }

  playTrack() {

  }

  pauseTrack() {

  }
  
  render() {
    let playButton = <i className="fa fa-play track-play-pause" aria-hidden="true"></i>
    if (this.state.inProgress) {
      playButton = <i class="fa fa-pause" aria-hidden="true"></i>
    }
    return(
      <div className='track-row-wrapper'>
        <li className='track-row' onClick={this.props.playAudio}>
          <div className='track-play-pause'>
            {playButton}
          </div>
          <div className="track-info">
            <div className='track-details'>
              <span className='track-title'>{this.track.title}</span>
              <span className='track-album-artist'>
                <span>{`${this.track.artist} `}</span>
                &middot;
                <span>{` ${this.track.album}`}</span>
              </span>
              <span className="duration">
                {this.duration}
              </span>
            </div>
            <div>

            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </li>
      </div>
    )
  }

}

export default Track;

//
