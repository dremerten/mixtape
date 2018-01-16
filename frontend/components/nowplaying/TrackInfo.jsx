import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';

const TrackInfo = function({ currentTrack }) {
  if (isEmpty(currentTrack)) return <div className='current-song'/>;

  return (
    <div className="current-song">
      <div className="song-album-info">
        <Link to={`/browse/albums/${currentTrack.albumId}`}>
          <img
            src={currentTrack.imageUrl}
            className="song-now-playing-image"
             />
        </Link>
        <div className="title-and-artist">
          <span className="nav-bar-song">
            {currentTrack.title}
          </span>
          <Link to={`/artists/${currentTrack.artistId}/overview`} className="nav-bar-artist">
            {currentTrack.artist}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrackInfo;
