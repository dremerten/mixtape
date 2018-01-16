import React from 'react';


const VolumeBar = props => {
  const volumeIcon = (() => {
    if (props.volume > 0.75) {
      return staticAssets.volumeHigh;
    } else if (props.volume > 0.5) {
      return staticAssets.volumeMid;
    } else if (props.volume > 0){
      return staticAssets.volumeLow;
    } else {
      return staticAssets.volumeOff;
    }
  })();

  return(
    <div className="volume-controls">
      <div className="volume-container">
        <div className="control-elements">
          <div className="slideable-bar">
            <div
              style={ { backgroundImage: 'url(' + volumeIcon + ')' } }
              className='volume-icon'
              onClick={props.toggleMute}
              />
            <div className="slidecontainer">
              <input
                onChange={props.setVolume}
                className="slider"
                type="range"
                min="0"
                max="1"
                step="0.001"
                value={props.volume}
                ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolumeBar;
