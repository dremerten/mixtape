import MusicPageContainer from './MusicPageContainer';
import GenericMusicIndex from './GenericMusicIndex';
import PlaylistIndexItem from './PlaylistIndexItem';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPlaylists, removePlaylists } from '../../actions/playlist_actions';
import { setScrollPosition } from '../../actions/ui_actions';
import { setHeader } from '../../selectors/DynamicHeaderSelector';
import { shouldFetchPlaylists, staticPlaylists } from '../../selectors/playlist_selector';

const mapStateToProps = (state, ownProps) => {
  return {
    indexItems: staticPlaylists(state),
    itemType: 'playlist',
    header: setHeader(),
    background: { background: 'linear-gradient(rgb(43, 64, 110), rgb(4, 6, 11) 85%) fixed' },
    shouldFetchItems: shouldFetchPlaylists(state.entities.playlists.siteGenerated, state),
    MusicIndex: GenericMusicIndex,
    IndexItem: PlaylistIndexItem
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchItems: () => dispatch(fetchPlaylists({type: 'featured'})),
  removeItems: () => dispatch(removePlaylists()),
  setScrollPosition: pos => dispatch(setScrollPosition(pos))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicPageContainer));
