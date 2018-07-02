import GenericDropDownItem from './GenericDropDownItem';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import clipboard from 'clipboard-polyfill';

const mapStateToProps = () => {
  return {
    buttonText: "Copy Playlist Link",
    handleClick: (e) => {
      clipboard.writeText(location.href);
    }
  };
};

export default withRouter(connect(mapStateToProps)(GenericDropDownItem));
