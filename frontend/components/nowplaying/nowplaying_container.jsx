import { connect } from 'react-redux';
import {
  playNextTrack,
  playPreviousTrack
} from '../../actions/audio_actions';

import NowPlayingBar from './nowplaying';

const mapStateToProps = state => ({
  currentTrack: state.entities.tracks[state.nowPlaying.currentTrack] || {},
  inProgress: state.nowPlaying.inProgress,
  repeat: state.nowPlaying.repeat,
  loadQueue: state.nowPlaying.queue.concat(state.nowPlaying.nextTracks)[0]
});

const mapDispatchToProps = dispatch => ({
  playNextTrack: () => dispatch(playNextTrack()),
  playPreviousTrack: () => dispatch(playPreviousTrack())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NowPlayingBar);
