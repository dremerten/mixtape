import React from 'react';
import NewPlaylistModal from '../modals/NewPlaylistModal';

class NewPlaylistButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      isButtonVisible: props.isButtonVisible
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentWillReceiveProps(newProps) {
    const { isButtonVisible } = newProps;

    if (this.state.isButtonVisible !== isButtonVisible) {
      this.setState({ isButtonVisible: true});
    }
  }

  handleCloseModal() {
    this.setState({ isModalOpen: false });
  }

  handleOpenModal() {
    this.setState({ isModalOpen: true });
  }

  render() {
    const { isModalOpen, isButtonVisible } = this.state;
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

export default NewPlaylistButton;
