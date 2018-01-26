import React from 'react';

const OverlayPlay = props => {
  const buttonType = props.inProgress ? 'pauseButtonLarge' : 'playButtonLarge';

  return(
    <div className='playlist-image-overlay'>
      <div
        className='overlay-play-button-container'
        onClick={props.handlePlay}
        >
        <img src={staticAssets[buttonType]} className='overlay-play-button' />
      </div>
    </div>
  );
};

export default OverlayPlay;
