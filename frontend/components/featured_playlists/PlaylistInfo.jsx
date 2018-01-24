import React from 'react';
import LoadingImage from '../LoadingImage';
import { PlayButton, OverlayPlayButton } from './PlayButton';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { isUserPlaylist } from '../../selectors/playlist_selector';
import { connect } from 'react-redux';
import PlaylistFollowButton from './PlaylistFollowButton';

const mapStateToProps = (state, ownProps) => {
  return {
    item: state.entities.playlists.byId[ownProps.match.params.playlistId],
    authorLink: '/',
  }
}

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
      <div className="playlist-buttons">
        <PlaylistFollowButton />
        {/* PlaylistDropDown */}
      </div>
    </div>
  </div>
);

export default withRouter(connect(mapStateToProps)(PlaylistInfo));
