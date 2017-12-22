import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { isCurrentTrack } from '../../selectors/track_selectors';
import { showDropdown } from '../../actions/ui_actions';
import {
  play,
  pause,
  playSingleTrack,
  playNextTrack
} from '../../actions/audio_actions';
import Track from './track';

const mapStateToProps = (state, { track }) => {
  const inProgress = state.nowPlaying.inProgress && isCurrentTrack(state, track);

  return {
    isCurrentTrack: isCurrentTrack(state, track),
    inProgress,
    buttonText: (inProgress ? 'pause' : 'play'),
  };
};

const mapDispatchToProps = dispatch => ({
  showDropdown: () => dispatch(showDropdown()),
  playSingleTrack: (track) => dispatch(playSingleTrack(track)),
  play: () => dispatch(play()),
  pause: () => dispatch(pause()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Track));
