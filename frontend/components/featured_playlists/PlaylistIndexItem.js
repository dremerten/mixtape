import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import GenericIndexItem from './GenericIndexItem';
import PlayButton from './PlaylistItemOverlay';

const mapStateToProps = (state, ownProps) => {
  return {
    itemName: ownProps.item.name,
    loading: state.ui.loading.global,
    imageUrl: ownProps.item.imageUrl,
    id: ownProps.item.id,
    loadingClass: 'playlist-loading',
    imageClass: 'playlist-image',
    handleClick: () => ownProps.history.push(`/browse/playlists/${ownProps.item.id}`),
    PlayButton
  };
};

export default withRouter(connect(
  mapStateToProps
)(GenericIndexItem));
