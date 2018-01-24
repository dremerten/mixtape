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

const mapStateToProps = (state, ownProps) => {
  const inProgress = state.nowPlaying.inProgress &&
                      isCurrentTrack(state, ownProps.track);

  const context = ownProps.location.pathname.split('/').slice(2).join('-');

  return {
    isCurrentTrack: isCurrentTrack(state, ownProps.track),
    inProgress,
    buttonText: (inProgress ? 'pause' : 'play'),
    context
  };
};

const mapDispatchToProps = dispatch => ({
  showDropdown: (name) => dispatch(showDropdown(name)),
  playSingleTrack: (data) => dispatch(playSingleTrack(data)),
  play: () => dispatch(play()),
  pause: () => dispatch(pause()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Track));
