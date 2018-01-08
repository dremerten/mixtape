import React from 'react';
import NewPlaylistModal from '../modals/NewPlaylistModal';
import { connect } from 'react-redux';
import { showModal, closeModal } from '../../actions/ui_actions';

class NewPlaylistButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  // componentWillReceiveProps(newProps) {
  //   const { isButtonVisible } = newProps;
  //
  //   if (this.state.isButtonVisible !== isButtonVisible) {
  //     this.setState({ isButtonVisible: true});
  //   }
  // }

  handleCloseModal() {
    this.props.closeModal('newPlaylistModal');
  }

  handleOpenModal() {
    this.props.showModal('newPlaylistModal');
  }

  render() {
    const { isModalOpen, isButtonVisible } = this.props;

    const className = (isButtonVisible ? 'new-playlist' : 'new-playlist-hidden' );
    return(
      <div>
        <button
          className={className}
          onClick={this.handleOpenModal}
          >
          NEW PLAYLIST
        </button>
        <NewPlaylistModal isModalOpen={isModalOpen}  handleCloseModal={this.handleCloseModal} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isModalOpen: Boolean(state.ui.modals.newPlaylistModal.isOpen),
    isButtonVisible: ownProps.isButtonVisible
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  showModal: name => dispatch(showModal(name)),
  closeModal: name => dispatch(closeModal(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPlaylistButton);
