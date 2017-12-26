import { connect } from 'react-redux';
import Playlist from '../featured_playlists/playlist';
import { fetchTracks, removeTracks } from '../../actions/track_actions';
import { fetchAlbum, removeAlbums } from '../../actions/album_actions';
import {
  play,
  pause,
  playSingleTrack,
  receiveQueue,
  addTrackToQueue,
  clearQueue,
  setNextTrack
} from '../../actions/audio_actions';
import { showDropdown } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => ({
  item: state.entities.albums[ownProps.match.params.albumId],
  itemId: ownProps.match.params.albumId,
  tracks: Object.keys(state.entities.tracks)
                .map(id => state.entities.tracks[id]),
  inProgress: state.nowPlaying.inProgress,
  // currentTrack: state.nowPlaying.currentTrack,
  loading: state.ui.loading
});

const mapDispatchToProps = dispatch => ({
  fetchTracks: filter => dispatch(fetchTracks(filter)),
  removeItems: () => {
    dispatch(removeTracks());
    dispatch(removeAlbums());
  },
  play: () => dispatch(play()),
  pause: () => dispatch(pause()),
  playSingleTrack: track => dispatch(playSingleTrack(track)),
  receiveQueue: queue => dispatch(receiveQueue(queue)),
  addTrackToQueue: track => dispatch(addTrackToQueue(track)),
  fetchEntity: id => dispatch(fetchAlbum(id)),
  showDropdown: name => dispatch(showDropdown(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);
