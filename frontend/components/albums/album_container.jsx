import { connect } from 'react-redux';
import Album from './album';
import { fetchTracks, removeTracks } from '../../actions/track_actions';
import { fetchAlbum } from '../../actions/album_actions';
import {
  play,
  pause,
  playSingleTrack,
  receiveQueue,
  addTrackToQueue,
  clearQueue,
  setNextTrack
} from '../../actions/audio_actions';

const mapStateToProps = (state, ownProps) => ({
  album: state.entities.albums[ownProps.match.params.albumId],
  tracks: Object.keys(state.entities.tracks)
                .map(id => state.entities.tracks[id]),
  inProgress: state.nowPlaying.inProgress,
  currentTrack: state.nowPlaying.currentTrack,
  loading: state.ui.loading
});

const mapDispatchToProps = dispatch => ({
  fetchTracks: filter => dispatch(fetchTracks(filter)),
  removeTracks: () => dispatch(removeTracks()),
  play: () => dispatch(play()),
  pause: () => dispatch(pause()),
  playSingleTrack: track => dispatch(playSingleTrack(track)),
  receiveQueue: queue => dispatch(receiveQueue(queue)),
  addTrackToQueue: track => dispatch(addTrackToQueue(track)),
  fetchAlbum: id => dispatch(fetchAlbum(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);
