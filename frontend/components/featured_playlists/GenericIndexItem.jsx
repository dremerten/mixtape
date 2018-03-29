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
    const {
      id,
      itemName,
      author,
      imageUrl,
      loadingClass,
      imageClass,
      PlayButton
     } = this.props;

    return(
      <li key={id} className="playlist-item">
        <div className='playlist-image-container'>
          <LoadingImage
            loadingClass={loadingClass}
            imageClass={imageClass}
            imageSource={imageUrl}
            handleClick={this.handleClick}
            />
          <PlayButton id={id}/>
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
