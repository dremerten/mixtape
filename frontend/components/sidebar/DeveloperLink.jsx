import React from 'react';
import DeveloperTab from './DeveloperTab';

class DeveloperLink extends React.Component {
  constructor() {
    super();

    this.state = { isOpen: false };

    this.toggleInfo = this.toggleInfo.bind(this);
  }

  toggleInfo() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const className = !this.state.isOpen && 'hidden';

    return(
      <ul>
        <div onClick={this.toggleInfo} className='dev-button'>Developer Info</div>
        <DeveloperTab toggleInfo={this.toggleInfo} isOpen={this.state.isOpen}/>
      </ul>
    );
  }
}

export default DeveloperLink;
