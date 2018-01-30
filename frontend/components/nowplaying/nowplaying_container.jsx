import { connect } from 'react-redux';
import {
  playNextTrack,
  playPreviousTrack
} from '../../actions/audio_actions';

import NowPlayingBar from './nowplaying';

const mapStateToProps = state => ({
  currentTrack: state.entities.tracks[state.player.currentTrack] || {},
  inProgress: state.player.inProgress,
  repeat: state.player.repeat,
  loadQueue: state.player.queue.concat(state.player.nextTracks)[0]
});

const mapDispatchToProps = dispatch => ({
  playNextTrack: () => dispatch(playNextTrack()),
  playPreviousTrack: () => dispatch(playPreviousTrack())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NowPlayingBar);
