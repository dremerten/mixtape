import GenericIndexItem from './GenericIndexItem';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    itemName: ownProps.item.title,
    author: ownProps.item.author,
    loading: state.ui.loading,
    imageUrl: ownProps.item.imageUrl,
    id: ownProps.item.id,
    handleClick: () => ownProps.history.push(`/collection/playlists/${ownProps.item.id}`)
  };
};



export default withRouter(connect(
  mapStateToProps
)(GenericIndexItem));
