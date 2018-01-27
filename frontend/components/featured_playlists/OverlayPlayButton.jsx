import React from 'react';

const OverlayPlay = props => {
  const buttonType = props.inProgress ? 'pauseButtonLarge' : 'playButtonLarge';
  const customClass = props.customClass || "";

  return(
    <div className={`playlist-image-overlay ${customClass}`}>
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
