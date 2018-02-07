import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import GenericIndexItem from '../featured_playlists/GenericIndexItem';

const mapStateToProps = (state, ownProps) => {

  return {
    itemName: ownProps.item.name,
    author: ownProps.item.author,
    loading: state.ui.loading.global,
    imageUrl: ownProps.item.imageUrl,
    id: ownProps.item.id,
    loadingClass: 'playlist-loading circular',
    imageClass: 'playlist-image circular',
    handleClick: () => ownProps.history.push(`/users/${ownProps.item.id}`),
    PlayButton: () => null
  };
};

export default withRouter(connect(
  mapStateToProps
)(GenericIndexItem));
