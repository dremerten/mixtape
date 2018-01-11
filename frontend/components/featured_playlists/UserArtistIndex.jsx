import MusicPageContainer from './MusicPageContainer';
import UserArtistIndexItem from './UserArtistIndexItem';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { userArtists, shouldFetchArtists } from '../../selectors/album_selectors';
import { fetchUserArtists } from '../../selectors/artist_selectors';

const mapStateToProps = (state, ownProps) => ({
  indexItems: userAlbums(state),
  itemType: 'album',
  header: "Your Artists",
  background: { background: 'linear-gradient(rgb(18, 18, 18), rgb(7, 7, 7) 85%) fixed' },
  shouldFetchItems: shouldFetchArtists(state.session.currentUser.followIds.albums, state),
  MusicIndex: GenericMusicIndex,
  IndexItem: UserArtistIndexItem
});

const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicPageContainer));
