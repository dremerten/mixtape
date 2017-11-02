import React from 'react';
import { Howl } from 'howler';

class NowPlayingBar extends React.Component {
  constructor(props) {
    super(props);
    // let src = (props.currentTrack) ? [props.currentTrack.trackUrl] : [null];
    // let format = (props.currentTrack) ? [props.currentTrack.contentType] : [null];
    // this.state = {
    //   currentTrack: new Howl({
    //       src,
    //       format
    //   }),
    //   trackProgress: props.trackProgress,
    //   paused: props.inProgress
    // }
    this.state = {
      trackProgress: null,
      inProgress: props.inProgress,
      currentTrack: props.currentTrack,
      repeatEnabled: false
    }

    this.togglePlay = this.togglePlay.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.pauseElement = this.pauseElement.bind(this);
    this.playElement = this.playElement.bind(this);
    this.receiveAction = this.receiveAction.bind(this);
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
    document.getElementById('track').pause();
  }

  playElement() {
    document.getElementById('track').play();
  }

  togglePlay() {
    if (!this.state.currentTrack) return;
    this.setState({ inProgress: !this.state.inProgress });
    if (this.state.inProgress) {
      this.pause();
    } else {
      this.play();
    }
  }


  render() {
    let source = (this.state.currentTrack) ? this.state.currentTrack.trackUrl : ''
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
            <div className="progress-bar">
            </div>
          </div>
          <div className="volume-controls"></div>
        </div>
        <audio id={`track`} src={source} />
      </footer>
    );
  }
}

export default NowPlayingBar;
