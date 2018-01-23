import React from 'react';
import LoadingImage from '../LoadingImage';
import { PlayButton, OverlayPlayButton } from './PlayButton';
import { Link } from 'react-router-dom';

const PlaylistInfo = ({ item, authorLink }) => (
  <div className="playlist-info">
    <div className='playlist-image-container'>
      <LoadingImage
        loadingClass={'playlist-loading'}
        handleClick={() => {}}
        imageClass={'playlist-image'}
        imageSource={item.imageUrl}
        />
      <OverlayPlayButton />
    </div>
    <div className='headers'>
      <div className='playlist-title'>
        {item.name}
      </div>
      <div className='sub-header'>
        by <Link to={authorLink}>{item.author}</Link>
      </div>
      <div className='sub-header'>
        {item.trackIds.length} SONGS
      </div>
      <PlayButton />
    </div>
  </div>
);

export default PlaylistInfo;
