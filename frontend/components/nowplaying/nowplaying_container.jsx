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
  play: () => dispatch(play()),
  pause: () => dispatch(pause()),
  playSingleTrack: track => dispatch(playSingleTrack(track)),
  playNextTrack: () => dispatch(playNextTrack()),
  addTrackToQueue: track => dispatch(addTrackToQueue(queue)),
  clearQueue: () => dispatch(clearQueue()),
  // setNextTrack: track => dispatch(setNextTrack),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NowPlayingBar);
