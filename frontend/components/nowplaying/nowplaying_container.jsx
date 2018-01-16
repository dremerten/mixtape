import { connect } from 'react-redux';
import {
  play,
  pause,
  playSingleTrack,
  receiveQueue,
  addTrackToQueue,
  clearQueue,
  setNextTrack
} from '../../actions/audio_actions';

import NowPlayingBar from './nowplaying';

const mapStateToProps = ({ nowPlaying }) => ({
  currentTrack: nowPlaying.currentTrack || {},
  nextTrack: nowPlaying.nextTrack,
  inProgress: nowPlaying.inProgress,
  queue: nowPlaying.queue
});

const mapDispatchToProps = dispatch => ({
  play: () => dispatch(play()),
  pause: () => dispatch(pause()),
  playSingleTrack: track => dispatch(playSingleTrack(track)),
  receiveQueue: queue => dispatch(receiveQueue(queue)),
  addTrackToQueue: track => dispatch(addTrackToQueue(queue)),
  clearQueue: () => dispatch(clearQueue()),
  setNextTrack: track => dispatch(setNextTrack),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NowPlayingBar);
