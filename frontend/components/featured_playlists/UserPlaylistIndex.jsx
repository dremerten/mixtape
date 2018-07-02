import MusicPageContainer from './MusicPageContainer';
import GenericMusicIndex from './GenericMusicIndex';
import UserPlaylistIndexItem from './UserPlaylistIndexItem';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPlaylists, removePlaylists } from '../../actions/playlist_actions';
import { setScrollPosition } from '../../actions/ui_actions';
import { userPlaylists, shouldFetchPlaylists } from '../../selectors/playlist_selector';

const mapStateToProps = (state, ownProps) => {
  return {
    indexItems: userPlaylists(state),
    itemType: 'userPlaylist',
    header: "Your Playlists",
    background: { background: 'linear-gradient(rgb(142, 11, 61), rgb(14, 1, 6) 85%)' },
    shouldFetchItems: shouldFetchPlaylists(state.session.currentUser.playlistIds, state),
    MusicIndex: GenericMusicIndex,
    IndexItem: UserPlaylistIndexItem
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchItems: () => dispatch(fetchPlaylists()),
  removeItems: () => dispatch(removePlaylists()),
  setScrollPosition: pos => dispatch(setScrollPosition(pos))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicPageContainer));
