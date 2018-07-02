import React from 'react';

const OverlayPlay = () => {

  return(
    <div className="playlist-image-overlay">
      <div className='overlay-add-button-container'>
        <img src={staticAssets.addToPlaylist} className='overlay-add-button' />
      </div>
    </div>
  );
};

export default OverlayPlay;
