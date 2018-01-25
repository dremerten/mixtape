import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { PlayButton, OverlayPlayButton } from './PlayButton';
import { isUserPlaylist } from '../../selectors/playlist_selector';
import LoadingImage from '../LoadingImage';
import PlaylistFollowButton from './PlaylistFollowButton';
import PlaylistDropdownButton from '../dropdowns/PlaylistDropDownButton';

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
      <div className="playlist-buttons">
        <PlaylistFollowButton />
        <PlaylistDropdownButton />
      </div>
    </div>
  </div>
);

export default withRouter(connect(mapStateToProps)(PlaylistInfo));
