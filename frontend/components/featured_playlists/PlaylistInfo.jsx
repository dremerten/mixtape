import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { PlayButton, OverlayPlayButton } from './PlayButton';
import LoadingImage from '../shared/LoadingImage';
import PlaylistButtons from './PlaylistButtons';
import AlbumButtons from '../albums/AlbumButtons';

const PlaylistInfo = ({ item, authorLink }) => (
  <div className="playlist-info">
    <div className='playlist-image-container'>
      <LoadingImage
        loadingClass='playlist-loading'
        imageClass='playlist-image'
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
      <Route path='/browse/albums/:albumId' component={AlbumButtons} />
      <Route path='/:path/playlists/:playlistId' component={PlaylistButtons} />
    </div>
  </div>
);

export default PlaylistInfo;
