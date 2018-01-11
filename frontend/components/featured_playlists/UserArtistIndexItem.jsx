import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import GenericIndexItem from './GenericIndexItem';

const mapStateToProps = (state, ownProps) => {
  return {
    itemName: ownProps.item.name,
    author: ownProps.item.author,
    loading: state.ui.loading,
    imageUrl: ownProps.item.imageUrl,
    id: ownProps.item.id,
    handleClick: () => ownProps.history.push(`/artists/${ownProps.item.id}/overview`)
  };
};

export default withRouter(connect(
  mapStateToProps
)(GenericIndexItem));
