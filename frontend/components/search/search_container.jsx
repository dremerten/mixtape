import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchResults, removeSearchErrors } from '../../actions/search_actions';
import Search from './search';

const mapStateToProps = state => ({
  tracks: state.search.tracks.map(id => state.entities.tracks[id]),
  albums: state.search.albums.map(id => state.entities.albums[id]),
  playlists: state.search.albums.map(id => state.entities.playlists[id]),
  artists: state.search.artists.map(id => state.entities.artists[id]),
  errors: state.errors.search
});

const mapDispatchToProps = dispatch => ({
  fetchResults: query => dispatch(fetchResults(query)),
  removeSearchErrors: () => dispatch(fetchResults())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Search));
