import React from 'react';
import { Howl } from 'howler';

class NowPlayingBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentTrack: new Howl({
      //   src: ['//s3.us-east-2.amazonaws.com/spinnmusicfiles/tracks/audios/000/000/370/original/open-uri20171031-93871-118mku?1509468090'],
      //   volume: .7,
      //   preload: true,
      //   format: 'm4a'
      // }),
      // currentTrack: new Howl({
      //   src: [props.currentTrack.trackUrl],
      //   format: props.currentTrack.contentType,
      //   preload: true,
      // }),

      trackProgress: props.trackProgress,
      paused: true
    }

    this.togglePlay = this.togglePlay.bind(this);
  }

  componentDidMount() {

    // this.state.currentTrack.load();
  }

  togglePlay() {

    this.setState({ paused: !this.state.paused });
    (this.state.paused) ? this.state.currentTrack.play() : this.state.currentTrack.pause()
  }


  render() {

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
                className={(this.state.paused) ? "play-button" : "play-button pause"}
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
      </footer>
    );
  }
}

export default NowPlayingBar;
