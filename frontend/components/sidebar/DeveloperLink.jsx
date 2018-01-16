import React from 'react';

class DeveloperLink extends React.Component {
  constructor() {
    super();

    this.state = { isOpen: false };

    this.openLinks = this.openLink.bind(this);
  }

  openLink() {

  }

  render() {
    const className = !this.state.isOpen && 'hidden';

    return(
      <ul>
        <a href='https://github.com/dwebster17' target="_blank">Developer Info</a>
        
      </ul>
    );
  }
}

export default DeveloperLink;
