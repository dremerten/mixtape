import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import GenericIndexItem from './GenericIndexItem';
import PlayButton from './UserArtistOverlay';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    itemName: ownProps.item.name,
    author: ownProps.item.author,
    loading: state.ui.loading.global,
    imageUrl: ownProps.item.imageUrl,
    id: ownProps.item.id,
    loadingClass: 'playlist-loading circular',
    imageClass: 'playlist-image circular',
    handleClick: () => ownProps.history.push(`/view/artists/${ownProps.item.id}/overview`),
    PlayButton
  };
};

export default withRouter(connect(
  mapStateToProps
)(GenericIndexItem));
