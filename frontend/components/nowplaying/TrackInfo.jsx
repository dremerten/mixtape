import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const TrackInfo = function({ currentTrack }) {
  if (!currentTrack) return <div className='current-song'/>;

  return (
    <div className="current-song">
      <div className="song-album-info">
        <Link to={`/browse/albums/${currentTrack.album_id}`}>
          <img
            src={currentTrack.imageUrl}
            className="song-now-playing-image"
             />
        </Link>
        <div className="title-and-artist">
          <span className="nav-bar-song">
            {currentTrack.title}
          </span>
          <span className="nav-bar-artist">
            {currentTrack.artist}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TrackInfo;
