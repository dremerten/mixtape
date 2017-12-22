import MusicPageContainer from './MusicPageContainer';
import GenericMusicIndex from './GenericMusicIndex';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPlaylists, removePlaylists } from '../../actions/playlist_actions';
import { setScrollPosition } from '../../actions/ui_actions';
import { setHeader } from '../../selectors/DynamicHeaderSelector';

const mapStateToProps = (state, ownProps) => ({
  indexItems: Object.keys(state.entities.playlists.byId)
                     .map(id => state.entities.playlists.byId[id]),
  itemType: 'playlist',
  header: setHeader(),
  background: { background: 'linear-gradient(rgb(43, 64, 110), rgb(4, 6, 11) 85%) fixed' },
  shouldFetchItems: true,
  MusicIndex: GenericMusicIndex
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchItems: () => dispatch(fetchPlaylists({type: 'featured'})),
  removeItems: () => dispatch(removePlaylists()),
  setScrollPosition: pos => dispatch(setScrollPosition(pos))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicPageContainer));
