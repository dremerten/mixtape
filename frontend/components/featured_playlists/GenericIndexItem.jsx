import React from 'react';
import { Link } from 'react-router-dom';

class GenericIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };

    this.handleClick = this.handleClick.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
  }

  handleLoad() {
    this.setState({ loaded: true });
  }

  handleClick(e) {
    e.preventDefault();

    this.props.handleClick();
  }

  render() {
    const { loaded } = this.state;
    const { id, itemName, author, imageUrl } = this.props;

    return(
      <li key={id} className="playlist-item">
        <figure
          className="playlist-loading"
          onClick={this.handleClick}
          >
          <img src={imageUrl}
            onLoad={this.handleLoad}
            style={ loaded ? { display: ''} : {display: 'none'} }
            className="playlist-image"
            />
          <div className="shadow-light"></div>
          <div className="overlay"></div>
        </figure>
        <div className="playlist-name">
          {itemName}
        </div>
        <div className='author artist'>
          {author}
        </div>
      </li>
    );
  }
}

export default GenericIndexItem;
