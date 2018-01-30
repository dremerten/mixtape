import { connect } from 'react-redux';
import PlayButton from './OverlayPlayButton';
import { playTracksForArtist } from '../../actions/artist_actions';

const mapStateToProps = ({ player }, { id }) => {
  const context = `artists-${id}`;

  return {
    inProgress: player.inProgress && player.context === context,
    customClass: 'circular'
  };
};

const mapDispatchToProps = (dispatch, { id }) => ({
  handlePlay: () => dispatch(playTracksForArtist(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayButton);
