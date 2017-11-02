import React from 'react';
import { Howl } from 'howler';

class NowPlayingBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trackProgress: null,
      inProgress: props.inProgress,
      currentTrack: props.currentTrack,
      repeatEnabled: false,
      shuffleEnabled: false,
      rendered: false,
      volume: 1,
      duration: "0:00",
      currentTime: "0:00"
    }

    this.togglePlay = this.togglePlay.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.pauseElement = this.pauseElement.bind(this);
    this.playElement = this.playElement.bind(this);
    this.receiveAction = this.receiveAction.bind(this);
    this.setVolume = this.setVolume.bind(this);
    this.setDuration = this.setDuration.bind(this);
    this.setCurrentTime = this.setCurrentTime.bind(this);
    this.getCurrentTime = this.getCurrentTime.bind(this);
  }

  componentDidMount() {
    this.setState({ rendered: true })
  }

  componentWillReceiveProps(newProps) {
    this.setState({
        currentTrack: newProps.currentTrack,
        inProgress: newProps.inProgress
    }, () => this.receiveAction());
  }

  receiveAction() {
    (this.state.inProgress) ? this.playElement() : this.pauseElement()
  }

  play() {
    this.playElement();
    this.props.play()
  }

  pause() {
    this.pauseElement();
    this.props.pause()
  }

  pauseElement() {
    this.getAudio().pause();
  }

  playElement() {
    this.getAudio().play();
  }

  togglePlay() {
    if (!this.state.currentTrack) return;

    (this.state.inProgress) ? this.pause() : this.play();

    this.setState({ inProgress: !this.state.inProgress });
  }

  getAudio() {
    return document.getElementById('track')
  }

  getDuration() {
    this.getAudio().duration
  }

  parseTime(time) {
    let minutes = String(Math.floor(time / 60))
    let seconds = Math.floor(time % 60);

    seconds = (seconds < 10) ? `0${seconds}` : `${seconds}`
    return `${minutes}:${seconds}`
  }

  setDuration() {
    let duration = this.parseTime(this.getDuration());
    this.setState({ duration });
  }

  setVolume(e) {
    if (!this.state.currentTrack || !this.state.rendered) return;

    let volume = e.target.value
    this.getAudio().volume = volume;
    this.setState({ volume })
  }

  setDuration() {
    let duration = this.getAudio().duration;

    this.setState({ duration: this.parseTime(duration) });
  }

  setCurrentTime(e) {
    if (!this.state.currentTrack || !this.state.rendered) return;

    let currentTime = e.target.value;
    this.getAudio().currentTime = currentTime;
    this.setState({ currentTime });
  }

  getCurrentTime() {
    let currentTime = this.parseTime(this.getAudio().currentTime)

    this.setState({ currentTime });
  }

  toggleVolumeIcon() {
    if (this.state.volume > .5) {
      return <i className="fa fa-volume-up" aria-hidden="true"></i>
    } else if (this.state.volume > .1) {
      return <i className="fa fa-volume-down" aria-hidden="true"></i>
    } else {
      return <i className="fa fa-volume-off" aria-hidden="true"></i>
    }
  }

  render() {
    let source = (this.state.currentTrack) ? this.state.currentTrack.trackUrl : ''
    let currentVolume = this.toggleVolumeIcon()
    return(
      <footer className="now-playing-footer">
        <div className="now-playing-container">
          <div className="current-song"></div>
          <div className="audio-controls">
            <div className="audio-buttons">
              <button className='small-button'>
                <i className="fa fa-random" aria-hidden="true"></i>
              </button>
              <button className='small-button'>
                <i className="fa fa-step-backward" aria-hidden="true"></i>
              </button>
              <button
                className={(this.state.inProgress) ? "play-button pause" : "play-button"}
                onClick={this.togglePlay}
                >
              </button>
              <button className='small-button'>
                <i className="fa fa-step-forward" aria-hidden="true"></i>
              </button>
              <button className='small-button'>
                <i className="fa fa-repeat" aria-hidden="true"></i>
              </button>
            </div>
            <div className="progress-bar-div">
              <div className="song-time">
                {this.state.currentTime}
              </div>
              <div className="progress-bar-container">
                <input
                  onChange={this.setCurrentTime}
                  className="slider"
                  type="range"
                  min="0"
                  max={this.state.duration}
                  step="0.01"
                  value={(this.state.rendered) ? this.getAudio().currentTime : 0}
                  >
                </input>
              </div>
              <div className="song-time">
                {this.state.duration}
              </div>
            </div>
          </div>
          <div className="volume-controls">
            <div className="volume-container">
              <div className="control-elements">
                <div className="slideable-bar">
                  {currentVolume}
                  <div className="slidecontainer">
                    <input
                      onChange={e => this.setVolume(e)}
                      className="slider"
                      type="range"
                      min="0"
                      max="1"
                      step="0.001"
                      value={this.state.volume}
                      ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <audio
          id={`track`}
          src={source}
          onCanPlayThrough={this.setDuration}
          onTimeUpdate={this.getCurrentTime}
           />
      </footer>
    );
  }
}

export default NowPlayingBar;
