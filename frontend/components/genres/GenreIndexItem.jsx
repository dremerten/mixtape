import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import GenericIndexItem from '../featured_playlists/GenericIndexItem';
import { fetchGenre, removeGenres } from '../../actions/genre_actions';
import PlayButton from './GenreOverlayItem';

const mapStateToProps = (state, ownProps) => {
  return {
    itemName: ownProps.item.name,
    loading: state.ui.loading.global,
    imageUrl: ownProps.item.imageUrl,
    id: ownProps.item.id,
    loadingClass: 'playlist-loading',
    imageClass: 'playlist-image',
    handleClick: () => ownProps.history.push(`/genres/${ownProps.item.id}`),
    PlayButton
  };
};


export default withRouter(connect(
  mapStateToProps
)(GenericIndexItem));
