import React from 'react';
import MusicPageContainer from '../featured_playlists/MusicPageContainer';
import GenericMusicIndex from '../featured_playlists/GenericMusicIndex';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setScrollPosition } from '../../actions/ui_actions';
import { fetchGenres, removeGenres } from '../../actions/genre_actions';
import GenreIndexItem from './GenreIndexItem';

const mapStateToProps = (state, ownProps) => ({
  indexItems: Object.keys(state.entities.genres)
                    .map(id => state.entities.genres[id]),
  itemType: 'genre',
  header: 'Genres & Moods',
  background: { background: 'linear-gradient(rgb(93, 60, 61), rgb(9, 6, 6) 85%) fixed' },
  shouldFetchItems: true,
  MusicIndex: GenericMusicIndex,
  IndexItem: GenreIndexItem
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchItems: () => dispatch(fetchGenres()),
  removeItems: () => dispatch(removeGenres()),
  setScrollPosition: pos => dispatch(setScrollPosition(pos))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicPageContainer));
