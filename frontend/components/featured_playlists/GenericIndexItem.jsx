import React from 'react';
import { Link } from 'react-router-dom';
import LoadingImage from '../LoadingImage';
import { OverlayPlayButton } from './PlayButton';

class GenericIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.props.handleClick();
  }

  render() {
    const { id, itemName, author, imageUrl, loadingClass, imageClass } = this.props;

    return(
      <li key={id} className="playlist-item">
        <div className='playlist-image-container'>
          <LoadingImage
            loadingClass={loadingClass}
            handleClick={this.handleClick}
            imageClass={imageClass}
            imageSource={imageUrl}
            />
        </div>
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
