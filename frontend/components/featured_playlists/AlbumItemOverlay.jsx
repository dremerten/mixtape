
import { connect } from 'react-redux';
import { fetchAlbumThenPlay } from '../../actions/album_actions';
import PlayButton from './OverlayPlayButton';

const mapStateToProps = ({ player }, { id }) => {
  const context = `albums-${id}`;

  return {
    inProgress: player.inProgress && player.context === context
  };
};

const mapDispatchToProps = (dispatch, { id }) => ({
  handlePlay: () => dispatch(fetchAlbumThenPlay(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayButton);
