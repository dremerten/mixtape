import React from 'react';

const ProgressBar = props => (
  <div className="progress-bar-div">
    <div className="song-time">
      {props.currentTime}
    </div>
    <div className="progress-bar-container">
      <div
        className="current-progress"
        id='progress'
        style={ { width: props.width } }
        />
      <input
        onChange={props.setCurrentTime}
        onMouseDown={props.handleSeek}
        className="slider"
        type="range"
        min="0"
        max="1"
        step="0.000001"
        value={props.scaleTime()}
        >
      </input>
    </div>
    <div className="song-time">
      {props.duration}
    </div>
  </div>
);

export default ProgressBar;
