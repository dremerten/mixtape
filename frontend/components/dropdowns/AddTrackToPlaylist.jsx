import GenericDropDownItem from './GenericDropDownItem';
import { connect } from 'react-redux';
// import { saveSong } from '../actions/track_actions';

const mapStateToProps = (state, ownProps) => ({
  buttonText: "Save Song"
});

// const mapDispatchToProps = dispatch => ({
//   handleClick: songId => dispatch(saveSong(songId))
// });

export default connect(
  mapStateToProps
)(GenericDropDownItem);
