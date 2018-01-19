import { connect } from 'react-redux';
import {
  play,
  pause,
  playSingleTrack,
  playNextTrack,
  receiveQueue,
  addTrackToQueue,
  clearQueue,
  setNextTrack
} from '../../actions/audio_actions';

import NowPlayingBar from './nowplaying';

// TODO: Add Previous track function

const mapStateToProps = state => ({
  currentTrack: state.nowPlaying.currentTrack || {},
  nextTrack: state.nowPlaying.nextTrack,
  inProgress: state.nowPlaying.inProgress
});

const mapDispatchToProps = dispatch => ({
  playNextTrack: track => dispatch(playNextTrack()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NowPlayingBar);
