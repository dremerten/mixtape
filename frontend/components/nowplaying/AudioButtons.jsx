import React from 'react';
import { connect } from 'react-redux';
import { play, pause, playNextTrack, playPreviousTrack } from '../../actions/audio_actions';

const AudioButtons = props => {
  const playButton = props.inProgress ? 'pauseButton' : 'playButton';

  return(
    <div className="audio-buttons">
      <img className='small-button' src={staticAssets.shuffleButton} />
      <img className='small-button'
        src={staticAssets.backButton}
        onClick={props.playPreviousTrack}
         />
      <div className='play-button-container'>
        <img
          className='play-button'
          src={staticAssets[playButton]}
          onClick={props.handlePlay}
          />
      </div>
      <img className='small-button'
        src={staticAssets.nextButton}
        onClick={props.playNextTrack}
        />
      <img className='small-button' src={staticAssets.repeatButton} />
    </div>
  );
};


const mapDispatchToProps = (dispatch, { inProgress, nullTrack, progress }) => {
  const action = inProgress ? pause : play;

  return {
    handlePlay: () => {
      if (nullTrack) return;
      dispatch(action());
    },
    playNextTrack: () => dispatch(playNextTrack()),
    playPreviousTrack: () => dispatch(playPreviousTrack())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AudioButtons);
