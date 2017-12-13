import React from 'react';
import UserPlaylistModal from '../modals/UserPlaylistModal';

class GenericDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      isModalOpen: false,
     };

    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  handleCloseModal() {
    this.setState({ isModalOpen: false });
  }

  handleOpenModal() {
    this.setState({ isModalOpen: true });
  }

  render() {
    const className = this.state.clicked ? 'visible' : 'hidden';
    const { isModalOpen } = this.state;

    return(
      <div className={`dropdown-container-${className}`}>
        <ul className='dropdown-list'>
          { this.props.listItems.map((Item, idx) => (
            <Item key={idx} { ...this.props} handleOpenModal={this.handleOpenModal}/>
            ))
          }
        </ul>
        <UserPlaylistModal
          isOpen={isModalOpen}
          handleCloseModal={this.handleCloseModal}
          { ...this.props}
          />
      </div>
    );
  }
}

export default GenericDropDown;
