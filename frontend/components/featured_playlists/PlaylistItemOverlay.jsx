import { connect } from 'react-redux';

import { playFullCollection } from '../../actions/audio_actions';
import PlayButton from './OverlayPlayButton';

const mapStateToProps = ({ player }, { id }) => {
  const context = `playlists-${id}`;

  return {
    inProgress: player.inProgress && player.context === context
  };
};

const mapDispatchToProps = (dispatch, { id }) => ({
  handlePlay: () => dispatch(playFullCollection(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayButton);
