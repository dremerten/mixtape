import MusicPageContainer from './MusicPageContainer';
import UserArtistIndexItem from './UserArtistIndexItem';
import GenericMusicIndex from './GenericMusicIndex';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { userArtists, shouldFetchArtists } from '../../selectors/artist_selectors';
import { fetchUserArtists } from '../../actions/artist_actions';
import { setScrollPosition } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    indexItems: userArtists(state),
    itemType: 'album',
    header: "Your Artists",
    background: { background: 'linear-gradient(rgb(18, 18, 18), rgb(7, 7, 7) 85%) fixed' },
    shouldFetchItems: shouldFetchArtists(state.session.currentUser.followIds.artists, state),
    MusicIndex: GenericMusicIndex,
    IndexItem: UserArtistIndexItem
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchItems: () => dispatch(fetchUserArtists()),
  setScrollPosition: pos => dispatch(setScrollPosition(pos))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicPageContainer));
