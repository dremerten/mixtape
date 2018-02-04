import React from 'react';

const OverlayPlay = props => {
  const buttonType = props.inProgress ? 'pauseButtonLarge' : 'playButtonLarge';
  const hoverState = props.inProgress ? " no-hover" : "";
  const customClass = props.customClass || "";

  return(
    <div className={`playlist-image-overlay ${customClass}${hoverState}`}>
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
