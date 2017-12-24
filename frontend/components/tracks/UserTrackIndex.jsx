import GenericTrackList from './TrackList';
import MusicPageContainer from '../featured_playlists/MusicPageContainer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchTracksForUser, removeTracks } from '../../actions/track_actions';
import { setScrollPosition } from '../../actions/ui_actions';
import { allTracks, userTracks } from '../../selectors/track_selectors';

const mapStateToProps = state => {
  return {
    indexItems: userTracks(state),
    background: { backgroundImage: 'linear-gradient(rgb(244, 131, 66), rgb(24, 13, 6) 85%)' },
    loading: state.ui.loading,
    MusicIndex: GenericTrackList,
    artistIsVisible: true
  };
};

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchTracksForUser()),
  removeItems: () => dispatch(removeTracks()),
  setScrollPosition: (pos) => dispatch(setScrollPosition(pos))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MusicPageContainer));
