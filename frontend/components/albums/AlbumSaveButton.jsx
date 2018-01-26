import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { isSavedAlbum } from '../../selectors/album_selectors';
import { toggleFollow } from '../../actions/follow_actions';

const mapStateToProps = (state, ownProps) => {
  const album = state.entities.albums[ownProps.match.params.albumId];
  const buttonText = isSavedAlbum(album.id, state) ? 'REMOVE' : 'SAVE';
  const displayClass = isSavedAlbum(album.id, state) ? "green" : "";

  return {
    album,
    buttonText,
    displayClass
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const albumId = ownProps.match.params.albumId;

  return {
    toggleFollow: () => dispatch(toggleFollow('album', albumId))
  };
};

const AlbumFollowButton = props => (
  <div
    onClick={props.toggleFollow}
    className={`playlist-follow ${props.displayClass}`}
    >{props.buttonText}</div>
);

export default withRouter(
  connect(
  mapStateToProps,
  mapDispatchToProps)
  (AlbumFollowButton)
);
