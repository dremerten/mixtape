import React from 'react';
import { connect } from 'react-redux';
import { toggleShuffle, toggleRepeat,play, pause, playNextTrack } from '../../actions/audio_actions';


const AudioButtons = props => {
  const playButton = props.inProgress ? 'pauseButton' : 'playButton';
  const shuffleButton = props.shuffleState ? 'shuffleButtonEnabled' : 'shuffleButton';
  const shuffleClass = props.shuffleState ? 'enabled' : '';
  const repeatButton = props.repeatEnabled ? 'repeatButtonEnabled' : 'repeatButton';
  const repeatClass = (() => {
    if (props.singleRepeat) {
      return 'enabled single-repeat';
    } else if (props.repeatEnabled) {
      return 'enabled';
    }
  })();

  return(
    <div className="audio-buttons">
      <div
        className={`small-button-container ${shuffleClass}`}
        onClick={props.toggleShuffle}
        >
        <img className="small-button" src={staticAssets[shuffleButton]} />
      </div>
      <img className='small-button'
        src={staticAssets.backButton}
        onClick={props.handleBackClick}
        />
      <div className='play-button-container'>
        <img
          className='play-button'
          src={staticAssets[playButton]}
          onClick={props.handlePlay}
          />
      </div>
      <div className={"small-button-container"}>
        <img className='small-button'
          src={staticAssets.nextButton}
          onClick={props.playNextTrack}
          />
      </div>
      <div
        className={`small-button-container ${repeatClass}`}
        onClick={props.toggleRepeat}
        >
        <img className='small-button' src={staticAssets[repeatButton]} />
      </div>
    </div>
  );
};



const mapStateToProps = state => {
  return {
    shuffleState: state.nowPlaying.shuffleState,
    repeatEnabled: Boolean(state.nowPlaying.repeat),
    singleRepeat: state.nowPlaying.repeat > 1
  };
};

const mapDispatchToProps = (dispatch, { inProgress, nullTrack, progress }) => {
  const action = inProgress ? pause : play;

  return {
    handlePlay: () => {
      if (nullTrack) return;
      dispatch(action());
    },
    playNextTrack: () => dispatch(playNextTrack()),
    toggleShuffle: () => dispatch(toggleShuffle()),
    toggleRepeat: () => dispatch(toggleRepeat())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioButtons);
