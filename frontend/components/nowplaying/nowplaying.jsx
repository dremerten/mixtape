import React from 'react';
import { Link } from 'react-router-dom';

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
      currentTime: "0:00",
      progress: 0
    };

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
    this.getProgress = this.getProgress.bind(this);
    this.scaleTime = this.scaleTime.bind(this);
  }

  componentDidMount() {
    this.setState({ rendered: true });
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
    this.props.play();
  }

  pause() {
    this.pauseElement();
    this.props.pause();
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
    return document.getElementById('track');
  }

  getDuration() {
    return this.getAudio().duration;
  }

  parseTime(time) {
    let minutes = String(Math.floor(time / 60));
    let seconds = Math.floor(time % 60);

    seconds = (seconds < 10) ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${seconds}`;
  }

  setDuration() {
    let duration = this.parseTime(this.getDuration());
    this.setState({ duration });
  }

  setVolume(e) {
    if (!this.state.currentTrack || !this.state.rendered) return;

    let volume = e.target.value;
    this.getAudio().volume = volume;
    this.setState({ volume });
  }

  // setDuration() {
  //   let duration = this.getAudio().duration;
  //
  //   this.setState({ duration: this.parseTime(duration) });
  // }

  setCurrentTime(e) {
    if (!this.state.currentTrack || !this.state.rendered) return;

    let currentTime = e.target.value;

    // Round time value to 6 decimal places
    let newTime = Math.floor(currentTime * this.getAudio().duration * 1000000) / 1000000;

    this.getAudio().currentTime = newTime;
    this.setState({ currentTime: this.parseTime(newTime) });
  }

  getCurrentTime() {
    let currentTime = this.parseTime(this.getAudio().currentTime);

    this.setState({ currentTime });
  }

  getProgress() {
    if (this.scaleTime()) {
      return ((this.scaleTime() + 0.005) * 100 + "%");
    }
    return 0;
  }

  scaleTime() {
    if (!this.state.currentTrack || !this.state.rendered) return 0;
    return (this.getAudio().currentTime / this.getAudio().duration);
  }

  toggleVolumeIcon() {
    if (this.state.volume > 0.5) {
      return <i className="fa fa-volume-up" aria-hidden="true"></i>;
    } else if (this.state.volume > 0.1) {
      return <i className="fa fa-volume-down" aria-hidden="true"></i>;
    } else {
      return <i className="fa fa-volume-off" aria-hidden="true"></i>;
    }
  }

  render() {
    const playButton = this.state.inProgress ? window.staticAssets.pauseButton : staticAssets.playButton;
    let title, artist;
    let source = '';
    let currentVolume = this.toggleVolumeIcon();
    let link = '/';

    if (this.state.currentTrack) {
      title = this.state.currentTrack.title;
      artist = this.state.currentTrack.artist;
      source = this.state.currentTrack.trackUrl;
      link = `/browse/albums/${this.state.currentTrack.album_id}`;
    }

    return(
      <footer className="now-playing-footer">
        <div className="now-playing-container">
          <div className="current-song">
            <div className="song-album-info">
              <Link to={link}>
                <img
                  src={(this.state.currentTrack) ? this.state.currentTrack.imageUrl : ''}
                  className="song-now-playing-image"
                  style={{display: this.state.currentTrack ? "" : "none"}}
                   />
              </Link>
              <div className="title-and-artist">
                <span className="nav-bar-song">
                  {title}
                </span>
                <span className="nav-bar-artist">
                  {artist}
                </span>
              </div>
            </div>
          </div>
          <div className="audio-controls">
            <div className="audio-buttons">
              <img className='small-button' src={window.staticAssets.shuffleButton} />
              <img className='small-button' src={window.staticAssets.backButton} />
              <div className='play-button-container'>
                <img
                  className='play-button'
                  src={playButton}
                  onClick={this.togglePlay}
                  />
              </div>
              <img className='small-button' src={window.staticAssets.nextButton} />
              <img className='small-button' src={window.staticAssets.repeatButton} />
            </div>
            <div className="progress-bar-div">
              <div className="song-time">
                {this.state.currentTime}
              </div>
              <div className="progress-bar-container">
                <div
                  className="current-progress"
                  id='progress'
                  style={{ width: this.getProgress()}}
                  ></div>
                <input
                  onChange={this.setCurrentTime}
                  className="slider"
                  type="range"
                  min="0"
                  max="1"
                  step="0.000001"
                  value={this.scaleTime()}
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
