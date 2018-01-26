import React from 'react';

class LoadingImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    };

    this.handleLoad = this.handleLoad.bind(this);
    this.handleClick = this.props.handleClick || (() => {});
  }

  handleLoad() {
    this.setState({ loaded: true });
  }

  render() {
    const { loaded } = this.state;

    return(
      <figure
        className={this.props.loadingClass}
        onClick={this.handleClick}
        >
        <img src={this.props.imageSource}
          onLoad={this.handleLoad}
          style={ loaded ? { display: '' } : {display: 'none' } }
          className={this.props.imageClass}
          />
      </figure>
    );
  }
}

export default LoadingImage;
