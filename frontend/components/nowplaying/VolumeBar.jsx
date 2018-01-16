import React from 'react';


class VolumeBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { muted: false };

    this.handleMute = this.handleMute.bind(this);
  }

  handleMute(e) {
    e.stopPropagation();

    if (this.state.muted) {
      this.setState({ muted: false });
      this.volume.value = this.prevValue;
      this.prevValue = null;
    } else {
      this.setState({ muted: true });
      this.prevValue = this.volume.value;
      this.volume.value = 0;
    }
  }

  render() {
    const volumeIcon = (() => {
      if (this.props.volume > 0.75) {
        return staticAssets.volumeHigh;
      } else if (this.props.volume > 0.5) {
        return staticAssets.volumeMid;
      } else if (this.props.volume > 0){
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
                onClick={this.props.toggleMute}
                />
              <div className="slidecontainer">
                <input
                  ref={(v) => { this.volume = v; } }
                  onChange={this.props.setVolume}
                  className="slider"
                  type="range"
                  min="0"
                  max="1"
                  step="0.001"
                  value={this.props.volume}
                  ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default VolumeBar;
