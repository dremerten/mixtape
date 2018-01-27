import GenericIndexItem from './GenericIndexItem';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PlayButton from './AlbumItemOverlay';

const mapStateToProps = (state, ownProps) => {
  return {
    itemName: ownProps.item.title,
    author: ownProps.item.author,
    loading: state.ui.loading.albums,
    imageUrl: ownProps.item.imageUrl,
    id: ownProps.item.id,
    loadingClass: 'playlist-loading',
    imageClass: 'playlist-image',
    handleClick: () => ownProps.history.push(`/browse/albums/${ownProps.item.id}`),
    PlayButton
  };
};



export default withRouter(connect(
  mapStateToProps
)(GenericIndexItem));
