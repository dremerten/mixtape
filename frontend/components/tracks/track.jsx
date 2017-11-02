import React from 'react';

class Track extends React.Component {
  constructor(props) {
    super(props)
    this.track = props.track
    this.currentTrack = props.props.currentTrack
    this.state = {
      inProgress: props.props.inProgress,
      duration: null
     }

     this.handlePlay = this.handlePlay.bind(this);
  }

  play() {
    this.props.props.play()
  }

  pause() {
    this.props.props.pause()
  }

  componentWillReceiveProps(newProps) {
    // debugger
    if (newProps.props.currentTrack.id == this.track.id) {
      this.setState({
        inProgress: newProps.props.inProgress
      })
    } else {
      this.setState({
        inProgress: false
      })
    }
  }

  handlePlay() {
    // debugger
    if (this.props.props.currentTrack && this.props.props.currentTrack.id == this.track.id) {
      (this.props.props.inProgress) ? this.pause() : this.play();
      this.setState({ inProgress: !this.state.inProgress });
    } else {
      this.props.props.playSingleTrack(this.track)
      this.setState({ inProgress: true })
    }
  }

  render() {
    let playButton = <i className="fa fa-play track-play-pause" aria-hidden="true"></i>
    // debugger
    if (this.state.inProgress) {
      playButton = <i className="fa fa-pause track-play-pause" aria-hidden="true"></i>
    }
    return(
      <div className='track-row-wrapper'>
        <li className='track-row' onClick={this.handlePlay}>
          <div className='track-play-pause'>
            {playButton}
          </div>
          <div className="track-info">
            <div className='track-details'>
              <span className='track-title'>{this.props.track.title}</span>
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
