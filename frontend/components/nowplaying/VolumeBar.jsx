import React from 'react';


const VolumeBar = props => {
  const volumeIcon = () => {
    if (props.volume > 0.5) {
      return <i className="fa fa-volume-up" aria-hidden="true"></i>;
    } else if (props.volume > 0.1) {
      return <i className="fa fa-volume-down" aria-hidden="true"></i>;
    } else {
      return <i className="fa fa-volume-off" aria-hidden="true"></i>;
    }
  };

  return(
    <div className="volume-controls">
      <div className="volume-container">
        <div className="control-elements">
          <div className="slideable-bar">
            {volumeIcon()}
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
