import React from 'react';
import { Link } from 'react-router-dom';
import LoadingImage from '../LoadingImage';

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
    const { id, itemName, author, imageUrl } = this.props;

    return(
      <li key={id} className="playlist-item">
        <LoadingImage
          loadingClass={'playlist-loading'}
          handleClick={this.handleClick}
          imageClass={'playlist-image'}
          imageSource={imageUrl}
          />
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
