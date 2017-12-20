import { connect } from 'react-redux';
import Playlist from './playlist';
import {
  play,
  pause,
  playSingleTrack,
  receiveQueue,
  addTrackToQueue,
  clearQueue,
  setNextTrack
} from '../../actions/audio_actions';
import { fetchTracks, removeTracks } from '../../actions/track_actions';
import { fetchPlaylist, removePlaylists } from '../../actions/playlist_actions';
import { showDropdown } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => ({
  playlist: state.entities.playlists.byId[ownProps.match.params.playlistId],
  tracks: Object.keys(state.entities.tracks)
                .map(id => state.entities.tracks[id]),
  inProgress: state.nowPlaying.inProgress,
  currentTrack: state.nowPlaying.currentTrack,
  loading: state.ui.loading
});

const mapDispatchToProps = dispatch => ({
  fetchTracks: filter => dispatch(fetchTracks(filter)),
  removeItems: () => {
    dispatch(removeTracks());
    dispatch(removePlaylists());
  },
  play: () => dispatch(play()),
  pause: () => dispatch(pause()),
  playSingleTrack: track => dispatch(playSingleTrack(track)),
  receiveQueue: queue => dispatch(receiveQueue(queue)),
  addTrackToQueue: track => dispatch(addTrackToQueue(track)),
  fetchPlaylist: id => dispatch(fetchPlaylist(id)),
  showDropdown: name => dispatch(showDropdown(name)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);
