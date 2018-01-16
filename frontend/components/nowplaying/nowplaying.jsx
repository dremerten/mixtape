import React from 'react';
import { Link } from 'react-router-dom';
import TrackInfo from './TrackInfo';
import AudioButtons from './AudioButtons';
import VolumeBar from './VolumeBar';
import { isEmpty } from 'lodash';
import ProgressBar from './ProgressBar';

class NowPlayingBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trackProgress: null,
      rendered: false,
      volume: 1,
      duration: "0:00",
      currentTime: "0:00",
      progress: 0
    };

    this.setVolume = this.setVolume.bind(this);
    this.setDuration = this.setDuration.bind(this);
    this.setCurrentTime = this.setCurrentTime.bind(this);
    this.getCurrentTime = this.getCurrentTime.bind(this);
    this.getProgress = this.getProgress.bind(this);
    this.scaleTime = this.scaleTime.bind(this);
    this.handleAudioLoad = this.handleAudioLoad.bind(this);
    this.handleSeek = this.handleSeek.bind(this);
    this.toggleMute = this.toggleMute.bind(this);
  }

  componentDidMount() {
    this.setState({ rendered: true });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.currentTrack.id !== this.props.currentTrack.id) {
      return;
      // The play() method will be triggered automatically
    } else if (newProps.inProgress && !this.props.inProgress) {
      this.audio.play();
    } else if (newProps.inProgress !== this.props.inProgress) {
      this.audio.pause();
    }
  }

  handleAudioLoad() {
    if (this.props.inProgress) this.audio.play();
  }


  setDuration() {
    let duration = this.parseTime(this.audio.duration);
    this.setState({ duration });
  }

  setVolume(e) {
    if (!this.props.currentTrack || !this.state.rendered) return;

    const volume = e.target.value;
    this.audio.volume = volume;
    this.setState({ volume });
  }


  // FUNCTIONS TO HANDLE TIME BAR INFORMATION:

  parseTime(time) {
    let minutes = String(Math.floor(time / 60));
    let seconds = Math.floor(time % 60);

    seconds = (seconds < 10) ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${seconds}`;
  }

  setCurrentTime(e) {
    if (!this.props.currentTrack || !this.state.rendered) return;

    const currentTime = e.target.value;

    // Round time value to 6 decimal places
    const newTime = Math.floor(currentTime * this.audio.duration * 1000000) / 1000000;

    this.audio.currentTime = newTime;
    this.setState({ currentTime: this.parseTime(newTime) });
  }

  getCurrentTime() {
    let currentTime = this.parseTime(this.audio.currentTime);

    this.setState({ currentTime });
  }

  getProgress() {
    if (this.scaleTime()) {

      // Add fraction of padding to prevent mis-rendering of progress bar
      return ((this.scaleTime() + 0.00001) * 100 + "%");
    }

    return 0;
  }

  scaleTime() {
    if (isEmpty(this.props.currentTrack) || !this.state.rendered || !this.audio.duration) return 0;
    return (this.audio.currentTime / this.audio.duration);
  }

  toggleMute(e) {
    e.stopPropagation();

    if (this.volume.state.muted) {
      this.audio.volume = this.prevValue;
      this.prevValue = null;
      this.setState({ volume: this.audio.volume });
      this.volume.setState({ muted: false });
    } else {
      this.prevValue = this.audio.volume;
      this.audio.volume = 0;
      this.setState({ volume: this.audio.volume });
      this.volume.setState({ muted: true });
    }
    // debugger
  }
  // FUNCTION TO AVOID CHOPPED AUDIO WHILE SEEKING THROUGH TRACK:

  handleSeek() {
    this.audio.muted = true;

    const unmuteAudio = () => this.audio.muted = false;

    document.addEventListener('mouseup', () => {
      this.audio.muted = false;
      document.removeEventListener('mouseup', unmuteAudio);
    });
  }

  render() {
    return(
      <footer className="now-playing-footer">
        <div className="now-playing-container">
          <TrackInfo currentTrack={this.props.currentTrack} />
          <section className="audio-controls">
            <AudioButtons
              inProgress={this.props.inProgress}
              nullTrack={isEmpty(this.props.currentTrack)}/>
            <ProgressBar
              duration={this.state.duration}
              scaleTime={this.scaleTime}
              setCurrentTime={this.setCurrentTime}
              width={this.getProgress()}
              currentTime={this.state.currentTime}
              handleSeek={this.handleSeek}
               />
          </section>
          <VolumeBar
            ref={(v) => { this.volume = v; }}
            volume={this.state.volume}
            setVolume={this.setVolume}
            toggleMute={this.toggleMute}
            />
        </div>
        <audio
          onCanPlay={this.handleAudioLoad}
          ref={(a) => { this.audio = a; }}
          src={this.props.currentTrack.trackUrl}
          onCanPlayThrough={this.setDuration}
          onTimeUpdate={this.getCurrentTime}
           />
      </footer>
    );
  }
}

export default NowPlayingBar;
