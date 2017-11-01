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
import { fetchPlaylist } from '../../actions/playlist_actions';

const mapStateToProps = (state, ownProps) => ({
  playlist: state.entities.playlists[ownProps.match.params.playlistId],
  tracks: Object.keys(state.entities.tracks)
                .map(id => state.entities.tracks[id]),
  inProgress: state.nowPlaying.inProgress
});

const mapDispatchToProps = dispatch => ({
  fetchTracks: filter => dispatch(fetchTracks(filter)),
  removeTracks: () => dispatch(removeTracks()),
  play: () => dispatch(play()),
  pause: () => dispatch(pause()),
  playSingleTrack: track => dispatch(playSingleTrack(track)),
  receiveQueue: queue => dispatch(receiveQueue(queue)),
  addTrackToQueue: track => dispatch(addTrackToQueue(track)),
  fetchPlaylist: id => dispatch(fetchPlaylist(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist)
