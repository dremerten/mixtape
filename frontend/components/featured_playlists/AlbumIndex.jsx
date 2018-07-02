import MusicPageContainer from './MusicPageContainer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setScrollPosition } from '../../actions/ui_actions';
import { fetchAlbums, removeAlbums } from '../../actions/album_actions';
import GenericMusicIndex from './GenericMusicIndex';
import AlbumIndexItem from './AlbumIndexItem';

const mapStateToProps = (state, ownProps) => ({
  indexItems: Object.keys(state.entities.albums)
                     .map(id => state.entities.albums[id]),
  itemType: 'album',
  header: "What's Trending",
  background: { background: 'linear-gradient(rgb(15, 138, 115), rgb(1, 13, 11) 85%) fixed' },
  shouldFetchItems: true,
  MusicIndex: GenericMusicIndex,
  IndexItem: AlbumIndexItem
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchItems: () => dispatch(fetchAlbums()),
  removeItems: () => dispatch(removeAlbums()),
  setScrollPosition: pos => dispatch(setScrollPosition(pos))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicPageContainer));
