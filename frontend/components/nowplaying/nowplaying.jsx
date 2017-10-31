import React from 'react';

class NowPlayingBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTrack: props.currentTrack,
      trackProgress: props.trackProgress,
      paused: true
    }

    this.togglePlay = this.togglePlay.bind(this);
  }

  togglePlay() {
    let status = ((this.state.paused) ? false : true);
    this.setState({paused: status });
    
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
                <i class="fa fa-step-backward" aria-hidden="true"></i>
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
        <audio></audio>
      </footer>
    );
  }
}

export default NowPlayingBar;
