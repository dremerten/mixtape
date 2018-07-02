import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Playlist from './playlist';
import {
  receiveQueue,
  addTrackToQueue,
} from '../../actions/audio_actions';
import { fetchTracks, removeTracks } from '../../actions/track_actions';
import { fetchPlaylist, removePlaylists } from '../../actions/playlist_actions';
import { showDropdown } from '../../actions/ui_actions';
import { playlistTracks } from '../../selectors/playlist_selector';

const mapStateToProps = (state, ownProps) => {
  const playlist = state.entities.playlists.byId[ownProps.match.params.playlistId];

  return {
    item: playlist,
    itemId: ownProps.match.params.playlistId,
    tracks: playlistTracks(playlist, state),
    inProgress: state.player.inProgress,
    loading: state.ui.loading.global,
    authorLink: playlist.author_id ? `/users/${playlist.author_id}` : '/'
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTracks: filter => dispatch(fetchTracks(filter)),
  removeItems: () => {
    dispatch(removeTracks());
    dispatch(removePlaylists());
  },
  receiveQueue: queue => dispatch(receiveQueue(queue)),
  addTrackToQueue: track => dispatch(addTrackToQueue(track)),
  fetchEntity: id => dispatch(fetchPlaylist(id)),
  showDropdown: name => dispatch(showDropdown(name)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist));
