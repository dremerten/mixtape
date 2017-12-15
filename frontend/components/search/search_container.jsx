import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchResults, removeSearchErrors } from '../../actions/search_actions';
import Search from './search';

const mapStateToProps = state => ({
  tracks: Object.keys(state.entities.tracks).map(id => state.entities.tracks[id]),
  albums: Object.keys(state.entities.albums).map(id => state.entities.albums[id]),
  playlists: Object.keys(state.entities.playlists.byId).map(id => state.entities.playlists.byId[id]),
  topResults: state.entities.search.topResults.map(id => state.entities.tracks[id]),
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
