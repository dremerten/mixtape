import { connect } from 'react-redux';
import PlayButton from './OverlayPlayButton';
import { playTracksForArtist } from '../../actions/artist_actions';

const mapStateToProps = ({ nowPlaying }, { id }) => {
  const context = `artists-${id}`;

  return {
    inProgress: nowPlaying.inProgress && nowPlaying.context === context,
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
