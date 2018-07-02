import GenericTrackList from './TrackList';
import MusicPageContainer from '../featured_playlists/MusicPageContainer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchTracksForUser, removeTracks } from '../../actions/track_actions';
import { setScrollPosition } from '../../actions/ui_actions';
import { userTracks, shouldFetchTracks } from '../../selectors/track_selectors';

const mapStateToProps = state => ({
  indexItems: userTracks(state),
  background: { background: 'linear-gradient(rgb(31, 121, 100), rgb(3, 12, 10) 85%) fixed' },
  loading: state.ui.loading.global,
  MusicIndex: GenericTrackList,
  artistIsVisible: true,
  shouldFetchItems: shouldFetchTracks(state.session.currentUser.trackIds, state)
});

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchTracksForUser()),
  removeItems: () => dispatch(removeTracks()),
  setScrollPosition: (pos) => dispatch(setScrollPosition(pos))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MusicPageContainer));
