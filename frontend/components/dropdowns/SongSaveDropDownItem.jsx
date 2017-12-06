import GenericDropDownItem from './GenericDropDownItem';
import { connect } from 'react-redux';
import { saveSong } from '../actions/';

const mapStateToProps = (state, ownProps) => ({
  handleClick: (songId) => dispatch(saveSong(songId)),
  currentUser: state.session.currentUser
});
