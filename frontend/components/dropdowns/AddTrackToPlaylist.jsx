import GenericDropDownItem from './GenericDropDownItem';
import { connect } from 'react-redux';
import { showModal } from '../../actions/ui_actions';

const mapStateToProps = () => {
  return {
    buttonText: "Add To Playlist",
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClick: () => dispatch(showModal('userPlaylistModal', { trackId: ownProps.item.id }))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenericDropDownItem);
