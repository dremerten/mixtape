import GenericDropDownItem from './GenericDropDownItem';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import clipboard from 'clipboard-polyfill';

const mapStateToProps = (state, ownProps) => {
  return {
    buttonText: "Copy Song Link",
    handleClick: (e) => {
      const songLink = location.origin + '/#/browse/albums/' + ownProps.item.albumId;
      clipboard.writeText(songLink);
    }
  };
};

export default withRouter(connect(mapStateToProps)(GenericDropDownItem));
