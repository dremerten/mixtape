import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { isUserPlaylist, isFollowedPlaylist } from '../../selectors/playlist_selector';
import { toggleFollow } from '../../actions/follow_actions';

const mapStateToProps = (state, ownProps) => {
  const playlist = state.entities.playlists.byId[ownProps.match.params.playlistId];
  const buttonText = isFollowedPlaylist(playlist, state) ? 'UNFOLLOW' : 'FOLLOW';
  const displayClass = isUserPlaylist(playlist, state) ? "hidden" : "";

  return {
    displayClass,
    playlist,
    buttonText
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const playlistId = ownProps.match.params.playlistId;

  return {
    toggleFollow: () => dispatch(toggleFollow('playlist', playlistId))
  };
};

const PlaylistFollowButton = props => {
  return(
    <div
      onClick={props.toggleFollow}
      className={`playlist-follow ${props.displayClass}`}
      >{props.buttonText}</div>
  );
};

export default withRouter(
  connect(
  mapStateToProps,
  mapDispatchToProps)
  (PlaylistFollowButton)
);
