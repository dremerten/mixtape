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

  render() {
    return(
      <div className='track-row-wrapper'>
        <li className='track-row' onClick={this.props.playAudio}>
          <div className='track-play-pause'>
            <i className="fa fa-play track-play-pause" aria-hidden="true"></i>
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
