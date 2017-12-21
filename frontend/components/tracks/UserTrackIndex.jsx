import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import GenericTrackIndex from './GenericTrackIndex';
import { allTracks } from '../../selectors/track_selectors';
import { fetchTracksForUser } from '../../actions/track_actions';

const mapStateToProps = state => ({
  tracks: allTracks(state.entities.tracks),
  background: { backgroundImage: 'linear-gradient(rgb(68, 85, 68), rgb(6, 8, 6) 85%)' },
  loading: state.ui.loading
});

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchTracksForUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(GenericTrackIndex);
