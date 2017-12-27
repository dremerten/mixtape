import MusicPageContainer from './MusicPageContainer';
import GenericMusicIndex from './GenericMusicIndex';
import UserPlaylistIndexItem from './UserPlaylistIndexItem';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPlaylists, removePlaylists } from '../../actions/playlist_actions';
import { setScrollPosition } from '../../actions/ui_actions';
import { setHeader } from '../../selectors/DynamicHeaderSelector';

const mapStateToProps = (state, ownProps) => ({
  indexItems: Object.keys(state.entities.playlists.byId)
                     .map(id => state.entities.playlists.byId[id]),
  itemType: 'userPlaylist',
  header: "Your Playlists",
  background: { background: 'linear-gradient(rgb(142, 11, 61), rgb(14, 1, 6) 85%)' },
  shouldFetchItems: true,
  MusicIndex: GenericMusicIndex,
  IndexItem: UserPlaylistIndexItem
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchItems: () => dispatch(fetchPlaylists()),
  removeItems: () => dispatch(removePlaylists()),
  setScrollPosition: pos => dispatch(setScrollPosition(pos))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicPageContainer));
